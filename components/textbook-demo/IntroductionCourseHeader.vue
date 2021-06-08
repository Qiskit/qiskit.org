<template>
  <header class="introduction-course-header">
    <div class="bx--grid">
      <div class="bx--row">
        <AppNavBackLink
          label="Home"
          url="/textbook-demo"
          class="introduction-course-header__back-link"
        />
      </div>
    </div>
    <AppPageHeaderWithImage :cta="startLearningCTA">
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
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { GeneralLink, textbookDemoIntroductionCourseStartLearningUrl } from '~/constants/appLinks'

@Component
export default class IntroductionCourseHeader extends Vue {
  headerTitle = 'Introduction to Quantum Computing'
  headerDescription = [`This short learning path contains around 3 hours of content and is
    aimed at self-learners from all backgrounds (technical and
    non-technical). The aim of this course is to give a solid
    understanding of the principles behind quantum computing,
    focussing on developing intuition. After this course, you will
    have a fair understanding of quantum computing and Qiskit, as well
    as a short project demonstrating it. You should then be able to
    jump straight into many of the other learning paths in this
    textbook when they are ready, including traditional algorithms and
    protocols, near term quantum algorithms, and quantum machine
    learning.`]

  headerImg = '/images/textbook-demo/learning-paths/introduction-course/header.jpg'

  startLearningCTA: GeneralLink = {
    url: textbookDemoIntroductionCourseStartLearningUrl,
    label: 'Start learning',
    segment: {
      action: 'introduction-course > header > introduction'
    }
  }
}
</script>

<style lang="scss" scoped>
  $top-link-height: 4.375rem;
  $top-link-height-large: 3.75rem;

  .introduction-course-header {
    &__back-link {
      position: absolute;
      height: $top-link-height;

      // TODO: Remove !important when updating AppNavBackLink with carbon grid
      padding-left: 1rem !important;

      @include mq($until: large) {
        height: $top-link-height-large;
      }
    }
  }
</style>
