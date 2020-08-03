<template>
  <article class="content-section">
    <div class="content-section__overview">
      <h2 class="copy__title">Research Applications</h2>
      <p class="copy__paragraph"> Qiskit allows for easy research and development for specific industry use cases that have the highest potential for quantum advantage.</p>
      <AppLink class="copy__link" url="/">
        See docs
      </AppLink>
    </div>
    <div class="content-section__detail">
      <slot />
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class extends Vue {}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/copy.scss';

.content-section {
  width: 100%;
  display: flex;
  margin-bottom: $layout-01 + $layout-05;

  &__overview {
    max-width: 5 * $column-size-large;
    padding-right: $spacing-07;
  }

  &__detail {
    background-color: blueviolet;
  }
}
</style>
