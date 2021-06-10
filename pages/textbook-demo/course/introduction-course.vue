<template>
  <main class="introduction-course-page">
    <TextbookDemoContentMenuSection />
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
import { GeneralLink, textbookDemoIntroductionCourseStartLearningUrl } from '~/constants/appLinks'

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

  headerImg = '/images/textbook-demo/course/introduction-course/header.jpg'

  backToTextbookHomeLink = {
    url: '/textbook-demo',
    label: 'Home',
    segment: {
      action: `${this.routeName} > header > back-to-textbook-home`
    }
  }

  startLearningCTA: GeneralLink = {
    url: textbookDemoIntroductionCourseStartLearningUrl,
    label: 'Start learning',
    segment: {
      action: `${this.routeName} > header > introduction`
    }
  }

  segmentActionBase = `${this.routeName} > external-recommended-readings >`

  links: GeneralLink[] = [
    {
      url: 'https://math.mit.edu/~gs/linearalgebra/',
      label: 'https://math.mit.edu/~gs/linearalgebra/',
      segment: {
        action: `${this.segmentActionBase} mit-linear-algebra`
      }
    },
    {
      url: 'https://machinelearningmastery.com/gentle-introduction-linear-algebra/',
      label: 'https://machinelearningmastery.com/gentle-introduction-linear-algebra/',
      segment: {
        action: `${this.segmentActionBase} mlmastery-linear-algebra`
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
    margin-bottom: $layout-03;
    margin-top: $layout-05;
  }
}
</style>
