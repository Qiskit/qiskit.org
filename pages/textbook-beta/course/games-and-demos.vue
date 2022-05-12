<script lang="ts">
import { Course, Prerequisite } from 'constants/textbookBetaContent'
import { Component } from 'vue-property-decorator'
import CourseOverviewPage from '~/components/logic/CourseOverviewPage.vue'
import { GeneralLink, GamesAndDemos } from '~/constants/appLinks'

@Component({
  head: () => ({
    title: 'Quantum Algorithms for Applications'
  })
})
export default class GamesAndDemosPage extends CourseOverviewPage {
  routeName: string = 'games-and-demos'
  headerTitle = 'Games and demos'
  headerDescription = ["Qiskit, and the Qiskit Textbook website, are interactive learning environments. Unlike with traditional, ink-and-paper textbooks, you can mess around with quantum effects to strengthen your knowledge. These pages contain cool experiments with Qiskit that don't belong in a course."]
  headerImg = '/images/textbook-beta/course/games-and-demos/games-and-demos.png'
  backToTextbookHomeLink: GeneralLink = {
    url: '/textbook-beta',
    label: 'Home',
    segment: {
      cta: 'back-to-textbook-home', location: 'header'
    }
  }

  startLearningCTA: GeneralLink = {
    url: GamesAndDemos.BonusLevelSandbox,
    label: 'Start learning',
    segment: {
      cta: 'introduction', location: 'header'
    }
  }

  references: string[] = []
  links: GeneralLink[] = []
  courses: Course[] = [
    {
      image: 'bonus-level-sandbox.png',
      label: 'Bonus Level: Sandbox',
      segment: { cta: 'bonus-level-sandbox', location: 'course' },
      url: GamesAndDemos.BonusLevelSandbox
    },
    {
      image: 'bonus-level-make-your-own-puzzles.png',
      label: 'Bonus Level: Make your own puzzles',
      segment: { cta: 'bonus-level-make-your-own-puzzles', location: 'course' },
      url: GamesAndDemos.BonusLevelMakeYourOwnPuzzle
    },
    {
      image: 'level-5-proving-uniqueness-of-quantum-variables.png',
      label: 'Level 5: Provins the Uniqueness of Quantum Variables',
      segment: { cta: 'level-5-proving-uniqueness-of-quantum-variables', location: 'course' },
      url: GamesAndDemos.Level5ProvingTheUniquenessOfQuantumVariables
    },
    {
      image: 'estimating-pi-using-quantum-phase-estimation-algorithm.png',
      label: 'Estimating pi using Quantum Phase Estimation Algorithm',
      segment: { cta: 'estimating-pi-using-quantum-phase-estimation-algorithm', location: 'course' },
      url: GamesAndDemos.EstimatingPiUsingQPEA
    },
    {
      image: 'local-reality-and-the-chsh-inequality.png',
      label: 'Local Reality and the CHSH inequality',
      segment: { cta: 'local-reality-and-the-chsh-inequality', location: 'course' },
      url: GamesAndDemos.LocalRealityAndTheChshInequality
    },
    {
      image: 'widgets-demonstration.png',
      label: 'Widgets Demonstration',
      segment: { cta: 'widgets-demonstrationr', location: 'course' },
      url: GamesAndDemos.WidgetsDemonstration
    }
  ]

  prerequisites: Prerequisite[] = [
    {
      title: 'Setting Up Your Environment',
      description:
        'This is a comprehensive guide for setting up your environment on your personal computer for working with Qiskit Textbook.',
      segment: {
        cta: 'setting-up-your-environment', location: 'prerequisite-material'
      },
      url:
        'https://learn.qiskit.org/course/ch-prerequisites/environment-setup-guide-to-work-with-qiskit-textbook'
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

  imageUrlBase = '/images/textbook-beta/course/games-and-demos'
}
</script>
