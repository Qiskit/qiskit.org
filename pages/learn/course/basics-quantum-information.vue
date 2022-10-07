<script lang="ts">
import { Course, Prerequisite } from 'constants/learnContent'
import { Component } from 'vue-property-decorator'
import CourseOverviewPage from '~/components/logic/CourseOverviewPage.vue'
import { GeneralLink, StartLearningUrl } from '~/constants/appLinks'

@Component({
  head: () => ({
    title: 'Basics of quantum information'
  })
})
export default class BasicsQuantumInformationCoursePage extends CourseOverviewPage {
  routeName: string = 'basics-quantum-information-course'

  headerTitle = 'Basics of quantum information'
  headerDescription = [`Lorem ipsum dolor sit amet, consectetur adipiscing
  elit. Auctor neque elementum odio leo in ut risus. Id eu posuere id turpis
  nunc diam nisl quisque habitasse. Proin ac mollis nunc quis vestibulum. Nisl
  mauris odio odio tincidunt non duis lorem adipiscing. Vel placerat egestas
  sed ultrices augue nam magna quis id. Lorem ipsum dolor sit amet, consectetur
  adipiscing elit. Auctor neque elementum odio leo in ut risus. Id eu posuere
  id turpis nunc diam nisl quisque habitasse.`]

  headerImg = '/images/learn/course/basics-quantum-information/atom.png'

  backToTextbookHomeLink: GeneralLink = {
    url: '/learn',
    label: 'Home',
    segment: {
      cta: 'back-to-textbook-home', location: 'header'
    }
  }

  startLearningCTA: GeneralLink = {
    url: StartLearningUrl.BasicsQuantumInformation,
    label: 'Start learning',
    segment: {
      cta: 'basics-quantum-information', location: 'header'
    }
  }

  references: string[] = []
  links: GeneralLink[] = [
    {
      url: 'https://math.mit.edu/~gs/linearalgebra/',
      label: 'Gilbert Strang, Introduction to Linear Algebra, 2016',
      segment: {
        cta: 'introduction-to-linear-algebra',
        location: 'external-recommended-readings'
      }
    },
    {
      url: 'https://machinelearningmastery.com/gentle-introduction-linear-algebra/',
      label: 'Jason Brownlee, A Gentle Introduction to Linear Algebra, 2018',
      segment: {
        cta: 'gentle-introduction-to-linear-algebra',
        location: 'external-recommended-readings'
      }
    }
  ]

  courses: Course[] = [
    {
      image: 'single-systems-preview.png',
      label: 'Single systems',
      segment: { cta: 'single-systems', location: 'course' },
      url: StartLearningUrl.BasicsQuantumInformation
    },
    {
      image: 'cat.png',
      label: 'Multiple systems',
      segment: { cta: 'single-systems', location: 'course' },
      url: StartLearningUrl.BasicsQuantumInformation,
    },
    {
      image: 'cat.png',
      label: 'Circuits, protocols, and games',
      segment: { cta: 'single-systems', location: 'course' },
      url: StartLearningUrl.BasicsQuantumInformation,
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

  imageUrlBase = '/images/learn/course/basics-quantum-information'
}
</script>
