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
        <p
          v-for="(paragraph, index) in headerDescription"
          :key="index"
          v-text="paragraph"
        />
      </template>
      <template slot="image">
        <img class="app-page-header-with-img__image" :src="headerImg">
      </template>
    </AppPageHeaderWithImage>
    <PrerequisiteMaterialSection class="summer-school-page__section" :data="summerSchool2021Prerequisites" />
    <LinkListSection class="summer-school-page__section" :links="links" />
    <CoursePagesSection class="summer-school-page__section" :courses="courses" :img-base="imageUrlBase" />
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import { CtaClickedEventProp } from '~/constants/segment'
import { GeneralLink, summerSchoolCourseStartLearningUrl } from '~/constants/appLinks'

interface Course {
  image: string;
  label: string;
  segment: CtaClickedEventProp;
  url: string;
}

@Component({
  layout: 'default-max',
  head () {
    return {
      title: '2021 Qiskit Global Summer School on Quantum Machine Learning'
    }
  }
})
export default class SummerSchoolCoursePage extends QiskitPage {
  routeName: string = 'summer-school/quantum-computing-and-quantum-learning-2021'

  headerTitle = '2021 Qiskit Global Summer School on Quantum Machine Learning'
  headerDescription = ['Quantum computing experts and mentors share valuable insights through twenty lectures and five applied lab exercises that provide deep-dives exploring concepts in quantum computing, focused on the implementations of quantum machine learning algorithms in Qiskit.']

      headerImg = '/images/textbook-beta/summer-school/quantum-computing-and-quantum-learning-2021/header.png'

  backToTextbookHomeLink = {
    url: '/textbook-beta',
    label: 'Home',
    segment: {
      cta: 'back-to-textbook-home', location: 'header'
    }
  }

  startLearningCTA: GeneralLink = {
    url: summerSchoolCourseStartLearningUrl,
    label: 'Start learning',
    segment: {
      cta: 'introduction', location: 'header'
    }
  }

  links: GeneralLink[] = [
    {
      url: 'http://mmrc.amss.cas.cn/tlb/201702/W020170224608149940643.pdf',
      label: 'Quantum Computation and Quantum Information by Nielsen & Chuang',
      segment: {
        cta: 'qc-qi-pdf',
        location: 'external-recommended-readings'
      }
    },
    {
      url: 'https://www.deeplearningbook.org/',
      label: 'Deep Learning by Ian Goodfellow et al',
      segment: {
        cta: 'deep-learning',
        location: 'external-recommended-readings'
      }
    }
  ]

  courses: Course[] = [
    {
      image: 'QGSS2021_Lecture1.1_CoverImage.png',
      label: 'Vector Spaces, Tensor Products, and Qubits',
      segment: { cta: 'lecture-1-1', location: 'summer-school-2021' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec1-1'
    },
    {
      image: 'QGSS2021_Lecture1.2_CoverImage.png',
      label: 'Introduction to Quantum Circuits',
      segment: { cta: 'lecture-1-2', location: 'summer-school-2021' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec1-2'
    },
    {
      image: 'QGSS2021_Lecture2.1_CoverImage.png',
      label: 'Simple Quantum Algorithms I',
      segment: { cta: 'lecture-2-1', location: 'summer-school-2021' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec2-1'
    },
    {
      image: 'QGSS2021_Lecture2.2_CoverImage.png',
      label: 'Simple Quantum Algorithms II',
      segment: { cta: 'lecture-2-2', location: 'summer-school-2021' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec2-2'
    },
    {
      image: 'QGSS2021_Lecture3.1_CoverImage.png',
      label: 'Noise in Quantum Computers pt 1',
      segment: { cta: 'lecture-3-1', location: 'summer-school-2021' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec3-1'
    },
    {
      image: 'QGSS2021_Lecture3.2_CoverImage.png',
      label: 'Noise in Quantum Computers pt. 2',
      segment: { cta: 'lecture-3-2', location: 'summer-school-2021' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec3-2'
    },
    {
      image: 'QGSS2021_Lab1_CoverImage.png',
      label: 'Introduction to Quantum Computing Algorithms and Operations',
      segment: { cta: 'lab-1', location: 'summer-school-2021' },
      url: 'https://learn.qiskit.org/course/qgss2021/lab1'
    },
    // {
    //   image: 'QGSS2021_Lecture3.2BonusContent_CoverImage.png',
    //   label: 'Bonus Content: Noise in Quantum Computers',
    //   segment: { cta: 'lecture-3', location: 'summer-school-2021' },
    //   url: 'https://learn.qiskit.org/course/qgss2021/lec3'
    // },
    {
      image: 'QGSS2021_Lecture4.1_CoverImage.png',
      label: 'Introduction to Classical Machine Learning',
      segment: { cta: 'lecture-4-1', location: 'summer-school-2021' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec4-1'
    },
    {
      image: 'QGSS2021_Lecture4.2_CoverImage.png',
      label: 'Advanced Classical Machine Learning',
      segment: { cta: 'lecture-4-2', location: 'summer-school-2021' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec4-2'
    },
    {
      image: 'QGSS2021_Lecture5.1_CoverImage.png',
      label: 'Building a Quantum Classifier',
      segment: { cta: 'lecture-5-1', location: 'summer-school-2021' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec5-1'
    },
    {
      image: 'QGSS2021_Lecture5.2_CoverImage.png',
      label: 'Introduction to the Quantum Approximate Optimization Algorithm and Applications',
      segment: { cta: 'lecture-5-2', location: 'summer-school-2021' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec5-2'
    },
    {
      image: 'QGSS2021_Lab2_CoverImage.png',
      label: 'Introduction to Variational Algorithms',
      segment: { cta: 'lab2', location: 'summer-school-2021' },
      url: 'https://learn.qiskit.org/course/qgss2021/lab2'
    },
    {
      image: 'QGSS2021_Lecture6.1_CoverImage.png',
      label: 'From Variational Classifiers to Linear Classifiers',
      segment: { cta: 'lecture-6-1', location: 'summer-school-2021' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec6-1'
    },
    {
      image: 'QGSS2021_Lecture6.2_CoverImage.png',
      label: 'Quantum Feature Spaces and Kernels',
      segment: { cta: 'lecture-6-2', location: 'summer-school-2021' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec6-2'
    },
    {
      image: 'QGSS2021_Lecture7.1_CoverImage.png',
      label: 'Quantum Kernels in Practice',
      segment: { cta: 'lecture-7-1', location: 'summer-school-2021' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec7-1'
    },
    {
      image: 'QGSS2021_Lab3_CoverImage.png',
      label: 'Introduction to Quantum Kernels and Support Vector Machines',
      segment: { cta: 'lab3', location: 'summer-school-2021' },
      url: 'https://learn.qiskit.org/course/qgss2021/lab3'
    },
    {
      image: 'QGSS2021_Lecture8.1_CoverImage.png',
      label: 'Introduction and Applications of Quantum Models',
      segment: { cta: 'lecture-8-1', location: 'summer-school-2021' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec8-1'
    },
    {
      image: 'QGSS2021_Lecture8.2_CoverImage.png',
      label: 'Barren Plateaus, Trainability Issues, and How to Avoid Them',
      segment: { cta: 'lecture-8-2', location: 'summer-school-2021' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec8-2'
    },
    {
      image: 'QGSS2021_Lab4_CoverImage.png',
      label: 'Introduction to Training Quantum Circuits',
      segment: { cta: 'lab4', location: 'summer-school-2021' },
      url: 'https://learn.qiskit.org/course/qgss2021/lab4'
    },
    {
      image: 'QGSS2021_Lecture9.1_CoverImage.png',
      label: 'Introduction to Quantum Hardware',
      segment: { cta: 'lecture-9-1', location: 'summer-school-2021' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec9-1'
    },
    {
      image: 'QGSS2021_Lecture9.2_CoverImage.png',
      label: 'Hardware Efficient Ansatze for Quantum Machine Learning',
      segment: { cta: 'lecture-9-2', location: 'summer-school-2021' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec9-2'
    },
    {
      image: 'QGSS2021_Lab5_CoverImage.png',
      label: 'Introduction to Hardware Efficient Ansatze for Quantum Machine Learning',
      segment: { cta: 'lab5', location: 'summer-school-2021' },
      url: 'https://learn.qiskit.org/course/qgss2021/lab5'
    },
    {
      image: 'QGSS2021_Lecture10.1_CoverImage.png',
      label: 'Advanced QML Algorithms: Quantum Boltzmann Machines and Quantum Generative Adversarial Networks',
      segment: { cta: 'lecture-10-1', location: 'summer-school-2021' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec10-1'
    },
    {
      image: 'QGSS2021_Lecture10.2_CoverImage.png',
      label: 'The Capacity and Power of Quantum Machine Learning Models & the Future of Quantum Machine Learning',
      segment: { cta: 'lecture-10-2', location: 'summer-school-2021' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec10-2'
    }
  ]

  summerSchool2021Prerequisites = [
    {
      title: 'Introduction to Quantum Computing and Quantum Hardware',
      description:
        'The Qiskit Global Summer School 2020 coursework, lab, and lecture materials are available online.',
      segment: {
        cta: 'intro-qc-qh-21', location: 'related-material'
      },
      url:
        'https://qiskit.org/learn/intro-qc-qh'
    },
    {
      title: 'Python Programming',
      description:
        'Python is a programming language where you don\'t need to compile. You can just run it line by line...',
      segment: {
        cta: 'python-programming', location: 'related-material'
      },
      url:
        'https://learn.qiskit.org/course/ch-prerequisites/introduction-to-python-and-jupyter-notebooks'
    },
    {
      title: 'Linear Algebra',
      description:
        'Linear algebra is the language of quantum computing. Develop a good understanding of the basic mathematical concepts that linear algebra is built upon.',
      segment: {
        cta: 'linear-algebra', location: 'related-material'
      },
      url:
        'https://qiskit.org/textbook/ch-appendix/linear_algebra.html'
    },
    {
      title: 'Probability Theory — Random Variables and Distributions',
      description:
        'Probabilities help us deal with unknowns. Quantum mechanics is an extension of probability theory, so being comfortable with probabilities will make your quantum computing journey easier.',
      segment: {
        cta: 'probability-theory', location: 'related-material'
      },
      url:
        'https://www.khanacademy.org/math/statistics-probability/random-variables-stats-library'
    }
  ]

  imageUrlBase = '/images/textbook-beta/summer-school/quantum-computing-and-quantum-learning-2021'
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
