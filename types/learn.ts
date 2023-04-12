import { GeneralLink } from "~/constants/appLinks";

type RecommendedReading = GeneralLink & {
  description?: string;
  author?: string;
};

export { RecommendedReading };
