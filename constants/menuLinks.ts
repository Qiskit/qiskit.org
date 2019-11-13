type NavLink = {
  label: string
  url: string
}

type LabeledLinks = {
  [key: string]: NavLink
}

type QiskitElements = {
  terra: NavLink,
  aer: NavLink,
  aqua: NavLink,
  ignis: NavLink,
  ibmQAccount: NavLink
}

const QISKIT_URL: string = 'https://qiskit.org'
const QISKIT_ELEMENTS: QiskitElements = {
  terra: {
    label: 'Terra',
    url: `${QISKIT_URL}/terra`
  },
  aer: {
    label: 'Aer',
    url: `${QISKIT_URL}/aer`
  },
  aqua: {
    label: 'Aqua',
    url: `${QISKIT_URL}/aqua`
  },
  ignis: {
    label: 'Ignis',
    url: `${QISKIT_URL}/ignis`
  },
  ibmQAccount: {
    label: 'IBM Q Account',
    url: `${QISKIT_URL}/ibmqaccount`
  }
}

const ORDERED_QISKIT_ELEMENTS: Array<NavLink> = [
  QISKIT_ELEMENTS.terra,
  QISKIT_ELEMENTS.aer,
  QISKIT_ELEMENTS.aqua,
  QISKIT_ELEMENTS.ignis,
  QISKIT_ELEMENTS.ibmQAccount
]

const SOCIAL_MEDIA: LabeledLinks = {
  github: {
    label: 'GitHub',
    url: 'https://github.com/Qiskit'
  },
  slack: {
    label: 'Slack',
    url: 'https://qiskit.slack.com/'
  },
  twitter: {
    label: 'Twitter',
    url: 'https://twitter.com/Qiskit'
  },
  medium: {
    label: 'Medium',
    url: 'https://medium.com/Qiskit'
  },
  youtube: {
    label: 'YouTube',
    url: 'https://www.youtube.com/Qiskit'
  },
  stack: {
    label: 'Stack Exchange',
    url: 'https://quantumcomputing.stackexchange.com/questions/tagged/qiskit'
  }
}

const ORDERED_SOCIAL_MEDIA: Array<NavLink> = [
  SOCIAL_MEDIA.github,
  SOCIAL_MEDIA.slack,
  SOCIAL_MEDIA.twitter,
  SOCIAL_MEDIA.medium,
  SOCIAL_MEDIA.youtube,
  SOCIAL_MEDIA.stack
]

const COMMUNITY_SUB_LINKS: LabeledLinks = {
  education: {
    label: 'Education',
    url: '/education'
  },
  advocates: {
    label: 'Advocates',
    url: '/advocates'
  },
  experiments: {
    label: 'Experiments',
    url: '/experiments'
  }
}

const ORDERED_COMMUNITY_SUB_LINKS: Array<NavLink> = [
  COMMUNITY_SUB_LINKS.education,
  COMMUNITY_SUB_LINKS.advocates,
  COMMUNITY_SUB_LINKS.experiments
]

export {
  QISKIT_URL,
  ORDERED_QISKIT_ELEMENTS,
  ORDERED_SOCIAL_MEDIA,
  ORDERED_COMMUNITY_SUB_LINKS,
  NavLink
}
