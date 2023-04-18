import * as fs from "fs/promises";
import * as path from "path";
import { describe, test } from "vitest";
import { parse } from "yaml";
import { ProvidersSection } from "~/types/providers";

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

  test("content files are valid", async () => {
    const contentFilesPath = "content/providers/list";

    const resolvedContentFilesPath = path.resolve(
      process.cwd(),
      contentFilesPath
    );

    const contentFiles = await fs.readdir(resolvedContentFilesPath);

    for (const contentFile of contentFiles) {
      const resolvedContentFilePath = path.resolve(
        resolvedContentFilesPath,
        contentFile
      );

      const contentFileContent = await fs.readFile(
        resolvedContentFilePath,
        "utf-8"
      );

      const parsedContent: ProvidersSection[] = parse(contentFileContent);

      if (typeof parsedContent !== "object") {
        throw new TypeError(`Content file ${contentFile} is not valid`);
      }

      type KeysOfProvidersSection = keyof ProvidersSection;

      const expectedProperties: KeysOfProvidersSection[] = [
        "id",
        "title",
        "description",
        "providers",
      ];

      const parsedContentProperties = Object.keys(parsedContent);

      for (const expectedProperty of expectedProperties) {
        if (!parsedContentProperties.includes(expectedProperty)) {
          throw new Error(
            `Content file ${contentFile} is missing the ${expectedProperty} property`
          );
        }
      }
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
