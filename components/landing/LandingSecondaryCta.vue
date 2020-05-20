<template>
  <a class="landing-secondary-cta" target="_blank" rel="noopener">
    <slot />
    <ArrowRight20 class="landing-secondary-cta__icon" />
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

.landing-secondary-cta {
  @include type-style('body-short-01');
  position: relative;
  min-height: 3rem;
  max-width: 20rem;
  min-width: 18rem;
  // From the Carbon component <cv-button>
  padding: calc(.875rem - 3px) 3.75rem calc(.875rem - 3px) 0.75rem;
  color: $purple-70;
  text-decoration: none;
  background-color: $cool-gray-10;
  align-self: flex-start;
  display: inline-flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    color: $cool-gray-10;
    background-color: $purple-70;
  }

  @include mq($from: medium, $until: large) {
    min-height: 4rem;
  }

  @include mq($until: medium) {
    width: 60%;
    min-height: 4rem;
  }

  &__icon {
    position: absolute;
    right: 1rem;
    fill: currentColor;
  }
}
</style>
