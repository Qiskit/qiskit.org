import EventsAirtableRecords from "./event-conversion-utils";
import { writeJSONToFile } from "./utils/conversion-utils";

export default async function (apiKey: string, outputFolder: string) {
  const communityEventsAirtableRecords = new EventsAirtableRecords(
    apiKey,
    "Add to Event Site",
  );
  const upcomingCommunityEvents =
    await communityEventsAirtableRecords.fetchCommunityEvents(62);
  const pastCommunityEvents =
    await communityEventsAirtableRecords.fetchCommunityEvents(-31);

  const seminarSeriesEventsAirtableRecords = new EventsAirtableRecords(
    apiKey,
    "Seminar Series ONLY",
  );
  const upcomingSeminarSeriesEvents =
    await seminarSeriesEventsAirtableRecords.fetchSeminarSeriesEvents(31);
  const pastSeminarSeriesEvents =
    await seminarSeriesEventsAirtableRecords.fetchSeminarSeriesEvents(-62);

  const eventsAndOutputFilename = [
    {
      events: upcomingCommunityEvents,
      outputFilename: "upcoming-community-events.json",
    },
    {
      events: pastCommunityEvents,
      outputFilename: "past-community-events.json",
    },
    {
      events: upcomingSeminarSeriesEvents,
      outputFilename: "upcoming-seminar-series-events.json",
    },
    {
      events: pastSeminarSeriesEvents,
      outputFilename: "past-seminar-series-events.json",
    },
  ];

  await Promise.all(
    eventsAndOutputFilename.map((curr) =>
      writeJSONToFile(outputFolder, curr.outputFilename, curr.events),
    ),
  );
}
