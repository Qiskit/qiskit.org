
<template>
  <ul class="stack-list">
    <li
      v-for="layer in stack"
      :key="`layer-${layer.title}`"
      class="stack-list__layer"
    >
      <p class="stack-list__title">
        {{ layer.title }}
      </p>
      <p class="stack-list__description">
        {{ layer.description }}
      </p>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class SoftwareStack extends Vue {
  @Prop({ type: Array, default: [] }) stack!: any
}

type StackLayer = {
  title: string
  description: string
}

export { StackLayer }
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.stack-list {
  $layer-mark-width: 0.25rem;
  $layer-mark-height: 0.6rem;
  $text-top-position-fix: -0.4rem;

  &__layer {
    border-left: 2px solid $inverse-01;
    padding-left: $spacing-05;
    padding-bottom: $spacing-06;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: $layer-mark-width;
      height: $layer-mark-height;
      background-color: $inverse-01;
      left: 0;
    }

    &:last-child {
      border: none;

      &::before {
        width: $layer-mark-height;
        left: -$layer-mark-width;
        border-radius: 50%;
      }
    }
  }

  &__title,
  &__description {
    position: relative;
    top: $text-top-position-fix;
  }

  &__title {
    @include type-style('productive-heading-02');
  }

  &__description {
    @include type-style('body-short-01');
  }
}
</style>
