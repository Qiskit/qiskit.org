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

class AdvocateAirtableAPI {
  private _airtableBaseId = 'app8koO4BZifGFhCV'
  private _apiKey: string
  private _recordFields?: Record<string, any>

  constructor (apiKey: string, recordFields?: Record<string, any>) {
    this._apiKey = apiKey
    this._recordFields = recordFields
  }

  async fetchAdvocates (): Promise<Advocate[]> {
    if (!this._recordFields) {
      this._recordFields = await getAllFieldNames(this._apiKey, this._airtableBaseId, 'Advocates', 'For website', RECORD_FIELDS_IDS)
    }

    const { slackId } = this._recordFields
    const advocates: Advocate[] = []
    const base = new Airtable({ apiKey: this._apiKey }).base(this._airtableBaseId)

    await base('Advocates').select({
      fields: Object.values(this._recordFields),
      filterByFormula: `AND({${slackId}})`,
      sort: [{ field: this._recordFields.name, direction: 'asc' }]
    }).eachPage((records, nextPage) => {
      for (const record of records) {
        const advocate = this.convertToAdvocate(record)
        advocates.push(advocate)
      }
      nextPage()
    })
    return Promise.resolve(advocates)
  }

  convertToAdvocate (record: any): Advocate {
    return {
      name: this.getName(record),
      image: this.getImage(record),
      region: this.getRegion(record),
      city: this.getCity(record),
      country: this.getCountry(record),
      slackId: this.getSlackId(record),
      slackUsername: this.getSlackUsername(record)
    }
  }

  public getName (record: any): string {
    return record.get(this._recordFields!.name)
  }

  public getImage (record: any): string {
    const fallbackImage = '/images/advocates/no-advocate-photo.png'
    const attachments = record.get(this._recordFields!.image)
    const imageAttachment = attachments && findImageAttachment(attachments)
    const imageUrl = imageAttachment && getImageUrl(imageAttachment)
    return imageUrl || fallbackImage
  }

  public getCity (record: any): string {
    return record.get(this._recordFields!.city)
  }

  public getCountry (record: any): string {
    return record.get(this._recordFields!.country)
  }

  public getRegion (record: any): AdvocatesWorldRegion {
    return record.get(this._recordFields!.region)
  }

  public getSlackId (record: any): string {
    return record.get(this._recordFields!.slackId)
  }

  public getSlackUsername (record: any): string {
    return record.get(this._recordFields!.slackUsername)
  }
}

export default AdvocateAirtableAPI
