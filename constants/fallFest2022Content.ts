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
    image: '/images/events/qiskit-fall-fest/qiskit-fall-fest-logo.png',
    title: 'Qiskit Fall Fest 2022',
    description: 'The Qiskit Fall Fest is a collection of quantum computing events each held by a University!',
    location: 'Online',
    time: '',
    to: 'https://www.eventbrite.com/e/2022-qiskit-global-summer-school-quantum-simulations-tickets-348866728777',
    ctaLabel: 'Learn more',
    segment: {
      cta: 'ibm-research-blog',
      location: 'header'
    }
  }
}

interface eventSchedule {
  day: string,
  university: string,
  type: string,
  url: string
}

// TODO: get full week 1 schedule from Events team
const week1Schedule: eventSchedule[] = [
  {
    day: 'Monday, July 18',
    university: 'Qiskit Global Summer School Kick Off',
    type: '-',
    url: 'Lecture'
  },
  {
    day: 'Monday, July 18',
    university: 'History of Quantum Computing and Motivation for Quantum Simulation',
    type: 'Olivia Lanes',
    url: 'Lecture'
  },
  {
    day: 'Monday, July 18',
    university: 'Q&A Sessions',
    type: '-',
    url: 'Live Q&A'
  },
  {
    day: 'Tuesday, July 19',
    university: 'Introduction to Linear Algebra, Prerequisite Mathematics, and Circuit Composition',
    type: 'Maria Violaris',
    url: 'Lecture'
  },
  {
    day: 'Tuesday, July 19',
    university: 'Q&A Sessions',
    type: '-',
    url: 'Live Q&A'
  },
  {
    day: 'Wednesday, July 20',
    university: 'Hamiltonian Time Evolution',
    type: 'Maria Violaris',
    url: 'Lecture'
  },
  {
    day: 'Wednesday, July 20',
    university: 'Q&A Sessions',
    type: '-',
    url: 'Live Q&A'
  },
  {
    day: 'Thursday, July 21',
    university: 'Simulation Problems',
    type: 'Jeffrey Cohn',
    url: 'Lecture'
  },
  {
    day: 'Thursday, July 21',
    university: 'Q&A Sessions',
    type: '-',
    url: 'Live Q&A'
  },
  {
    day: 'Friday, July 22',
    university: 'Noisy Real Hardware - Noise in Quantum Computers',
    type: 'Zlatko Minev',
    url: 'Lecture'
  },
  {
    day: 'Friday, July 22',
    university: 'Q&A Sessions',
    type: '-',
    url: 'Live Q&A'
  }
]

// TODO: get full week 2 schedule from Events team
const week2Schedule: eventSchedule[] = [
  {
    day: 'Monday, July 25',
    university: 'Broad Overview of Quantum Chemistry Simulation and Why it is a Challenge',
    type: 'Panos Barkoutsos',
    url: 'Lecture'
  },
  {
    day: 'Monday, July 25',
    university: 'Q&A Sessions',
    type: '-',
    url: 'Live Q&A'
  },
  {
    day: 'Tuesday, July 26',
    university: 'Methods for Quantum Simulation',
    type: 'Yukio Kawashima',
    url: 'Lecture'
  },
  {
    day: 'Tuesday, July 26',
    university: 'Q&A Sessions',
    type: '-',
    url: 'Live Q&A'
  },
  {
    day: 'Wednesday, July 27',
    university: 'Quantum Static Simulation',
    type: 'Ieva Liepuoniute',
    url: 'Lecture'
  },
  {
    day: 'Wednesday, July 27',
    university: 'Q&A Sessions',
    type: '-',
    url: 'Live Q&A'
  },
  {
    day: 'Thursday, July 28',
    university: 'Quantum Dynamics',
    type: 'Alexander Miessen',
    url: 'Lecture'
  },
  {
    day: 'Thursday, July 28',
    university: 'Q&A Sessions',
    type: '-',
    url: 'Live Q&A'
  },
  {
    day: 'Friday, July 29',
    university: 'What is Quantum Simulation and Where is the Field Going?',
    type: '-',
    url: 'Lecture'
  },
  {
    day: 'Friday, July 29',
    university: 'Q&A Sessions',
    type: '-',
    url: 'Live Q&A'
  },
  {
    day: 'Friday, July 29',
    university: 'Qiskit Global Summer School 2022 Commencement & Wrap Celebration',
    type: '-',
    url: 'Commencement'
  }
]

const scheduleToTableData = (slot: eventSchedule) => ([
  {
    styles: 'min-width: 10rem; display: inline-block; font-weight: bold;',
    data: slot.day
  },
  {
    styles: 'min-width: 10rem; display: inline-block; padding-top: 8px; padding-bottom: 8px',
    data: slot.university
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
      tabName: 'Week 1',
      tableData: week1Schedule.map(scheduleToTableData)
    },
    {
      tabName: 'Week 2',
      tableData: week2Schedule.map(scheduleToTableData)
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
