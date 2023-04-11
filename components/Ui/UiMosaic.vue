<template>
  <section class="mosaic">
    <dl class="mosaic__layout">
      <div
        v-for="{ position, title, description, image, cta } in mosaicElements"
        :key="title"
        class="mosaic__element"
        :class="`mosaic__element_${position}`"
      >
        <div
          class="mosaic__element-copy"
          :class="`mosaic__element-copy_${position}`"
        >
          <dt class="h3" v-text="title" />
          <!-- eslint-disable vue/no-v-html -->
          <dd
            class="mosaic__element-copy-description"
            :class="`mosaic__element-copy-description_${position}`"
            v-html="description"
          />
          <!-- estlint-enable -->
          <UiLink v-if="cta" v-bind="cta" class="mosaic__element-copy-link">
            {{ cta.label }}
          </UiLink>
        </div>
        <div
          v-if="image"
          class="mosaic__element-image"
          :class="`mosaic__element-image_${position}`"
          :style="{
            'background-image': `url(${image})`,
          }"
        ></div>
      </div>
    </dl>
  </section>
</template>

<script setup lang="ts">
import type { MosaicElement } from "~/types/uiComponents";

interface Props {
  mosaicElements: MosaicElement[];
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.mosaic {
  &__layout {
    display: grid;
    gap: carbon.$spacing-07;
    grid-template-columns: 2.5fr 4fr 3fr;
    grid-template-rows: 29.5rem minmax(16rem, auto);
    grid-template-areas:
      "a b c"
      "d d c";
    justify-items: stretch;

    @include carbon.breakpoint-between(md, lg) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: minmax(26rem, auto) minmax(12rem, auto) minmax(
          12rem,
          auto
        );
      grid-template-areas:
        "a b"
        "c c"
        "d d";
    }

    @include carbon.breakpoint-down(md) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, minmax(18.75rem, auto));
      grid-template-areas:
        "a"
        "b"
        "c"
        "d";
    }
  }

  &__element {
    background-color: qiskit.$background-color-lighter;
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

      @include carbon.breakpoint-between(md, lg) {
        flex-direction: row-reverse;
      }

      @include carbon.breakpoint-down(md) {
        flex-direction: column-reverse;
      }
    }

    &_fourth {
      grid-area: d;
      flex-direction: row;

      @include carbon.breakpoint-down(md) {
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

        @include carbon.breakpoint-down(lg) {
          min-height: 12rem;
        }
      }

      &_third {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        @include carbon.breakpoint-down(md) {
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
      padding: carbon.$spacing-07;

      @include carbon.breakpoint-down(lg) {
        padding: carbon.$spacing-05;

        &_third,
        &_fourth {
          flex: 1 0 0;
        }
      }

      &_fourth {
        flex: 1 0 0;
      }

      &-description {
        :deep(li) {
          list-style-type: disc;
          margin-left: carbon.$spacing-06;
        }
      }

      &-link {
        display: flex;
        margin-top: carbon.$spacing-05;
      }
    }
  }
}
</style>
