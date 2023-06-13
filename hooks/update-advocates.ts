import AdvocatesAirtableRecords from "./advocate-conversion-utils";
import { writeJSONToFile } from "./utils/conversion-utils";

export default async function (apiKey: any, outputFolder: string) {
  const advocatesAirtableRecords = new AdvocatesAirtableRecords(apiKey);
  const advocates = await advocatesAirtableRecords.fetchAdvocates();

  await writeJSONToFile(outputFolder, "advocates.json", advocates);
}
