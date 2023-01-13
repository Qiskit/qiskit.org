import fs from 'fs'
import util from 'util'

import AdvocateAirtableAPI from './advocate-conversion-utils'

export default async function (apiKey: any, outputFolder: string) {
  const advocateAirtableAPI = new AdvocateAirtableAPI(apiKey)
  const advocates = await advocateAirtableAPI.fetchAdvocates()

  const writeFile = util.promisify(fs.writeFile)
  await writeFile(`${outputFolder}/advocates.json`, JSON.stringify(advocates, null, 2))
}
