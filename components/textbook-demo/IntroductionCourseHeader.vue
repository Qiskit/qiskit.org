<template>
  <header class="introduction-course-header">
    <div class="bx--grid introduction-course-header__container">
      <div class="bx--row introduction-course-header__top-link">
        <BasicLink
          class="bx--col introduction-course-header__top-link__link"
          url="/textbook-demo"
        >
          <ArrowLeft16 />
          <span>Home</span>
        </BasicLink>
      </div>
    </div>
    <AppPageHeaderWithImage
      :cta="startLearningCTA"
      :img-link="headerImg"
    >
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
@import "~carbon-components/scss/globals/scss/typography";

.introduction-course-header {
  &__top-link {
    align-items: center;
    display: flex;
    grid-area: top-link;

    &__link {
      @include type-style("body-short-01");

      align-items: center;
      color: $purple-70;
      display: flex;
      gap: $spacing-04;
    }
  }
}
</style>
