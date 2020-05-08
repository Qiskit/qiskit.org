<template>
  <section class="the-hero-moment">
    <article class="the-hero-moment__content">
      <VersionInfo class="the-hero-moment__version-info" />
      <h1 class="the-hero-moment__title">
        Open-Source Quantum Development
      </h1>
      <p class="the-hero-moment__description">
        Qiskit [kiss-kit] is an open source SDK for working with quantum
        computers at the level of pulses, circuits and algorithms.
      </p>
      <LandingCta
        class="the-hero-moment__cta"
        href="https://qiskit.org/documentation/install.html"
      >
        Get started
      </LandingCta>
    </article>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import VersionInfo from './VersionInfo.vue'
import LandingCta from './LandingCta.vue'

@Component({
  components: { VersionInfo, LandingCta }
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.the-hero-moment {
  position: relative;
  display: flex;
  padding: 0 $spacing-05;

  &__picture {
    position: absolute;
    top: -12rem;
    right: -14rem;
  }

  &__content {
    position: relative;
    margin: 0;
    padding: 0;
    max-width: $medium / 2;
    display: flex;
    flex-direction: column;

    @include mq($from: medium) {
      width: 50%;
      max-width: unset;
    }
  }

  &__version-info {
    margin: 0 0 $spacing-09;
    padding: 0;
  }

  &__title {
    @include type-style('display-01', true);
    color: $white-text-01;
    margin: 0 0 $spacing-09;
    padding: 0;
    width: 100%;
  }

  &__description {
    @include type-style('body-short-02');
    color: $white-text-01;
    margin: 0 0 (3 * $spacing-09);
    padding: 0 25% 0 0;
  }

  &__cta {
    @include type-style('body-short-01');
    margin-top: auto;
  }
}
</style>
