import { fetchMembers, fetchTiers } from "./ecosystem-conversion-utils";
import { writeJSONToFile } from "./utils/conversion-utils";

export default async function (outputFolder: string) {
  const members = await fetchMembers();
  const tiers = await fetchTiers();

  await writeJSONToFile(outputFolder, "members.json", members);
  await writeJSONToFile(outputFolder, "tiers.json", tiers);
}
