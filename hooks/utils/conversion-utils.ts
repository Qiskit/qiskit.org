import fs from "fs";
import util from "util";

const writeFile = util.promisify(fs.writeFile);

export async function writeJSONToFile(
  outputFolder: string,
  filename: string,
  data: any
) {
  await writeFile(`${outputFolder}/${filename}`, JSON.stringify(data, null, 2));
}
