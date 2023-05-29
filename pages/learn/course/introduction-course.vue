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
import { LearnStartLearningUrl } from "~/constants/links";
import type { RecommendedReading } from "~/types/learn";
import type { Link } from "~/types/links";
import type { Course, Prerequisite } from "constants/learnContent";

definePageMeta({
  layout: "default-max",
  pageTitle: "Introduction course",
  routeName: "introduction-course",
});

useHead({
  title: "Introduction course",
});

const routeName = "introduction-course";

const headerTitle = "Introduction to Quantum Computing";
const headerDescription = [
  `This short course contains around 3 hours of content and is
  aimed at self-learners from all backgrounds (technical and
  non-technical). The aim of this course is to give a solid
  understanding of the principles behind quantum computing,
  focusing on developing intuition. After this course, you will
  have a fair understanding of quantum computing and Qiskit, as well
  as a short project demonstrating it. You should then be able to
  jump straight into many of the other courses in this
  textbook when they are ready, including traditional algorithms and
  protocols, near term quantum algorithms, and quantum machine
  learning.`,
];

const headerImg = "/images/learn/course/introduction-course/header.png";

const startLearningCTA: Link = {
  url: LearnStartLearningUrl.Introduction,
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
    url: "https://math.mit.edu/~gs/linearalgebra/",
    author: "Gilbert Strang,",
    label: "Introduction to Linear Algebra",
    segment: {
      cta: "introduction-to-linear-algebra",
      location: "external-recommended-readings",
    },
  },
  {
    url: "https://machinelearningmastery.com/gentle-introduction-linear-algebra/",
    author: "Jason Brownlee,",
    label: "A Gentle Introduction to Linear Algebra",
    segment: {
      cta: "gentle-introduction-to-linear-algebra",
      location: "external-recommended-readings",
    },
  },
];

const courses: Course[] = [
  {
    image: "why-quantum-computing-preview.png",
    label: "Why quantum computing?",
    segment: { cta: "why-quantum-computing", location: "course" },
    url: LearnStartLearningUrl.Introduction,
  },
  {
    image: "the-atoms-of-computation-preview.png",
    label: "The atoms of computation",
    segment: { cta: "the-atoms-of-computation", location: "course" },
    url: "https://learn.qiskit.org/course/introduction/the-atoms-of-computation",
  },
  {
    image: "what-is-quantum-preview.png",
    label: "What is quantum?",
    segment: { cta: "what-is-quantum", location: "course" },
    url: "https://learn.qiskit.org/course/introduction/what-is-quantum",
  },
  {
    image: "describing-quantum-computers-preview.png",
    label: "Describing quantum computers",
    segment: { cta: "describing-quantum-computers", location: "course" },
    url: "https://learn.qiskit.org/course/introduction/describing-quantum-computers",
  },
  {
    image: "entangled-states-preview.png",
    label: "Entangled states",
    segment: { cta: "entangled-states", location: "course" },
    url: "https://learn.qiskit.org/course/introduction/entangled-states",
  },
  {
    image: "visualizing-entanglement-preview.png",
    label: "Visualizing Entanglement",
    segment: { cta: "visualizing-entanglement-preview", location: "course" },
    url: "https://learn.qiskit.org/course/introduction/visualizing-entanglement",
  },
  {
    image: "grovers-search-algorithm-preview.png",
    label: "Grover’s search algorithm",
    segment: { cta: "grovers-search-algorithm", location: "course" },
    url: "https://learn.qiskit.org/course/introduction/grovers-search-algorithm",
  },
  {
    image: "project-preview.png",
    label: "Project",
    segment: { cta: "project", location: "course" },
    url: "https://learn.qiskit.org/course/introduction/project",
  },
];

const prerequisites: Prerequisite[] = [
  {
    title: "Setting Up Your Environment",
    description:
      "This is a comprehensive guide for setting up your environment on your personal computer for working with Qiskit Textbook.",
    segment: {
      cta: "setting-up-your-environment",
      location: "prerequisite-material",
    },
    url: "https://learn.qiskit.org/course/ch-prerequisites/environment-setup-guide-to-work-with-qiskit-textbook",
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

const imageUrlBase = "/images/learn/course/introduction-course";
</script>
