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
  pageTitle: "Near-Term Algorithm Design",
  routeName: "algorithm-design",
});

useHead({
  title: "Near-Term Algorithm Design",
});

const routeName = "algorithm-design";

const headerTitle = "Near-Term Algorithm Design";
const headerDescription = [
  "This course teaches you how to write variational algorithms: near-term, hybrid-quantum-classical algorithms that are ideal candidates to achieve quantum advantage. Throughout this course, you'll learn each step in the variational algorithm design workflow, tradeoffs associated with each step, and how to use Qiskit Runtime primitives to optimize for speed and accuracy.",
];

const headerImg = "/images/learn/course/basics-quantum-information/atom.png";

const startLearningCTA: GeneralLink = {
  url: StartLearningUrl.NearTermAlgorithmDesign,
  label: "Start learning",
  segment: {
    cta: "algorithm-design-cta",
    location: "header",
  },
};

const references: string[] = [];

const externalRecommendedReadingsPreamble = `To make the most out of this
  course, we recommend familiarity with the basics of quantum information. You may
  also want to install Qiskit and the IBM Qiskit Runtime package:`;

const links: RecommendedReading[] = [
  {
    url: "https://qiskit.org/learn/course/basics-quantum-information/",
    author: "",
    label: "Basics of quantum information",
    description: `Learn about single systems, multiple systems, quantum circuits,
                    and explore entanglement in action with John Watrous`,
    segment: {
      cta: "basics-of-quantum-information",
      location: "external-recommended-readings",
    },
  },
  {
    url: "https://quantum-computing.ibm.com/lab/docs/iql/runtime/",
    author: "",
    label: "Qiskit Runtime Overview",
    description: "Explore Qiskit Runtime service documentation and tutorials.",
    segment: {
      cta: "runtime-docs",
      location: "external-recommended-readings",
    },
  },
];

const courses: Course[] = [
  {
    image: "single-systems-preview.png",
    label: "Single systems",
    segment: { cta: "single-systems", location: "course" },
    url: StartLearningUrl.NearTermAlgorithmDesign + "/",
  },
];

const prerequisites: Prerequisite[] = [];

const imageUrlBase = "/images/learn/course/algorithm-design";
</script>
