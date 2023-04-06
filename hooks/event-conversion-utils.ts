import Airtable from "airtable";

import {
  CommunityEvent,
  CommunityEventType,
  COMMUNITY_EVENT_TYPES,
  COMMUNITY_EVENT_TYPE_OPTIONS,
  type WorldRegion,
  WORLD_REGIONS,
} from "../types/events";
import {
  AirtableRecords,
  getImageUrl,
  findImageAttachment,
} from "./airtable-conversion-utils";

// TODO: Understand why this import worked with '../' and not with '~/'
// The types has been moved outside the store, check if this works as expected

export type SeminarSeriesEvent = {
  date: string;
  startDate: string;
  endDate: string;
  startDateAndTime?: string | null;
  image: string;
  institution: string;
  location: string;
  speaker: string;
  title: string;
  to: string;
};

const RECORD_FIELDS_IDS = Object.freeze({
  name: "fldTqTxKr3ZzUhzKT",
  startDate: "fldPGzoUf9wxsBDYJ",
  endDate: "fldeFv42sqOY7oMy0",
  startDateAndTime: "fldF2COMbzANgkOh8",
  types: "fldarZoYRJvETevow",
  website: "fldBPq3LMa5aZDBZm",
  location: "fldSjeniJtud6M5j3",
  regions: "fldBCXzoxvcoxsKIK",
  image: "fldco5xB6dy9MG7y8",
  institution: "fldLVMuuhZVGwh4qZ",
  showOnEventsPage: "fldi1ThdDnUQakxWo",
  showOnSeminarSeriesPage: "fldl6in6TPajnxPMs",
  speaker: "fldyeOkGwMbfMRvPu",
  abstract: "fldBqkIigePRu4oZd",
} as const);

const AIRTABLE_BASE_ID = "appYREKB18uC7y8ul";
class EventsAirtableRecords extends AirtableRecords {
  constructor(
    apiKey: string,
    view: string,
    recordFields?: Record<string, any>
  ) {
    super(
      apiKey,
      AIRTABLE_BASE_ID,
      "Event Calendar",
      view,
      undefined,
      recordFields
    );
  }

  /**
   * Sort the events by their start date.
   * @param events The events to sort.
   * @param direction The direction to sort the events in.
   * @returns The sorted events.
   */
  private sortEventsByStartDate<T extends CommunityEvent | SeminarSeriesEvent>(
    events: T[],
    direction: "asc" | "desc"
  ): T[] {
    return events.sort((a, b) => {
      const aDate = new Date(a.startDate);
      const bDate = new Date(b.startDate);

      if (direction === "asc") {
        return aDate.getTime() - bDate.getTime();
      } else {
        return bDate.getTime() - aDate.getTime();
      }
    });
  }

  /**
   * Get the Airtable query for the events.
   * @param filterFormula The Airtable filter formula to use.
   * @returns The Airtable query.
   */
  getEventsQuery(filterFormula: string): Airtable.Query<{}> {
    const base = new Airtable({ apiKey: this.apiKey }).base(AIRTABLE_BASE_ID);

    return base("Event Calendar").select({
      filterByFormula: filterFormula,
    });
  }

  /**
   * Check whether an event happens within a predetermined number of days before
   * or after today.
   * If the "days" parameter is positive, the event must happen in the future,
   * between today and the given number of days after today.
   * If the "days" parameter is negative, the event must happen in the past,
   * between today and the given number of days before today.
   * @param event The event to check.
   * @param days The number of days before and after today.
   * @returns Whether the event happens within the specified range.
   */
  isEventInDateRange(
    event: CommunityEvent | SeminarSeriesEvent,
    days: number
  ): boolean {
    const { startDate, endDate } = event;
    const today: Date = new Date();
    const eventStartDate: Date = new Date(startDate);
    const eventEndDate: Date = new Date(endDate);
    const isFutureRange: boolean = days >= 0;
    const isOngoingEvent: boolean =
      eventStartDate <= today && today <= eventEndDate;
    const isToday: boolean =
      eventStartDate.getDate() === today.getDate() &&
      eventStartDate.getMonth() === today.getMonth() &&
      eventStartDate.getFullYear() === today.getFullYear();
    let eventDateToCheck: Date;

    // Determine which date to check based on the days parameter and checking if
    // the event's dates are valid.
    if (isFutureRange && isOngoingEvent) {
      return true;
    } else if (isFutureRange && isToday) {
      return true;
    } else if (!isFutureRange && isToday) {
      return false;
    } else if (!isFutureRange && !isNaN(eventEndDate.getTime())) {
      eventDateToCheck = eventEndDate;
    } else if (!isNaN(eventStartDate.getTime())) {
      eventDateToCheck = eventStartDate;
    } else {
      return false;
    }

    let rangeStart: Date;
    let rangeEnd: Date;

    // Determine the range of dates to check.
    if (isFutureRange) {
      rangeStart = new Date(today);
      rangeEnd = new Date(today.getTime() + days * 24 * 60 * 60 * 1000);
    } else {
      rangeStart = new Date(today.getTime() + days * 24 * 60 * 60 * 1000);
      rangeEnd = new Date(today);
    }

    return eventDateToCheck >= rangeStart && eventDateToCheck <= rangeEnd;
  }

  /**
   * Fetch the community events from Airtable, convert them to the
   * CommunityEvent type, and return them sorted by their start date.
   * @param days The number of days before and after today to fetch events for.
   * @returns The community events.
   */
  async fetchCommunityEvents(days: number): Promise<CommunityEvent[]> {
    if (!this.recordFields) {
      this.recordFields = await this.getAllFieldNames(RECORD_FIELDS_IDS);
    }

    const communityEvents: CommunityEvent[] = [];
    const filterFormula = `{${this.recordFields.showOnEventsPage}}`;

    await this.getEventsQuery(filterFormula).eachPage(
      async (records, nextPage) => {
        for (const record of records) {
          this.id = record.id;
          const communityEvent = await this.convertToCommunityEvent(record);

          if (this.isEventInDateRange(communityEvent, days)) {
            communityEvents.push(communityEvent);
          }
        }
        nextPage();
      }
    );

    const sortedCommunityEvents = this.sortEventsByStartDate(
      communityEvents,
      days > 0 ? "asc" : "desc"
    );
    return Promise.resolve(sortedCommunityEvents);
  }

  /**
   * Fetch the seminar series events from Airtable, convert them to the
   * SeminarSeriesEvent type, and return them sorted by their start date.
   * @param days The number of days before and after today to fetch events for.
   * @returns The seminar series events.
   */
  async fetchSeminarSeriesEvents(days: number): Promise<SeminarSeriesEvent[]> {
    if (!this.recordFields) {
      this.recordFields = await this.getAllFieldNames(RECORD_FIELDS_IDS);
    }

    const seminarSeriesEvents: SeminarSeriesEvent[] = [];
    const filterFormula = `{${this.recordFields.showOnSeminarSeriesPage}}`;

    await this.getEventsQuery(filterFormula).eachPage(
      async (records, nextPage) => {
        for (const record of records) {
          this.id = record.id;
          const seminarSeriesEvent = await this.convertToSeminarSeriesEvent(
            record
          );

          if (typeof seminarSeriesEvent.to !== "undefined") {
            if (this.isEventInDateRange(seminarSeriesEvent, days)) {
              seminarSeriesEvents.push(seminarSeriesEvent);
            }
          }
        }
        nextPage();
      }
    );

    const sortedSeminarSeriesEvents = this.sortEventsByStartDate(
      seminarSeriesEvents,
      days > 0 ? "asc" : "desc"
    );
    return Promise.resolve(sortedSeminarSeriesEvents);
  }

  /**
   * Convert an Airtable record to a CommunityEvent.
   * @param record The Airtable record to convert.
   * @returns The converted CommunityEvent.
   */
  async convertToCommunityEvent(
    record: Record<string, any>
  ): Promise<CommunityEvent> {
    const event = {
      endDate: (record.get(this.recordFields!.endDate) as string) || "",
      location:
        (record.get(this.recordFields!.location) as string) ||
        WORLD_REGIONS.tbd,
      regions: (record.get(this.recordFields!.regions) as WorldRegion[]) || [
        WORLD_REGIONS.tbd,
      ],
      title: (record.get(this.recordFields!.name) as string) || "",
      to: (record.get(this.recordFields!.website) as string) || "",
      abstract: record.get(this.recordFields!.abstract) || "",

      date: this.formatDates(...this.getDates(record)),
      image: await this.getImage(record),
      startDate: this.getStartDate(record),
      startDateAndTime: this.formatTime(
        record.get(this.recordFields!.startDateAndTime) || null
      ),
      types: this.getEventTypes(record),
    };
    return event;
  }

  /**
   * Convert an Airtable record to a SeminarSeriesEvent.
   * @param record The Airtable record to convert.
   * @returns The converted SeminarSeriesEvent.
   */
  async convertToSeminarSeriesEvent(
    record: Record<string, any>
  ): Promise<SeminarSeriesEvent> {
    const event = {
      endDate: record.get(this.recordFields!.endDate) || "",
      institution: record.get(this.recordFields!.institution) || "",
      location: record.get(this.recordFields!.location) || WORLD_REGIONS.tbd,
      speaker: record.get(this.recordFields!.speaker) || "",
      title: record.get(this.recordFields!.name) || "",
      to: record.get(this.recordFields!.website) || "",
      abstract: record.get(this.recordFields!.abstract) || "",

      date: this.formatDates(...this.getDates(record)),
      image: await this.getImage(record),
      startDate: this.getStartDate(record),
    };
    return event;
  }

  dateParts(date: Date): [string, string, string] {
    const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
      date
    );
    const month = new Intl.DateTimeFormat("en", { month: "long" }).format(date);
    const day = new Intl.DateTimeFormat("en", { day: "numeric" }).format(date);
    return [year, month, day];
  }

  filterWithWhitelist<W>(list: any[], whitelist: readonly W[]): W[] {
    return list.filter((type): type is W => whitelist.includes(type));
  }

  formatDates(startDate?: Date, endDate?: Date): string {
    if (!startDate) {
      return "TBD";
    }

    const [startYear, startMonth, startDay] = this.dateParts(startDate);
    if (!endDate || startDate.getTime() === endDate.getTime()) {
      return `${startMonth} ${startDay}, ${startYear}`;
    }

    const [endYear, endMonth, endDay] = this.dateParts(endDate);
    if (startYear !== endYear) {
      return `${startMonth} ${startDay}, ${startYear} - ${endMonth} ${endDay}, ${endYear}`;
    }
    if (startMonth !== endMonth) {
      return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${startYear}`;
    }
    if (startDay !== endDay) {
      return `${startMonth} ${startDay}-${endDay}, ${startYear}`;
    }
    throw new Error("Unreachable: should have all the cases covered.");
  }

  /**
   * Format a date and time to a string with only the time in UTC.
   * @param startDateAndTime The date and time to format.
   * @returns The formatted time.
   */
  formatTime(startDateAndTime: string | null): string | null {
    if (!startDateAndTime) {
      return null;
    }

    const formattedStartDateAndTime = new Date(startDateAndTime);

    const options = {
      hour: "numeric",
      minute: "numeric",
      timeZone: "UTC",
      timeZoneName: "short",
    } as const;

    return new Intl.DateTimeFormat("en", options).format(
      formattedStartDateAndTime
    );
  }

  /**
   * Get the event's types.
   * @param record The event's record.
   * @returns The event's types.
   */
  private getEventTypes(record: Record<string, any>): CommunityEventType[] {
    const value = record.get(this.recordFields!.types) || [];
    const valueList = (Array.isArray(value) ? value : [value]) as string[];
    const communityEventTypes = this.filterWithWhitelist(
      valueList,
      COMMUNITY_EVENT_TYPE_OPTIONS
    );
    const noTypes = communityEventTypes.length === 0;
    return noTypes ? [COMMUNITY_EVENT_TYPES.talks] : communityEventTypes;
  }

  /**
   * Get the event's image.
   * @param record The event's record.
   * @returns Promise resolving to the event's image URL.
   */
  public async getImage(record: Record<string, any>): Promise<string> {
    const fallbackImage = "/images/events/no-picture.jpg";
    const attachments = record.get(this.recordFields!.image);
    const imageAttachment = attachments && findImageAttachment(attachments);
    const imageUrl = imageAttachment && getImageUrl(imageAttachment);

    if (!imageUrl) {
      return fallbackImage;
    }

    const imagePublicPath = `/images/events/downloaded/${this.id}.jpg`;

    return await this.storeImage(imageUrl, `public/${imagePublicPath}`)
      .then(() => imagePublicPath)
      .catch(() => fallbackImage);
  }

  /**
   * Get the event's start date.
   * @param record The event's record.
   * @returns The event's start date.
   */
  public getStartDate(record: Record<string, any>): string {
    if (record.get(this.recordFields!.startDateAndTime)) {
      const startDateAndTime = record.get(this.recordFields!.startDateAndTime);
      const startDate = new Date(startDateAndTime);
      return startDate.toISOString().split("T")[0];
    }

    return record.get(this.recordFields!.startDate) || "";
  }

  /**
   * Get the event's start and end dates.
   * @param record The event's record.
   * @returns The event's start and end dates.
   */
  public getDates(
    record: Record<string, any>
  ): [Date | undefined, Date | undefined] {
    const recordStartDate = this.getStartDate(record);
    const recordEndDate = record.get(this.recordFields!.endDate) as
      | string
      | undefined;

    let startDate: Date | undefined;
    let endDate: Date | undefined;

    if (recordStartDate) {
      startDate = new Date(recordStartDate);
    }

    if (recordEndDate) {
      endDate = new Date(recordEndDate);
    }

    return [startDate, endDate];
  }
}

export default EventsAirtableRecords;
