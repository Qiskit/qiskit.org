import Airtable from "airtable";
import { QampCohort } from "../types/qamp";
import { AirtableRecords } from "./airtable-conversion-utils";

const RECORD_FIELDS_IDS = Object.freeze({
  name: "fld4aAolMGFaV2IJu",
} as const);

const AIRTABLE_BASE_ID = "appjU5TOUDYPwBIqO";

class QampCohortsAirtableRecords extends AirtableRecords {
  constructor(apiKey: string, recordFields?: Record<string, any>) {
    super(
      apiKey,
      AIRTABLE_BASE_ID,
      "Cohorts",
      "Grid view",
      undefined,
      recordFields
    );
  }

  async fetchCohorts(): Promise<QampCohort[]> {
    if (!this.recordFields) {
      this.recordFields = await this.getAllFieldNames(RECORD_FIELDS_IDS);
    }

    const base = new Airtable({ apiKey: this.apiKey }).base(AIRTABLE_BASE_ID);
    const qampCohorts: QampCohort[] = [];

    await base("Cohorts")
      .select({
        fields: Object.values(this.recordFields),
        sort: [{ field: this.recordFields.name, direction: "asc" }],
      })
      .eachPage((records, nextPage) => {
        for (const record of records) {
          this.id = record.id;
          const qampCohort = this.convertToQampCohort(record);
          qampCohorts.push(qampCohort);
        }
        nextPage();
      });
    return Promise.resolve(qampCohorts);
  }

  convertToQampCohort(record: any): QampCohort {
    return {
      id: this.id,
      name: this.getName(record),
    };
  }

  public getName(record: any): string {
    return record.get(this.recordFields!.name);
  }
}

export default QampCohortsAirtableRecords;
