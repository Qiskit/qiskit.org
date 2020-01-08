type SegmentData = {
  action: string
}

/**
 * Use `target` and `rel` only for <a> links
 */
type NavLink = {
  label: string
  url: string
  segment?: SegmentData,
  target?: string
  rel?: string
}

type LabeledLinks = {
  [key: string]: NavLink
}

type FooterSubsections = {
  title: string,
  elements: Array<NavLink>,
  listType: string
}

type FooterStructure = {
  firstColumn: Array<FooterSubsections>,
  secondColumn: Array<FooterSubsections>,
  thirdColumn: Array<FooterSubsections>
}

type QiskitElements = {
  terra: NavLink,
  aer: NavLink,
  aqua: NavLink,
  ignis: NavLink,
  ibmQAccount: NavLink
}

const QISKIT_ELEMENTS: QiskitElements = {
  terra: {
    label: 'Terra',
    url: '/terra'
  },
  aer: {
    label: 'Aer',
    url: '/aer'
  },
  aqua: {
    label: 'Aqua',
    url: '/aqua'
  },
  ignis: {
    label: 'Ignis',
    url: '/ignis'
  },
  ibmQAccount: {
    label: 'IBM Q Account',
    url: '/ibmqaccount'
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
    url: 'https://github.com/Qiskit',
    target: '_blank',
    rel: 'noopener'
  },
  slack: {
    label: 'Slack',
    url: 'https://qiskit.slack.com/',
    target: '_blank',
    rel: 'noopener'
  },
  twitter: {
    label: 'Twitter',
    url: 'https://twitter.com/Qiskit',
    target: '_blank',
    rel: 'noopener'
  },
  medium: {
    label: 'Medium',
    url: 'https://medium.com/Qiskit',
    target: '_blank',
    rel: 'noopener'
  },
  youtube: {
    label: 'YouTube',
    url: 'https://www.youtube.com/Qiskit',
    target: '_blank',
    rel: 'noopener'
  },
  stack: {
    label: 'Stack Exchange',
    url: 'https://quantumcomputing.stackexchange.com/questions/tagged/qiskit',
    target: '_blank',
    rel: 'noopener'
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

const QISKIT_EDUCATION: LabeledLinks = {
  textbook: {
    label: 'Textbook',
    url: '/textbook'
  },
  youtube: {
    label: 'Coding With Qiskit',
    url: 'https://www.youtube.com/playlist?list=PLOFEBzvs-Vvp2xg9-POLJhQwtVktlYGbY',
    target: '_blank',
    rel: 'noopener'
  },
  hostEvent: {
    label: 'Host an Event',
    url: 'mailto:hello@qiskit.camp',
    target: '_blank',
    rel: 'noopener'
  }
}

const ORDERED_QISKIT_EDUCATION: Array<NavLink> = [
  QISKIT_EDUCATION.textbook,
  QISKIT_EDUCATION.youtube,
  QISKIT_EDUCATION.hostEvent
]

const QISKIT_ADVOCATES: LabeledLinks = {
  advocates: {
    label: 'Become an Advocate',
    url: '/advocates#become-an-advocate'
  }
}

const ORDERED_QISKIT_ADVOCATES: Array<NavLink> = [
  QISKIT_ADVOCATES.advocates
]

const QISKIT_EXPERIMENTS: LabeledLinks = {
  experiments: {
    label: 'Browse the experiments',
    url: '/experiments#browse-the-experiments'
  }
}

const ORDERED_QISKIT_EXPERIMENTS: Array<NavLink> = [
  QISKIT_EXPERIMENTS.experiments
]

const FOOTER: FooterStructure = {
  firstColumn: [
    {
      title:"Qiskit Elements",
      elements: ORDERED_QISKIT_ELEMENTS,
      listType:"NuxtLinkList"
    }
  ],
  secondColumn: [
    {
      title:"Qiskit for Educators",
      elements: ORDERED_QISKIT_EDUCATION,
      listType:"ATagLinkList"
    },
    {
      title:"Qiskit Advocates",
      elements: ORDERED_QISKIT_ADVOCATES,
      listType:"NuxtLinkList"
    },
    {
      title:"Qiskit Experiments",
      elements: ORDERED_QISKIT_EXPERIMENTS,
      listType:"NuxtLinkList"
    }
  ],
  thirdColumn: [
    {
      title:"Social Media",
      elements: ORDERED_SOCIAL_MEDIA,
      listType:"ATagLinkList"
    }
  ]
}

export {
  ORDERED_QISKIT_ELEMENTS,
  ORDERED_SOCIAL_MEDIA,
  ORDERED_COMMUNITY_SUB_LINKS,
  ORDERED_QISKIT_EDUCATION,
  ORDERED_QISKIT_ADVOCATES,
  ORDERED_QISKIT_EXPERIMENTS,
  FOOTER,
  NavLink,
  FooterSubsections
}
