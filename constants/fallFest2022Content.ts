import { DescriptionCard } from '@/components/ui/AppDescriptionCard.vue'

const header = {
  titleLine1: 'Qiskit Fall Fest 2022:',
  cta: {
    label: 'Learn more!',
    url: 'https://medium.com/qiskit/introducing-the-qiskit-fall-fest-feb8456b557',
    segment: {
      cta: 'learn',
      location: 'header'
    }
  },
  cardSectionHeading: 'About the event:',
  card: {
    image: '/images/events/fall-fest/fall-fest-logo.png',
    title: 'Qiskit Fall Fest 2022',
    description: 'The Qiskit Fall Fest is a collection of quantum computing events each held by a university!',
    location: '',
    time: '',
    to: 'https://medium.com/qiskit/introducing-the-qiskit-fall-fest-feb8456b557',
    ctaLabel: 'Learn more',
    segment: {
      cta: 'qiskit-fall-fest-blog',
      location: 'header'
    }
  }
}

interface eventSchedule {
  startDate: string,
  endDate: string,
  university: string,
  detail: string,
  type: string,
  url: string
}

// TODO: replace URL placeholder w/ event links
const wave1Schedule: eventSchedule[] = [
  {
    university: 'RV PU College',
    startDate: 'October 30, 2022',
    endDate: 'October 31, 2022',
    detail: 'In Person',
    type: 'Workshop Series, Challenge',
    url: ''
  },
  {
    university: 'Yale University',
    startDate: 'October 3, 2022',
    endDate: 'October 15, 2022',
    detail: 'In Person',
    type: 'Workshop Series, Challenge',
    url: '<a href="https://yaleqc.com/categories/events/" target="_blank">Link to event</a>'
  },
  {
    university: 'Purdue University',
    startDate: 'October 3, 2022',
    endDate: 'October 23, 2022',
    detail: 'In Person',
    type: 'Workshop Series, Hackathon',
    url: '<a href="https://github.com/purduequaic/qiskit-fall-fest-22" target="_blank">Link to event</a>'
  },
  {
    university: 'QickStart : A Qiskit Powered Intro to Quantum Computing',
    startDate: 'October 3, 2022',
    endDate: 'October 13, 2022',
    detail: 'In Person',
    type: 'Challenge, Workshop Series',
    url: ''
  },
  {
    university: 'Coimbatore Institute of Technology, India',
    startDate: 'October 6, 2022',
    endDate: 'October 20, 2022',
    detail: 'Online',
    type: 'Hackathon, Workshop Series',
    url: '<a href="https://github.com/CIT-QUANTUM-HACKATHON/CIT-QUANTUM-HACKATHON-2022" target="_blank">Link to event</a>'
  },
  {
    university: 'Start Innovation hub',
    startDate: 'October 8, 2022',
    endDate: 'October 11, 2022',
    detail: 'In Person',
    type: 'Workshop Series, Hackathon',
    url: '<a href="https://twitter.com/Q_affinity" target="_blank">Link to event</a>'
  }
]

const wave2Schedule: eventSchedule[] = [
  {
    university: 'Case Western Reserve University',
    startDate: 'October 10, 2022',
    endDate: 'October 15, 2022',
    detail: 'In Person',
    type: 'Workshop Series, Hackathon',
    url: ''
  },
  {
    university: 'University of Texas at Austin',
    startDate: 'October 10, 2022',
    endDate: 'October 17, 2022',
    detail: 'In Person',
    type: 'Hackathon, Workshop Series',
    url: ''
  },
  {
    university: 'Quantum Fall Fest QColombia',
    startDate: 'October 10, 2022',
    endDate: 'October 18, 2022',
    detail: 'Online',
    type: 'Workshop Series, Hackathon',
    url: '<a href="https://qisk.it/fallfest" target="_blank">Link to event</a>'
  },
  {
    university: 'University of Chicago',
    startDate: 'October 10, 2022',
    endDate: 'October 12, 2022',
    detail: 'In Person',
    type: 'Workshop Series',
    url: ''
  },
  {
    university: 'Fundamentals of Quantum Computing (Thapar University)',
    startDate: 'October 15, 2022',
    endDate: 'October 17, 2022',
    detail: 'In Person',
    type: 'Challenge',
    url: ''
  },
  {
    university: 'Qiskit Fall Fest Mexico-IPN',
    startDate: 'October 17, 2022',
    endDate: 'October 27, 2022',
    detail: 'Online',
    type: 'Hackathon, Challenge, Workshop Series',
    url: '<a href="https://qisk.it/fallfest" target="_blank">Link to event</a>'
  },
  {
    university: 'Qiskit Fall Fest Kolkata Chapter',
    startDate: 'October 17, 2022',
    endDate: 'November 1, 2022',
    detail: 'Online',
    type: 'Hackathon, Workshop Series',
    url: '<a href="https://qisk.it/fallfest" target="_blank">Link to event</a>'
  },
  {
    university: 'Escuela de Computación Cuántica',
    startDate: 'October 17, 2022',
    endDate: 'October 24, 2022',
    detail: 'Online',
    type: 'Hackathon, Challenge, Workshop Series',
    url: '<a href="https://pythonclubforphysicists.notion.site/pythonclubforphysicists/Primera-Escuela-de-Computaci-n-Cu-ntica-af219f239f90418b900cba004e27c789" target="_blank">Link to event</a>'
  }
]

const wave3Schedule: eventSchedule[] = [
  {
    university: 'The Higher National School of Computer Science',
    startDate: 'October 21, 2022',
    endDate: 'October 23, 2022',
    detail: 'In Person',
    type: 'Hackathon, Challenge, Workshop Series',
    url: ''
  },
  {
    university: 'Indian Institute of Technology Roorkee',
    startDate: 'October 28, 2022',
    endDate: 'October 30, 2022',
    detail: 'In Person',
    type: 'Hackathon, Challenge',
    url: '<a href="https://github.com/qcgiitr/iitr-fall-fest-22" target="_blank">Link to event</a>'
  },
  {
    university: 'University of Santiago de Compostela, Spain',
    startDate: 'October 21, 2022',
    endDate: 'October 22, 2022',
    detail: 'In Person',
    type: 'Workshop Series, Challenge',
    url: '<a href="https://github.com/wyqian1027/Qiskit-Fall-Fest-USC-2022" target="_blank">Link to event</a>'
  },
  {
    university: 'Universidad Simón Bolívar',
    startDate: 'October 21, 2022',
    endDate: 'October 30, 2022',
    detail: 'Online',
    type: 'Hackathon, Challenge',
    url: '<a href="https://qisk.it/fallfest" target="_blank">Link to event</a>'
  },
  {
    university: 'Penn State',
    startDate: 'November 5, 2022',
    endDate: 'November 6, 2022',
    detail: 'In Person',
    type: 'Hackathon, Challenge, Workshop Series',
    url: ''
  },
  {
    university: 'Quantum Fall Fest TU Wien',
    startDate: 'November 3, 2022',
    endDate: 'November 4, 2022',
    detail: 'In Person',
    type: 'Workshop Series',
    url: ''
  },
  {
    university: 'Uttar Pradesh',
    startDate: 'October 22, 2022',
    endDate: 'October 25, 2022',
    detail: 'Online',
    type: 'Hackathon, Challenge, Workshop Series',
    url: '<a href="https://qisk.it/fallfest" target="_blank">Link to event</a>'
  },
  {
    university: 'University of Victoria',
    startDate: 'October 22, 2022',
    endDate: 'October 24, 2022',
    detail: 'Hybrid',
    type: 'Workshop Series',
    url: ''
  }
]

const wave4Schedule: eventSchedule[] = [
  {
    university: 'The University of Hong Kong',
    startDate: 'October 25, 2022',
    endDate: 'October 26, 2022',
    detail: 'In Person',
    type: 'Challenge, Workshop Series',
    url: ''
  },
  {
    university: 'Princeton Univeristy',
    startDate: 'October 28, 2022',
    endDate: 'October 31, 2022',
    detail: 'In Person',
    type: 'Challenge',
    url: ''
  },
  {
    university: 'Izmir Institute of Technology',
    startDate: 'October 28, 2022',
    endDate: 'October 31, 2022',
    detail: 'In Person',
    type: 'Hackathon',
    url: ''
  },
  {
    university: 'AUC (American University in Cairo)',
    startDate: 'October 28, 2022',
    endDate: 'October 31, 2022',
    detail: 'In Person',
    type: 'Workshop Series, Hackathon, Challenge',
    url: ''
  },
  {
    university: 'Quest - Qiskit Fall Fest, BITS Goa Chapter',
    startDate: 'November 25, 2022',
    endDate: 'November 28, 2022',
    detail: 'In Person',
    type: 'Workshop Series, Hackathon, Challenge',
    url: ''
  },
  {
    university: 'UCLA',
    startDate: 'October 31, 2022',
    endDate: 'November 10, 2022',
    detail: 'Online',
    type: 'Hackathon',
    url: '<a href="https://github.com/amandajyounes/UCLA_fallfest_2022" target="_blank">Link to event</a>'
  },
  {
    university: 'Univeristy of California, Irvine',
    startDate: 'October 28, 2022',
    endDate: 'October 29, 2022',
    detail: 'In Person',
    type: 'Challenge, Workshop Series',
    url: ''
  }
]

const scheduleToTableData = (slot: eventSchedule) => ([
  {
    styles: 'min-width: 9rem; display: inline-block; font-weight: bold;',
    data: slot.startDate
  },
  {
    styles: 'min-width: 9rem; display: inline-block; font-weight: bold;',
    data: slot.endDate
  },
  {
    styles: 'min-width: 10rem; display: inline-block; padding-top: 8px; padding-bottom: 8px',
    data: slot.university
  },
  {
    styles: 'min-width: 8rem; display: inline-block; padding-top: 8px; padding-bottom: 8px',
    data: slot.detail
  },
  {
    styles: 'min-width: 10rem; display: inline-block; padding-top: 8px; padding-bottom: 8px',
    data: slot.type
  },
  {
    styles: 'min-width: 10rem; display: inline-block; padding-top: 8px; padding-bottom: 8px',
    data: slot.url
  }
])

const agenda = {
  title: 'Schedule of Events',
  subtitle: '*Schedule subject to change',
  weeks: [
    {
      tabName: 'Wave 1',
      tableData: wave1Schedule.map(scheduleToTableData)
    },
    {
      tabName: 'Wave 2',
      tableData: wave2Schedule.map(scheduleToTableData)
    },
    {
      tabName: 'Wave 3',
      tableData: wave3Schedule.map(scheduleToTableData)
    },
    {
      tabName: 'Wave 4',
      tableData: wave4Schedule.map(scheduleToTableData)
    }
  ]
}

interface HelpfulResourcesSection {
  title: string,
  resources: DescriptionCard[]
}

const helpfulResources: HelpfulResourcesSection = {
  title: 'Resources',
  resources: [
    {
      title: 'Let us know if you have any questions!',
      description: "If your questions aren't answered by the FAQ above or our blog post, please use this form to submit your enquiries direct to the team.",
      cta: {
        url: 'http://qisk.it/QGSS2021EnquiryForm',
        label: 'Enquire now',
        segment: {
          cta: 'qgss2021-enquiry-form',
          location: 'helpful-resources'
        }
      }
    },
    {
      title: 'Learn about and install Qiskit',
      description: 'Prepare for the Fall Fest by reviewing the documentation and installing Qiskit.',
      cta: {
        url: 'https://qiskit.org/documentation/install.html',
        label: 'Install here',
        segment: {
          cta: 'qiskit-install',
          location: 'helpful-resources'
        }
      }
    },
    {
      title: 'Qiskit Medium',
      description: "This blog provides a nice overview of Qiskit and its direction as we explore what applications can be done on today's quantum devices.",
      cta: {
        url: 'https://medium.com/qiskit/qiskit-and-its-fundamental-elements-bcd7ead80492',
        label: 'Read the blog',
        segment: {
          cta: 'qiskit-medium',
          location: 'helpful-resources'
        }
      }
    },
    {
      title: 'Code of conduct',
      description: 'Qiskit is dedicated to providing an enjoyable and safe experience for all participants. We have a code of conduct that all events adhere to.',
      cta: {
        url: 'https://github.com/Qiskit/qiskit/blob/master/CODE_OF_CONDUCT.md',
        label: 'See code of conduct',
        segment: {
          cta: 'code-of-conduct',
          location: 'helpful-resources'
        }
      }
    }
  ]
}

export {
  header,
  agenda,
  helpfulResources
}
