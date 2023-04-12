import Airtable from "airtable";
import { Advocate, AdvocatesWorldRegion } from "../types/advocates";
import {
  AirtableRecords,
  getImageUrl,
  findImageAttachment,
} from "./airtable-conversion-utils";
// TODO: Understand why this import works with '../' and not with '~/'

const RECORD_FIELDS_IDS = Object.freeze({
  name: "fldkG2SqdvCKDUhCH",
  city: "fldoCJjrveX4J9TV1",
  country: "fldZcHGtjEK7fPyAT",
  region: "fldG80tPB8heLWxBP",
  image: "fldawRemxDatqlfLo",
  slackId: "fld5aUddy1M4YRHTn",
  slackUsername: "fldY1nP63OKVsdvRC",
} as const);

const AIRTABLE_BASE_ID = "app8koO4BZifGFhCV";

class AdvocatesAirtableRecords extends AirtableRecords {
  constructor(apiKey: string, recordFields?: Record<string, any>) {
    super(
      apiKey,
      AIRTABLE_BASE_ID,
      "Advocates",
      "For website",
      undefined,
      recordFields
    );
  }

  async fetchAdvocates(): Promise<Advocate[]> {
    if (!this.recordFields) {
      this.recordFields = await this.getAllFieldNames(RECORD_FIELDS_IDS);
    }

    const { slackId } = this.recordFields;
    const advocates: Advocate[] = [];
    const base = new Airtable({ apiKey: this.apiKey }).base(AIRTABLE_BASE_ID);

    await base("Advocates")
      .select({
        fields: Object.values(this.recordFields),
        filterByFormula: `AND({${slackId}})`,
        sort: [{ field: this.recordFields.name, direction: "asc" }],
      })
      .eachPage(async (records, nextPage) => {
        for (const record of records) {
          this.id = record.id;
          const advocate = this.convertToAdvocate(record);
          advocates.push(await advocate);
        }
        nextPage();
      });
    return Promise.resolve(advocates);
  }

  async convertToAdvocate(record: any): Promise<Advocate> {
    const advocate = {
      name: this.getName(record),
      image: await this.getImage(record),
      region: this.getRegion(record),
      city: this.getCity(record),
      country: this.getCountry(record),
      slackId: this.getSlackId(record),
      slackUsername: this.getSlackUsername(record),
    };
    return advocate;
  }

  public getName(record: any): string {
    return record.get(this.recordFields!.name);
  }

  public async getImage(record: any): Promise<string> {
    const fallbackImage = "/images/advocates/no-advocate-photo.png";
    const attachments = record.get(this.recordFields!.image);
    const imageAttachment = attachments && findImageAttachment(attachments);
    const imageUrl = imageAttachment && getImageUrl(imageAttachment);

    if (!imageUrl) {
      return fallbackImage;
    }

    const imagePublicPath = `/images/advocates/downloaded/${this.id}.jpg`;

    return await this.storeImage(imageUrl, `public/${imagePublicPath}`)
      .then(() => imagePublicPath)
      .catch(() => fallbackImage);
  }

  public getCity(record: any): string {
    return record.get(this.recordFields!.city);
  }

  public getCountry(record: any): string {
    return record.get(this.recordFields!.country);
  }

  public getRegion(record: any): AdvocatesWorldRegion {
    return record.get(this.recordFields!.region);
  }

  public getSlackId(record: any): string {
    return record.get(this.recordFields!.slackId);
  }

  public getSlackUsername(record: any): string {
    return record.get(this.recordFields!.slackUsername);
  }
}

export default AdvocatesAirtableRecords;
