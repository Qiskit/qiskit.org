type SegmentData = {
  action: string
}

/**
 * Represent a navigation link for the menus of the site
 */
interface MegaMenuLink {
  /** The visible name of the link */
  label: string
  /** Where we want to go */
  segment?: SegmentData
  /** Only for <a> links. Use `_blank` to open the link in a new tab */
  target?: string
  /** Only for <a> links. Specifies the relationship between the current document
   *  and the linked document. Possible values: `nofollow`, `noreferrer`, `noopener`,
   *  `me` or a combination of them
   */
  rel?: string
}

type Links = MegaMenuLink

type LinksList = {
  links: Links[]
}

type Column = LinksList[]

const MEGA_MENU_LINKS_COLUMNS: Column[] = [
  // column 1
  [
    {
      links: [
        {
          label: 'Prequisites',
          target: '/textbook/ch-prerequisites/setting-the-environment.html'
        },
        {
          label: 'Setting the Environment',
          target: '/textbook/ch-prerequisites/setting-the-environment.html'
        },
        {
          label: 'Python and Jupyter Notebooks',
          target: '/textbook/ch-prerequisites/python-and-jupyter-notebooks.html'
        }
      ]
    },
    {
      links: [
        {
          label: 'Quantum States and Qubits',
          target: '/textbook/ch-states/introduction.html'
        },
        {
          label: 'Introduction',
          target: '/textbook/ch-states/introduction.html'
        },
        {
          label: 'The Atoms of Computation',
          target: '/textbook/ch-prerequisites/the-atoms-of-computation.html'
        },
        {
          label: 'Representing Qubit States',
          target: '/textbook/ch-prerequisites/representing-qubit-states.html'
        },
        {
          label: 'Single Qubit Gates',
          target: '/textbook/ch-prerequisites/single-qubit-gates.html'
        },
        {
          label: 'The Case for Quantum',
          target: '/textbook/ch-prerequisites/the-case-for-quantum.html'
        }
      ]
    },
    {
      links: [
        {
          label: 'Multiple Qubits and Entanglement',
          target: '/textbook/ch-gates/introduction.html'
        },
        {
          label: 'Introduction',
          target: '/textbook/ch-gates/introduction.html'
        },
        {
          label: 'Multiple Qubits and Entangled States',
          target: '/textbook/ch-gates/multiple-quibits-and-entangled-states.html'
        },
        {
          label: 'Phase Kickback',
          target: '/textbook/ch-gates/phase-kickback.html'
        },
        {
          label: 'More Circuit Identities',
          target: '/textbook/ch-gates/more-circuit-identities.html'
        },
        {
          label: 'Proving Universality',
          target: '/textbook/ch-gates/proving-universality.html'
        },
        {
          label: 'Classical Computation on a Quantum Computer',
          target: '/textbook/ch-gates/oracles.html'
        }
      ]
    },
    {
      links: [
        {
          label: 'Games & Demos',
          target: '/textbook/ch-demos/index.html'
        },
        {
          label: 'Hello Qiskit Game',
          target: '/textbook/ch-ex/hello-qiskit.html'
        },
        {
          label: 'Estimating Pi Using Quantum Phase Estimation Algorithm',
          target: '/textbook/ch-demos/piday-code.html'
        },
        {
          label: 'Interactivity Index',
          target: '/textbook/widgets-index.html'
        }
      ]
    }
  ],
  // column 2
  [
    {
      links: [
        {
          label: 'Quantum Protocols and Quantum Algorithms',
          target: '/textbook/ch-algorithms/index.html'
        },
        {
          label: 'Defining Quantum Circuits',
          target: '/textbook/ch-algorithms/defining-quantum-circuits.html'
        },
        {
          label: 'Deutsch-Jozsa Algorithm',
          target: '/textbook/ch-algorithms/deutsch-jozsa.html'
        },
        {
          label: 'Bernstein-Vazirani Algorithm',
          target: '/textbook/ch-algorithms/bernstein-vazirani.html'
        },
        {
          label: 'Simon’s Algorithm',
          target: '/textbook/ch-algorithms/simon.html'
        },
        {
          label: 'Quantum Fourier Transform',
          target: '/textbook/ch-algorithms/quantum-fourier-transform.html'
        },
        {
          label: 'Quantum Phase Estimation',
          target: '/textbook/ch-algorithms/quantum-phase-estimation.html'
        },
        {
          label: 'Shor’s Algorithm',
          target: '/textbook/ch-algorithms/shor.html'
        },
        {
          label: 'Grover’s Algorithm',
          target: '/textbook/ch-algorithms/grover.html'
        },
        {
          label: 'Quantum Counting',
          target: '/textbook/ch-algorithms/quantum-counting.html'
        },
        {
          label: 'Quantum Teleportation',
          target: '/textbook/ch-algorithms/teleportation.html'
        },
        {
          label: 'Superdense Coding',
          target: '/textbook/ch-algorithms/superdense-coding.html'
        },
        {
          label: 'Quantum Key Distribution',
          target: '/textbook/ch-algorithms/quantum-key-distribution.html'
        }
      ]
    },
    {
      links: [
        {
          label: 'Investigating Quantum Hardware Using Microwave Pulses',
          target: '/textbook/ch-quantum-hardware/index-pulses.html'
        },
        {
          label: 'Calibrating Qubits with Qiskit Pulse',
          target: '/textbook/ch-quantum-hardware/calibrating-qubits-pulse.html'
        },
        {
          label: 'Accessing Higher Energy States',
          target: '/textbook/ch-quantum-hardware/accessing_higher_energy_states.html'
        },
        {
          label: 'Introduction to Transmon Physics',
          target: '/textbook/ch-quantum-hardware/transmon-physics.html'
        },
        {
          label: 'Circuit Quantum Electrodynamics',
          target: '/textbook/ch-quantum-hardware/cQED-JC-SW.html'
        },
        {
          label: 'Exploring the Jaynes-Cummings Hamiltonian with Qiskit Pulse',
          target: '/textbook/ch-quantum-hardware/Jaynes-Cummings-model.html'
        },
        {
          label: 'Measuring the Qubit ac-Stark Shift',
          target: '/textbook/ch-quantum-hardware/ac-Stark-shift.html'
        },
        {
          label: 'Hamiltonian Tomography',
          target: '/textbook/ch-quantum-hardware/hamiltonian-tomography.html'
        }
      ]
    }
  ],
  // column 3
  [
    {
      links: [
        {
          label: 'Quantum Algorithms for Applications',
          target: '/textbook/ch-applications/algs_for_apps_index.html'
        },
        {
          label: 'Applied Quantum Algorithms',
          target: '/textbook/ch-applications/apps_index.html'
        },
        {
          label: 'Solving Linear Systems of Equations using HHL',
          target: '/textbook/ch-applications/hhl_tutorial.html'
        },
        {
          label: 'Simulating Molecules using VQE',
          target: '/textbook/ch-applications/vqe-molecules.html'
        },
        {
          label: 'Solving combinatorial optimization problems using QAOA',
          target: '/textbook/ch-applications/qaoa.html'
        },
        {
          label: 'Solving Satisfiability Problems using Grover’s Algorithm',
          target: '/textbook/ch-applications/satisfiability-grover.html'
        },
        {
          label: 'Hybrid quantum-classical Neural Networks with PyTorch and Qiskit',
          target: '/textbook/ch-machine-learning/machine-learning-qiskit-pytorch.html'
        },
        {
          label: 'Implementations of Recent Quantum Algorithms',
          target: '/textbook/ch-applications/imp_index.html'
        },
        {
          label: 'Variational Quantum Linear Solver',
          target: '/textbook/ch-paper-implementations/vqls.html'
        },
        {
          label: 'Quantum Image Processing - FRQI and NEQR Image Representations',
          target: '/textbook/ch-applications/image-processing-frqi-neqr.html'
        }
      ]
    },
    {
      links: [
        {
          label: 'Investigating Quantum Hardware Using Quantum Circuits',
          target: '/textbook/ch-quantum-hardware/index-circuits.html'
        },
        {
          label: 'Introduction to Quantum Error Correction using Repetition Codes',
          target: '/textbook/ch-quantum-hardware/error-correction-repetition-code.html'
        },
        {
          label: 'Measurement Error Mitigation',
          target: '/textbook/ch-quantum-hardware/measurement-error-mitigation.html'
        },
        {
          label: 'Randomized Benchmarking',
          target: '/textbook/ch-quantum-hardware/randomized-benchmarking.html'
        },
        {
          label: 'Measuring Quantum Volume',
          target: '/textbook/ch-quantum-hardware/measuring-quantum-volume.html'
        }
      ]
    },
    {
      links: [
        {
          label: 'Quantum Computing Labs',
          target: '/textbook/ch-labs/index.html'
        },
        {
          label: 'Lab 1. Quantum Circuits',
          target: '/textbook/ch-labs/Lab01_QuantumCircuits.html'
        },
        {
          label: 'Lab 2. Quantum Measurement',
          target: '/textbook/ch-labs/Lab02_QuantumMeasurement.html'
        },
        {
          label: 'Lab 3. Accuracy of Quantum Phase Estimation',
          target: '/textbook/ch-labs/Lab03_AccuracyQPE.html'
        },
        {
          label: 'Lab 4. Iterative Quantum Phase Estimation',
          target: '/textbook/ch-labs/Lab04_IterativePhaseEstimation.html'
        },
        {
          label: 'Lab 5. Scalable Shor’s Algorithm',
          target: '/textbook/ch-labs/Lab05_Scalable_Shor_Algorithm.html'
        },
        {
          label: 'Lab 6. Grover’s search with an unknown number of solutions',
          target: '/textbook/ch-labs/Lab06_Grover_search_with_an_unknown_number_of_solutions.html'
        },
        {
          label: 'Lab 7. Quantum Simulation as a Search Algorithm',
          target: '/textbook/ch-labs/Lab07_QuantumSimulationSearchAlgorithm.html'
        }
      ]
    }
  ]
]

export {
  MEGA_MENU_LINKS_COLUMNS,
  MegaMenuLink
}
