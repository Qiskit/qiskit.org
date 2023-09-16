import Airtable from "airtable";
import {
  AirtableRecords,
  getImageUrl,
  findImageAttachment,
} from "./airtable-conversion-utils";
import { FallFestPartnerEvent } from "types/fall-fest";

export const RECORD_FIELDS_IDS = Object.freeze({
  university: "fld7dWQ6pkQHYg2kj",
  location: "fldoZ4E5pqOxartJj",
  startDate: "fldf9c8jHEJ7GGbUA",
  endDate: "fldWeeg2OkTS26lNI",
  type: "fld5T3Gd8Ti576bry",
  link: "fldscZgANb59Ued8M",
  image: "fld1tyBDGz4o67y1a",
} as const);

const AIRTABLE_BASE_ID = "applCQ71D4Jkgn2Xy";
class FallFestPartnerEventAirtableRecords extends AirtableRecords {
  constructor(
    apiKey: string,
    view: string,
    recordFields?: Record<string, any>
  ) {
    super(
      apiKey,
      AIRTABLE_BASE_ID,
      "Partner Website",
      view,
      undefined,
      recordFields
    );
    this.airtableBase = new Airtable({ apiKey: this.apiKey }).base(
      AIRTABLE_BASE_ID
    );
  }

  /**
   * Fetch the Partner events from Airtable, convert them to the
   * FallFestPartnerEvent type, and return them
   * @returns The Fall Fest partner events.
   */
  async fetchPartnerEvents(): Promise<FallFestPartnerEvent[]> {
    if (!this.recordFields) {
      this.recordFields = await this.getAllFieldNames(RECORD_FIELDS_IDS);
    }

    const partnerEvents: FallFestPartnerEvent[] = [];
    const base = this.airtableBase;

    await base("Partner Website")
      .select({
        fields: Object.values(this.recordFields),
        view: "Universities",
        // sort: [{ field: this.recordFields.name, direction: "asc" }],
      })
      .eachPage(async (records, nextPage) => {
        for (const record of records) {
          this.id = record.id;
          const partnerEvent = this.convertToPartnerEvent(record);
          partnerEvents.push(await partnerEvent);
        }
        nextPage();
      });
    return Promise.resolve(partnerEvents);
  }

  /**
   * Convert an Airtable record to a FallFestPartnerEvent.
   * @param record The Airtable record to convert.
   * @returns The converted FallFestPartnerEvent.
   */
  // eslint-disable-next-line require-await
  async convertToPartnerEvent(
    record: Record<string, any>
  ): Promise<FallFestPartnerEvent> {
    const event = {
      university: this.getUniversity(record),
      location: this.getLocation(record),
      startDate: this.getStart(record),
      endDate: this.getEnd(record),
      type: this.getType(record),
      link: this.getLink(record),
      image: await this.getImage(record),
    };
    return event;
  }

  formatDate(isoDateString: string | number | Date) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(isoDateString);
    return date.toLocaleDateString("en-US", options);
  }

  public getUniversity(record: any): string {
    return record.get(this.recordFields!.university);
  }

  public getLocation(record: any): string {
    return record.get(this.recordFields!.location);
  }

  public getStart(record: any): string {
    return this.formatDate(record.get(this.recordFields!.start));
  }

  public getEnd(record: any): string {
    return this.formatDate(record.get(this.recordFields!.end));
  }

  public getType(record: any): string {
    return record.get(this.recordFields!.type);
  }

  public getLink(record: any): string {
    return record.get(this.recordFields!.link);
  }

  public async getImage(record: any): Promise<string> {
    const fallbackImage = "/images/advocates/no-advocate-photo.png";
    const attachments = record.get(this.recordFields!.image);
    const imageAttachment = attachments && findImageAttachment(attachments);
    const imageUrl = imageAttachment && getImageUrl(imageAttachment);

    if (!imageUrl) {
      return fallbackImage;
    }

    const imagePublicPath = `/images/events/downloaded/${this.id}.jpg`;

    return await this.storeImage(imageUrl, `public/${imagePublicPath}`)
      .then(() => imagePublicPath)
      .catch(() => fallbackImage);
  }
}

export default FallFestPartnerEventAirtableRecords;
