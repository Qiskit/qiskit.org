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

export {
  getImageUrl,
  findImageAttachment
}
