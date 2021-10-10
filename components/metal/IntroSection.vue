<template>
  <section class="intro-section">
    <div class="intro-section__container">
      <div class="bx--row">
        <h2 class="bx--col-md-6 bx--col-lg-8">
          Qiskit Metal | quantum device design is now open
        </h2>
      </div>
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
        v-bind="joinWaitingListLink"
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
  joinWaitingListLink = {
    url: 'https://qiskit.org/documentation/metal',
    label: 'Get started now'
  }
}
</script>

<style lang="scss" scoped>
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

    padding-top: $spacing-10;
    padding-bottom: 0;
  }

  &__content {
    display: flex;
    flex-direction: row;

    @include mq($until: medium) {
      flex-direction: column;
    }
  }

  &__description {
    max-width: 6 * $column-size-large;
    margin-bottom: $spacing-12;
    padding-right: $spacing-07;

    @include mq($until: large) {
      margin-bottom: $spacing-07;
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
      margin-bottom: $spacing-07;
    }
  }

  &__cta {
    position: relative;
    top: -3.2rem;

    @include mq($until: large) {
      top: 0;
      margin-top: $spacing-07;
    }
  }
}
</style>
