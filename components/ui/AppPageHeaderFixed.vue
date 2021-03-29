<template>
  <header class="app-page-header-fixed">
    <div class="app-page-header-fixed__container">
      <h1 class="app-page-header-fixed__headline">
        <slot />
      </h1>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class AppPageHeaderFixed extends Vue {}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/blocks/copy.scss";

.app-page-header-fixed {
  @include responsive-grid-bg-strip("/images/grid/grid-hero-learn.svg", auto, 28rem);

  &__container {
    @include contained();
    align-items: center;
    display: flex;
    height: 28rem;

    @include mq($until: large) {
      height: 17.5rem;
    }
  }

  &__headline {
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
}
</style>
