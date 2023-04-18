import * as fs from "fs/promises";
import * as path from "path";
import { describe, test } from "vitest";

describe("list", () => {
  test("at least one content file exists", async () => {
    const contentFilesPath = "content/providers/list";

    const resolvedContentFilesPath = path.resolve(
      process.cwd(),
      contentFilesPath
    );

    const contentFiles = await fs.readdir(resolvedContentFilesPath);

    if (contentFiles.length === 0) {
      throw new Error(`No content files found in ${contentFilesPath}`);
    }
  });
});

describe("quick-start", () => {
  test("content file exists", async () => {
    const contentFilePath = "content/providers/quick-start/data.yaml";

    const resolvedContentFilePath = path.resolve(
      process.cwd(),
      contentFilePath
    );

    try {
      await fs.access(resolvedContentFilePath);
    } catch (err) {
      throw new Error(`Required file ${contentFilePath} does not exist`);
    }
  });
});
