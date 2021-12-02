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
            <video
              v-if="isVideo(item.visualResource)"
              class="
                qiskit-capabilities-section__visual-resource
                qiskit-capabilities-section__visual-resource_type_video"
              loop
              autoplay
              muted
              playsinline
            >
              <source :src="item.visualResource" type="video/mp4">
              <source :src="item.visualResource" type="video/ogg">
              Your browser does not support video.
            </video>
            <div
              v-else
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
      thumbnailResource: '/images/landing-page/feature-circuit.png'
    },
    {
      title: 'Transpiler',
      description: 'Metal helps automate the quantum electrodynamics modeling of quantum devices to predict their performance  and parameters, such as qubit frequencies, anharmonicities, couplings, and dissipation. Metal’s vision is to provide the abstraction layer needed to seamlessly interconnect with your favorite electromagnetic analysis tool (HFSS, Sonnet, CST, AWR, Comsol, …), dynamically rendering and co-simulating your design, at the whim of a click.',
      visualResource: 'https://place-hold.it/734x480/d4bbff',
      thumbnailResource: '/images/landing-page/transpiler.png'
    },
    {
      title: 'Run on real hardware',
      description: `Metal aims to give access to advanced quantum analysis techniques to calculate qubit frequencies, anharmonicities, and extract non-linear couplings, dissipation, and the full Hamiltonian of the quantum device, with percent-level accuracy.
                    <br><br>
                    We plan to include the Energy Participation Ratio (EPR), impedance analysis, and the lumped-oscillator model. We hope to further build up the quantum analysis library in collaboration with the community.`,
      visualResource: 'https://place-hold.it/734x480/be95ff',
      thumbnailResource: '/images/library/chip-01.png'
    }
  ]

  isActiveImage (item: MetalCapability, index: number): boolean {
    return item.title === this.activeSection || (this.activeSection === '' && index === 0)
  }

  isVideo (url: string): boolean {
    const extension = url.substring(url.length - 4)
    return extension === '.mp4'
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
    margin-bottom: $spacing-12;

    @include mq($until: medium) {
      margin-bottom: $spacing-07;
    }
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
