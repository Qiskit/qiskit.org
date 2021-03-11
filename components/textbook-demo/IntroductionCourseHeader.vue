<template>
  <header class="introduction-course-header">
    <div class="introduction-course-header__container">
      <div class="introduction-course-header__top-link">Home</div>

      <div class="introduction-course-header__main">
        <div>
          <AppPageHeaderTitle>
            Introduction to Quantum Computing
          </AppPageHeaderTitle>
          <div class="introduction-course-header__description">
            <p>
              This short learning path contains around X hours of content and is
              aimed at self-learners from all backgrounds (technical and
              non-technical). The aim of this course is to give a solid
              understanding of the principles behind quantum computing,
              focussing on developing intuition. After this course, you will
              have a fair understanding of quantum computing and Qiskit, as well
              as a short project demonstrating it. You should then be able to
              jump straight into many of the other learning paths in this
              textbook, including traditional algorithms and protocols, near
              term quantum algorithms, and quantum machine learning.
            </p>
          </div>
        </div>
        <AppCta
          label="Start learning"
          url="https://project-platypus-default.apis-dev-5dd5718798d097eccc65fac4e78a33ce-0000.us-south.containers.appdomain.cloud/course/learning-states-and-qubits/introduction"
        />
      </div>

      <div class="introduction-course-header__aside">Aside</div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class AppPageHeader extends Vue {}
</script>

<style lang="scss" scoped>
@import "~carbon-components/scss/globals/scss/typography";
@import "~/assets/scss/blocks/copy.scss";

$top-link-height: 4.375rem;
$top-link-height-large: 3.75rem;

.introduction-course-header {
  &__container {
    @include contained();
    display: grid;
    column-gap: $spacing-07;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: $top-link-height auto;
    grid-template-areas:
      "top-link top-link"
      "main aside";

    @include mq($until: large) {
      grid-template-rows: $top-link-height-large auto;
    }

    @include mq($until: medium) {
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
  }
}
</style>
