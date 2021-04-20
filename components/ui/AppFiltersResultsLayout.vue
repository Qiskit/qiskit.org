<template>
  <div class="bx--row app-filters-results-layout">
    <div
      class="bx--col-lg-4 bx--col-md-2 bx--col-sm-0 app-filters-results-layout__filters"
    >
      <slot name="filters-on-m-l-screen" />
    </div>
    <div class="bx--col-sm-4 bx--col-md-0 app-filters-results-layout__filters">
      <slot name="filters-on-s-screen" />
    </div>
    <div class="bx--col-lg-12 bx--col-md-6 app-filters-results-layout__results">
      <slot name="results" />
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
  margin-top: $layout-05;

  &__filters {
    color: $text-color;
  }

  &__results {
    @include mq($until: medium) {
      margin-top: $layout-04;
    }
  }
}
</style>
