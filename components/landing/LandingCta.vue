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
  @include type-style('body-short-01');
  position: relative;
  min-height: 5rem;
  max-width: 20rem;
  min-width: 8.75rem;
  // From the Carbon component <cv-button>
  padding: calc(.875rem - 3px) 3.75rem calc(.875rem - 3px) 0.75rem;
  color: $white-inverse-01;
  text-decoration: none;
  background-color: $purple-70;
  align-self: flex-start;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: 75%;

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
