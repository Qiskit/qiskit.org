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

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.app-filters-results-layout {
  ::v-deep &__main-section {
    @include carbon.breakpoint-down(md) {
      margin-top: carbon.$spacing-09;
    }
  }

  ::v-deep &__results-item {
    margin-bottom: carbon.$spacing-06;

    @include carbon.breakpoint-down(lg) {
      margin-bottom: carbon.$spacing-05;
    }

    @include carbon.breakpoint-up(xlg) {
      height: calc(100% - #{$spacing-06});
    }
  }
}
</style>
