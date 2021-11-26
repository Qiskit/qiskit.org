import fs from 'fs'
import util from 'util'

import { fetchMembers } from './ecosystem-conversion-utils'

export default async function (outputFolder: string) {
  const members = await fetchMembers()

  const writeFile = util.promisify(fs.writeFile)
  await writeFile(`${outputFolder}/members.json`, JSON.stringify(members, null, 2))
}
