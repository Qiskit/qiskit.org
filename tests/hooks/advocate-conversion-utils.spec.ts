import AdvocatesAirtableRecords from '~/hooks/advocate-conversion-utils'

describe('getters', () => {
  let advocatesAirtableRecords: AdvocatesAirtableRecords

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
    advocatesAirtableRecords = new AdvocatesAirtableRecords('testApiKey', mockRecordFields)
  })

  it('gets the city from the record', () => {
    expect(advocatesAirtableRecords.getCity(fakeRecord)).toBe('Gotham City')
  })

  it('gets the country from the record', () => {
    expect(advocatesAirtableRecords.getCountry(fakeRecord)).toBe('Canada')
  })

  it('gets the region from the record', () => {
    expect(advocatesAirtableRecords.getRegion(fakeRecord)).toBe('South America')
  })

  it('gets the Slack ID from the record', () => {
    expect(advocatesAirtableRecords.getSlackId(fakeRecord)).toBe('ID1234567890')
  })

  it('gets the Slack username from the record', () => {
    expect(advocatesAirtableRecords.getSlackUsername(fakeRecord)).toBe('U1234567890')
  })
})

describe('convertToAdvocate', () => {
  let advocatesAirtableRecords: AdvocatesAirtableRecords

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
    advocatesAirtableRecords = new AdvocatesAirtableRecords('testApiKey', mockRecordFields)
  })

  it('converts the record to an advocate object', async () => {
    const advocate = await advocatesAirtableRecords.convertToAdvocate(fakeRecord)

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
  let advocatesAirtableRecords: AdvocatesAirtableRecords

  const mockRecordFields = {
    image: 'Image'
  }

  beforeEach(() => {
    advocatesAirtableRecords = new AdvocatesAirtableRecords('testApiKey', mockRecordFields)
  })

  it('defaults in a no-advocate-photo.png value if there is no attachment', async () => {
    const fakeRecord = {
      get: (field: string) => {
        if (field === 'Image') {
          return undefined
        }
      }
    }

    advocatesAirtableRecords.storeImage = jest.fn(() => Promise.resolve('/images/advocates/fake-advocate.jpg'))
    const result = await advocatesAirtableRecords.getImage(fakeRecord)
    expect(result).toBe('/images/advocates/no-advocate-photo.png')
  })

  it('defaults in a no-advocate-photo.png value if the attachment is of no image type', async () => {
    const fakeRecord = {
      get: (field: string) => {
        if (field === 'Image') {
          return [{
            type: 'application/json'
          }]
        }
      }
    }

    advocatesAirtableRecords.storeImage = jest.fn(() => Promise.resolve('/images/advocates/fake-advocate.jpg'))
    const result = await advocatesAirtableRecords.getImage(fakeRecord)
    expect(result).toBe('/images/advocates/no-advocate-photo.png')
  })

  it('uses the attachment URL if there are no thumbnails', async () => {
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

    advocatesAirtableRecords.storeImage = jest.fn(() => Promise.resolve(expectedUrl))
    const result = await advocatesAirtableRecords.getImage(fakeRecord)
    expect(result).toBe(expectedUrl)
  })

  it('uses the thumbnail URL if there is a large thumbnail available', async () => {
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

    advocatesAirtableRecords.storeImage = jest.fn(() => Promise.resolve(expectedUrl))
    const result = await advocatesAirtableRecords.getImage(thumbnailPictureAdvocate)
    expect(result).toBe(expectedUrl)
  })
})
