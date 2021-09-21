<template>
  <main class="introduction-course-page">
    <TextbookBetaContentMenuSection
      class="introduction-course-page__content-menu"
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
    <PrerequisiteMaterialSection class="introduction-course-page__section" :data="introductionCoursePrerequisites" />
    <LinkListSection class="introduction-course-page__section" :links="links" />
    <CoursePagesSection class="introduction-course-page__section" :courses="courses" :img-base="imageUrlBase" />
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import { GeneralLink, textbookBetaIntroductionCourseStartLearningUrl } from '~/constants/appLinks'
import { CtaClickedEventProp } from '~/constants/segment'

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
      title: 'Introduction course'
    }
  }
})
export default class IntroductionCoursePage extends QiskitPage {
  routeName: string = 'introduction-course'

  headerTitle = 'Introduction to Quantum Computing'
  headerDescription = [`This short course contains around 3 hours of content and is
    aimed at self-learners from all backgrounds (technical and
    non-technical). The aim of this course is to give a solid
    understanding of the principles behind quantum computing,
    focussing on developing intuition. After this course, you will
    have a fair understanding of quantum computing and Qiskit, as well
    as a short project demonstrating it. You should then be able to
    jump straight into many of the other courses in this
    textbook when they are ready, including traditional algorithms and
    protocols, near term quantum algorithms, and quantum machine
    learning.`]

  headerImg = '/images/textbook-beta/course/introduction-course/header.png'

  backToTextbookHomeLink = {
    url: '/textbook-beta',
    label: 'Home',
    segment: {
      cta: 'back-to-textbook-home', location: 'header'
    }
  }

  startLearningCTA: GeneralLink = {
    url: textbookBetaIntroductionCourseStartLearningUrl,
    label: 'Start learning',
    segment: {
      cta: 'introduction', location: 'header'
    }
  }

  links: GeneralLink[] = [
    {
      url: 'https://math.mit.edu/~gs/linearalgebra/',
      label: 'https://math.mit.edu/~gs/linearalgebra/',
      segment: {
        cta: 'mit-linear-algebra',
        location: 'external-recommended-readings'
      }
    },
    {
      url: 'https://machinelearningmastery.com/gentle-introduction-linear-algebra/',
      label: 'https://machinelearningmastery.com/gentle-introduction-linear-algebra/',
      segment: {
        cta: 'mlmastery-linear-algebra',
        location: 'external-recommended-readings'
      }
    }
  ]

  courses: Course[] = [
    {
      image: 'why-quantum-computing-preview.png',
      label: 'Why quantum computing?',
      segment: { cta: 'why-quantum-computing', location: 'course' },
      url: textbookBetaIntroductionCourseStartLearningUrl
    },
    {
      image: 'the-atoms-of-computation-preview.png',
      label: 'The atoms of computation',
      segment: { cta: 'the-atoms-of-computation', location: 'course' },
      url: 'https://learn.qiskit.org/course/introduction/the-atoms-of-computation'
    },
    {
      image: 'what-is-quantum-preview.png',
      label: 'What is quantum?',
      segment: { cta: 'what-is-quantum', location: 'course' },
      url: 'https://learn.qiskit.org/course/introduction/what-is-quantum'
    },
    {
      image: 'describing-quantum-computers-preview.png',
      label: 'Describing quantum computers',
      segment: { cta: 'describing-quantum-computers', location: 'course' },
      url: 'https://learn.qiskit.org/course/introduction/describing-quantum-computers'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Entangled states',
      segment: { cta: 'entangled-states', location: 'course' },
      url: 'https://learn.qiskit.org/course/introduction/entangled-states'
    },
    {
      image: 'visualizing-entanglement-preview.png',
      label: 'Visualizing Entanglement',
      segment: { cta: 'visualizing-entanglement-preview', location: 'course' },
      url: 'https://learn.qiskit.org/course/introduction/visualizing-entanglement'
    },
    {
      image: 'grovers-search-algorithm-preview.png',
      label: 'Grover’s search algorithm',
      segment: { cta: 'grovers-search-algorithm', location: 'course' },
      url: 'https://learn.qiskit.org/course/introduction/grovers-search-algorithm'
    },
    {
      image: 'project-preview.png',
      label: 'Project',
      segment: { cta: 'project', location: 'course' },
      url: 'https://learn.qiskit.org/course/introduction/project'
    }
  ]

  introductionCoursePrerequisites = [
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

  imageUrlBase = '/images/textbook-beta/course/introduction-course'
}
</script>

<style lang="scss" scoped>
.introduction-course-page {
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
