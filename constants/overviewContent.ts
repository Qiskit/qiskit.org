import { NavLink } from '~/constants/menuLinks'

type TableOfContentItem = {
  /** The visible name of the link */
  label: string
  /** Where we want to go */
  url: string
  /** Use when the link is on secondary level */
  isSecondary?: boolean
}

type SubSection = {
  title: string
  content: {
    image: string
    description: string
    cta: NavLink
  }
}

/**
 * Represent a content section for the overview page
 */
interface ContentSection {
  /** The identifier of the section */
  id: string
  /** The visible title of the section */
  title: string
  /** The visible description of the section */
  description: string
  /** Where we want to go to get more info of the section */
  link: NavLink
  /** The sub sections inside the section */
  subSections?: SubSection[]
}

const researchAppId: string = 'applications'

const RESEARCH_APPS_IN_MENU: TableOfContentItem = {
  url: `#${researchAppId}`,
  label: 'Applications',
  isSecondary: true
}

const RESEARCH_APPS: ContentSection = {
  id: researchAppId,
  title: 'Research Applications',
  description: 'Qiskit allows for easy research and development for specific industry use cases that have the highest potential for quantum advantage.',
  link: {
    label: 'See docs',
    url: '/'
  },
  subSections: [
    {
      title: 'Optimization',
      content: {
        image: '/images/overview/applications/optimization.png',
        description: 'The Qiskit Optimization package covers the whole range from high-level modeling of optimization problems, with automatic conversion of problems to different required representations, to a suite of easy-to-use quantum optimization algorithms that are ready to run on classical simulators, as well as on real quantum.',
        cta: {
          label: 'Try the Max Cut Problem',
          url: '/'
        }
      }
    },
    {
      title: 'Finance',
      content: {
        image: '/images/overview/applications/finance.png',
        description: 'The Qiskit Finance package contains uncertainty components for stock/securities problems, Ising translators for portfolio optimizations and data providers to source real or random data to finance experiments.',
        cta: {
          label: 'Try Option Pricing with qGans',
          url: '/'
        }
      }
    },
    {
      title: 'Machine Learning',
      content: {
        image: '/images/overview/applications/machine-learning.png',
        description: 'The Qiskit Machine Learning package simply contains sample datasets at present. Qiskit has some classification algorithms such as QSVM and VQC (Variational Quantum Classifier), where this data can be used for experiments, and there is also QGAN (Quantum Generative Adversarial Network) algorithm.',
        cta: {
          label: 'VQC with trained dataset',
          url: '/'
        }
      }
    },
    {
      title: 'Chemistry',
      content: {
        image: '/images/overview/applications/chemestry.png',
        description: 'The Qiskit Chemistry package supports problems including ground state energy computations, excited states and dipole moments of molecule, both open and closed-shell.',
        cta: {
          label: 'Ground State energy of a Molecule',
          url: '/'
        }
      }
    }
  ]
}

export {
  RESEARCH_APPS_IN_MENU,
  RESEARCH_APPS
}
