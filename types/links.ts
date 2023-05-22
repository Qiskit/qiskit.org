import { CtaClickedEventProp } from "~/types/segment";

interface GeneralLink {
  label: string;
  segment?: CtaClickedEventProp;
  title?: string;
  url: string;
}

export { GeneralLink };
