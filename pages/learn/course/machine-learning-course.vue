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
  pageTitle: "Quantum machine learning course",
  routeName: "machine-learning-course",
});

useHead({
  title: "Quantum machine learning course",
});

const routeName = "machine-learning-course";

const headerTitle = "Quantum machine learning";
const headerDescription = [
  `This course contains around eight hours of content, and
is aimed at self-learners who are comfortable with undergraduate-level
mathematics and quantum computing fundamentals. This course will take you
through key concepts in quantum machine learning, such as parameterized
quantum circuits, training these circuits, and applying them to basic
problems. By the end of the course, you'll understand the state of the field,
and you'll be familiar with recent developments in both supervised and
unsupervised learning such as quantum kernels and general adversarial networks.
This course finishes with a project that you can use to showcase what you've
learnt.`,
  `This course was created by IBM Quantum with the help of Qiskit Advocates
through the Qiskit Advocate Mentoring Program.`,
];

const headerImg = "/images/learn/course/machine-learning-course/header.png";

const startLearningCTA: Link = {
  url: LearnStartLearningUrl.QML,
  label: "Start learning",
  segment: {
    cta: "machine-learning",
    location: "course",
  },
};

const references: string[] = [];
const externalRecommendedReadingsPreamble = "";
const links: Link[] = [];

const prerequisites: Prerequisite[] = [];

const courses: Course[] = [
  {
    image: "introduction.png",
    label: "Introduction",
    segment: { cta: "qml-introduction", location: "course" },
    url: LearnStartLearningUrl.QML,
  },
  {
    image: "parameterized-quantum-circuits.png",
    label: "Parameterized quantum circuits",
    segment: { cta: "parameterized-quantum-circuits", location: "course" },
    url: "https://learn.qiskit.org/course/machine-learning/parameterized-quantum-circuits",
  },
  {
    image: "data-encoding.png",
    label: "Data encoding",
    segment: { cta: "data-encdoing", location: "course" },
    url: "https://learn.qiskit.org/course/machine-learning/data-encoding",
  },
  {
    image: "training-parameterized-quantum-circuits.png",
    label: "Training parameterized quantum circuits",
    segment: { cta: "Describing quantum computers", location: "course" },
    url: "https://learn.qiskit.org/course/machine-learning/training-quantum-circuits",
  },
  {
    image: "supervised-learning.png",
    label: "Supervised learning",
    segment: { cta: "supervised-learning", location: "course" },
    url: "https://learn.qiskit.org/course/machine-learning/supervised-learning",
  },
  {
    image: "variational-classification.png",
    label: "Variational classification",
    segment: { cta: "variational-classification", location: "course" },
    url: "https://learn.qiskit.org/course/machine-learning/variational-classification",
  },
  {
    image: "quantum-feature-maps-kernels.png",
    label: "Quantum feature maps and kernels",
    segment: { cta: "quantum-feature-maps-kernels", location: "course" },
    url: "https://learn.qiskit.org/course/machine-learning/quantum-feature-maps-kernels",
  },
  {
    image: "unsupervised-learning.png",
    label: "Unsupervised learning",
    segment: { cta: "unsupervised-learning", location: "course" },
    url: "https://learn.qiskit.org/course/machine-learning/unsupervised-learning",
  },
  {
    image: "quantum-generative-adversarial-networks.png",
    label: "Quantum generative adversarial networks",
    segment: {
      cta: "quantum-generative-adversarial-networks",
      location: "course",
    },
    url: "https://learn.qiskit.org/course/machine-learning/quantum-generative-adversarial-networks",
  },
  {
    image: "project.png",
    label: "Project",
    segment: { cta: "project", location: "course" },
    url: "https://learn.qiskit.org/course/machine-learning/project",
  },
];

const imageUrlBase = "/images/learn/course/machine-learning-course";
</script>
