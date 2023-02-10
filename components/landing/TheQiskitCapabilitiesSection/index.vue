<template>
  <article class="bx--grid page-section qiskit-capabilities-section">
    <h2>What Can Qiskit Do</h2>
    <div class="qiskit-capabilities-section__container">
      <div class="qiskit-capabilities-section__capabilities">
        <div class="qiskit-capabilities-section__content">
          <QiskitCapabilityCard
            v-for="item in capabilities"
            :id="item.title"
            :key="item.title"
            class="qiskit-capabilities-section__card scrollable"
            :title="item.title"
            :description="item.description"
            :thumbnail-resource="item.thumbnailResource"
            :link="item.link"
          />
        </div>
        <div class="qiskit-capabilities-section__scrolling-ui">
          <CodeCell :active-blocks="capabilities.map((item, index) => isActiveSection(item, index))" />
        </div>
      </div>
    </div>
    <div class="qiskit-capabilities-section__ctas">
      <AppCta
        class="qiskit-capabilities-section__ctas__link"
        v-bind="quantumLabCTA"
        kind="ghost"
      />
      <cv-button
        :title="copyCodeCTA.label"
        class="qiskit-capabilities-section__copy-button"
        @click="[copyToClipboard(), $trackClickEvent(copyCodeCTA.segment)]"
      >
        <span class="qiskit-capabilities-section__copy-button__label">{{ copyCodeCTA.label }}</span>
        <Copy16 class="qiskit-capabilities-section__copy-button__icon" />
      </cv-button>
    </div>
  </article>
</template>

<!-- TODO: Refactor using Composition API once Mixins are refactored -->
<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import ScrollSectionsMixin from '~/mixins/scrollBetweenSections'
import { CtaClickedEventProp } from '~/types/segment'

interface QiskitCapability {
  title: string
  description: string
  thumbnailResource: string
  segment: CtaClickedEventProp
}

@Component
export default class TheQiskitCapabilitiesSection extends Mixins(ScrollSectionsMixin) {
  capabilities = [
    {
      title: 'Circuit Library',
      description: 'Qiskit includes a comprehensive set of quantum gates and a variety of pre-built circuits so users at all levels can use Qiskit for research and application development.',
      thumbnailResource: '/images/landing-page/feature-circuit.png',
      link: {
        url: 'https://qiskit.org/documentation/apidoc/circuit_library.html',
        label: 'Learn more',
        segment: { cta: 'circuit-library', location: 'homepage-capabilities' }
      }
    },
    {
      title: 'Transpiler',
      description: 'The transpiler translates Qiskit code into an optimized circuit using a backend’s native gate set, allowing users to program for any quantum processor or processor architecture with minimal inputs.',
      thumbnailResource: '/images/landing-page/transpiler.png',
      link: {
        url: 'https://qiskit.org/documentation/apidoc/transpiler.html',
        label: 'Learn more',
        segment: { cta: 'transpiler', location: 'homepage-capabilities' }
      }
    },
    {
      title: 'Run on real hardware',
      description: 'Users can run and schedule jobs on real quantum processors, and employ Qiskit Runtime to orchestrate quantum programs on cloud-based CPUs, QPUs, and GPUs.',
      thumbnailResource: '/images/library/chip-01.png',
      link: {
        url: 'https://qiskit.org/documentation/apidoc/ibmq_provider.html',
        label: 'Learn more',
        segment: { cta: 'run-on-hardware', location: 'homepage-capabilities' }
      }
    },
    {
      title: 'Try it yourself',
      description: 'Ready to explore Qiskit’s capabilities for yourself? Copy the code to the right of this paragraph and try running it in your local Python environment. You can also click the link to the IBM Quantum Lab and test it there.',
      thumbnailResource: '/images/landing-page/med_02_1.png',
      segment: { cta: 'try-it-yourself', location: 'homepage-capabilities' }
    }
  ]

  quantumLabCTA = {
    url: 'https://quantum-computing.ibm.com/lab/files/qiskit-textbook/getting-started/example.ipynb',
    label: 'Open in Quantum Lab',
    segment: { cta: 'open-in-quantum-lab', location: 'homepage-capabilities' }
  }

  copyCodeCTA = {
    url: '',
    label: 'Copy code',
    segment: { cta: 'copy-code', location: 'homepage-capabilities' }
  }

  isActiveSection (item: QiskitCapability, index: number): boolean {
    if (this.capabilities[this.capabilities.length - 1].title === this.activeSection) {
      return true
    }

    return item.title === this.activeSection || (this.activeSection === '' && index === 0)
  }

  copyToClipboard (): void {
    const codeSnippet = document.querySelector('.code-cell') as HTMLElement | null

    if (codeSnippet !== null) {
      navigator.clipboard.writeText(codeSnippet.innerText)
    }
  }
}
</script>

<style lang="scss" scoped>
$cta-max-width: 14rem;

.qiskit-capabilities-section {
  padding-bottom: $spacing-09;

  &__container {
    padding-top: $spacing-05;
    padding-bottom: $spacing-09;

    @include mq($until: medium) {
      padding-bottom: $spacing-05;
    }
  }

  &__capabilities {
    display: flex;
    align-items: flex-start;

    @include mq($until: medium) {
      flex-direction: column;
    }
  }

  &__card {
    margin-bottom: $spacing-07;

    &:last-child {
      margin-bottom: $spacing-13;

      @include mq($until: medium) {
        margin-bottom: $spacing-07;
      }
    }
  }

  &__scrolling-ui {
    position: sticky;
    top: $spacing-06;
    flex: 0 0 1;
    max-width: 100%;
    min-height: 20rem;

    @include mq($from: x-large) {
      flex: 0 0 38rem;
    }

    @include mq($from: large, $until: x-large) {
      flex: 0 0 34rem;
    }

    @include mq($until: large) {
      flex: 0 0 22rem;
    }

    @include mq($until: medium) {
      flex: initial;
      width: 100%;
      margin-bottom: $spacing-07;
    }
  }

  &__ctas {
    display: flex;
    justify-content: flex-end;

    @include mq($until: medium) {
      flex-direction: column-reverse;
    }

    &__link {
      width: 100%;
      max-width: $cta-max-width;
      padding: $spacing-05;
      margin-right: $spacing-05;
      justify-content: space-between;

      @include mq($until: medium) {
        max-width: initial;
      }
    }
  }

  &__copy-button {
    width: 100%;
    max-width: $cta-max-width;
    padding-right: $spacing-05;
    background-size: 200% 100%;
    background-position-x: 100%;
    background-image: linear-gradient(90deg, $button-background-color-light 0%, $button-background-color-light 50%, $background-color-secondary 50%, $background-color-secondary 100%);
    transition: background-position-x 0.3s ease-out;

    @include mq($until: medium) {
      max-width: initial;
    }

    &:hover,
    &:active {
      background-position-x: 0;
    }

    &__label {
      display: block;
      width: 100%;
    }
  }
}
</style>
