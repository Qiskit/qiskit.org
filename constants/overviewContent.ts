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

const algorithmsCollectionId: string = 'algorithms'

const ALGORITHMS_COLLECTION_IN_MENU: TableOfContentItem = {
  url: `#${algorithmsCollectionId}`,
  label: 'Algorithms',
  isSecondary: true
}

const ALGORITHMS_COLLECTION: ContentSection = {
  id: 'algorithms',
  title: 'Collection of Algorithms',
  description: 'Qiskit contains a generic framework of cross-domain quantum algorithms upon which applications for near-term quantum computing can be built.',
  link: {
    label: 'See docs',
    url: '/'
  },
  subSections: [
    {
      title: 'Grover',
      content: {
        image: '/images/overview/algorithms/grover.png',
        description: 'Grover\'s algorithm is a well know quantum algorithm part of the amplitude amplifier category that provides quadratic speedup for searching through unstructured collections of records in search of particular targets.',
        cta: {
          label: 'Try it out',
          url: '/'
        }
      }
    },
    {
      title: 'VQE',
      content: {
        image: '/images/overview/algorithms/vqe.png',
        description: 'VQE is another well known quantum algorithm part of the minimum eigensolvers category. This algorithm uses variational techniques and interleaves quantum and classical computations in order to find the minimum eigenvalue of the hamiltonian of a given system.',
        cta: {
          label: 'Try it out',
          url: '/'
        }
      }
    },
    {
      title: 'QAOA',
      content: {
        image: '/images/overview/algorithms/qaoa.png',
        description: 'QAOA is also part of the minimum eigensolvers category. This algorithm extends VQE and inherits VQE\'s general optimization structure but uses its own fine-tuned variational form.',
        cta: {
          label: 'Try it out',
          url: '/'
        }
      }
    },
    {
      title: 'QSVM',
      content: {
        image: '/images/overview/algorithms/qsvm.png',
        description: 'QSVM is  part of the classifiers category and applies to problems that require a feature map for which computing the collection of inner products is not efficient classically. ',
        cta: {
          label: 'Try it out',
          url: '/'
        }
      }
    }
  ]
}

const experimentalistToolboxId: string = 'characterization'

const EXPERIMENTALIST_TOOLBOX_IN_MENU: TableOfContentItem = {
  url: `#${experimentalistToolboxId}`,
  label: 'Characterization',
  isSecondary: true
}

const EXPERIMENTALIST_TOOLBOX: ContentSection = {
  id: 'characterization',
  title: 'Experimentalist Toolbox',
  description: 'Qiskit provides a framework for understanding and mitigating noise in quantum circuits and systems. The experiments provided in Qiskit are grouped into the topics of characterization, verification and mitigation.',
  link: {
    label: 'See docs',
    url: '/'
  },
  subSections: [
    {
      title: 'Characterization',
      content: {
        image: '/images/overview/characterization/characterization.png',
        description: 'Qiskit\'s characterization framework brings the analysis parameters and circuits to users in order to understand and characterize the source of noice that impacts our devices. Such parameters include T1, T2-start, T2, Hamiltonian parameters such as the ZZ interaction rate and control errors in the gates.',
        cta: {
          label: 'See Characterization framework',
          url: '/'
        }
      }
    },
    {
      title: 'Verification',
      content: {
        image: '/images/overview/characterization/verification.png',
        description: 'Qiskit\'s verification framework provides experiments that are designed to verify gates and small circuit performance through tomography, quantum volume and randomized benchmarking.',
        cta: {
          label: 'See Verification framework',
          url: '/'
        }
      }
    },
    {
      title: 'Calibration',
      content: {
        image: '/images/overview/characterization/calibration.png',
        description: 'Qiskit\'s calibration module allows users to perform proper calibration through rabi schedules and drag schedules in order to mitigate noise by producing the appropriate fitter for the experiment.',
        cta: {
          label: 'See Calibration module',
          url: '/'
        }
      }
    }
  ]
}

export {
  RESEARCH_APPS_IN_MENU,
  RESEARCH_APPS,
  ALGORITHMS_COLLECTION_IN_MENU,
  ALGORITHMS_COLLECTION,
  EXPERIMENTALIST_TOOLBOX_IN_MENU,
  EXPERIMENTALIST_TOOLBOX
}
