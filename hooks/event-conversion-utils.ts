import Airtable from 'airtable'

// TODO: Understand why this import works with '../' and not with '~/'
import {
  CommunityEvent,
  CommunityEventType,
  WorldRegion,
  COMMUNITY_EVENT_TYPES,
  COMMUNITY_EVENT_TYPE_OPTIONS,
  WORLD_REGIONS
} from '../store/modules/events'

import {
  getImageUrl,
  findImageAttachment
} from './airtable-conversion-utils'

type SeminarSeriesEvent = {
  date: string,
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
  eventWebsite: 'Event Website',
  location: 'Event Location',
  region: 'Region',
  image: 'Picture?',
  institution: 'Institution',
  showOnEventsPage: 'SUZIE - for website?',
  showOnSeminarSeriesPage: 'PAUL - Seminar Site',
  speaker: 'Speaker'
} as const)

function getEventsQuery (apiKey: string, days: number, view: string, filters: string[] = []): Airtable.Query<{}> {
  const { startDate } = RECORD_FIELDS
  const base = new Airtable({ apiKey }).base('appkaaRF2QdwfusP1')

  const formulaFilters = [
    `DATETIME_DIFF({${startDate}}, TODAY(), 'days') ${days > 0 ? '<=' : '>='} ${days}`,
    `DATETIME_DIFF({${startDate}}, TODAY(), 'days') ${days > 0 ? '>=' : '<'} 0`,
    ...filters
  ]

  const filterByFormula = `AND(${formulaFilters.join(',')})`

  return base('Events Main View').select({
    filterByFormula,
    sort: [{ field: startDate, direction: days > 0 ? 'asc' : 'desc' }],
    view
  })
}

async function fetchCommunityEvents (apiKey: string, { days }: { days: any }): Promise<CommunityEvent[]> {
  const { showOnEventsPage } = RECORD_FIELDS
  const communityEvents: CommunityEvent[] = []

  await getEventsQuery(apiKey, days, 'Main List', [`{${showOnEventsPage}}`]).eachPage((records, nextPage) => {
    for (const record of records) {
      const communityEvent = convertToCommunityEvent(record)
      communityEvents.push(communityEvent)
    }
    nextPage()
  })

  return Promise.resolve(communityEvents)
}

async function fetchSeminarSeriesEvents (apiKey: string, { days }: { days: any }): Promise<SeminarSeriesEvent[]> {
  const { showOnSeminarSeriesPage } = RECORD_FIELDS
  const seminarSeriesEvents: SeminarSeriesEvent[] = []

  await getEventsQuery(apiKey, days, 'Seminar Series Website', [`{${showOnSeminarSeriesPage}}`]).eachPage((records, nextPage) => {
    for (const record of records) {
      const seminarSeriesEvent = convertToSeminarSeriesEvent(record)
      seminarSeriesEvents.push(seminarSeriesEvent)
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
    region: getRegion(record),
    date: formatDates(...getDates(record)),
    to: getWebsite(record)
  }
}

function convertToSeminarSeriesEvent (record: any): SeminarSeriesEvent {
  return {
    date: formatDates(...getDates(record)),
    image: getImage(record),
    institution: getInstitution(record),
    location: getLocation(record),
    speaker: getSpeaker(record),
    title: getName(record),
    to: getWebsite(record)
  }
}

function getInstitution (record: any): string {
  return record.get(RECORD_FIELDS.institution)
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
  return record.get(RECORD_FIELDS.location) || getRegion(record)
}

function getRegion (record: any): WorldRegion {
  return record.get(RECORD_FIELDS.region) || WORLD_REGIONS.tbd
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
  return record.get('Event Website')
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
  getRegion,
  getWebsite,
  getDates,
  formatDates,
  filterWithWhitelist,
  SeminarSeriesEvent
}
