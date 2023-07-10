<template>
  <LearnCourse
    :courses="courses"
    :external-recommended-readings-preamble="
      externalRecommendedReadingsPreamble
    "
    :header-title="title"
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
import { Course, Prerequisite } from "constants/learnContent";
import { RecommendedReading } from "~/types/learn";
import { TextLink } from "~/types/links";

enum QuantumStatesAndQubitsUrl {
  Introduction = "https://learn.qiskit.org/course/ch-states/introduction",
  AtomsOfComputation = "https://learn.qiskit.org/course/ch-states/the-atoms-of-computation",
  RepresentingQubitStates = "https://learn.qiskit.org/course/ch-states/representing-qubit-states",
  SingleQubitGates = "https://learn.qiskit.org/course/ch-states/single-qubit-gates",
  CaseForQuantum = "https://learn.qiskit.org/course/ch-states/the-case-for-quantum-computers",
}

definePageMeta({
  layout: "default-max",
  pageTitle: "Quantum States and Qubits",
  routeName: "quantum-states-and-qubits",
});

const config = useRuntimeConfig();

// SEO specific definitions
const title = "Quantum States and Qubits";
const description =
  "This chapter introduces the computing concepts that we'll explore in later chapters, then introduces basic quantum concepts.";
const image = `${config.public.siteUrl}/images/learn/course/quantum-states-and-qubits/bloch-sphere.png`;
const pageUrl = `${config.public.siteUrl}/learn/course/quantum-states-and-qubits`;

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: image,
  ogImageAlt: title,
  ogUrl: pageUrl,
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterDescription: description,
});

const routeName = "quantum-states-and-qubits";

const headerDescription = [
  "If you think quantum mechanics sounds challenging, you’re not alone. Our intuitions come from day-to-day experiences, and so are better at understanding the behavior of balls and bananas than atoms or electrons. Though quantum objects can seem random and chaotic at first, they just follow a different set of rules. Once we know what those rules are, we can use them to create new and powerful technology. Quantum computing will be the most revolutionary example of this.",
];
const headerImg =
  "/images/learn/course/quantum-states-and-qubits/bloch-sphere.png";

const startLearningCTA: TextLink = {
  url: QuantumStatesAndQubitsUrl.Introduction,
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
      cta: "quantum-computation-and-quantum-information-ch-1",
      location: "external-recommended-readings",
    },
  },
  {
    url: "http://mmrc.amss.cas.cn/tlb/201702/W020170224608149125645.pdf",
    author: "Phillip Kaye, et al.,",
    label: "An Introduction to Quantum Computing (Chapters 1-3)",
    segment: {
      cta: "introduction-to-quantum-computing-ch-1-3",
      location: "external-recommended-readings",
    },
  },
  {
    url: "https://arxiv.org/abs/1907.09415",
    author: "Ronald de Wolf,",
    label: "Quantum Computing: Lecture Notes (Chapters 1 and 2)",
    segment: {
      cta: "mlmastery-linear-algebra",
      location: "external-recommended-readings",
    },
  },
  {
    url: "http://cleve.iqc.uwaterloo.ca/resources/QIC-710-F21/Qic710Primer.pdf",
    author: "Richard Cleve,",
    label: "Quantum Information Processing — A Primer for Beginners",
    segment: {
      cta: "mlmastery-linear-algebra",
      location: "external-recommended-readings",
    },
  },
];

const courses: Course[] = [
  {
    image: "introduction.png",
    label: "Introduction",
    segment: { cta: "introduction", location: "course" },
    url: QuantumStatesAndQubitsUrl.Introduction,
  },
  {
    image: "atoms-of-computation.png",
    label: "The Atoms of Computation",
    segment: { cta: "atoms-of-computation", location: "course" },
    url: QuantumStatesAndQubitsUrl.AtomsOfComputation,
  },
  {
    image: "representing-qubit-states.png",
    label: "Representing Qubit States",
    segment: { cta: "representing-qubit-states", location: "course" },
    url: QuantumStatesAndQubitsUrl.RepresentingQubitStates,
  },
  {
    image: "single-qubit-gates.png",
    label: "Single Qubit Gates",
    segment: { cta: "single-qubit-gates", location: "course" },
    url: QuantumStatesAndQubitsUrl.SingleQubitGates,
  },
  {
    image: "case-for-quantum-computers.png",
    label: "The Case for Quantum",
    segment: { cta: "case-for-quantum-computers", location: "course" },
    url: QuantumStatesAndQubitsUrl.CaseForQuantum,
  },
];

const prerequisites: Prerequisite[] = [
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

const imageUrlBase = "/images/learn/course/quantum-states-and-qubits";
</script>
