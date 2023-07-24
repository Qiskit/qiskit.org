import fs from "fs";
import path from "path";

export async function writeJSONToFile(
  outputFolder: string,
  filename: string,
  data: any
) {
  const folderExists = await exists(outputFolder);
  if (!folderExists) {
    try {
      await fs.promises.mkdir(outputFolder);
    } catch (e) {
      if (!(e as any).message?.includes("file already exists, mkdir")) {
        throw e;
      }
    }
  }

  const filePath = path.join(outputFolder, filename);
  await fs.promises.writeFile(filePath, JSON.stringify(data, null, 2));
}

async function exists(folder: string) {
  try {
    await fs.promises.stat(folder);
    return true;
  } catch {
    return false;
  }
}
