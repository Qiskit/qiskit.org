<template>
  <section class="learn-content-menu">
    <div class="learn-content-menu__container">
      <LearnMegaMenu
        classes="learn-content-menu__dropdown cds--col-md-4 cds--col-lg-4 cds--no-gutter"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/helpers/index.scss" as qiskit;

.learn-content-menu {
  background: qiskit.$background-color-lighter;
  border-top: 1px solid qiskit.$border-color;
  border-bottom: 1px solid qiskit.$border-color;

  &__container {
    @include qiskit.contained;

    max-width: qiskit.$max-size;
  }
}

:deep(qiskit-mega-menu-dropdown) {
  --qiskit-color-input-background: transparent;
}
</style>
