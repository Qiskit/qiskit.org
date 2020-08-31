import { NavLink } from '~/constants/menuLinks'

type TableOfContentEntry = {
  /** The visible name of the link */
  label: string
  /** Id of the section we want to jump to */
  sectionId?: string
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
  subSections?: OverviewSubSection[]
  /** The image to show if the section doesn't have subsections */
  image?: string
}

const researchAppId: string = 'applications'

const RESEARCH_APPS_IN_MENU: TableOfContentEntry = {
  sectionId: researchAppId,
  label: 'Applications',
  isSecondary: true
}

const RESEARCH_APPS: OverviewSection = {
  id: researchAppId,
  title: 'Research Applications',
  description: 'Qiskit allows for easy research and development for specific industry use cases that have the highest potential for quantum advantage.',
  link: {
    label: 'See docs',
    url: 'https://qiskit.org/documentation/apidoc/aqua.html'
  },
  subSections: [
    {
      title: 'Optimization',
      content: {
        image: '/images/overview/applications/optimization.png',
        description: 'The Qiskit Optimization package covers the whole range from high-level modeling of optimization problems, with automatic conversion of problems to different required representations, to a suite of easy-to-use quantum optimization algorithms that are ready to run on classical simulators, as well as on real quantum systems.',
        cta: {
          label: 'Solve the Max Cut Problem',
          url: 'https://github.com/Qiskit/qiskit-aqua#creating-your-first-optimization-programming-experiment-in-qiskit'
        }
      }
    },
    {
      title: 'Finance',
      content: {
        image: '/images/overview/applications/finance.png',
        description: 'The Qiskit Finance package contains components to load uncertainty models, e.g., for pricing securities/derivatives or analyzing the risk involved. It also contains data providers to source real or random data to finance experiments and together with the Qiskit Optimization package allows easy modeling of optimization problems as arising e.g. in portfolio management.',
        cta: {
          label: 'Perform Option Pricing with qGans',
          url: 'https://qiskit.org/documentation/tutorials/finance/10_qgan_option_pricing.html'
        }
      }
    },
    {
      title: 'Machine Learning',
      content: {
        image: '/images/overview/applications/machine-learning.png',
        description: 'The Qiskit Machine Learning package simply contains sample datasets at present. Qiskit has some classification algorithms such as QSVM (Quantum Support Vector Machine) and VQC (Variational Quantum Classifier), where this data can be used for experiments, and there is also QGAN (Quantum Generative Adversarial Network) algorithm.',
        cta: {
          label: 'Classify data with a VQC',
          url: 'https://github.com/Qiskit/qiskit-aqua#creating-your-first-machine-learning-programming-experiment-in-qiskit'
        }
      }
    },
    {
      title: 'Chemistry',
      content: {
        image: '/images/overview/applications/chemestry.png',
        description: 'The Qiskit Chemistry package supports problems including ground state energy computations, excited states and dipole moments of molecule, both open and closed-shell.',
        cta: {
          label: 'Find the Energy Ground State of a Molecule',
          url: 'https://github.com/Qiskit/qiskit-aqua#creating-your-first-chemistry-programming-experiment-in-qiskit'
        }
      }
    }
  ]
}

const algorithmsCollectionId: string = 'algorithms'

const ALGORITHMS_COLLECTION_IN_MENU: TableOfContentEntry = {
  sectionId: algorithmsCollectionId,
  label: 'Algorithms',
  isSecondary: true
}

const ALGORITHMS_COLLECTION: OverviewSection = {
  id: 'algorithms',
  title: 'Collection of Algorithms',
  description: 'Qiskit contains a generic framework of cross-domain quantum algorithms upon which applications for near-term quantum computing can be built.',
  link: {
    label: 'See docs',
    url: 'https://qiskit.org/documentation/apidoc/qiskit.aqua.algorithms.html#algorithms-qiskit-aqua-algorithms'
  },
  subSections: [
    {
      title: 'Grover',
      content: {
        image: '/images/overview/algorithms/grover.png',
        description: 'Grover\'s algorithm is a well know quantum algorithm part of the amplitude amplifier category that provides quadratic speedup for searching through unstructured collections of records in search of particular targets.',
        cta: {
          label: 'Try out Grover’s',
          url: 'https://qiskit.org/documentation/stubs/qiskit.aqua.algorithms.Grover.html#qiskit.aqua.algorithms.Grover'
        }
      }
    },
    {
      title: 'VQE',
      content: {
        image: '/images/overview/algorithms/vqe.png',
        description: 'VQE (Variational Quantum Eigensolver) is another well known quantum algorithm part of the minimum eigensolvers category. This algorithm uses variational techniques and interleaves quantum and classical computations in order to find the minimum eigenvalue of the Hamiltonian of a given system.',
        cta: {
          label: 'Try out VQE',
          url: 'https://qiskit.org/documentation/stubs/qiskit.aqua.algorithms.VQE.html#qiskit.aqua.algorithms.VQE'
        }
      }
    },
    {
      title: 'QAOA',
      content: {
        image: '/images/overview/algorithms/qaoa.png',
        description: 'QAOA (Quantum Approximate Optimization Algorithm) is also part of the minimum eigensolvers category. This algorithm extends VQE (Variational Quantum Eigensolver) and inherits VQE\'s general optimization structure but uses its own fine-tuned variational form.',
        cta: {
          label: 'Try out QAOA',
          url: 'https://qiskit.org/documentation/stubs/qiskit.aqua.algorithms.QAOA.html#qiskit.aqua.algorithms.QAOA'
        }
      }
    },
    {
      title: 'QSVM',
      content: {
        image: '/images/overview/algorithms/qsvm.png',
        description: 'QSVM (Quantum Support Vector Machine) is  part of the classifiers category and applies to problems that require a feature map for which computing the collection of inner products is not efficient classically. ',
        cta: {
          label: 'Try out QSVM',
          url: 'https://qiskit.org/documentation/apidoc/qiskit.aqua.algorithms.html#classifiers'
        }
      }
    }
  ]
}

const experimentalistToolboxId: string = 'characterization'

const EXPERIMENTALIST_TOOLBOX_IN_MENU: TableOfContentEntry = {
  sectionId: experimentalistToolboxId,
  label: 'Characterization',
  isSecondary: true
}

const EXPERIMENTALIST_TOOLBOX: OverviewSection = {
  id: 'characterization',
  title: 'Experimentalist Toolbox',
  description: 'Qiskit\'s characterization framework offers circuits and analysis methods to understand and characterize the source of noice that impacts our devices. Such parameters include T1, T₂* , T2, Hamiltonian parameters such as the ZZ interaction rate and control errors in the gates.',
  link: {
    label: 'See docs',
    url: 'https://qiskit.org/documentation/apidoc/ignis.html'
  },
  subSections: [
    {
      title: 'Characterization',
      content: {
        image: '/images/overview/characterization/characterization.png',
        description: 'Qiskit\'s characterization framework brings the analysis parameters and circuits to users in order to understand and characterize the source of noice that impacts our devices. Such parameters include T1, T₂*, T2, Hamiltonian parameters such as the ZZ interaction rate and control errors in the gates.',
        cta: {
          label: 'See Characterization framework',
          url: 'https://qiskit.org/documentation/apidoc/characterization.html'
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
          url: 'https://qiskit.org/documentation/apidoc/verification.html'
        }
      }
    },
    {
      title: 'Calibration',
      content: {
        image: '/images/overview/characterization/calibration.png',
        description: 'Qiskit\'s calibration module allows users to optimize pulse parameters to minimize errors. Perform simple parameter scans, with more sophisticated error amplification sequences coming soon.',
        cta: {
          label: 'See Calibration module',
          url: 'https://qiskit.org/documentation/apidoc/characterization.html#calibrations'
        }
      }
    }
  ]
}

const circuitsId: string = 'circuits'

const CIRCUITS_IN_MENU: TableOfContentEntry = {
  sectionId: circuitsId,
  label: 'Circuits',
  isSecondary: true
}

const CIRCUITS: OverviewSection = {
  id: 'circuits',
  title: 'Circuits',
  description: 'Qiskit provides a set of tools for composing quantum programs at the level of circuits and pulses, optimizing them for the constraints of a particular physical quantum processor, and managing the batched execution of experiments on remote-access backends.',
  link: {
    label: 'See docs',
    url: 'https://qiskit.org/documentation/apidoc/circuit.html'
  },
  subSections: [
    {
      title: 'Compiler',
      content: {
        image: '/images/overview/circuits/compiler.png',
        description: 'Qiskit robust compiler provides users with the ability to explore how quantum circuits run on real hardware and optimize such circuits using modules such as pass managers.',
        cta: {
          label: 'See Compiler',
          url: 'https://qiskit.org/documentation/apidoc/compiler.html'
        }
      }
    },
    {
      title: 'Circuit Library',
      content: {
        image: '/images/overview/circuits/circuit-library.png',
        description: 'Circuit Library is a collection of well studied circuits and gates that can be plugged into many experiments allowing users to program at higher levels of abstraction when developing and experimenting with circuits.',
        cta: {
          label: 'See Circuit Library',
          url: 'https://qiskit.org/documentation/apidoc/circuit_library.html'
        }
      }
    },
    {
      title: 'Pulse',
      content: {
        image: '/images/overview/circuits/pulses.png',
        description: 'Pulse is a lower level quantum programming tool. This tool allows users more control over using quantum circuits when interacting with real quantum hardware.',
        cta: {
          label: 'See OpenPulse',
          url: 'https://qiskit.org/documentation/apidoc/pulse.html'
        }
      }
    }
  ]
}

const simulatorsId: string = 'simulators'

const SIMULATORS_IN_MENU: TableOfContentEntry = {
  sectionId: simulatorsId,
  label: 'Simulators',
  isSecondary: true
}

const SIMULATORS: OverviewSection = {
  id: 'simulators',
  title: 'Simulate Quantum Hardware',
  description: 'Qiskit provides a high performance simulator framework for the Qiskit software stack. It contains optimized C++ simulator backends for executing compiled circuits, and tools for constructing highly configurable noise models for performing realistic noisy simulations of the errors that occur during execution on real devices.',
  link: {
    label: 'See docs',
    url: 'https://qiskit.org/documentation/apidoc/aer.html'
  },
  image: '/images/overview/simulators/laptop.png'
}

const hardwareId: string = 'hardware'

const HARDWARE_IN_MENU: TableOfContentEntry = {
  sectionId: hardwareId,
  label: 'Hardware',
  isSecondary: true
}

const HARDWARE: OverviewSection = {
  id: 'hardware',
  title: 'Run Circuits on Real Quantum Systems',
  description: 'Circuits are the foundational roots for our software stack. Qiskit provides a set of tools for composing quantum programs at the level of circuits and pulses, optimizing them for the constraints of a particular physical quantum processor, and managing the batched execution of experiments on remote-access backends. Qiskit is modularly constructed, simplifying the addition of extensions for circuit optimizations and backends.',
  link: {
    label: 'See docs',
    url: 'https://qiskit.org/documentation/apidoc/ibmq_provider.html'
  },
  image: '/images/overview/hardware/quantum-computer.png'
}

const TABLE_OF_CONTENTS: TableOfContentEntry[] = [
  {
    label: 'Write Quantum Code'
  },
  RESEARCH_APPS_IN_MENU,
  ALGORITHMS_COLLECTION_IN_MENU,
  EXPERIMENTALIST_TOOLBOX_IN_MENU,
  CIRCUITS_IN_MENU,
  {
    label: 'Run Quantum Code'
  },
  SIMULATORS_IN_MENU,
  HARDWARE_IN_MENU
]

const CONTENT_SECTIONS: OverviewSection[] = [
  RESEARCH_APPS,
  ALGORITHMS_COLLECTION,
  EXPERIMENTALIST_TOOLBOX,
  CIRCUITS,
  SIMULATORS,
  HARDWARE
]

export {
  TableOfContentEntry,
  OverviewSection,
  OverviewSubSection,
  TABLE_OF_CONTENTS,
  CONTENT_SECTIONS
}
