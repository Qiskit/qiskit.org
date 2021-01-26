<template>
  <h1 class="app-page-header-title">
    <slot />
  </h1>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class AppPageHeaderTitle extends Vue {}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.app-page-header-title {
  @include type-style('expressive-heading-05', true);
  color: $white-text-01;
  max-width: 10 * $column-size-large;

  @include mq($from: medium, $until: large) {
    max-width: 6 * $column-size-medium;
  }

  @include mq($until: medium) {
    max-width: 5 * $column-size-medium;
  }
}
</style>
