import { promises as fsPromises } from "fs";
import axios from "axios";
import { AirtableRecords } from "~/hooks/airtable-conversion-utils";

const id = "TESTID";
const imageUrl = "https://example.com/image.jpg";
const imageFilePath = `static/test/target-dir/${id}.jpg`;

jest.mock("fs", () => {
  return {
    promises: {
      writeFile: jest.fn(),
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
    jest.spyOn(axios, "get");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should store image and return a resolved promise", async () => {
    const mockImageBuffer = Buffer.from("imageData");
    jest.spyOn(axios, "get").mockResolvedValue({ data: mockImageBuffer });
    const mockWriteFile = jest
      .spyOn(fsPromises, "writeFile")
      .mockResolvedValue();

    await expect(
      airtableRecords.storeImage(imageUrl, imageFilePath)
    ).resolves.not.toThrow();
    expect(mockWriteFile).toHaveBeenCalledWith(imageFilePath, mockImageBuffer);
  });

  it("should throw error when image URL is invalid", async () => {
    jest.spyOn(axios, "get").mockRejectedValue(new Error("Invalid image URL"));
    await expect(
      airtableRecords.storeImage("invalidImageUrl", imageFilePath)
    ).rejects.toThrowError("Invalid image URL");
  });

  it("should throw error when there is problem with file system", async () => {
    jest.spyOn(fsPromises, "writeFile").mockImplementation(() => {
      throw new Error("File system error");
    });
    jest
      .spyOn(axios, "get")
      .mockResolvedValue({ data: Buffer.from("imageData") });
    await expect(
      airtableRecords.storeImage(imageUrl, imageFilePath)
    ).rejects.toThrowError("File system error");
  });
});
