<template>
  <ul class="stack-list">
    <li
      v-for="(layer, index) in stack"
      :key="`stack-list__layer-${index}`"
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
export default class extends Vue {
  @Prop({ type: Array, default: [] }) stack;
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.stack-list {
  list-style: none;

  li {
    border-left: 2px solid black;
    padding-left: 1rem;
    padding-bottom: 1.5rem;
    position: relative;

    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      width: 0.25rem;
      height: 0.60rem;
      background-color: black;
      left: 0;
    }

    &:last-child {
      border: none;

      &::before {
        content: '';
        display: inline-block;
        position: absolute;
        width: 0.6rem;
        height: 0.6rem;
        background-color: black;
        left: -0.25rem;
        border-radius: 50%;
      }
    }
  }

  &__title,
  &__description {
    padding: 0;
    margin: 0;
    line-height: normal;
    position: relative;
    top: -0.2rem;
  }

  &__title {
    @include type-style('productive-heading-02');
  }

  &__description {
    @include type-style('body-short-01');
  }
}
</style>
