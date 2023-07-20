import axios from "axios";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { AirtableBase } from "airtable/lib/airtable_base";
import EventsAirtableRecords from "../../hooks/event-conversion-utils";
import {
  CommunityEvent,
  COMMUNITY_EVENT_TYPES,
  WORLD_REGIONS,
} from "../../types/events";
import { mock } from "./mock/seminarSeriesMock";

vi.mock("axios");

const { hackathon } = COMMUNITY_EVENT_TYPES;
const { europe } = WORLD_REGIONS;

class FakeEventsAirtableRecords extends EventsAirtableRecords {
  constructor(
    apiKey: string,
    view: string,
    airtableBase?: AirtableBase,
    public recordFields?: Record<string, any>
  ) {
    super(apiKey, view, recordFields);
    if (airtableBase) {
      this.airtableBase = airtableBase;
    }
  }
}

describe("isEventInDateRange", () => {
  let eventsAirtableRecords: EventsAirtableRecords;

  beforeEach(() => {
    eventsAirtableRecords = new EventsAirtableRecords("testApiKey", "testView");
  });

  const mockEventBase = {
    types: [],
    title: "",
    image: "",
    location: "",
    regions: [],
    date: "",
    to: "",
  };

  const getFormattedDate = (daysOffset: number): string => {
    let date = new Date();

    // Correct for timezone offset
    date = new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000);

    // Add days offset
    date.setDate(date.getDate() + daysOffset);

    // Return date in YYYY-MM-DD format
    return date.toISOString().split("T")[0];
  };

  let mockEvent: CommunityEvent;

  test("returns true if the event happens within the next 15 days", () => {
    const days = 15;

    // Event happened in the past
    mockEvent = {
      ...mockEventBase,
      startDate: getFormattedDate(-7),
      endDate: getFormattedDate(-1),
      startDateAndTime: null,
      speaker: "",
    };
    expect(eventsAirtableRecords.isEventInDateRange(mockEvent, days)).toBe(
      false
    );

    // Event starts within the next 15 days
    mockEvent = {
      ...mockEventBase,
      startDate: getFormattedDate(7),
      endDate: "",
      startDateAndTime: null,
      speaker: "",
    };
    expect(eventsAirtableRecords.isEventInDateRange(mockEvent, days)).toBe(
      true
    );

    // Event starts today
    mockEvent = {
      ...mockEventBase,
      startDate: getFormattedDate(0),
      endDate: "",
      startDateAndTime: null,
      speaker: "",
    };
    expect(eventsAirtableRecords.isEventInDateRange(mockEvent, days)).toBe(
      true
    );

    // Event starts within the next 15 days and ends after 15 days
    mockEvent = {
      ...mockEventBase,
      startDate: getFormattedDate(7),
      endDate: getFormattedDate(20),
      startDateAndTime: null,
      speaker: "",
    };
    expect(eventsAirtableRecords.isEventInDateRange(mockEvent, days)).toBe(
      true
    );

    // Event starts in exactly 15 days
    mockEvent = {
      ...mockEventBase,
      startDate: getFormattedDate(15),
      endDate: "",
      startDateAndTime: null,
      speaker: "",
    };
    expect(eventsAirtableRecords.isEventInDateRange(mockEvent, days)).toBe(
      true
    );

    // Event started 100 days ago and end in 100 days (ongoing event)
    mockEvent = {
      ...mockEventBase,
      startDate: getFormattedDate(-100),
      endDate: getFormattedDate(100),
      startDateAndTime: null,
      speaker: "",
    };
    expect(eventsAirtableRecords.isEventInDateRange(mockEvent, days)).toBe(
      true
    );
  });

  test("returns true if the event happened within the last 15 days", () => {
    const days = -15;

    // Event happened before the last 15 days
    mockEvent = {
      ...mockEventBase,
      startDate: getFormattedDate(-100),
      endDate: getFormattedDate(-20),
      startDateAndTime: null,
      speaker: "",
    };
    expect(eventsAirtableRecords.isEventInDateRange(mockEvent, days)).toBe(
      false
    );

    // Event started before the last 15 days and ended within the last 15 days
    mockEvent = {
      ...mockEventBase,
      startDate: getFormattedDate(-100),
      endDate: getFormattedDate(-7),
      startDateAndTime: null,
      speaker: "",
    };
    expect(eventsAirtableRecords.isEventInDateRange(mockEvent, days)).toBe(
      true
    );

    // Event starts in the future
    mockEvent = {
      ...mockEventBase,
      startDate: getFormattedDate(7),
      endDate: "",
      startDateAndTime: null,
      speaker: "",
    };
    expect(eventsAirtableRecords.isEventInDateRange(mockEvent, days)).toBe(
      false
    );

    // Event starts today
    mockEvent = {
      ...mockEventBase,
      startDate: getFormattedDate(0),
      endDate: "",
      startDateAndTime: null,
      speaker: "",
    };
    expect(eventsAirtableRecords.isEventInDateRange(mockEvent, days)).toBe(
      false
    );

    // Event started 100 days ago and end in 100 days (ongoing event)
    mockEvent = {
      ...mockEventBase,
      startDate: getFormattedDate(-100),
      endDate: getFormattedDate(100),
      startDateAndTime: null,
      speaker: "",
    };
    expect(eventsAirtableRecords.isEventInDateRange(mockEvent, days)).toBe(
      false
    );
  });

  test("returns false if date is invalid", () => {
    const days = 15;

    // Event happened before the last 15 days
    mockEvent = {
      ...mockEventBase,
      startDate: "invalid date",
      endDate: getFormattedDate(-20),
      startDateAndTime: null,
      speaker: "",
    };
    expect(eventsAirtableRecords.isEventInDateRange(mockEvent, days)).toBe(
      false
    );
  });
});

describe("convertToCommunityEvent", () => {
  let eventsAirtableRecords: EventsAirtableRecords;

  const fakeRecords = [
    {
      get: (field: string) => {
        switch (field) {
          case "Name":
            return "Fake conference";
          case "Types":
            return [hackathon];
          case "Location":
            return "Someplace";
          case "Regions":
            return [europe];
          case "Start date":
            return "2020-01-01";
          case "End date":
            return "2020-01-02";
          case "Website":
            return "https://qiskit.org/events";
        }
      },
    },
    {
      get: (field: string) => {
        switch (field) {
          case "Name":
            return "Fake conference";
          case "Types":
            return hackathon;
          case "Location":
            return "Someplace";
          case "Regions":
            return [europe];
          case "Start date":
            return "2020-01-01";
          case "End date":
            return "2020-01-02";
          case "Website":
            return "https://qiskit.org/events";
        }
      },
    },
  ];

  const mockRecordFields = {
    name: "Name",
    types: "Types",
    location: "Location",
    regions: "Regions",
    startDate: "Start date",
    endDate: "End date",
    website: "Website",
  };

  beforeEach(() => {
    eventsAirtableRecords = new EventsAirtableRecords(
      "testApiKey",
      "testView",
      mockRecordFields
    );
  });

  test("extracts and formats information from the record", async () => {
    const { hackathon } = COMMUNITY_EVENT_TYPES;
    const { europe } = WORLD_REGIONS;
    const event = await eventsAirtableRecords.convertToCommunityEvent(
      fakeRecords[0]
    );

    expect(event).toStrictEqual({
      endDate: "2020-01-02",
      location: "Someplace",
      regions: [europe],
      speaker: "",
      title: "Fake conference",
      to: "https://qiskit.org/events",
      abstract: "",
      date: "January 1-2, 2020",
      image: "/images/events/no-picture.jpg",
      startDate: "2020-01-01",
      startDateAndTime: null,
      types: [hackathon],
    });
  });

  test("extracts and format information from the record without types as array", async () => {
    const event2 = await eventsAirtableRecords.convertToCommunityEvent(
      fakeRecords[1]
    );

    expect(event2).toStrictEqual({
      endDate: "2020-01-02",
      location: "Someplace",
      regions: [europe],
      speaker: "",
      title: "Fake conference",
      to: "https://qiskit.org/events",
      abstract: "",
      date: "January 1-2, 2020",
      image: "/images/events/no-picture.jpg",
      startDate: "2020-01-01",
      startDateAndTime: null,
      types: [hackathon],
    });
  });
});

describe("convertToCommunityEvent types", () => {
  let eventsAirtableRecords: EventsAirtableRecords;

  const mockRecordFields = {
    types: "Types",
  };

  beforeEach(() => {
    eventsAirtableRecords = new EventsAirtableRecords(
      "testApiKey",
      "testView",
      mockRecordFields
    );
  });

  test("filters the values so only those recognized by qiskit.org get into the event", async () => {
    const fakeRecord = {
      get: (field: string) => {
        switch (field) {
          case "Types":
            return [COMMUNITY_EVENT_TYPES.hackathon, "Unknown1", "Unknown2"];
        }
      },
    };

    const { types } = await eventsAirtableRecords.convertToCommunityEvent(
      fakeRecord
    );

    expect({ types }).toEqual({
      types: [COMMUNITY_EVENT_TYPES.hackathon],
    });
  });

  test("gets Talks type if there is no type", async () => {
    const fakeRecord = {
      get: (field: string) => {
        switch (field) {
          case "Types":
            return undefined;
        }
      },
    };

    const { types } = await eventsAirtableRecords.convertToCommunityEvent(
      fakeRecord
    );

    expect({ types }).toEqual({
      types: [COMMUNITY_EVENT_TYPES.talks],
    });
  });

  test("gets Talks type if no type is recognized by qiskit.org", async () => {
    const fakeRecord = {
      get: (field: string) => {
        switch (field) {
          case "Types":
            return ["A", "B", "C"];
        }
      },
    };

    const { types } = await eventsAirtableRecords.convertToCommunityEvent(
      fakeRecord
    );

    expect({ types }).toEqual({
      types: [COMMUNITY_EVENT_TYPES.talks],
    });
  });

  test("gets an array of one value if types is not an array but a single value", async () => {
    const fakeRecord = {
      get: (field: string) => {
        switch (field) {
          case "Types":
            return [COMMUNITY_EVENT_TYPES.hackathon];
        }
      },
    };

    const { types } = await eventsAirtableRecords.convertToCommunityEvent(
      fakeRecord
    );

    expect({ types }).toEqual({
      types: [COMMUNITY_EVENT_TYPES.hackathon],
    });
  });
});

describe("filterByWhitelist", () => {
  const eventsAirtableRecords = new EventsAirtableRecords(
    "testApiKey",
    "testView"
  );
  test("creates a new list, from an input one, only with the values in a whitelist", () => {
    const list = ["a", "x", "b", "y", "c", "z", "a", "x", "b", "y"];
    expect(
      eventsAirtableRecords.filterWithWhitelist(list, ["a", "b", "c"])
    ).toEqual(["a", "b", "c", "a", "b"]);
  });
});

describe("convertToCommunityEvent regions", () => {
  let eventsAirtableRecords: EventsAirtableRecords;

  const mockRecordFields = {
    regions: "Regions",
  };

  beforeEach(() => {
    eventsAirtableRecords = new EventsAirtableRecords(
      "testApiKey",
      "testView",
      mockRecordFields
    );
  });

  test("defaults in TBD if there is no region", async () => {
    const fakeRecord = {
      get: (field: string) => {
        switch (field) {
          case "Regions":
            return undefined;
        }
      },
    };

    const { regions } = await eventsAirtableRecords.convertToCommunityEvent(
      fakeRecord
    );

    expect({ regions }).toEqual({
      regions: [WORLD_REGIONS.tbd],
    });
  });

  test("gets the region from the record", async () => {
    const fakeRecord = {
      get: (field: string) => {
        switch (field) {
          case "Regions":
            return [WORLD_REGIONS.northAmerica];
        }
      },
    };

    const { regions } = await eventsAirtableRecords.convertToCommunityEvent(
      fakeRecord
    );

    expect({ regions }).toEqual({
      regions: [WORLD_REGIONS.northAmerica],
    });
  });

  test("gets the region from the record even if it is not recognized by qiskit", async () => {
    const fakeRecord = {
      get: (field: string) => {
        switch (field) {
          case "Regions":
            return ["Lemuria"];
        }
      },
    };

    const { regions } = await eventsAirtableRecords.convertToCommunityEvent(
      fakeRecord
    );

    expect({ regions }).toEqual({
      regions: ["Lemuria"],
    });
  });
});

describe("convertToCommunityEvent location", () => {
  let eventsAirtableRecords: EventsAirtableRecords;

  const mockRecordFields = {
    location: "Location",
  };

  beforeEach(() => {
    eventsAirtableRecords = new EventsAirtableRecords(
      "testApiKey",
      "testView",
      mockRecordFields
    );
  });

  test("defaults in region TBD if there is no location", async () => {
    const fakeRecord = {
      get: (field: string) => {
        switch (field) {
          default:
            return undefined;
        }
      },
    };

    const { location } = await eventsAirtableRecords.convertToCommunityEvent(
      fakeRecord
    );

    expect({ location }).toEqual({
      location: WORLD_REGIONS.tbd,
    });
  });

  test("gets the location from the record", async () => {
    const fakeRecord = {
      get: (field: string) => {
        switch (field) {
          case "Location":
            return "Gotham";
        }
      },
    };

    const { location } = await eventsAirtableRecords.convertToCommunityEvent(
      fakeRecord
    );

    expect({ location }).toEqual({
      location: "Gotham",
    });
  });
});

describe("getImage", () => {
  let eventsAirtableRecords: EventsAirtableRecords;

  const mockRecordFields = {
    name: "Name",
    image: "Image",
  };

  beforeEach(() => {
    eventsAirtableRecords = new EventsAirtableRecords(
      "testApiKey",
      "testView",
      mockRecordFields
    );
  });

  test("defaults in a no-picture.jpg value if there is no attachment", async () => {
    const fakeRecord = {
      get: (field: string) => {
        switch (field) {
          case "Name":
            return "Fake Conference";
        }
      },
    };

    const result = await eventsAirtableRecords.getImage(fakeRecord);
    expect(result).toBe("/images/events/no-picture.jpg");
  });

  test("defaults in a no-picture.jpg value if the attachment is of no image type", async () => {
    const fakeRecord = {
      get: (field: string) => {
        switch (field) {
          case "Name":
            return "Fake Conference";
          case "Image":
            return [
              {
                type: "application/json",
              },
            ];
        }
      },
    };

    const result = await eventsAirtableRecords.getImage(fakeRecord);
    expect(result).toBe("/images/events/no-picture.jpg");
  });

  test("stores the attachment URL if there are no thumbnails", async () => {
    const attachmentUrl = "http://url.to/image.jpg";
    const fakeRecord = {
      get: (field: string) => {
        switch (field) {
          case "Name":
            return "Fake Conference";
          case "Image":
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
      .spyOn(eventsAirtableRecords, "storeImage")
      .mockImplementation(() => Promise.resolve());
    await eventsAirtableRecords.getImage(fakeRecord);
    expect(mockStoreImage).toBeCalledWith(attachmentUrl, expect.any(String));
  });

  test("stores the attachment URL if there is no large thumbnail", async () => {
    const attachmentUrl = "http://url.to/image.jpg";
    const fakeRecord = {
      get: (field: string) => {
        switch (field) {
          case "Name":
            return "Fake Conference";
          case "Image":
            return [
              {
                url: attachmentUrl,
                type: "image/jpg",
                thumbnails: {},
              },
            ];
        }
      },
    };

    const mockStoreImage = vi
      .spyOn(eventsAirtableRecords, "storeImage")
      .mockImplementation(() => Promise.resolve());
    await eventsAirtableRecords.getImage(fakeRecord);
    expect(mockStoreImage).toBeCalledWith(attachmentUrl, expect.any(String));
  });

  test("stores the thumbnail URL if there is a large thumbnail available", async () => {
    const thumbnailUrl = "http://url.to/thumbnails/large.jpg";
    const fakeRecord = {
      get: (field: string) => {
        switch (field) {
          case "Name":
            return "Fake Conference";
          case "Image":
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
      .spyOn(eventsAirtableRecords, "storeImage")
      .mockImplementation(() => Promise.resolve());
    await eventsAirtableRecords.getImage(fakeRecord);
    expect(mockStoreImage).toBeCalledWith(thumbnailUrl, expect.any(String));
  });
});

describe("getDates", () => {
  let eventsAirtableRecords: EventsAirtableRecords;

  const mockRecordFields = {
    name: "Name",
    startDate: "Start date",
    endDate: "End date",
  };

  beforeEach(() => {
    eventsAirtableRecords = new EventsAirtableRecords(
      "testApiKey",
      "testView",
      mockRecordFields
    );
  });

  test("returns date objects if both dates exists", () => {
    const expectedStartDate = new Date("2020-01-01T00:00:00.000Z");
    const expectedEndDate = new Date("2020-01-02T00:00:00.000Z");

    const fakeRecord = {
      get: (field: string) => {
        switch (field) {
          case "Name":
            return "Fake Conference";
          case "Start date":
            return "2020-01-01";
          case "End date":
            return "2020-01-02";
        }
      },
    };

    const [startDate, endDate] = eventsAirtableRecords.getDates(fakeRecord);
    expect(startDate).toEqual(expectedStartDate);
    expect(endDate).toEqual(expectedEndDate);
  });

  test("returns undefined if the start date is missing", () => {
    const fakeRecord = {
      get: (field: string) => {
        switch (field) {
          case "Name":
            return "Fake Conference";
          case "End date":
            return "2020-01-02";
        }
      },
    };

    const [startDate, endDate] = eventsAirtableRecords.getDates(fakeRecord);
    expect(endDate).toBeInstanceOf(Date);
    expect(startDate).toBeUndefined();
  });

  test("returns undefined if the end date is missing", () => {
    const fakeRecord = {
      get: (field: string) => {
        switch (field) {
          case "Name":
            return "Fake Conference";
          case "Start date":
            return "2020-01-01";
        }
      },
    };

    const [startDate, endDate] = eventsAirtableRecords.getDates(fakeRecord);
    expect(startDate).toBeInstanceOf(Date);
    expect(endDate).toBeUndefined();
  });
});

describe("formatDates", () => {
  let eventsAirtableRecords: EventsAirtableRecords;

  beforeEach(() => {
    eventsAirtableRecords = new EventsAirtableRecords("testApiKey", "testView");
  });

  const start = new Date("2020-01-01T00:00:00.000Z");
  const endSameDate = new Date("2020-01-01T00:00:00.000Z");
  const endNextDay = new Date("2020-01-02T00:00:00.000Z");
  const endNextMonth = new Date("2020-02-01T00:00:00.000Z");
  const endNextYear = new Date("2021-01-01T00:00:00.000Z");
  const noDate = undefined;

  test("shows TBD if no start date is passed", () => {
    expect(eventsAirtableRecords.formatDates()).toBe("TBD");
    expect(eventsAirtableRecords.formatDates(noDate, endNextDay)).toBe("TBD");
  });

  test("shows start date when start and end dates are equal", () => {
    expect(eventsAirtableRecords.formatDates(start, endSameDate)).toBe(
      "January 1, 2020"
    );
  });

  test("shows the start date when there is only start date", () => {
    expect(eventsAirtableRecords.formatDates(start)).toBe("January 1, 2020");
  });

  test("shows complete dates when the years are different", () => {
    expect(eventsAirtableRecords.formatDates(start, endNextYear)).toBe(
      "January 1, 2020 - January 1, 2021"
    );
  });

  test("factors out the year when years are equal", () => {
    expect(eventsAirtableRecords.formatDates(start, endNextMonth)).toBe(
      "January 1 - February 1, 2020"
    );
  });

  test("test practial unreachable case", () => {
    try {
      eventsAirtableRecords.formatDates(
        new Date("2020-01-01T00:00:00.000Z"),
        new Date("2020-01-01T00:10:00.000Z")
      );
    } catch (e) {
      expect((e as any).message).toBe(
        "Unreachable: should have all the cases covered."
      );
    }
  });
});

describe("getEventsQuery", () => {
  test("check query arguments", () => {
    const airtableSelectMockFn = vi.fn();
    const airtableBase = vi.fn().mockReturnValue({
      select: airtableSelectMockFn,
    });

    const eventsAirtableRecords = new FakeEventsAirtableRecords(
      "testApiKey",
      "testView",
      airtableBase as unknown as AirtableBase
    );

    eventsAirtableRecords.getEventsQuery("filter");

    expect(airtableBase).toHaveBeenCalledWith("Event Calendar");
    expect(airtableSelectMockFn).toHaveBeenCalledWith({
      filterByFormula: "filter",
    });
  });
});

describe("fetchCommunityEvents", () => {
  const mockRecordFields = {
    name: "Name",
    types: "Types",
    location: "Location",
    regions: "Regions",
    startDate: "Start date",
    endDate: "End date",
    website: "Website",
  };

  const fakeRecords = [
    {
      get: (field: string) => {
        switch (field) {
          case "Name":
            return "Fake conference";
          case "Types":
            return [hackathon];
          case "Location":
            return "Someplace";
          case "Regions":
            return [europe];
          case "Start date":
            return "2020-01-01";
          case "End date":
            return "2020-01-02";
          case "Website":
            return "https://qiskit.org/events";
        }
      },
    },
    {
      get: (field: string) => {
        switch (field) {
          case "Name":
            return "Fake conference 2";
          case "Types":
            return [hackathon];
          case "Location":
            return "Someplace";
          case "Regions":
            return [europe];
          case "Start date":
            return "2020-03-01";
          case "End date":
            return "2020-03-02";
          case "Website":
            return "https://qiskit.org/events";
        }
      },
    },
  ];

  test("fetch in date range events", async () => {
    const eventsAirtableRecords = new FakeEventsAirtableRecords(
      "testApiKey",
      "testView",
      undefined,
      mockRecordFields
    );

    const getEventsQueryMock = vi.fn().mockReturnValue({
      eachPage: async (
        callBack: (records: any, nextPage: any) => Promise<void>
      ) => {
        await callBack(fakeRecords, () => {});

        return Promise.resolve();
      },
    });

    eventsAirtableRecords.getEventsQuery = getEventsQueryMock;
    eventsAirtableRecords.isEventInDateRange = vi.fn().mockReturnValue(true);

    const result = await eventsAirtableRecords.fetchCommunityEvents(10);

    expect(result).toStrictEqual([
      {
        abstract: "",
        date: "January 1-2, 2020",
        endDate: "2020-01-02",
        image: "/images/events/no-picture.jpg",
        location: "Someplace",
        regions: ["Europe"],
        speaker: "",
        startDate: "2020-01-01",
        startDateAndTime: null,
        title: "Fake conference",
        to: "https://qiskit.org/events",
        types: ["Hackathon"],
      },
      {
        abstract: "",
        date: "March 1-2, 2020",
        endDate: "2020-03-02",
        image: "/images/events/no-picture.jpg",
        location: "Someplace",
        regions: ["Europe"],
        speaker: "",
        startDate: "2020-03-01",
        startDateAndTime: null,
        title: "Fake conference 2",
        to: "https://qiskit.org/events",
        types: ["Hackathon"],
      },
    ]);
  });

  test("fetch in date range events sorted descending", async () => {
    const eventsAirtableRecords = new FakeEventsAirtableRecords(
      "testApiKey",
      "testView",
      undefined,
      mockRecordFields
    );

    const getEventsQueryMock = vi.fn().mockReturnValue({
      eachPage: async (
        callBack: (records: any, nextPage: any) => Promise<void>
      ) => {
        await callBack(fakeRecords, () => {});

        return Promise.resolve();
      },
    });

    eventsAirtableRecords.getEventsQuery = getEventsQueryMock;
    eventsAirtableRecords.isEventInDateRange = vi.fn().mockReturnValue(true);

    const result = await eventsAirtableRecords.fetchCommunityEvents(-10);

    expect(result).toStrictEqual([
      {
        abstract: "",
        date: "March 1-2, 2020",
        endDate: "2020-03-02",
        image: "/images/events/no-picture.jpg",
        location: "Someplace",
        regions: ["Europe"],
        speaker: "",
        startDate: "2020-03-01",
        startDateAndTime: null,
        title: "Fake conference 2",
        to: "https://qiskit.org/events",
        types: ["Hackathon"],
      },
      {
        abstract: "",
        date: "January 1-2, 2020",
        endDate: "2020-01-02",
        image: "/images/events/no-picture.jpg",
        location: "Someplace",
        regions: ["Europe"],
        speaker: "",
        startDate: "2020-01-01",
        startDateAndTime: null,
        title: "Fake conference",
        to: "https://qiskit.org/events",
        types: ["Hackathon"],
      },
    ]);
  });

  test("If no recordFields should get from getAllFieldNames", async () => {
    const eventsAirtableRecords = new FakeEventsAirtableRecords(
      "testApiKey",
      "testView"
    );

    const getEventsQueryMock = vi.fn().mockReturnValue({
      eachPage: (callBack: (records: any, nextPage: any) => void) => {
        callBack(fakeRecords, () => {});

        return Promise.resolve();
      },
    });

    const getAllFieldNamesMock = vi.fn().mockReturnValue(mockRecordFields);

    eventsAirtableRecords.getEventsQuery = getEventsQueryMock;
    eventsAirtableRecords.getAllFieldNames = getAllFieldNamesMock;

    await eventsAirtableRecords.fetchCommunityEvents(10);

    expect(eventsAirtableRecords.recordFields).toStrictEqual(mockRecordFields);
  });
});

describe("fetchSeminarSeriesEvents", () => {
  const mockRecordFields = {
    name: "Name",
    startDate: "Event Start Date",
    startDateAndTime: "Event Start Date Time",
    types: "Type of Engagement",
    website: "Event Website",
    location: "Event City/State",
    regions: "Region",
    image: "Image / Icon",
    institution: "Institution",
    showOnEventsPage: "Add to Event Site",
    showOnSeminarSeriesPage: "Add to Seminar Series Site",
    speaker: "Speaker (S.S.)",
    abstract: "Event Abstract",
  };

  const fakeRecords = [
    {
      get: (field: string) => mock[0][field],
    },
    {
      get: (field: string) => mock[1][field],
    },
  ];

  test("fetch in date range events", async () => {
    const eventsAirtableRecords = new FakeEventsAirtableRecords(
      "testApiKey",
      "testView",
      undefined,
      mockRecordFields
    );

    const getEventsQueryMock = vi.fn().mockReturnValue({
      eachPage: async (
        callBack: (records: any, nextPage: any) => Promise<void>
      ) => {
        await callBack(fakeRecords, () => {});

        return Promise.resolve();
      },
    });

    eventsAirtableRecords.getEventsQuery = getEventsQueryMock;
    eventsAirtableRecords.isEventInDateRange = vi.fn().mockReturnValue(true);

    (axios.get as any).mockResolvedValue({
      data: "Omnis non molestiae voluptatem beatae soluta nobis ducimus.",
    });
    const result = await eventsAirtableRecords.fetchSeminarSeriesEvents(10);

    expect(result).toStrictEqual([
      {
        endDate: "",
        institution: "Okuneva Group",
        location: "YouTube",
        speaker: "Lela Bahringer",
        title: "delectus eaque consectetur",
        to: "http://example.com",
        abstract: "",
        date: "July 29, 2022",
        image: "/images/events/downloaded/undefined.jpg",
        startDate: "2022-07-29",
      },
      {
        endDate: "",
        institution: "Kihn - Rolfson",
        location: "YouTube",
        speaker: "Deondre Halvorson",
        title: "Ea commodi earum id.",
        to: "http://example.com",
        abstract: "Qui facere assumenda ducimus.",
        date: "June 9, 2023",
        image: "/images/events/downloaded/undefined.jpg",
        startDate: "2023-06-09",
      },
    ]);
  });

  test("fetch in date range events descending", async () => {
    const eventsAirtableRecords = new FakeEventsAirtableRecords(
      "testApiKey",
      "testView",
      undefined,
      mockRecordFields
    );

    const getEventsQueryMock = vi.fn().mockReturnValue({
      eachPage: async (
        callBack: (records: any, nextPage: any) => Promise<void>
      ) => {
        await callBack(fakeRecords, () => {});

        return Promise.resolve();
      },
    });

    eventsAirtableRecords.getEventsQuery = getEventsQueryMock;
    eventsAirtableRecords.isEventInDateRange = vi.fn().mockReturnValue(true);

    (axios.get as any).mockResolvedValue({
      data: "Omnis non molestiae voluptatem beatae soluta nobis ducimus.",
    });
    const result = await eventsAirtableRecords.fetchSeminarSeriesEvents(-10);

    expect(result).toStrictEqual([
      {
        endDate: "",
        institution: "Kihn - Rolfson",
        location: "YouTube",
        speaker: "Deondre Halvorson",
        title: "Ea commodi earum id.",
        to: "http://example.com",
        abstract: "Qui facere assumenda ducimus.",
        date: "June 9, 2023",
        image: "/images/events/downloaded/undefined.jpg",
        startDate: "2023-06-09",
      },
      {
        endDate: "",
        institution: "Okuneva Group",
        location: "YouTube",
        speaker: "Lela Bahringer",
        title: "delectus eaque consectetur",
        to: "http://example.com",
        abstract: "",
        date: "July 29, 2022",
        image: "/images/events/downloaded/undefined.jpg",
        startDate: "2022-07-29",
      },
    ]);
  });

  test("If no recordFields should get from getAllFieldNames", async () => {
    const eventsAirtableRecords = new FakeEventsAirtableRecords(
      "testApiKey",
      "testView"
    );

    const getEventsQueryMock = vi.fn().mockReturnValue({
      eachPage: (callBack: (records: any, nextPage: any) => void) => {
        callBack(fakeRecords, () => {});

        return Promise.resolve();
      },
    });

    const getAllFieldNamesMock = vi.fn().mockReturnValue(mockRecordFields);

    eventsAirtableRecords.getEventsQuery = getEventsQueryMock;
    eventsAirtableRecords.getAllFieldNames = getAllFieldNamesMock;

    await eventsAirtableRecords.fetchSeminarSeriesEvents(10);

    expect(eventsAirtableRecords.recordFields).toStrictEqual(mockRecordFields);
  });

  test("test fallback cases", async () => {
    const eventsAirtableRecords = new FakeEventsAirtableRecords(
      "testApiKey",
      "testView",
      undefined,
      {}
    );

    const seminarEvent =
      await eventsAirtableRecords.convertToSeminarSeriesEvent(fakeRecords[0]);

    expect(seminarEvent).toStrictEqual({
      abstract: "",
      date: "TBD",
      endDate: "",
      image: "/images/events/no-picture.jpg",
      institution: "",
      location: "TBD",
      speaker: "",
      startDate: "",
      title: "",
      to: "",
    });
  });
});

describe("formatTime", () => {
  test("format a valid date", () => {
    const eventsAirtableRecords = new FakeEventsAirtableRecords(
      "testApiKey",
      "testView"
    );

    eventsAirtableRecords.recordFields = {};

    const date = eventsAirtableRecords.formatTime("2020-10-10 00:00:00 UTC");

    expect(date.replace("\u202F", " ")).toBe("12:00 AM UTC");
  });
});
