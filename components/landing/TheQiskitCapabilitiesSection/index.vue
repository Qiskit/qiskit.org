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
          <CodeCell :active-cells="capabilities.map((item, index) => isActiveSection(item, index))" />
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import ScrollSectionsMixin from '~/mixins/scrollBetweenSections'

interface QiskitCapability {
  /** The visible title of the feature */
  title: string
  /** The visible description of the feature */
  description: string
  /** The image of the feature */
  thumbnailResource: string
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
        segment: { cta: 'feature-circuit', location: 'homepage-capabilities-section' }
      }
    },
    {
      title: 'Transpiler',
      description: 'The transpiler translates Qiskit code into an optimized circuit using a backend’s native gate set, allowing users to program for any quantum processor or processor architecture with minimal inputs.',
      thumbnailResource: '/images/landing-page/transpiler.png',
      link: {
        url: 'https://qiskit.org/documentation/apidoc/transpiler.html',
        label: 'Learn more',
        segment: { cta: 'transpiler', location: 'homepage-capabilities-section' }
      }
    },
    {
      title: 'Run on real hardware',
      description: 'Users can run and schedule jobs on real quantum processors, and employ Qiskit Runtime to orchestrate quantum programs on cloud-based CPUs, QPUs, and GPUs.',
      thumbnailResource: '/images/library/chip-01.png',
      link: {
        url: 'https://qiskit.org/documentation/apidoc/ibmq_provider.html',
        label: 'Learn more',
        segment: { cta: 'run-on-hardware', location: 'homepage-capabilities-section' }
      }
    },
    {
      title: 'Try it yourself',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper morbi libero tincidunt nisl eleifend. Diam netus cum ac in. Dolor praesent orci cras posuere consectetur purus ullamcorper.',
      thumbnailResource: '/images/landing-page/med_02_1.png'
    }
  ]

  isActiveSection (item: QiskitCapability, index: number): boolean {
    return item.title === this.activeSection || (this.activeSection === '' && index === 0)
  }
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.qiskit-capabilities-section {
  &__container {
    display: flex;
    padding-top: $spacing-05;
    padding-bottom: $spacing-09;
  }

  &__capabilities {
    display: flex;
    align-items: flex-start;
    width: 100%;
    @include mq($until: medium) {
      flex-direction: column;
    }
  }

  &__card {
    margin-bottom: $spacing-07;
  }

  &__scrolling-ui {
    position: sticky;
    top: $spacing-06;
    flex: 0 0 1;
    max-width: 100%;
    min-height: 20rem;
    margin-bottom: $spacing-12;

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
    }
  }
}
</style>
