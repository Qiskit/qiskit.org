<template>
  <article class="bx--grid page-section quick-start">
    <div class="bx--row">
      <div class="bx--col-md-8 bx--col-lg-8">
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
    <div class="bx--row">
      <div class="bx--col-md-8 bx--col-lg-8">
        <ProvidersList
          :providers-list="providersData"
          @select-provider="updateSelectedProvider($event)"
        />
      </div>
      <ProvidersCodeExamples
        class="bx--col-md-8 bx--col-lg-8"
        :install-code="providersData[selectedProviderIndex].installation"
        :code-examples="providersData[selectedProviderIndex].codeExamples"
        :provider-title="providersData[selectedProviderIndex].title"
      />
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import rawQuickStartProvidersData from '~/content/providers/quick-start.json'

@Component
export default class TheQuickStart extends Vue {
  providersData = rawQuickStartProvidersData;

  selectedProviderIndex = 0;

  updateSelectedProvider (selectedProviderId: number): void {
    this.selectedProviderIndex = selectedProviderId
  }
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
