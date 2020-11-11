import {
  RECORD_FIELDS,
  getLocation,
  getRegion,
  getImage,
  convertToAdvocate
} from '~/hooks/advocate-conversion-utils'

import { AdvocatesWorldRegion, ADVOCATES_WORLD_REGIONS } from '~/store/modules/advocates'

type RecordFields = {
  name: string,
  image?: object[],
  location?: string
  region?: AdvocatesWorldRegion
  // slackId: string
}

// TODO: Add tests for slackId

class FakeRecord {
  _fields: object = {}

  constructor ({ name, image, location, region /* ,slackId */ }: RecordFields) {
    this._fields = {
      [RECORD_FIELDS.name]: name,
      [RECORD_FIELDS.image]: image,
      [RECORD_FIELDS.location]: location,
      [RECORD_FIELDS.region]: region
      // // [RECORD_FIELDS.slackId]: slackId
    }
  }

  get (key: string): string {
    return (this._fields as any)[key]
  }
}

describe('convertToAdvocate', () => {
  const fakeRecord = new FakeRecord({
    name: 'Fake advocate',
    image: [
      {
        url: '/image.jpeg',
        type: 'image/jpeg',
        thumbnails: {}
      }
    ],
    location: 'Someplace',
    region: 'North America'
  })

  it('extracts and format information from the record', () => {
    const { name, image, location, region } = convertToAdvocate(fakeRecord)
    expect({ name, image, location, region }).toEqual({
      name: 'Fake advocate',
      image: '/image.jpeg',
      location: 'Someplace',
      region: 'North America'
    })
  })
})

describe('getRegion', () => {
  it('gets the region from the record', () => {
    const { northAmerica } = ADVOCATES_WORLD_REGIONS
    const fakeAdvocate = new FakeRecord({
      name: 'Fake Advocate',
      region: northAmerica
    })
    expect(getRegion(fakeAdvocate)).toBe(northAmerica)
  })
})

describe('getLocation', () => {
  it('defaults in region if there is no location', () => {
    const { northAmerica } = ADVOCATES_WORLD_REGIONS
    const noLocationEvent = new FakeRecord({
      name: 'Fake Advocate',
      region: northAmerica
    })
    expect(getLocation(noLocationEvent)).toBe(northAmerica)
  })

  it('gets the location from the record', () => {
    const { northAmerica } = ADVOCATES_WORLD_REGIONS
    const fakeAdvocate = new FakeRecord({
      name: 'Fake Advocate',
      location: 'Gotham',
      region: northAmerica
    })
    expect(getLocation(fakeAdvocate)).toBe('Gotham')
  })
})

describe('getImage', () => {
  it('defaults in a no-advocate-photo.png value if there is no attachment', () => {
    const noPictureAdvocate = new FakeRecord({
      name: 'Fake Advocate'
    })
    expect(getImage(noPictureAdvocate)).toBe('/images/advocates/no-advocate-photo.png')
  })

  it('defaults in a no-advocate-photo.png value if the attachment is of no image type', () => {
    const invalidPictureAdvocate = new FakeRecord({
      name: 'Fake Advocate',
      image: [{
        type: 'application/json'
      }]
    })
    expect(getImage(invalidPictureAdvocate)).toBe('/images/advocates/no-advocate-photo.png')
  })

  it('uses the attachment URL if there are no thumbnails', () => {
    const expectedUrl = 'http://url.to/image.jpg'
    const noPictureThumbnailsAdvocate = new FakeRecord({
      name: 'Fake Advocate',
      image: [{
        url: expectedUrl,
        type: 'image/jpg'
      }]
    })
    expect(getImage(noPictureThumbnailsAdvocate)).toBe(expectedUrl)
  })

  it('uses the attachment URL if there is no large thumbnail', () => {
    const expectedUrl = 'http://url.to/image.jpg'
    const noLargeThumbnailAdvocate = new FakeRecord({
      name: 'Fake Advocate',
      image: [{
        url: expectedUrl,
        type: 'image/jpg',
        thumbnails: { }
      }]
    })
    expect(getImage(noLargeThumbnailAdvocate)).toBe(expectedUrl)
  })

  it('uses the thumbnail URL if there is a large thumbnail available', () => {
    const expectedUrl = 'http://url.to/thumbnails/large.jpg'
    const thumbnailPictureAdvocate = new FakeRecord({
      name: 'Fake Advocate',
      image: [{
        url: 'http://url.to/image.jpg',
        type: 'image/jpg',
        thumbnails: {
          large: { url: expectedUrl }
        }
      }]
    })
    expect(getImage(thumbnailPictureAdvocate)).toBe(expectedUrl)
  })
})
