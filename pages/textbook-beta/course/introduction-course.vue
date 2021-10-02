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
    <PrerequisiteMaterialSection class="introduction-course-page__section" />
    <ExternalRecommendedReadings class="introduction-course-page__section" :links="links" />
    <CoursePagesSection class="introduction-course-page__section" />
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import { GeneralLink, textbookBetaIntroductionCourseStartLearningUrl } from '~/constants/appLinks'

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
}
</script>

<style lang="scss" scoped>
.introduction-course-page {
  &__section {
    @include contained();

    max-width: $max-size;
    margin-bottom: $spacing-07;
    margin-top: $layout-05;
  }

  &__content-menu {
    position: sticky;
    top: 0;
    z-index: 100;
  }
}
</style>
