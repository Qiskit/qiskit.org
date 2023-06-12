import { TextLink } from "~/types/links";

type MosaicElement = {
  position: string;
  title: string;
  description: string;
  image: string;
  altText: string;
  cta?: TextLink;
};

type DescriptionCard = {
  title: string;
  description: string;
  cta: TextLink;
};

export { MosaicElement, DescriptionCard };
