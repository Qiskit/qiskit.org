import Airtable from "airtable";
import {
  AirtableRecords,
  getImageUrl,
  findImageAttachment,
} from "./airtable-conversion-utils";
import { FallFestPartnerEvent } from "types/fall-fest";

export const RECORD_FIELDS_IDS = Object.freeze({
  title: "fld7dWQ6pkQHYg2kj",
  startDate: "fldf9c8jHEJ7GGbUA",
  detail: "fld5T3Gd8Ti576bry",
  cta: "fldscZgANb59Ued8M",
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
      title: this.getTitle(record),
      startDate: this.getStart(record) || "",
      detail: this.getDetail(record),
      cta: this.getCTA(record),
      image: await this.getImage(record),
    };
    return event;
  }

  formatDate(isoDateString: string | number | Date) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(isoDateString);
    return date.toLocaleDateString("en-US", options);
  }

  public getTitle(record: any): string {
    return record.get(this.recordFields!.title);
  }

  public getStart(record: any): string {
    return this.formatDate(record.get(this.recordFields!.startDate));
  }

  public getDetail(record: any): string {
    return record.get(this.recordFields!.detail);
  }

  convertEventTitleToSlug(title: string) {
    return title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
  }

  public getCTA(record: any): any {
    const title = record.get(this.recordFields?.title);
    const link = record.get(this.recordFields?.cta);
    return {
      label: "Learn more here",
      url: link,
      segment: {
        cta: this.convertEventTitleToSlug(title),
        location: "fall-fest-page",
      },
    };
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
