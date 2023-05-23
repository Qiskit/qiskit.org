import Airtable from "airtable";
import { QampParticipant } from "../types/qamp";
import { AirtableRecords } from "./airtable-conversion-utils";

const RECORD_FIELDS_IDS = Object.freeze({
  name: "fld1cnyTtGUHzpCmX",
} as const);

const AIRTABLE_BASE_ID = "appjU5TOUDYPwBIqO";

class QampParticipantsAirtableRecords extends AirtableRecords {
  constructor(apiKey: string, recordFields?: Record<string, any>) {
    super(
      apiKey,
      AIRTABLE_BASE_ID,
      "Participants",
      "Grid view",
      undefined,
      recordFields
    );
  }

  async fetchParticipants(): Promise<QampParticipant[]> {
    if (!this.recordFields) {
      this.recordFields = await this.getAllFieldNames(RECORD_FIELDS_IDS);
    }

    const base = new Airtable({ apiKey: this.apiKey }).base(AIRTABLE_BASE_ID);
    const qampParticipants: QampParticipant[] = [];

    await base("Participants")
      .select({
        fields: Object.values(this.recordFields),
        sort: [{ field: this.recordFields.name, direction: "asc" }],
      })
      .eachPage((records, nextPage) => {
        for (const record of records) {
          this.id = record.id;
          const qampParticipant = this.convertToQampParticipants(record);
          qampParticipants.push(qampParticipant);
        }
        nextPage();
      });
    return Promise.resolve(qampParticipants);
  }

  convertToQampParticipants(record: any): QampParticipant {
    return {
      id: this.id,
      name: this.getName(record),
    };
  }

  public getName(record: any): string {
    return record.get(this.recordFields!.name);
  }
}

export default QampParticipantsAirtableRecords;
