import { TextLink } from "~/types/links";

enum LearnStartLearningUrl {
  Introduction = "https://learn.qiskit.org/course/introduction",
  BasicsQuantumInformation = "https://learn.qiskit.org/course/basics",
  FundamentalsQuantumAlgorithms = "https://learn.qiskit.org/course/algorithms",
  AlgorithmDesign = "https://learn.qiskit.org/course/algorithm-design",
  QML = "https://learn.qiskit.org/course/machine-learning",
  SummerSchool2020 = "https://learn.qiskit.org/summer-school/2020/",
  SummerSchool2021 = "https://learn.qiskit.org/summer-school/2021/",
  SummerSchool2022 = "https://learn.qiskit.org/summer-school/2022/",
}

const SocialMedia: { [key: string]: TextLink } = {
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
} as const;

const EcosystemJoinLink: TextLink = {
  url: "https://github.com/qiskit-community/ecosystem#ecosystem--",
  label: "Join the ecosystem",
  segment: { cta: "join-the-ecosystem", location: "ecosystem" },
};

export { LearnStartLearningUrl, SocialMedia, EcosystemJoinLink };
