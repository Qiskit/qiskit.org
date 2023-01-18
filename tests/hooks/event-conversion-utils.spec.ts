import EventsAirtableRecords from '~/hooks/event-conversion-utils'
import { COMMUNITY_EVENT_TYPES, WORLD_REGIONS } from '~/store/events'
import type { CommunityEvent } from '~/store/events'

describe('isEventInDateRange', () => {
  let eventsAirtableRecords: EventsAirtableRecords

  beforeEach(() => {
    eventsAirtableRecords = new EventsAirtableRecords('testApiKey', 'testView')
  })

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
    expect(eventsAirtableRecords.isEventInDateRange(mockEvent, days)).toBe(false)

    // Event starts within the next 15 days
    mockEvent = {
      ...mockEventBase,
      startDate: getFormattedDate(7),
      endDate: ''
    }
    expect(eventsAirtableRecords.isEventInDateRange(mockEvent, days)).toBe(true)

    // Event starts today
    mockEvent = {
      ...mockEventBase,
      startDate: getFormattedDate(0),
      endDate: ''
    }
    expect(eventsAirtableRecords.isEventInDateRange(mockEvent, days)).toBe(true)

    // Event starts within the next 15 days and ends after 15 days
    mockEvent = {
      ...mockEventBase,
      startDate: getFormattedDate(7),
      endDate: getFormattedDate(20)
    }
    expect(eventsAirtableRecords.isEventInDateRange(mockEvent, days)).toBe(true)

    // Event starts in exactly 15 days
    mockEvent = {
      ...mockEventBase,
      startDate: getFormattedDate(15),
      endDate: ''
    }
    expect(eventsAirtableRecords.isEventInDateRange(mockEvent, days)).toBe(true)

    // Event started 100 days ago and end in 100 days (ongoing event)
    mockEvent = {
      ...mockEventBase,
      startDate: getFormattedDate(-100),
      endDate: getFormattedDate(100)
    }
    expect(eventsAirtableRecords.isEventInDateRange(mockEvent, days)).toBe(true)
  })

  it('returns true if the event happened within the last 15 days', () => {
    const days = -15

    // Event happened before the last 15 days
    mockEvent = {
      ...mockEventBase,
      startDate: getFormattedDate(-100),
      endDate: getFormattedDate(-20)
    }
    expect(eventsAirtableRecords.isEventInDateRange(mockEvent, days)).toBe(false)

    // Event started before the last 15 days and ended within the last 15 days
    mockEvent = {
      ...mockEventBase,
      startDate: getFormattedDate(-100),
      endDate: getFormattedDate(-7)
    }
    expect(eventsAirtableRecords.isEventInDateRange(mockEvent, days)).toBe(true)

    // Event starts in the future
    mockEvent = {
      ...mockEventBase,
      startDate: getFormattedDate(7),
      endDate: ''
    }
    expect(eventsAirtableRecords.isEventInDateRange(mockEvent, days)).toBe(false)

    // Event starts today
    mockEvent = {
      ...mockEventBase,
      startDate: getFormattedDate(0),
      endDate: ''
    }
    expect(eventsAirtableRecords.isEventInDateRange(mockEvent, days)).toBe(false)

    // Event started 100 days ago and end in 100 days (ongoing event)
    mockEvent = {
      ...mockEventBase,
      startDate: getFormattedDate(-100),
      endDate: getFormattedDate(100)
    }
    expect(eventsAirtableRecords.isEventInDateRange(mockEvent, days)).toBe(false)
  })
})

describe('convertToCommunityEvent', () => {
  let eventsAirtableRecords: EventsAirtableRecords

  const { hackathon } = COMMUNITY_EVENT_TYPES
  const { europe } = WORLD_REGIONS

  const fakeRecord = {
    get: (field: string) => {
      switch (field) {
        case 'Name':
          return 'Fake conference'
        case 'Types':
          return [hackathon]
        case 'Location':
          return 'Someplace'
        case 'Regions':
          return [europe]
        case 'Start date':
          return '2020-01-01'
        case 'End date':
          return '2020-01-02'
        case 'Website':
          return 'https://qiskit.org/events'
      }
    }
  }

  const mockRecordFields = {
    name: 'Name',
    types: 'Types',
    location: 'Location',
    regions: 'Regions',
    startDate: 'Start date',
    endDate: 'End date',
    website: 'Website'
  }

  beforeEach(() => {
    eventsAirtableRecords = new EventsAirtableRecords('testApiKey', 'testView', mockRecordFields)
  })

  it('extracts and format information from the record', () => {
    const { hackathon } = COMMUNITY_EVENT_TYPES
    const { europe } = WORLD_REGIONS
    const { title, types, location, regions, date, to } = eventsAirtableRecords.convertToCommunityEvent(fakeRecord)

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
  let eventsAirtableRecords: EventsAirtableRecords

  const mockRecordFields = {
    name: 'Name',
    types: 'Types'
  }

  beforeEach(() => {
    eventsAirtableRecords = new EventsAirtableRecords('testApiKey', 'testView', mockRecordFields)
  })

  it('filters the values so only those recognized by qiskit.org get into the event', () => {
    const { hackathon } = COMMUNITY_EVENT_TYPES

    const fakeRecord = {
      get: (field: string) => {
        switch (field) {
          case 'Name':
            return 'Fake Camp'
          case 'Types':
            return [hackathon, 'Unknown1', 'Unknown2']
        }
      }
    }

    expect(eventsAirtableRecords.getTypes(fakeRecord)).toEqual([hackathon])
  })

  it('gets Talks type if there is no type', () => {
    const { talks } = COMMUNITY_EVENT_TYPES

    const fakeRecord = {
      get: (field: string) => {
        switch (field) {
          case 'Name':
            return 'Fake Camp'
        }
      }
    }

    expect(eventsAirtableRecords.getTypes(fakeRecord)).toEqual([talks])
  })

  it('gets Talks type if no type is recognized by qiskit.org', () => {
    const { talks } = COMMUNITY_EVENT_TYPES

    const fakeRecord = {
      get: (field: string) => {
        switch (field) {
          case 'Name':
            return 'Fake Camp'
          case 'Types':
            return ['A', 'B', 'C']
        }
      }
    }

    expect(eventsAirtableRecords.getTypes(fakeRecord)).toEqual([talks])
  })

  it('gets an array of one value if types is not an array but a single value', () => {
    const { hackathon } = COMMUNITY_EVENT_TYPES

    const fakeRecord = {
      get: (field: string) => {
        switch (field) {
          case 'Name':
            return 'Fake Camp'
          case 'Types':
            return [hackathon]
        }
      }
    }

    expect(eventsAirtableRecords.getTypes(fakeRecord)).toEqual([hackathon])
  })
})

describe('filterByWhitelist', () => {
  const eventsAirtableRecords = new EventsAirtableRecords('testApiKey', 'testView')
  it('creates a new list, from an input one, only with the values in a whitelist', () => {
    const list = ['a', 'x', 'b', 'y', 'c', 'z', 'a', 'x', 'b', 'y']
    expect(eventsAirtableRecords.filterWithWhitelist(list, ['a', 'b', 'c'])).toEqual(['a', 'b', 'c', 'a', 'b'])
  })
})

describe('getRegions', () => {
  let eventsAirtableRecords: EventsAirtableRecords

  const mockRecordFields = {
    name: 'Name',
    regions: 'Regions'
  }

  beforeEach(() => {
    eventsAirtableRecords = new EventsAirtableRecords('testApiKey', 'testView', mockRecordFields)
  })

  it('defaults in TBD if there is no region', () => {
    const { tbd } = WORLD_REGIONS

    const fakeRecord = {
      get: (field: string) => {
        switch (field) {
          case 'Name':
            return 'Fake Conference'
        }
      }
    }

    expect(eventsAirtableRecords.getRegions(fakeRecord)).toEqual([tbd])
  })

  it('gets the region from the record', () => {
    const { northAmerica } = WORLD_REGIONS

    const fakeRecord = {
      get: (field: string) => {
        switch (field) {
          case 'Name':
            return 'Fake Conference'
          case 'Regions':
            return [northAmerica]
        }
      }
    }

    expect(eventsAirtableRecords.getRegions(fakeRecord)).toEqual([northAmerica])
  })

  it('gets the region from the record even if it is not recognized by qiskit', () => {
    const fakeRecord = {
      get: (field: string) => {
        switch (field) {
          case 'Name':
            return 'Fake Conference'
          case 'Regions':
            return ['Lemuria']
        }
      }
    }

    expect(eventsAirtableRecords.getRegions(fakeRecord)).toEqual(['Lemuria'])
  })
})

describe('getLocation', () => {
  let eventsAirtableRecords: EventsAirtableRecords

  const mockRecordFields = {
    name: 'Name',
    location: 'Location'
  }

  beforeEach(() => {
    eventsAirtableRecords = new EventsAirtableRecords('testApiKey', 'testView', mockRecordFields)
  })

  it('defaults in region TBD if there is no location', () => {
    const { tbd } = WORLD_REGIONS

    const fakeRecord = {
      get: (field: string) => {
        switch (field) {
          case 'Name':
            return 'Nowhere Conference'
          default:
            return undefined
        }
      }
    }

    expect(eventsAirtableRecords.getLocation(fakeRecord)).toEqual(tbd)
  })

  it('gets the location from the record', () => {
    const fakeRecord = {
      get: (field: string) => {
        switch (field) {
          case 'Name':
            return 'Fake Conference'
          case 'Location':
            return 'Gotham'
        }
      }
    }

    expect(eventsAirtableRecords.getLocation(fakeRecord)).toBe('Gotham')
  })
})

describe('getImage', () => {
  let eventsAirtableRecords: EventsAirtableRecords

  const mockRecordFields = {
    name: 'Name',
    image: 'Image'
  }

  beforeEach(() => {
    eventsAirtableRecords = new EventsAirtableRecords('testApiKey', 'testView', mockRecordFields)
  })

  it('defaults in a no-picture.jpg value if there is no attachment', () => {
    const fakeRecord = {
      get: (field: string) => {
        switch (field) {
          case 'Name':
            return 'Fake Conference'
        }
      }
    }

    expect(eventsAirtableRecords.getImage(fakeRecord)).toBe('/images/events/no-picture.jpg')
  })

  it('defaults in a no-picture.jpg value if the attachment is of no image type', () => {
    const fakeRecord = {
      get: (field: string) => {
        switch (field) {
          case 'Name':
            return 'Fake Conference'
          case 'Image':
            return [{
              type: 'application/json'
            }]
        }
      }
    }

    expect(eventsAirtableRecords.getImage(fakeRecord)).toBe('/images/events/no-picture.jpg')
  })

  it('uses the attachment URL if there are no thumbnails', () => {
    const expectedUrl = 'http://url.to/image.jpg'

    const fakeRecord = {
      get: (field: string) => {
        switch (field) {
          case 'Name':
            return 'Fake Conference'
          case 'Image':
            return [{
              url: expectedUrl,
              type: 'image/jpg'
            }]
        }
      }
    }

    expect(eventsAirtableRecords.getImage(fakeRecord)).toBe(expectedUrl)
  })

  it('uses the attachment URL if there is no large thumbnail', () => {
    const expectedUrl = 'http://url.to/image.jpg'

    const fakeRecord = {
      get: (field: string) => {
        switch (field) {
          case 'Name':
            return 'Fake Conference'
          case 'Image':
            return [{
              url: expectedUrl,
              type: 'image/jpg',
              thumbnails: { }
            }]
        }
      }
    }

    expect(eventsAirtableRecords.getImage(fakeRecord)).toBe(expectedUrl)
  })

  it('uses the thumbnail URL if there is a large thumbnail available', () => {
    const expectedUrl = 'http://url.to/thumbnails/large.jpg'

    const fakeRecord = {
      get: (field: string) => {
        switch (field) {
          case 'Name':
            return 'Fake Conference'
          case 'Image':
            return [{
              url: 'http://url.to/image.jpg',
              type: 'image/jpg',
              thumbnails: {
                large: { url: expectedUrl }
              }
            }]
        }
      }
    }

    expect(eventsAirtableRecords.getImage(fakeRecord)).toBe(expectedUrl)
  })
})

describe('getDates', () => {
  let eventsAirtableRecords: EventsAirtableRecords

  const mockRecordFields = {
    name: 'Name',
    startDate: 'Start date',
    endDate: 'End date'
  }

  beforeEach(() => {
    eventsAirtableRecords = new EventsAirtableRecords('testApiKey', 'testView', mockRecordFields)
  })

  it('returns date objects if both dates exists', () => {
    const expectedStartDate = new Date('2020-01-01')
    const expectedEndDate = new Date('2020-01-02')

    const fakeRecord = {
      get: (field: string) => {
        switch (field) {
          case 'Name':
            return 'Fake Conference'
          case 'Start date':
            return '2020-01-01'
          case 'End date':
            return '2020-01-02'
        }
      }
    }

    const [startDate, endDate] = eventsAirtableRecords.getDates(fakeRecord)
    expect(startDate).toEqual(expectedStartDate)
    expect(endDate).toEqual(expectedEndDate)
  })

  it('returns undefined if the start date is missing', () => {
    const fakeRecord = {
      get: (field: string) => {
        switch (field) {
          case 'Name':
            return 'Fake Conference'
          case 'End date':
            return '2020-01-02'
        }
      }
    }

    const [startDate, endDate] = eventsAirtableRecords.getDates(fakeRecord)
    expect(endDate).toBeInstanceOf(Date)
    expect(startDate).toBeUndefined()
  })

  it('returns undefined if the end date is missing', () => {
    const fakeRecord = {
      get: (field: string) => {
        switch (field) {
          case 'Name':
            return 'Fake Conference'
          case 'Start date':
            return '2020-01-01'
        }
      }
    }

    const [startDate, endDate] = eventsAirtableRecords.getDates(fakeRecord)
    expect(startDate).toBeInstanceOf(Date)
    expect(endDate).toBeUndefined()
  })
})

describe('formatDates', () => {
  let eventsAirtableRecords: EventsAirtableRecords

  beforeEach(() => {
    eventsAirtableRecords = new EventsAirtableRecords('testApiKey', 'testView')
  })

  const start = new Date('2020-01-01')
  const endSameDate = new Date('2020-01-01')
  const endNextDay = new Date('2020-01-02')
  const endNextMonth = new Date('2020-02-01')
  const endNextYear = new Date('2021-01-01')
  const noDate = undefined

  it('shows TBD if no start date is passed', () => {
    expect(eventsAirtableRecords.formatDates()).toBe('TBD')
    expect(eventsAirtableRecords.formatDates(noDate, endNextDay)).toBe('TBD')
  })

  it('shows start date when start and end dates are equal', () => {
    expect(eventsAirtableRecords.formatDates(start, endSameDate)).toBe('January 1, 2020')
  })

  it('shows the start date when there is only start date', () => {
    expect(eventsAirtableRecords.formatDates(start)).toBe('January 1, 2020')
  })

  it('shows complete dates when the years are different', () => {
    expect(eventsAirtableRecords.formatDates(start, endNextYear)).toBe('January 1, 2020 - January 1, 2021')
  })

  it('factors out the year when years are equal', () => {
    expect(eventsAirtableRecords.formatDates(start, endNextMonth)).toBe('January 1 - February 1, 2020')
  })

  it('factors out year and month when the event falls into the same month', () => {
    expect(eventsAirtableRecords.formatDates(start, endNextDay)).toBe('January 1-2, 2020')
  })
})
