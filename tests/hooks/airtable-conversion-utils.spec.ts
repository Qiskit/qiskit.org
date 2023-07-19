import { promises as fsPromises } from "fs";
import axios from "axios";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { AirtableBase } from "airtable/lib/airtable_base";
import { AirtableRecords } from "../../hooks/airtable-conversion-utils";

class FakeAirtableRecords extends AirtableRecords {
  constructor(
    apiKey: string,
    airtableBase: AirtableBase,
    public recordFields?: Record<string, any>
  ) {
    super(apiKey, "testBaseId", "testTableId", "testView");
    this.airtableBase = airtableBase;
    this.recordFields = recordFields;
  }
}

const id = "TESTID";
const imageUrl = "https://example.com/image.jpg";
const imageFilePath = `public/test/target-dir/${id}.jpg`;

vi.mock("fs", () => {
  return {
    promises: {
      writeFile: vi.fn(),
    },
  };
});

describe("storeImage", () => {
  let airtableRecords: AirtableRecords;

  beforeEach(() => {
    airtableRecords = new AirtableRecords(
      "testApiKey",
      "testBaseId",
      "testTableId",
      "testView",
      id
    );
    vi.spyOn(axios, "get");
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("should store image and return a resolved promise", async () => {
    const mockImageBuffer = Buffer.from("imageData");
    vi.spyOn(axios, "get").mockResolvedValue({ data: mockImageBuffer });
    const mockWriteFile = vi.spyOn(fsPromises, "writeFile").mockResolvedValue();

    await expect(
      airtableRecords.storeImage(imageUrl, imageFilePath)
    ).resolves.not.toThrow();
    expect(mockWriteFile).toHaveBeenCalledWith(imageFilePath, mockImageBuffer);
  });

  test("should throw error when image URL is invalid", async () => {
    vi.spyOn(axios, "get").mockRejectedValue(new Error("Invalid image URL"));
    await expect(
      airtableRecords.storeImage("invalidImageUrl", imageFilePath)
    ).rejects.toThrowError("Invalid image URL");
  });

  test("should throw error when there is problem with file system", async () => {
    vi.spyOn(fsPromises, "writeFile").mockImplementation(() => {
      throw new Error("File system error");
    });
    vi.spyOn(axios, "get").mockResolvedValue({
      data: Buffer.from("imageData"),
    });
    await expect(
      airtableRecords.storeImage(imageUrl, imageFilePath)
    ).rejects.toThrowError("File system error");
  });

  describe("getAllFieldNames", () => {
    // PREPARING MOCKED DATA
    const mockRecordFields = {
      name: "Name",
      city: "City",
      country: "Country",
      region: "Region",
      slackId: "Slack ID",
      slackUsername: "Slack Username",
      image: "Image",
    };
    const fakeRecords = [
      {
        get: (field: string) => {
          switch (field) {
            case "Name":
              return "Nova";
            case "City":
              return "Gotham City";
            case "Country":
              return "Canada";
            case "Region":
              return "South America";
            case "Slack ID":
              return "ID1234567890";
            case "Slack Username":
              return "U1234567890";
          }
        },
      },
      {
        get: (field: string) => {
          switch (field) {
            case "Name":
              return "Nova";
            case "City":
              return "Gotham City";
            case "Country":
              return "Canada";
            case "Region":
              return "South America";
            case "Slack ID":
              return "ID1234567890";
            case "Slack Username":
              return "U1234567890";
          }
        },
      },
    ];

    const RECORD_FIELDS_IDS = Object.freeze({
      name: "fldkG2SqdvCKDUhCH",
      city: "fldoCJjrveX4J9TV1",
      country: "fldZcHGtjEK7fPyAT",
      region: "fldG80tPB8heLWxBP",
      image: "fldawRemxDatqlfLo",
      slackId: "fld5aUddy1M4YRHTn",
      slackUsername: "fldY1nP63OKVsdvRC",
    } as const);

    test("If this.getFieldName throws an unhandled error for a field, it should be null", async () => {
      const airtableEachPageMockFn = vi
        .fn()
        .mockImplementation(
          (cb: (records: any, nextPage: any) => void): void => {
            cb(fakeRecords, () => {});
          }
        );
      const airtableSelectMockFn = vi.fn().mockReturnValue({
        eachPage: airtableEachPageMockFn,
      });
      const airtableBase = vi.fn().mockReturnValue({
        select: airtableSelectMockFn,
      });

      const airtableRecords = new FakeAirtableRecords(
        "testApiKey",
        airtableBase as unknown as AirtableBase,
        mockRecordFields
      );

      // eslint-disable-next-line dot-notation
      airtableRecords["getFieldName"] = vi
        .fn()
        .mockImplementation((fieldId: string) => {
          if (fieldId === "fld5aUddy1M4YRHTn") {
            return Promise.reject(new Error("Mocked error"));
          }
          // if no exception, get field name from mockRecordFields
          const name = (
            Object.keys(RECORD_FIELDS_IDS) as (keyof typeof RECORD_FIELDS_IDS)[]
          ).find((key) => {
            return RECORD_FIELDS_IDS[key] === fieldId;
          });
          if (name) {
            return Promise.resolve(mockRecordFields[name]);
          }
        });

      const result = await airtableRecords.getAllFieldNames(RECORD_FIELDS_IDS);
      expect(result).toStrictEqual({
        name: "Name",
        city: "City",
        country: "Country",
        region: "Region",
        image: "Image",
        slackId: null,
        slackUsername: "Slack Username",
      });
    });

    test("removes a field from the final object if a handled error is thrown", async () => {
      const fields = [
        { fields: { City: "" } },
        { fields: { Country: "" } },
        { fields: { Region: "" } },
        { fields: { Image: "" } },
        { fields: { "Slack Id": "" } },
        { fields: { "Slack Username": "" } },
      ];
      let fieldsIdx = 0;
      const airtableEachPageMockFn = vi
        .fn()
        .mockImplementation(
          (cb: (records: any, nextPage: any) => void): Promise<void> => {
            const element = fields[fieldsIdx];
            fieldsIdx++;
            // eslint-disable-next-line n/no-callback-literal
            cb(
              // two elements to check the  for loop in getFieldName
              [element],
              () => {}
            );
            return Promise.resolve();
          }
        );

      const airtableBase = vi.fn().mockReturnValue({
        select: (params: { fields: string[]; view: string }) => {
          if (params.fields && params.fields[0] === "fldkG2SqdvCKDUhCH") {
            throw new Error("Mocked error");
          }

          return {
            eachPage: airtableEachPageMockFn,
          };
        },
      });

      const airtableRecords = new FakeAirtableRecords(
        "testApiKey",
        airtableBase as unknown as AirtableBase,
        mockRecordFields
      );

      const result = await airtableRecords.getAllFieldNames(RECORD_FIELDS_IDS);
      // notice that in this object, there is no "name" field because it's the
      // one that throws the exception
      expect(result).toStrictEqual({
        city: "City",
        country: "Country",
        region: "Region",
        image: "Image",
        slackUsername: "Slack Username",
        slackId: "Slack Id",
      });
    });

    test('If getFieldName gets 0 records, all fieldNames should be "" then, this field should not appears in result object', async () => {
      let callIndex = 0;
      const fields = [
        { fields: { Name: "" } },
        { fields: { City: "" } },
        { fields: { Country: "" } },
        { fields: { Region: "" } },
        { fields: { Image: "" } },
        { fields: { "Slack Id": "" } },
        { fields: { "Slack Username": "" } },
      ];
      const airtableEachPageMockFn = vi
        .fn()
        .mockImplementation(
          (cb: (records: any, nextPage: any) => void): Promise<void> => {
            // this should pass 0 records for the first field (which is name)
            const records = callIndex === 0 ? [] : [fields[callIndex]];
            callIndex++;
            cb(
              // two elements to check the  for loop in getFieldName
              records,
              () => {}
            );
            return Promise.resolve();
          }
        );

      const airtableBase = vi.fn().mockReturnValue({
        select: () => {
          return {
            eachPage: airtableEachPageMockFn,
          };
        },
      });

      const airtableRecords = new FakeAirtableRecords(
        "testApiKey",
        airtableBase as unknown as AirtableBase,
        mockRecordFields
      );

      const result = await airtableRecords.getAllFieldNames(RECORD_FIELDS_IDS);

      // notice that in this object, there is no name because is th one that
      // throws the exception
      expect(result).toStrictEqual({
        city: "City",
        country: "Country",
        region: "Region",
        image: "Image",
        slackUsername: "Slack Username",
        slackId: "Slack Id",
      });
    });
  });
});
