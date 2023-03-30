<template>
  <article class="cds--grid page-section quick-start">
    <h2>Quick Start</h2>
    <div class="cds--row quick-start__introduction">
      <div class="cds--col-md-5 cds--col-lg-8 cds--col-xlg-7 cds--col-max-6">
        <p class="quick-start__description">
          When you are looking to start Qiskit, you have two options. You can
          start Qiskit locally, which is much more secure and private, or you
          get started with Jupyter Notebooks hosted in IBM Quantum Lab.
        </p>
      </div>
    </div>
    <div class="cds--row">
      <LandingQuickStartStartLocally
        class="cds--col-md-5 cds--col-lg-10 cds--col-xlg-11 cds--col-max-12"
      />
      <LandingQuickStartStartOnTheCloud
        class="cds--col-md-3 cds--col-lg-6 cds--col-xlg-5 cds--col-max-4"
      />
    </div>
  </article>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.quick-start {
  &__description {
    margin-bottom: 0;
  }

  &__introduction {
    margin-bottom: carbon.$spacing-06;
  }
}
</style>
