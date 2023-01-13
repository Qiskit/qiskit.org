import AdvocateAirtableAPI from '~/hooks/advocate-conversion-utils'

describe('getters', () => {
  let airtableApi: AdvocateAirtableAPI

  const fakeRecord = {
    get: (field: string) => {
      switch (field) {
        case 'City':
          return 'Gotham City'
        case 'Country':
          return 'Canada'
        case 'Region':
          return 'South America'
        case 'Slack ID':
          return 'ID1234567890'
        case 'Slack Username':
          return 'U1234567890'
      }
    }
  }

  const mockRecordFields = {
    city: 'City',
    country: 'Country',
    region: 'Region',
    slackId: 'Slack ID',
    slackUsername: 'Slack Username'
  }

  beforeEach(() => {
    airtableApi = new AdvocateAirtableAPI('testApiKey', mockRecordFields)
  })

  it('gets the city from the record', () => {
    expect(airtableApi.getCity(fakeRecord)).toBe('Gotham City')
  })

  it('gets the country from the record', () => {
    expect(airtableApi.getCountry(fakeRecord)).toBe('Canada')
  })

  it('gets the region from the record', () => {
    expect(airtableApi.getRegion(fakeRecord)).toBe('South America')
  })

  it('gets the Slack ID from the record', () => {
    expect(airtableApi.getSlackId(fakeRecord)).toBe('ID1234567890')
  })

  it('gets the Slack username from the record', () => {
    expect(airtableApi.getSlackUsername(fakeRecord)).toBe('U1234567890')
  })
})

describe('convertToAdvocate', () => {
  let airtableApi: AdvocateAirtableAPI

  const fakeRecord = {
    get: (field: string) => {
      switch (field) {
        case 'Name':
          return 'Nova'
        case 'City':
          return 'Gotham City'
        case 'Country':
          return 'Canada'
        case 'Region':
          return 'South America'
        case 'Slack ID':
          return 'ID1234567890'
        case 'Slack Username':
          return 'U1234567890'
      }
    }
  }

  const mockRecordFields = {
    name: 'Name',
    city: 'City',
    country: 'Country',
    region: 'Region',
    slackId: 'Slack ID',
    slackUsername: 'Slack Username'
  }

  beforeEach(() => {
    airtableApi = new AdvocateAirtableAPI('testApiKey', mockRecordFields)
  })

  it('converts the record to an advocate object', () => {
    const advocate = airtableApi.convertToAdvocate(fakeRecord)

    expect(advocate).toEqual({
      name: 'Nova',
      image: '/images/advocates/no-advocate-photo.png',
      region: 'South America',
      city: 'Gotham City',
      country: 'Canada',
      slackId: 'ID1234567890',
      slackUsername: 'U1234567890'
    })
  })
})

describe('getImage', () => {
  let airtableApi: AdvocateAirtableAPI

  const mockRecordFields = {
    image: 'Image'
  }

  beforeEach(() => {
    airtableApi = new AdvocateAirtableAPI('testApiKey', mockRecordFields)
  })

  it('defaults in a no-advocate-photo.png value if there is no attachment', () => {
    const fakeRecord = {
      get: (field: string) => {
        if (field === 'Image') {
          return undefined
        }
      }
    }

    expect(airtableApi.getImage(fakeRecord)).toBe('/images/advocates/no-advocate-photo.png')
  })

  it('defaults in a no-advocate-photo.png value if the attachment is of no image type', () => {
    const fakeRecord = {
      get: (field: string) => {
        if (field === 'Image') {
          return [{
            type: 'application/json'
          }]
        }
      }
    }

    expect(airtableApi.getImage(fakeRecord)).toBe('/images/advocates/no-advocate-photo.png')
  })

  it('uses the attachment URL if there are no thumbnails', () => {
    const expectedUrl = 'http://url.to/image.jpg'
    const fakeRecord = {
      get: (field: string) => {
        if (field === 'Image') {
          return [{
            url: expectedUrl,
            type: 'image/jpg'
          }]
        }
      }
    }

    expect(airtableApi.getImage(fakeRecord)).toBe(expectedUrl)
  })

  it('uses the thumbnail URL if there is a large thumbnail available', () => {
    const expectedUrl = 'http://url.to/thumbnails/large.jpg'
    const thumbnailPictureAdvocate = {
      get: (field: string) => {
        if (field === 'Image') {
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

    expect(airtableApi.getImage(thumbnailPictureAdvocate)).toBe(expectedUrl)
  })

  it('uses the thumbnail URL if there is a large thumbnail available', () => {
    const expectedUrl = 'http://url.to/thumbnails/large.jpg'
    const thumbnailPictureAdvocate = {
      get: (field: string) => {
        if (field === 'Image') {
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

    expect(airtableApi.getImage(thumbnailPictureAdvocate)).toBe(expectedUrl)
  })
})
