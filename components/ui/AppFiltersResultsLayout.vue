<template>
  <div class="app-filters-results-layout">
    <div class="app-filters-results-layout__container">
      <div class="app-filters-results-layout__filters app-filters-results-layout__filters_on-large-screen">
        <slot name="filters" />
      </div>
      <div class="app-filters-results-layout__results">
        <slot name="results" />
      </div>
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
@import '~carbon-components/scss/globals/scss/typography';

.app-filters-results-layout {
  background-color: $white;
  color: $white-text-01;

  &__container {
    @include contained();
    display: flex;
    justify-content: space-between;
    margin-top: $layout-05;

    @include mq($until: medium) {
      flex-direction: column;
    }
  }

  &__filters {
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
