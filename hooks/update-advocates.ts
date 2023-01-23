import fs from 'fs'
import util from 'util'

import AdvocatesAirtableRecords from './advocate-conversion-utils'

export default async function (apiKey: any, outputFolder: string) {
  const advocatesAirtableRecords = new AdvocatesAirtableRecords(apiKey)
  const advocates = await advocatesAirtableRecords.fetchAdvocates()

  const writeFile = util.promisify(fs.writeFile)
  await writeFile(`${outputFolder}/advocates.json`, JSON.stringify(advocates, null, 2))
}
