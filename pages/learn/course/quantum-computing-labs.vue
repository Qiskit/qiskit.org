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
import { QuantumComputingLabs } from "~/constants/appLinks";
import type { Course, Prerequisite } from "constants/learnContent";

definePageMeta({
  layout: "default-max",
  pageTitle: "Quantum Computing Labs",
  routeName: "quantum-computing-labs",
});

useHead({
  title: "Quantum Computing Labs",
});

const routeName = "quantum-computing-labs";

const headerTitle = "Quantum Computing Labs";
const headerDescription = [
  "These pages are hands-on exercises that interact with IBM Quantum's real quantum systems. Aimed at late-undergraduate / early-graduate courses, these lab modules start cover basic quantum circuits, to exploring core algorithms such as Grover search and Shor's algorithm. These pages tackle the limitations of today's quantum computers, and ways to account for them.",
];

const headerImg = "/images/learn/course/quantum-computing-labs/quantum-lab.png";

const startLearningCTA: GeneralLink = {
  url: QuantumComputingLabs.Lab1,
  label: "Start learning",
  segment: {
    cta: "introduction",
    location: "header",
  },
};

const references: string[] = [];
const externalRecommendedReadingsPreamble = "";
const links: GeneralLink[] = [];

const courses: Course[] = [
  {
    image: "lab-1.png",
    label: "Lab 1 Quantum Circuits",
    segment: { cta: "lab-1", location: "course" },
    url: QuantumComputingLabs.Lab1,
  },
  {
    image: "lab-2.png",
    label: "Lab 2 Single Qubit Gates",
    segment: { cta: "lab-2", location: "course" },
    url: QuantumComputingLabs.Lab2,
  },
  {
    image: "lab-3.png",
    label: "Lab 3 Quantum Measurments",
    segment: { cta: "lab-3", location: "course" },
    url: QuantumComputingLabs.Lab3,
  },
  {
    image: "lab-4.png",
    label: "Lab 4 Bell Circuit & GHZ Circuit",
    segment: { cta: "lab-4", location: "course" },
    url: QuantumComputingLabs.Lab4,
  },
  {
    image: "lab-5.png",
    label: "Lab 5 Accuracy of Quantum Phase",
    segment: { cta: "lab-5", location: "course" },
    url: QuantumComputingLabs.Lab5,
  },
  {
    image: "lab-6.png",
    label: "Lab 6 Iterative Quantum Phase Estimation",
    segment: { cta: "lab-6", location: "course" },
    url: QuantumComputingLabs.Lab6,
  },
  {
    image: "lab-7.png",
    label: "Lab 7 Scalable Shor’s Algorithm",
    segment: { cta: "lab-7", location: "course" },
    url: QuantumComputingLabs.Lab7,
  },
  {
    image: "lab-8.png",
    label: "Lab 8 Grover’s Search With an Unknown Number of Solutions",
    segment: { cta: "lab-8", location: "course" },
    url: QuantumComputingLabs.Lab8,
  },
  {
    image: "lab-9.png",
    label: "Lab 9 Quantum Simulation as a Search Algorithm",
    segment: { cta: "lab-9", location: "course" },
    url: QuantumComputingLabs.Lab9,
  },
];

const prerequisites: Prerequisite[] = [
  {
    title: "Quantum Protocols and Quantum Algorithms",
    description:
      "In this chapter, we use quantum effects to build powerful algorithms, starting from simple proof-of-concept algorithms, through to Shor's famous factoring algorithm (and beyond).",
    segment: {
      cta: "quantum-protocols-and-quantum-algorithms",
      location: "prerequisite-material",
    },
    url: "https://learn.qiskit.org/course/ch-algorithms/quantum-circuits",
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

const imageUrlBase = "/images/learn/course/quantum-computing-labs";
</script>
