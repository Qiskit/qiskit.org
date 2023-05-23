import { CtaClickedEventProp } from "~/types/segment";

interface Link {
  label: string;
  segment?: CtaClickedEventProp;
  title?: string;
  url: string;
}

export { Link };
