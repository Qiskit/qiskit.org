import fs from "fs";
import path from "path";

export async function writeJSONToFile(
  outputFolder: string,
  filename: string,
  data: any
) {
  const folderExists = await exists(outputFolder);
  if (!folderExists) {
    await fs.promises.mkdir(outputFolder);
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
