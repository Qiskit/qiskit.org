import { CtaClickedEventProp } from "~/types/segment";

/**
 * Represent a course on the site
 */
interface Course {
  /** The preview image of the course */
  image: string;
  /** The visible name of the course */
  label: string;
  segment?: CtaClickedEventProp;
  /** Where we want to go */
  url: string;
}

/**
 * Represent a preprequisite on the site
 */
interface Prerequisite {
  /** The visible title of prereq */
  title: string;
  /** The short description of the prereq */
  description: string;
  segment?: CtaClickedEventProp;
  /** Where we want to go */
  url: string;
}

export { Course, Prerequisite };
