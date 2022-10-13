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
  headerDescription = [`Quantum computing has become a global conversation, and
  whether in media or movies, fact or fiction, the excitement for quantum is
  growing every day. This free course covers quantum information at a detailed
  mathematical level. Join John Watrous as you explore quantum information,
  quantum algorithms, and how to understand and mitigate noise.`]

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
      url: 'https://www.pearson.com/en-us/subject-catalog/p/linear-algebra/P200000006185/9780137515424',
      label: 'Stephen Friedberg Arnold Insel, Lawrence Spence. Linear Algebra. Fifth edition. Pearson, 2019.',
      segment: {
        cta: 'friedberg-insel-spence-linear-algebra',
        location: 'external-recommended-readings'
      }
    },
    {
      url: 'https://link.springer.com/book/10.1007/978-3-319-11080-6',
      label: 'Sheldon Axler. Linear Algebra Done Right. Third edition. Undergraduate Texts in Mathematics. Springer, 2015.',
      segment: {
        cta: 'axler-linear-algebra-done-right',
        location: 'external-recommended-readings'
      }
    }
  ]

  courses: Course[] = [
    {
      image: 'single-systems-preview.png',
      label: 'Single systems',
      segment: { cta: 'single-systems', location: 'course' },
      url: StartLearningUrl.BasicsQuantumInformation + '/single-systems'
    },
    {
      image: 'multiple-systems-preview.png',
      label: 'Multiple systems',
      segment: { cta: 'multiple-systems', location: 'course' },
      url: StartLearningUrl.BasicsQuantumInformation + '/multiple-systems'
    },
    {
      image: 'circuits-protocols-games-preview.png',
      label: 'Circuits, protocols, and games',
      segment: { cta: 'circuits-protocols-games', location: 'course' },
      url: StartLearningUrl.BasicsQuantumInformation + '/circuits-protocols-games'
    }
  ]

  prerequisites: Prerequisite[] = [
    {
      title: 'Linear algebra',
      description:
        `To make the most out of this course, we recommend you are comfortable
        with basic linear algebra. In this video series, Sal Khan introduces
        some key concepts we'll rely on in this course.`,
      segment: {
        cta: 'khan-academy-linear-algebra', location: 'prerequisite-material'
      },
      url:
        'https://www.khanacademy.org/math/linear-algebra'
    },
    {
      title: 'Install Qiskit',
      description:
        `You don't need to install anything to start this course, but you may
        eventually want to write and run your own Qiskit programs. In this
        video, Nick Brønn helps you get Qiskit running.`,
      segment: {
        cta: 'install-qiskit-video', location: 'prerequisite-material'
      },
      url:
        'https://www.youtube.com/watch?v=1kRfHNUbkrg'
    }
  ]

  imageUrlBase = '/images/learn/course/basics-quantum-information'
}
</script>
