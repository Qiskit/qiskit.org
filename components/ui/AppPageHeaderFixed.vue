<template>
  <header class="app-page-header-fixed">
    <div class="bx--grid app-page-header-fixed__container">
      <div class="bx--row">
        <h1 class="bx--col-sm bx--col-md-6 bx--col-lg-10 bx--col-max-8">
          <slot />
        </h1>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.app-page-header-fixed {
  @include responsive-grid-bg-strip("/images/grid/grid-hero-learn.svg", auto, 28rem);

  align-items: center;
  display: flex;
  height: 28rem;

  @include mq($until: large) {
    height: 17.5rem;
  }

  &__container {
    width: 100%;
  }
}
</style>
