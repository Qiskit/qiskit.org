import {
  RECORD_FIELDS,
  getCity,
  getCountry,
  getRegion,
  getImage,
  convertToAdvocate
} from '~/hooks/advocate-conversion-utils'

import { AdvocatesWorldRegion, ADVOCATES_WORLD_REGIONS } from '~/store/modules/advocates'

type RecordFields = {
  name: string,
  image?: object[],
  city?: string,
  country?: string,
  region?: AdvocatesWorldRegion
  // slackId: string
}

// TODO: Add tests for slackId

class FakeRecord {
  _fields: object = {}

  constructor ({ name, image, city, country, region /* ,slackId */ }: RecordFields) {
    this._fields = {
      [RECORD_FIELDS.name]: name,
      [RECORD_FIELDS.image]: image,
      [RECORD_FIELDS.city]: city,
      [RECORD_FIELDS.country]: country,
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
    city: 'Someplace',
    region: 'North America'
  })

  it('extracts and format information from the record', () => {
    const { name, image, city, region } = convertToAdvocate(fakeRecord)
    expect({ name, image, city, region }).toEqual({
      name: 'Fake advocate',
      image: '/image.jpeg',
      city: 'Someplace',
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

describe('getCity', () => {
  it('gets the city from the record', () => {
    const { northAmerica } = ADVOCATES_WORLD_REGIONS
    const fakeAdvocate = new FakeRecord({
      name: 'Fake Advocate',
      city: 'Gotham',
      region: northAmerica
    })
    expect(getCity(fakeAdvocate)).toBe('Gotham')
  })
})

describe('getCountry', () => {
  it('gets the city from the record', () => {
    const { northAmerica } = ADVOCATES_WORLD_REGIONS
    const fakeAdvocate = new FakeRecord({
      name: 'Fake Advocate',
      country: 'Canada',
      region: northAmerica
    })
    expect(getCountry(fakeAdvocate)).toBe('Canada')
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
