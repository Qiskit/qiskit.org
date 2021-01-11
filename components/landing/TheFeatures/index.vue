<template>
  <article
    class="the-features"
  >
    <div
      class="
        the-features__container
        copy__util
        copy__util_vertical-spacer
      "
    >
      <h2 class="copy__title">
        What can Qiskit do
      </h2>
      <p class="copy__paragraph copy__paragraph_importance_outstanding">
        Qiskit accelerates the development of quantum applications by
        providing the complete set of tools needed for interacting with
        quantum systems and simulators.
      </p>
      <AppMosaic class="the-features__mosaic" :mosaic-elements="mosaicElements" />
      <AppCta
        kind="secondary"
        v-bind="fullOverviewLink"
      />
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

import { Component } from 'vue-property-decorator'

@Component
export default class TheFeatures extends Vue {
  fullOverviewLink = {
    url: '/overview',
    label: 'Full overview',
    segment: { action: 'Overview' }
  }

  mosaicElements = [
    {
      position: 'first',
      title: 'Access to circuits',
      description: 'Access a rich set of well-studied circuits, which can be used as benchmarks, building blocks in more complex circuits, or as a tool to explore quantum computational advantage.',
      image: '/images/library/circuit-01.png'
    },
    {
      position: 'second',
      title: 'Hardware Access',
      description: 'Execute code on multiple quantum hardware architectures, from superconducting qubits to trapped-ions.',
      image: '/images/landing-page/feature-hardware.jpg'
    },
    {
      position: 'third',
      title: 'Quantum Algorithms',
      description: 'Research and prototype machine learning, optimization and chemistry applications by building upon a library of quantum algorithms.',
      image: '/images/landing-page/feature-quantum-algorithms.png'
    },
    {
      position: 'fourth',
      title: 'Noise Mitigation',
      description: 'Study and reduce the impact of noise using built-in modules for noise characterization and circuit optimization.',
      image: '/images/landing-page/feature-noise-mitigation.png'
    }
  ]
}
</script>

<style lang="scss">
@import '~carbon-components/scss/globals/scss/typography';

.the-features {
  @include responsive-grid-bg-strip('/images/grid/grid-mosaic.svg', 112rem, auto, 16rem);

  &__container {
    @include contained();
  }

  &__mosaic {
    margin-top: $layout-01;
    margin-bottom: $layout-03;

    @include mq($from: medium, $until: large) {
      margin-bottom: $layout-01;
    }

    @include mq($until: medium) {
      margin-bottom: $layout-01;
    }
  }
}
</style>
