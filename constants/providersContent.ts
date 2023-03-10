import rawHardwareData from '~/content/providers/hardware.json'
import rawLocalSimulatorsData from '~/content/providers/local-simulators.json'
import rawMultiplatformsData from '~/content/providers/multi-platforms.json'
import rawRuntimesData from '~/content/providers/runtimes.json'

type TableOfContentEntry = {
  /** The visible name of the link */
  title: string
  /** Id of the section we want to jump to */
  sectionId?: string
  /** Use when the link is on secondary level */
  isSecondary?: boolean
}

type ProviderCodeExample = {
  name: string
  fullCode: string[]
}

type ProviderObject = {
  title: string
  image: string | null
  description: string
  installation: string
  websiteCta?: {
    label: string | null,
    url: string | null
  }
  docsCta?: {
    label: string | null,
    url: string | null
  }
  sourceCta?: {
    label: string | null,
    url: string | null
  }
  codeExamples: ProviderCodeExample[]
}

/**
 * Represent a content section for the Providers page
 */
interface ProvidersSection {
  /** The identifier of the section */
  id: string
  /** The visible title of the section */
  title: string
  /** The visible description of the section */
  description: string
  /** Where we want to go to get more info of the section */
  providers: ProviderObject[]
}

const HARDWARE_IN_MENU: TableOfContentEntry = {
  sectionId: rawHardwareData.id,
  title: rawHardwareData.title,
  isSecondary: true
}

const HARDWARE_COLLECTION: ProvidersSection = rawHardwareData

const QUANTUM_RUNTIMES_IN_MENU: TableOfContentEntry = {
  sectionId: rawRuntimesData.id,
  title: rawRuntimesData.title,
  isSecondary: true
}

const QUANTUM_RUNTIMES_COLLECTION: ProvidersSection = rawRuntimesData

const LOCAL_SIMULATORS_IN_MENU: TableOfContentEntry = {
  sectionId: rawLocalSimulatorsData.id,
  title: rawLocalSimulatorsData.title,
  isSecondary: true
}

const LOCAL_SIMULATORS_COLLECTION: ProvidersSection = rawLocalSimulatorsData

const MULTIPLATFORMS_IN_MENU: TableOfContentEntry = {
  sectionId: rawMultiplatformsData.id,
  title: rawMultiplatformsData.title,
  isSecondary: true
}

const MULTI_PLATFORMS_COLLECTION: ProvidersSection = rawMultiplatformsData

const TABLE_OF_CONTENTS: TableOfContentEntry[] = [
  {
    title: 'Run Qiskit circuits with'
  },
  HARDWARE_IN_MENU,
  QUANTUM_RUNTIMES_IN_MENU,
  LOCAL_SIMULATORS_IN_MENU,
  MULTIPLATFORMS_IN_MENU
]

const CONTENT_SECTIONS: ProvidersSection[] = [
  HARDWARE_COLLECTION,
  QUANTUM_RUNTIMES_COLLECTION,
  LOCAL_SIMULATORS_COLLECTION,
  MULTI_PLATFORMS_COLLECTION
]

export {
  TableOfContentEntry,
  ProvidersSection,
  ProviderObject,
  ProviderCodeExample,
  TABLE_OF_CONTENTS,
  CONTENT_SECTIONS

}
