import { beforeEach, describe, expect, test, vi } from "vitest";
import AdvocatesAirtableRecords from "../../hooks/advocate-conversion-utils";

describe("getters", () => {
  let advocatesAirtableRecords: AdvocatesAirtableRecords;

  const fakeRecord = {
    get: (field: string) => {
      switch (field) {
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
  };

  const mockRecordFields = {
    city: "City",
    country: "Country",
    region: "Region",
    slackId: "Slack ID",
    slackUsername: "Slack Username",
  };

  beforeEach(() => {
    advocatesAirtableRecords = new AdvocatesAirtableRecords(
      "testApiKey",
      mockRecordFields
    );
  });

  test("gets the city from the record", () => {
    expect(advocatesAirtableRecords.getCity(fakeRecord)).toBe("Gotham City");
  });

  test("gets the country from the record", () => {
    expect(advocatesAirtableRecords.getCountry(fakeRecord)).toBe("Canada");
  });

  test("gets the region from the record", () => {
    expect(advocatesAirtableRecords.getRegion(fakeRecord)).toBe(
      "South America"
    );
  });

  test("gets the Slack ID from the record", () => {
    expect(advocatesAirtableRecords.getSlackId(fakeRecord)).toBe(
      "ID1234567890"
    );
  });

  test("gets the Slack username from the record", () => {
    expect(advocatesAirtableRecords.getSlackUsername(fakeRecord)).toBe(
      "U1234567890"
    );
  });
});

describe("convertToAdvocate", () => {
  let advocatesAirtableRecords: AdvocatesAirtableRecords;

  const fakeRecord = {
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
  };

  const mockRecordFields = {
    name: "Name",
    city: "City",
    country: "Country",
    region: "Region",
    slackId: "Slack ID",
    slackUsername: "Slack Username",
  };

  beforeEach(() => {
    advocatesAirtableRecords = new AdvocatesAirtableRecords(
      "testApiKey",
      mockRecordFields
    );
  });

  test("converts the record to an advocate object", async () => {
    const advocate = await advocatesAirtableRecords.convertToAdvocate(
      fakeRecord
    );

    expect(advocate).toEqual({
      name: "Nova",
      image: "/images/advocates/no-advocate-photo.png",
      region: "South America",
      city: "Gotham City",
      country: "Canada",
      slackId: "ID1234567890",
      slackUsername: "U1234567890",
    });
  });
});

describe("getImage", () => {
  let advocatesAirtableRecords: AdvocatesAirtableRecords;

  const mockRecordFields = {
    image: "Image",
  };

  beforeEach(() => {
    advocatesAirtableRecords = new AdvocatesAirtableRecords(
      "testApiKey",
      mockRecordFields
    );
  });

  test("defaults in a no-advocate-photo.png value if there is no attachment", async () => {
    const fakeRecord = {
      get: (field: string) => {
        if (field === "Image") {
          return undefined;
        }
      },
    };
    const result = await advocatesAirtableRecords.getImage(fakeRecord);
    expect(result).toBe("/images/advocates/no-advocate-photo.png");
  });

  test("defaults in a no-advocate-photo.png value if the attachment is of no image type", async () => {
    const fakeRecord = {
      get: (field: string) => {
        if (field === "Image") {
          return [
            {
              type: "application/json",
            },
          ];
        }
      },
    };
    const result = await advocatesAirtableRecords.getImage(fakeRecord);
    expect(result).toBe("/images/advocates/no-advocate-photo.png");
  });

  test("stores the attachment URL if there are no thumbnails", async () => {
    const attachmentUrl = "http://url.to/image.jpg";
    const fakeRecord = {
      get: (field: string) => {
        if (field === "Image") {
          return [
            {
              url: attachmentUrl,
              type: "image/jpg",
            },
          ];
        }
      },
    };

    const mockStoreImage = vi
      .spyOn(advocatesAirtableRecords, "storeImage")
      .mockImplementation(() => Promise.resolve());
    await advocatesAirtableRecords.getImage(fakeRecord);
    expect(mockStoreImage).toBeCalledWith(attachmentUrl, expect.any(String));
  });

  test("stores the thumbnail URL if there is a large thumbnail available", async () => {
    const thumbnailUrl = "http://url.to/thumbnails/large.jpg";
    const fakeRecord = {
      get: (field: string) => {
        if (field === "Image") {
          return [
            {
              url: "http://url.to/image.jpg",
              type: "image/jpg",
              thumbnails: {
                large: { url: thumbnailUrl },
              },
            },
          ];
        }
      },
    };

    const mockStoreImage = vi
      .spyOn(advocatesAirtableRecords, "storeImage")
      .mockImplementation(() => Promise.resolve());
    await advocatesAirtableRecords.getImage(fakeRecord);
    expect(mockStoreImage).toBeCalledWith(thumbnailUrl, expect.any(String));
  });
});
