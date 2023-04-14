import * as fs from "fs/promises";
import * as path from "path";
import { describe, test } from "vitest";

describe("providers", () => {
  test("content file exists", async () => {
    const contentFilePath = "content/providers/quick-start.yaml";

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
