import { Link } from "~/types/links";

const SOCIAL_MEDIA_LINKS: { [key: string]: Link } = {
  github: {
    label: "GitHub",
    url: "https://github.com/Qiskit",
  },
  slack: {
    label: "Slack",
    url: "https://qisk.it/join-slack",
  },
  twitter: {
    label: "Twitter",
    url: "https://twitter.com/Qiskit",
  },
  medium: {
    label: "Medium",
    url: "https://medium.com/Qiskit",
  },
  youtube: {
    label: "YouTube",
    url: "https://www.youtube.com/Qiskit",
  },
  support: {
    label: "Support Channels",
    url: "https://qisk.it/support",
  },
};

export { SOCIAL_MEDIA_LINKS };
