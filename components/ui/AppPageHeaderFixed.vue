<template>
  <header class="app-page-header-fixed">
    <div class="app-page-header-fixed__container">
      <h1 class="copy__page-title">
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
}
</style>
