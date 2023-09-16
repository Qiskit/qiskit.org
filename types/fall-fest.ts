interface FallFestExtensionEvent {
  university: string;
  country: string;
}

interface FallFestPartnerEvent {
  university: string;
  location: string;
  startDate: string;
  endDate: string;
  type: string;
  link: string;
  image: string;
}

export { FallFestExtensionEvent, FallFestPartnerEvent };
