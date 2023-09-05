import { DescriptionCard } from "~/types/uiComponents";

const header = {
  titleLine1: "Qiskit Fall Fest 2023",
  description:
    "The Qiskit Fall Fest is a collection of quantum computing events on college campuses around the world. Every Fall Fest event is organized and run by the students on each campus, with support from IBM Quantum. Student leaders work alongside IBM to design and plan their event, which are run in October and November. Each event is standalone - only made for the students on that particular campus. The events vary from technical hackathons to beginner-friendly challenges, all with the goal of helping to grow the local community’s skill set.",
  cta: {
    label: "2022 Fall Fest events",
    url: "/events/fall-fest-2022",
    segment: {
      cta: "learn",
      location: "header",
    },
  },
  cardSectionHeading: "About the event:",
  card: {
    image: "/images/events/fall-fest/fall-fest-logo-2023.png",
    title: "Qiskit Fall Fest 2023",
    description:
      "The Qiskit Fall Fest is a collection of quantum computing events each held by a university!",
    location: "",
    time: "",
    to: "https://medium.com/qiskit/introducing-the-qiskit-fall-fest-feb8456b557",
    ctaLabel: "Learn about the Fall Fest",
    segment: {
      cta: "qiskit-fall-fest-blog",
      location: "card-header",
    },
  },
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
        "If your questions aren't answered by the FAQ above or our blog post, please use this form to submit your enquiries direct to the team.",
      cta: {
        url: "mailto:qiskit.events@us.ibm.com",
        label: "Enquire now",
        segment: {
          cta: "qiskt-fall-fest-email",
          location: "helpful-resources",
        },
      },
    },
    {
      title: "Learn about and install Qiskit",
      description:
        "Prepare for the Fall Fest by reviewing the documentation and installing Qiskit.",
      cta: {
        url: "https://qiskit.org/documentation/getting_started.html#installation",
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
        url: "https://medium.com/@qiskit",
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

export { header, helpfulResources };
