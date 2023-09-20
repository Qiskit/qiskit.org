import Airtable from "airtable";
import { AirtableRecords } from "./airtable-conversion-utils";
import { FallFestExtensionEvent } from "types/fall-fest";

export const RECORD_FIELDS_IDS = Object.freeze({
  institution: "fldbhoWi3U8r3W36W",
  country: "fldkH49PJK7ZgkU4R",
} as const);

const AIRTABLE_BASE_ID = "applCQ71D4Jkgn2Xy";
class FallFestExtensionEventAirtableRecords extends AirtableRecords {
  constructor(
    apiKey: string,
    view: string,
    recordFields?: Record<string, any>
  ) {
    super(
      apiKey,
      AIRTABLE_BASE_ID,
      "Website View",
      view,
      undefined,
      recordFields
    );
    this.airtableBase = new Airtable({ apiKey: this.apiKey }).base(
      AIRTABLE_BASE_ID
    );
  }

  /**
   * Fetch the Extension events from Airtable, convert them to the
   * FallFestExtensionEvent type, and return them
   * @returns The Fall Fest extension events.
   */
  async fetchExtensionEvents(): Promise<FallFestExtensionEvent[]> {
    if (!this.recordFields) {
      this.recordFields = await this.getAllFieldNames(RECORD_FIELDS_IDS);
    }

    const extensionEvents: FallFestExtensionEvent[] = [];
    const base = this.airtableBase;

    await base("Extension Website")
      .select({
        fields: Object.values(this.recordFields),
        view: "Universities",
        // sort: [{ field: this.recordFields.name, direction: "asc" }],
      })
      .eachPage(async (records, nextPage) => {
        for (const record of records) {
          this.id = record.id;
          const extensionEvent = this.convertToExtensionEvent(record);
          extensionEvents.push(await extensionEvent);
        }
        nextPage();
      });
    return Promise.resolve(extensionEvents);
  }

  /**
   * Convert an Airtable record to a FallFestExtensionEvent.
   * @param record The Airtable record to convert.
   * @returns The converted FallFestExtensionEvent.
   */
  // eslint-disable-next-line require-await
  async convertToExtensionEvent(
    record: Record<string, any>
  ): Promise<FallFestExtensionEvent> {
    const event = {
      institution: (record.get(this.recordFields!.institution) as string) || "",
      country: (record.get(this.recordFields!.country) as string) || "",
    };
    return event;
  }
}

export default FallFestExtensionEventAirtableRecords;
