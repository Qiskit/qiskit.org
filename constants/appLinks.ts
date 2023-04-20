// TODO: Refactor central links definitions: https://github.com/Qiskit/qiskit.org/issues/1566

import { CtaClickedEventProp } from "~/types/segment";

/**
 * Represent a general link use on the site
 */
interface GeneralLink {
  /** The visible name of the link */
  label: string;
  /** Where we want to go */
  url: string;
  segment?: CtaClickedEventProp;
  /** Text shown when leaving the cursor on the link */
  title?: string;
}

const EVENT_REQUEST_LINK: GeneralLink = {
  url: "https://airtable.com/shrRP0Td8TN4ttlFx",
  label: "Request an event",
};

const seminarSeriesPlaylistUrl =
  "https://www.youtube.com/playlist?list=PLOFEBzvs-Vvr0uEoGFo08n4-WrM_8fft2";

const SEMINAR_SERIES_ALL_EPISODES_CTA: GeneralLink = {
  url: seminarSeriesPlaylistUrl,
  label: "Go to YouTube playlist",
  segment: {
    cta: "youtube-playlist",
    location: "header",
  },
};

const SEMINAR_SERIES_FULL_ARCHIVE_CTA: GeneralLink = {
  url: seminarSeriesPlaylistUrl,
  label: "Explore Full Seminar Archive",
  segment: {
    cta: "youtube-playlist",
    location: "past-events-section",
  },
};

const LEARN_START_LEARNING: GeneralLink = {
  url: "/learn/course/introduction-course",
  label: "Start learning",
  segment: {
    cta: "start-learning",
    location: "header",
  },
};

enum StartLearningUrl {
  Introduction = "https://learn.qiskit.org/course/introduction",
  BasicsQuantumInformation = "https://learn.qiskit.org/course/basics",
  AlgorithmDesign = "https://learn.qiskit.org/course/algorithm-design",
  QML = "https://learn.qiskit.org/course/machine-learning",
  SummerSchool2020 = "https://learn.qiskit.org/summer-school/2020/",
  SummerSchool2021 = "https://learn.qiskit.org/summer-school/2021/",
  SummerSchool2022 = "https://learn.qiskit.org/summer-school/2022/",
}

enum PrerequisitesUrl {
  SettingUp = "https://learn.qiskit.org/course/ch-prerequisites/environment-setup-guide-to-work-with-qiskit-textbook",
  Introduction = "https://learn.qiskit.org/course/ch-prerequisites/introduction-to-python-and-jupyter-notebooks",
}

enum QuantumStatesAndQubitsUrl {
  Introduction = "https://learn.qiskit.org/course/ch-states/introduction",
  AtomsOfComputation = "https://learn.qiskit.org/course/ch-states/the-atoms-of-computation",
  RepresentingQubitStates = "https://learn.qiskit.org/course/ch-states/representing-qubit-states",
  SingleQubitGates = "https://learn.qiskit.org/course/ch-states/single-qubit-gates",
  CaseForQuantum = "https://learn.qiskit.org/course/ch-states/the-case-for-quantum-computers",
}

enum MultipleQubitsAndEntanglementUrl {
  Introduction = "https://learn.qiskit.org/course/ch-gates/introduction",
  MultipleQubitsAndEntangledStates = "https://learn.qiskit.org/course/ch-gates/multiple-qubits-and-entangled-states",
  PhaseKickback = "https://learn.qiskit.org/course/ch-gates/phase-kickback",
  BasicCircuitIdentities = "https://learn.qiskit.org/course/ch-gates/basic-circuit-identities",
  ProvingUniversality = "https://learn.qiskit.org/course/ch-gates/proving-universality",
  ClassicalComputationOnAQuantumComputer = "https://learn.qiskit.org/course/ch-gates/classical-computation-on-a-quantum-computer",
}

enum QuantumProtocolsAndQuantumAlgorithmsUrl {
  DefiningQuantumCircuits = "https://learn.qiskit.org/course/ch-algorithms/quantum-circuits",
  DeutschJozsaAlgorithm = "https://learn.qiskit.org/course/ch-algorithms/deutsch-jozsa-algorithm",
  BernsteinVaziraniAlgorithm = "https://learn.qiskit.org/course/ch-algorithms/bernstein-vazirani-algorithm",
  SimonsAlgorithm = "https://learn.qiskit.org/course/ch-algorithms/simons-algorithm",
  QuantumFourierTransformation = "https://learn.qiskit.org/course/ch-algorithms/quantum-fourier-transform",
  QuantumPhaseEstimation = "https://learn.qiskit.org/course/ch-algorithms/quantum-phase-estimation",
  ShorsAlgorithm = "https://learn.qiskit.org/course/ch-algorithms/shors-algorithm",
  GroversAlgorithm = "https://learn.qiskit.org/course/ch-algorithms/grovers-algorithm",
  QuantumCounting = "https://learn.qiskit.org/course/ch-algorithms/quantum-counting",
  QuantumTeleportation = "https://learn.qiskit.org/course/ch-algorithms/quantum-teleportation",
  SuperdenseCoding = "https://learn.qiskit.org/course/ch-algorithms/superdense-coding",
  QuantumKeyDistribution = "https://learn.qiskit.org/course/ch-algorithms/quantum-key-distribution",
  QuantumWalkSearchAlgorithm = "https://learn.qiskit.org/course/ch-algorithms/quantum-walk-search-algorithm",
  HiddenShiftProblem = "https://learn.qiskit.org/course/ch-algorithms/hidden-shift-problem",
}

enum QuantumHardwarePulsesUrl {
  CalibratingQubitsWithQiskitPulse = "https://learn.qiskit.org/course/quantum-hardware-pulses/calibrating-qubits-using-qiskit-pulse",
  AccessingHigherEnergyStates = "https://learn.qiskit.org/course/quantum-hardware-pulses/accessing-higher-energy-states-with-qiskit-pulse",
  IntroductionToTransmonPhysics = "https://learn.qiskit.org/course/quantum-hardware-pulses/introduction-to-transmon-physics",
  CircuitQuantumElectrodynamics = "https://learn.qiskit.org/course/quantum-hardware-pulses/circuit-quantum-electrodynamics",
  ExploringTheJaynesCummingsHamiltonianWithQiskitPulse = "https://learn.qiskit.org/course/quantum-hardware-pulses/exploring-the-jaynes-cummings-hamiltonian-with-qiskit-pulse",
  MeasuringTheQubitacStakShift = "https://learn.qiskit.org/course/quantum-hardware-pulses/measuring-the-qubit-ac-stark-shift",
  HamiltonianTomography = "https://learn.qiskit.org/course/quantum-hardware-pulses/hamiltonian-tomography",
}

enum QuantumAlgorithmsForApplications {
  SolvingLinearSystemsOfEquationsUsingHHL = "https://learn.qiskit.org/course/ch-applications/solving-linear-systems-of-equations-using-hhl-and-its-qiskit-implementation",
  SimulatingMoleculesUsingVQE = "https://learn.qiskit.org/course/ch-applications/simulating-molecules-using-vqe",
  SolvingCombinatorialOptimizationProblemsUsingQaoa = "https://learn.qiskit.org/course/ch-applications/solving-combinatorial-optimization-problems-using-qaoa",
  SolvingSatisfiabilityProblemsUsingGroversAlgorithm = "https://learn.qiskit.org/course/ch-applications/solving-satisfiability-problems-using-grovers-algorithm",
  HybridQuantumClassicalNeuralNetworksWithPytorchAndQiskit = "https://learn.qiskit.org/course/ch-applications/hybrid-quantum-classical-neural-networks-with-pytorch-and-qiskit",
  VariationalQuantumLinearSolver = "https://learn.qiskit.org/course/ch-applications/the-variational-quantum-linear-solver",
  FlexibleRepresentationOfQuantumImages = "https://learn.qiskit.org/course/ch-applications/flexible-representation-of-quantum-images-frqi",
  FacialExpressionRecognition = "https://learn.qiskit.org/course/ch-applications/facial-expression-recognition",
  EdgeDetection = "https://learn.qiskit.org/course/ch-applications/quantum-edge-detection",
  TravellingSalesmanProblem = "https://learn.qiskit.org/course/ch-applications/tsp",
}

enum QuantumHardwareCircuitsUrl {
  Introduction = "https://learn.qiskit.org/course/quantum-hardware/introduction-to-quantum-error-correction-via-the-repetition-code",
  MeasurementErrorMitigation = "https://learn.qiskit.org/course/quantum-hardware/measurement-error-mitigation",
  RandomizedBenchmarking = "https://learn.qiskit.org/course/quantum-hardware/randomized-benchmarking",
  MeasuringQuantumVolume = "https://learn.qiskit.org/course/quantum-hardware/measuring-quantum-volume",
  DensityMatrixAndMixedStates = "https://learn.qiskit.org/course/quantum-hardware/density-matrix",
}

enum GamesAndDemos {
  HelloQiskit = "https://learn.qiskit.org/course/ch-demos/hello-qiskit",
  EstimatingPiUsingQPEA = "https://learn.qiskit.org/course/ch-demos/estimating-pi-using-quantum-phase-estimation-algorithm",
  LocalRealityAndTheChshInequality = "https://learn.qiskit.org/course/ch-demos/local-reality-and-the-chsh-inequality",
  QuantumCoinGame = "https://learn.qiskit.org/course/ch-demos/coin-game",
  VariationalQuantumRegression = "https://learn.qiskit.org/course/ch-demos/variational-quantum-regression",
}

enum LegacyContent {
  Prerequisites = "https://learn.qiskit.org/v1/course/ch-prerequisites/",
  QuantumStatesAndQubits = "https://learn.qiskit.org/v1/course/ch-states/",
  MultipleQubitsAndEntanglement = "https://learn.qiskit.org/v1/course/ch-gates",
  QuantumProtocolsAndQuantumAlgorithms = "https://learn.qiskit.org/v1/course/ch-algorithms/",
  QuantumAlgorithmsForApplications = "https://learn.qiskit.org/v1/course/ch-applications/",
  InvestigatingQuantumHardwareUsingQuantumCircuits = "https://learn.qiskit.org/v1/course/ch-quantum-hardware/",
  InvestigatingQuantumHardwareUsingMicrowavePulses = "https://learn.qiskit.org/v1/course/ch-quantum-hardware/calibrating-qubits-pulse",
  QuantumComputingLabs = "https://learn.qiskit.org/v1/course/ch-labs/",
  Appendix = "https://learn.qiskit.org/v1/course/ch-appendix/",
  GamesAndDemos = "https://learn.qiskit.org/v1/course/ch-demos/",
}

enum QuantumComputingLabs {
  Lab1 = "https://learn.qiskit.org/course/ch-labs/lab-1-quantum-circuits",
  Lab2 = "https://learn.qiskit.org/course/ch-labs/lab-2-single-qubit-gates",
  Lab3 = "https://learn.qiskit.org/course/ch-labs/lab-3-quantum-measurements",
  Lab4 = "https://learn.qiskit.org/course/ch-labs/lab-4-bell-ghz-circuit",
  Lab5 = "https://learn.qiskit.org/course/ch-labs/lab-5-accuracy-of-quantum-phase-estimation",
  Lab6 = "https://learn.qiskit.org/course/ch-labs/lab-6-iterative-phase-estimation-algorithm",
  Lab7 = "https://learn.qiskit.org/course/ch-labs/lab-7-scalable-shors-algorithm",
  Lab8 = "https://learn.qiskit.org/course/ch-labs/lab-8-grovers-search-with-an-unknown-number-of-solutions",
  Lab9 = "https://learn.qiskit.org/course/ch-labs/lab-9-quantum-simulation-as-a-search-algorithm",
  Lab10 = "https://learn.qiskit.org/course/ch-labs/lab-10-quantum-error-correction",
}

const IBM_Q_EXPERIENCE: GeneralLink = {
  url: "https://quantum-computing.ibm.com/lab",
  label: "IBM Quantum Lab",
};

export {
  GeneralLink,
  EVENT_REQUEST_LINK,
  SEMINAR_SERIES_ALL_EPISODES_CTA,
  SEMINAR_SERIES_FULL_ARCHIVE_CTA,
  LEARN_START_LEARNING,
  StartLearningUrl,
  PrerequisitesUrl,
  MultipleQubitsAndEntanglementUrl,
  QuantumStatesAndQubitsUrl,
  QuantumProtocolsAndQuantumAlgorithmsUrl,
  QuantumHardwarePulsesUrl,
  QuantumAlgorithmsForApplications,
  QuantumHardwareCircuitsUrl,
  QuantumComputingLabs,
  GamesAndDemos,
  LegacyContent,
  IBM_Q_EXPERIENCE,
};
