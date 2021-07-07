import { NavLink } from '~/constants/menuLinks'

const wholeSection = 'whole-section'
const sectionPrerequisites = 'prerequisites'
const sectionQuantumStatesAndQubits = 'quantum-states-and-qubits'
const sectionMultipleQubitsAndEntanglement = 'multiple-qubits-and-entanglement'
const sectionGamesAndDemos = 'games-and-demos'
const sectionProtocolsAndAlgorithms = 'protocols-and-algorithms'
const sectionPulses = 'pulses'
const sectionApps = 'apps'
const sectionCircuits = 'circuits'
const sectionLabs = 'labs'

const baseUrl = 'https://learn.qiskit.org'
const pathPrerequisites = '/course/ch-prerequisites'
const pathQuantumStatesAndQubits = '/course/ch-states'
const pathMultipleQubitsAndEntanglement = '/course/ch-gates'
const pathGamesAndDemos = '/course/ch-demos'
const pathProtocolsAndAlgorithms = '/course/ch-algorithms'
const pathPulses = '/course/quantum-hardware-pulses'
const pathHardwareUsingCircuits = '/course/quantum-hardware'
const pathApps = '/course/ch-applications'
const pathLabs = '/course/ch-labs'

type MegaDropdownMenuGroup = {
  title: NavLink,
  content: NavLink[]
}

const PREREQUISITES: MegaDropdownMenuGroup = {
  title: {
    label: 'Prerequisites',
    url: `${baseUrl}${pathPrerequisites}`,
    segment: {
      cta: wholeSection, location: sectionPrerequisites
    }
  },
  content: [
    {
      label: 'Setting Up Your Environment',
      url: `${baseUrl}${pathPrerequisites}/environment-setup-guide-to-work-with-qiskit-textbook`,
      segment: {
        cta: 'setting-the-environment', location: sectionPrerequisites
      }
    },
    {
      label: 'Python and Jupyter Notebooks',
      url: `${baseUrl}${pathPrerequisites}/introduction-to-python-and-jupyter-notebooks`,
      segment: {
        cta: 'python-and-jupyter-notebooks', location: sectionPrerequisites
      }
    }
  ]
}

const QUANTUM_STATES_AND_QUBITS: MegaDropdownMenuGroup = {
  title: {
    label: 'Quantum States and Qubits',
    url: `${baseUrl}${pathQuantumStatesAndQubits}`,
    segment: {
      cta: wholeSection, location: sectionQuantumStatesAndQubits
    }
  },
  content: [
    {
      label: 'Introduction',
      url: `${baseUrl}${pathQuantumStatesAndQubits}/introduction`,
      segment: {
        cta: 'introduction', location: sectionQuantumStatesAndQubits
      }
    },
    {
      label: 'The Atoms of Computation',
      url: `${baseUrl}${pathQuantumStatesAndQubits}/the-atoms-of-computation`,
      segment: {
        cta: 'the-atoms-of-computation', location: sectionQuantumStatesAndQubits
      }
    },
    {
      label: 'Representing Qubit States',
      url: `${baseUrl}${pathQuantumStatesAndQubits}/representing-qubit-states`,
      segment: {
        cta: 'representing-qubit-states', location: sectionQuantumStatesAndQubits
      }
    },
    {
      label: 'Single Qubit Gates',
      url: `${baseUrl}${pathQuantumStatesAndQubits}/single-qubit-gates`,
      segment: {
        cta: 'single-qubit-gates', location: sectionQuantumStatesAndQubits
      }
    },
    {
      label: 'The Case for Quantum',
      url: `${baseUrl}${pathQuantumStatesAndQubits}/the-case-for-quantum-computers`,
      segment: {
        cta: 'the-case-for-quantum-computers', location: sectionQuantumStatesAndQubits
      }
    }
  ]
}

const MULTIPLE_QUBITS_AND_ENTANGLEMENT: MegaDropdownMenuGroup = {
  title: {
    label: 'Multiple Qubits and Entanglement',
    url: `${baseUrl}${pathMultipleQubitsAndEntanglement}`,
    segment: {
      cta: wholeSection, location: sectionMultipleQubitsAndEntanglement
    }
  },
  content: [
    {
      label: 'Introduction',
      url: `${baseUrl}${pathMultipleQubitsAndEntanglement}/introduction`,
      segment: {
        cta: 'introduction', location: sectionMultipleQubitsAndEntanglement
      }
    },
    {
      label: 'Multiple Qubits and Entangled States',
      url: `${baseUrl}${pathMultipleQubitsAndEntanglement}/multiple-qubits-and-entangled-states`,
      segment: {
        cta: 'multiple-qubits-and-entangled-states', location: sectionMultipleQubitsAndEntanglement
      }
    },
    {
      label: 'Phase Kickback',
      url: `${baseUrl}${pathMultipleQubitsAndEntanglement}/phase-kickback`,
      segment: {
        cta: 'phase-kickback', location: sectionMultipleQubitsAndEntanglement
      }
    },
    {
      label: 'Basic Circuit Identities',
      url: `${baseUrl}${pathMultipleQubitsAndEntanglement}/basic-circuit-identities`,
      segment: {
        cta: 'basic-circuit-identities', location: sectionMultipleQubitsAndEntanglement
      }
    },
    {
      label: 'Proving Universality',
      url: `${baseUrl}${pathMultipleQubitsAndEntanglement}/proving-universality`,
      segment: {
        cta: 'proving-universality', location: sectionMultipleQubitsAndEntanglement
      }
    },
    {
      label: 'Classical Computation on a Quantum Computer',
      url: `${baseUrl}${pathMultipleQubitsAndEntanglement}/classical-computation-on-a-quantum-computer`,
      segment: {
        cta: 'classical-computation-on-a-quantum-computer', location: sectionMultipleQubitsAndEntanglement
      }
    }
  ]
}

const GAMES_AND_DEMOS: MegaDropdownMenuGroup = {
  title: {
    label: 'Games & Demos',
    url: `${baseUrl}${pathGamesAndDemos}`,
    segment: {
      cta: wholeSection, location: sectionGamesAndDemos
    }
  },
  content: [
    {
      label: 'Bonus Level: Sandbox',
      url: `${baseUrl}${pathGamesAndDemos}/bonus-level-sandbox`,
      segment: {
        cta: 'bonus-level-sandbox', location: sectionGamesAndDemos
      }
    },
    {
      label: 'Bonus Level: Make your own puzzles',
      url: `${baseUrl}${pathGamesAndDemos}/bonus-level-make-your-own-puzzles`,
      segment: {
        cta: 'bonus-level-make-your-own-puzzles', location: sectionGamesAndDemos
      }
    },
    {
      label: 'Level 5: Proving the Uniqueness of Quantum Variables',
      url: `${baseUrl}${pathGamesAndDemos}/level-5-proving-the-uniqueness-of-quantum-variables`,
      segment: {
        cta: 'level-5-proving-the-uniqueness-of-quantum-variables', location: sectionGamesAndDemos
      }
    },
    {
      label: 'Estimating Pi Using Quantum Phase Estimation Algorithm',
      url: `${baseUrl}${pathGamesAndDemos}/estimating-pi-pi-using-quantum-phase-estimation-algorithm`,
      segment: {
        cta: 'estimating-pi-pi-using-quantum-phase-estimation-algorithm', location: sectionGamesAndDemos
      }
    },
    {
      label: 'Local Reality and the CHSH inequality',
      url: `${baseUrl}${pathGamesAndDemos}/local-reality-and-the-chsh-inequality`,
      segment: {
        cta: 'local-reality-and-the-chsh-inequality', location: sectionGamesAndDemos
      }
    },
    {
      label: 'Widgets Demonstration',
      url: `${baseUrl}${pathGamesAndDemos}/widgets-demonstration`,
      segment: {
        cta: 'widgets-demonstration', location: sectionGamesAndDemos
      }
    }
  ]
}

const QUANTUM_PROTOCOLS_AND_ALGORITHMS: MegaDropdownMenuGroup = {
  title: {
    label: 'Quantum Protocols and Quantum Algorithms',
    url: `${baseUrl}${pathProtocolsAndAlgorithms}`,
    segment: {
      cta: wholeSection, location: sectionProtocolsAndAlgorithms
    }
  },
  content: [
    {
      label: 'Defining Quantum Circuits',
      url: `${baseUrl}${pathProtocolsAndAlgorithms}/quantum-circuits`,
      segment: {
        cta: 'defining-quantum-circuits', location: sectionProtocolsAndAlgorithms
      }
    },
    {
      label: 'Deutsch-Jozsa Algorithm',
      url: `${baseUrl}${pathProtocolsAndAlgorithms}/deutsch-jozsa-algorithm`,
      segment: {
        cta: 'deutsch-jozsa-algorithm', location: sectionProtocolsAndAlgorithms
      }
    },
    {
      label: 'Bernstein-Vazirani Algorithm',
      url: `${baseUrl}${pathProtocolsAndAlgorithms}/bernstein-vazirani-algorithm`,
      segment: {
        cta: 'bernstein-vazirani-algorithm', location: sectionProtocolsAndAlgorithms
      }
    },
    {
      label: 'Simon\'s Algorithm',
      url: `${baseUrl}${pathProtocolsAndAlgorithms}/simons-algorithm`,
      segment: {
        cta: 'simons-algorithm', location: sectionProtocolsAndAlgorithms
      }
    },
    {
      label: 'Quantum Fourier Transform',
      url: `${baseUrl}${pathProtocolsAndAlgorithms}/quantum-fourier-transform`,
      segment: {
        cta: 'quantum-fourier-transform', location: sectionProtocolsAndAlgorithms
      }
    },
    {
      label: 'Quantum Phase Estimation',
      url: `${baseUrl}${pathProtocolsAndAlgorithms}/quantum-phase-estimation`,
      segment: {
        cta: 'quantum-phase-estimation', location: sectionProtocolsAndAlgorithms
      }
    },
    {
      label: 'Shor\'s Algorithm',
      url: `${baseUrl}${pathProtocolsAndAlgorithms}/shors-algorithm`,
      segment: {
        cta: 'shors-algorithm', location: sectionProtocolsAndAlgorithms
      }
    },
    {
      label: 'Grover\'s Algorithm',
      url: `${baseUrl}${pathProtocolsAndAlgorithms}/grovers-algorithm`,
      segment: {
        cta: 'grovers-algorithm', location: sectionProtocolsAndAlgorithms
      }
    },
    {
      label: 'Quantum Counting',
      url: `${baseUrl}${pathProtocolsAndAlgorithms}/quantum-counting`,
      segment: {
        cta: 'quantum-counting', location: sectionProtocolsAndAlgorithms
      }
    },
    {
      label: 'Quantum Teleportation',
      url: `${baseUrl}${pathProtocolsAndAlgorithms}/quantum-teleportation`,
      segment: {
        cta: 'quantum-teleportation', location: sectionProtocolsAndAlgorithms
      }
    },
    {
      label: 'Superdense Coding',
      url: `${baseUrl}${pathProtocolsAndAlgorithms}/superdense-coding`,
      segment: {
        cta: 'superdense-coding', location: sectionProtocolsAndAlgorithms
      }
    },
    {
      label: 'Quantum Key Distribution',
      url: `${baseUrl}${pathProtocolsAndAlgorithms}/quantum-key-distribution`,
      segment: {
        cta: 'quantum-key-distribution', location: sectionProtocolsAndAlgorithms
      }
    }
  ]
}

const INVESTIGATING_Q_HW_USING_MICROWAVE_PULSES : MegaDropdownMenuGroup = {
  title: {
    label: 'Investigating Quantum Hardware Using Microwave Pulses',
    url: `${baseUrl}${pathPulses}`,
    segment: {
      cta: wholeSection, location: sectionPulses
    }
  },
  content: [
    {
      label: 'Calibrating Qubits with Qiskit Pulse',
      url: `${baseUrl}${pathPulses}/calibrating-qubits-using-qiskit-pulse`,
      segment: {
        cta: 'calibrating-qubits-using-qiskit-pulse', location: sectionPulses
      }
    },
    {
      label: 'Accessing Higher Energy States',
      url: `${baseUrl}${pathPulses}/accessing-higher-energy-states-with-qiskit-pulse`,
      segment: {
        cta: 'accessing_higher_energy_states-with-qiskit-pulse', location: sectionPulses
      }
    },
    {
      label: 'Introduction to Transmon Physics',
      url: `${baseUrl}${pathPulses}/introduction-to-transmon-physics`,
      segment: {
        cta: 'introduction-to-transmon-physics', location: sectionPulses
      }
    },
    {
      label: 'Circuit Quantum Electrodynamics',
      url: `${baseUrl}${pathPulses}/circuit-quantum-electrodynamics`,
      segment: {
        cta: 'circuit-quantum-electrodynamics', location: sectionPulses
      }
    },
    {
      label: 'Exploring the Jaynes-Cummings Hamiltonian with Qiskit Pulse',
      url: `${baseUrl}${pathPulses}/exploring-the-jaynes-cummings-hamiltonian-with-qiskit-pulse`,
      segment: {
        cta: 'exploring-the-jaynes-cummings-hamiltonian-with-qiskit-pulse', location: sectionPulses
      }
    },
    {
      label: 'Measuring the Qubit ac-Stark Shift',
      url: `${baseUrl}${pathPulses}/measuring-the-qubit-ac-stark-shift`,
      segment: {
        cta: 'measuring-the-qubit-ac-stark-shift', location: sectionPulses
      }
    },
    {
      label: 'Hamiltonian Tomography',
      url: `${baseUrl}${pathPulses}/hamiltonian-tomography`,
      segment: {
        cta: 'hamiltonian-tomography', location: sectionPulses
      }
    }
  ]
}

const QUANTUM_ALGORITHMS_FOR_APPS : MegaDropdownMenuGroup = {
  title: {
    label: 'Quantum Algorithms for Applications',
    url: `${baseUrl}${pathApps}`,
    segment: {
      cta: wholeSection, location: sectionApps
    }
  },
  content: [
    {
      label: 'Solving Linear Systems of Equations using HHL',
      url: `${baseUrl}${pathApps}/solving-linear-systems-of-equations-using-hhl-and-its-qiskit-implementation`,
      segment: {
        cta: 'solving-linear-systems-of-equations-using-hhl-and-its-qiskit-implementation', location: sectionApps
      }
    },
    {
      label: 'Simulating Molecules using VQE',
      url: `${baseUrl}${pathApps}/simulating-molecules-using-vqe`,
      segment: {
        cta: 'simulating-molecules-using-vqe', location: sectionApps
      }
    },
    {
      label: 'Solving combinatorial optimization problems using QAOA',
      url: `${baseUrl}${pathApps}/solving-combinatorial-optimization-problems-using-qaoa`,
      segment: {
        cta: 'solving-combinatorial-optimization-problems-using-qaoa', location: sectionApps
      }
    },
    {
      label: 'Solving Satisfiability Problems using Grover\'s Algorithm',
      url: `${baseUrl}${pathApps}/solving-satisfiability-problems-using-grovers-algorithm`,
      segment: {
        cta: 'solving-satisfiability-problems-using-grovers-algorithm', location: sectionApps
      }
    },
    {
      label: 'Hybrid quantum-classical Neural Networks with PyTorch and Qiskit',
      url: `${baseUrl}${pathApps}/hybrid-quantum-classical-neural-networks-with-pytorch-and-qiskit`,
      segment: {
        cta: 'hybrid-quantum-classical-neural-networks-with-pytorch-and-qiskit', location: sectionApps
      }
    },
    {
      label: 'Variational Quantum Linear Solver',
      url: `${baseUrl}${pathApps}/the-variational-quantum-linear-solver`,
      segment: {
        cta: 'the-variational-quantum-linear-solver', location: sectionApps
      }
    },
    {
      label: 'Quantum Image Processing - FRQI and NEQR Image Representations',
      url: `${baseUrl}${pathApps}/flexible-representation-of-quantum-images-frqi`,
      segment: {
        cta: 'flexible-representation-of-quantum-images-frqi', location: sectionApps
      }
    }
  ]
}

const INVESTIGATING_Q_HW_USING_Q_CIRCUITS : MegaDropdownMenuGroup = {
  title: {
    label: 'Investigating Quantum Hardware Using Quantum Circuits',
    url: `${baseUrl}${pathHardwareUsingCircuits}`,
    segment: {
      cta: wholeSection, location: sectionCircuits
    }
  },
  content: [
    {
      label: 'Introduction to Quantum Error Correction using Repetition Codes',
      url: `${baseUrl}${pathHardwareUsingCircuits}/introduction-to-quantum-error-correction-via-the-repetition-code`,
      segment: {
        cta: 'introduction-to-quantum-error-correction-via-the-repetition-code', location: sectionCircuits
      }
    },
    {
      label: 'Measurement Error Mitigation',
      url: `${baseUrl}${pathHardwareUsingCircuits}/measurement-error-mitigation`,
      segment: {
        cta: 'measurement-error-mitigation', location: sectionCircuits
      }
    },
    {
      label: 'Randomized Benchmarking',
      url: `${baseUrl}${pathHardwareUsingCircuits}/randomized-benchmarking`,
      segment: {
        cta: 'randomized-benchmarking', location: sectionCircuits
      }
    },
    {
      label: 'Measuring Quantum Volume',
      url: `${baseUrl}${pathHardwareUsingCircuits}/measuring-quantum-volume`,
      segment: {
        cta: 'measuring-quantum-volume', location: sectionCircuits
      }
    }
  ]
}

const QUANTUM_COMPUTING_LABS : MegaDropdownMenuGroup = {
  title: {
    label: 'Quantum Computing Labs',
    url: `${baseUrl}${pathLabs}`,
    segment: {
      cta: wholeSection, location: sectionLabs
    }
  },
  content: [
    {
      label: 'Lab 1. Quantum Circuits',
      url: `${baseUrl}${pathLabs}/lab-1-quantum-circuits`,
      segment: {
        cta: 'lab-1-quantum-circuits', location: sectionLabs
      }
    },
    {
      label: 'Lab 2. Quantum Measurement',
      url: `${baseUrl}${pathLabs}/lab-2-quantum-measurements`,
      segment: {
        cta: 'lab-2-quantum-measurements', location: sectionLabs
      }
    },
    {
      label: 'Lab 3. Accuracy of Quantum Phase Estimation',
      url: `${baseUrl}${pathLabs}/lab-3-accuracy-of-quantum-phase-estimation`,
      segment: {
        cta: 'lab-3-accuracy-of-quantum-phase-estimation', location: sectionLabs
      }
    },
    {
      label: 'Lab 4. Iterative Quantum Phase Estimation',
      url: `${baseUrl}${pathLabs}/lab-4-iterative-phase-estimation-algorithm`,
      segment: {
        cta: 'lab-4-iterative-phase-estimation-algorithm', location: sectionLabs
      }
    },
    {
      label: 'Lab 5. Scalable Shor\'s Algorithm',
      url: `${baseUrl}${pathLabs}/lab-5-scalable-shors-algorithm`,
      segment: {
        cta: 'lab-5-scalable-shors-algorithm', location: sectionLabs
      }
    },
    {
      label: 'Lab 6. Grover\'s search with an unknown number of solutions',
      url: `${baseUrl}${pathLabs}/lab-6-grovers-search-with-an-unknown-number-of-solutions`,
      segment: {
        cta: 'lab-6-grovers-search-with-an-unknown-number-of-solutions', location: sectionLabs
      }
    },
    {
      label: 'Lab 7. Quantum Simulation as a Search Algorithm',
      url: `${baseUrl}${pathLabs}/lab-7-quantum-simulation-as-a-search-algorithm`,
      segment: {
        cta: 'lab-7-quantum-simulation-as-a-search-algorithm', location: sectionLabs
      }
    }
  ]
}

type MegaDropdownMenuColumn = MegaDropdownMenuGroup[]
const COLUMN_1: MegaDropdownMenuColumn = [
  PREREQUISITES,
  QUANTUM_STATES_AND_QUBITS,
  MULTIPLE_QUBITS_AND_ENTANGLEMENT,
  GAMES_AND_DEMOS
]

const COLUMN_2: MegaDropdownMenuColumn = [
  QUANTUM_PROTOCOLS_AND_ALGORITHMS,
  INVESTIGATING_Q_HW_USING_MICROWAVE_PULSES
]

const COLUMN_3: MegaDropdownMenuColumn = [
  QUANTUM_ALGORITHMS_FOR_APPS,
  INVESTIGATING_Q_HW_USING_Q_CIRCUITS,
  QUANTUM_COMPUTING_LABS
]

type MegaDropdownMenu = MegaDropdownMenuColumn[]
const TEXTBOOK_DEMO_MEGA_MENU: MegaDropdownMenu = [
  COLUMN_1,
  COLUMN_2,
  COLUMN_3
]

export {
  MegaDropdownMenu,
  MegaDropdownMenuColumn,
  MegaDropdownMenuGroup,
  TEXTBOOK_DEMO_MEGA_MENU
}
