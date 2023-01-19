import fs from 'fs'
import axios from 'axios'
import { AirtableRecords } from '~/hooks/airtable-conversion-utils'

const imageUrl = 'https://example.com/image.jpg'
const uniqueId = 'test-unique-id'
const targetDir = 'test/target-dir'

jest.mock('fs', () => {
  return {
    writeFileSync: jest.fn()
  }
})

describe('storeImage', () => {
  let airtableRecords: AirtableRecords

  beforeEach(() => {
    airtableRecords = new AirtableRecords('testApiKey', 'testBaseId', 'testTableId', 'testView')
    jest.spyOn(axios, 'get')
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should store image and return correct file path', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue({ data: Buffer.from('imageData') })
    const filePath = await airtableRecords.storeImage(imageUrl, uniqueId, targetDir)
    const expectedFilePath = `/${targetDir}/${uniqueId}.jpg`
    expect(filePath).toBe(expectedFilePath)
  })

  it('should throw error when image URL is invalid', async () => {
    jest.spyOn(axios, 'get').mockRejectedValue(new Error('Invalid image URL'))
    await expect(airtableRecords.storeImage('invalidImageUrl', uniqueId, targetDir)).rejects.toThrowError('Invalid image URL')
  })

  it('should throw error when there is problem with file system', async () => {
    jest.spyOn(fs, 'writeFileSync').mockImplementation(() => { throw new Error('File system error') })
    jest.spyOn(axios, 'get').mockResolvedValue({ data: Buffer.from('imageData') })
    await expect(airtableRecords.storeImage(imageUrl, uniqueId, targetDir)).rejects.toThrowError('File system error')
  })
})
