<script lang="ts">
import { Course, Prerequisite } from 'constants/textbookBetaContent'
import { Component } from 'vue-property-decorator'
import CourseOverviewPage from '~/components/logic/CourseOverviewPage.vue'
import { GeneralLink, InvestigatingQuantumHardwareUrl } from '~/constants/appLinks'

@Component({
  head: () => ({
    title: 'Investigating Quantum Hardware Using Microwave Pulses'
  })
})
export default class InvestigatingQuantumHardwarePage extends CourseOverviewPage {
  routeName: string = 'investigating-quantum-hardware'

  headerTitle = 'Investigating Quantum Hardware Using Microwave Pulses'
  headerDescription = ['The Qiskit Textbook mostly assumes we have a quantum computer that can carry out quantum operations, and doesn\'t worry about how the devices actually work. These pages go a step deeper, exploring the physics of superconducting qubits, and using Qiskit to program operations on these devices at the level of microwave pulses.']

  headerImg = '/images/textbook-beta/course/investigating-quantum-hardware/investigating-quantum-hardware.png'

  backToTextbookHomeLink: GeneralLink = {
    url: '/textbook-beta',
    label: 'Home',
    segment: {
      cta: 'back-to-textbook-home', location: 'header'
    }
  }

  startLearningCTA: GeneralLink = {
    url: InvestigatingQuantumHardwareUrl.CalibratingQubitsWithQiskitPulse,
    label: 'Start learning',
    segment: {
      cta: 'introduction', location: 'header'
    }
  }

  references: string[] = []
  links: GeneralLink[] = []

  courses: Course[] = [
    {
      image: 'calibrating-qubits-with-qiskit-pulse.png',
      label: 'Calibrating Qubits with Qiskit Pulse',
      segment: { cta: 'calibrating-qubits-with-qiskit-pulse', location: 'course' },
      url: InvestigatingQuantumHardwareUrl.CalibratingQubitsWithQiskitPulse
    },
    {
      image: 'accessing-higher-energy-states.png',
      label: 'Accessing Higher Energy States',
      segment: { cta: 'accessing-higher-energy-states', location: 'course' },
      url: InvestigatingQuantumHardwareUrl.AccessingHigherEnergyStates
    },
    {
      image: 'introduction-to-transmon-physics.png',
      label: 'Introduction to Transmon Physics',
      segment: { cta: 'introduction-to-transmon-physics', location: 'course' },
      url: InvestigatingQuantumHardwareUrl.IntroductionToTransmonPhysics
    },
    {
      image: 'circuit-quantum-electrodynamics.png',
      label: 'Circuit Quantum Electrodynamics',
      segment: { cta: 'circuit-quantum-electrodynamics', location: 'course' },
      url: InvestigatingQuantumHardwareUrl.CircuitQuantumElectrodynamics
    },
    {
      image: 'exploring-the-jaynes-cummings-hamiltonian-with-qiskit-pulse.png',
      label: 'Exploring the Jaynes-Cummings Hamiltonian with Qiskit Pulse',
      segment: { cta: 'exploring-the-jaynes-cummings-hamiltonian-with-qiskit-pulse', location: 'course' },
      url: InvestigatingQuantumHardwareUrl.ExploringTheJaynesCummingsHamiltonianWithQiskitPulse
    },
    {
      image: 'measuring-the-qubit-ac-stak-shift.png',
      label: 'Measuring the Qubit ac-Stak Shift',
      segment: { cta: 'measuring-the-qubit-ac-stak-shift', location: 'course' },
      url: InvestigatingQuantumHardwareUrl.MeasuringTheQubitacStakShift
    },
    {
      image: 'hamiltonian-tomography.png',
      label: 'Hamiltonian Tomography',
      segment: { cta: 'hamiltonian-tomography', location: 'course' },
      url: InvestigatingQuantumHardwareUrl.HamiltonianTomography
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

  imageUrlBase = '/images/textbook-beta/course/investigating-quantum-hardware'
}
</script>
