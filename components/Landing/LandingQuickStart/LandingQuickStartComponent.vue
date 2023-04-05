<template>
  <article class="cds--grid page-section quick-start">
    <div class="cds--row">
      <div class="cds--col-md-8 cds--col-lg-8">
        <div class="quick-start__introduction">
          <h2>Quick Start</h2>
          <p class="quick-start__introduction__copy">
            You can try Qiskit as a stand-alone tool or you can compile quantum
            programs to a variety of targets, called providers. No other quantum
            framework allows you to work with so many vendors!
          </p>
          <p class="quick-start__introduction__copy">
            Here are some code examples for common tasks so you can start
            exploring different combinations:
          </p>
        </div>
      </div>
    </div>
    <div class="cds--row">
      <div class="cds--col-md-8 cds--col-lg-8">
        <LandingQuickStartProvidersList
          :providers-list="providersData"
          @select-provider="updateSelectedProvider($event)"
        />
      </div>
      <LandingQuickStartProvidersCodeExamples
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
