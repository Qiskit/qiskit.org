import { GeneralLink } from "~/constants/appLinks";

type MosaicElement = {
  position: string;
  title: string;
  description: string;
  image: string;
  cta?: GeneralLink;
};

type DescriptionCard = {
  title: string;
  description: string;
  cta: GeneralLink;
};

export { MosaicElement, DescriptionCard };
