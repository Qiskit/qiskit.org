import { MosaicElement } from '@/components/ui/AppMosaic.vue'
import { DescriptionCard } from '@/components/ui/AppDescriptionCard.vue'

const header = {
  titleLine1: 'Qiskit Global Summer School 2021:',
  titleLine2: 'Quantum Machine Learning',
  qiskitTwitterLink: {
    url: 'https://twitter.com/Qiskit',
    segment: {
      cta: 'qiskit-twitter',
      location: 'header'
    }
  },
  cta: {
    label: 'Register Now',
    url: 'https://qisk.it/2021summerschoolregistration',
    segment: {
      cta: 'register',
      location: 'header'
    }
  },
  cardSectionHeading: 'About the event:',
  card: {
    image: '/images/events/summer-school/summer-school-logo.png',
    title: 'Qiskit Global Summer School 2021: Quantum Machine Learning',
    description: 'The Qiskit Global Summer School returns as a two-week intensive course focused on Quantum Machine Learning and more!',
    location: 'Online',
    date: 'July 12 - 23, 2021',
    time: '',
    to: 'http://qisk.it/qgss2021blog_website_source',
    ctaLabel: 'Learn more',
    segment: {
      cta: 'ibm-research-blog',
      location: 'header'
    }
  }
}

interface MosaicSection {
  title: string,
  tiles: MosaicElement[]
}

const mosaic: MosaicSection = {
  title: 'Quantum Learning & More',
  tiles: [
    {
      position: 'first',
      title: 'Qiskit Textbook',
      description: 'The Qiskit Textbook is a free digital open source textbook that will teach you the concepts of quantum computing while you learn to use Qiskit.',
      image: '/images/events/seminar-series/mosaic-experts.png',
      cta: {
        url: 'https://qiskit.org/textbook/preface.html',
        label: 'Read the textbook',
        segment: {
          cta: 'read-the-textbook',
          location: 'mosaic'
        }
      }
    },
    {
      position: 'second',
      title: 'IBM Quantum',
      description: 'IBM offers cloud access to the most advanced quantum computers available. Learn, develop, and run programs with our quantum applications and systems.',
      image: '/images/events/summer-school/ibm-system-one-display.jpg',
      cta: {
        url: 'https://quantum-computing.ibm.com/login',
        label: 'Explore IBM Quantum',
        segment: {
          cta: 'explore-ibm-quantum',
          location: 'mosaic'
        }
      }
    },
    {
      position: 'third',
      title: 'Introduction to Quantum Computing and Quantum Hardware',
      description: 'The Qiskit Global Summer School 2020 coursework, lab, and lecture materials are now available online.',
      image: '/images/events/summer-school/chip.png',
      cta: {
        url: 'https://qiskit.org/learn/intro-qc-qh',
        label: 'Start the course',
        segment: {
          cta: 'start-the-course',
          location: 'mosaic'
        }
      }
    },
    {
      position: 'fourth',
      title: 'IBM Quantum Tools on the Cloud',
      description: 'Learn quantum programming and how to use our tools with step-by-step tutorials and guides.',
      image: '/images/events/summer-school/quantum-composer-screen.png',
      cta: {
        url: 'https://quantum-computing.ibm.com/docs/',
        label: 'Explore the docs',
        segment: {
          cta: 'explore-the-docs',
          location: 'mosaic'
        }
      }
    }
  ]
}

interface dailyAgenda {
  day: string,
  topic: string,
  speaker: string,
  format: string
}

const week1Schedule: dailyAgenda[] = [
  {
    day: 'Monday, July 12',
    topic: 'Qiskit Global Summer School Kick Off',
    speaker: '-',
    format: 'Lecture'
  },
  {
    day: 'Monday, July 12',
    topic: 'Vector Spaces, Tensor Products, and Qubits',
    speaker: '-',
    format: 'Lecture'
  },
  {
    day: 'Monday, July 12',
    topic: 'Introduction to Quantum Circuits',
    speaker: '-',
    format: 'Lecture'
  },
  {
    day: 'Monday, July 12',
    topic: 'Q&A Sessions',
    speaker: '-',
    format: 'Live Q&A'
  },
  {
    day: 'Tuesday, July 13',
    topic: 'Simple Quantum Algorithms I',
    speaker: '-',
    format: 'Lecture'
  },
  {
    day: 'Tuesday, July 13',
    topic: 'Simple Quantum Algorithms II',
    speaker: '-',
    format: 'Lecture'
  },
  {
    day: 'Tuesday, July 13',
    topic: 'Q&A Sessions',
    speaker: '-',
    format: 'Live Q&A'
  },
  {
    day: 'Wednesday, July 14',
    topic: 'Noise in Quantum Computers',
    speaker: '-',
    format: 'Lecture'
  },
  {
    day: 'Wednesday, July 14',
    topic: '(Lab 1) Introduction to Quantum Computing Algorithms and Operations',
    speaker: '-',
    format: 'Lab'
  },
  {
    day: 'Wednesday, July 14',
    topic: 'Q&A Sessions',
    speaker: '-',
    format: 'Live Q&A'
  },
  {
    day: 'Thursday, July 15',
    topic: 'Introduction to Classical Machine Learning (ML)',
    speaker: '-',
    format: 'Lecture'
  },
  {
    day: 'Thursday, July 15',
    topic: 'Advanced Classical Machine Learning (ML)',
    speaker: '-',
    format: 'Lecture'
  },
  {
    day: 'Thursday, July 15',
    topic: 'Q&A Sessions',
    speaker: '-',
    format: 'Live Q&A'
  },
  {
    day: 'Friday, July 16',
    topic: 'Introduction to the Quantum Approximate Optimization Algorithm (QAOA) and its Applications',
    speaker: '-',
    format: 'Lecture'
  },
  {
    day: 'Friday, July 16',
    topic: 'Building a Quantum Classifier',
    speaker: '-',
    format: 'Lecture'
  },
  {
    day: 'Friday, July 16',
    topic: '(Lab 2) Introduction to Variational Algorithms',
    speaker: '-',
    format: 'Lab'
  },
  {
    day: 'Friday, July 16',
    topic: 'Q&A Sessions',
    speaker: '-',
    format: 'Live Q&A'
  }
]

const week2Schedule: dailyAgenda[] = [
  {
    day: 'Monday, July 19',
    topic: 'From Variational Classifiers to Linear Classifiers',
    speaker: '-',
    format: 'Lecture'
  },
  {
    day: 'Monday, July 19',
    topic: 'Quantum Feature Spaces and Kernels',
    speaker: '-',
    format: 'Lecture'
  },
  {
    day: 'Monday, July 19',
    topic: 'Q&A Sessions',
    speaker: '-',
    format: 'Live Q&A'
  },
  {
    day: 'Tuesday, July 20',
    topic: 'Quantum Kernels in Practice',
    speaker: '-',
    format: 'Lecture'
  },
  {
    day: 'Tuesday, July 20',
    topic: '(Lab 3) Introduction to Quantum Kernels and Support Vector Machines (SVMs)',
    speaker: '-',
    format: 'Lab'
  },
  {
    day: 'Tuesday, July 20',
    topic: 'Q&A Sessions',
    speaker: '-',
    format: 'Live Q&A'
  },
  {
    day: 'Wednesday, July 21',
    topic: 'Introduction and Applications of Quantum Models',
    speaker: '-',
    format: 'Lecture'
  },
  {
    day: 'Wednesday, July 21',
    topic: 'Barren Plateaus, Trainability Issues, and How to Avoid Them',
    speaker: '-',
    format: 'Lecture'
  },
  {
    day: 'Wednesday, July 21',
    topic: '(Lab 4) Introduction to Training Quantum Circuits',
    speaker: '-',
    format: 'Lab'
  },
  {
    day: 'Wednesday, July 21',
    topic: 'Q&A Sessions',
    speaker: '-',
    format: 'Live Q&A'
  },
  {
    day: 'Thursday, July 22',
    topic: 'Introduction to Quantum Hardware',
    speaker: '-',
    format: 'Lecture'
  },
  {
    day: 'Thursday, July 22',
    topic: 'Hardware Efficient Ansatze for Quantum Machine Learning',
    speaker: '-',
    format: 'Lecture'
  },
  {
    day: 'Thursday, July 22',
    topic: '(Lab 5) Introduction to Hardware Efficient Ansatze for Quantum Machine Learning',
    speaker: '-',
    format: 'Lab'
  },
  {
    day: 'Thursday, July 22',
    topic: 'Q&A Sessions',
    speaker: '-',
    format: 'Live Q&A'
  },
  {
    day: 'Friday, July 23',
    topic: 'Advanced Quantum Machine Learning Algorithms: Quantum Boltzmann Machines and Quantum Generative Adversarial Networks (QGANs)',
    speaker: '-',
    format: 'Lecture'
  },
  {
    day: 'Friday, July 23',
    topic: 'The Capacity and Power of Quantum Machine Learning Models & the Future of Quantum Machine Learning',
    speaker: '-',
    format: 'Lecture'
  },
  {
    day: 'Friday, July 23',
    topic: 'Q&A Sessions',
    speaker: '-',
    format: 'Live Q&A'
  },
  {
    day: 'Friday, July 23',
    topic: 'Qiskit Global Summer School 2021 Commencement & Wrap Celebration',
    speaker: '-',
    format: 'Commencement'
  }
]

const scheduleToTableData = (slot: dailyAgenda) => ([
  {
    component: 'span',
    styles: 'min-width: 10rem; display: inline-block; font-weight: bold;',
    data: slot.day
  },
  {
    component: 'span',
    styles: 'min-width: 10rem; display: inline-block; padding-top: 8px; padding-bottom: 8px',
    data: slot.topic
  },
  {
    component: 'span',
    styles: 'min-width: 10rem; display: inline-block; padding-top: 8px; padding-bottom: 8px',
    data: slot.speaker
  },
  {
    component: 'span',
    styles: 'min-width: 10rem; display: inline-block; padding-top: 8px; padding-bottom: 8px',
    data: slot.format
  }
])

const agenda = {
  title: 'Curriculum',
  subtitle: '*Final agenda and syllabus subject to change',
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
      description: "If your questions aren't answered by the FAQ below or our blog post, please use this form to submit your enquiries direct to the team.",
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
      description: 'Prepare for the Summer School by reviewing the documentation and installing Qiskit.',
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
  mosaic,
  agenda,
  helpfulResources
}
