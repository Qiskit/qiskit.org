import { NavLink } from '~/constants/menuLinks'
import rawHardwareData from '~/content/providers/hardware.json'
import rawSimulatorsData from '~/content/providers/simulators.json'
import rawMultiplatformsData from '~/content/providers/multiplatforms.json'

type TableOfContentEntry = {
  /** The visible name of the link */
  label: string
  /** Id of the section we want to jump to */
  sectionId?: string
  /** Use when the link is on secondary level */
  isSecondary?: boolean
}

type ProviderObject = {
  title: string
  image: string | null
  description: string
  installation: string
  websiteCta: {
    label: string | null
    url: string | null
  }
  docsCta: {
    label: string | null
    url: string | null
  }
  sourceCta: {
    label: string | null
    url: string | null
  }
  helloWorldExample: string[]
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
  link?: NavLink
  /** A set of links to get more information on the section */
  linkset?: NavLink[]
  /** The sub sections inside the section */
  subSections?: ProviderObject[]
  /** The image to show if the section doesn't have subsections */
  image?: string
}

const convertJsonToObjectData = (jsonData: ProviderObject[]) => {
  const parsedData = jsonData.map((jsonObject) => {
    return {
      title: jsonObject.title,
      image: jsonObject.image,
      description: jsonObject.description,
      installation: jsonObject.installation,
      websiteCta: {
        label: jsonObject.websiteCta.label,
        url: jsonObject.websiteCta.url
      },
      docsCta: {
        label: jsonObject.docsCta.label,
        url: jsonObject.docsCta.url
      },
      sourceCta: {
        label: jsonObject.sourceCta.label,
        url: jsonObject.sourceCta.url
      },
      helloWorldExample: jsonObject.helloWorldExample
    }
  })

  return parsedData
}

const runtimes: string = 'runtimes'

const QUANTUM_RUNTIMES_IN_MENU: TableOfContentEntry = {
  sectionId: runtimes,
  label: 'Quantum Runtimes',
  isSecondary: true
}

const QUANTUM_RUNTIMES: ProvidersSection = {
  id: runtimes,
  title: 'Quantum Runtimes',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere eros sed tortor facilisis efficitur. Vestibulum finibus, libero vitae aliquam finibus.',
  subSections: convertJsonToObjectData(rawHardwareData)
}

const simulatorsId: string = 'simulators'

const SIMULATORS_IN_MENU: TableOfContentEntry = {
  sectionId: simulatorsId,
  label: 'Simulators',
  isSecondary: true
}

const SIMULATORS_COLLECTION: ProvidersSection = {
  id: simulatorsId,
  title: 'Simulators',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere eros sed tortor facilisis efficitur. Vestibulum finibus, libero vitae aliquam finibus.',
  subSections: convertJsonToObjectData(rawSimulatorsData)
}

const multiplatformsId: string = 'multiplatforms'

const MULTIPLATFORMS_IN_MENU: TableOfContentEntry = {
  sectionId: multiplatformsId,
  label: 'Multiplatforms',
  isSecondary: true
}

const MULTIPLATFORMS_COLLECTION: ProvidersSection = {
  id: multiplatformsId,
  title: 'Multiplatforms',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere eros sed tortor facilisis efficitur. Vestibulum finibus, libero vitae aliquam finibus.',
  subSections: convertJsonToObjectData(rawMultiplatformsData)
}

const TABLE_OF_CONTENTS: TableOfContentEntry[] = [
  {
    label: 'Run Qiskit circuits with'
  },
  QUANTUM_RUNTIMES_IN_MENU,
  SIMULATORS_IN_MENU,
  MULTIPLATFORMS_IN_MENU
]

const CONTENT_SECTIONS: ProvidersSection[] = [
  QUANTUM_RUNTIMES,
  SIMULATORS_COLLECTION,
  MULTIPLATFORMS_COLLECTION
]

export {
  TableOfContentEntry,
  ProvidersSection,
  ProviderObject,
  TABLE_OF_CONTENTS,
  CONTENT_SECTIONS
}
