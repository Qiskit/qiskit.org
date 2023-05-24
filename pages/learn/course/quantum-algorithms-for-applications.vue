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
import type { Link } from "~/types/links";
import type { Course, Prerequisite } from "constants/learnContent";

enum QuantumAlgorithmsForApplicationsUrl {
  SolvingLinearSystemsOfEquationsUsingHHL = "https://learn.qiskit.org/course/ch-applications/solving-linear-systems-of-equations-using-hhl-and-its-qiskit-implementation",
  SimulatingMoleculesUsingVQE = "https://learn.qiskit.org/course/ch-applications/simulating-molecules-using-vqe",
  SolvingCombinatorialOptimizationProblemsUsingQaoa = "https://learn.qiskit.org/course/ch-applications/solving-combinatorial-optimization-problems-using-qaoa",
  SolvingSatisfiabilityProblemsUsingGroversAlgorithm = "https://learn.qiskit.org/course/ch-applications/solving-satisfiability-problems-using-grovers-algorithm",
  HybridQuantumClassicalNeuralNetworksWithPytorchAndQiskit = "https://learn.qiskit.org/course/ch-applications/hybrid-quantum-classical-neural-networks-with-pytorch-and-qiskit",
  VariationalQuantumLinearSolver = "https://learn.qiskit.org/course/ch-applications/the-variational-quantum-linear-solver",
  FlexibleRepresentationOfQuantumImages = "https://learn.qiskit.org/course/ch-applications/flexible-representation-of-quantum-images-frqi",
  FacialExpressionRecognition = "https://learn.qiskit.org/course/ch-applications/facial-expression-recognition",
  EdgeDetection = "https://learn.qiskit.org/course/ch-applications/quantum-edge-detection",
  TravellingSalesmanProblem = "https://learn.qiskit.org/course/ch-applications/tsp",
}

definePageMeta({
  layout: "default-max",
  pageTitle: "Quantum Algorithms for Applications",
  routeName: "quantum-algorithms-for-applications",
});

useHead({
  title: "Quantum Algorithms for Applications",
});

const routeName = "quantum-algorithms-for-applications";

const headerTitle = "Quantum Algorithms for Applications";
const headerDescription = [
  "The useful algorithms in the quantum algorithms pages solve very general problems. These pages apply quantum algorithms to specific, real-world cases.",
];

const headerImg =
  "/images/learn/course/quantum-algorithms-for-applications/quantum-algorithms-for-applications.png";

const startLearningCTA: Link = {
  url: QuantumAlgorithmsForApplicationsUrl.SolvingLinearSystemsOfEquationsUsingHHL,
  label: "Start learning",
  segment: {
    cta: "introduction",
    location: "header",
  },
};

const references: string[] = [];
const externalRecommendedReadingsPreamble = "";
const links: Link[] = [];

const courses: Course[] = [
  {
    image: "solving-linear-systems-of-equations-using-hhl.png",
    label: "Solving Linear Systems of Equations Using HHL",
    segment: {
      cta: "solving-linear-systems-of-equations-using-hhl",
      location: "course",
    },
    url: QuantumAlgorithmsForApplicationsUrl.SolvingLinearSystemsOfEquationsUsingHHL,
  },
  {
    image: "simulating-molecules-using-vqe.png",
    label: "Simulating Molecules Using VQE",
    segment: { cta: "simulating-molecules-using-vqe", location: "course" },
    url: QuantumAlgorithmsForApplicationsUrl.SimulatingMoleculesUsingVQE,
  },
  {
    image: "solving-combinatorial-optimization-problems-using-qaoa.png",
    label: "Solving Combinatorial Optimization Problems using QAOA",
    segment: {
      cta: "solving-combinatorial-optimization-problems-using-qaoa",
      location: "course",
    },
    url: QuantumAlgorithmsForApplicationsUrl.SolvingCombinatorialOptimizationProblemsUsingQaoa,
  },
  {
    image: "solving-satisfiability-problems-using-grovers-algorithm.png",
    label: "Solving Satisfiability Problems using Grover's Algorithm",
    segment: {
      cta: "solving-satisfiability-problems-using-grovers-algorithm",
      location: "course",
    },
    url: QuantumAlgorithmsForApplicationsUrl.SolvingSatisfiabilityProblemsUsingGroversAlgorithm,
  },
  {
    image: "hybrid-quantum-classical-neural-networks.png",
    label: "Hybrid Quantum-Classical Neural Networks with PyTorch and Qiskit",
    segment: {
      cta: "hybrid-quantum-classical-neural-networks",
      location: "course",
    },
    url: QuantumAlgorithmsForApplicationsUrl.HybridQuantumClassicalNeuralNetworksWithPytorchAndQiskit,
  },
  {
    image: "flexible-representation-of-quantum-images.png",
    label: "Quantum Image Processing - FRQI and NEQR Image Representations",
    segment: {
      cta: "flexible-representation-of-quantum-images",
      location: "course",
    },
    url: QuantumAlgorithmsForApplicationsUrl.FlexibleRepresentationOfQuantumImages,
  },
  {
    image: "quantum-facial-expression-recognition.png",
    label: "Quantum Facial Expression Recognition",
    segment: {
      cta: "facial-expression-recognition",
      location: "course",
    },
    url: QuantumAlgorithmsForApplicationsUrl.FacialExpressionRecognition,
  },
  {
    image: "quantum-edge-detection.png",
    label: "Quantum Edge Detection",
    segment: {
      cta: "quantum-edge-detection",
      location: "course",
    },
    url: QuantumAlgorithmsForApplicationsUrl.EdgeDetection,
  },
  {
    image: "travelling-salesman-problem.png",
    label: "Travelling Salesman Problem using Quantum Phase Estimation",
    segment: {
      cta: "tsp",
      location: "course",
    },
    url: QuantumAlgorithmsForApplicationsUrl.TravellingSalesmanProblem,
  },
  {
    image: "variational-quantum-linear-solver.png",
    label: "Variational Quantum Linear Solver",
    segment: { cta: "variational-quantum-linear-solver", location: "course" },
    url: QuantumAlgorithmsForApplicationsUrl.VariationalQuantumLinearSolver,
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

const imageUrlBase = "/images/learn/course/quantum-algorithms-for-applications";
</script>
