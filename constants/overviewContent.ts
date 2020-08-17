import { NavLink } from '~/constants/menuLinks'

type TableOfContentEntry = {
  /** The visible name of the link */
  label: string
  /** Where we want to go */
  url: string
  /** Use when the link is on secondary level */
  isSecondary?: boolean
}

type OverviewSubSection = {
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
interface OverviewSection {
  /** The identifier of the section */
  id: string
  /** The visible title of the section */
  title: string
  /** The visible description of the section */
  description: string
  /** Where we want to go to get more info of the section */
  link: NavLink
  /** The sub sections inside the section */
  subSections?: OverviewSubSection[],
  /** The image of the section */
  image?: string
}

const researchAppId: string = 'applications'

const RESEARCH_APPS_IN_MENU: TableOfContentEntry = {
  url: `#${researchAppId}`,
  label: 'Applications',
  isSecondary: true
}

const RESEARCH_APPS: OverviewSection = {
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

const ALGORITHMS_COLLECTION_IN_MENU: TableOfContentEntry = {
  url: `#${algorithmsCollectionId}`,
  label: 'Algorithms',
  isSecondary: true
}

const ALGORITHMS_COLLECTION: OverviewSection = {
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

const EXPERIMENTALIST_TOOLBOX_IN_MENU: TableOfContentEntry = {
  url: `#${experimentalistToolboxId}`,
  label: 'Characterization',
  isSecondary: true
}

const EXPERIMENTALIST_TOOLBOX: OverviewSection = {
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

const circuitsId: string = 'circuits'

const CIRCUITS_IN_MENU: TableOfContentEntry = {
  url: `#${circuitsId}`,
  label: 'Circuits',
  isSecondary: true
}

const CIRCUITS: OverviewSection = {
  id: 'circuits',
  title: 'Circuits',
  description: 'Qiskit provides a set of tools for composing quantum programs at the level of circuits and pulses, optimizing them for the constraints of a particular physical quantum processor, and managing the batched execution of experiments on remote-access backends.',
  link: {
    label: 'See docs',
    url: '/'
  },
  subSections: [
    {
      title: 'Compiler',
      content: {
        image: '/images/overview/circuits/compiler.png',
        description: 'Qiskit robust compiler provides users with the ability to explore how quantum circuits run on real hardware and optimize such circuits using modules such as pass managers.',
        cta: {
          label: 'Call to action',
          url: '/'
        }
      }
    },
    {
      title: 'Circuit Library',
      content: {
        image: '/images/overview/circuits/circuit-library.png',
        description: 'Circuit Library is a collection of well studied circuits and gates that can be plugged into many experiments allowing users to program at higher levels of abstraction when developing and experimenting with circuits.',
        cta: {
          label: 'Call to action',
          url: '/'
        }
      }
    },
    {
      title: 'Pulses',
      content: {
        image: '/images/overview/circuits/pulses.png',
        description: 'Pulse is a lower level quantum programming tool. This tool allows users more control over using quantum circuits when interacting with real quantum hardware.',
        cta: {
          label: 'Call to action',
          url: '/'
        }
      }
    }
  ]
}

export {
  TableOfContentEntry,
  OverviewSection,
  OverviewSubSection,
  RESEARCH_APPS_IN_MENU,
  RESEARCH_APPS,
  ALGORITHMS_COLLECTION_IN_MENU,
  ALGORITHMS_COLLECTION,
  EXPERIMENTALIST_TOOLBOX_IN_MENU,
  EXPERIMENTALIST_TOOLBOX,
  CIRCUITS_IN_MENU,
  CIRCUITS
}
