import { beforeEach, describe, expect, test } from "vitest";
import QampCohortsAirtableRecords from "../../hooks/qamp-cohorts-conversion-utils";

const fakeRecord = {
  get: (field: string) => {
    switch (field) {
      case "Name":
        return "QAMP Spring 23";
      default:
        return undefined;
    }
  },
};

const mockRecordFields = {
  name: "Name",
};

describe("getters", () => {
  let qampCohortsAirtableRecords: QampCohortsAirtableRecords;

  beforeEach(() => {
    qampCohortsAirtableRecords = new QampCohortsAirtableRecords(
      "testApiKey",
      mockRecordFields
    );
  });

  test("gets the name from the record", () => {
    expect(qampCohortsAirtableRecords.getName(fakeRecord)).toBe(
      "QAMP Spring 23"
    );
  });
});

describe("convertToQampCohort", () => {
  let qampCohortsAirtableRecords: QampCohortsAirtableRecords;

  beforeEach(() => {
    qampCohortsAirtableRecords = new QampCohortsAirtableRecords(
      "testApiKey",
      mockRecordFields
    );
  });

  test("converts the record to a QAMP Cohort object", async () => {
    const qampCohort = await qampCohortsAirtableRecords.convertToQampCohort(
      fakeRecord
    );

    expect(qampCohort).toEqual({
      id: "",
      name: "QAMP Spring 23",
    });
  });
});
