import { beforeEach, describe, expect, test } from "vitest";
import QampParticipantsAirtableRecords from "../../hooks/qamp-participants-conversion-utils";

const fakeRecord = {
  get: (field: string) => {
    switch (field) {
      case "Name":
        return "Jane Doe";
      default:
        return undefined;
    }
  },
};

const mockRecordFields = {
  name: "Name",
};

describe("getters", () => {
  let qampParticipantsAirtableRecords: QampParticipantsAirtableRecords;

  beforeEach(() => {
    qampParticipantsAirtableRecords = new QampParticipantsAirtableRecords(
      "testApiKey",
      mockRecordFields
    );
  });

  test("gets the name from the record", () => {
    expect(qampParticipantsAirtableRecords.getName(fakeRecord)).toBe(
      "Jane Doe"
    );
  });
});

describe("convertToQampParticipants", () => {
  let qampParticipantsAirtableRecords: QampParticipantsAirtableRecords;

  beforeEach(() => {
    qampParticipantsAirtableRecords = new QampParticipantsAirtableRecords(
      "testApiKey",
      mockRecordFields
    );
  });

  test("converts the record to a QAMP Participant object", async () => {
    const qampParticipant =
      await qampParticipantsAirtableRecords.convertToQampParticipants(
        fakeRecord
      );

    expect(qampParticipant).toEqual({
      id: "",
      name: "Jane Doe",
    });
  });
});
