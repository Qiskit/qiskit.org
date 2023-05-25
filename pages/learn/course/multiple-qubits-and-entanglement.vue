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
import type { RecommendedReading } from "~/types/learn";
import type { Link } from "~/types/links";
import type { Course, Prerequisite } from "constants/learnContent";

enum MultipleQubitsAndEntanglementUrl {
  Introduction = "https://learn.qiskit.org/course/ch-gates/introduction",
  MultipleQubitsAndEntangledStates = "https://learn.qiskit.org/course/ch-gates/multiple-qubits-and-entangled-states",
  PhaseKickback = "https://learn.qiskit.org/course/ch-gates/phase-kickback",
  BasicCircuitIdentities = "https://learn.qiskit.org/course/ch-gates/basic-circuit-identities",
  ProvingUniversality = "https://learn.qiskit.org/course/ch-gates/proving-universality",
  ClassicalComputationOnAQuantumComputer = "https://learn.qiskit.org/course/ch-gates/classical-computation-on-a-quantum-computer",
}

definePageMeta({
  layout: "default-max",
  pageTitle: "Multiple Qubits and Entanglement",
  routeName: "multiple-qubits-and-entanglement",
});

useHead({
  title: "Multiple Qubits and Entanglement",
});

const routeName = "multiple-qubits-and-entanglement";

const headerTitle = "Multiple Qubits and Entanglement";
const headerDescription = [
  "We've seen some interesting effects with isolated qubits and single qubit gates, but the true power of quantum computing comes from interactions between qubits. In this section we will introduce multiple qubit gates and explore the interesting behaviours of multi-qubit systems.",
];

const headerImg =
  "/images/learn/course/multiple-qubits-and-entanglement/multiple-qubits-and-entanglement.png";

const startLearningCTA: Link = {
  url: MultipleQubitsAndEntanglementUrl.Introduction,
  label: "Start learning",
  segment: {
    cta: "introduction",
    location: "header",
  },
};

const references: string[] = [];
const externalRecommendedReadingsPreamble = "";
const links: RecommendedReading[] = [
  {
    url: "http://mmrc.amss.cas.cn/tlb/201702/W020170224608149940643.pdf",
    author: "Michael Nielsen, et al.,",
    label: "Quantum Computation and Quantum Information (Chapter 1)",
    segment: {
      cta: "quantum-computation-and-quantum-information",
      location: "external-recommended-readings",
    },
  },
  {
    url: "http://mmrc.amss.cas.cn/tlb/201702/W020170224608149125645.pdf",
    author: "Phillip Kaye, et al.,",
    label: "An Introduction to Quantum Computing (Chapters 1-3)",
    segment: {
      cta: "an-introduction-to-quantum-computing",
      location: "external-recommended-readings",
    },
  },
  {
    url: "https://homepages.cwi.nl/~rdewolf/qcnotes.pdf",
    author: "Ronald de Wolf,",
    label: "Quantum Computing: Lecture Notes (Chapters 1 and 2)",
    segment: {
      cta: "quantum-computing-lecture-notes",
      location: "external-recommended-readings",
    },
  },
  {
    url: "http://cleve.iqc.uwaterloo.ca/resources/QIC-710-F21/Qic710Primer.pdf",
    author: "Richard Cleve,",
    label: "Quantum Information Processing — A Primer for Beginners",
    segment: {
      cta: "quantum-information-processing",
      location: "external-recommended-readings",
    },
  },
];

const courses: Course[] = [
  {
    image: "introduction.png",
    label: "Introduction",
    segment: { cta: "introduction", location: "course" },
    url: MultipleQubitsAndEntanglementUrl.Introduction,
  },
  {
    image: "multiple-qubits-and-entangled-states.png",
    label: "Multiple Qubits and Entangled States",
    segment: {
      cta: "multiple-qubits-and-entangled-states",
      location: "course",
    },
    url: MultipleQubitsAndEntanglementUrl.MultipleQubitsAndEntangledStates,
  },
  {
    image: "phase-kickback.png",
    label: "Phase Kickback",
    segment: { cta: "phase-kickback", location: "course" },
    url: MultipleQubitsAndEntanglementUrl.PhaseKickback,
  },
  {
    image: "basic-circuit-identities.png",
    label: "Basic Circuit Identities",
    segment: { cta: "basic-circuit-identities", location: "course" },
    url: MultipleQubitsAndEntanglementUrl.BasicCircuitIdentities,
  },
  {
    image: "proving-universality.png",
    label: "Proving Universality",
    segment: { cta: "proving-universality", location: "course" },
    url: MultipleQubitsAndEntanglementUrl.ProvingUniversality,
  },
  {
    image: "classical-computation-on-a-quantum-computer.png",
    label: "Classical Computation on a Quantum Computer",
    segment: {
      cta: "classical-computation-on-a-quantum-computer",
      location: "course",
    },
    url: MultipleQubitsAndEntanglementUrl.ClassicalComputationOnAQuantumComputer,
  },
];

const prerequisites: Prerequisite[] = [
  {
    title: "Quantum States and Qubits",
    description:
      "This chapter introduces the computing concepts that we'll explore in later chapters, then introduces basic quantum concepts.",
    segment: {
      cta: "quantum-states-and-qubits",
      location: "prerequisite-material",
    },
    url: "https://learn.qiskit.org/course/ch-states/introduction",
  },
  {
    title: "Python and Jupyter Notebooks",
    description:
      "Python is a programming language where you don't need to compile. You can just run it line by line...",
    segment: {
      cta: "python-and-jupyter-notebooks",
      location: "prerequisite-material",
    },
    url: "https://learn.qiskit.org/course/ch-prerequisites/introduction-to-python-and-jupyter-notebooks",
  },
];

const imageUrlBase = "/images/learn/course/multiple-qubits-and-entanglement";
</script>
