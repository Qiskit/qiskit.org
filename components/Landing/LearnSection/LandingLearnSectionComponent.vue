<template>
  <article class="page-section learn-section">
    <div class="cds--grid">
      <h2>Learn with Qiskit</h2>
      <LandingLearnSectionCard />
    </div>
  </article>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/helpers/index.scss" as qiskit;

.learn-section {
  @include qiskit.responsive-grid-bg("/images/grid/grid-left.svg", 36rem);

  background-repeat: no-repeat;
  background-position: left bottom -2px;
}
</style>
