/**
 * Event properties unique to the element being tracked.
 */
export interface ClickEventCustomProperties {
  cta: string
  location: string
}

/**
 * Event properties sent to Segment.
 */
export interface ClickEventProperties {
  category: string
  CTA: string
  location: string
  productTitle: string
}
