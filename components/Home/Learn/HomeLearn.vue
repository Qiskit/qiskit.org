<template>
  <article class="page-section home-learn">
    <div class="cds--grid">
      <h2>Learn with Qiskit</h2>
      <HomeLearnCard />
    </div>
  </article>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/helpers/index.scss" as qiskit;

.home-learn {
  @include qiskit.responsive-grid-bg("/images/grid/grid-left.svg", 36rem);

  background-repeat: no-repeat;
  background-position: left bottom -2px;
}
</style>
