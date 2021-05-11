<template>
  <div class="bx--row app-filters-results-layout">
    <div class="bx--col-lg-4 bx--col-md-2 bx--col-sm-0">
      <slot name="filters-on-m-l-screen" />
    </div>
    <div class="bx--col-sm-4 bx--col-md-0">
      <slot name="filters-on-s-screen" />
    </div>
    <div class="bx--col-lg-12 bx--col-md-6 app-filters-results-layout__results-section">
      <slot name="results" />
      <slot name="extra-info" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class AppFiltersResultsLayouts extends Vue {}
</script>

<style lang="scss">
.app-filters-results-layout {
  &__results-section {
    @include mq($until: medium) {
      margin-top: $layout-04;
    }
  }
}
</style>
