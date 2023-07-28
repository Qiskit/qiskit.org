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
import { Course, Prerequisite } from "~/constants/learnContent";
import { LearnStartLearningUrl } from "~/constants/links";
import { RecommendedReading } from "~/types/learn";
import { TextLink } from "~/types/links";

definePageMeta({
  pageTitle: "Variational Algorithm Design",
  routeName: "algorithm-design",
});

const config = useRuntimeConfig();

// SEO specific definitions
const title = "Variational algorithm design";
const description =
  "This course teaches how to write variational algorithms: near-term, hybrid-quantum-classical algorithms that are ideal candidates to achieve quantum advantage.";
const image = `${config.public.siteUrl}/images/learn/course/algorithm-design/algorithm-design.png`;
const pageUrl = `${config.public.siteUrl}/learn/course/algorithm-design`;

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

const routeName = "algorithm-design";
const headerDescription = [
  "This course teaches how to write variational algorithms: near-term, hybrid-quantum-classical algorithms that are ideal candidates to achieve quantum advantage. Throughout this course, you'll learn each step in the variational algorithm design workflow, tradeoffs associated with each step, and how to use Qiskit Runtime primitives to optimize for speed and accuracy.",
];
const headerImg = "/images/learn/course/algorithm-design/algorithm-design.png";

const startLearningCTA: TextLink = {
  url: LearnStartLearningUrl.AlgorithmDesign,
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
    url: `${config.public.siteUrl}/learn/course/basics-quantum-information/`,
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
    url: `${config.public.siteUrl}/ecosystem/ibm-runtime/`,
    author: "",
    label: "Qiskit Runtime Overview",
    description: "Explore Qiskit Runtime service documentation and tutorials.",
    segment: {
      cta: "runtime-docs",
      location: "external-recommended-readings",
    },
  },
  {
    url: "https://www.ibm.com/privacy/us/en/",
    label: "IBM Privacy Policies",
    description:
      "NOTICE: IBM leverages the services of Credly, a 3rd party data processor authorized by IBM and located in the United States, to assist in the administration of the IBM Digital Badge program. In order to issue you an IBM Digital Badge, your personal information (name, email address, and badge earned) will be shared with Credly. You will receive an email notification from Credly with instructions for claiming the badge. Your personal information is used to issue your badge and for program reporting and operational purposes. IBM may share the personal information collected with IBM subsidiaries and third parties globally. It will be handled in a manner consistent with IBM privacy practices.",
  },
];

const courses: Course[] = [
  {
    image: "variational.png",
    label: "Variational algorithms",
    segment: { cta: "variational-algorithms", location: "course" },
    url: LearnStartLearningUrl.AlgorithmDesign + "/",
  },
  {
    image: "reference.png",
    label: "Reference states",
    segment: { cta: "reference-states", location: "course" },
    url: LearnStartLearningUrl.AlgorithmDesign + "/reference",
  },
  {
    image: "ansatz.png",
    label: "Ansatze and variational forms",
    segment: { cta: "ansatz", location: "course" },
    url: LearnStartLearningUrl.AlgorithmDesign + "/ansatz",
  },
  {
    image: "cost_function.png",
    label: "Cost functions",
    segment: { cta: "cost-functions", location: "course" },
    url: LearnStartLearningUrl.AlgorithmDesign + "/cost_function",
  },
  {
    image: "optimization.png",
    label: "Optimization loops",
    segment: { cta: "optimization", location: "course" },
    url: LearnStartLearningUrl.AlgorithmDesign + "/optimization",
  },
  {
    image: "instances.png",
    label: "Instances and extensions",
    segment: { cta: "instances", location: "course" },
    url: LearnStartLearningUrl.AlgorithmDesign + "/instances",
  },
  {
    image: "examples.png",
    label: "Examples and applications",
    segment: { cta: "examples", location: "course" },
    url: LearnStartLearningUrl.AlgorithmDesign + "/applications",
  },
  {
    image: "badge.png",
    label: "Earn your badge",
    segment: { cta: "badge", location: "course" },
    url: LearnStartLearningUrl.AlgorithmDesign + "/badge",
  },
];

const prerequisites: Prerequisite[] = [];

const imageUrlBase = "/images/learn/course/algorithm-design";
</script>
