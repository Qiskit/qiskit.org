import fs from "fs";
import util from "util";

import { fetchMembers, fetchTiers } from "./ecosystem-conversion-utils";

export default async function (outputFolder: string) {
  const members = await fetchMembers();
  const tiers = await fetchTiers();

  const writeFile = util.promisify(fs.writeFile);
  await writeFile(
    `${outputFolder}/members.json`,
    JSON.stringify(members, null, 2)
  );
  await writeFile(`${outputFolder}/tiers.json`, JSON.stringify(tiers, null, 2));
}
