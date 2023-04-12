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
import { StartLearningUrl } from "~/constants/appLinks";
import type { RecommendedReading } from "~/types/learn";
import type { Course, Prerequisite } from "constants/learnContent";

definePageMeta({
  layout: "default-max",
  pageTitle: "2021 Qiskit Global Summer School on Quantum Machine Learning",
  routeName: "quantum-computing-and-quantum-learning-2021",
});

useHead({
  title: "2021 Qiskit Global Summer School on Quantum Machine Learning",
});

const routeName = "quantum-computing-and-quantum-learning-2021";

const headerTitle =
  "2021 Qiskit Global Summer School on Quantum Machine Learning";
const headerDescription = [
  `Quantum computing experts and mentors share valuable insights through
  twenty lectures and five applied lab exercises that provide deep-dives
  exploring concepts in quantum computing, focused on the implementations
  of quantum machine learning algorithms in Qiskit.`,
];

const headerImg =
  "/images/learn/summer-school/quantum-computing-and-quantum-learning-2021/header.png";

const startLearningCTA: GeneralLink = {
  url: StartLearningUrl.SummerSchool2021,
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
    author: "Nielsen & Chuang,",
    label: "Quantum Computation and Quantum Information",
    segment: {
      cta: "qc-qi-pdf",
      location: "external-recommended-readings",
    },
  },
  {
    url: "https://www.deeplearningbook.org/",
    author: "Ian Goodfellow et al.,",
    label: "Deep Learning",
    segment: {
      cta: "deep-learning",
      location: "external-recommended-readings",
    },
  },
];

const courses: Course[] = [
  {
    image: "QGSS2021_Lecture1.1_CoverImage.png",
    label: "Vector Spaces, Tensor Products, and Qubits",
    segment: { cta: "lecture-1-1", location: "summer-school-2021" },
    url: "https://learn.qiskit.org/summer-school/2021/lec1-1-vector-spaces-tensor-products-qubits",
  },
  {
    image: "QGSS2021_Lecture1.2_CoverImage.png",
    label: "Introduction to Quantum Circuits",
    segment: { cta: "lecture-1-2", location: "summer-school-2021" },
    url: "https://learn.qiskit.org/summer-school/2021/lec1-2-introduction-quantum-circuits",
  },
  {
    image: "QGSS2021_Lecture2.1_CoverImage.png",
    label: "Simple Quantum Algorithms I",
    segment: { cta: "lecture-2-1", location: "summer-school-2021" },
    url: "https://learn.qiskit.org/summer-school/2021/lec2-1-simple-quantum-algorithms-i",
  },
  {
    image: "QGSS2021_Lecture2.2_CoverImage.png",
    label: "Simple Quantum Algorithms II",
    segment: { cta: "lecture-2-2", location: "summer-school-2021" },
    url: "https://learn.qiskit.org/summer-school/2021/lec2-2-simple-quantum-algorithms-ii",
  },
  {
    image: "QGSS2021_Lecture3.1_CoverImage.png",
    label: "Noise in Quantum Computers pt 1",
    segment: { cta: "lecture-3-1", location: "summer-school-2021" },
    url: "https://learn.qiskit.org/summer-school/2021/lec3-1-noise-quantum-computers-1",
  },
  {
    image: "QGSS2021_Lecture3.2_CoverImage.png",
    label: "Noise in Quantum Computers pt. 2",
    segment: { cta: "lecture-3-2", location: "summer-school-2021" },
    url: "https://learn.qiskit.org/summer-school/2021/lec3-2-noise-quantum-computers-pt-2",
  },
  {
    image: "QGSS2021_Lab1_CoverImage.png",
    label: "Lab 1: Quantum Computing Algorithms and Operations",
    segment: { cta: "lab-1", location: "summer-school-2021" },
    url: "https://learn.qiskit.org/summer-school/2021/lab1-quantum-computing-algorithm-operations",
  },
  {
    image: "QGSS2021_Lecture4.1_CoverImage.png",
    label: "Introduction to Classical Machine Learning",
    segment: { cta: "lecture-4-1", location: "summer-school-2021" },
    url: "https://learn.qiskit.org/summer-school/2021/lec4-1-introduction-classical-machine-learning",
  },
  {
    image: "QGSS2021_Lecture4.2_CoverImage.png",
    label: "Advanced Classical Machine Learning",
    segment: { cta: "lecture-4-2", location: "summer-school-2021" },
    url: "https://learn.qiskit.org/summer-school/2021/lec4-2-advanced-classical-machine-learning",
  },
  {
    image: "QGSS2021_Lecture5.1_CoverImage.png",
    label: "Building a Quantum Classifier",
    segment: { cta: "lecture-5-1", location: "summer-school-2021" },
    url: "https://learn.qiskit.org/summer-school/2021/lec5-1-building-quantum-classifier",
  },
  {
    image: "QGSS2021_Lecture5.2_CoverImage.png",
    label:
      "Introduction to the Quantum Approximate Optimization Algorithm and Applications",
    segment: { cta: "lecture-5-2", location: "summer-school-2021" },
    url: "https://learn.qiskit.org/summer-school/2021/lec5-2-introduction-quantum-approximate-optimization-algorithm-applications",
  },
  {
    image: "QGSS2021_Lab2_CoverImage.png",
    label: "Lab 2: Variational Algorithms",
    segment: { cta: "lab2", location: "summer-school-2021" },
    url: "https://learn.qiskit.org/summer-school/2021/lab2-variational-algorithms",
  },
  {
    image: "QGSS2021_Lecture6.1_CoverImage.png",
    label: "From Variational Classifiers to Linear Classifiers",
    segment: { cta: "lecture-6-1", location: "summer-school-2021" },
    url: "https://learn.qiskit.org/summer-school/2021/lec6-1-from-variational-classifiers-linear-classifiers",
  },
  {
    image: "QGSS2021_Lecture6.2_CoverImage.png",
    label: "Quantum Feature Spaces and Kernels",
    segment: { cta: "lecture-6-2", location: "summer-school-2021" },
    url: "https://learn.qiskit.org/summer-school/2021/lec6-2-quantum-feature-spaces-kernels",
  },
  {
    image: "QGSS2021_Lecture7.1_CoverImage.png",
    label: "Quantum Kernels in Practice",
    segment: { cta: "lecture-7-1", location: "summer-school-2021" },
    url: "https://learn.qiskit.org/summer-school/2021/lec7-1-quantum-kernels-practice",
  },
  {
    image: "QGSS2021_Lab3_CoverImage.png",
    label: "Lab 3: Introduction to Quantum Kernels and Support Vector Machines",
    segment: { cta: "lab3", location: "summer-school-2021" },
    url: "https://learn.qiskit.org/summer-school/2021/lab3-introduction-quantum-kernels-support-vector-machines",
  },
  {
    image: "QGSS2021_Lecture8.1_CoverImage.png",
    label: "Introduction and Applications of Quantum Models",
    segment: { cta: "lecture-8-1", location: "summer-school-2021" },
    url: "https://learn.qiskit.org/summer-school/2021/lec8-1-introduction-applications-quantum-models",
  },
  {
    image: "QGSS2021_Lecture8.2_CoverImage.png",
    label: "Barren Plateaus, Trainability Issues, and How to Avoid Them",
    segment: { cta: "lecture-8-2", location: "summer-school-2021" },
    url: "https://learn.qiskit.org/summer-school/2021/lec8-2-barren-plateaus-trainability-issues-how-avoid-them",
  },
  {
    image: "QGSS2021_Lab4_CoverImage.png",
    label: "Lab 4: Introduction to Training Quantum Circuits",
    segment: { cta: "lab4", location: "summer-school-2021" },
    url: "https://learn.qiskit.org/summer-school/2021/lab4-introduction-training-quantum-circuits",
  },
  {
    image: "QGSS2021_Lecture9.1_CoverImage.png",
    label: "Introduction to Quantum Hardware",
    segment: { cta: "lecture-9-1", location: "summer-school-2021" },
    url: "https://learn.qiskit.org/summer-school/2021/lec9-1-introduction-quantum-hardware",
  },
  {
    image: "QGSS2021_Lecture9.2_CoverImage.png",
    label: "Hardware Efficient Ansatze for Quantum Machine Learning",
    segment: { cta: "lecture-9-2", location: "summer-school-2021" },
    url: "https://learn.qiskit.org/summer-school/2021/lec9-2-hardware-efficient-ansatze-quantum-machine-learning",
  },
  {
    image: "QGSS2021_Lab5_CoverImage.png",
    label:
      "Lab 5: Introduction to Hardware Efficient Ansatze for Quantum Machine Learning",
    segment: { cta: "lab5", location: "summer-school-2021" },
    url: "https://learn.qiskit.org/summer-school/2021/lab5-introduction-hardware-efficient-ansatze-quantum-machine-learning",
  },
  {
    image: "QGSS2021_Lecture10.1_CoverImage.png",
    label:
      "Advanced QML Algorithms: Quantum Boltzmann Machines and Quantum Generative Adversarial Networks",
    segment: { cta: "lecture-10-1", location: "summer-school-2021" },
    url: "https://learn.qiskit.org/summer-school/2021/lec10-1-advanced-qml-algorithms",
  },
  {
    image: "QGSS2021_Lecture10.2_CoverImage.png",
    label:
      "The Capacity and Power of Quantum Machine Learning Models & the Future of Quantum Machine Learning",
    segment: { cta: "lecture-10-2", location: "summer-school-2021" },
    url: "https://learn.qiskit.org/summer-school/2021/lec10-2-the-capacity-power-quantum-machine-learning-models-future-quantum-machine-learning",
  },
];

const prerequisites: Prerequisite[] = [
  {
    title: "Introduction to Quantum Computing and Quantum Hardware",
    description:
      "The Qiskit Global Summer School 2020 coursework, lab, and lecture materials are available online.",
    segment: {
      cta: "intro-qc-qh-21",
      location: "related-material",
    },
    url: "/learn/summer-school/introduction-to-quantum-computing-and-quantum-hardware-2020",
  },
  {
    title: "Python Programming",
    description:
      "Python is a programming language where you don't need to compile. You can just run it line by line...",
    segment: {
      cta: "python-programming",
      location: "related-material",
    },
    url: "https://learn.qiskit.org/course/ch-prerequisites/introduction-to-python-and-jupyter-notebooks",
  },
  {
    title: "Linear Algebra",
    description:
      "Linear algebra is the language of quantum computing. Develop a good understanding of the basic mathematical concepts that linear algebra is built upon.",
    segment: {
      cta: "linear-algebra",
      location: "related-material",
    },
    url: "https://learn.qiskit.org/course/ch-appendix/an-introduction-to-linear-algebra-for-quantum-computing",
  },
  {
    title: "Probability Theory — Random Variables and Distributions",
    description:
      "Probabilities help us deal with unknowns. Quantum mechanics is an extension of probability theory, so being comfortable with probabilities will make your quantum computing journey easier.",
    segment: {
      cta: "probability-theory",
      location: "related-material",
    },
    url: "https://www.khanacademy.org/math/statistics-probability/random-variables-stats-library",
  },
];

const imageUrlBase =
  "/images/learn/summer-school/quantum-computing-and-quantum-learning-2021";
</script>
