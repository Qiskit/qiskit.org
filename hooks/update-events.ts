import fs from 'fs'
import util from 'util'

import { fetchCommunityEvents } from './event-conversion-utils'

export default async function (apiKey, outputFolder: string) {
  const futureCommunityEvents = await fetchCommunityEvents(apiKey, { days: 31 })
  const pastCommunityEvents = await fetchCommunityEvents(apiKey, { days: -31 })

  const writeFile = util.promisify(fs.writeFile)
  const writeFutureEvents = writeFile(`${outputFolder}/future-community-events.json`, JSON.stringify(futureCommunityEvents, null, 2))
  const writePastEvents = writeFile(`${outputFolder}/past-community-events.json`, JSON.stringify(pastCommunityEvents, null, 2))

  await Promise.all([writeFutureEvents, writePastEvents])
}
