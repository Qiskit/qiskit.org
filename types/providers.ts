import type { ParsedContent } from "@nuxt/content/dist/runtime/types";
import type { GeneralLink } from "~/constants/appLinks";

export interface ProviderCodeExample {
  name: string;
  runMethod: string;
  fullCode: string;
}

export interface Provider {
  title: string;
  description: string;
  installation: string;
  websiteCta?: GeneralLink;
  docsCta?: GeneralLink;
  sourceCta?: GeneralLink;
  codeExamples: ProviderCodeExample[];
}

export interface ProvidersSectionParsedContent extends ParsedContent {
  /** The identifier of the section */
  id: string;
  /** The visible title of the section */
  title: string;
  /** The visible description of the section */
  description: string;
  /** Where we want to go to get more info of the section */
  providers: Provider[];
}

export interface TableOfContentEntry {
  /** The visible name of the link */
  title: string;
  /** Id of the section we want to jump to */
  sectionId?: string;
  /** Use when the link is on secondary level */
  isSecondary?: boolean;
}
