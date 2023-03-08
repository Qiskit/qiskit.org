import { NavLink } from '~/constants/menuLinks'

type TableOfContentEntry = {
  /** The visible name of the link */
  label: string
  /** Id of the section we want to jump to */
  sectionId?: string
  /** Use when the link is on secondary level */
  isSecondary?: boolean
}

type ProvidersSubSection = {
  title: string
  content: {
    image: string
    description: string
    cta: NavLink
  }
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
  subSections?: ProvidersSubSection[]
  /** The image to show if the section doesn't have subsections */
  image?: string
}

const realHardware: string = 'real-hardware'

const REAL_HARDWARE_IN_MENU: TableOfContentEntry = {
  sectionId: realHardware,
  label: 'With Real Hardware',
  isSecondary: true
}

const REAL_HARDWARE: ProvidersSection = {
  id: realHardware,
  title: 'Run With Real Hardware',
  description: 'Qiskit allows for easy research and development for specific industry use cases that have the highest potential for quantum advantage.',
  // linkset: [
  //   {
  //     label: 'See machine learning docs',
  //     url: 'https://qiskit.org/documentation/machine-learning/'
  //   },
  //   {
  //     label: 'See nature docs',
  //     url: 'https://qiskit.org/documentation/nature/'
  //   },
  //   {
  //     label: 'See finance docs',
  //     url: 'https://qiskit.org/documentation/finance/'
  //   },
  //   {
  //     label: 'See optimization docs',
  //     url: 'https://qiskit.org/documentation/optimization/'
  //   }
  // ],
  subSections: [
    {
      title: 'IBM Quantum Qiskit Runtime',
      content: {
        image: '/images/providers/applications/optimization.png',
        description: 'The Qiskit Optimization package covers the whole range from high-level modeling of optimization problems, with automatic conversion of problems to different required representations, to a suite of easy-to-use quantum optimization algorithms that are ready to run on classical simulators, as well as on real quantum systems.',
        cta: {
          label: 'Solve the Max Cut Problem',
          url: 'https://qiskit.org/documentation/optimization/tutorials/01_quadratic_program.html'
        }
      }
    },
    {
      title: 'IBM Quantum Systems',
      content: {
        image: '/images/providers/applications/finance.png',
        description: 'The Qiskit Finance package contains components to load uncertainty models, e.g., for pricing securities/derivatives or analyzing the risk involved. It also contains data providers to source real or random data to finance experiments and together with the Qiskit Optimization package allows easy modeling of optimization problems as arising e.g. in portfolio management.',
        cta: {
          label: 'Perform Option Pricing with qGans',
          url: 'https://qiskit.org/documentation/finance/tutorials/10_qgan_option_pricing.html'
        }
      }
    },
    {
      title: 'IonQ',
      content: {
        image: '/images/providers/applications/machine-learning.png',
        description: 'The Qiskit Machine Learning package simply contains sample datasets at present. Qiskit has some classification algorithms such as QSVM (Quantum Support Vector Machine) and VQC (Variational Quantum Classifier), where this data can be used for experiments, and there is also QGAN (Quantum Generative Adversarial Network) algorithm.',
        cta: {
          label: 'Classify data with a VQC',
          url: 'https://qiskit.org/documentation/machine-learning/tutorials/01_neural_networks.html'
        }
      }
    },
    {
      title: 'Azure Quantum',
      content: {
        image: '/images/providers/applications/chemestry.png',
        description: 'The Qiskit Chemistry package supports problems including ground state energy computations, excited states and dipole moments of molecule, both open and closed-shell.',
        cta: {
          label: 'Find the Energy Ground State of a Molecule',
          url: 'https://qiskit.org/documentation/nature/tutorials/01_electronic_structure.html'
        }
      }
    },
    {
      title: 'Other community-supported providers',
      content: {
        image: '/images/providers/applications/chemestry.png',
        description: 'The Qiskit Chemistry package supports problems including ground state energy computations, excited states and dipole moments of molecule, both open and closed-shell.',
        cta: {
          label: 'Find the Energy Ground State of a Molecule',
          url: 'https://qiskit.org/documentation/nature/tutorials/01_electronic_structure.html'
        }
      }
    }
  ]
}

const simulatorsId: string = 'algorithms'

const SIMULATORS_IN_MENU: TableOfContentEntry = {
  sectionId: simulatorsId,
  label: 'With Simulators',
  isSecondary: true
}

const SIMULATORS_COLLECTION: ProvidersSection = {
  id: simulatorsId,
  title: 'Run With Simulators',
  description: 'Connect Qiskit with high performance simulators.',
  link: {
    label: 'See docs',
    url: 'https://qiskit.org/documentation/apidoc/algorithms.html'
  },
  subSections: [
    {
      title: 'Qiskit Aer',
      content: {
        image: '/images/providers/algorithms/grover.png',
        description: 'Grover\'s algorithm is a well known quantum algorithm part of the amplitude amplifier category that provides quadratic speedup for searching through unstructured collections of records in search of particular targets.',
        cta: {
          label: 'Try out Grover’s',
          url: 'https://qiskit.org/documentation/stubs/qiskit.algorithms.Grover.html#qiskit.algorithms.Grover'
        }
      }
    },
    {
      title: 'Other simulator',
      content: {
        image: '/images/providers/algorithms/vqe.png',
        description: 'VQE (Variational Quantum Eigensolver) is another well known quantum algorithm part of the minimum eigensolvers category. This algorithm uses variational techniques and interleaves quantum and classical computations in order to find the minimum eigenvalue of the Hamiltonian of a given system.',
        cta: {
          label: 'Try out VQE',
          url: 'https://qiskit.org/documentation/stubs/qiskit.algorithms.VQE.html#qiskit.algorithms.VQE'
        }
      }
    },
    {
      title: 'Yet another one',
      content: {
        image: '/images/providers/algorithms/qaoa.png',
        description: 'QAOA (Quantum Approximate Optimization Algorithm) is also part of the minimum eigensolvers category. This algorithm extends VQE (Variational Quantum Eigensolver) and inherits VQE\'s general optimization structure but uses its own fine-tuned variational form.',
        cta: {
          label: 'Try out QAOA',
          url: 'https://qiskit.org/documentation/stubs/qiskit.algorithms.QAOA.html#qiskit.algorithms.QAOA'
        }
      }
    }
  ]
}

const TABLE_OF_CONTENTS: TableOfContentEntry[] = [
  {
    label: 'Run Qiskit circuits'
  },
  REAL_HARDWARE_IN_MENU,
  SIMULATORS_IN_MENU
]

const CONTENT_SECTIONS: ProvidersSection[] = [
  REAL_HARDWARE,
  SIMULATORS_COLLECTION
]

const AlgorithmsContent = [
  {
    title: 'Bell State',
    codeSample: [
      'import qiskit',
      '&nbsp;',
      '# Oiskit quantum circuits libraries',
      'quantum_circuit = qiskit.circuit.library.QuantumVolume',
      'quantum_circuit.measure_all()',
      'quantum_circuit.draw()',
      '&nbsp;',
      '# prepare your circuit to run',
      'from qiskit import IBMQ',
      '&nbsp;',
      '# Get the API token in',
      '# https://quantum-computing.ibm.com/',
      'IBMQ.save_account("YOUR TOKEN")',
      '&nbsp;',
      'provider = IBM.load_account()',
      'backend = provider.get_backend("ibmq_quito")',
      '&nbsp;',
      'optimized_circuit = qiskit.transpile(quantum_circuit, backend)',
      'optimized_circuit.draw()',
      '&nbsp;',
      '# run in real hardware',
      'job = backend.run(optimized_circuit)',
      'retrieved_job = backend.retrieve_job(job.job_id())',
      'result = retrieved_job.result()',
      'print result.get_counts()'
    ]
  },
  {
    title: 'Quantum Volume',
    codeSample: [
      'lorem ipsum code line',
      'lorem ipsum code line',
      '&nbsp;',
      '# comment ipsum',
      'lorem ipsum code line',
      'lorem ipsum code line',
      'lorem ipsum code line',
      '&nbsp;',
      '# comment ipsum',
      'lorem ipsum code line',
      'lorem ipsum code line'
    ]
  },
  {
    title: 'VQE',
    codeSample: [
      'lorem ipsum code line',
      'lorem ipsum code line',
      '&nbsp;',
      '# comment ipsum',
      'lorem ipsum code line',
      'lorem ipsum code line',
      'lorem ipsum code line',
      '&nbsp;',
      '# comment ipsum',
      'lorem ipsum code line',
      'lorem ipsum code line'
    ]
  },
  {
    title: 'QAOA',
    codeSample: [
      'lorem ipsum code line',
      'lorem ipsum code line',
      '&nbsp;',
      '# comment ipsum',
      'lorem ipsum code line',
      'lorem ipsum code line',
      'lorem ipsum code line',
      '&nbsp;',
      '# comment ipsum',
      'lorem ipsum code line',
      'lorem ipsum code line'
    ]
  },
  {
    title: 'QSVM',
    codeSample: [
      'lorem ipsum code line',
      'lorem ipsum code line',
      '&nbsp;',
      '# comment ipsum',
      'lorem ipsum code line',
      'lorem ipsum code line',
      'lorem ipsum code line',
      '&nbsp;',
      '# comment ipsum',
      'lorem ipsum code line',
      'lorem ipsum code line'
    ]
  }
]

export {
  TableOfContentEntry,
  ProvidersSection,
  ProvidersSubSection,
  TABLE_OF_CONTENTS,
  CONTENT_SECTIONS,
  AlgorithmsContent
}
