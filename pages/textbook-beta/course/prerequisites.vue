<script lang="ts">
import { Course, Prerequisite } from 'constants/textbookBetaContent'
import { Component } from 'vue-property-decorator'
import CourseOverviewPage from '~/components/logic/CourseOverviewPage.vue'
import { GeneralLink, PrerequisitesUrl } from '~/constants/appLinks'

@Component({
  head: () => ({
    title: 'Prerequisites'
  })
})
export default class PrerequisitesPage extends CourseOverviewPage {
  routeName: string = 'prerequisites'

  headerTitle = 'Prerequisites'
  headerDescription = ['This is a comprehensive guide for setting up your environment on your personal computer for working with Qiskit Textbook. This will help you reproduce the results as you see them on the textbook website. The Qiskit Textbook is written in Jupyter Notebooks.']

  headerImg = '/images/textbook-beta/course/prerequisites/prerequisites.png'

  backToTextbookHomeLink: GeneralLink = {
    url: '/textbook-beta',
    label: 'Home',
    segment: {
      cta: 'back-to-textbook-home', location: 'header'
    }
  }

  startLearningCTA: GeneralLink = {
    url: PrerequisitesUrl.Introduction,
    label: 'Start learning',
    segment: {
      cta: 'introduction', location: 'header'
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
      image: 'environment-setup.png',
      label: 'Setting Up Your Environment',
      segment: { cta: 'setting-up-your-environment', location: 'course' },
      url: PrerequisitesUrl.SettingUp
    },
    {
      image: 'introduction.png',
      label: 'Python and Jupyter Notebooks',
      segment: { cta: 'python-and-jupyter-notebooks', location: 'course' },
      url: PrerequisitesUrl.Introduction
    }
  ]

  prerequisites: Prerequisite[] = []

  imageUrlBase = '/images/textbook-beta/course/prerequisites'
}
</script>
