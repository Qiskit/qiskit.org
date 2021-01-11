<template>
  <section class="app-mosaic">
    <dl class="app-mosaic__layout">
      <div
        v-for="{ position, title, description, image} in mosaicElements"
        :key="title"
        class="app-mosaic__element"
        :class="`app-mosaic__element_${position}`"
      >
        <div class="app-mosaic__element-copy">
          <dt class="copy__subtitle">
            {{ title }}
          </dt>
          <dd
            class="app-mosaic__element-copy-description"
            :class="`app-mosaic__element-copy-description_${position}`"
          >
            {{ description }}
          </dd>
        </div>
        <div
          :lazy-background="image"
          class="app-mosaic__element-image"
          :class="`app-mosaic__element-image_${position}`"
        />
      </div>
    </dl>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

type MosaicElement = {
  position: string,
  title: string,
  description: string,
  image: string
}

@Component
export default class AppMosaic extends Vue {
  @Prop(Array) mosaicElements!: MosaicElement[]
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/copy.scss';
@import '~carbon-components/scss/globals/scss/typography';

.app-mosaic {
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

  &__element {
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

    &-image {
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
