<template>
  <div class="cds--row filters-results-layout">
    <div class="cds--col-xlg-2 cds--col-lg-4 cds--col-md-2 cds--col-sm-0">
      <slot name="filters-on-m-l-screen" />
    </div>
    <div class="cds--col-sm-4 cds--col-md-0">
      <slot name="filters-on-s-screen" />
    </div>
    <div
      class="cds--col-xlg-14 cds--col-lg-12 cds--col-md-6 filters-results-layout__main-section"
    >
      <slot name="results" />
      <slot name="extra-info" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.filters-results-layout {
  &__main-section {
    @include carbon.breakpoint-down(md) {
      margin-top: carbon.$spacing-09;
    }
  }
}
</style>
