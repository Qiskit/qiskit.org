import Airtable from 'airtable'

// TODO: Understand why this import works with '../' and not with '~/'
import {
  Advocate,
  AdvocatesWorldRegion
} from '../store/advocates'

import {
  AirtableRecords,
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

const AIRTABLE_BASE_ID = 'app8koO4BZifGFhCV'

class AdvocatesAirtableRecords extends AirtableRecords {
  private _recordFields?: Record<string, any>

  constructor (apiKey: string, recordFields?: Record<string, any>) {
    super(apiKey, AIRTABLE_BASE_ID, 'Advocates', 'For website')
    this._recordFields = recordFields
  }

  async fetchAdvocates (): Promise<Advocate[]> {
    if (!this._recordFields) {
      this._recordFields = await this.getAllFieldNames(RECORD_FIELDS_IDS)
    }

    const { slackId } = this._recordFields
    const advocates: Advocate[] = []
    const base = new Airtable({ apiKey: this.apiKey }).base(AIRTABLE_BASE_ID)

    await base('Advocates').select({
      fields: Object.values(this._recordFields),
      filterByFormula: `AND({${slackId}})`,
      sort: [{ field: this._recordFields.name, direction: 'asc' }]
    }).eachPage(async (records, nextPage) => {
      for (const record of records) {
        this.id = record.id
        const advocate = this.convertToAdvocate(record)
        advocates.push(await advocate)
      }
      nextPage()
    })
    return Promise.resolve(advocates)
  }

  async convertToAdvocate (record: any): Promise<Advocate> {
    const advocate = {
      name: this.getName(record),
      image: await this.getImage(record),
      region: this.getRegion(record),
      city: this.getCity(record),
      country: this.getCountry(record),
      slackId: this.getSlackId(record),
      slackUsername: this.getSlackUsername(record)
    }
    return advocate
  }

  public getName (record: any): string {
    return record.get(this._recordFields!.name)
  }

  public async getImage (record: any): Promise<string> {
    const fallbackImage = '/images/advocates/no-advocate-photo.png'
    const attachments = record.get(this._recordFields!.image)
    const imageAttachment = attachments && findImageAttachment(attachments)
    const imageUrl = imageAttachment && getImageUrl(imageAttachment)

    if (!imageUrl) {
      return fallbackImage
    }

    const imageName = await this.storeImage(imageUrl, this.id, 'images/advocates/downloaded')
    return imageName
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

export default AdvocatesAirtableRecords
