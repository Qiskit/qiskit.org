<template>
  <article class="cds--grid page-section quick-start">
    <h2>Quick Start</h2>
    <div class="cds--row quick-start__introduction">
      <div class="cds--col-md-8 cds--col-lg-8">
        <p class="quick-start__introduction__copy">
          When you are looking to start Qiskit, you have two options. You can
          start Qiskit locally, which is much more secure and private, or you
          get started with Jupyter Notebooks hosted in IBM Quantum Lab.
        </p>
        <p class="quick-start__introduction__copy">
          Test some of the available providers and algorithms.
        </p>
        <LandingQuickStartProvidersList
          :providers-list="providersData"
          @select-provider="updateSelectedProvider($event)"
        />
      </div>
      <LandingQuickStartAlgorithms
        class="cds--col-md-8 cds--col-lg-8"
        :install-code="providersData[selectedProviderIndex].installation"
        :code-examples="providersData[selectedProviderIndex].codeExamples"
        :provider-title="providersData[selectedProviderIndex].title"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
import rawQuickStartProvidersData from "~/content/providers/quick-start.json";

const providersData = ref(rawQuickStartProvidersData);
const selectedProviderIndex = ref(0);

function updateSelectedProvider(selectedProviderId: number) {
  selectedProviderIndex.value = selectedProviderId;
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.quick-start {
  &__introduction {
    margin-bottom: carbon.$spacing-06;

    &__copy {
      max-width: 32rem;
    }
  }
}
</style>
