import { promises as fsPromises } from "fs";
import axios from "axios";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { AirtableRecords } from "../../hooks/airtable-conversion-utils";

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
});
