import FallFestExtensionEventAirtableRecords from "./fall-fest-extension-event-conversion.utils";
import FallFestPartnerEventAirtableRecords from "./fall-fest-partner-event-conversion.utils";
import { writeJSONToFile } from "./utils/conversion-utils";

export default async function (apiKey: string, outputFolder: string) {
  const extensionEventsAirtableRecords =
    new FallFestExtensionEventAirtableRecords(apiKey, "Universities");
  const fallFestExtensionEvents =
    await extensionEventsAirtableRecords.fetchExtensionEvents();

  const partnerEventsAirtableRecords = new FallFestPartnerEventAirtableRecords(
    apiKey,
    "Universities"
  );
  const fallFestPartnerEvents =
    await partnerEventsAirtableRecords.fetchPartnerEvents();

  const fallFestEventsOutputAndFilename = [
    {
      events: fallFestExtensionEvents,
      outputFilename: "fall-fest-extension-events.json",
    },
    {
      events: fallFestPartnerEvents,
      outputFilename: "fall-fest-partner-events.json",
    },
  ];

  await Promise.all(
    fallFestEventsOutputAndFilename.map((curr) =>
      writeJSONToFile(outputFolder, curr.outputFilename, curr.events)
    )
  );
}
