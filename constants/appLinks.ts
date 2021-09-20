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

const textbookBetaIntroductionCourseStartLearningUrl = 'https://learn.qiskit.org/course/introduction'
const summerSchoolCourseStartLearningUrl = 'https://learn.qiskit.org/course/qgss2021/lec1-1'

const IBM_Q_EXPERIENCE: GeneralLink = {
  url: 'https://quantum-computing.ibm.com/lab',
  label: 'IBM Quantum Lab'
}

interface Prerequisite {
  title: string;
  description: string;
  segment: CtaClickedEventProp;
  url: string;
}

const introductionCoursePrerequisites: Prerequisite[] = [
  {
    title: 'Setting Up Your Environment',
    description:
      'This is a comprehensive guide for setting up your environment on your personal computer for working with Qiskit Textbook.',
    segment: {
      cta: 'setting-up-your-environment', location: 'prerequisite-material'
    },
    url:
      'https://learn.qiskit.org/course/ch-prerequisites/environment-setup-guide-to-work-with-qiskit-textbook'
  },
  {
    title: 'Python and Jupyter Notebooks',
    description:
      "Python is a programming language where you don't need to compile. You can just run it line by line...",
    segment: {
      cta: 'python-and-jupyter-notebooks', location: 'prerequisite-material'
    },
    url:
      'https://learn.qiskit.org/course/ch-prerequisites/introduction-to-python-and-jupyter-notebooks'
  }
]

const summerSchool2021Prerequisites: Prerequisite[] = [
  {
    title: 'Introduction to Quantum Computing and Quantum Hardware',
    description:
      'The Qiskit Global Summer School 2020 coursework, lab, and lecture materials are available online.',
    segment: {
      cta: 'intro-qc-qh-21', location: 'related-material'
    },
    url:
      'https://qiskit.org/learn/intro-qc-qh'
  },
  {
    title: 'Python Programming',
    description:
      'Python is a programming language where you don\'t need to compile. You can just run it line by line...',
    segment: {
      cta: 'python-programming', location: 'related-material'
    },
    url:
      'https://learn.qiskit.org/course/ch-prerequisites/introduction-to-python-and-jupyter-notebooks'
  },
  {
    title: 'Linear Algebra',
    description:
      'Linear algebra is the language of quantum computing. Develop a good understanding of the basic mathematical concepts that linear algebra is built upon.',
    segment: {
      cta: 'linear-algebra', location: 'related-material'
    },
    url:
      'https://qiskit.org/textbook/ch-appendix/linear_algebra.html'
  },
  {
    title: 'Probability Theory — Random Variables and Distributions',
    description:
      'Probabilities help us deal with unknowns. Quantum mechanics is an extension of probability theory, so being comfortable with probabilities will make your quantum computing journey easier.',
    segment: {
      cta: 'probability-theory', location: 'related-material'
    },
    url:
      'https://www.khanacademy.org/math/statistics-probability/random-variables-stats-library'
  }
]

export {
  GeneralLink,
  EVENT_REQUEST_LINK,
  SEMINAR_SERIES_ALL_EPISODES_CTA,
  SEMINAR_SERIES_FULL_ARCHIVE_CTA,
  textbookBetaIntroductionCourseStartLearningUrl,
  summerSchoolCourseStartLearningUrl,
  TEXTBOOK_BETA_START_LEARNING,
  IBM_Q_EXPERIENCE,
  introductionCoursePrerequisites,
  summerSchool2021Prerequisites
}
