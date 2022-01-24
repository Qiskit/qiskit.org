<template>
  <main class="summer-school-page">
    <TextbookBetaContentMenuSection
      class="summer-school-page__content-menu"
    />
    <AppPageHeaderWithImage :cta="startLearningCTA" :back-link="backToTextbookHomeLink">
      <template slot="title">
        {{ headerTitle }}
      </template>
      <template slot="description">
        <p v-text="headerDescription"/>
      </template>
      <template slot="image">
        <img class="app-page-header-with-img__image" :src="headerImg">
      </template>
    </AppPageHeaderWithImage>
    <PrerequisiteMaterialSection class="summer-school-page__section" :data="summerSchool2020Prerequisites" />
    <ExternalRecommendedReadings class="summer-school-page__section" :links="links" />
    <CoursePagesSection class="summer-school-page__section" :courses="courses" :img-base="imageUrlBase" />
  </main>
</template>

<script lang="ts">
import { Course, Prerequisite } from 'constants/textbookBetaContent'
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import { GeneralLink, START_LEARNING_URL } from '~/constants/appLinks'

@Component({
  layout: 'default-max',
  head () {
    return {
      title: '2020 Qiskit global summer school on quantum computing and quantum hardware'
    }
  }
})
export default class SummerSchoolCoursePage extends QiskitPage {
  routeName: string = 'summer-school/intro-quantum-computing-quantum-hardware-2020'

  headerTitle = '2020 Qiskit Global Summer School on Quantum Computing and Quantum Hardware'
  headerDescription = 'This course is an introduction to the world of quantum computing, with an exploration of some of the key quantum algorithms and their implementations using quantum circuits, as well as the quantum hardware that is designed to run these algorithms. The course was first offered during the Qiskit Global Summer School in July 2020 as a two-week intensive summer school. There are 27 lectures in this course, which cover the material in 9 lecture notes and 9 associated labs.'

  headerImg = '/images/textbook-beta/summer-school/intro-quantum-computing-quantum-hardware-2020/header.png'

  backToTextbookHomeLink: GeneralLink = {
    url: '/textbook-beta',
    label: 'Home',
    segment: {
      cta: 'back-to-textbook-home', location: 'header'
    }
  }

  startLearningCTA: GeneralLink = {
    url: START_LEARNING_URL.SummerSchool2020,
    label: 'Start learning',
    segment: {
      cta: 'introduction', location: 'header'
    }
  }

  courses: Course[] = [
    {
      image: 'QGSS-Lec1-CoverImage.png',
      label: 'Qubits and Quantum States, Quantum Circuits, Measurements',
      segment: { cta: 'lecture-1', location: 'summer-school-2020' },
      url: 'https://learn.qiskit.org/summer-school/2020/qubits-states-circuits-measurements'
    },
    {
      image: 'QGSS-Lec2-CoverImage.png',
      label: 'Writing and Running Quantum Programs',
      segment: { cta: 'lecture-2', location: 'summer-school-2020' },
      url: 'https://learn.qiskit.org/summer-school/2020/writing-running-programs'
    },
    {
      image: 'QGSS-Lec3-CoverImage.png',
      label: 'Shor\'s Algorithm I: Quantum Fourier Transform, Quantum Phase Estimation',
      segment: { cta: 'lecture-3', location: 'summer-school-2020' },
      url: 'https://learn.qiskit.org/summer-school/2020/shors-algorithm-i-fourier-transform-phase-estimation'
    },
    {
      image: 'QGSS-Lec4-CoverImage.png',
      label: 'Shor\'s Algorithm II: From Factoring to Period-Finding, Writing the Quantum Program',
      segment: { cta: 'lecture-4', location: 'summer-school-2020' },
      url: 'https://learn.qiskit.org/summer-school/2020/shors-algorithm-ii-from-factoring-to-period-finding-writing-program'
    },
    {
      image: 'QGSS-Lec5-CoverImage.png',
      label: 'Quantum Error Correction using Repetition Codes',
      segment: { cta: 'lecture-5', location: 'summer-school-2020' },
      url: 'https://learn.qiskit.org/summer-school/2020/error-correction-using-repetition-codes'
    },
    {
      image: 'QGSS-Lec6-CoverImage.png',
      label: 'Superconducting Qubits I: Quantizing a Harmonic Oscillator, Josephson Junctions',
      segment: { cta: 'lecture-6', location: 'summer-school-2020' },
      url: 'https://learn.qiskit.org/summer-school/2020/superconducting-qubits-i-quantizingharmonic-oscillator-josephson-junctions'
    },
    {
      image: 'QGSS-Lec7-CoverImage.png',
      label: 'Superconducting Qubits II: Circuit Quantum Electrodynamics, Readout and Calibration Methods',
      segment: { cta: 'lecture-7', location: 'summer-school-2020' },
      url: 'https://learn.qiskit.org/summer-school/2020/superconducting-qubits-ii-circuit-electrodynamics-readout-calibration-methods'
    },
    {
      image: 'QGSS-Lec8-CoverImage.png',
      label: 'Quantum Chemistry I: Obtaining the Qubit Hamiltonian for H2 and LiH',
      segment: { cta: 'lecture-8', location: 'summer-school-2020' },
      url: 'https://learn.qiskit.org/summer-school/2020/chemistry-i-obtaining-qubit-hamiltonian-h2-lih'
    },
    {
      image: 'QGSS-Lec9-CoverImage.png',
      label: 'Quantum Chemistry II: Finding the Ground States of H2 and LiH',
      segment: { cta: 'lecture-9', location: 'summer-school-2020' },
      url: 'https://learn.qiskit.org/summer-school/2020/chemistry-ii-finding-ground-states-h2-lih'
    },
    {
      image: 'QGSS-Lec10-CoverImage.png',
      label: 'Careers in Quantum Computing',
      segment: { cta: 'lecture-10', location: 'summer-school-2020' },
      url: 'https://learn.qiskit.org/summer-school/2020/careers-in-computing'
    }
  ]

  summerSchool2020Prerequisites: Prerequisite[] = [
     {
      title: 'Probability Theory: Random Variables and Distributions',
      description:
        'Probabilities help us deal with unknowns. As quantum mechanics is an extension of probability theory, being comfortable with probabilities will make your quantum computing journey easier.',
      segment: {
        cta: 'probability-theory', location: 'related-material'
      },
      url:
        'https://www.khanacademy.org/math/statistics-probability/random-variables-stats-library'
    },
    {
      title: 'Multiplying matrices by matrices',
      description:
        'In order to make the best out of these lectures, we recommend you are comfortable with linear algebra. In this short video series, Sal Khan talks you through matrix multiplication.',
      segment: {
        cta: 'khan-academy-matrix-multiplication', location: 'related-material'
      },
      url:
        'https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:matrices/x9e81a4f98389efdf:multiplying-matrices-by-matrices/v/matrix-multiplication-intro'
    },
    {
      title: 'Linear Algebra',
      description:
        'If you need to brush up on important linear algebra concepts, check out this review page in the Qiskit Textbook.',
      segment: {
        cta: 'linear-algebra', location: 'related-material'
      },
      url:
        'https://learn.qiskit.org/course/ch-appendix/an-introduction-to-linear-algebra-for-quantum-computing'
    }
      ]

  imageUrlBase = '/images/textbook-beta/summer-school/intro-quantum-computing-quantum-hardware-2020'
}
</script>

<style lang="scss" scoped>
.summer-school-page {
  &__section {
    @include contained();

    max-width: $max-size;
    margin-bottom: $layout-03;
    margin-top: $layout-05;
  }

  &__content-menu {
    position: sticky;
    top: 0;
    z-index: 100;
  }
}
</style>

<style lang="scss">
.summer-school-page {
  .course-pages-section__main {
    max-height: 32.5rem;
  }
}
</style>
