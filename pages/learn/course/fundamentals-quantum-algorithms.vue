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
  pageTitle: "Fundamentals of quantum algorithms",
  routeName: "fundamentals-quantum-algorithms-course",
});

const config = useRuntimeConfig();

// SEO specific definitions
const title = "Fundamentals of quantum algorithms";
const description =
  "This unit explores computational advantages of quantum information, including what we can do with quantum computers and their advantages over classical computers.";
const image = `${config.public.siteUrl}/images/learn/course/fundamentals-quantum-algorithms/hero.png`;
const pageUrl = `${config.public.siteUrl}/learn/course/fundamentals-quantum-algorithms`;

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

const routeName = "fundamentals-quantum-algorithms-course";

const headerDescription = [
  `This is the second unit of the "Understanding quantum information and
  computation" series, which explains quantum information and computation at a
  detailed mathematical level.`,
  `This unit, "Fundamentals of quantum algorithms", explores computational
  advantages of quantum information, including what we can do with quantum
  computers and their advantages over classical computers. The unit begins
  with quantum query algorithms, which offer simple proof of concept
  demonstrations for quantum algorithms, and then moves on to quantum
  algorithms for problems including integer factorization and searching, which
  are more representative of the types of computational problems that might be
  encountered in real-world scenarios.`,
];
const headerImg =
  "/images/learn/course/fundamentals-quantum-algorithms/hero.png";

const startLearningCTA: TextLink = {
  url: LearnStartLearningUrl.FundamentalsQuantumAlgorithms,
  label: "Start learning",
  segment: {
    cta: "fundamentals-quantum-algorithms",
    location: "header",
  },
};

const references: string[] = [];

const prerequisites: Prerequisite[] = [
  {
    title: "Basics of quantum information",
    description:
      "This is the first unit of the series. It covers quantum information at a detailed, mathematical level.",
    segment: {
      cta: "basics-quantum-information",
      location: "prerequisite-material",
    },
    url: "/learn/course/basics-quantum-information",
  },
];

const externalRecommendedReadingsPreamble = `Alongside this course, you may find these resources helpful or interesting.`;

const links: RecommendedReading[] = [
  {
    url: "https://www.cambridge.org/highereducation/books/quantum-computation-and-quantum-information/01E10196D0A682A6AEFFEA52D53BE9AE",
    author: "Michael Nielsen, Isaac Chuang, ",
    label: "Quantum Computation and Quantum Information (Chapters 4-6)",
    segment: {
      cta: "michael-nielsen-isaac-chuang-quantum-computation-and-quantum-information",
      location: "external-recommended-readings",
    },
  },
  {
    url: "https://global.oup.com/academic/product/an-introduction-to-quantum-computing-9780198570493?cc=gb&lang=en&",
    author: "Phillip Kaye, Raymond Laflamme, Michele Mosca, ",
    label: "An Introduction to Quantum Computing (Chapters 5-8)",
    segment: {
      cta: "phillip-kaye-raymond-laflamme-michele-mosca-an-introduction-to-quantum-computing",
      location: "external-recommended-readings",
    },
  },
  {
    url: "http://cleve.iqc.uwaterloo.ca/resources/QIC-710-F21/Qic710QuantumAlgorithmsPart1.pdf",
    author: "Richard Cleve,",
    label: "Quantum Information Processing — Quantum Algorithms I",
    segment: {
      cta: "quantum-information-processing-I",
      location: "external-recommended-readings",
    },
  },
  {
    url: "http://cleve.iqc.uwaterloo.ca/resources/QIC-710-F21/Qic710QuantumAlgorithmsPart2.pdf",
    author: "Richard Cleve,",
    label: "Quantum Information Processing — Quantum Algorithms II",
    segment: {
      cta: "quantum-information-processing-II",
      location: "external-recommended-readings",
    },
  },
  {
    url: "http://cleve.iqc.uwaterloo.ca/resources/QIC-710-F21/Qic710QuantumAlgorithmsPart3.pdf",
    author: "Richard Cleve,",
    label: "Quantum Information Processing — Quantum Algorithms III",
    segment: {
      cta: "quantum-information-processing-III",
      location: "external-recommended-readings",
    },
  },
];

const courses: Course[] = [
  {
    image: "quantum-query-algorithms-preview.png",
    label: "Quantum query algorithms",
    segment: { cta: "quantum-query-algorithms", location: "course" },
    url:
      LearnStartLearningUrl.FundamentalsQuantumAlgorithms + "/query-algorithms",
  },
  {
    image: "algorithmic-foundations-preview.png",
    label: "Algorithmic foundations",
    segment: { cta: "algorithmic-foundations", location: "course" },
    url:
      LearnStartLearningUrl.FundamentalsQuantumAlgorithms +
      "/algorithmic-foundations",
  },
  {
    image: "phase-estimation-and-factoring-preview.png",
    label: "Phase estimation and factoring",
    segment: { cta: "phase-estimation-and-factoring", location: "course" },
    url:
      LearnStartLearningUrl.FundamentalsQuantumAlgorithms + "/phase-estimation",
  },
];

const imageUrlBase = "/images/learn/course/fundamentals-quantum-algorithms";
</script>
