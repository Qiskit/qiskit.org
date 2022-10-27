<script lang="ts">
import { Course, Prerequisite } from 'constants/learnContent'
import { Component } from 'vue-property-decorator'
import CourseOverviewPage from '~/components/logic/CourseOverviewPage.vue'
import { GeneralLink, QuantumAlgorithmsForApplications } from '~/constants/appLinks'

@Component({
  head: () => ({
    title: 'Quantum Algorithms for Applications'
  })
})
export default class QuantumAlgorithmsForApplicationsPage extends CourseOverviewPage {
  routeName: string = 'quantum-algorithms-for-applications'

  headerTitle = 'Quantum Algorithms for Applications'
  headerDescription = ['The useful algorithms in the quantum algorithms pages solve very general problems. These pages apply quantum algorithms to specific, real-world cases.']

  headerImg = '/images/learn/course/quantum-algorithms-for-applications/quantum-algorithms-for-applications.png'

  backToTextbookHomeLink: GeneralLink = {
    url: '/learn',
    label: 'Home',
    segment: {
      cta: 'back-to-textbook-home', location: 'header'
    }
  }

  startLearningCTA: GeneralLink = {
    url: QuantumAlgorithmsForApplications.SolvingLinearSystemsOfEquationsUsingHHL,
    label: 'Start learning',
    segment: {
      cta: 'introduction', location: 'header'
    }
  }

  references: string[] = []
  externalRecommendedReadingsPreamble: string = ''
  links: GeneralLink[] = []

  courses: Course[] = [
    {
      image: 'solving-linear-systems-of-equations-using-hhl.png',
      label: 'Solving Linear Systems of Equations Using HHL',
      segment: { cta: 'solving-linear-systems-of-equations-using-hhl', location: 'course' },
      url: QuantumAlgorithmsForApplications.SolvingLinearSystemsOfEquationsUsingHHL
    },
    {
      image: 'simulating-molecules-using-vqe.png',
      label: 'Simulating Molecules Using VQE',
      segment: { cta: 'simulating-molecules-using-vqe', location: 'course' },
      url: QuantumAlgorithmsForApplications.SimulatingMoleculesUsingVQE
    },
    {
      image: 'solving-combinatorial-optimization-problems-using-qaoa.png',
      label: 'Solving Combinatorial Optimization Problems using QAOA',
      segment: { cta: 'solving-combinatorial-optimization-problems-using-qaoa', location: 'course' },
      url: QuantumAlgorithmsForApplications.SolvingCombinatorialOptimizationProblemsUsingQaoa
    },
    {
      image: 'solving-satisfiability-problems-using-grovers-algorithm.png',
      label: 'Solving Satisfiability Problems using Grover\'s Algorithm',
      segment: { cta: 'solving-satisfiability-problems-using-grovers-algorithm', location: 'course' },
      url: QuantumAlgorithmsForApplications.SolvingSatisfiabilityProblemsUsingGroversAlgorithm
    },
    {
      image: 'hybrid-quantum-classical-neural-networks.png',
      label: 'Hybrid Quantum-Classical Neural Networks with PyTorch and Qiskit',
      segment: { cta: 'hybrid-quantum-classical-neural-networks', location: 'course' },
      url: QuantumAlgorithmsForApplications.HybridQuantumClassicalNeuralNetworksWithPytorchAndQiskit
    },
    {
      image: 'variational-quantum-linear-solver.png',
      label: 'Variational Quantum Linear Solver',
      segment: { cta: 'variational-quantum-linear-solver', location: 'course' },
      url: QuantumAlgorithmsForApplications.VariationalQuantumLinearSolver
    },
    {
      image: 'flexible-representation-of-quantum-images.png',
      label: 'Quantum Image Processing - FRQI and NEQR Image Representations',
      segment: { cta: 'flexible-representation-of-quantum-images', location: 'course' },
      url: QuantumAlgorithmsForApplications.FlexibleRepresentationOfQuantumImages
    }
  ]

  prerequisites: Prerequisite[] = [
    {
      title: 'Quantum Protocols and Quantum Algorithms',
      description:
        'In this chapter, we use quantum effects to build powerful algorithms, starting from simple proof-of-concept algorithms, through to Shor\'s famous factoring algorithm (and beyond).',
      segment: {
        cta: 'quantum-protocols-and-quantum-algorithms', location: 'prerequisite-material'
      },
      url:
        'https://learn.qiskit.org/course/ch-algorithms/quantum-circuits'
    },
    {
      title: 'Python and Jupyter Notebooks',
      description:
        "Python is a programming language where you don't need to compile. You can just run it line by line...",
      segment: {
        cta: 'python-and-jupyter-notebooks', location: 'prerequisite-material'
      },
      url:
        'https://learn.qiskit.org/course/ch-prerequisites/introduction-to-python-and-jupyter-notebooks'
    }
  ]

  imageUrlBase = '/images/learn/course/quantum-algorithms-for-applications'
}
</script>
