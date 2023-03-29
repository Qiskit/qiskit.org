import { promises as fsPromises } from "fs";
import Airtable from "airtable";
import axios from "axios";

function getImageUrl(imageAttachment: any): string {
  return getThumbnailUrl(imageAttachment) || imageAttachment.url;
}

function findImageAttachment(attachments: any[]): any | null {
  for (const oneAttachment of attachments) {
    const isImage = oneAttachment.type.startsWith("image");
    if (isImage) {
      return oneAttachment;
    }
  }
  return null;
}

function getThumbnailUrl(imageAttachment: any): string | null {
  const { thumbnails } = imageAttachment;
  const { large: largeThumbnail } = thumbnails || {};
  return largeThumbnail ? largeThumbnail.url : null;
}

class AirtableRecords {
  protected id: string;
  protected apiKey: string;
  private baseId: string;
  private tableId: string;
  protected recordFields?: Record<string, any>;
  private view: string;

  constructor(
    apiKey: string,
    baseId: string,
    tableId: string,
    view: string,
    id?: string,
    recordFields?: Record<string, any>
  ) {
    this.apiKey = apiKey;
    this.baseId = baseId;
    this.tableId = tableId;
    this.recordFields = recordFields;
    this.view = view;
    this.id = id || "";
  }

  /**
   * Get the Airtable field name for a given field ID.
   *
   * @param fieldId Field ID
   * @returns {Promise<string | null>} Field name
   */
  private getFieldName(fieldId: string): Promise<string | null> {
    const base = new Airtable({ apiKey: this.apiKey }).base(this.baseId);
    let fieldName: string | undefined;

    try {
      return base(this.tableId)
        .select({
          fields: [fieldId],
          view: this.view,
        })
        .eachPage((records, nextPage) => {
          for (const record of records) {
            if (fieldName) {
              break;
            }

            const recordFields = Object.keys(record.fields);

            if (recordFields.length > 0) {
              fieldName = recordFields[0];
            }
          }

          nextPage();
        })
        .then(() => fieldName || "");
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Error in getFieldName: ${error}`);
      return Promise.resolve(null);
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
  public getAllFieldNames(
    fieldIds: Record<string, string>
  ): Promise<Record<string, string | null>> {
    const fieldNamesPromises = Object.entries(fieldIds).map(
      ([field, fieldId]) => {
        return this.getFieldName(fieldId)
          .then((fieldName) => {
            if (fieldName) {
              return { [field]: fieldName };
            } else {
              // eslint-disable-next-line no-console
              console.warn(`Field name not found for field ID ${fieldId}`);
            }
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.error(`Error in setAllFieldNames: ${error}`);
            return { [field]: null };
          });
      }
    );

    return Promise.all(fieldNamesPromises).then((results) => {
      return results.reduce((acc, result) => {
        return { ...acc, ...result };
      }, {} as Record<string, string | null>);
    });
  }

  /**
   * Store an image from a given URL.
   *
   * @param {string} url - The URL of the image to be stored
   * @param {string} filePath - The path to store the image
   * @returns {Promise<void>} - A promise that resolves when the image is stored
   */
  public async storeImage(url: string, filePath: string): Promise<void> {
    try {
      const response = await axios.get(url, { responseType: "arraybuffer" });
      const imageBuffer = Buffer.from(response.data, "binary");
      await fsPromises.writeFile(filePath, imageBuffer);
      return Promise.resolve();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      return Promise.reject(error);
    }
  }
}

export { AirtableRecords, getImageUrl, findImageAttachment };
