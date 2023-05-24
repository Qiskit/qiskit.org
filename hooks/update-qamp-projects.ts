import fs from "fs";
import util from "util";

import QampProjectsAirtableRecords from "./qamp-projects-conversion-utils";

export default async function (apiKey: string, outputFolder: string) {
  const qampProjectsAirtableRecords = new QampProjectsAirtableRecords(apiKey);
  const qampProjects = await qampProjectsAirtableRecords.fetchProjects();

  const writeFile = util.promisify(fs.writeFile);
  await writeFile(
    `${outputFolder}/qamp-projects.json`,
    JSON.stringify(qampProjects, null, 2)
  );
}
