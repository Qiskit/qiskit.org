<template>
  <article class="quick-start copy__util_vertical-spacer">
    <h2 class="copy__title">
      Quick Start
    </h2>
    <p class="copy__paragraph copy__paragraph_importance_outstanding">
      When you are looking to start Qiskit, you have two options. You can
      start Qiskit locally, which is much more secure and private, or you
      get started with hosted Jupyter Notebooks in IBM Quantum Lab.
    </p>
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
@import '~/assets/scss/blocks/copy.scss';
@import '~carbon-components/scss/globals/scss/typography';

.quick-start {
  @include contained();
  color: $cool-gray-80;
}
</style>
