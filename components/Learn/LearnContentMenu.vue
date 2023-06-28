<template>
  <section class="content-menu-section">
    <div class="content-menu-section__container">
      <LearnMegaMenu
        classes="content-menu-section__dropdown cds--col-md-4 cds--col-lg-4 cds--no-gutter"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/helpers/index.scss" as qiskit;

.content-menu-section {
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
