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
            :visual-resource="item.visualResource"
            :thumbnail-resource="item.thumbnailResource"
            :link="item.link"
          />
        </div>
        <div class="qiskit-capabilities-section__scrolling-ui">
          <div
            v-for="(item, index) in capabilities"
            :key="item.visualResource"
            class="qiskit-capabilities-section__visual-resource-container"
            :class="{
              'qiskit-capabilities-section__visual-resource-container_active' : isActiveImage(item, index)
            }"
          >
            <div
              class="
                qiskit-capabilities-section__visual-resource
                qiskit-capabilities-section__visual-resource_type_image
              "
              :lazy-background="item.visualResource"
            />
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import ScrollSectionsMixin from '~/mixins/scrollBetweenSections'

interface MetalCapability {
  /** The visible title of the feature */
  title: string
  /** The visible description of the feature */
  description: string
  /** The image of the feature */
  visualResource: string
}

@Component
export default class TheQiskitCapabilitiesSection extends Mixins(ScrollSectionsMixin) {
  capabilities = [
    {
      title: 'Circuit Library',
      description: 'Qiskit includes a comprehensive set of quantum gates and a variety of pre-built circuits so users at all levels can use Qiskit for research and application development.',
      visualResource: 'https://place-hold.it/734x480/e8daff',
      thumbnailResource: '/images/landing-page/feature-circuit.png',
      link: {
        url: 'https://learn.qiskit.org/learn-more',
        label: 'Learn more',
        segment: { cta: 'learn-more', location: 'qiskit-capabilities-section' }
      }
    },
    {
      title: 'Transpiler',
      description: 'The transpiler translates Qiskit code into an optimized circuit using a backend’s native gate set, allowing users to program for any quantum processor or processor architecture with minimal inputs.',
      visualResource: 'https://place-hold.it/734x480/d4bbff',
      thumbnailResource: '/images/landing-page/transpiler.png',
      link: {
        url: 'https://learn.qiskit.org/learn-more',
        label: 'Learn more',
        segment: { cta: 'learn-more', location: 'qiskit-capabilities-section' }
      }
    },
    {
      title: 'Run on real hardware',
      description: 'Users can run and schedule jobs on real quantum processors, and employ Qiskit Runtime to orchestrate quantum programs on cloud-based CPUs, QPUs, and GPUs.',
      visualResource: 'https://place-hold.it/734x480/be95ff',
      thumbnailResource: '/images/library/chip-01.png',
      link: {
        url: 'https://learn.qiskit.org/learn-more',
        label: 'Learn more',
        segment: { cta: 'learn-more', location: 'qiskit-capabilities-section' }
      }
    },
    {
      title: 'Try it yourself',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper morbi libero tincidunt nisl eleifend. Diam netus cum ac in. Dolor praesent orci cras posuere consectetur purus ullamcorper.',
      visualResource: '',
      thumbnailResource: '/images/landing-page/med_02_1.png'
    }
  ]

  isActiveImage (item: MetalCapability, index: number): boolean {
    return item.title === this.activeSection || (this.activeSection === '' && index === 0)
  }
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.qiskit-capabilities-section {
  &__container {
    display: flex;
    padding-top: $spacing-10;
    padding-bottom: $spacing-09;
  }

  &__capabilities {
    display: flex;
    align-items: flex-start;
    width: 100%;
  }

  &__card {
    margin-bottom: $spacing-07;
  }

  &__scrolling-ui {
    position: sticky;
    top: $spacing-06;
    flex: 0 0 46rem;
    min-height: 20rem;
    margin-bottom: $spacing-12;

    @include mq($from: medium, $until: large) {
      flex: 1.5;
    }

    @include mq($until: medium) {
      display: none;
    }
  }

  &__visual-resource-container {
    position: absolute;
    top: 0;
    opacity: 0;
    transition: opacity 0.3s linear;
    width: 100%;
    height: 100%;

    &_active {
      opacity: 1;
    }
  }

  &__visual-resource {
    &_type {
      &_image {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center top;
        background-repeat: no-repeat;
      }

      &_video {
        width: 100%;
      }
    }
  }
}
</style>
