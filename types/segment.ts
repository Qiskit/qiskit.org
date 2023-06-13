/**
 * Required properties for Common Schema Events.
 */
interface CommonSchemaEvent {
  category: string;
  instanceId: string;
  productCode: string;
  productCodeType: string;
  productTitle: string;
  uiElement?: string;
  UT30: string;
}

/**
 * Properties sent to Segment for the event "CTA Clicked".
 * Only the properties used in this project are included in this interface.
 * https://segment-standards.prod.ddp.cis.ibm.net/events/cta-clicked
 */
export interface CtaClickedEventSegmentSchema extends CommonSchemaEvent {
  CTA: string;
  location: string;
}

/**
 * Vue prop with data for the Segment event "CTA Clicked".
 * Based on the interface CtaClickedEventSegmentSchema.
 */
export interface CtaClickedEventProp {
  cta: string;
  location: string;
}

/**
 * Properties sent to Segment for the event "Page Loaded".
 */
export interface PageLoadedEventSegmentSchema extends CommonSchemaEvent {
  navigationType: string;
  title: string;
}
