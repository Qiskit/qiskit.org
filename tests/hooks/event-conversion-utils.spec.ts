import {
  RECORD_FIELDS,
  formatDates,
  convertToCommunityEvent,
  getType,
  getDates,
  getImage
} from '~/hooks/event-conversion-utils'

import {
  TYPE_CATEGORIES
} from '~/store/modules/events'

type RecordFields = {
  name: string,
  picture?: object[],
  types?: string[]|string,
  location?: string,
  startDate?: string,
  endDate?: string,
  website?: string
}

class FakeRecord {
  _fields: object = {}

  constructor ({ name, picture, types, location, startDate, endDate, website }: RecordFields) {
    this._fields = {
      [RECORD_FIELDS.name]: name,
      [RECORD_FIELDS.image]: picture,
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
    types: ['Hackathon'],
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
      type: ['Hackathon'],
      place: 'Someplace',
      date: 'January 1-2, 2020',
      to: 'https://qiskit.org/events'
    })
  })
})

describe('getType', () => {
  it('filter the values so only those in the whitelist gets into the event', () => {
    const camp = new FakeRecord({
      name: 'Fake Camp',
      types: ['Hackathon', 'Community', 'Unknown']
    })
    expect(getType(camp, TYPE_CATEGORIES, 'Conference')).toEqual(['Hackathon'])
  })

  it('if there is no type, get the default type', () => {
    const camp = new FakeRecord({
      name: 'Fake Camp'
    })
    expect(getType(camp, TYPE_CATEGORIES, 'Conference')).toEqual(['Conference'])
  })

  it('if no type is in the whitelist, get the default type', () => {
    const camp = new FakeRecord({
      name: 'Fake Camp',
      types: ['A', 'B', 'C']
    })
    expect(getType(camp, TYPE_CATEGORIES, 'Conference')).toEqual(['Conference'])
  })

  it('get an array of one value if the type is not an array but one value', () => {
    const camp = new FakeRecord({
      name: 'Fake Conference',
      types: 'Hackathon'
    })
    expect(getType(camp, TYPE_CATEGORIES, 'Conference')).toEqual(['Hackathon'])
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
