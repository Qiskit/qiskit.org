import { Link } from "~/types/links";

type RecommendedReading = Link & {
  description?: string;
  author?: string;
};

export { RecommendedReading };
