<template>
  <section class="feature-mosaic">
    <dl class="feature-mosaic__layout">
      <div
        v-for="feature in features"
        :key="feature.title"
        class="feature-mosaic__feature"
        :class="`feature-mosaic__feature_${feature.position}`"
      >
        <div class="feature-mosaic__feature-copy">
          <dt class="copy__subtitle">
            {{ feature.title }}
          </dt>
          <dd
            class="feature-mosaic__feature-copy-description"
            :class="`feature-mosaic__feature-copy-description_${feature.position}`"
          >
            {{ feature.description }}
          </dd>
        </div>
        <div
          :lazy-background="feature.image"
          class="feature-mosaic__feature-decoration"
          :class="`feature-mosaic__feature-decoration_${feature.position}`"
        />
      </div>
    </dl>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class TheFeatureMosaic extends Vue {
  features = [
    {
      position: 'first',
      title: 'Access to circuits',
      description: 'Access a rich set of well-studied circuits, which can be used as benchmarks, building blocks in more complex circuits, or as a tool to explore quantum computational advantage.',
      image: '/images/library/circuit-01.png'
    },
    {
      position: 'second',
      title: 'Hardware Access',
      description: 'Execute code on multiple quantum hardware architectures, from superconducting qubits to trapped-ions.',
      image: '/images/landing-page/feature-hardware.jpg'
    },
    {
      position: 'third',
      title: 'Quantum Algorithms',
      description: 'Research and prototype machine learning, optimization and chemistry applications by building upon a library of quantum algorithms.',
      image: '/images/landing-page/feature-quantum-algorithms.png'
    },
    {
      position: 'fourth',
      title: 'Noise Mitigation',
      description: 'Study and reduce the impact of noise using built-in modules for noise characterization and circuit optimization.',
      image: '/images/landing-page/feature-noise-mitigation.png'
    }
  ]
}
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
    }
  }

  &__feature {
    background-color: $cool-gray-10;
    display: flex;
    flex-direction: column;

    @include mq($until: medium) {
      height: 18.75rem;
    }

    &_first {
      grid-area: a;
    }

    &_second {
      grid-area: b;
      flex-direction: column-reverse;
    }

    &_third {
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

    &_fourth {
      grid-area: d;
      flex-direction: row;

      @include mq($until: medium) {
        flex-direction: column;
      }
    }

    &-decoration {
      flex: 1 0 0;

      &_first {
        background-position: right bottom;
        background-size: contain;
        background-repeat: no-repeat;
      }

      &_second {
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

      &_third {
        background-position: center bottom;
        background-size: cover;
        background-repeat: no-repeat;
        height: 25rem;

        @include mq($from: medium, $until: large) {
          height: auto;
        }

        @include mq($until: medium) {
          min-height: 4rem;
        }
      }

      &_fourth {
        background-position: right bottom;
        background-size: 12rem auto;
        background-repeat: no-repeat;

        @include mq($until: large) {
          background-size: 10rem auto;
        }
      }
    }

    &-copy {
      padding: $spacing-07;

      @include mq($until: large) {
        padding: $spacing-05;
      }

      &-description {
        @include type-style('body-long-01');
        color: $cool-gray-80;
        max-width: 6 * $column-size-large;

        @include mq($from: medium, $until: large) {
          max-width: 5 * $column-size-medium;
        }

        @include mq($until: medium) {
          max-width: 100%;
        }

        &_fourth {
          padding-bottom: $spacing-09;

          @include mq($until: medium) {
            padding-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
