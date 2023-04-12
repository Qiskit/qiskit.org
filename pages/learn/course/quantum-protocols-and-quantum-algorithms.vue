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
import type { GeneralLink } from "~/constants/appLinks";
import { QuantumProtocolsAndQuantumAlgorithmsUrl } from "~/constants/appLinks";
import type { RecommendedReading } from "~/types/learn";
import type { Course, Prerequisite } from "constants/learnContent";

definePageMeta({
  layout: "default-max",
  pageTitle: "Quantum Protocols and Quantum Algorithms",
  routeName: "quantum-protocols-and-quantum-algorithms",
});

useHead({
  title: "Quantum Protocols and Quantum Algorithms",
});

const routeName = "quantum-protocols-and-quantum-algorithms";

const headerTitle = "Quantum Protocols and Quantum Algorithms";
const headerDescription = [
  "So far, we've seen various quantum gates and operations, and we've explored some interesting properties of these gates. Each of these pages shows how we can combine quantum operations into a quantum algorithm that outperforms their classical counterpart. As a bonus, some of these algorithms are actually useful too!",
];

const headerImg =
  "/images/learn/course/quantum-protocols-and-quantum-algorithms/quantum-protocols-and-quantum-algorithms.png";

const startLearningCTA: GeneralLink = {
  url: QuantumProtocolsAndQuantumAlgorithmsUrl.DefiningQuantumCircuits,
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
    label: "Quantum Computation and Quantum Information (Chapters 4-6)",
    segment: {
      cta: "quantum-computation-and-quantum-information-ch-4-6",
      location: "external-recommended-readings",
    },
  },
  {
    url: "http://mmrc.amss.cas.cn/tlb/201702/W020170224608149125645.pdf",
    author: "Phillip Kaye, et al.,",
    label: "An Introduction to Quantum Computing (Chapters 5-8)",
    segment: {
      cta: "quantum-computing-lecture-notes",
      location: "external-recommended-readings",
    },
  },
  {
    url: "http://cleve.iqc.uwaterloo.ca/resources/QIC-710-F21/Qic710QuantumAlgorithmsPart1.pdf",
    author: "Richard Cleve,",
    label: "Quantum Information Processing — Quantum Algorithms I",
    segment: {
      cta: "quantum-information-processing",
      location: "external-recommended-readings",
    },
  },
  {
    url: "http://cleve.iqc.uwaterloo.ca/resources/QIC-710-F21/Qic710QuantumAlgorithmsPart2.pdf",
    author: "Richard Cleve,",
    label: "Quantum Information Processing — Quantum Algorithms II",
    segment: {
      cta: "quantum-information-processing",
      location: "external-recommended-readings",
    },
  },
  {
    url: "http://cleve.iqc.uwaterloo.ca/resources/QIC-710-F21/Qic710QuantumAlgorithmsPart3.pdf",
    author: "Richard Cleve,",
    label: "Quantum Information Processing — Quantum Algorithms III",
    segment: {
      cta: "quantum-information-processing",
      location: "external-recommended-readings",
    },
  },
];

const courses: Course[] = [
  {
    image: "defining-quantum-circuits.png",
    label: "Defining Quantum Circuits",
    segment: { cta: "defining-quantum-circuits", location: "course" },
    url: QuantumProtocolsAndQuantumAlgorithmsUrl.DefiningQuantumCircuits,
  },
  {
    image: "deutsch-jozsa-algorithm.png",
    label: "Deutsch-Jozsa Algorithm",
    segment: { cta: "deutsch-jozsa-algorithm", location: "course" },
    url: QuantumProtocolsAndQuantumAlgorithmsUrl.DeutschJozsaAlgorithm,
  },
  {
    image: "bernstein-vazirani-algorithm.png",
    label: "Bernstein-Vazirani Algorithm",
    segment: { cta: "bernstein-vazirani-algorithm", location: "course" },
    url: QuantumProtocolsAndQuantumAlgorithmsUrl.BernsteinVaziraniAlgorithm,
  },
  {
    image: "simons-algorithm.png",
    label: "Simon’s Algorithm",
    segment: { cta: "simons-algorithm", location: "course" },
    url: QuantumProtocolsAndQuantumAlgorithmsUrl.SimonsAlgorithm,
  },
  {
    image: "quantum-fourier-transformation.png",
    label: "Quantum Fourier Transformation",
    segment: { cta: "quantum-fourier-transformation", location: "course" },
    url: QuantumProtocolsAndQuantumAlgorithmsUrl.QuantumFourierTransformation,
  },
  {
    image: "quantum-phase-estimation.png",
    label: "Quantum Phase Estimation",
    segment: { cta: "quantum-phase-estimation", location: "course" },
    url: QuantumProtocolsAndQuantumAlgorithmsUrl.QuantumPhaseEstimation,
  },
  {
    image: "shors-algorithm.png",
    label: "Shor’s Algorithm",
    segment: { cta: "shors-algorithm", location: "course" },
    url: QuantumProtocolsAndQuantumAlgorithmsUrl.ShorsAlgorithm,
  },
  {
    image: "grovers-algorithm.png",
    label: "Grover’s Algorithm",
    segment: { cta: "grovers-algorithm", location: "course" },
    url: QuantumProtocolsAndQuantumAlgorithmsUrl.GroversAlgorithm,
  },
  {
    image: "quantum-counting.png",
    label: "Quantum Counting",
    segment: { cta: "quantum-counting", location: "course" },
    url: QuantumProtocolsAndQuantumAlgorithmsUrl.QuantumCounting,
  },
  {
    image: "quantum-teleportation.png",
    label: "Quantum Teleportation",
    segment: { cta: "quantum-teleportation", location: "course" },
    url: QuantumProtocolsAndQuantumAlgorithmsUrl.QuantumTeleportation,
  },
  {
    image: "superdense-coding.png",
    label: "Superdense Coding",
    segment: { cta: "superdense-coding", location: "course" },
    url: QuantumProtocolsAndQuantumAlgorithmsUrl.SuperdenseCoding,
  },
  {
    image: "quantum-key-distribution.png",
    label: "Quantum Key Distribution",
    segment: { cta: "quantum-key-distribution", location: "course" },
    url: QuantumProtocolsAndQuantumAlgorithmsUrl.QuantumKeyDistribution,
  },
];

const prerequisites: Prerequisite[] = [
  {
    title: "Multiple Qubits and Entanglement",
    description:
      "With the basics down, this chapter explores the consequences of these new quantum effects, and sets us up with tools to understand quantum algorithms.",
    segment: {
      cta: "multiple-qubits-and-entanglement",
      location: "prerequisite-material",
    },
    url: "https://learn.qiskit.org/course/ch-gates/introduction",
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

const imageUrlBase =
  "/images/learn/course/quantum-protocols-and-quantum-algorithms";
</script>
