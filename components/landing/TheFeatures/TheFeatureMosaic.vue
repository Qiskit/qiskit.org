<template>
  <section class="feature-mosaic">
    <dl class="feature-mosaic__layout">
      <div
        lazy-background="/images/library/circuit-01.png"
        class="
          feature-mosaic__feature
          feature-mosaic__feature-circuits
        "
      >
        <div class="feature-mosaic__feature-copy">
          <dt class="copy__subtitle">
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
          lazy-background="/images/landing-page/feature-hardware.jpg"
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
          <dt class="copy__subtitle">
            Hardware Access
          </dt>
          <dd class="feature-mosaic__feature-description">
            Execute code on multiple quantum hardware architectures, from
            superconducting qubits to trapped-ions.
          </dd>
        </div>
      </div>
      <div
        class="
          feature-mosaic__feature
          feature-mosaic__feature-algorithms
        "
      >
        <div
          class="
            feature-mosaic__feature-copy
            feature-mosaic__algorithms-copy
          "
        >
          <dt class="copy__subtitle">
            Quantum Algorithms
          </dt>
          <dd class="feature-mosaic__feature-description">
            Research and prototype machine learning, optimization and chemistry
            applications by building upon a library of quantum algorithms.
          </dd>
        </div>
        <div
          lazy-background="/images/landing-page/feature-algorithms.jpg"
          class="
            feature-mosaic__feature-decoration
            feature-mosaic__feature-decoration-algorithms
          "
        />
      </div>
      <div
        lazy-background="/images/landing-page/feature-mitigation.png"
        class="
          feature-mosaic__feature
          feature-mosaic__feature-mitigation
        "
      >
        <div class="feature-mosaic__feature-copy">
          <dt class="copy__subtitle">
            Noise Mitigation
          </dt>
          <dd class="feature-mosaic__feature-description">
            Study and reduce the impact of noise using built-in modules for
            noise characterization and circuit optimization.
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
@import '~/assets/scss/blocks/copy.scss';
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
      max-width: 4 * $column-size-medium;
    }

    @include mq($until: medium) {
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
    background-position: right bottom;
    background-size: 14rem auto;
    background-repeat: no-repeat;
    grid-area: a;

    @include mq($until: medium) {
      // Adding important to beat the inlined background by the lazy-load directive
      background-image: none !important;
      padding-bottom: 6rem;
    }
  }

  &__feature-hardware {
    grid-area: b;
  }

  &__feature-decoration-hardware {
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
    background-position: center bottom;
    background-size: cover;
    background-repeat: no-repeat;
    height: 25rem;

    @include mq($from: medium, $until: large) {
      background-image: url('/images/landing-page/feature-algorithms-medium.jpg') !important;;
      height: auto;
    }

    @include mq($until: medium) {
      background-image: url('/images/landing-page/feature-algorithms-medium.jpg') !important;;
      min-height: 4rem;
    }
  }

  &__feature-mitigation {
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
