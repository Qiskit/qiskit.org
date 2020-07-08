<template>
  <article class="the-hero-moment">
    <div
      lazy-background="/images/landing-page/hero-illustration.png"
      class="the-hero-moment__container"
    >
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
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

import { Prop, Component } from 'vue-property-decorator'
import VersionInfo from '~/components/landing/TheHeroMoment/VersionInfo.vue'
import LandingCta from '~/components/landing/LandingCta.vue'

@Component({
  components: { VersionInfo, LandingCta }
})
export default class extends Vue {
  @Prop({ type: String, required: true }) version!: string
}
</script>

<style lang="scss">
@import '~carbon-components/scss/globals/scss/typography';

.the-hero-moment {
  @include responsive-grid-bg-strip('/images/grid/grid-hero.svg', auto, 56rem);

  position: relative;
  overflow: hidden;
  padding-top: $layout-05;
  margin-bottom: $layout-05;
  // In Figma, the height is not enforced but the background is always
  // visible completely so we do it in the CSS. A small correction is needed
  // to be able of displaying the bottom lines of the grid.
  height: calc(56rem + 2px);

  @include mq($from: medium, $until: large) {
    margin-bottom: $layout-06;
    // To adjust to the size of the smaller grid.
    height: calc(#{56rem * 40 / 64} + 2px);
  }

  @include mq($until: medium) {
    margin-bottom: 0;
    // To adjust to the size of the smaller grid.
    height: calc(#{56rem * 40 / 64} + 2px);
  }

  &__container {
    @include contained();

    position: relative;
    background-position: right center;
    background-repeat: no-repeat;
    background-size: 70% auto;

    @include mq($from: medium, $until: large) {
      background-size: contain;
    }

    @include mq($until: medium) {
      background-image: none;
    }
  }

  &__version-info {
    margin: $layout-01 0 $layout-05;

    @include mq($from: medium, $until: large) {
      margin: 0 0 $layout-03;
    }

    @include mq($until: medium) {
      // Differs from Figma to make it match with medium spacer.
      margin: 0 0 $layout-03;
    }
  }

  &__title {
    @include type-style('display-01', true);
    color: $white-text-01;
    margin: 0 0 $layout-05;
    max-width: 6 * $column-size-large;

    @include mq($from: medium, $until: large) {
      // Notice the difference with the small version. This space is much more
      // small since it is in the spacing scale.
      margin: 0 0 $spacing-03;
      max-width: 4 * $column-size-medium;
    }

    @include mq($until: medium) {
      margin: 0 0 $layout-03;
      max-width: 4 * $column-size-medium;
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
      margin-bottom: $layout-05;
    }

    @include mq($until: medium) {
      @include type-style('label-01');
      max-width: 3 * $column-size-small;
      margin-bottom: $layout-03;
    }
  }

  &__cta {
    @include type-style('body-short-01');
  }
}
</style>
