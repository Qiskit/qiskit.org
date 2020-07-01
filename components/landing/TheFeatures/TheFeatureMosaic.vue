<template>
  <section class="feature-mosaic">
    <dl class="feature-mosaic__layout">
      <div
        class="
          feature-mosaic__feature
          feature-mosaic__feature-circuits
        "
      >
        <div class="feature-mosaic__feature-copy">
          <dt class="landing-page__subtitle">
            Access to circuits
          </dt>
          <dd class="feature-mosaic__feature-description">
            Access a rich set of well-studied circuits, which can be used as
            benchmarks, building blocks in more complex circuits, or as a tool
            to explore quantum computational advantage.
          </dd>
        </div>
      </div>
      <div
        class="
          feature-mosaic__feature
          feature-mosaic__feature-hardware
        "
      >
        <div
          class="
            feature-mosaic__feature-decoration
            feature-mosaic__feature-decoration-hardware
          "
        />
        <div
          class="
            feature-mosaic__feature-copy
            feature-mosaic__hardware-copy
          "
        >
          <dt class="landing-page__subtitle">
            Hardware Access
          </dt>
          <dd class="feature-mosaic__feature-description">
            Execute code on multiple quantum hardware architectures, from
            superconductivity to trapped-ions.
          </dd>
        </div>
      </div>
      <div class="feature-mosaic__feature feature-mosaic__feature-algorithms">
        <div
          class="
            feature-mosaic__feature-copy
            feature-mosaic__algorithms-copy
          "
        >
          <dt class="landing-page__subtitle">
            Quantum Algorithms
          </dt>
          <dd class="feature-mosaic__feature-description">
            Research and prototype machine learning, optimization and chemistry
            applications by building upon a library of quantum algorithms.
          </dd>
        </div>
        <div
          class="
            feature-mosaic__feature-decoration
            feature-mosaic__feature-decoration-algorithms
          "
        />
      </div>
      <div
        class="
          feature-mosaic__feature
          feature-mosaic__feature-mitigation
        "
      >
        <div class="feature-mosaic__feature-copy">
          <dt class="landing-page__subtitle">
            Noise Mitigation
          </dt>
          <dd class="feature-mosaic__feature-description">
            Study the impact of noise using built in modules such as quantum
            hardware verification, noise characterization, and error correction.
          </dd>
        </div>
      </div>
    </dl>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class extends Vue {}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/landing-page.scss';
@import '~carbon-components/scss/globals/scss/typography';

.feature-mosaic {
  &__layout {
    display: grid;
    gap: $spacing-07;
    grid-template-columns: 3fr 4fr 3fr;
    grid-template-areas:
      "a b c"
      "d d c"
    ;
    justify-items: stretch;

    @include mq($from: medium, $until: large) {
      grid-template-columns: 2fr 3fr;
      grid-template-rows: repeat(3, minmax(10rem, auto));
      grid-template-areas:
        "a b"
        "c c"
        "d d"
      ;
    }

    @include mq($until: medium) {
      display: flex;
      flex-direction: column;
      gap: unset;
    }
  }

  &__feature {
    background-color: $cool-gray-10;
    display: flex;
    flex-direction: column;

    @include mq($until: medium) {
      height: 12rem;
      margin-bottom: $layout-03;
    }

    &:last-child {
      @include mq($until: medium) {
        margin-bottom: 0;
      }
    }
  }

  &__feature-description {
    @include type-style('body-long-01', true);
    color: $cool-gray-60;
    max-width: 6 * $column-size-large;

    @include mq($from: medium, $until: large) {
      @include type-style('label-01');
      max-width: 4 * $column-size-medium;
    }

    @include mq($until: medium) {
      @include type-style('label-01');
      max-width: 4 * $column-size-small;
    }
  }

  &__feature-decoration {
    flex: 1 0 0;
  }

  &__feature-copy {
    padding: $spacing-07;

    @include mq($from: medium, $until: large) {
      padding: $spacing-05;
    }

    @include mq($until: medium) {
      padding: $spacing-05;
    }
  }

  &__feature-circuits {
    background-image: url('/images/library/circuit-01.png');
    background-position: right bottom;
    background-size: 14rem auto;
    background-repeat: no-repeat;
    grid-area: a;

    @include mq($until: medium) {
      background-size: auto 8rem;
      padding-bottom: 6rem;
    }
  }

  &__feature-hardware {
    grid-area: b;
  }

  &__feature-decoration-hardware {
    background-image: url('/images/landing-page/feature-hardware.png');
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 15rem;

    @include mq($from: medium, $until: large) {
      min-height: 10rem;
    }

    @include mq($until: medium) {
      min-height: 4rem;
    }
  }

  &__feature-algorithms {
    grid-area: c;

    @include mq($from: medium, $until: large) {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: $spacing-07;
    }

    @include mq($until: medium) {
      display: flex;
      flex-direction: column-reverse;
    }
  }

  &__feature-decoration-algorithms {
    background-image: url('/images/landing-page/feature-algorithms.png');
    background-position: center bottom;
    background-size: cover;
    background-repeat: no-repeat;
    height: 25rem;

    @include mq($from: medium, $until: large) {
      background-image: url('/images/landing-page/feature-algorithms-medium.png');
      height: auto;
    }

    @include mq($until: medium) {
      background-image: url('/images/landing-page/feature-algorithms-medium.png');
      min-height: 4rem;
    }
  }

  &__feature-mitigation {
    background-image: url('/images/landing-page/feature-mitigation.png');
    background-position: right 0 top calc(50% + 2rem);
    background-size: 25rem auto;
    background-repeat: no-repeat;
    padding-bottom: 5rem;
    grid-area: d;

    @include mq($from: medium, $until: large) {
      background-size: 18rem auto;
      padding-bottom: unset;
      background-position: right center;
    }

    @include mq($until: medium) {
      background-size: auto 60%;
      padding-bottom: 6rem;
      background-position: right bottom -30%;
    }
  }
}
</style>
