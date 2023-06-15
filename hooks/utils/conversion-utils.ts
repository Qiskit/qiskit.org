import fs from "fs";
import util from "util";

const writeFile = util.promisify(fs.writeFile);
const mkdir = util.promisify(fs.mkdir);

export async function writeJSONToFile(
  outputFolder: string,
  filename: string,
  data: any
) {
  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
  }
  await writeFile(`${outputFolder}/${filename}`, JSON.stringify(data, null, 2));
}
