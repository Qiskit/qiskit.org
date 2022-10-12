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
  getImageUrl,
  findImageAttachment
} from './airtable-conversion-utils'

type SeminarSeriesEvent = {
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

const RECORD_FIELDS = Object.freeze({
  name: 'Name',
  startDate: 'Start Date',
  endDate: 'End Date',
  typeOfEvent: 'Type of Event',
  eventWebsite: 'Website',
  location: 'Event Location',
  region: 'Region',
  image: 'Image / Icon',
  institution: 'Institution',
  showOnEventsPage: 'Add to Event Site',
  showOnSeminarSeriesPage: 'Add to Seminar Series Site',
  speaker: 'Speaker (S.S.)'
} as const)

function getEventsQuery (apiKey: string, days: number, view: string, filters: string[] = []): Airtable.Query<{}> {
  const { startDate } = RECORD_FIELDS
  const base = new Airtable({ apiKey }).base('appYREKB18uC7y8ul')
  const filterByFormula = `AND(${filters})`

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
function isEventInDateRange (
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

async function fetchCommunityEvents (apiKey: string, { days }: { days: any }): Promise<CommunityEvent[]> {
  const { showOnEventsPage } = RECORD_FIELDS
  const communityEvents: CommunityEvent[] = []

  await getEventsQuery(apiKey, days, 'Add to Event Site', [`{${showOnEventsPage}}`]).eachPage((records, nextPage) => {
    for (const record of records) {
      const communityEvent = convertToCommunityEvent(record)
      if (isEventInDateRange(communityEvent, days)) {
        communityEvents.push(communityEvent)
      }
    }
    nextPage()
  })

  return Promise.resolve(communityEvents)
}

async function fetchSeminarSeriesEvents (apiKey: string, { days }: { days: any }): Promise<SeminarSeriesEvent[]> {
  const { showOnSeminarSeriesPage } = RECORD_FIELDS
  const seminarSeriesEvents: SeminarSeriesEvent[] = []

  await getEventsQuery(apiKey, days, 'Seminar Series ONLY', [`{${showOnSeminarSeriesPage}}`]).eachPage((records, nextPage) => {
    for (const record of records) {
      const seminarSeriesEvent = convertToSeminarSeriesEvent(record)

      if (typeof (seminarSeriesEvent.to) !== 'undefined') {
        if (isEventInDateRange(seminarSeriesEvent, days)) {
          seminarSeriesEvents.push(seminarSeriesEvent)
        }
      }
    }
    nextPage()
  })

  return Promise.resolve(seminarSeriesEvents)
}

function convertToCommunityEvent (record: any): CommunityEvent {
  return {
    title: getName(record),
    types: getTypes(record),
    image: getImage(record),
    location: getLocation(record),
    regions: getRegions(record),
    date: formatDates(...getDates(record)),
    startDate: getStartDate(record),
    endDate: getEndDate(record),
    to: getWebsite(record)
  }
}

function convertToSeminarSeriesEvent (record: any): SeminarSeriesEvent {
  return {
    date: formatDates(...getDates(record)),
    startDate: getStartDate(record),
    endDate: getEndDate(record),
    image: getImage(record),
    institution: getInstitution(record),
    location: getLocation(record),
    speaker: getSpeaker(record),
    title: getName(record),
    to: getWebsite(record)
  }
}

function getInstitution (record: any): string {
  return record.get(RECORD_FIELDS.institution) || ''
}

function getName (record: any): string {
  return record.get(RECORD_FIELDS.name)
}

function getSpeaker (record: any): string {
  return record.get(RECORD_FIELDS.speaker)
}

function getTypes (record: any): CommunityEventType[] {
  const value = record.get(RECORD_FIELDS.typeOfEvent) || []
  const valueList = (Array.isArray(value) ? value : [value]) as string[]
  const communityEventTypes = filterWithWhitelist(valueList, COMMUNITY_EVENT_TYPE_OPTIONS)
  const noTypes = communityEventTypes.length === 0
  return noTypes ? [COMMUNITY_EVENT_TYPES.talks] : communityEventTypes
}

function filterWithWhitelist<W> (list: any[], whitelist: readonly W[]): W[] {
  return list.filter((type): type is W => whitelist.includes(type))
}

function getImage (record: any): string {
  const fallbackImage = '/images/events/no-picture.jpg'
  const attachments = record.get(RECORD_FIELDS.image)
  const imageAttachment = attachments && findImageAttachment(attachments)
  const imageUrl = imageAttachment && getImageUrl(imageAttachment)
  return imageUrl || fallbackImage
}

function getLocation (record: any): string {
  return record.get(RECORD_FIELDS.location) || WORLD_REGIONS.tbd
}

function getRegions (record: any): WorldRegion[] {
  const recordRegion = record.get(RECORD_FIELDS.region)
  return recordRegion || [WORLD_REGIONS.tbd]
}

function getStartDate (record: any): string {
  return record.get(RECORD_FIELDS.startDate) || ''
}

function getEndDate (record: any): string {
  return record.get(RECORD_FIELDS.endDate) || ''
}

function getDates (record: any): [Date, Date|undefined] {
  const recordStartDate = record.get(RECORD_FIELDS.startDate)
  const recordEndDate = record.get(RECORD_FIELDS.endDate)
  const startDate = recordStartDate && new Date(recordStartDate)
  const endDate = recordEndDate && new Date(recordEndDate)
  return [startDate, endDate]
}

function formatDates (startDate?: Date, endDate?: Date): string {
  if (!startDate) { return 'TBD' }

  const [startYear, startMonth, startDay] = dateParts(startDate)
  if (!endDate || startDate.getTime() === endDate.getTime()) {
    return `${startMonth} ${startDay}, ${startYear}`
  }

  const [endYear, endMonth, endDay] = dateParts(endDate)
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

function dateParts (date: Date): [string, string, string] {
  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
  const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(date)
  const day = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(date)
  return [year, month, day]
}

function getWebsite (record: any): string {
  return record.get('Website')
}

export {
  RECORD_FIELDS,
  fetchCommunityEvents,
  fetchSeminarSeriesEvents,
  convertToCommunityEvent,
  getName,
  getTypes,
  getImage,
  getLocation,
  getRegions,
  getWebsite,
  getDates,
  formatDates,
  filterWithWhitelist,
  isEventInDateRange,
  SeminarSeriesEvent
}
