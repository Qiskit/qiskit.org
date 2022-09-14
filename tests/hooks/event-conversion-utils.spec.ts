import {
  RECORD_FIELDS,
  formatDates,
  filterWithWhitelist,
  convertToCommunityEvent,
  getTypes,
  getLocation,
  getRegions,
  getDates,
  getImage,
  isEventInDateRange
} from '~/hooks/event-conversion-utils'

import { COMMUNITY_EVENT_TYPES, WORLD_REGIONS } from '~/store/events'
import type { CommunityEvent } from '~/store/events'

type RecordFields = {
  name: string,
  picture?: object[],
  types?: string[],
  location?: string,
  regions?: string[],
  startDate?: string,
  endDate?: string,
  website?: string
}

class FakeRecord {
  _fields: object = {}

  constructor ({ name, picture, types, location, regions, startDate, endDate, website }: RecordFields) {
    this._fields = {
      [RECORD_FIELDS.name]: name,
      [RECORD_FIELDS.image]: picture,
      [RECORD_FIELDS.typeOfEvent]: types,
      [RECORD_FIELDS.location]: location,
      [RECORD_FIELDS.region]: regions,
      [RECORD_FIELDS.startDate]: startDate,
      [RECORD_FIELDS.endDate]: endDate,
      [RECORD_FIELDS.eventWebsite]: website
    }
  }

  get (key: string): string {
    return (this._fields as any)[key]
  }
}

describe('isEventInDateRange', () => {
  const mockEventBase = {
    types: [],
    title: '',
    image: '',
    location: '',
    regions: [],
    date: '',
    to: ''
  }

  const getFormattedDate = (daysOffset: number): string => {
    let date = new Date()

    // Correct for timezone offset
    date = new Date(date.getTime() - (date.getTimezoneOffset() * 60 * 1000))

    // Add days offset
    date.setDate(date.getDate() + daysOffset)

    // Return date in YYYY-MM-DD format
    return date.toISOString().split('T')[0]
  }

  let mockEvent: CommunityEvent

  it('returns true if the event happens within the next 15 days', () => {
    const days = 15

    // Event happened in the past
    mockEvent = {
      ...mockEventBase,
      startDate: getFormattedDate(-7),
      endDate: getFormattedDate(-1)
    }
    expect(isEventInDateRange(mockEvent, days)).toBe(false)

    // Event starts within the next 15 days
    mockEvent = {
      ...mockEventBase,
      startDate: getFormattedDate(7),
      endDate: ''
    }
    expect(isEventInDateRange(mockEvent, days)).toBe(true)

    // Event starts within the next 15 days and ends after 15 days
    mockEvent = {
      ...mockEventBase,
      startDate: getFormattedDate(7),
      endDate: getFormattedDate(20)
    }
    expect(isEventInDateRange(mockEvent, days)).toBe(true)

    // Event starts in exactly 15 days
    mockEvent = {
      ...mockEventBase,
      startDate: getFormattedDate(15),
      endDate: ''
    }
    expect(isEventInDateRange(mockEvent, days)).toBe(true)
    // Event started 100 days ago and end in 100 days (ongoing event)
    mockEvent = {
      ...mockEventBase,
      startDate: getFormattedDate(-100),
      endDate: getFormattedDate(100)
    }
    expect(isEventInDateRange(mockEvent, days)).toBe(true)
  })

  it('returns true if the event happened within the last 15 days', () => {
    const days = -15

    // Event happened before the last 15 days
    mockEvent = {
      ...mockEventBase,
      startDate: getFormattedDate(-100),
      endDate: getFormattedDate(-20)
    }
    expect(isEventInDateRange(mockEvent, days)).toBe(false)

    // Event started before the last 15 days and ended within the last 15 days
    mockEvent = {
      ...mockEventBase,
      startDate: getFormattedDate(-100),
      endDate: getFormattedDate(-7)
    }
    expect(isEventInDateRange(mockEvent, days)).toBe(true)

    // Event starts in the future
    mockEvent = {
      ...mockEventBase,
      startDate: getFormattedDate(7),
      endDate: ''
    }
    expect(isEventInDateRange(mockEvent, days)).toBe(false)

    // Event started 100 days ago and end in 100 days (ongoing event)
    mockEvent = {
      ...mockEventBase,
      startDate: getFormattedDate(-100),
      endDate: getFormattedDate(100)
    }
    expect(isEventInDateRange(mockEvent, days)).toBe(false)
  })
})

describe('convertToCommunityEvent', () => {
  const { hackathon } = COMMUNITY_EVENT_TYPES
  const { europe } = WORLD_REGIONS

  const fakeRecord = new FakeRecord({
    name: 'Fake conference',
    types: [hackathon],
    location: 'Someplace',
    regions: [europe],
    startDate: '2020-01-01',
    endDate: '2020-01-02',
    website: 'https://qiskit.org/events'
  })

  it('extracts and format information from the record', () => {
    const { hackathon } = COMMUNITY_EVENT_TYPES
    const { europe } = WORLD_REGIONS
    const { title, types, location, regions, date, to } = convertToCommunityEvent(fakeRecord)
    expect({ title, types, location, regions, date, to }).toEqual({
      title: 'Fake conference',
      types: [hackathon],
      location: 'Someplace',
      regions: [europe],
      date: 'January 1-2, 2020',
      to: 'https://qiskit.org/events'
    })
  })
})

describe('getType', () => {
  it('filters the values so only those recognized by qiskit.org get into the event', () => {
    const { hackathon } = COMMUNITY_EVENT_TYPES
    const camp = new FakeRecord({
      name: 'Fake Camp',
      types: [hackathon, 'Unknown1', 'Unknown2']
    })
    expect(getTypes(camp)).toEqual([hackathon])
  })

  it('gets Talks type if there is no type', () => {
    const { talks } = COMMUNITY_EVENT_TYPES
    const camp = new FakeRecord({
      name: 'Fake Camp'
    })
    expect(getTypes(camp)).toEqual([talks])
  })

  it('gets Talks type if no type is recognized by qiskit.org', () => {
    const { talks } = COMMUNITY_EVENT_TYPES
    const camp = new FakeRecord({
      name: 'Fake Camp',
      types: ['A', 'B', 'C']
    })
    expect(getTypes(camp)).toEqual([talks])
  })

  it('gets an array of one value if types is not an array but a single value', () => {
    const { hackathon } = COMMUNITY_EVENT_TYPES
    const camp = new FakeRecord({
      name: 'Fake Conference',
      types: [hackathon]
    })
    expect(getTypes(camp)).toEqual([hackathon])
  })
})

describe('filterByWhitelist', () => {
  it('creates a new list, from an input one, only with the values in a whitelist', () => {
    const list = ['a', 'x', 'b', 'y', 'c', 'z', 'a', 'x', 'b', 'y']
    expect(filterWithWhitelist(list, ['a', 'b', 'c'])).toEqual(['a', 'b', 'c', 'a', 'b'])
  })
})

describe('getRegions', () => {
  it('defaults in TBD if there is no region', () => {
    const { tbd } = WORLD_REGIONS
    const noRegionEvent = new FakeRecord({
      name: 'Fake Conference'
    })
    expect(getRegions(noRegionEvent)).toEqual([tbd])
  })

  it('gets the region from the record', () => {
    const { northAmerica } = WORLD_REGIONS
    const fakeEvent = new FakeRecord({
      name: 'Fake Conference',
      regions: [northAmerica]
    })
    expect(getRegions(fakeEvent)).toEqual([northAmerica])
  })

  it('gets the region from the record even if it is not recognized by qiskit', () => {
    const unknownRegionEvent = new FakeRecord({
      name: 'Fake Conference',
      regions: ['Lemuria']
    })
    expect(getRegions(unknownRegionEvent)).toEqual(['Lemuria'])
  })
})

describe('getLocation', () => {
  it('defaults in region TBD if there is no location', () => {
    const { tbd } = WORLD_REGIONS

    const nowhereEvent = new FakeRecord({
      name: 'Nowhere Conference'
    })
    expect(getLocation(nowhereEvent)).toEqual(tbd)
  })

  it('gets the location from the record', () => {
    const fakeEvent = new FakeRecord({
      name: 'Fake Conference',
      location: 'Gotham'
    })
    expect(getLocation(fakeEvent)).toBe('Gotham')
  })
})

describe('getImage', () => {
  it('defaults in a no-picture.jpg value if there is no attachment', () => {
    const noPictureEvent = new FakeRecord({
      name: 'Fake Conference'
    })
    expect(getImage(noPictureEvent)).toBe('/images/events/no-picture.jpg')
  })

  it('defaults in a no-picture.jpg value if the attachment is of no image type', () => {
    const invalidPictureEvent = new FakeRecord({
      name: 'Fake Conference',
      picture: [{
        type: 'application/json'
      }]
    })
    expect(getImage(invalidPictureEvent)).toBe('/images/events/no-picture.jpg')
  })

  it('uses the attachment URL if there are no thumbnails', () => {
    const expectedUrl = 'http://url.to/image.jpg'
    const noPictureThumbnailsEvent = new FakeRecord({
      name: 'Fake Conference',
      picture: [{
        url: expectedUrl,
        type: 'image/jpg'
      }]
    })
    expect(getImage(noPictureThumbnailsEvent)).toBe(expectedUrl)
  })

  it('uses the attachment URL if there is no large thumbnail', () => {
    const expectedUrl = 'http://url.to/image.jpg'
    const noLargeThumbnailEvent = new FakeRecord({
      name: 'Fake Conference',
      picture: [{
        url: expectedUrl,
        type: 'image/jpg',
        thumbnails: { }
      }]
    })
    expect(getImage(noLargeThumbnailEvent)).toBe(expectedUrl)
  })

  it('uses the thumbnail URL if there is a large thumbnail available', () => {
    const expectedUrl = 'http://url.to/thumbnails/large.jpg'
    const thumbnailPictureEvent = new FakeRecord({
      name: 'Fake Conference',
      picture: [{
        url: 'http://url.to/image.jpg',
        type: 'image/jpg',
        thumbnails: {
          large: { url: expectedUrl }
        }
      }]
    })
    expect(getImage(thumbnailPictureEvent)).toBe(expectedUrl)
  })
})

describe('getDates', () => {
  it('returns date objects if both dates exists', () => {
    const expectedStartDate = new Date('2020-01-01')
    const expectedEndDate = new Date('2020-01-02')
    const FakeEvent = new FakeRecord({
      name: 'Fake Conference',
      startDate: '2020-01-01',
      endDate: '2020-01-02'
    })
    const [startDate, endDate] = getDates(FakeEvent)
    expect(startDate).toEqual(expectedStartDate)
    expect(endDate).toEqual(expectedEndDate)
  })

  it('returns undefined if the start date is missing', () => {
    const FakeEvent = new FakeRecord({
      name: 'Fake Unconference',
      endDate: '2020-01-01'
    })
    const [startDate, endDate] = getDates(FakeEvent)
    expect(endDate).toBeInstanceOf(Date)
    expect(startDate).toBeUndefined()
  })

  it('returns undefined if the end date is missing', () => {
    const FakeEvent = new FakeRecord({
      name: 'Fake Unconference',
      startDate: '2020-01-01'
    })
    const [startDate, endDate] = getDates(FakeEvent)
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
    expect(formatDates(start, endSameDate)).toBe('January 1, 2020')
  })

  it('shows the start date when there is only start date', () => {
    expect(formatDates(start)).toBe('January 1, 2020')
  })

  it('shows complete dates when the years are different', () => {
    expect(formatDates(start, endNextYear)).toBe('January 1, 2020 - January 1, 2021')
  })

  it('factors out the year when years are equal', () => {
    expect(formatDates(start, endNextMonth)).toBe('January 1 - February 1, 2020')
  })

  it('factors out year and month when the event falls into the same month', () => {
    expect(formatDates(start, endNextDay)).toBe('January 1-2, 2020')
  })
})
