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
import { GamesAndDemos } from "~/constants/appLinks";
import type { Course, Prerequisite } from "constants/learnContent";

definePageMeta({
  layout: "default-max",
  pageTitle: "Games and demos",
  routeName: "games-and-demos",
});

useHead({
  title: "Games and demos",
});

const routeName = "games-and-demos";

const headerTitle = "Games and demos";
const headerDescription = [
  "Qiskit, and the Qiskit Textbook website, are interactive learning environments. Unlike with traditional, ink-and-paper textbooks, you can mess around with quantum effects to strengthen your knowledge. These pages contain cool experiments with Qiskit that don't belong in a course.",
];
const headerImg = "/images/learn/course/games-and-demos/games-and-demos.png";

const startLearningCTA: GeneralLink = {
  url: GamesAndDemos.HelloQiskit,
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
    image: "hello-qiskit.png",
    label: "Hello Qiskit",
    segment: {
      cta: "hello-qiskit",
      location: "course",
    },
    url: GamesAndDemos.HelloQiskit,
  },
  {
    image: "estimating-pi-using-quantum-phase-estimation-algorithm.png",
    label: "Estimating pi using Quantum Phase Estimation Algorithm",
    segment: {
      cta: "estimating-pi-using-quantum-phase-estimation-algorithm",
      location: "course",
    },
    url: GamesAndDemos.EstimatingPiUsingQPEA,
  },
  {
    image: "local-reality-and-the-chsh-inequality.png",
    label: "Local Reality and the CHSH inequality",
    segment: {
      cta: "local-reality-and-the-chsh-inequality",
      location: "course",
    },
    url: GamesAndDemos.LocalRealityAndTheChshInequality,
  },
  {
    image: "quantum-coin-game.png",
    label: "Quantum Coin Game",
    segment: {
      cta: "coin-game",
      location: "course",
    },
    url: GamesAndDemos.QuantumCoinGame,
  },
  {
    image: "variational-quantum-regression.png",
    label: "Variational Quantum Regression",
    segment: {
      cta: "variational-quantum-regression",
      location: "course",
    },
    url: GamesAndDemos.VariationalQuantumRegression,
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

const imageUrlBase = "/images/learn/course/games-and-demos";
</script>
