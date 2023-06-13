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
import type { Link } from "~/types/links";
import type { Course, Prerequisite } from "constants/learnContent";

definePageMeta({
  layout: "default-max",
  pageTitle: "2022 Qiskit global summer school on quantum simulation",
  routeName: "quantum-simulation-summer-school-2022",
});

useHead({
  title: "2022 Qiskit global summer school on quantum simulation",
});

const routeName = "quantum-simulation-summer-school-2022";

const headerTitle = "2022 Qiskit global summer school on quantum simulation";
const headerDescription = [
  `This summer school provides a focused introduction to quantum computing
  and its applications to quantum simulation, with a specific focus on
  quantum chemistry. These lectures were first released as part of a two-week
  intensive summer school in July 2022. This course contains 9 lectures
  (split over 19 videos totalling ~17 hours) and 4 labs.`,
];

const headerImg =
  "/images/learn/summer-school/quantum-simulation-summer-school-2022/header.png";

const startLearningCTA: Link = {
  url: LearnStartLearningUrl.SummerSchool2022,
  label: "Start learning",
  segment: {
    cta: "introduction",
    location: "header",
  },
};

const courses: Course[] = [
  {
    image: "QGSS-Lec1-CoverImage.png",
    label: "History of Quantum Computing and Motivation for Quantum Simulation",
    segment: { cta: "lecture-1", location: "summer-school-2022" },
    url: "https://learn.qiskit.org/summer-school/2022/history-quantum-computing-motivation-quantum-simulation",
  },
  {
    image: "QGSS-Lec2-CoverImage.png",
    label:
      "Introduction to Linear Algebra, Prerequisite Mathematics, and Circuit Composition",
    segment: { cta: "lecture-2", location: "summer-school-2022" },
    url: "https://learn.qiskit.org/summer-school/2022/introduction-linear-algebra-prerequisite-mathematics-circuit-composition",
  },
  {
    image: "QGSS-Lab1-CoverImage.png",
    label: "Lab 1",
    segment: { cta: "lab-1", location: "summer-school-2022" },
    url: "https://learn.qiskit.org/summer-school/2022/lab-1",
  },
  {
    image: "QGSS-Lec3-CoverImage.png",
    label: "Hamiltonian Time Evolution",
    segment: { cta: "lecture-3", location: "summer-school-2022" },
    url: "https://learn.qiskit.org/summer-school/2022/hamiltonian-time-evolution",
  },
  {
    image: "QGSS-Lec4-CoverImage.png",
    label: "Simulation Problems",
    segment: { cta: "lecture-4", location: "summer-school-2022" },
    url: "https://learn.qiskit.org/summer-school/2022/simulation-problems",
  },
  {
    image: "QGSS-Lab2-CoverImage.png",
    label: "Lab 2",
    segment: { cta: "lab-2", location: "summer-school-2022" },
    url: "https://learn.qiskit.org/summer-school/2022/lab-2",
  },
  {
    image: "QGSS-Lec5-CoverImage.png",
    label: "Noisy Real Hardware, Noise in Quantum Computers",
    segment: { cta: "lecture-5", location: "summer-school-2022" },
    url: "https://learn.qiskit.org/summer-school/2022/noisy-real-hardware-noise-quantum-computers",
  },
  {
    image: "QGSS-Lec6-CoverImage.png",
    label:
      "Broad Overview of Quantum Chemistry Simulation and Why it is a Challenge",
    segment: { cta: "lecture-6", location: "summer-school-2022" },
    url: "https://learn.qiskit.org/summer-school/2022/broad-overview-quantum-chemistry-simulation-why-is-challenge",
  },
  {
    image: "QGSS-Lab3-CoverImage.png",
    label: "Lab 3",
    segment: { cta: "lab-3", location: "summer-school-2022" },
    url: "https://learn.qiskit.org/summer-school/2022/lab-3",
  },
  {
    image: "QGSS-Lec7-CoverImage.png",
    label: "Methods for Quantum Simulation",
    segment: { cta: "lecture-7", location: "summer-school-2022" },
    url: "https://learn.qiskit.org/summer-school/2022/methods-quantum-simulation",
  },
  {
    image: "QGSS-Lec8-CoverImage.png",
    label: "Quantum Static Simulation",
    segment: { cta: "lecture-8", location: "summer-school-2022" },
    url: "https://learn.qiskit.org/summer-school/2022/quantum-static-simulation",
  },
  {
    image: "QGSS-Lab4-CoverImage.png",
    label: "Lab 4",
    segment: { cta: "lab-4", location: "summer-school-2022" },
    url: "https://learn.qiskit.org/summer-school/2022/lab-4",
  },
  {
    image: "QGSS-Lec9-CoverImage.png",
    label: "Quantum Dynamics",
    segment: { cta: "lecture-9", location: "summer-school-2022" },
    url: "https://learn.qiskit.org/summer-school/2022/quantum-dynamics",
  },
];

const references: string[] = [];
const externalRecommendedReadingsPreamble = "";
const links: Link[] = [];

const prerequisites: Prerequisite[] = [
  {
    title: "Multiplying matrices by matrices",
    description:
      "In order to make the best out of these lectures, we recommend you are comfortable with linear algebra. In this short video series, Sal Khan talks you through matrix multiplication.",
    segment: {
      cta: "khan-academy-matrix-multiplication",
      location: "related-material",
    },
    url: "https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:matrices/x9e81a4f98389efdf:multiplying-matrices-by-matrices/v/matrix-multiplication-intro",
  },
  {
    title: "Get started with Qiskit and Jupyter",
    description:
      "These pages will help you set up your environement to work with Qiskit, and give you a quick overview of Python and Jupyter notebooks.",
    segment: {
      cta: "ch-prerequisites",
      location: "related-material",
    },
    url: "https://learn.qiskit.org/course/ch-prerequisites/",
  },
  {
    title: "Introduction course (optional)",
    description:
      "This short course for audiences of all backgrounds fills you in on key concepts in on the basic ideas behind quantum computing.",
    segment: {
      cta: "introduction-course",
      location: "related-material",
    },
    url: "https://qiskit.org/learn/course/introduction-course",
  },
];

const imageUrlBase =
  "/images/learn/summer-school/quantum-simulation-summer-school-2022";
</script>
