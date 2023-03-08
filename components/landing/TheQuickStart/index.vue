<template>
  <article class="bx--grid page-section quick-start">
    <h2>Quick Start</h2>
    <div class="bx--row quick-start__introduction">
      <div class="bx--col-md-8 bx--col-lg-8">
        <p class="quick-start__introduction__copy">
          When you are looking to start Qiskit, you have two options. You can
          start Qiskit locally, which is much more secure and private, or you
          get started with Jupyter Notebooks hosted in IBM Quantum Lab.
        </p>
        <p class="quick-start__introduction__copy">
          Test some of the available providers and algorithms.
        </p>
        <ProvidersList :providers-list="providersData" />
      </div>
      <Algorithms class="bx--col-md-8 bx--col-lg-8" />
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import rawHardware from '~/content/providers/hardware.json'
import rawSimulators from '~/content/providers/simulators.json'
import rawMultiplatforms from '~/content/providers/multiplatforms.json'

@Component
export default class TheQuickStart extends Vue {
  providersData = [
    ...rawHardware,
    ...rawSimulators,
    ...rawMultiplatforms
  ].map(({ title, docsCta: { url } }) => ({ title, url }));
}
</script>

<style lang="scss" scoped>
.quick-start {
  &__introduction {
    margin-bottom: $spacing-06;

    &__copy {
      max-width: 32rem;
    }
  }

}
</style>
