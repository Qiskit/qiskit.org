<template>
  <article class="page-section quick-start">
    <h2>Quick Start</h2>
    <div class="bx--row quick-start__introduction">
      <div class="bx--col-md-6 bx--col-lg-8">
        <div>
          When you are looking to start Qiskit, you have two options. You can
          start Qiskit locally, which is much more secure and private, or you
          get started with hosted Jupyter Notebooks in IBM Quantum Lab.
        </div>
      </div>
    </div>
    <div class="bx--row">
      <StartLocally class="bx--col-lg-10 bx--col-md-5" />
      <StartOnTheCloud class="bx--col-lg-6 bx--col-md-3" />
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class TheQuickStart extends Vue {}
</script>

<style lang="scss" scoped>
.quick-start {
  @include contained();

  &__introduction {
    margin-bottom: $spacing-06;
  }
}
</style>
