<template>
  <header class="introduction-course-header">
    <div class="introduction-course-header__container">
      <div class="introduction-course-header__top-link">
        <BasicLink
          class="introduction-course-header__top-link__link"
          url="/textbook-demo"
        >
          <ArrowLeft16 />
          <span>Home</span>
        </BasicLink>
      </div>

      <div class="introduction-course-header__main">
        <div>
          <AppPageHeaderTitle>
            Introduction to Quantum Computing
          </AppPageHeaderTitle>
          <img
            class="introduction-course-header__main-image"
            src="/images/textbook-demo/learning-paths/introduction-course/header.jpg"
          >
          <div class="introduction-course-header__description">
            <p>
              This short learning path contains around 3 hours of content and is
              aimed at self-learners from all backgrounds (technical and
              non-technical). The aim of this course is to give a solid
              understanding of the principles behind quantum computing,
              focussing on developing intuition. After this course, you will
              have a fair understanding of quantum computing and Qiskit, as well
              as a short project demonstrating it. You should then be able to
              jump straight into many of the other learning paths in this
              textbook when they are ready, including traditional algorithms and
              protocols, near term quantum algorithms, and quantum machine
              learning.
            </p>
          </div>
        </div>
        <AppCta v-bind="startLearningCTA" />
      </div>

      <div class="introduction-course-header__aside">
        <img
          class="introduction-course-header__aside-image"
          src="/images/textbook-demo/learning-paths/introduction-course/header.jpg"
        >
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { TEXTBOOK_DEMO_INTRODUCTION_COURSE_START_LEARNING } from '~/constants/appLinks'

@Component
export default class AppPageHeader extends Vue {
  startLearningCTA = TEXTBOOK_DEMO_INTRODUCTION_COURSE_START_LEARNING
}
</script>

<style lang="scss" scoped>
@import "~carbon-components/scss/globals/scss/typography";
@import "~/assets/scss/blocks/copy.scss";

$top-link-height: 4.375rem;
$top-link-height-large: 3.75rem;

.introduction-course-header {
  &__container {
    @include contained();
    max-width: $max-size;
    display: grid;
    column-gap: $spacing-07;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: $top-link-height auto;
    grid-template-areas:
      "top-link top-link top-link top-link"
      "main main . aside";

    @include mq($until: large) {
      grid-template-rows: $top-link-height-large auto;
    }

    @include mq($until: medium) {
      grid-template-columns: repeat(8, 1fr);
      grid-template-areas:
        "top-link top-link top-link top-link top-link top-link top-link top-link"
        "main main main main main aside aside aside";
    }

    @include mq($until: small) {
      grid-template-columns: 1fr;
      grid-template-areas:
        "top-link"
        "main"
        "aside";
    }
  }

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

  &__main {
    display: flex;
    flex-flow: column;
    gap: $spacing-05;
    grid-area: main;
    justify-content: space-between;

    @include mq($until: x-large) {
      gap: $spacing-06;
    }

    @include mq($until: large) {
      gap: $spacing-09;
    }
  }

  &__main-image {
    display: none;

    @include mq($until: small) {
      display: block;
      margin-top: $spacing-05;
      width: 100%;
    }
  }

  &__description {
    color: $cool-gray-80;
    margin-top: $spacing-05;

    @include mq($until: x-large) {
      margin-top: $spacing-06;
    }

    @include mq($until: large) {
      margin-top: $spacing-09;
    }

    > p {
      @include type-style("body-long-01");
    }
  }

  &__aside {
    display: flex;
    grid-area: aside;
    justify-content: flex-end;

    @include mq($until: medium) {
      margin-top: $spacing-09;
    }

    @include mq($until: small) {
      display: none;
    }
  }

  &__aside-image {
    height: max-content;
    max-width: 100%;
  }
}
</style>
