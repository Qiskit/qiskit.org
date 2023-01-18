import fs from 'fs'
import util from 'util'

import EventsAirtableAPI from './event-conversion-utils'

export default async function (apiKey: string, outputFolder: string) {
  const communityEventsAirtableAPI = new EventsAirtableAPI(apiKey, 'Add to Event Site')
  const upcomingCommunityEvents = await communityEventsAirtableAPI.fetchCommunityEvents(31)
  const pastCommunityEvents = await communityEventsAirtableAPI.fetchCommunityEvents(-31)

  const seminarSeriesEventsAirtableAPI = new EventsAirtableAPI(apiKey, 'Seminar Series ONLY')
  const upcomingSeminarSeriesEvents = await seminarSeriesEventsAirtableAPI.fetchSeminarSeriesEvents(31)
  const pastSeminarSeriesEvents = await seminarSeriesEventsAirtableAPI.fetchSeminarSeriesEvents(-62)

  const writeFile = util.promisify(fs.writeFile)

  const eventsAndOutputFilename = [
    { events: upcomingCommunityEvents, outputFilename: 'upcoming-community-events.json' },
    { events: pastCommunityEvents, outputFilename: 'past-community-events.json' },
    { events: upcomingSeminarSeriesEvents, outputFilename: 'upcoming-seminar-series-events.json' },
    { events: pastSeminarSeriesEvents, outputFilename: 'past-seminar-series-events.json' }
  ]

  await Promise.all(eventsAndOutputFilename.map(curr => writeFile(`${outputFolder}/${curr.outputFilename}`, JSON.stringify(curr.events, null, 2))))
}
