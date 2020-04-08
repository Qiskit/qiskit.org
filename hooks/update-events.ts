import fs from 'fs'
import util from 'util'

import { fetchCommunityEvents } from './event-conversion-utils'

export default async function (apiKey, outputFolder: string) {
  const upcomingCommunityEvents = await fetchCommunityEvents(apiKey, { days: 31 })
  const pastCommunityEvents = await fetchCommunityEvents(apiKey, { days: -31 })

  const writeFile = util.promisify(fs.writeFile)
  const writeUpcomingEvents = writeFile(`${outputFolder}/upcoming-community-events.json`, JSON.stringify(upcomingCommunityEvents, null, 2))
  const writePastEvents = writeFile(`${outputFolder}/past-community-events.json`, JSON.stringify(pastCommunityEvents, null, 2))

  await Promise.all([writeUpcomingEvents, writePastEvents])
}
