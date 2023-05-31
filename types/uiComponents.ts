import { Link } from "~/types/links";

type MosaicElement = {
  position: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  cta?: Link;
};

type DescriptionCard = {
  title: string;
  description: string;
  cta: Link;
};

export { MosaicElement, DescriptionCard };
