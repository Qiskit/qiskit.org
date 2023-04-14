import rawCloudSimulatorsData from "~/content/providers/cloud-simulators.json";
import rawHardwareData from "~/content/providers/hardware.json";
import rawLocalSimulatorsData from "~/content/providers/local-simulators.json";
import rawMultiplatformsData from "~/content/providers/multi-platforms.json";
import rawPrimitivesData from "~/content/providers/primitives.json";
import { GeneralLink } from "~/constants/appLinks";

type TableOfContentEntry = {
  /** The visible name of the link */
  title: string;
  /** Id of the section we want to jump to */
  sectionId?: string;
  /** Use when the link is on secondary level */
  isSecondary?: boolean;
};

type ProviderCodeExample = {
  name: string;
  runMethod: string;
};

type ProviderObject = {
  title: string;
  description: string;
  installation: string[];
  websiteCta?: GeneralLink;
  docsCta?: GeneralLink;
  sourceCta?: GeneralLink;
  codeExamples: ProviderCodeExample[];
};

/**
 * Represent a content section for the Providers page
 */
interface ProvidersSection {
  /** The identifier of the section */
  id: string;
  /** The visible title of the section */
  title: string;
  /** The visible description of the section */
  description: string;
  /** Where we want to go to get more info of the section */
  providers: ProviderObject[];
}

const CLOUD_SIMULATORS_IN_MENU: TableOfContentEntry = {
  sectionId: rawCloudSimulatorsData.id,
  title: rawCloudSimulatorsData.title,
  isSecondary: true,
};

const CLOUD_SIMULATORS_COLLECTION: ProvidersSection = rawCloudSimulatorsData;

const HARDWARE_IN_MENU: TableOfContentEntry = {
  sectionId: rawHardwareData.id,
  title: rawHardwareData.title,
  isSecondary: true,
};

const HARDWARE_COLLECTION: ProvidersSection = rawHardwareData;

const PRIMITIVES_IN_MENU: TableOfContentEntry = {
  sectionId: rawPrimitivesData.id,
  title: rawPrimitivesData.title,
  isSecondary: true,
};

const PRIMITIVES_COLLECTION: ProvidersSection = rawPrimitivesData;

const LOCAL_SIMULATORS_IN_MENU: TableOfContentEntry = {
  sectionId: rawLocalSimulatorsData.id,
  title: rawLocalSimulatorsData.title,
  isSecondary: true,
};

const LOCAL_SIMULATORS_COLLECTION: ProvidersSection = rawLocalSimulatorsData;

const MULTIPLATFORMS_IN_MENU: TableOfContentEntry = {
  sectionId: rawMultiplatformsData.id,
  title: rawMultiplatformsData.title,
  isSecondary: true,
};

const MULTI_PLATFORMS_COLLECTION: ProvidersSection = rawMultiplatformsData;

const TABLE_OF_CONTENTS: TableOfContentEntry[] = [
  {
    title: "Run Qiskit with",
  },
  PRIMITIVES_IN_MENU,
  HARDWARE_IN_MENU,
  LOCAL_SIMULATORS_IN_MENU,
  CLOUD_SIMULATORS_IN_MENU,
  MULTIPLATFORMS_IN_MENU,
];

const CONTENT_SECTIONS: ProvidersSection[] = [
  PRIMITIVES_COLLECTION,
  HARDWARE_COLLECTION,
  LOCAL_SIMULATORS_COLLECTION,
  CLOUD_SIMULATORS_COLLECTION,
  MULTI_PLATFORMS_COLLECTION,
];

export {
  TableOfContentEntry,
  ProvidersSection,
  ProviderObject,
  ProviderCodeExample,
  TABLE_OF_CONTENTS,
  CONTENT_SECTIONS,
};
