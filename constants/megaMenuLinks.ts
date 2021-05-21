import { NavLink } from '~/constants/menuLinks'

const actionPrefix = 'textbook-demo > header > mega-dropdown'
const sectionPrerequisites = 'prerequisites'
const sectionQuantumStatesAndQubits = 'quantum-states-and-qubits'
const sectionMultipleQubitsAndEntanglement = 'multiple-qubits-and-entanglement'
const sectionGamesAndDemos = 'games-and-demos'
const sectionProtocolsAndAlgorithms = 'protocols-and-algorithms'
const sectionPulses = 'pulses'
const sectionApps = 'apps'
const sectionCircuits = 'circuits'
const sectionLabs = 'labs'

type MegaDropdownMenuGroup = {
  title: NavLink,
  content: NavLink[]
}

const PREREQUISITES: MegaDropdownMenuGroup = {
  title: {
    label: 'Prerequisites',
    url: 'https://qiskit.org/textbook/ch-prerequisites/setting-the-environment.html',
    segment: {
      action: `${actionPrefix} > ${sectionPrerequisites}`
    }
  },
  content: [
    {
      label: 'Setting the Environment',
      url: 'https://qiskit.org/textbook/ch-prerequisites/setting-the-environment.html',
      segment: {
        action: `${actionPrefix} > ${sectionPrerequisites} > setting-the-environment`
      }
    },
    {
      label: 'Python and Jupyter Notebooks',
      url: 'https://qiskit.org/textbook/ch-prerequisites/python-and-jupyter-notebooks.html',
      segment: {
        action: `${actionPrefix} > ${sectionPrerequisites} > python-and-jupyter-notebooks`
      }
    }
  ]
}

const QUANTUM_STATES_AND_QUBITS: MegaDropdownMenuGroup = {
  title: {
    label: 'Quantum States and Qubits',
    url: 'https://qiskit.org/textbook/ch-states/introduction.html',
    segment: {
      action: `${actionPrefix} > ${sectionQuantumStatesAndQubits}`
    }
  },
  content: [
    {
      label: 'Introduction',
      url: 'https://qiskit.org/textbook/ch-states/introduction.html',
      segment: {
        action: `${actionPrefix} > ${sectionQuantumStatesAndQubits} > introduction`
      }
    },
    {
      label: 'The Atoms of Computation',
      url: 'https://qiskit.org/textbook/ch-states/atoms-computation.html',
      segment: {
        action: `${actionPrefix} > ${sectionQuantumStatesAndQubits} > the-atoms-of-computation`
      }
    },
    {
      label: 'Representing Qubit States',
      url: 'https://qiskit.org/textbook/ch-states/representing-qubit-states.html',
      segment: {
        action: `${actionPrefix} > ${sectionQuantumStatesAndQubits} > representing-qubit-states`
      }
    },
    {
      label: 'Single Qubit Gates',
      url: 'https://qiskit.org/textbook/ch-states/single-qubit-gates.html',
      segment: {
        action: `${actionPrefix} > ${sectionQuantumStatesAndQubits} > single-qubit-gates`
      }
    },
    {
      label: 'The Case for Quantum',
      url: 'https://qiskit.org/textbook/ch-states/case-for-quantum.html',
      segment: {
        action: `${actionPrefix} > ${sectionQuantumStatesAndQubits} > the-case-for-quantum`
      }
    }
  ]
}

const MULTIPLE_QUBITS_AND_ENTANGLEMENT: MegaDropdownMenuGroup = {
  title: {
    label: 'Multiple Qubits and Entanglement',
    url: 'https://qiskit.org/textbook/ch-gates/introduction.html',
    segment: {
      action: `${actionPrefix} > ${sectionMultipleQubitsAndEntanglement}`
    }
  },
  content: [
    {
      label: 'Introduction',
      url: 'https://qiskit.org/textbook/ch-gates/introduction.html',
      segment: {
        action: `${actionPrefix} > ${sectionMultipleQubitsAndEntanglement} > introduction`
      }
    },
    {
      label: 'Multiple Qubits and Entangled States',
      url: 'https://qiskit.org/textbook/ch-gates/multiple-qubits-entangled-states.html',
      segment: {
        action: `${actionPrefix} > ${sectionMultipleQubitsAndEntanglement} > states`
      }
    },
    {
      label: 'Phase Kickback',
      url: 'https://qiskit.org/textbook/ch-gates/phase-kickback.html',
      segment: {
        action: `${actionPrefix} > ${sectionMultipleQubitsAndEntanglement} > phase-kickback`
      }
    },
    {
      label: 'More Circuit Identities',
      url: 'https://qiskit.org/textbook/ch-gates/more-circuit-identities.html',
      segment: {
        action: `${actionPrefix} > ${sectionMultipleQubitsAndEntanglement} > more-circuit-identities`
      }
    },
    {
      label: 'Proving Universality',
      url: 'https://qiskit.org/textbook/ch-gates/proving-universality.html',
      segment: {
        action: `${actionPrefix} > ${sectionMultipleQubitsAndEntanglement} > proving-universality`
      }
    },
    {
      label: 'Classical Computation on a Quantum Computer',
      url: 'https://qiskit.org/textbook/ch-gates/oracles.html',
      segment: {
        action: `${actionPrefix} > ${sectionMultipleQubitsAndEntanglement} > classical-computation`
      }
    }
  ]
}

const GAMES_AND_DEMOS: MegaDropdownMenuGroup = {
  title: {
    label: 'Games & Demos',
    url: 'https://qiskit.org/textbook/ch-demos/index.html',
    segment: {
      action: `${actionPrefix} > ${sectionGamesAndDemos}`
    }
  },
  content: [
    {
      label: 'Hello Qiskit Game',
      url: 'https://qiskit.org/textbook/ch-ex/hello-qiskit.html',
      segment: {
        action: `${actionPrefix} > ${sectionGamesAndDemos} > hello-qiskit`
      }
    },
    {
      label: 'Estimating Pi Using Quantum Phase Estimation Algorithm',
      url: 'https://qiskit.org/textbook/ch-demos/piday-code.html',
      segment: {
        action: `${actionPrefix} > ${sectionGamesAndDemos} > piday-code`
      }
    },
    {
      label: 'Interactivity Index',
      url: 'https://qiskit.org/textbook/widgets-index.html',
      segment: {
        action: `${actionPrefix} > ${sectionGamesAndDemos} > interactivity-index`
      }
    }
  ]
}

const QUANTUM_PROTOCOLS_AND_ALGORITHMS: MegaDropdownMenuGroup = {
  title: {
    label: 'Quantum Protocols and Quantum Algorithms',
    url: 'https://qiskit.org/textbook/ch-algorithms/index.html',
    segment: {
      action: `${actionPrefix} > ${sectionProtocolsAndAlgorithms}`
    }
  },
  content: [
    {
      label: 'Defining Quantum Circuits',
      url: 'https://qiskit.org/textbook/ch-algorithms/defining-quantum-circuits.html',
      segment: {
        action: `${actionPrefix} > ${sectionProtocolsAndAlgorithms} > defining-quantum-circuits`
      }
    },
    {
      label: 'Deutsch-Jozsa Algorithm',
      url: 'https://qiskit.org/textbook/ch-algorithms/deutsch-jozsa.html',
      segment: {
        action: `${actionPrefix} > ${sectionProtocolsAndAlgorithms} > deutsch-jozsa`
      }
    },
    {
      label: 'Bernstein-Vazirani Algorithm',
      url: 'https://qiskit.org/textbook/ch-algorithms/bernstein-vazirani.html',
      segment: {
        action: `${actionPrefix} > ${sectionProtocolsAndAlgorithms} > bernstein-vazirani`
      }
    },
    {
      label: 'Simon’s Algorithm',
      url: 'https://qiskit.org/textbook/ch-algorithms/simon.html',
      segment: {
        action: `${actionPrefix} > ${sectionProtocolsAndAlgorithms} > simon`
      }
    },
    {
      label: 'Quantum Fourier Transform',
      url: 'https://qiskit.org/textbook/ch-algorithms/quantum-fourier-transform.html',
      segment: {
        action: `${actionPrefix} > ${sectionProtocolsAndAlgorithms} > quantum-fourier-transform`
      }
    },
    {
      label: 'Quantum Phase Estimation',
      url: 'https://qiskit.org/textbook/ch-algorithms/quantum-phase-estimation.html',
      segment: {
        action: `${actionPrefix} > ${sectionProtocolsAndAlgorithms} > quantum-phase-estimation`
      }
    },
    {
      label: 'Shor’s Algorithm',
      url: 'https://qiskit.org/textbook/ch-algorithms/shor.html',
      segment: {
        action: `${actionPrefix} > ${sectionProtocolsAndAlgorithms} > shor`
      }
    },
    {
      label: 'Grover’s Algorithm',
      url: 'https://qiskit.org/textbook/ch-algorithms/grover.html',
      segment: {
        action: `${actionPrefix} > ${sectionProtocolsAndAlgorithms} > grover`
      }
    },
    {
      label: 'Quantum Counting',
      url: 'https://qiskit.org/textbook/ch-algorithms/quantum-counting.html',
      segment: {
        action: `${actionPrefix} > ${sectionProtocolsAndAlgorithms} > quantum-counting`
      }
    },
    {
      label: 'Quantum Teleportation',
      url: 'https://qiskit.org/textbook/ch-algorithms/teleportation.html',
      segment: {
        action: `${actionPrefix} > ${sectionProtocolsAndAlgorithms} > teleportation`
      }
    },
    {
      label: 'Superdense Coding',
      url: 'https://qiskit.org/textbook/ch-algorithms/superdense-coding.html',
      segment: {
        action: `${actionPrefix} > ${sectionProtocolsAndAlgorithms} > superdense-coding`
      }
    },
    {
      label: 'Quantum Key Distribution',
      url: 'https://qiskit.org/textbook/ch-algorithms/quantum-key-distribution.html',
      segment: {
        action: `${actionPrefix} > ${sectionProtocolsAndAlgorithms} > quantum-key-distribution`
      }
    }
  ]
}

const INVESTIGATING_Q_HW_USING_MICROWAVE_PULSES : MegaDropdownMenuGroup = {
  title: {
    label: 'Investigating Quantum Hardware Using Microwave Pulses',
    url: 'https://qiskit.org/textbook/ch-quantum-hardware/index-pulses.html',
    segment: {
      action: `${actionPrefix} > ${sectionPulses}`
    }
  },
  content: [
    {
      label: 'Calibrating Qubits with Qiskit Pulse',
      url: 'https://qiskit.org/textbook/ch-quantum-hardware/calibrating-qubits-pulse.html',
      segment: {
        action: `${actionPrefix} > ${sectionPulses} > calibrating-qubits-pulse`
      }
    },
    {
      label: 'Accessing Higher Energy States',
      url: 'https://qiskit.org/textbook/ch-quantum-hardware/accessing_higher_energy_states.html',
      segment: {
        action: `${actionPrefix} > ${sectionPulses} > accessing_higher_energy_states`
      }
    },
    {
      label: 'Introduction to Transmon Physics',
      url: 'https://qiskit.org/textbook/ch-quantum-hardware/transmon-physics.html',
      segment: {
        action: `${actionPrefix} > ${sectionPulses} > transmon-physics`
      }
    },
    {
      label: 'Circuit Quantum Electrodynamics',
      url: 'https://qiskit.org/textbook/ch-quantum-hardware/cQED-JC-SW.html',
      segment: {
        action: `${actionPrefix} > ${sectionPulses} > electrodynamics`
      }
    },
    {
      label: 'Exploring the Jaynes-Cummings Hamiltonian with Qiskit Pulse',
      url: 'https://qiskit.org/textbook/ch-quantum-hardware/Jaynes-Cummings-model.html',
      segment: {
        action: `${actionPrefix} > ${sectionPulses} > jaynes-cummings-model`
      }
    },
    {
      label: 'Measuring the Qubit ac-Stark Shift',
      url: 'https://qiskit.org/textbook/ch-quantum-hardware/ac-Stark-shift.html',
      segment: {
        action: `${actionPrefix} > ${sectionPulses} > ac-stark-shift`
      }
    },
    {
      label: 'Hamiltonian Tomography',
      url: 'https://qiskit.org/textbook/ch-quantum-hardware/hamiltonian-tomography.html',
      segment: {
        action: `${actionPrefix} > ${sectionPulses} > hamiltonian-tomography`
      }
    }
  ]
}

const QUANTUM_ALGORITHMS_FOR_APPS : MegaDropdownMenuGroup = {
  title: {
    label: 'Quantum Algorithms for Applications',
    url: 'https://qiskit.org/textbook/ch-applications/algs_for_apps_index.html',
    segment: {
      action: `${actionPrefix} > ${sectionApps}`
    }
  },
  content: [
    {
      label: 'Applied Quantum Algorithms',
      url: 'https://qiskit.org/textbook/ch-applications/apps_index.html',
      segment: {
        action: `${actionPrefix} > ${sectionApps} > applied-quantum-algorithms`
      }
    },
    {
      label: 'Solving Linear Systems of Equations using HHL',
      url: 'https://qiskit.org/textbook/ch-applications/hhl_tutorial.html',
      segment: {
        action: `${actionPrefix} > ${sectionApps} > hhl_tutorial`
      }
    },
    {
      label: 'Simulating Molecules using VQE',
      url: 'https://qiskit.org/textbook/ch-applications/vqe-molecules.html',
      segment: {
        action: `${actionPrefix} > ${sectionApps} > vqe-molecules`
      }
    },
    {
      label: 'Solving combinatorial optimization problems using QAOA',
      url: 'https://qiskit.org/textbook/ch-applications/qaoa.html',
      segment: {
        action: `${actionPrefix} > ${sectionApps} > qaoa`
      }
    },
    {
      label: 'Solving Satisfiability Problems using Grover’s Algorithm',
      url: 'https://qiskit.org/textbook/ch-applications/satisfiability-grover.html',
      segment: {
        action: `${actionPrefix} > ${sectionApps} > satisfiability-grover`
      }
    },
    {
      label: 'Hybrid quantum-classical Neural Networks with PyTorch and Qiskit',
      url: 'https://qiskit.org/textbook/ch-machine-learning/machine-learning-qiskit-pytorch.html',
      segment: {
        action: `${actionPrefix} > ${sectionApps} > machine-learning-qiskit-pytorch`
      }
    },
    {
      label: 'Implementations of Recent Quantum Algorithms',
      url: 'https://qiskit.org/textbook/ch-applications/imp_index.html',
      segment: {
        action: `${actionPrefix} > ${sectionApps} > implementations`
      }
    },
    {
      label: 'Variational Quantum Linear Solver',
      url: 'https://qiskit.org/textbook/ch-paper-implementations/vqls.html',
      segment: {
        action: `${actionPrefix} > ${sectionApps} > vqls`
      }
    },
    {
      label: 'Quantum Image Processing - FRQI and NEQR Image Representations',
      url: 'https://qiskit.org/textbook/ch-applications/image-processing-frqi-neqr.html',
      segment: {
        action: `${actionPrefix} > ${sectionApps} > image-processing-frqi-neqr`
      }
    }
  ]
}

const INVESTIGATING_Q_HW_USING_Q_CIRCUITS : MegaDropdownMenuGroup = {
  title: {
    label: 'Investigating Quantum Hardware Using Quantum Circuits',
    url: 'https://qiskit.org/textbook/ch-quantum-hardware/index-circuits.html',
    segment: {
      action: `${actionPrefix} > ${sectionCircuits}`
    }
  },
  content: [
    {
      label: 'Introduction to Quantum Error Correction using Repetition Codes',
      url: 'https://qiskit.org/textbook/ch-quantum-hardware/error-correction-repetition-code.html',
      segment: {
        action: `${actionPrefix} > ${sectionCircuits} > error-correction-repetition-code`
      }
    },
    {
      label: 'Measurement Error Mitigation',
      url: 'https://qiskit.org/textbook/ch-quantum-hardware/measurement-error-mitigation.html',
      segment: {
        action: `${actionPrefix} > ${sectionCircuits} > measurement-error-mitigation`
      }
    },
    {
      label: 'Randomized Benchmarking',
      url: 'https://qiskit.org/textbook/ch-quantum-hardware/randomized-benchmarking.html',
      segment: {
        action: `${actionPrefix} > ${sectionCircuits} > randomized-benchmarking`
      }
    },
    {
      label: 'Measuring Quantum Volume',
      url: 'https://platypus.qiskit.org/course/quantum-hardware/measuring-quantum-volume',
      segment: {
        action: `${actionPrefix} > ${sectionCircuits} > measuring-quantum-volume`
      }
    }
  ]
}

const QUANTUM_COMPUTING_LABS : MegaDropdownMenuGroup = {
  title: {
    label: 'Quantum Computing Labs',
    url: 'https://qiskit.org/textbook/ch-labs/index.html',
    segment: {
      action: `${actionPrefix} > ${sectionLabs}`
    }
  },
  content: [
    {
      label: 'Lab 1. Quantum Circuits',
      url: 'https://qiskit.org/textbook/ch-labs/Lab01_QuantumCircuits.html',
      segment: {
        action: `${actionPrefix} > ${sectionLabs} > quantum-circuits`
      }
    },
    {
      label: 'Lab 2. Quantum Measurement',
      url: 'https://qiskit.org/textbook/ch-labs/Lab02_QuantumMeasurement.html',
      segment: {
        action: `${actionPrefix} > ${sectionLabs} > quantum-measurement`
      }
    },
    {
      label: 'Lab 3. Accuracy of Quantum Phase Estimation',
      url: 'https://qiskit.org/textbook/ch-labs/Lab03_AccuracyQPE.html',
      segment: {
        action: `${actionPrefix} > ${sectionLabs} > accuracy-qpe`
      }
    },
    {
      label: 'Lab 4. Iterative Quantum Phase Estimation',
      url: 'https://qiskit.org/textbook/ch-labs/Lab04_IterativePhaseEstimation.html',
      segment: {
        action: `${actionPrefix} > ${sectionLabs} > iterative-phase-estimation`
      }
    },
    {
      label: 'Lab 5. Scalable Shor’s Algorithm',
      url: 'https://qiskit.org/textbook/ch-labs/Lab05_Scalable_Shor_Algorithm.html',
      segment: {
        action: `${actionPrefix} > ${sectionLabs} > scalable-shor`
      }
    },
    {
      label: 'Lab 6. Grover’s search with an unknown number of solutions',
      url: 'https://qiskit.org/textbook/ch-labs/Lab06_Grover_search_with_an_unknown_number_of_solutions.html',
      segment: {
        action: `${actionPrefix} > ${sectionLabs} > grover-search`
      }
    },
    {
      label: 'Lab 7. Quantum Simulation as a Search Algorithm',
      url: 'https://qiskit.org/textbook/ch-labs/Lab07_QuantumSimulationSearchAlgorithm.html',
      segment: {
        action: `${actionPrefix} > ${sectionLabs} > quantum-simulation-search-algorithm`
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
