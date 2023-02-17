<template>
  <article class="page-section the-learn-section">
    <div class="cds--grid">
      <h2>Learn with Qiskit</h2>
      <LearnCard />
    </div>
  </article>
</template>

<style lang="scss" scoped>
.the-learn-section {
  @include responsive-grid-bg("~/assets/img/grid/grid-left.svg", 36rem);

  background-repeat: no-repeat;
  background-position: left bottom -2px;
}
</style>
