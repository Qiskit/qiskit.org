import fs from "fs/promises";
import path from "path";

const mockBasePath =
  process.env.MOCK_BASE_PATH || path.join(__dirname, "content");
const contentBasePath = path.join(__dirname, "..", "..", "content");

export async function generateMocks() {
  await copyFiles(mockBasePath, contentBasePath);
}

/**
 * This method copies all the files from sourceBasePath to targetBasePath
 *
 * @param sourceBasePath
 * @param targetBasePath
 */
async function copyFiles(
  sourceBasePath: string,
  targetBasePath: string,
): Promise<void> {
  const dirContent = await fs.readdir(sourceBasePath, { withFileTypes: true });

  for (const content of dirContent) {
    const currentTargetPath = path.join(targetBasePath, content.name);

    if (content.isFile()) {
      const file = path.join(sourceBasePath, content.name);
      await fs.copyFile(file, currentTargetPath);
    } else {
      try {
        await fs.access(currentTargetPath);
      } catch (e) {
        await fs.mkdir(currentTargetPath);
      }

      const currentBasePath = path.join(sourceBasePath, content.name);
      await copyFiles(currentBasePath, currentTargetPath);
    }
  }
}
