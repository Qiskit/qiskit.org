<template>
  <div class="app-filters-results-layout">
    <div class="app-filters-results-layout__filters app-filters-results-layout__filters_on-large-screen">
      <slot name="filters-on-m-l-screen" />
    </div>
    <div class="app-filters-results-layout__filters app-filters-results-layout__filters_on-small-screen">
      <slot name="filters-on-s-screen" />
    </div>
    <div class="app-filters-results-layout__results">
      <slot name="results" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class extends Vue {}
</script>

<style lang="scss">
.app-filters-results-layout {
  display: flex;
  justify-content: space-between;
  margin-top: $layout-05;

  @include mq($until: medium) {
    flex-direction: column;
  }

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
    width: 75%;

    @include mq($until: medium) {
      width: 100%;
      margin-top: $layout-04;
    }
  }
}
</style>
