<template>
  <div class="quick-start">
    <section class="quick-start__locally">
      <h3 class="quick-start__section-title">
        Start locally
      </h3>
      <p class="quick-start__section-description">
        Although it isn’t required we recommend using Anaconda for working
        environment for Qiskit, you can find it here.
      </p>
      <div class="quick-start__section-content">
        <div class="quick-start__options-block">
          <h4 class="quick-start__option-title">Languages</h4>
          <cv-button-set class="quick-start__languages-options">
            <cv-button
              title="Python 3.5+"
              class="quick-start__option-button"
            >
              Python 3.5+
            </cv-button>
          </cv-button-set>
        </div>
        <div class="quick-start__options-block">
          <h4 class="quick-start__option-title">Qiskit Install</h4>
          <cv-button-set class="quick-start__quick-install-options">
            <cv-button
              title="Stable (Recommended)"
              class="quick-start__option-button"
            >
              Stable (Recommended)
            </cv-button>
            <cv-button
              title="Master"
              class="quick-start__option-button"
            >
              Master
            </cv-button>
          </cv-button-set>
        </div>
        <div class="quick-start__options-block">
          <h4 class="quick-start__option-title">Operating System</h4>
          <cv-button-set class="quick-start__os-options">
            <cv-button
              title="Linux"
              class="quick-start__option-button"
            >
              Linux
            </cv-button>
            <cv-button
              title="Mac"
              class="quick-start__option-button"
            >
              Mac
            </cv-button>
            <cv-button
              title="Windows"
              class="quick-start__option-button"
            >
              Windows
            </cv-button>
          </cv-button-set>
        </div>
        <div class="quick-start__options-block">
          <h4 class="quick-start__option-title">Code Block</h4>
          <SyntaxHighlight
            :label="title"
            :code="codeExample"
          />
        </div>
      </div>
    </section>
    <section class="quick-start__cloud">
      <h3 class="quick-start__section-title">
        Start on the cloud
      </h3>
      <p class="quick-start__section-description">
        Starting on the cloud will enable you to begin
        without installing anything.
      </p>
      <div class="quick-start__section-content">
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import SyntaxHighlight from '~/components/ui/SyntaxHighlight.vue'

@Component({
  components: { SyntaxHighlight }
})
export default class extends Vue {
  title = 'Qiskit Install'
  codeExample = `conda install qiskit macos -m qiskit
# MacOS Binaries dont support CUDA, install from source if CUDA is needed`
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.quick-start {
  display: flex;
  flex-direction: row;

  &__section-title {
    @include type-style('productive-heading-02');
    padding-bottom: $spacing-05;
  }

  &__section-description {
    @include type-style('body-long-01');
  }

  &__section-content {
    margin-top: $spacing-07;
  }

  &__locally {
    width: 65%;
    padding-top: $spacing-07;
    padding-right: $spacing-07;
  }

  &__languages-options {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: $spacing-07;
  }

  &__quick-install-options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: $spacing-07;
  }

  &__os-options {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: $spacing-07;
  }

  &__option-title {
    @include type-style('body-long-01');
  }

  &__option-button {
    @include type-style('body-long-01');
    background-color: $cool-gray-10;
    color: $inverse-01;
    padding-left: $spacing-07;
    max-width: 100%;
  }

  &__cloud {
    width: 35%;
    background-color: $cool-gray-10;
    padding: $spacing-07;
  }
}
</style>
