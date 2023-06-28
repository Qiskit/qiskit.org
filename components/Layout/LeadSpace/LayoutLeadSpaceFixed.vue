<template>
  <header class="layout-lead-space-fixed">
    <div class="cds--grid layout-lead-space-fixed__container">
      <div class="cds--row">
        <h1 class="cds--col-sm cds--col-md-10 cds--col-lg-10 cds--col-max-10">
          <slot />
        </h1>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.layout-lead-space-fixed {
  @include qiskit.responsive-grid-bg-strip(
    "/images/grid/grid-hero-learn.svg",
    auto,
    28rem
  );

  align-items: center;
  display: flex;
  height: 28rem;

  @include carbon.breakpoint-down(lg) {
    height: 17.5rem;
  }

  &__container {
    width: 100%;
  }
}
</style>
