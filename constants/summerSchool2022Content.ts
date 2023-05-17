import type { MosaicElement } from "~/types/uiComponents";

const header = {
  titleLine1: "Qiskit Global Summer School 2022:",
  titleLine2: "Quantum Simulations",
  qiskitTwitterLink: {
    url: "https://twitter.com/Qiskit",
    segment: {
      cta: "qiskit-twitter",
      location: "header",
    },
  },
  cta: {
    label: "Register now!",
    url: "",
    segment: {
      cta: "register",
      location: "header",
    },
  },
  cardSectionHeading: "About the event:",
  card: {
    image: "/images/events/summer-school-2022/summer-school-logo.png",
    title: "Qiskit Global Summer School 2022: Quantum Simulations",
    description:
      "The Qiskit Global Summer School returns as a two-week intensive course focused on Quantum Simulations and more!",
    location: "Online",
    date: "July 18 - 29, 2022",
    time: "",
    to: "",
    ctaLabel: "Learn more",
    segment: {
      cta: "ibm-research-blog",
      location: "header",
    },
  },
};

interface MosaicSection {
  title: string;
  tiles: MosaicElement[];
}

const mosaic: MosaicSection = {
  title: "Quantum Learning & More",
  tiles: [
    {
      position: "first",
      title: "Qiskit Textbook",
      description:
        "The Qiskit Textbook is a free digital open source textbook that will teach you the concepts of quantum computing while you learn to use Qiskit.",
      image: "/images/events/seminar-series/mosaic-experts.png",
      cta: {
        url: "/learn",
        label: "Read the textbook",
        segment: {
          cta: "read-the-textbook",
          location: "mosaic",
        },
      },
    },
    {
      position: "second",
      title: "IBM Quantum",
      description:
        "IBM offers cloud access to the most advanced quantum computers available. Learn, develop, and run programs with our quantum applications and systems.",
      image: "/images/events/summer-school-2022/ibm-system-one-display.jpg",
      cta: {
        url: "https://quantum-computing.ibm.com/login",
        label: "Explore IBM Quantum",
        segment: {
          cta: "explore-ibm-quantum",
          location: "mosaic",
        },
      },
    },
    {
      position: "third",
      title: "Introduction to Quantum Computing and Quantum Hardware",
      description:
        "The Qiskit Global Summer School 2020 coursework, lab, and lecture materials are now available online.",
      image: "/images/events/summer-school-2022/chip.png",
      cta: {
        url: "/learn/summer-school/introduction-to-quantum-computing-and-quantum-hardware-2020",
        label: "Start the course",
        segment: {
          cta: "start-the-course",
          location: "mosaic",
        },
      },
    },
    {
      position: "fourth",
      title: "Quantum Computing & Quantum Machine Learning (2021)",
      description:
        "The Qiskit Global Summer School 2021 coursework, lab, and lecture materials are now available online.",
      image: "/images/events/summer-school-2022/quantum-composer-screen.png",
      cta: {
        url: "https://qiskit.org/learn/summer-school/quantum-computing-and-quantum-learning-2021",
        label: "Start the course",
        segment: {
          cta: "start-the-course",
          location: "mosaic",
        },
      },
    },
  ],
};

interface dailyAgenda {
  day: string;
  topic: string;
  speaker: string;
  format: string;
}

const week1Schedule: dailyAgenda[] = [
  {
    day: "Monday, July 18",
    topic: "Qiskit Global Summer School Kick Off",
    speaker: "-",
    format: "Lecture",
  },
  {
    day: "Monday, July 18",
    topic: "History of Quantum Computing and Motivation for Quantum Simulation",
    speaker: "Olivia Lanes",
    format: "Lecture",
  },
  {
    day: "Monday, July 18",
    topic: "Q&A Sessions",
    speaker: "-",
    format: "Live Q&A",
  },
  {
    day: "Tuesday, July 19",
    topic:
      "Introduction to Linear Algebra, Prerequisite Mathematics, and Circuit Composition",
    speaker: "Maria Violaris",
    format: "Lecture",
  },
  {
    day: "Tuesday, July 19",
    topic: "Q&A Sessions",
    speaker: "-",
    format: "Live Q&A",
  },
  {
    day: "Wednesday, July 20",
    topic: "Hamiltonian Time Evolution",
    speaker: "Maria Violaris",
    format: "Lecture",
  },
  {
    day: "Wednesday, July 20",
    topic: "Q&A Sessions",
    speaker: "-",
    format: "Live Q&A",
  },
  {
    day: "Thursday, July 21",
    topic: "Simulation Problems",
    speaker: "Jeffrey Cohn",
    format: "Lecture",
  },
  {
    day: "Thursday, July 21",
    topic: "Q&A Sessions",
    speaker: "-",
    format: "Live Q&A",
  },
  {
    day: "Friday, July 22",
    topic: "Noisy Real Hardware - Noise in Quantum Computers",
    speaker: "Zlatko Minev",
    format: "Lecture",
  },
  {
    day: "Friday, July 22",
    topic: "Q&A Sessions",
    speaker: "-",
    format: "Live Q&A",
  },
];

const week2Schedule: dailyAgenda[] = [
  {
    day: "Monday, July 25",
    topic:
      "Broad Overview of Quantum Chemistry Simulation and Why it is a Challenge",
    speaker: "Panos Barkoutsos",
    format: "Lecture",
  },
  {
    day: "Monday, July 25",
    topic: "Q&A Sessions",
    speaker: "-",
    format: "Live Q&A",
  },
  {
    day: "Tuesday, July 26",
    topic: "Methods for Quantum Simulation",
    speaker: "Yukio Kawashima",
    format: "Lecture",
  },
  {
    day: "Tuesday, July 26",
    topic: "Q&A Sessions",
    speaker: "-",
    format: "Live Q&A",
  },
  {
    day: "Wednesday, July 27",
    topic: "Quantum Static Simulation",
    speaker: "Ieva Liepuoniute",
    format: "Lecture",
  },
  {
    day: "Wednesday, July 27",
    topic: "Q&A Sessions",
    speaker: "-",
    format: "Live Q&A",
  },
  {
    day: "Thursday, July 28",
    topic: "Quantum Dynamics",
    speaker: "Alexander Miessen",
    format: "Lecture",
  },
  {
    day: "Thursday, July 28",
    topic: "Q&A Sessions",
    speaker: "-",
    format: "Live Q&A",
  },
  {
    day: "Friday, July 29",
    topic: "What is Quantum Simulation and Where is the Field Going?",
    speaker: "-",
    format: "Lecture",
  },
  {
    day: "Friday, July 29",
    topic: "Q&A Sessions",
    speaker: "-",
    format: "Live Q&A",
  },
  {
    day: "Friday, July 29",
    topic: "Qiskit Global Summer School 2022 Commencement & Wrap Celebration",
    speaker: "-",
    format: "Commencement",
  },
];

const scheduleToTableData = (slot: dailyAgenda) => [
  {
    styles: "min-width: 10rem; display: inline-block; font-weight: bold;",
    data: slot.day,
  },
  {
    styles:
      "min-width: 10rem; display: inline-block; padding-top: 8px; padding-bottom: 8px",
    data: slot.topic,
  },
  {
    styles:
      "min-width: 10rem; display: inline-block; padding-top: 8px; padding-bottom: 8px",
    data: slot.speaker,
  },
  {
    styles:
      "min-width: 10rem; display: inline-block; padding-top: 8px; padding-bottom: 8px",
    data: slot.format,
  },
];

const agenda = {
  title: "Curriculum",
  subtitle: "*Final agenda and syllabus subject to change",
  weeks: [
    {
      tabName: "Week 1",
      tableData: week1Schedule.map(scheduleToTableData),
    },
    {
      tabName: "Week 2",
      tableData: week2Schedule.map(scheduleToTableData),
    },
  ],
};

interface HelpfulResourcesSection {
  title: string;
  resources: DescriptionCard[];
}

const helpfulResources: HelpfulResourcesSection = {
  title: "Resources",
  resources: [
    {
      title: "Let us know if you have any questions!",
      description:
        "If your questions aren't answered by the FAQ below or our blog post, please use this form to submit your enquiries direct to the team.",
      cta: {
        url: "http://qisk.it/QGSS2021EnquiryForm",
        label: "Enquire now",
        segment: {
          cta: "qgss2021-enquiry-form",
          location: "helpful-resources",
        },
      },
    },
    {
      title: "Learn about and install Qiskit",
      description:
        "Prepare for the Summer School by reviewing the documentation and installing Qiskit.",
      cta: {
        url: "https://qiskit.org/documentation/install.html",
        label: "Install here",
        segment: {
          cta: "qiskit-install",
          location: "helpful-resources",
        },
      },
    },
    {
      title: "Qiskit Medium",
      description:
        "This blog provides a nice overview of Qiskit and its direction as we explore what applications can be done on today's quantum devices.",
      cta: {
        url: "https://medium.com/qiskit/qiskit-and-its-fundamental-elements-bcd7ead80492",
        label: "Read the blog",
        segment: {
          cta: "qiskit-medium",
          location: "helpful-resources",
        },
      },
    },
    {
      title: "Code of conduct",
      description:
        "Qiskit is dedicated to providing an enjoyable and safe experience for all participants. We have a code of conduct that all events adhere to.",
      cta: {
        url: "https://github.com/Qiskit/qiskit/blob/master/CODE_OF_CONDUCT.md",
        label: "See code of conduct",
        segment: {
          cta: "code-of-conduct",
          location: "helpful-resources",
        },
      },
    },
  ],
};

export { header, mosaic, agenda, helpfulResources };
