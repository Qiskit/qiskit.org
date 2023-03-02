<script lang="ts">
import { Course, Prerequisite } from 'constants/learnContent'
import { Component } from 'vue-property-decorator'
import CourseOverviewPage from '~/components/logic/CourseOverviewPage.vue'
import { GeneralLink, LegacyContent } from '~/constants/appLinks'

@Component({
  head: () => ({
    title: 'Legacy content'
  })
})
export default class LegacyContentPage extends CourseOverviewPage {
  routeName: string = 'legacy-content'
  headerTitle = 'Legacy content'
  headerDescription = [
    `We're constantly updating and improving the Qiskit Textbook, but we know
    these changes can be disruptive. For this reason, you can always access
    older versions of the Qiskit Textbook through our versioning system. Use
    the links below to access all chapters available in version 1 of the Qiskit
    Textbook, formerly known as "Learn Quantum Computation using Qiskit". These
    pages are stable and will not change.`,
    `These pages are outdated and might not work with current versions of
    Qiskit. See the bottom of each page for the package versions used at the
    time of writing.`
  ]
  headerImg = '/images/learn/course/legacy-content/legacy-content.png'
  backToTextbookHomeLink: GeneralLink = {
    url: '/learn',
    label: 'Home',
    segment: {
      cta: 'back-to-textbook-home', location: 'header'
    }
  }

  startLearningCTA: GeneralLink = {
    url: LegacyContent.QuantumStatesAndQubits,
    label: 'Go to v1/course/ch-states',
    segment: {
      cta: 'introduction', location: 'header'
    }
  }

  references: string[] = []
  externalRecommendedReadingsPreamble: string = ''
  links: GeneralLink[] = []
  courses: Course[] = [
    {
      image: 'prerequisites.png',
      label: '0. Prerequisites',
      segment: { cta: 'prerequisites', location: 'course' },
      url: LegacyContent.Prerequisites
    },
    {
      image: 'quantum-states-and-qubits.png',
      label: '1. Quantum States and Qubits ',
      segment: { cta: 'quantum-states-and-qubits', location: 'course' },
      url: LegacyContent.QuantumStatesAndQubits
    },
    {
      image: 'multiple-qubits-entanglement.png',
      label: '2. Multiple Qubits and Entanglement',
      segment: { cta: 'multiple-qubits-entanglement', location: 'course' },
      url: LegacyContent.MultipleQubitsAndEntanglement
    },
    {
      image: 'quantum-protocols-and-quantum-algorithms.png',
      label: '3. Quantum Protocols and Quantum Algorithms ',
      segment: { cta: 'quantum-protocols-and-quantum-algorithms', location: 'course' },
      url: LegacyContent.QuantumProtocolsAndQuantumAlgorithms
    },
    {
      image: 'quantum-algorithms-for-applications.png',
      label: '4. Quantum Algorithms for Applications',
      segment: { cta: 'quantum-algorithms-for-applications', location: 'course' },
      url: LegacyContent.QuantumAlgorithmsForApplications
    },
    {
      image: 'investigating-quantum-hardware-using-quantum-circuits.png',
      label: '5. Investigating Quantum Hardware Using Quantum Circuits',
      segment: { cta: 'investigating-quantum-hardware-using-quantum-circuits', location: 'course' },
      url: LegacyContent.InvestigatingQuantumHardwareUsingQuantumCircuits
    },
    {
      image: 'investigating-quantum-hardware-using-microwave-pulses.png',
      label: '6. Investigating Quantum Hardware Using Microwave Pulses',
      segment: { cta: 'investigating-quantum-hardware-using-microwave-pulses', location: 'course' },
      url: LegacyContent.InvestigatingQuantumHardwareUsingMicrowavePulses
    },
    {
      image: 'quantum-computing-labs.png',
      label: '7. Quantum Computing Labs',
      segment: { cta: 'quantum-computing-labs', location: 'course' },
      url: LegacyContent.QuantumComputingLabs
    },
    {
      image: 'appendix.png',
      label: '8. Appendix',
      segment: { cta: 'appendix', location: 'course' },
      url: LegacyContent.Appendix
    },
    {
      image: 'games-and-demos.png',
      label: '9. Games & Demos',
      segment: { cta: 'games-and-demos', location: 'course' },
      url: LegacyContent.GamesAndDemos
    },
  ]

  prerequisites: Prerequisite[] = []

  imageUrlBase = '/images/learn/course/legacy-content'
}
</script>
