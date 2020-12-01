<template>
  <section class="intro-section">
    <div class="intro-section__container">
      <h2 class="intro-section__title">
        Early access for quantum device design project now open
      </h2>
      <div class="intro-section__content">
        <p class="intro-section__description">
          Our vision is to develop a community-driven universal toolkit capable of orchestrating quantum chip development from concept to fabrication in a simple, scalable, and open framework.
          <br><br>
          A first-of-its-kind, open-source project for engineers and scientists to design superconducting quantum devices with ease: Qiskit Metal.
        </p>
        <iframe
          class="intro-section__video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/C5jDrZgLQ_s"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <AppCta
        class="intro-section__cta"
        v-bind="requestEarlyAccessLink"
        theme="dark"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class IntroSection extends Vue {
  requestEarlyAccessLink = {
    url: 'http://qisk.it/metal',
    label: 'Request early access'
  }
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.intro-section {
  position: relative;
  margin-top: -18.5rem;

  @include mq($until: large) {
    margin-top: -8rem;
  }
  @include mq($until: medium) {
    margin-top: -5rem;
  }

  &__container {
    @include contained();
    padding-top: $layout-05;
    padding-bottom: 0;
  }

  &__title {
    @include type-style('expressive-heading-05');
    max-width: 8 * $column-size-large;
    margin-bottom: $layout-03;
    font-weight: 300;

    @include mq($until: large) {
      @include type-style('expressive-heading-04');
    }
  }

  &__content {
    display: flex;
    flex-direction: row;

    @include mq($until: medium) {
      flex-direction: column;
    }
  }

  &__description {
    @include type-style('body-long-01');
    max-width: 6 * $column-size-large;
    margin-bottom: $layout-06;
    padding-right: $spacing-07;

    @include mq($until: large) {
      margin-bottom: $layout-03;
    }

    @include mq($from: medium, $until: large) {
      max-width: 4 * $column-size-medium;
    }

    @include mq($until: medium) {
      max-width: 100%;
    }
  }

  &__video {
    width: 100%;

    @include mq($until: medium) {
      margin-bottom: $layout-03;
    }
  }

  &__cta {
    position: relative;
    top: -3.2rem;

    @include mq($until: large) {
      top: 0;
      margin-top: $layout-03;
    }
  }
}
</style>
