import Airtable from 'airtable'

// TODO: Understand why this import works with '../' and not with '~/'
import {
  Advocate,
  AdvocatesWorldRegion
} from '../store/advocates'

import {
  getFieldName,
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

const RECORD_FIELDS: Record<string, string> = {
  name: '',
  city: '',
  country: '',
  region: '',
  image: '',
  slackId: '',
  slackUsername: ''
} as const

const airtableBaseId = 'app8koO4BZifGFhCV'

/**
 * Set the Airtable field names for all the fields defined in RECORD_FIELDS_IDS
 * and store them in RECORD_FIELDS.
 *
 * @param apiKey Airtable API key
 * @param tableId Airtable table ID
 * @param view Airtable view
 * @returns Promise<Record<string, string>> RECORD_FIELDS
 */
function setAllFieldNames (
  apiKey: string,
  tableId: string,
  view: string
) : Promise<Record<string, string | null>> {
  const fieldNamesPromises = Object.entries(RECORD_FIELDS_IDS).map(([field, fieldId]) => {
    return getFieldName(apiKey, airtableBaseId, tableId, view, fieldId)
      .then((fieldName) => {
        if (fieldName) {
          RECORD_FIELDS[field] = fieldName
          return { [field]: fieldName }
        } else {
          console.warn(`Field name not found for field ID ${fieldId}`)
        }
      })
      .catch((error) => {
        console.error(`Error in setAllFieldNames: ${error}`)
        return { [field]: null }
      })
  })

  return Promise.all(fieldNamesPromises)
    .then((results) => {
      return results.reduce((acc, result) => {
        return { ...acc, ...result }
      }, {} as Record<string, string | null>)
    })
}

async function fetchAdvocates (apiKey: string): Promise<Advocate[]> {
  await setAllFieldNames(apiKey, 'Advocates', 'For website')
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
  RECORD_FIELDS,
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
