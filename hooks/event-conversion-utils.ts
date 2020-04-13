import Airtable from 'airtable'

// TODO: Understand why this import works with '../' and not with '~/'
import {
  CommunityEvent,
  CommunityEventType,
  WorldLocation,
  LOCATION_CATEGORIES,
  COMMUNITY_EVENT_TYPES
} from '../store/modules/events'

const RECORD_FIELDS = {
  name: 'Name',
  startDate: 'Start Date',
  endDate: 'End Date',
  typeOfEvent: 'Type of Event',
  eventWebsite: 'Event Website',
  eventLocation: 'Event Location'
}

async function fetchCommunityEvents (apiKey: string, { days }): Promise<CommunityEvent[]> {
  const communityEvents: CommunityEvent[] = []
  const base = new Airtable({ apiKey }).base('appkaaRF2QdwfusP1')
  await base('Events Master View').select({
    fields: Object.values(RECORD_FIELDS),
    filterByFormula: `AND(
      DATETIME_DIFF({Start Date}, TODAY(), 'days') ${days > 0 ? '<=' : '>='} ${days},
      DATETIME_DIFF({Start Date}, TODAY(), 'days') ${days > 0 ? '>=' : '<'} 0,
      FIND("IBMers Attending", {What do we send? (Involvement)}) > 0
    )`,
    sort: [{ field: 'Start Date', direction: days > 0 ? 'asc' : 'desc' }]
  }).eachPage((records, nextPage) => {
    for (const record of records) {
      const communityEvent = convertToCommunityEvent(record)
      communityEvents.push(communityEvent)
    }
    nextPage()
  })
  return Promise.resolve(communityEvents)
}

function convertToCommunityEvent (record: any): CommunityEvent {
  return {
    title: getName(record),
    type: getType(record),
    image: getImage(record),
    place: getPlace(record),
    location: getLocation(record),
    date: formatDates(...getDates(record)),
    to: getWebsite(record)
  }
}

function getName (record: any): string {
  return record.get(RECORD_FIELDS.name)
}

function getType (record: any): CommunityEventType {
  const { camp, hackathon, unconference, conference } = COMMUNITY_EVENT_TYPES
  const { name, typeOfEvent } = RECORD_FIELDS

  if (record.get(name).toLowerCase().includes('qiskit camp')) {
    return camp
  }
  if ((record.get(typeOfEvent) || []).includes(hackathon)) {
    return hackathon
  }
  if ((record.get(typeOfEvent) || []).includes(unconference)) {
    return unconference
  }
  return conference
}

function getImage (_record: any): string {
  const options = [
    '/images/events/promo-finland-unconference.jpg',
    '/images/events/promo-vermont.jpg',
    '/images/events/promo-asia.jpg'
  ]
  return options[Math.floor(Math.random() * options.length)]
}

function getPlace (record: any) {
  return record.get(RECORD_FIELDS.eventLocation)
}

function getLocation (_record: any): WorldLocation {
  const options: WorldLocation[] = LOCATION_CATEGORIES
  return options[Math.floor(Math.random() * options.length)]
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
  convertToCommunityEvent,
  getName,
  getType,
  getImage,
  getPlace,
  getLocation,
  getWebsite,
  getDates,
  formatDates
}
