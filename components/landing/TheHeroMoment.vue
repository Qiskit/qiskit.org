<template>
  <section class="the-hero-moment">
    <article class="the-hero-moment__content">
      <VersionInfo
        class="the-hero-moment__version-info"
        :version="version"
      />
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
import { Component, Prop } from 'vue-property-decorator'
import VersionInfo from './VersionInfo.vue'
import LandingCta from './LandingCta.vue'

@Component({
  components: { VersionInfo, LandingCta }
})
export default class extends Vue {
  @Prop({ type: String, required: true }) version!: string
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.the-hero-moment {
  position: relative;

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
    margin: 0 0 $layout-06;
    padding: 0;

    @include mq($from: medium, $until: large) {
      margin: 0 0 $layout-05;
    }

    @include mq($until: medium) {
      margin: 0 0 $layout-05;
    }
  }

  &__title {
    @include type-style('display-01', true);
    color: $white-text-01;
    margin: 0 0 $layout-05;
    padding: 0;
    width: 100%;

    @include mq($from: medium, $until: large) {
      margin: 0 0 $layout-03;
    }

    @include mq($until: medium) {
      margin: 0 0 $layout-03;
    }
  }

  &__description {
    @include type-style('body-short-02');
    color: $white-text-01;
    margin: 0 0 $layout-06;
    padding: 0 25% 0 0;

    @include mq($from: medium, $until: large) {
      @include type-style('body-short-01');
      margin: 0 0 $layout-05;
    }

    @include mq($until: medium) {
      @include type-style('body-short-01');
      margin: 0 0 $layout-03;
    }
  }

  &__cta {
    @include type-style('body-short-01');
  }
}
</style>
