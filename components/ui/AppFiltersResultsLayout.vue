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
.app-filters-results-layout {
  ::v-deep &__main-section {
    @include mq($until: medium) {
      margin-top: $spacing-09;
    }
  }

  ::v-deep &__results-item {
    margin-bottom: $spacing-06;

    @include mq($until: large) {
      margin-bottom: $spacing-05;
    }

    @include mq($from: x-large) {
      height: calc(100% - #{$spacing-06});
    }
  }
}
</style>
