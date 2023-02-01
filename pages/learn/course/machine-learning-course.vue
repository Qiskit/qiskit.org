<script setup lang="ts">
import { Course, Prerequisite } from 'constants/learnContent'
import CourseOverviewPage from '~/components/logic/CourseOverviewPage.vue'
import { GeneralLink, StartLearningUrl } from '~/constants/appLinks'

useHead({
  title: 'Quantum machine learning course'
})

const headerTitle = 'Quantum machine learning'
const headerDescription = [`This course contains around eight hours of content, and
is aimed at self-learners who are comfortable with undergraduate-level
mathematics and quantum computing fundamentals. This course will take you
through key concepts in quantum machine learning, such as parameterized
quantum circuits, training these circuits, and applying them to basic
problems. By the end of the course, you'll understand the state of the field,
and you'll be familiar with recent developments in both supervised and
unsupervised learning such as quantum kernels and general adversarial networks.
This course finishes with a project that you can use to showcase what you've
learnt.`,
`This course was created by IBM Quantum with the help of Qiskit Advocates
through the Qiskit Advocate Mentoring Program.`]

const headerImg = '/images/learn/course/machine-learning-course/header.png'

const startLearningCTA: GeneralLink = {
  url: StartLearningUrl.QML,
  label: 'Start learning',
  segment: {
    cta: 'machine-learning', location: 'course'
  }
}

const references: string[] = []
const externalRecommendedReadingsPreamble: string = ''
const links: GeneralLink[] = []

const prerequisites: Prerequisite[] = []

const courses: Course[] = [
  {
    image: 'introduction.png',
    label: 'Introduction',
    segment: { cta: 'qml-introduction', location: 'course' },
    url: StartLearningUrl.QML
  },
  {
    image: 'parameterized-quantum-circuits.png',
    label: 'Parameterized quantum circuits',
    segment: { cta: 'parameterized-quantum-circuits', location: 'course' },
    url: 'https://learn.qiskit.org/course/machine-learning/parameterized-quantum-circuits'
  },
  {
    image: 'data-encoding.png',
    label: 'Data encoding',
    segment: { cta: 'data-encdoing', location: 'course' },
    url: 'https://learn.qiskit.org/course/machine-learning/data-encoding'
  },
  {
    image: 'training-parameterized-quantum-circuits.png',
    label: 'Training parameterized quantum circuits',
    segment: { cta: 'Describing quantum computers', location: 'course' },
    url: 'https://learn.qiskit.org/course/machine-learning/training-quantum-circuits'
  },
  {
    image: 'supervised-learning.png',
    label: 'Supervised learning',
    segment: { cta: 'supervised-learning', location: 'course' },
    url: 'https://learn.qiskit.org/course/machine-learning/supervised-learning'
  },
  {
    image: 'variational-classification.png',
    label: 'Variational classification',
    segment: { cta: 'variational-classification', location: 'course' },
    url: 'https://learn.qiskit.org/course/machine-learning/variational-classification'
  },
  {
    image: 'quantum-feature-maps-kernels.png',
    label: 'Quantum feature maps and kernels',
    segment: { cta: 'quantum-feature-maps-kernels', location: 'course' },
    url: 'https://learn.qiskit.org/course/machine-learning/quantum-feature-maps-kernels'
  },
  {
    image: 'unsupervised-learning.png',
    label: 'Unsupervised learning',
    segment: { cta: 'unsupervised-learning', location: 'course' },
    url: 'https://learn.qiskit.org/course/machine-learning/unsupervised-learning'
  },
  {
    image: 'quantum-generative-adversarial-networks.png',
    label: 'Quantum generative adversarial networks',
    segment: { cta: 'quantum-generative-adversarial-networks', location: 'course' },
    url: 'https://learn.qiskit.org/course/machine-learning/quantum-generative-adversarial-networks'
  },
  {
    image: 'project.png',
    label: 'Project',
    segment: { cta: 'project', location: 'course' },
    url: 'https://learn.qiskit.org/course/machine-learning/project'
  }
]

const qmlCoursePrerequisites: Prerequisite[] = [
  {
    title: 'Introduction course',
    description:
      'Not sure where to start? Whether you\'re keen to start your journey into quantum computing, or just curious as to what it\'s all about, this path is for you.',
    segment: {
      cta: 'introduction-course', location: 'prerequisite-material'
    },
    url:
      'https://qiskit.org/learn/course/introduction-course'
  },
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

const imageUrlBase = '/images/learn/course/machine-learning-course'

// TODO: Refactor "logic" pages
// export default class QuantumMachineLearningCoursePage extends CourseOverviewPage {
//   routeName: string = 'machine-learning-course'
// }
</script>
