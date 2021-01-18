import fs from 'fs'
import util from 'util'

import { fetchCommunityEvents, fetchSeminarSeriesEvents } from './event-conversion-utils'

export default async function (apiKey: any, outputFolder: string) {
  const upcomingCommunityEvents = await fetchCommunityEvents(apiKey, { days: 31 })
  const pastCommunityEvents = await fetchCommunityEvents(apiKey, { days: -31 })

  const upcomingSeminarSeriesEvents = await fetchSeminarSeriesEvents(apiKey, { days: 31 })
  const pastSeminarSeriesEvents = await fetchSeminarSeriesEvents(apiKey, { days: -31 })
  const nextSeminarSeriesEvent = upcomingSeminarSeriesEvents[0]

  const writeFile = util.promisify(fs.writeFile)

  const writeUpcomingEvents = writeFile(`${outputFolder}/upcoming-community-events.json`, JSON.stringify(upcomingCommunityEvents, null, 2))
  const writePastEvents = writeFile(`${outputFolder}/past-community-events.json`, JSON.stringify(pastCommunityEvents, null, 2))

  const writeUpcomingSeminarSeriesEvents = writeFile(`${outputFolder}/upcoming-seminar-series-events.json`, JSON.stringify(upcomingSeminarSeriesEvents, null, 2))
  const writePastSeminarSeriesEvents = writeFile(`${outputFolder}/past-seminar-series-events.json`, JSON.stringify(pastSeminarSeriesEvents, null, 2))
  const writeNextSeminarSeriesEvents = writeFile(`${outputFolder}/next-seminar-series-event.json`, JSON.stringify(nextSeminarSeriesEvent, null, 2))

  await Promise.all([
    writeUpcomingEvents,
    writePastEvents,
    writeUpcomingSeminarSeriesEvents,
    writePastSeminarSeriesEvents,
    writeNextSeminarSeriesEvents
  ])
}
