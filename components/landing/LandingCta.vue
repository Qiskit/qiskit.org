<template>
  <a class="landing-cta" target="_blank" rel="noopener">
    <slot />
    <ArrowRight20 class="landing-cta__icon" />
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class extends Vue {}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.landing-cta {
  height: 5rem;
  width: 16rem;
  padding: $spacing-05;
  color: $white-inverse-01;
  text-decoration: none;
  background-color: $purple-70;
  display: inline-flex;
  flex-direction: row;
  align-items: center;

  &__icon {
    fill: currentColor;
    margin-left: auto;
  }
}
</style>
