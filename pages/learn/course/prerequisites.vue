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

enum PrerequisitesUrl {
  SettingUp = "https://learn.qiskit.org/course/ch-prerequisites/environment-setup-guide-to-work-with-qiskit-textbook",
  Introduction = "https://learn.qiskit.org/course/ch-prerequisites/introduction-to-python-and-jupyter-notebooks",
}

definePageMeta({
  layout: "default-max",
  pageTitle: "Prerequisites",
  routeName: "prerequisites",
});

useHead({
  title: "Prerequisites",
});

const routeName = "prerequisites";

const headerTitle = "Prerequisites";
const headerDescription = [
  "This is a comprehensive guide for setting up your environment on your personal computer for working with Qiskit Textbook. This will help you reproduce the results as you see them on the textbook website. The Qiskit Textbook is written in Jupyter Notebooks.",
];

const headerImg = "/images/learn/course/prerequisites/prerequisites.png";

const startLearningCTA: Link = {
  url: PrerequisitesUrl.Introduction,
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
    image: "environment-setup.png",
    label: "Setting Up Your Environment",
    segment: { cta: "setting-up-your-environment", location: "course" },
    url: PrerequisitesUrl.SettingUp,
  },
  {
    image: "introduction.png",
    label: "Python and Jupyter Notebooks",
    segment: { cta: "python-and-jupyter-notebooks", location: "course" },
    url: PrerequisitesUrl.Introduction,
  },
];

const prerequisites: Prerequisite[] = [];

const imageUrlBase = "/images/learn/course/prerequisites";
</script>
