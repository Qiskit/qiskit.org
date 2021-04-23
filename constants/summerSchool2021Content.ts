
const metadata = {
  title: 'Qiskit Global Summer School 2021',
  description: 'The Qiskit Global Summer School 2021 is a two-week intensive summer school designed to empower the next generation of quantum researchers and developers with the skills and know-how to explore quantum applications on their own',
  image: '/images/events/summer-school/summer-school-logo.png'
}

const header = {
  titleLine1: 'Qiskit Global Summer School 2021:',
  titleLine2: 'Quantum Machine Learning',
  qiskitTwitterLink: {
    url: 'https://twitter.com/Qiskit',
    segment: {
      action: 'events-summer-school > header > qiskit-twitter'
    }
  },
  cta: {
    label: 'Learn more',
    url: 'http://qisk.it/qgss2021blog_website_source',
    segment: {
      action: 'events-summer-school > header > ibm-research-blog'
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
      action: 'events-summer-school > header > ibm-research-blog'
    }
  }
}

const mosaic = {
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
          action: 'events-summer-school > mosaic > read-the-textbook'
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
          action: 'events-summer-school > mosaic > explore-ibm-quantum'
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
          action: 'events-summer-school > mosaic > start-the-course'
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
          action: 'events-summer-school > mosaic > explore-the-docs'
        }
      }
    }
  ]
}

const week1Schedule = [
  {
    day: 'Monday, July 12',
    topic: 'Vector Spaces, Tensor Products and Qubits',
    speaker: '-',
    format: 'Lecture'
  },
  {
    day: 'Monday, July 12',
    topic: 'Quantum Operators and Measurements',
    speaker: '-',
    format: 'Lecture'
  },
  {
    day: 'Monday, July 12',
    topic: 'Day 1 Q&A Session',
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
    topic: '(Lab 1) Intro to Quantum Computing Algorithms and Operations',
    speaker: '-',
    format: 'Lab'
  },
  {
    day: 'Tuesday, July 13',
    topic: 'Day 2 Q&A Session',
    speaker: '-',
    format: 'Live Q&A'
  },
  {
    day: 'Wednesday, July 14',
    topic: 'The Foundations of Classical Machine Learning: Cost Functions, Data Splitting, Overfitting',
    speaker: '-',
    format: 'Lecture'
  },
  {
    day: 'Wednesday, July 14',
    topic: 'Advanced Classical Machine Learning: Neural Networks and Support Vector Machines',
    speaker: '-',
    format: 'Lecture'
  },
  {
    day: 'Wednesday, July 14',
    topic: 'Day 3 Q&A Session',
    speaker: '-',
    format: 'Live Q&A'
  },
  {
    day: 'Thursday, July 15',
    topic: 'Introduction to Parameterized Quantum Circuits',
    speaker: '-',
    format: 'Lecture'
  },
  {
    day: 'Thursday, July 15',
    topic: 'Data Encoding Schemes for Quantum Machine Learning',
    speaker: '-',
    format: 'Lecture'
  },
  {
    day: 'Thursday, July 15',
    topic: 'Day 4 Q&A Session',
    speaker: '-',
    format: 'Live Q&A'
  },
  {
    day: 'Friday, July 16',
    topic: 'Building a Variational Quantum Classifier',
    speaker: '-',
    format: 'Lecture'
  },
  {
    day: 'Friday, July 16',
    topic: 'An Introduction to the Quantum Approximate Optimization Algorithm and its Applications',
    speaker: '-',
    format: 'Lecture'
  },
  {
    day: 'Friday, July 16',
    topic: '(Lab 2) Variational Algorithms',
    speaker: '-',
    format: 'Lab'
  },
  {
    day: 'Friday, July 16',
    topic: 'Day 5 Q&A Session',
    speaker: '-',
    format: 'Live Q&A'
  }
]

const week2Schedule = [
  {
    day: 'Monday, July 19',
    topic: 'Quantum Kernels',
    speaker: '-',
    format: 'Lecture'
  },
  {
    day: 'Monday, July 19',
    topic: 'Support Vector Machines, Quantum Support Vector Machines',
    speaker: '-',
    format: 'Lecture'
  },
  {
    day: 'Monday, July 19',
    topic: '(Lab 3) Quantum Kernels and Support Vector Machines',
    speaker: '-',
    format: 'Lab'
  },
  {
    day: 'Monday, July 19',
    topic: 'Day 6 Q&A Session',
    speaker: '-',
    format: 'Live Q&A'
  },
  {
    day: 'Tuesday, July 20',
    topic: 'Introduction and Applications of Quantum Neural Networks',
    speaker: '-',
    format: 'Lecture'
  },
  {
    day: 'Tuesday, July 20',
    topic: 'Introduction to Training Quantum Neural Networks',
    speaker: '-',
    format: 'Lecture'
  },
  {
    day: 'Tuesday, July 20',
    topic: 'Day 7 Q&A Session',
    speaker: '-',
    format: 'Live Q&A'
  },
  {
    day: 'Wednesday, July 21',
    topic: 'Advanced Training of Quantum Neural Networks',
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
    topic: '(Lab 4) Training Quantum Neural Networks',
    speaker: '-',
    format: 'Lab'
  },
  {
    day: 'Wednesday, July 21',
    topic: 'Day 8 Q&A Session',
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
    topic: '(Lab 5) Hardware Efficient Ansatze for Quantum Machine Learning',
    speaker: '-',
    format: 'Lab'
  },
  {
    day: 'Thursday, July 22',
    topic: 'Day 8 Q&A Session',
    speaker: '-',
    format: 'Live Q&A'
  },
  {
    day: 'Friday, July 23',
    topic: 'Advanced Quantum Machine Learning Algorithms: Quantum Boltzmann Machines and Quantum Generative Adversarial Networks',
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
    topic: 'Day 9 Q&A Session',
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

interface AgendaSlot {
  day: string,
  topic: string,
  speaker: string,
  format: string
}

const scheduleToTableData = (slot: AgendaSlot) => ([
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
  week1: {
    tabName: 'Week 1',
    tableData: week1Schedule.map(scheduleToTableData)
  },
  week2: {
    tabName: 'Week 2',
    tableData: week2Schedule.map(scheduleToTableData)
  }
}

const helpfulResources = {
  title: 'Resources',
  resources: [
    {
      title: 'Let us know if you have any questions!',
      description: "If your questions aren't answered by the FAQ below or our blog post, please use this form to submit your enquiries direct to the team.",
      cta: {
        url: 'http://qisk.it/QGSS2021EnquiryForm',
        label: 'Enquire now',
        segment: {
          action: 'events-summer-school > helpful-resources > qgss2021-enquiry-form'
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
          action: 'events-summer-school > helpful-resources > qiskit-install'
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
          action: 'events-summer-school > helpful-resources > qiskit-medium'
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
          action: 'events-summer-school > helpful-resources > code-of-conduct'
        }
      }
    }
  ]
}

export {
  metadata,
  header,
  mosaic,
  agenda,
  AgendaSlot,
  helpfulResources
}
