<template>
  <section class="app-mosaic">
    <dl class="app-mosaic__layout">
      <div
        v-for="{ position, title, description, image, cta } in mosaicElements"
        :key="title"
        class="app-mosaic__element"
        :class="`app-mosaic__element_${position}`"
      >
        <div
          class="app-mosaic__element-copy"
          :class="`app-mosaic__element-copy_${position}`"
        >
          <dt class="copy__subtitle">
            {{ title }}
          </dt>
          <!-- eslint-disable vue/no-v-html -->
          <dd
            class="app-mosaic__element-copy-description"
            :class="`app-mosaic__element-copy-description_${position}`"
            v-html="description"
          />
          <!-- estlint-enable -->
          <AppLink
            v-if="cta"
            v-bind="cta"
            class="app-mosaic__element-copy-link copy__link"
          >
            {{ cta.label }}
          </AppLink>
        </div>
        <div
          v-if="image"
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
import { GeneralLink } from '~/constants/appLinks'

export type MosaicElement = {
  position: string,
  title: string,
  description: string,
  image: string,
  cta?: GeneralLink
}

@Component
export default class AppMosaic extends Vue {
  @Prop(Array) mosaicElements!: MosaicElement[]
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.app-mosaic {
  &__layout {
    display: grid;
    gap: $spacing-07;
    grid-template-columns: 2.5fr 4fr 3fr;
    grid-template-rows: 29.5rem minmax(16rem, auto);
    grid-template-areas:
      "a b c"
      "d d c"
    ;
    justify-items: stretch;

    @include mq($from: medium, $until: large) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 26rem minmax(13rem, auto) minmax(12rem, auto);
      grid-template-areas:
        "a b"
        "c c"
        "d d"
      ;
    }

    @include mq($until: medium) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, minmax(18.75rem, auto));
      grid-template-areas:
        "a"
        "b"
        "c"
        "d"
      ;
    }
  }

  &__element {
    background-color: $background-color-lighter;
    display: flex;

    &_first {
      grid-area: a;
      flex-direction: column;
    }

    &_second {
      grid-area: b;
      flex-direction: column-reverse;
    }

    &_third {
      grid-area: c;
      flex-direction: column;

      @include mq($from: medium, $until: large) {
        flex-direction: row-reverse;
      }

      @include mq($until: medium) {
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

        @include mq($until: large) {
          min-height: 12rem;
        }
      }

      &_third {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        @include mq($until: medium) {
          min-height: 12rem;
        }
      }

      &_fourth {
        background-position: right bottom;
        background-size: contain;
        background-repeat: no-repeat;
      }
    }

    &-copy {
      padding: $spacing-07;

      @include mq($until: large) {
        padding: $spacing-05;

        &_third, &_fourth {
          flex: 1 0 0;
        }
      }

      &_fourth {
        flex: 1 0 0;
      }

      &-description {
        @include type-style('body-long-01');

        color: $text-color-light;
      }

      &-link {
        display: flex;
        margin-top: 1em;
      }
    }
  }
}
</style>
