import { NavLink } from '~/constants/menuLinks.ts'

type MegaDropdownMenuGroup = {
  title: NavLink,
  content: NavLink[]
}

const PREREQUISITES: MegaDropdownMenuGroup = {
  title: {
    label: 'Prerequisites',
    url: 'https://qiskit.org/textbook/ch-prerequisites/setting-the-environment.html'
  },
  content: [
    {
      label: 'Setting the Environment',
      url: 'https://qiskit.org/textbook/ch-prerequisites/setting-the-environment.html'
    },
    {
      label: 'Python and Jupyter Notebooks',
      url: 'https://qiskit.org/textbook/ch-prerequisites/python-and-jupyter-notebooks.html'
    }
  ]
}

const QUANTUM_STATES_AND_QUBITS: MegaDropdownMenuGroup = {
  title: {
    label: 'Quantum States and Qubits',
    url: 'https://qiskit.org/textbook/ch-states/introduction.html'
  },
  content: [
    {
      label: 'Introduction',
      url: 'https://qiskit.org/textbook/ch-states/introduction.html'
    },
    {
      label: 'The Atoms of Computation',
      url: 'https://qiskit.org/textbook/ch-prerequisites/the-atoms-of-computation.html'
    },
    {
      label: 'Representing Qubit States',
      url: 'https://qiskit.org/textbook/ch-prerequisites/representing-qubit-states.html'
    },
    {
      label: 'Single Qubit Gates',
      url: 'https://qiskit.org/textbook/ch-prerequisites/single-qubit-gates.html'
    },
    {
      label: 'The Case for Quantum',
      url: 'https://qiskit.org/textbook/ch-prerequisites/the-case-for-quantum.html'
    }
  ]
}

const MULTIPLE_QUBITS_AND_ENTANGLEMENT: MegaDropdownMenuGroup = {
  title: {
    label: 'Multiple Qubits and Entanglement',
    url: 'https://qiskit.org/textbook/ch-gates/introduction.html'
  },
  content: [
    {
      label: 'Introduction',
      url: 'https://qiskit.org/textbook/ch-gates/introduction.html'
    },
    {
      label: 'Multiple Qubits and Entangled States',
      url: 'https://qiskit.org/textbook/ch-gates/multiple-quibits-and-entangled-states.html'
    },
    {
      label: 'Phase Kickback',
      url: 'https://qiskit.org/textbook/ch-gates/phase-kickback.html'
    },
    {
      label: 'More Circuit Identities',
      url: 'https://qiskit.org/textbook/ch-gates/more-circuit-identities.html'
    },
    {
      label: 'Proving Universality',
      url: 'https://qiskit.org/textbook/ch-gates/proving-universality.html'
    },
    {
      label: 'Classical Computation on a Quantum Computer',
      url: 'https://qiskit.org/textbook/ch-gates/oracles.html'
    }
  ]
}

const GAMES_AND_DEMOS: MegaDropdownMenuGroup = {
  title: {
    label: 'Games & Demos',
    url: 'https://qiskit.org/textbook/ch-demos/index.html'
  },
  content: [
    {
      label: 'Hello Qiskit Game',
      url: 'https://qiskit.org/textbook/ch-ex/hello-qiskit.html'
    },
    {
      label: 'Estimating Pi Using Quantum Phase Estimation Algorithm',
      url: 'https://qiskit.org/textbook/ch-demos/piday-code.html'
    },
    {
      label: 'Interactivity Index',
      url: 'https://qiskit.org/textbook/widgets-index.html'
    }
  ]
}

const QUANTUM_PROTOCOLS_AND_ALGORITHMS: MegaDropdownMenuGroup = {
  title: {
    label: 'Quantum Protocols and Quantum Algorithms',
    url: 'https://qiskit.org/textbook/ch-algorithms/index.html'
  },
  content: [
    {
      label: 'Defining Quantum Circuits',
      url: 'https://qiskit.org/textbook/ch-algorithms/defining-quantum-circuits.html'
    },
    {
      label: 'Deutsch-Jozsa Algorithm',
      url: 'https://qiskit.org/textbook/ch-algorithms/deutsch-jozsa.html'
    },
    {
      label: 'Bernstein-Vazirani Algorithm',
      url: 'https://qiskit.org/textbook/ch-algorithms/bernstein-vazirani.html'
    },
    {
      label: 'Simon’s Algorithm',
      url: 'https://qiskit.org/textbook/ch-algorithms/simon.html'
    },
    {
      label: 'Quantum Fourier Transform',
      url: 'https://qiskit.org/textbook/ch-algorithms/quantum-fourier-transform.html'
    },
    {
      label: 'Quantum Phase Estimation',
      url: 'https://qiskit.org/textbook/ch-algorithms/quantum-phase-estimation.html'
    },
    {
      label: 'Shor’s Algorithm',
      url: 'https://qiskit.org/textbook/ch-algorithms/shor.html'
    },
    {
      label: 'Grover’s Algorithm',
      url: 'https://qiskit.org/textbook/ch-algorithms/grover.html'
    },
    {
      label: 'Quantum Counting',
      url: 'https://qiskit.org/textbook/ch-algorithms/quantum-counting.html'
    },
    {
      label: 'Quantum Teleportation',
      url: 'https://qiskit.org/textbook/ch-algorithms/teleportation.html'
    },
    {
      label: 'Superdense Coding',
      url: 'https://qiskit.org/textbook/ch-algorithms/superdense-coding.html'
    },
    {
      label: 'Quantum Key Distribution',
      url: 'https://qiskit.org/textbook/ch-algorithms/quantum-key-distribution.html'
    }
  ]
}

const INVESTIGATING_Q_HW_USING_MICROWAVE_PULSES : MegaDropdownMenuGroup = {
  title: {
    label: 'Investigating Quantum Hardware Using Microwave Pulses',
    url: 'https://qiskit.org/textbook/ch-quantum-hardware/index-pulses.html'
  },
  content: [
    {
      label: 'Calibrating Qubits with Qiskit Pulse',
      url: 'https://qiskit.org/textbook/ch-quantum-hardware/calibrating-qubits-pulse.html'
    },
    {
      label: 'Accessing Higher Energy States',
      url: 'https://qiskit.org/textbook/ch-quantum-hardware/accessing_higher_energy_states.html'
    },
    {
      label: 'Introduction to Transmon Physics',
      url: 'https://qiskit.org/textbook/ch-quantum-hardware/transmon-physics.html'
    },
    {
      label: 'Circuit Quantum Electrodynamics',
      url: 'https://qiskit.org/textbook/ch-quantum-hardware/cQED-JC-SW.html'
    },
    {
      label: 'Exploring the Jaynes-Cummings Hamiltonian with Qiskit Pulse',
      url: 'https://qiskit.org/textbook/ch-quantum-hardware/Jaynes-Cummings-model.html'
    },
    {
      label: 'Measuring the Qubit ac-Stark Shift',
      url: 'https://qiskit.org/textbook/ch-quantum-hardware/ac-Stark-shift.html'
    },
    {
      label: 'Hamiltonian Tomography',
      url: 'https://qiskit.org/textbook/ch-quantum-hardware/hamiltonian-tomography.html'
    }
  ]
}

const QUANTUM_ALGORITHMS_FOR_APPS : MegaDropdownMenuGroup = {
  title: {
    label: 'Quantum Algorithms for Applications',
    url: 'https://qiskit.org/textbook/ch-applications/algs_for_apps_index.html'
  },
  content: [
    {
      label: 'Applied Quantum Algorithms',
      url: 'https://qiskit.org/textbook/ch-applications/apps_index.html'
    },
    {
      label: 'Solving Linear Systems of Equations using HHL',
      url: 'https://qiskit.org/textbook/ch-applications/hhl_tutorial.html'
    },
    {
      label: 'Simulating Molecules using VQE',
      url: 'https://qiskit.org/textbook/ch-applications/vqe-molecules.html'
    },
    {
      label: 'Solving combinatorial optimization problems using QAOA',
      url: 'https://qiskit.org/textbook/ch-applications/qaoa.html'
    },
    {
      label: 'Solving Satisfiability Problems using Grover’s Algorithm',
      url: 'https://qiskit.org/textbook/ch-applications/satisfiability-grover.html'
    },
    {
      label: 'Hybrid quantum-classical Neural Networks with PyTorch and Qiskit',
      url: 'https://qiskit.org/textbook/ch-machine-learning/machine-learning-qiskit-pytorch.html'
    },
    {
      label: 'Implementations of Recent Quantum Algorithms',
      url: 'https://qiskit.org/textbook/ch-applications/imp_index.html'
    },
    {
      label: 'Variational Quantum Linear Solver',
      url: 'https://qiskit.org/textbook/ch-paper-implementations/vqls.html'
    },
    {
      label: 'Quantum Image Processing - FRQI and NEQR Image Representations',
      url: 'https://qiskit.org/textbook/ch-applications/image-processing-frqi-neqr.html'
    }
  ]
}

const INVESTIGATING_Q_HW_USING_Q_CIRCUITS : MegaDropdownMenuGroup = {
  title: {
    label: 'Investigating Quantum Hardware Using Quantum Circuits',
    url: 'https://qiskit.org/textbook/ch-quantum-hardware/index-circuits.html'
  },
  content: [
    {
      label: 'Introduction to Quantum Error Correction using Repetition Codes',
      url: 'https://qiskit.org/textbook/ch-quantum-hardware/error-correction-repetition-code.html'
    },
    {
      label: 'Measurement Error Mitigation',
      url: 'https://qiskit.org/textbook/ch-quantum-hardware/measurement-error-mitigation.html'
    },
    {
      label: 'Randomized Benchmarking',
      url: 'https://qiskit.org/textbook/ch-quantum-hardware/randomized-benchmarking.html'
    },
    {
      label: 'Measuring Quantum Volume',
      url: 'https://qiskit.org/textbook/ch-quantum-hardware/measuring-quantum-volume.html'
    }
  ]
}

const QUANTUM_COMPUTING_LABS : MegaDropdownMenuGroup = {
  title: {
    label: 'Quantum Computing Labs',
    url: 'https://qiskit.org/textbook/ch-labs/index.html'
  },
  content: [
    {
      label: 'Lab 1. Quantum Circuits',
      url: 'https://qiskit.org/textbook/ch-labs/Lab01_QuantumCircuits.html'
    },
    {
      label: 'Lab 2. Quantum Measurement',
      url: 'https://qiskit.org/textbook/ch-labs/Lab02_QuantumMeasurement.html'
    },
    {
      label: 'Lab 3. Accuracy of Quantum Phase Estimation',
      url: 'https://qiskit.org/textbook/ch-labs/Lab03_AccuracyQPE.html'
    },
    {
      label: 'Lab 4. Iterative Quantum Phase Estimation',
      url: 'https://qiskit.org/textbook/ch-labs/Lab04_IterativePhaseEstimation.html'
    },
    {
      label: 'Lab 5. Scalable Shor’s Algorithm',
      url: 'https://qiskit.org/textbook/ch-labs/Lab05_Scalable_Shor_Algorithm.html'
    },
    {
      label: 'Lab 6. Grover’s search with an unknown number of solutions',
      url: 'https://qiskit.org/textbook/ch-labs/Lab06_Grover_search_with_an_unknown_number_of_solutions.html'
    },
    {
      label: 'Lab 7. Quantum Simulation as a Search Algorithm',
      url: 'https://qiskit.org/textbook/ch-labs/Lab07_QuantumSimulationSearchAlgorithm.html'
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
