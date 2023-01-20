import Airtable from 'airtable'

function getImageUrl (imageAttachment: any): string {
  return getThumbnailUrl(imageAttachment) || imageAttachment.url
}

function findImageAttachment (attachments: any[]): any|null {
  for (const oneAttachment of attachments) {
    const isImage = oneAttachment.type.startsWith('image')
    if (isImage) {
      return oneAttachment
    }
  }
  return null
}

function getThumbnailUrl (imageAttachment: any): string|null {
  const { thumbnails } = imageAttachment
  const { large: largeThumbnail } = thumbnails || {}
  return largeThumbnail ? largeThumbnail.url : null
}

class AirtableRecords {
  protected apiKey: string;
  private baseId: string;
  private tableId: string;
  protected recordFields?: Record<string, any>;
  private view: string;

  constructor (apiKey: string, baseId: string, tableId: string, view: string, recordFields?: Record<string, any>) {
    this.apiKey = apiKey
    this.baseId = baseId
    this.tableId = tableId
    this.recordFields = recordFields
    this.view = view
  }

  /**
   * Get the Airtable field name for a given field ID.
   *
   * @param fieldId Field ID
   * @returns {Promise<string | null>} Field name
   */
  private getFieldName (fieldId: string): Promise<string | null> {
    const base = new Airtable({ apiKey: this.apiKey }).base(this.baseId)
    let fieldName: string | undefined

    try {
      return base(this.tableId)
        .select({
          fields: [fieldId],
          view: this.view
        })
        .eachPage((records, nextPage) => {
          for (const record of records) {
            if (fieldName) {
              break
            }

            const recordFields = Object.keys(record.fields)

            if (recordFields.length > 0) {
              fieldName = recordFields[0]
            }
          }

          nextPage()
        })
        .then(() => fieldName || '')
    } catch (error) {
      console.error(`Error in getFieldName: ${error}`)
      return Promise.resolve(null)
    }
  }

  /**
   * Get the Airtable field names for all the fields IDs provided.
   * The object provided must be a map of keys to field IDs.
   * The returned object will be a map of keys to field names.
   *
   * @param fieldIds Field IDs
   * @returns {Promise<Record<string, string | null>>} Field names mapped to keys
   */
  public getAllFieldNames (
    fieldIds: Record<string, string>
  ): Promise<Record<string, string | null>> {
    const fieldNamesPromises = Object.entries(fieldIds).map(
      ([field, fieldId]) => {
        return this.getFieldName(fieldId)
          .then((fieldName) => {
            if (fieldName) {
              return { [field]: fieldName }
            } else {
              console.warn(`Field name not found for field ID ${fieldId}`)
            }
          }).catch((error) => {
            console.error(`Error in setAllFieldNames: ${error}`)
            return { [field]: null }
          })
      }
    )

    return Promise.all(fieldNamesPromises)
      .then((results) => {
        return results.reduce((acc, result) => {
          return { ...acc, ...result }
        }, {} as Record<string, string | null>)
      })
  }
}

export {
  AirtableRecords,
  getImageUrl,
  findImageAttachment
}
