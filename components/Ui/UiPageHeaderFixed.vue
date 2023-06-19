<template>
  <header class="page-header-fixed">
    <div class="cds--grid page-header-fixed__container">
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

.page-header-fixed {
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
