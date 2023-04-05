<script lang="ts">
import { Course, Prerequisite } from 'constants/learnContent'
import { Component } from 'vue-property-decorator'
import CourseOverviewPage from '~/components/logic/CourseOverviewPage.vue'
import { GeneralLink, StartLearningUrl } from '~/constants/appLinks'
import { RecommendedReading } from '~/components/learn/ExternalRecommendedReadings.vue'

@Component({
  head: () => ({
    title: 'Near-Term Algorithm Design'
  })
})
export default class NearTermAlgorithmDesignCoursePage extends CourseOverviewPage {
  routeName: string = 'algorithm-design'

  headerTitle = 'Near-Term Algorithm Design'

  headerDescription = ['This course teaches you how to write variational algorithms: near-term, hybrid-quantum-classical algorithms that are ideal candidates to achieve quantum advantage. Throughout this course, you\'ll learn each step in the variational algorithm design workflow, tradeoffs associated with each step, and how to use Qiskit Runtime primitives to optimize for speed and accuracy.']

  headerImg = '/images/learn/course/basics-quantum-information/atom.png'

  backToTextbookHomeLink: GeneralLink = {
    url: '/learn',
    label: 'Home',
    segment: {
      cta: 'back-to-textbook-home', location: 'header'
    }
  }

  startLearningCTA: GeneralLink = {
    url: StartLearningUrl.NearTermAlgorithmDesign,
    label: 'Start learning',
    segment: {
      cta: 'algorithm-design-cta', location: 'header'
    }
  }

  references: string[] = []

  externalRecommendedReadingsPreamble: string = `To make the most out of this
  course, we recommend familiarity with Basics of Quantum Information. You may
  also want to install Qiskit and the IBM Qiskit Runtime package:`

  links: RecommendedReading[] = [
    {
      url: 'https://qiskit.org/learn/course/basics-quantum-information/',
      author: '',
      label: 'Basics of quantum information',
      description: `Learn about single systems, multiple systems, quantum circuits,
                    and explore entanglement in action with John Watrous`,
      segment: {
        cta: 'basics-of-quantum-information',
        location: 'external-recommended-readings'
      }
    },
    {
      url: 'https://quantum-computing.ibm.com/lab/docs/iql/runtime/',
      author: '',
      label: 'Qiskit Runtime Overview',
      description: 'Explore Qiskit Runtime service documentation and tutorials.',
      segment: {
        cta: 'runtime-docs',
        location: 'external-recommended-readings'
      }
    }
  ]

  courses: Course[] = [
    {
      image: 'single-systems-preview.png',
      label: 'Single systems',
      segment: { cta: 'single-systems', location: 'course' },
      url: StartLearningUrl.NearTermAlgorithmDesign + '/'
    }
    // Stored in /static/images/learn/course/algorithm-design
  ]

  prerequisites: Prerequisite[] = []

  imageUrlBase = '/images/learn/course/algorithm-design'
}
</script>
