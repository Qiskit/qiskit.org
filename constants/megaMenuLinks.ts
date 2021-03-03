import { NavLink } from '~/constants/menuLinks.ts'

type MegaDropdownMenuGroup = {
  title: NavLink,
  content: NavLink[]
}

const PREREQUISITES: MegaDropdownMenuGroup = {
  title: {
    label: 'Prerequisites',
    url: 'https://qiskit.org/textbook/ch-prerequisites/setting-the-environment.html',
    segment: {
      action: 'textbook-demo > header > mega-dropdown > prerequisites'
    }
  },
  content: [
    {
      label: 'Setting the Environment',
      url: 'https://qiskit.org/textbook/ch-prerequisites/setting-the-environment.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > prerequisites > setting-the-environment'
      }
    },
    {
      label: 'Python and Jupyter Notebooks',
      url: 'https://qiskit.org/textbook/ch-prerequisites/python-and-jupyter-notebooks.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > prerequisites > python-and-jupyter-notebooks'
      }
    }
  ]
}

const QUANTUM_STATES_AND_QUBITS: MegaDropdownMenuGroup = {
  title: {
    label: 'Quantum States and Qubits',
    url: 'https://qiskit.org/textbook/ch-states/introduction.html',
    segment: {
      action: 'textbook-demo > header > mega-dropdown > quantum-states-and-qubits'
    }
  },
  content: [
    {
      label: 'Introduction',
      url: 'https://qiskit.org/textbook/ch-states/introduction.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > quantum-states-and-qubits > introduction'
      }
    },
    {
      label: 'The Atoms of Computation',
      url: 'https://qiskit.org/textbook/ch-prerequisites/the-atoms-of-computation.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > quantum-states-and-qubits > the-atoms-of-computation'
      }
    },
    {
      label: 'Representing Qubit States',
      url: 'https://qiskit.org/textbook/ch-prerequisites/representing-qubit-states.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > quantum-states-and-qubits > representing-qubit-states'
      }
    },
    {
      label: 'Single Qubit Gates',
      url: 'https://qiskit.org/textbook/ch-prerequisites/single-qubit-gates.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > quantum-states-and-qubits > single-qubit-gates'
      }
    },
    {
      label: 'The Case for Quantum',
      url: 'https://qiskit.org/textbook/ch-prerequisites/the-case-for-quantum.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > quantum-states-and-qubits > the-case-for-quantum'
      }
    }
  ]
}

const MULTIPLE_QUBITS_AND_ENTANGLEMENT: MegaDropdownMenuGroup = {
  title: {
    label: 'Multiple Qubits and Entanglement',
    url: 'https://qiskit.org/textbook/ch-gates/introduction.html',
    segment: {
      action: 'textbook-demo > header > mega-dropdown > multiple-qubits-and-entanglement'
    }
  },
  content: [
    {
      label: 'Introduction',
      url: 'https://qiskit.org/textbook/ch-gates/introduction.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > multiple-qubits-and-entanglement > introduction'
      }
    },
    {
      label: 'Multiple Qubits and Entangled States',
      url: 'https://qiskit.org/textbook/ch-gates/multiple-quibits-and-entangled-states.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > multiple-qubits-and-entanglement > states'
      }
    },
    {
      label: 'Phase Kickback',
      url: 'https://qiskit.org/textbook/ch-gates/phase-kickback.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > multiple-qubits-and-entanglement > phase-kickback'
      }
    },
    {
      label: 'More Circuit Identities',
      url: 'https://qiskit.org/textbook/ch-gates/more-circuit-identities.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > multiple-qubits-and-entanglement > more-circuit-identities'
      }
    },
    {
      label: 'Proving Universality',
      url: 'https://qiskit.org/textbook/ch-gates/proving-universality.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > multiple-qubits-and-entanglement > proving-universality'
      }
    },
    {
      label: 'Classical Computation on a Quantum Computer',
      url: 'https://qiskit.org/textbook/ch-gates/oracles.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > multiple-qubits-and-entanglement > classical-computation'
      }
    }
  ]
}

const GAMES_AND_DEMOS: MegaDropdownMenuGroup = {
  title: {
    label: 'Games & Demos',
    url: 'https://qiskit.org/textbook/ch-demos/index.html',
    segment: {
      action: 'textbook-demo > header > mega-dropdown > games-and-demos'
    }
  },
  content: [
    {
      label: 'Hello Qiskit Game',
      url: 'https://qiskit.org/textbook/ch-ex/hello-qiskit.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > games-and-demos > hello-qiskit'
      }
    },
    {
      label: 'Estimating Pi Using Quantum Phase Estimation Algorithm',
      url: 'https://qiskit.org/textbook/ch-demos/piday-code.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > games-and-demos > piday-code'
      }
    },
    {
      label: 'Interactivity Index',
      url: 'https://qiskit.org/textbook/widgets-index.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > games-and-demos > interactivity-index'
      }
    }
  ]
}

const QUANTUM_PROTOCOLS_AND_ALGORITHMS: MegaDropdownMenuGroup = {
  title: {
    label: 'Quantum Protocols and Quantum Algorithms',
    url: 'https://qiskit.org/textbook/ch-algorithms/index.html',
    segment: {
      action: 'textbook-demo > header > mega-dropdown > protocols-and-algorithms'
    }
  },
  content: [
    {
      label: 'Defining Quantum Circuits',
      url: 'https://qiskit.org/textbook/ch-algorithms/defining-quantum-circuits.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > protocols-and-algorithms > defining-quantum-circuits'
      }
    },
    {
      label: 'Deutsch-Jozsa Algorithm',
      url: 'https://qiskit.org/textbook/ch-algorithms/deutsch-jozsa.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > protocols-and-algorithms > deutsch-jozsa'
      }
    },
    {
      label: 'Bernstein-Vazirani Algorithm',
      url: 'https://qiskit.org/textbook/ch-algorithms/bernstein-vazirani.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > protocols-and-algorithms > bernstein-vazirani'
      }
    },
    {
      label: 'Simon’s Algorithm',
      url: 'https://qiskit.org/textbook/ch-algorithms/simon.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > protocols-and-algorithms > simon'
      }
    },
    {
      label: 'Quantum Fourier Transform',
      url: 'https://qiskit.org/textbook/ch-algorithms/quantum-fourier-transform.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > protocols-and-algorithms > quantum-fourier-transform'
      }
    },
    {
      label: 'Quantum Phase Estimation',
      url: 'https://qiskit.org/textbook/ch-algorithms/quantum-phase-estimation.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > protocols-and-algorithms > quantum-phase-estimation'
      }
    },
    {
      label: 'Shor’s Algorithm',
      url: 'https://qiskit.org/textbook/ch-algorithms/shor.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > protocols-and-algorithms > shor'
      }
    },
    {
      label: 'Grover’s Algorithm',
      url: 'https://qiskit.org/textbook/ch-algorithms/grover.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > protocols-and-algorithms > grover'
      }
    },
    {
      label: 'Quantum Counting',
      url: 'https://qiskit.org/textbook/ch-algorithms/quantum-counting.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > protocols-and-algorithms > quantum-counting'
      }
    },
    {
      label: 'Quantum Teleportation',
      url: 'https://qiskit.org/textbook/ch-algorithms/teleportation.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > protocols-and-algorithms > teleportation'
      }
    },
    {
      label: 'Superdense Coding',
      url: 'https://qiskit.org/textbook/ch-algorithms/superdense-coding.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > protocols-and-algorithms > superdense-coding'
      }
    },
    {
      label: 'Quantum Key Distribution',
      url: 'https://qiskit.org/textbook/ch-algorithms/quantum-key-distribution.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > protocols-and-algorithms > quantum-key-distribution'
      }
    }
  ]
}

const INVESTIGATING_Q_HW_USING_MICROWAVE_PULSES : MegaDropdownMenuGroup = {
  title: {
    label: 'Investigating Quantum Hardware Using Microwave Pulses',
    url: 'https://qiskit.org/textbook/ch-quantum-hardware/index-pulses.html',
    segment: {
      action: 'textbook-demo > header > mega-dropdown > pulses'
    }
  },
  content: [
    {
      label: 'Calibrating Qubits with Qiskit Pulse',
      url: 'https://qiskit.org/textbook/ch-quantum-hardware/calibrating-qubits-pulse.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > pulses > calibrating-qubits-pulse'
      }
    },
    {
      label: 'Accessing Higher Energy States',
      url: 'https://qiskit.org/textbook/ch-quantum-hardware/accessing_higher_energy_states.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > pulses > accessing_higher_energy_states'
      }
    },
    {
      label: 'Introduction to Transmon Physics',
      url: 'https://qiskit.org/textbook/ch-quantum-hardware/transmon-physics.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > pulses > transmon-physics'
      }
    },
    {
      label: 'Circuit Quantum Electrodynamics',
      url: 'https://qiskit.org/textbook/ch-quantum-hardware/cQED-JC-SW.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > pulses > electrodynamics'
      }
    },
    {
      label: 'Exploring the Jaynes-Cummings Hamiltonian with Qiskit Pulse',
      url: 'https://qiskit.org/textbook/ch-quantum-hardware/Jaynes-Cummings-model.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > pulses > jaynes-cummings-model'
      }
    },
    {
      label: 'Measuring the Qubit ac-Stark Shift',
      url: 'https://qiskit.org/textbook/ch-quantum-hardware/ac-Stark-shift.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > pulses > ac-stark-shift'
      }
    },
    {
      label: 'Hamiltonian Tomography',
      url: 'https://qiskit.org/textbook/ch-quantum-hardware/hamiltonian-tomography.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > pulses > hamiltonian-tomography'
      }
    }
  ]
}

const QUANTUM_ALGORITHMS_FOR_APPS : MegaDropdownMenuGroup = {
  title: {
    label: 'Quantum Algorithms for Applications',
    url: 'https://qiskit.org/textbook/ch-applications/algs_for_apps_index.html',
    segment: {
      action: 'textbook-demo > header > mega-dropdown > apps'
    }
  },
  content: [
    {
      label: 'Applied Quantum Algorithms',
      url: 'https://qiskit.org/textbook/ch-applications/apps_index.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > apps > applied-quantum-algorithms'
      }
    },
    {
      label: 'Solving Linear Systems of Equations using HHL',
      url: 'https://qiskit.org/textbook/ch-applications/hhl_tutorial.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > apps > hhl_tutorial'
      }
    },
    {
      label: 'Simulating Molecules using VQE',
      url: 'https://qiskit.org/textbook/ch-applications/vqe-molecules.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > apps > vqe-molecules'
      }
    },
    {
      label: 'Solving combinatorial optimization problems using QAOA',
      url: 'https://qiskit.org/textbook/ch-applications/qaoa.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > apps > qaoa'
      }
    },
    {
      label: 'Solving Satisfiability Problems using Grover’s Algorithm',
      url: 'https://qiskit.org/textbook/ch-applications/satisfiability-grover.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > apps > satisfiability-grover'
      }
    },
    {
      label: 'Hybrid quantum-classical Neural Networks with PyTorch and Qiskit',
      url: 'https://qiskit.org/textbook/ch-machine-learning/machine-learning-qiskit-pytorch.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > apps > machine-learning-qiskit-pytorch'
      }
    },
    {
      label: 'Implementations of Recent Quantum Algorithms',
      url: 'https://qiskit.org/textbook/ch-applications/imp_index.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > apps > implementations'
      }
    },
    {
      label: 'Variational Quantum Linear Solver',
      url: 'https://qiskit.org/textbook/ch-paper-implementations/vqls.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > apps > vqls'
      }
    },
    {
      label: 'Quantum Image Processing - FRQI and NEQR Image Representations',
      url: 'https://qiskit.org/textbook/ch-applications/image-processing-frqi-neqr.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > apps > image-processing-frqi-neqr'
      }
    }
  ]
}

const INVESTIGATING_Q_HW_USING_Q_CIRCUITS : MegaDropdownMenuGroup = {
  title: {
    label: 'Investigating Quantum Hardware Using Quantum Circuits',
    url: 'https://qiskit.org/textbook/ch-quantum-hardware/index-circuits.html',
    segment: {
      action: 'textbook-demo > header > mega-dropdown > circuits'
    }
  },
  content: [
    {
      label: 'Introduction to Quantum Error Correction using Repetition Codes',
      url: 'https://qiskit.org/textbook/ch-quantum-hardware/error-correction-repetition-code.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > circuits > error-correction-repetition-code'
      }
    },
    {
      label: 'Measurement Error Mitigation',
      url: 'https://qiskit.org/textbook/ch-quantum-hardware/measurement-error-mitigation.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > circuits > measurement-error-mitigation'
      }
    },
    {
      label: 'Randomized Benchmarking',
      url: 'https://qiskit.org/textbook/ch-quantum-hardware/randomized-benchmarking.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > circuits > randomized-benchmarking'
      }
    },
    {
      label: 'Measuring Quantum Volume',
      url: 'https://qiskit.org/textbook/ch-quantum-hardware/measuring-quantum-volume.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > circuits > measuring-quantum-volume'
      }
    }
  ]
}

const QUANTUM_COMPUTING_LABS : MegaDropdownMenuGroup = {
  title: {
    label: 'Quantum Computing Labs',
    url: 'https://qiskit.org/textbook/ch-labs/index.html',
    segment: {
      action: 'textbook-demo > header > mega-dropdown > labs'
    }
  },
  content: [
    {
      label: 'Lab 1. Quantum Circuits',
      url: 'https://qiskit.org/textbook/ch-labs/Lab01_QuantumCircuits.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > labs > quantum-circuits'
      }
    },
    {
      label: 'Lab 2. Quantum Measurement',
      url: 'https://qiskit.org/textbook/ch-labs/Lab02_QuantumMeasurement.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > labs > quantum-measurement'
      }
    },
    {
      label: 'Lab 3. Accuracy of Quantum Phase Estimation',
      url: 'https://qiskit.org/textbook/ch-labs/Lab03_AccuracyQPE.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > labs > accuracy-qpe'
      }
    },
    {
      label: 'Lab 4. Iterative Quantum Phase Estimation',
      url: 'https://qiskit.org/textbook/ch-labs/Lab04_IterativePhaseEstimation.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > labs > iterative-phase-estimation'
      }
    },
    {
      label: 'Lab 5. Scalable Shor’s Algorithm',
      url: 'https://qiskit.org/textbook/ch-labs/Lab05_Scalable_Shor_Algorithm.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > labs > scalable-shor'
      }
    },
    {
      label: 'Lab 6. Grover’s search with an unknown number of solutions',
      url: 'https://qiskit.org/textbook/ch-labs/Lab06_Grover_search_with_an_unknown_number_of_solutions.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > labs > grover-search'
      }
    },
    {
      label: 'Lab 7. Quantum Simulation as a Search Algorithm',
      url: 'https://qiskit.org/textbook/ch-labs/Lab07_QuantumSimulationSearchAlgorithm.html',
      segment: {
        action: 'textbook-demo > header > mega-dropdown > labs > quantum-simulation-search-algorithm'
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
  TEXTBOOK_DEMO_MEGA_MENU
}
