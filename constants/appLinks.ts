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

const START_LEARNING_URL = {
	Introduction: 'https://learn.qiskit.org/course/introduction',
	QML: 'https://learn.qiskit.org/course/machine-learning',
	SummerSchool2020: 'https://learn.qiskit.org/summer-school/2020/',
	SummerSchool2021: 'https://learn.qiskit.org/summer-school/2021/'
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
  START_LEARNING_URL,
  IBM_Q_EXPERIENCE
}
