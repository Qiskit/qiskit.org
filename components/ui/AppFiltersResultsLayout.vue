<template>
  <div class="bx--row app-filters-results-layout">
    <div
      class="
        bx--col-lg-4
        bx--col-md-2
        app-filters-results-layout__filters
        app-filters-results-layout__filters_on-large-screen
      "
    >
      <slot name="filters-on-m-l-screen" />
    </div>
    <div
      class="
        bx--col-sm-4
        app-filters-results-layout__filters
        app-filters-results-layout__filters_on-small-screen
      "
    >
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
    color: $gray-100;

    &_on-large-screen {
      @include mq($until: medium) {
        display: none;
      }
    }

    &_on-small-screen {
      @include mq($from: medium) {
        display: none;
      }
    }
  }

  &__results {
    @include mq($until: medium) {
      margin-top: $layout-04;
    }
  }
}
</style>
