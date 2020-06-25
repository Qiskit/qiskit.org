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
        url="https://qiskit.org/documentation/install.html"
        @click="$trackClickEvent({
          action: 'Get Started'
        })"
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
  background-image: url("/images/hero-illustration.png");
  background-position: right center;
  background-repeat: no-repeat;
  background-size: 70% auto;

  @include mq($from: medium, $until: large) {
    background-size: contain;
  }

  @include mq($until: medium) {
    background-image: none;
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
    @include type-style('body-long-01');
    color: $gray-60;
    max-width: 5 * $column-size-large;
    margin: 0 0 $layout-06;

    @include mq($from: medium, $until: large) {
      @include type-style('label-01');
      max-width: 3 * $column-size-medium;
    }

    @include mq($until: medium) {
      @include type-style('label-01');
      max-width: 3 * $column-size-small;
    }
  }

  &__cta {
    @include type-style('body-short-01');
  }
}
</style>
