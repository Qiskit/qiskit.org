<template>
  <div class="bx--row app-filters-results-layout">
    <div
      class="bx--col-lg-4 bx--col-md-2 bx--col-sm-0"
      :class="{ 'bx--col-max-2': !oldContainer }"
    >
      <slot name="filters-on-m-l-screen" />
    </div>
    <div class="bx--col-sm-4 bx--col-md-0">
      <slot name="filters-on-s-screen" />
    </div>
    <div
      class="bx--col-lg-12 bx--col-md-6 app-filters-results-layout__main-section"
      :class="{ 'bx--col-max-14': !oldContainer }"
    >
      <slot name="results" />
      <slot name="extra-info" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class AppFiltersResultsLayouts extends Vue {
  @Prop({ type: Boolean, default: false, required: false }) oldContainer!: boolean;
}
</script>

<style lang="scss">
.app-filters-results-layout {
  &__main-section {
    @include mq($until: medium) {
      margin-top: $layout-04;
    }
  }

  &__results-item {
    margin-bottom: $layout-02;

    @include mq($until: large) {
      margin-bottom: $layout-01;
    }
  }
}

</style>
