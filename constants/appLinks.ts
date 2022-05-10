// TODO: Refactor central links definitions: https://github.com/Qiskit/qiskit.org/issues/1566

import { CtaClickedEventProp } from '~/constants/segment'

/**
 * Represent a general link use on the site
 */
interface GeneralLink {
  /** The visible name of the link */
  label: string
  /** Where we want to go */
  url: string
  segment?: CtaClickedEventProp
  /** Text shown when leaving the cursor on the link */
  title?: string,
}

const EVENT_REQUEST_LINK: GeneralLink = {
  url: 'https://airtable.com/shrRP0Td8TN4ttlFx',
  label: 'Request an event'
}

const seminarSeriesPlaylistUrl = 'https://www.youtube.com/playlist?list=PLOFEBzvs-Vvr0uEoGFo08n4-WrM_8fft2'

const SEMINAR_SERIES_ALL_EPISODES_CTA: GeneralLink = {
  url: seminarSeriesPlaylistUrl,
  label: 'Go to YouTube playlist',
  segment: {
    cta: 'youtube-playlist',
    location: 'header'
  }
}

const SEMINAR_SERIES_FULL_ARCHIVE_CTA: GeneralLink = {
  url: seminarSeriesPlaylistUrl,
  label: 'Explore Full Seminar Archive',
  segment: {
    cta: 'youtube-playlist',
    location: 'past-events-section'
  }
}

const TEXTBOOK_BETA_START_LEARNING: GeneralLink = {
  url: '/textbook-beta/course/introduction-course',
  label: 'Start learning',
  segment: {
    cta: 'start-learning',
    location: 'header'
  }
}

enum StartLearningUrl {
  Introduction = 'https://learn.qiskit.org/course/introduction',
  QML = 'https://learn.qiskit.org/course/machine-learning',
  SummerSchool2020 = 'https://learn.qiskit.org/summer-school/2020/',
  SummerSchool2021 = 'https://learn.qiskit.org/summer-school/2021/'
}

enum PrerequisitesUrl {
  SettingUp = 'https://learn.qiskit.org/course/ch-prerequisites/environment-setup-guide-to-work-with-qiskit-textbook',
  Introduction = 'https://learn.qiskit.org/course/ch-prerequisites/introduction-to-python-and-jupyter-notebooks'
}

enum QuantumStatesAndQubitsUrl {
  Introduction = 'https://learn.qiskit.org/course/ch-states/introduction',
  AtomsOfComputation = 'https://learn.qiskit.org/course/ch-states/the-atoms-of-computation',
  RepresentingQubitStates = 'https://learn.qiskit.org/course/ch-states/representing-qubit-states',
  SingleQubitGates = 'https://learn.qiskit.org/course/ch-states/single-qubit-gates',
  CaseForQuantum = 'https://learn.qiskit.org/course/ch-states/the-case-for-quantum-computers'
}

enum QuantumProtocolsAndQuantumAlgorithmsUrl {
  DefiningQuantumCircuits = 'https://learn.qiskit.org/course/ch-algorithms/quantum-circuits',
  DeutschJozsaAlgorithm = 'https://learn.qiskit.org/course/ch-algorithms/deutsch-jozsa-algorithm',
  BernsteinVaziraniAlgorithm = 'https://learn.qiskit.org/course/ch-algorithms/bernstein-vazirani-algorithm',
  SimonsAlgorithm = 'https://learn.qiskit.org/course/ch-algorithms/simons-algorithm',
  QuantumFourierTransformation = 'https://learn.qiskit.org/course/ch-algorithms/quantum-fourier-transform',
  QuantumPhaseEstimation = 'https://learn.qiskit.org/course/ch-algorithms/quantum-phase-estimation',
  ShorsAlgorithm = 'https://learn.qiskit.org/course/ch-algorithms/shors-algorithm',
  GroversAlgorithm = 'https://learn.qiskit.org/course/ch-algorithms/grovers-algorithm',
  QuantumCounting = 'https://learn.qiskit.org/course/ch-algorithms/quantum-counting',
  QuantumTeleportation = 'https://learn.qiskit.org/course/ch-algorithms/quantum-teleportation',
  SuperdenseCoding = 'https://learn.qiskit.org/course/ch-algorithms/superdense-coding',
  QuantumKeyDistribution = 'https://learn.qiskit.org/course/ch-algorithms/quantum-key-distribution'
}

const IBM_Q_EXPERIENCE: GeneralLink = {
  url: 'https://quantum-computing.ibm.com/lab',
  label: 'IBM Quantum Lab'
}

export {
  GeneralLink,
  EVENT_REQUEST_LINK,
  SEMINAR_SERIES_ALL_EPISODES_CTA,
  SEMINAR_SERIES_FULL_ARCHIVE_CTA,
  TEXTBOOK_BETA_START_LEARNING,
  StartLearningUrl,
  PrerequisitesUrl,
  QuantumStatesAndQubitsUrl,
  QuantumProtocolsAndQuantumAlgorithmsUrl,
  IBM_Q_EXPERIENCE
}
