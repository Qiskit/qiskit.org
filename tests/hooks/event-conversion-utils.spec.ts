import {
  RECORD_FIELDS,
  formatDates,
  convertToCommunityEvent,
  getType,
  getDates
} from '~/hooks/event-conversion-utils'

import { COMMUNITY_EVENT_TYPES } from '~/store/modules/events'

type RecordFields = {
  name: string,
  types?: string[],
  location?: string,
  startDate?: string,
  endDate?: string,
  website?: string
}

class FakeRecord {
  _fields: object = {}

  constructor ({ name, types, location, startDate, endDate, website }: RecordFields) {
    this._fields = {
      [RECORD_FIELDS.name]: name,
      [RECORD_FIELDS.typeOfEvent]: types,
      [RECORD_FIELDS.eventLocation]: location,
      [RECORD_FIELDS.startDate]: startDate,
      [RECORD_FIELDS.endDate]: endDate,
      [RECORD_FIELDS.eventWebsite]: website
    }
  }

  get (key: string): string {
    return this._fields[key]
  }
}

describe('convertToCommunityEvent', () => {
  const fakeRecord = new FakeRecord({
    name: 'Fake conference',
    types: [COMMUNITY_EVENT_TYPES.hackathon],
    location: 'Someplace',
    startDate: '2020-01-01',
    endDate: '2020-01-02',
    website: 'https://qiskit.org/events'
  })

  it('extract and format information from the record', () => {
    // TODO: Now ignoring image and location since they are random. Add them once implemented.
    const { title, type, place, date, to } = convertToCommunityEvent(fakeRecord)
    expect({ title, type, place, date, to }).toEqual({
      title: 'Fake conference',
      type: COMMUNITY_EVENT_TYPES.hackathon,
      place: 'Someplace',
      date: 'January 1-2, 2020',
      to: 'https://qiskit.org/events'
    })
  })
})

describe('getType', () => {
  it('checks the name contains the "qiskit camp" pattern regardless the capitalization', () => {
    const fakeCamp = new FakeRecord({
      name: 'qisKit CamP Oceania',
      types: [COMMUNITY_EVENT_TYPES.hackathon, 'Community']
    })
    expect(getType(fakeCamp)).toBe(COMMUNITY_EVENT_TYPES.camp)
  })

  it('defaults in "Conference" if there is no type', () => {
    const fakeCamp = new FakeRecord({
      name: 'Fake Conference'
    })
    expect(getType(fakeCamp)).toBe(COMMUNITY_EVENT_TYPES.conference)
  })

  it('defaults in "Conference" if cannot infer the type', () => {
    const fakeCamp = new FakeRecord({
      name: 'Fake Conference',
      types: ['xxxx', 'yyyy']
    })
    expect(getType(fakeCamp)).toBe(COMMUNITY_EVENT_TYPES.conference)
  })

  it('infers "Hackathon" if "Hackathon" is among the tags', () => {
    const fakeCamp = new FakeRecord({
      name: 'Fake Conference',
      types: [COMMUNITY_EVENT_TYPES.hackathon, 'Education']
    })
    expect(getType(fakeCamp)).toBe(COMMUNITY_EVENT_TYPES.hackathon)
  })

  it('infers "Unconference" if "Unconference" is among the types', () => {
    const event = new FakeRecord({
      name: 'Fake Conference',
      types: [COMMUNITY_EVENT_TYPES.unconference, 'Education']
    })
    expect(getType(event)).toBe(COMMUNITY_EVENT_TYPES.unconference)
  })

  it('gives "Hackathon" preference over "Unconference"', () => {
    const event = new FakeRecord({
      name: 'Fake Conference',
      types: [COMMUNITY_EVENT_TYPES.hackathon, COMMUNITY_EVENT_TYPES.unconference]
    })
    expect(getType(event)).toBe(COMMUNITY_EVENT_TYPES.hackathon)
  })

  it('gives "Camp" preference over "Hackathon"', () => {
    const event = new FakeRecord({
      name: 'Qiskit Camp Oceania',
      types: [COMMUNITY_EVENT_TYPES.hackathon, COMMUNITY_EVENT_TYPES.unconference]
    })
    expect(getType(event)).toBe(COMMUNITY_EVENT_TYPES.camp)
  })
})

describe('getDates', () => {
  it('returns date objects if both dates exists', () => {
    const expectedStartDate = new Date('2020-01-01')
    const expectedEndDate = new Date('2020-01-02')
    const event = new FakeRecord({
      name: 'Fake Conference',
      startDate: '2020-01-01',
      endDate: '2020-01-02'
    })
    const [startDate, endDate] = getDates(event)
    expect(startDate).toEqual(expectedStartDate)
    expect(endDate).toEqual(expectedEndDate)
  })

  it('returns undefined if the start date is missing', () => {
    const event = new FakeRecord({
      name: 'Fake Conference',
      endDate: '2020-01-01'
    })
    const [startDate, endDate] = getDates(event)
    expect(endDate).toBeInstanceOf(Date)
    expect(startDate).toBeUndefined()
  })

  it('returns undefined if the end date is missing', () => {
    const event = new FakeRecord({
      name: 'Fake Conference',
      startDate: '2020-01-01'
    })
    const [startDate, endDate] = getDates(event)
    expect(startDate).toBeInstanceOf(Date)
    expect(endDate).toBeUndefined()
  })
})

describe('formatDates', () => {
  const start = new Date('2020-01-01')
  const endSameDate = new Date('2020-01-01')
  const endNextDay = new Date('2020-01-02')
  const endNextMonth = new Date('2020-02-01')
  const endNextYear = new Date('2021-01-01')
  const noDate = undefined

  it('shows TBD if no start date is passed', () => {
    expect(formatDates()).toBe('TBD')
    expect(formatDates(noDate, endNextDay)).toBe('TBD')
  })

  it('shows start date when start and end dates are equal', () => {
    expect(formatDates(start, endSameDate)).toBe(formatDates(start))
  })

  it('shows the start date when there is only start date', () => {
    expect(formatDates(start)).toBe('January 1, 2020')
  })

  it('shows complete dates when the years are different', () => {
    expect(formatDates(start, endNextYear)).toBe('January 1, 2020 - January 1, 2021')
  })

  it('factor out the year when years are equal', () => {
    expect(formatDates(start, endNextMonth)).toBe('January 1 - February 1, 2020')
  })

  it('factour out year and month when the event falls into the same month', () => {
    expect(formatDates(start, endNextDay)).toBe('January 1-2, 2020')
  })
})
