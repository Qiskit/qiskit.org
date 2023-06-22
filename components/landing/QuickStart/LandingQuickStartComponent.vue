<template>
  <article class="cds--grid page-section quick-start">
    <div class="cds--row">
      <div class="cds--col-md-8 cds--col-lg-8">
        <div class="quick-start__introduction">
          <h2>Backend compatibility</h2>
          <p class="quick-start__introduction__copy">
            You can use Qiskit to construct quantum programs and run them on
            simulators or real quantum computers. With our extensive network of
            providers you can compile your Qiskit code for a huge range of
            different backends, more than any other quantum framework!
          </p>
          <p class="quick-start__introduction__copy">
            Select a provider below and explore code examples of how to use it
            with Qiskit:
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
import type { ProviderParsedContent } from "~/types/providers";

const { data: providerData } = await useAsyncData("providers-quick-start", () =>
  queryContent<ProviderParsedContent>("/providers/quick-start/data").findOne()
);

if (!providerData) {
  throw new Error("No providers data found");
}

const providersData = providerData.value!.body;
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
