import fs from 'fs'
import util from 'util'

import { fetchCommunityEvents, fetchSeminarSeriesEvents } from './event-conversion-utils'

export default async function (apiKey: any, outputFolder: string) {
  const upcomingCommunityEvents = await fetchCommunityEvents(apiKey, { days: 31 })
  const pastCommunityEvents = await fetchCommunityEvents(apiKey, { days: -31 })

  const upcomingSeminarSeriesEvents = await fetchSeminarSeriesEvents(apiKey, { days: 31 })
  const pastSeminarSeriesEvents = await fetchSeminarSeriesEvents(apiKey, { days: -62 })
  const nextSeminarSeriesEvent = upcomingSeminarSeriesEvents[0] || {}

  const writeFile = util.promisify(fs.writeFile)

  const eventsAndOutputFilename = [
    { events: upcomingCommunityEvents, outputFilename: 'upcoming-community-events.json' },
    { events: pastCommunityEvents, outputFilename: 'past-community-events.json' },
    { events: upcomingSeminarSeriesEvents, outputFilename: 'upcoming-seminar-series-events.json' },
    { events: pastSeminarSeriesEvents, outputFilename: 'past-seminar-series-events.json' },
    { events: nextSeminarSeriesEvent, outputFilename: 'next-seminar-series-event.json' }
  ]

  await Promise.all(eventsAndOutputFilename.map(curr => writeFile(`${outputFolder}/${curr.outputFilename}`, JSON.stringify(curr.events, null, 2))))
}
