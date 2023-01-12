import Airtable from 'airtable'

// TODO: Understand why this import works with '../' and not with '~/'
import {
  Advocate,
  AdvocatesWorldRegion
} from '../store/advocates'

import {
  getAllFieldNames,
  getImageUrl,
  findImageAttachment
} from './airtable-conversion-utils'

const RECORD_FIELDS_IDS = Object.freeze({
  name: 'fldkG2SqdvCKDUhCH',
  city: 'fldoCJjrveX4J9TV1',
  country: 'fldZcHGtjEK7fPyAT',
  region: 'fldG80tPB8heLWxBP',
  image: 'fldawRemxDatqlfLo',
  slackId: 'fld5aUddy1M4YRHTn',
  slackUsername: 'fldY1nP63OKVsdvRC'
} as const)

let RECORD_FIELDS: Record<string, any>

const airtableBaseId = 'app8koO4BZifGFhCV'

async function fetchAdvocates (apiKey: string): Promise<Advocate[]> {
  if (!RECORD_FIELDS) {
    RECORD_FIELDS = await getAllFieldNames(apiKey, airtableBaseId, 'Advocates', 'For website', RECORD_FIELDS_IDS)
  }

  const { slackId } = RECORD_FIELDS
  const advocates: Advocate[] = []
  const base = new Airtable({ apiKey }).base(airtableBaseId)
  await base('Advocates').select({
    fields: Object.values(RECORD_FIELDS),
    filterByFormula: `AND({${slackId}})`,
    sort: [{ field: RECORD_FIELDS.name, direction: 'asc' }]
  }).eachPage((records, nextPage) => {
    for (const record of records) {
      const advocate = convertToAdvocate(record)
      advocates.push(advocate)
    }
    nextPage()
  })
  return Promise.resolve(advocates)
}

function convertToAdvocate (record: any): Advocate {
  return {
    name: getName(record),
    image: getImage(record),
    region: getRegion(record),
    city: getCity(record),
    country: getCountry(record),
    slackId: getSlackId(record),
    slackUsername: getSlackUsername(record)
  }
}

function getName (record: any): string {
  return record.get(RECORD_FIELDS.name)
}

function getImage (record: any): string {
  const fallbackImage = '/images/advocates/no-advocate-photo.png'
  const attachments = record.get(RECORD_FIELDS.image)
  const imageAttachment = attachments && findImageAttachment(attachments)
  const imageUrl = imageAttachment && getImageUrl(imageAttachment)
  return imageUrl || fallbackImage
}

function getCity (record: any): string {
  return record.get(RECORD_FIELDS.city)
}

function getCountry (record: any): string {
  return record.get(RECORD_FIELDS.country)
}

function getRegion (record: any): AdvocatesWorldRegion {
  return record.get(RECORD_FIELDS.region)
}

function getSlackId (record: any): string {
  return record.get(RECORD_FIELDS.slackId)
}

function getSlackUsername (record: any): string {
  return record.get(RECORD_FIELDS.slackUsername)
}

export {
  fetchAdvocates,
  convertToAdvocate,
  getName,
  getImage,
  getCity,
  getCountry,
  getRegion,
  getSlackId,
  getSlackUsername
}
