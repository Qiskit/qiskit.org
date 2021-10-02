<template>
  <div class="bx--row app-filters-results-layout">
    <div class="bx--col-xlg-2 bx--col-lg-4 bx--col-md-2 bx--col-sm-0">
      <slot name="filters-on-m-l-screen" />
    </div>
    <div class="bx--col-sm-4 bx--col-md-0">
      <slot name="filters-on-s-screen" />
    </div>
    <div
      class="bx--col-xlg-14 bx--col-lg-12 bx--col-md-6 app-filters-results-layout__main-section"
    >
      <slot name="results" />
      <slot name="extra-info" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class AppFiltersResultsLayout extends Vue {}
</script>

<style lang="scss" scoped>
.app-filters-results-layout {
  ::v-deep &__main-section {
    @include mq($until: medium) {
      margin-top: $layout-04;
    }
  }

  ::v-deep &__results-item {
    margin-bottom: $layout-02;

    @include mq($until: large) {
      margin-bottom: $spacing-05;
    }

    @include mq($from: x-large) {
      height: calc(100% - #{$layout-02});
    }
  }
}
</style>
