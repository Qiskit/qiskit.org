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

/**
 * Get the Airtable field name for a given field ID.
 *
 * @param apiKey Airtable API key
 * @param baseId Airtable base ID
 * @param tableId Airtable table ID
 * @param view Airtable view
 * @param fieldId Field ID
 * @returns Promise<string | null> Field name
 */
function getFieldName (
  apiKey: string,
  baseId: string,
  tableId: string,
  view: string,
  fieldId: string
): Promise<string | null> {
  const base = new Airtable({ apiKey }).base(baseId)
  let fieldName: string | undefined

  try {
    return base(tableId)
      .select({
        fields: [fieldId],
        view
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
      }).then(() => {
        if (fieldName) {
          return fieldName
        } else {
          return ''
        }
      })
  } catch (error) {
    console.error(`Error in getFieldName: ${error}`)
    return Promise.resolve(null)
  }
}

export {
  getFieldName,
  getImageUrl,
  findImageAttachment
}
