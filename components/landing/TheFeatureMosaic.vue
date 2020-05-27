<template>
  <section class="feature-mosaic">
    <dl class="feature-mosaic__layout">
      <div
        class="
          feature-mosaic__feature
          feature-mosaic__circuits-feature
        "
      >
        <div class="feature-mosaic__feature-copy">
          <dt class="feature-mosaic__feature-title">
            Access to circuits
          </dt>
          <dd class="feature-mosaic__feature-description">
            Access a rich set of well-studied circuits, which can be used as
            benchmarks, building blocks in more complex circuits, or as a tool to
            explore quantum computational advantage.
          </dd>
        </div>
      </div>
      <div
        class="
          feature-mosaic__feature
          feature-mosaic__hardware-feature
        "
      >
        <div
          class="
            feature-mosaic__feature-decoration
            feature-mosaic__hardware-feature-decoration
          "
        />
        <div
          class="
            feature-mosaic__feature-copy
            feature-mosaic__hardware-copy
          "
        >
          <dt class="feature-mosaic__feature-title">
            Hardware Access
          </dt>
          <dd class="feature-mosaic__feature-description">
            Execute code on multiple quantum hardware architectures, from
            superconducting to trapped-ions.
          </dd>
        </div>
      </div>
      <div class="feature-mosaic__feature feature-mosaic__algorithms-feature">
        <div
          class="
            feature-mosaic__feature-copy
            feature-mosaic__algorithms-copy
          "
        >
          <dt class="feature-mosaic__feature-title">
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
            feature-mosaic__algorithms-feature-decoration
          "
        />
      </div>
      <div
        class="
          feature-mosaic__feature
          feature-mosaic__mitigation-feature
        "
      >
        <div class="feature-mosaic__feature-copy">
          <dt class="feature-mosaic__feature-title">
            Noise Mitigation
          </dt>
          <dd class="feature-mosaic__feature-description">
            Study the impact of noise using built in modules such as quantum
            hardware verification, noise characterization, and error mitigation.
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
      grid-template-areas:
        "a b"
        "c c"
        "d d"
      ;
    }

    @include mq($until: medium) {
      display: flex;
      flex-direction: column;
    }
  }

  &__feature {
    background-color: $cool-gray-10;
    display: flex;
    flex-direction: column;
  }

  &__feature-title {
    @include type-style('productive-heading-02');
    color: $cool-gray-60;
    margin-bottom: $spacing-05;
  }

  &__feature-description {
    @include type-style('body-long-01');
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
  }

  &__circuits-feature {
    background-image: url('/images/library/circuit-01.png');
    background-position: right bottom;
    background-size: auto;
    background-repeat: no-repeat;
    grid-area: a;
  }

  &__hardware-feature {
    grid-area: b;
  }

  &__hardware-feature-decoration {
    background-image: url('/images/feature-hardware.png');
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 15rem;

    @include mq($from: medium, $until: large) {
      min-height: 10rem;
    }
  }

  &__algorithms-feature {
    grid-area: c;

    @include mq($from: medium, $until: large) {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: $spacing-07;
    }
  }

  &__algorithms-feature-decoration {
    background-image: url('/images/feature-algorithms.png');
    background-position: center bottom;
    background-size: cover;
    background-repeat: no-repeat;
    height: 25rem;

    @include mq($from: medium, $until: large) {
      background-image: url('/images/feature-algorithms-medium.png');
      height: auto;
    }
  }

  &__mitigation-feature {
    background-image:
      url('/images/library/chip-01.png'),
      url('/images/library/bloch-sphere.png')
    ;
    background-position:
      right center,
      center bottom -4rem
    ;
    background-size: auto;
    background-repeat: no-repeat;
    padding-bottom: 6rem;
    grid-area: d;

    @include mq($from: medium, $until: large) {
      padding-right: 1rem;
      padding-bottom: 1rem;
      background-size:
        10rem auto,
        8rem auto
      ;
      background-position:
        top -3rem right,
        right 9rem bottom -2rem
      ;
    }
  }
}
</style>
