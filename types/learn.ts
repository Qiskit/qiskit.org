import { TextLink } from "~/types/links";

type RecommendedReading = TextLink & {
  description?: string;
  author?: string;
};

export { RecommendedReading };
