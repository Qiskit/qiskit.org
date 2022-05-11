<script lang="ts">
import { Course, Prerequisite } from 'constants/textbookBetaContent'
import { Component } from 'vue-property-decorator'
import CourseOverviewPage from '~/components/logic/CourseOverviewPage.vue'
import { GeneralLink, QuantumHardwareCircuitsUrl } from '~/constants/appLinks'

@Component({
  head: () => ({
    title: 'Investigating Quantum Hardware Using Quantum Circuits'
  })
})
export default class QuantumHardwareCircuitsPage extends CourseOverviewPage {
  routeName: string = 'quantum-hardware-circuits'

  headerTitle = 'Investigating Quantum Hardware Using Quantum Circuits'
  headerDescription = ['Most gate-based quantum computers share similar challenges with noise and errors. These pages explore how errors affect quantum circuits, and how we can mitigate them, without worrying about the physics of the device itself.']

  headerImg = '/images/textbook-beta/course/quantum-hardware-circuits/quantum-hardware-circuits.png'

  backToTextbookHomeLink: GeneralLink = {
    url: '/textbook-beta',
    label: 'Home',
    segment: {
      cta: 'back-to-textbook-home', location: 'header'
    }
  }

  startLearningCTA: GeneralLink = {
    url: QuantumHardwareCircuitsUrl.Introduction,
    label: 'Start learning',
    segment: {
      cta: 'introduction', location: 'header'
    }
  }

  references: string[] = []
  links: GeneralLink[] = []

  courses: Course[] = [
    {
      image: 'introduction-to-quantum-error-correction.png',
      label: 'Introduction to Quantum Error Correction Using Repetition Codes',
      segment: { cta: 'introduction-to-quantum-error-correction', location: 'course' },
      url: QuantumHardwareCircuitsUrl.Introduction
    },
    {
      image: 'measurement-error-mitigation.png',
      label: 'Measurement Error Mitigation',
      segment: { cta: 'measurement-error-mitigation', location: 'course' },
      url: QuantumHardwareCircuitsUrl.MeasurementErrorMitigation
    },
    {
      image: 'randomized-benchmarking.png',
      label: 'Randomized Benchmarking',
      segment: { cta: 'randomized-benchmarking', location: 'course' },
      url: QuantumHardwareCircuitsUrl.RandomizedBenchmarking
    },
    {
      image: 'measuring-quantum-volume.png',
      label: 'Measuring Quantum Volume',
      segment: { cta: 'measuring-quantum-volume', location: 'course' },
      url: QuantumHardwareCircuitsUrl.MeasuringQuantumVolume
    }
  ]

  prerequisites: Prerequisite[] = [
    {
      title: 'Multiple Qubits and Entanglement',
      description:
        'With the basics down, this chapter explores the consequences of these new quantum effects, and sets us up with tools to understand quantum algorithms.',
      segment: {
        cta: 'multiple-qubits-and-entanglement', location: 'prerequisite-material'
      },
      url:
        'https://learn.qiskit.org/course/ch-gates/introduction'
    }
  ]

  imageUrlBase = '/images/textbook-beta/course/quantum-hardware-circuits'
}
</script>
