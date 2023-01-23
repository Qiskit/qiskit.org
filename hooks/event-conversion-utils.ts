import Airtable from 'airtable'

// TODO: Understand why this import works with '../' and not with '~/'
import {
  CommunityEvent,
  CommunityEventType,
  WorldRegion,
  COMMUNITY_EVENT_TYPES,
  COMMUNITY_EVENT_TYPE_OPTIONS,
  WORLD_REGIONS
} from '../store/events'

import {
  AirtableRecords,
  getImageUrl,
  findImageAttachment
} from './airtable-conversion-utils'

export type SeminarSeriesEvent = {
  date: string,
  startDate: string,
  endDate: string,
  image: string,
  institution: string,
  location: string,
  speaker: string,
  title: string,
  to: string
}

const RECORD_FIELDS_IDS = Object.freeze({
  name: 'fldTqTxKr3ZzUhzKT',
  startDate: 'fldPGzoUf9wxsBDYJ',
  endDate: 'fldeFv42sqOY7oMy0',
  types: 'fldarZoYRJvETevow',
  eventWebsite: 'fldBPq3LMa5aZDBZm',
  location: 'fldSjeniJtud6M5j3',
  regions: 'fldBCXzoxvcoxsKIK',
  image: 'fldco5xB6dy9MG7y8',
  institution: 'fldLVMuuhZVGwh4qZ',
  showOnEventsPage: 'fldi1ThdDnUQakxWo',
  showOnSeminarSeriesPage: 'fldl6in6TPajnxPMs',
  speaker: 'fldyeOkGwMbfMRvPu'
} as const)

const AIRTABLE_BASE_ID = 'appYREKB18uC7y8ul'
class EventsAirtableRecords extends AirtableRecords {
  constructor (apiKey: string, view: string, recordFields?: Record<string, any>) {
    super(apiKey, AIRTABLE_BASE_ID, 'Event Calendar', view, recordFields)
  }

  getEventsQuery (days: number, view: string, filters: string[] = []): Airtable.Query<{}> {
    const { startDate } = this.recordFields!
    const filterByFormula = `AND(${filters})`
    const base = new Airtable({ apiKey: this.apiKey }).base(AIRTABLE_BASE_ID)

    return base('Event Calendar').select({
      filterByFormula,
      sort: [{ field: startDate, direction: days > 0 ? 'asc' : 'desc' }],
      view
    })
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
  isEventInDateRange (
    event: CommunityEvent | SeminarSeriesEvent,
    days: number
  ): boolean {
    const { startDate, endDate } = event
    const today: Date = new Date()
    const eventStartDate: Date = new Date(startDate)
    const eventEndDate: Date = new Date(endDate)
    const isFutureRange: boolean = days >= 0
    const isOngoingEvent: boolean = eventStartDate <= today && today <= eventEndDate
    const isToday: boolean = eventStartDate.getDate() === today.getDate() && eventStartDate.getMonth() === today.getMonth() && eventStartDate.getFullYear() === today.getFullYear()
    let eventDateToCheck: Date

    // Determine which date to check based on the days parameter and checking if
    // the event's dates are valid.
    if (isFutureRange && isOngoingEvent) {
      return true
    } else if (isFutureRange && isToday) {
      return true
    } else if (!isFutureRange && isToday) {
      return false
    } else if (!isFutureRange && !isNaN(eventEndDate.getTime())) {
      eventDateToCheck = eventEndDate
    } else if (!isNaN(eventStartDate.getTime())) {
      eventDateToCheck = eventStartDate
    } else {
      return false
    }

    let rangeStart: Date
    let rangeEnd: Date

    // Determine the range of dates to check.
    if (isFutureRange) {
      rangeStart = new Date(today)
      rangeEnd = new Date(today.getTime() + days * 24 * 60 * 60 * 1000)
    } else {
      rangeStart = new Date(today.getTime() + days * 24 * 60 * 60 * 1000)
      rangeEnd = new Date(today)
    }

    return eventDateToCheck >= rangeStart && eventDateToCheck <= rangeEnd
  }

  async fetchCommunityEvents (days: number): Promise<CommunityEvent[]> {
    const view = 'Add to Event Site'

    if (!this.recordFields) {
      this.recordFields = await this.getAllFieldNames(RECORD_FIELDS_IDS)
    }

    const { showOnEventsPage } = this.recordFields
    const communityEvents: CommunityEvent[] = []

    await this.getEventsQuery(days, view, [`{${showOnEventsPage}}`]).eachPage((records, nextPage) => {
      for (const record of records) {
        const communityEvent = this.convertToCommunityEvent(record)
        if (this.isEventInDateRange(communityEvent, days)) {
          communityEvents.push(communityEvent)
        }
      }
      nextPage()
    })

    return Promise.resolve(communityEvents)
  }

  async fetchSeminarSeriesEvents (days: number): Promise<SeminarSeriesEvent[]> {
    const view = 'Seminar Series ONLY'

    if (!this.recordFields) {
      this.recordFields = await this.getAllFieldNames(RECORD_FIELDS_IDS)
    }

    const { showOnSeminarSeriesPage } = this.recordFields
    const seminarSeriesEvents: SeminarSeriesEvent[] = []

    await this.getEventsQuery(days, view, [`{${showOnSeminarSeriesPage}}`]).eachPage((records, nextPage) => {
      for (const record of records) {
        const seminarSeriesEvent = this.convertToSeminarSeriesEvent(record)

        if (typeof (seminarSeriesEvent.to) !== 'undefined') {
          if (this.isEventInDateRange(seminarSeriesEvent, days)) {
            seminarSeriesEvents.push(seminarSeriesEvent)
          }
        }
      }
      nextPage()
    })

    return Promise.resolve(seminarSeriesEvents)
  }

  convertToCommunityEvent (record: any): CommunityEvent {
    return {
      title: this.getName(record),
      types: this.getTypes(record),
      image: this.getImage(record),
      location: this.getLocation(record),
      regions: this.getRegions(record),
      date: this.formatDates(...this.getDates(record)),
      startDate: this.getStartDate(record),
      endDate: this.getEndDate(record),
      to: this.getWebsite(record)
    }
  }

  convertToSeminarSeriesEvent (record: any): SeminarSeriesEvent {
    return {
      date: this.formatDates(...this.getDates(record)),
      startDate: this.getStartDate(record),
      endDate: this.getEndDate(record),
      image: this.getImage(record),
      institution: this.getInstitution(record),
      location: this.getLocation(record),
      speaker: this.getSpeaker(record),
      title: this.getName(record),
      to: this.getWebsite(record)
    }
  }

  dateParts (date: Date): [string, string, string] {
    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
    const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(date)
    const day = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(date)
    return [year, month, day]
  }

  filterWithWhitelist<W> (list: any[], whitelist: readonly W[]): W[] {
    return list.filter((type): type is W => whitelist.includes(type))
  }

  formatDates (startDate?: Date, endDate?: Date): string {
    if (!startDate) { return 'TBD' }

    const [startYear, startMonth, startDay] = this.dateParts(startDate)
    if (!endDate || startDate.getTime() === endDate.getTime()) {
      return `${startMonth} ${startDay}, ${startYear}`
    }

    const [endYear, endMonth, endDay] = this.dateParts(endDate)
    if (startYear !== endYear) {
      return `${startMonth} ${startDay}, ${startYear} - ${endMonth} ${endDay}, ${endYear}`
    }
    if (startMonth !== endMonth) {
      return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${startYear}`
    }
    if (startDay !== endDay) {
      return `${startMonth} ${startDay}-${endDay}, ${startYear}`
    }
    throw new Error('Unreachable: should have all the cases covered.')
  }

  public getInstitution (record: any): string {
    return record.get(this.recordFields!.institution) || ''
  }

  public getName (record: any): string {
    return record.get(this.recordFields!.name)
  }

  public getSpeaker (record: any): string {
    return record.get(this.recordFields!.speaker)
  }

  public getTypes (record: any): CommunityEventType[] {
    const value = record.get(this.recordFields!.types) || []
    const valueList = (Array.isArray(value) ? value : [value]) as string[]
    const communityEventTypes = this.filterWithWhitelist(valueList, COMMUNITY_EVENT_TYPE_OPTIONS)
    const noTypes = communityEventTypes.length === 0
    return noTypes ? [COMMUNITY_EVENT_TYPES.talks] : communityEventTypes
  }

  public getImage (record: any): string {
    const fallbackImage = '/images/events/no-picture.jpg'
    const attachments = record.get(this.recordFields!.image)
    const imageAttachment = attachments && findImageAttachment(attachments)
    const imageUrl = imageAttachment && getImageUrl(imageAttachment)
    return imageUrl || fallbackImage
  }

  public getLocation (record: any): string {
    return record.get(this.recordFields!.location) || WORLD_REGIONS.tbd
  }

  public getRegions (record: any): WorldRegion[] {
    const recordRegion = record.get(this.recordFields!.regions)
    return recordRegion || [WORLD_REGIONS.tbd]
  }

  public getStartDate (record: any): string {
    return record.get(this.recordFields!.startDate) || ''
  }

  public getEndDate (record: any): string {
    return record.get(this.recordFields!.endDate) || ''
  }

  public getDates (record: any): [Date, Date|undefined] {
    const recordStartDate = record.get(this.recordFields!.startDate)
    const recordEndDate = record.get(this.recordFields!.endDate)
    const startDate = recordStartDate && new Date(recordStartDate)
    const endDate = recordEndDate && new Date(recordEndDate)
    return [startDate, endDate]
  }

  public getWebsite (record: any): string {
    return record.get(this.recordFields!.website) || ''
  }
}

export default EventsAirtableRecords
