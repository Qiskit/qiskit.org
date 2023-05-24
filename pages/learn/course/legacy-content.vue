<template>
  <CourseOverviewPage
    :courses="courses"
    :external-recommended-readings-preamble="
      externalRecommendedReadingsPreamble
    "
    :header-title="headerTitle"
    :header-description="headerDescription"
    :header-img="headerImg"
    :image-url-base="imageUrlBase"
    :links="links"
    :prerequisites="prerequisites"
    :references="references"
    :route-name="routeName"
    :start-learning-cta="startLearningCTA"
  />
</template>

<script setup lang="ts">
import type { Link } from "~/types/links";
import type { Course, Prerequisite } from "constants/learnContent";

enum LegacyContentUrl {
  Prerequisites = "https://learn.qiskit.org/v1/course/ch-prerequisites/",
  QuantumStatesAndQubits = "https://learn.qiskit.org/v1/course/ch-states/",
  MultipleQubitsAndEntanglement = "https://learn.qiskit.org/v1/course/ch-gates",
  QuantumProtocolsAndQuantumAlgorithms = "https://learn.qiskit.org/v1/course/ch-algorithms/",
  QuantumAlgorithmsForApplications = "https://learn.qiskit.org/v1/course/ch-applications/",
  InvestigatingQuantumHardwareUsingQuantumCircuits = "https://learn.qiskit.org/v1/course/ch-quantum-hardware/",
  InvestigatingQuantumHardwareUsingMicrowavePulses = "https://learn.qiskit.org/v1/course/ch-quantum-hardware/calibrating-qubits-pulse",
  QuantumComputingLabs = "https://learn.qiskit.org/v1/course/ch-labs/",
  Appendix = "https://learn.qiskit.org/v1/course/ch-appendix/",
  GamesAndDemos = "https://learn.qiskit.org/v1/course/ch-demos/",
}

definePageMeta({
  layout: "default-max",
  pageTitle: "Legacy content",
  routeName: "legacy-content",
});

useHead({
  title: "Legacy content",
});

const routeName = "legacy-content";

const headerTitle = "Legacy content";
const headerDescription = [
  `We're constantly updating and improving the Qiskit Textbook, but we know
  these changes can be disruptive. For this reason, you can always access
  older versions of the Qiskit Textbook through our versioning system. Use
  the links below to access all chapters available in the original version
  (v1) of the Qiskit Textbook, formerly known as "Learn Quantum Computation
  using Qiskit". These pages are stable and will not change.`,
  `These pages may be outdated and might not work with current versions of
  Qiskit. See the bottom of each page for the package versions used at the
  time of writing.`,
];

const headerImg = "/images/learn/course/legacy-content/legacy-content.png";

const startLearningCTA: Link = {
  url: LegacyContentUrl.QuantumStatesAndQubits,
  label: "Go to v1/course/ch-states",
  segment: {
    cta: "introduction",
    location: "header",
  },
};

const references: string[] = [];
const externalRecommendedReadingsPreamble = "";
const links: Link[] = [];

const courses: Course[] = [
  {
    image: "prerequisites.png",
    label: "0. Prerequisites",
    segment: { cta: "prerequisites", location: "course" },
    url: LegacyContentUrl.Prerequisites,
  },
  {
    image: "quantum-states-and-qubits.png",
    label: "1. Quantum States and Qubits ",
    segment: { cta: "quantum-states-and-qubits", location: "course" },
    url: LegacyContentUrl.QuantumStatesAndQubits,
  },
  {
    image: "multiple-qubits-entanglement.png",
    label: "2. Multiple Qubits and Entanglement",
    segment: { cta: "multiple-qubits-entanglement", location: "course" },
    url: LegacyContentUrl.MultipleQubitsAndEntanglement,
  },
  {
    image: "quantum-protocols-and-quantum-algorithms.png",
    label: "3. Quantum Protocols and Quantum Algorithms ",
    segment: {
      cta: "quantum-protocols-and-quantum-algorithms",
      location: "course",
    },
    url: LegacyContentUrl.QuantumProtocolsAndQuantumAlgorithms,
  },
  {
    image: "quantum-algorithms-for-applications.png",
    label: "4. Quantum Algorithms for Applications",
    segment: { cta: "quantum-algorithms-for-applications", location: "course" },
    url: LegacyContentUrl.QuantumAlgorithmsForApplications,
  },
  {
    image: "investigating-quantum-hardware-using-quantum-circuits.png",
    label: "5. Investigating Quantum Hardware Using Quantum Circuits",
    segment: {
      cta: "investigating-quantum-hardware-using-quantum-circuits",
      location: "course",
    },
    url: LegacyContentUrl.InvestigatingQuantumHardwareUsingQuantumCircuits,
  },
  {
    image: "investigating-quantum-hardware-using-microwave-pulses.png",
    label: "6. Investigating Quantum Hardware Using Microwave Pulses",
    segment: {
      cta: "investigating-quantum-hardware-using-microwave-pulses",
      location: "course",
    },
    url: LegacyContentUrl.InvestigatingQuantumHardwareUsingMicrowavePulses,
  },
  {
    image: "quantum-computing-labs.png",
    label: "7. Quantum Computing Labs",
    segment: { cta: "quantum-computing-labs", location: "course" },
    url: LegacyContentUrl.QuantumComputingLabs,
  },
  {
    image: "appendix.png",
    label: "8. Appendix",
    segment: { cta: "appendix", location: "course" },
    url: LegacyContentUrl.Appendix,
  },
  {
    image: "games-and-demos.png",
    label: "9. Games & Demos",
    segment: { cta: "games-and-demos", location: "course" },
    url: LegacyContentUrl.GamesAndDemos,
  },
];

const prerequisites: Prerequisite[] = [];

const imageUrlBase = "/images/learn/course/legacy-content";
</script>
