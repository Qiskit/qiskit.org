<template>
  <header class="app-page-header-fixed">
    <div class="app-page-header-fixed__container bx--row">
      <h1 class="bx--col-md-6 bx--col-lg-10 app-page-header-fixed__headline">
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
    padding-left: 0; // TODO: Clean up with introduction of `bx--grid` in #1707
  }
}
</style>
