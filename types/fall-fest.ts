interface FallFestExtensionEvent {
  institution: string;
  country: string;
}

interface FallFestPartnerEvent {
  title: string;
  startDate: string;
  detail: string;
  cta: string;
  image: string;
}

export { FallFestExtensionEvent, FallFestPartnerEvent };
