<template>
  <section class="the-hero-moment">
    <article class="the-hero-moment__content">
      <section class="the-hero-moment__version-info">
        qiskit version info
      </section>
      <h1 class="the-hero-moment__title">
        Open-Source Quantum Computing
      </h1>
      <p class="the-hero-moment__description">
        Qiskit [kiss-kit] is an open source SDK for working with quantum
        computers at the level of pulses, circuits and algorithms.
      </p>
      <section class="the-hero-moment__cta">
        Get started
      </section>
    </article>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class extends Vue {}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.the-hero-moment {
  display: flex;
  padding: 0 $spacing-05;

  &__content {
    margin: 0;
    padding: 0;
    width: 50%;
    display: flex;
    flex-direction: column;
  }

  &__version-info {
    margin: 0 0 $spacing-09;
    padding: 0;
  }

  &__title {
    margin: 0 0 $spacing-09;
    padding: 0;
    width: 100%;
  }

  &__description {
    margin: 0 0 $spacing-09;
    padding: 0 25% 0 0;
  }

  &__cta {
    margin-top: auto;
  }
}
</style>
