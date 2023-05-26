import type { DescriptionCard, MosaicElement } from "~/types/uiComponents";

const header = {
  titleLine1: "Qiskit Global Summer School 2023:",
  titleLine2: "Theory To Implementation",
  qiskitTwitterLink: {
    url: "https://twitter.com/Qiskit",
    segment: {
      cta: "qiskit-twitter",
      location: "header",
    },
  },
  researchBlogLink: {
    url: "https://qisk.it/QGSS23",
    segment: {
      cta: "research-announcement-blog",
      location: "header",
    },
  },
  cta: {
    label: "General Registration June 1, 9AM EST",
    url: "",
    segment: {
      cta: "register",
      location: "header",
    },
  },
  cardSectionHeading: "About the event:",
  card: {
    image: "/images/events/summer-school-2023/summer-school-2023-logo.png",
    title: "Qiskit Global Summer School 2023: Theory To Implementation",
    description:
      "The Qiskit Global Summer School returns as a two-week intensive course focused on the foundations of quantum computing and more!",
    location: "Online",
    date: "July 17 – 28, 2023",
    time: "",
    to: "",
    ctaLabel: "",
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
      title: "Qiskit YouTube Channel",
      description:
        "Join us for engaging lectures, tips & tricks, tutorials, community updates and access to exclusive Qiskit content!",
      image: "/images/learn/other-platforms/youtube.png",
      cta: {
        url: "https://www.youtube.com/@qiskit",
        label: "Watch and subscribe",
        segment: {
          cta: "watch-and-subscribe",
          location: "mosaic",
        },
      },
    },
    {
      position: "second",
      title: "Qiskit Textbook",
      description:
        "The Qiskit Textbook is a free digital open source textbook that will teach you the concepts of quantum computing while you learn to use Qiskit.",
      image: "/images/events/summer-school-2023/qiskit-textbook.jpg",
      cta: {
        url: "/learn",
        label: "Read the Textbook",
        segment: {
          cta: "read-the-textbook",
          location: "mosaic",
        },
      },
    },
    {
      position: "third",
      title: "IBM Quantum",
      description:
        "IBM offers cloud access to the most advanced quantum computers available. Learn, develop, and run programs with our quantum applications and systems.",
      image: "/images/events/summer-school-2022/chip.png",
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
      position: "fourth",
      title: "Quantum Computing & Quantum Machine Learning (2021)",
      description:
        "The Qiskit Global Summer School 2021 coursework, lab, and lecture materials are now available online.",
      image:
        "/images/learn/summer-school/quantum-computing-and-quantum-learning-2021/header.png",
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
    day: "Monday, July 17",
    topic: "Kick Off",
    speaker: "O. Lanes",
    format: "Address",
  },
  {
    day: "Monday, July 17",
    topic: "Single Systems",
    speaker: "J. Watrous",
    format: "Lecture",
  },
  {
    day: "Monday, July 17",
    topic: "Multiple Systems",
    speaker: "J. Watrous",
    format: "Lecture",
  },
  {
    day: "Monday, July 17",
    topic: " ",
    speaker: "O. Lanes, J. Watrous",
    format: "Live Q&A",
  },
  {
    day: "Tuesday, July 18",
    topic: "Quantum Circuits",
    speaker: "J. Watrous",
    format: "Lecture",
  },
  {
    day: "Tuesday, July 18",
    topic: "Qiskit 101",
    speaker: "A. Mitchell",
    format: "Lab",
  },
  {
    day: "Tuesday, July 18",
    topic: " ",
    speaker: "J. Watrous, A. Mitchell",
    format: "Live Q&A",
  },
  {
    day: "Wednesday, July 19",
    topic: "Entanglement in Action",
    speaker: "J. Watrous",
    format: "Lecture",
  },
  {
    day: "Wednesday, July 19",
    topic: "Creating Entanglement with Qiskit",
    speaker: "N. Bronn",
    format: "Lab",
  },
  {
    day: "Wednesday, July 19",
    topic: " ",
    speaker: "N. Bronn, J. Watrous",
    format: "Live Q&A",
  },
  {
    day: "Thursday, July 20",
    topic: "Quantum Query Algorithms",
    speaker: "J. Watrous",
    format: "Lecture",
  },
  {
    day: "Thursday, July 20",
    topic: "Foundations of Quantum Algorithms ",
    speaker: "J. Watrous",
    format: "Lecture",
  },
  {
    day: "Thursday, July 20",
    topic: " ",
    speaker: "O. Lanes, J. Watrous",
    format: "Live Q&A",
  },
  {
    day: "Friday, July 21",
    topic: "Phase Estimation and Factoring",
    speaker: "J. Watrous",
    format: "Lecture",
  },
  {
    day: "Friday, July 21",
    topic: "Diving Into Quantum Algorithms",
    speaker: "K. Ferris",
    format: "Lab",
  },
  {
    day: "Friday, July 21",
    topic: " ",
    speaker: "O. Lanes, J. Watrous",
    format: "Live Q&A",
  },
];

const week2Schedule: dailyAgenda[] = [
  {
    day: "Monday, July 24",
    topic: "Kick Off",
    speaker: "O. Lanes",
    format: "Address",
  },
  {
    day: "Monday, July 24",
    topic: "Quantum Computing Hardware and Super Conducting Circuits",
    speaker: "O. Lanes",
    format: "Lecture",
  },
  {
    day: "Monday, July 24",
    topic: " ",
    speaker: "O. Lanes, J. Watrous",
    format: "Live Q&A",
  },
  {
    day: "Tuesday, July 25",
    topic: "Introduction to Quantum Noise - Part 1",
    speaker: "Z. Minev",
    format: "Lecture",
  },
  {
    day: "Tuesday, July 25",
    topic: "Introduction to Quantum Noise - Part 2",
    speaker: "Z. Minev",
    format: "Lecture",
  },
  {
    day: "Tuesday, July 25",
    topic: " ",
    speaker: "Z. Minev, J. Watrous",
    format: "Live Q&A",
  },
  {
    day: "Wednesday, July 26",
    topic: "Iterative Quantum Phase Estimation: Moving Beyond Traditional QPE",
    speaker: "K. Ferris",
    format: "Lecture",
  },
  {
    day: "Wednesday, July 26",
    topic: "Variational Quantum Eigensolver",
    speaker: "O. Shehab",
    format: "Lecture",
  },
  {
    day: "Wednesday, July 26",
    topic: "Iterative Phase Estimation",
    speaker: "K. Sung",
    format: "Lab",
  },
  {
    day: "Wednesday, July 26",
    topic: " ",
    speaker: "K. Ferris, J.Watrous",
    format: "Live Q&A",
  },
  {
    day: "Thursday, July 27",
    topic: "Noise Mitigation - Part 1",
    speaker: "N. Bronn",
    format: "Lecture",
  },
  {
    day: "Thursday, July 27",
    topic: "Noise Mitigation - Part 2",
    speaker: "N. Bronn",
    format: "Lab",
  },
  {
    day: "Thursday, July 27",
    topic: "Noise Mitigation",
    speaker: "K. Sung",
    format: "Lab",
  },
  {
    day: "Thursday, July 27",
    topic: " ",
    speaker: "K. Sung, J. Watrous",
    format: "Live Q&A",
  },
  {
    day: "Friday, July 28",
    topic: "Contributing to Qiskit",
    speaker: "A. Mitchell",
    format: "Lab",
  },
  {
    day: "Friday, July 28",
    topic: "Closing Ceremony",
    speaker: "Various",
    format: " ",
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
        url: "https://qisk.it/QGSS2023EnquiryForm",
        label: "Enquire now",
        segment: {
          cta: "qgss2023-enquiry-form",
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
