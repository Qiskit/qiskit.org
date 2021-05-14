<template>
  <main class="landing-page">
    <TheHeroMoment :version="qiskitVersion" />
    <div class="landing-page__grid">
      <AppMosaicSection
        class="bx--grid landing-page__section"
        :title="mosaicSectionTitle"
        :description="mosaicSectionDescription"
        :elements="mosaicSectionElements"
      >
        <AppCta
          kind="secondary"
          v-bind="fullOverviewLink"
        />
      </AppMosaicSection>
    </div>
    <TheQuickStart />
    <TheLearnSection />
  </main>
</template>

<script lang="ts">
import axios from 'axios'

import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'

@Component({
  head () {
    return { title: 'Qiskit' }
  },
  layout: 'default-max',
  async asyncData () {
    const qiskitPackageInfoUrl = 'https://pypi.org/pypi/qiskit/json'
    const packageInfo = (await axios.get(qiskitPackageInfoUrl)).data
    return {
      qiskitVersion: packageInfo.info.version
    }
  }
})
export default class LandingPage extends QiskitPage {
  routeName = 'qiskit-landing-page'

  mosaicSectionTitle = 'What can Qiskit do'
  mosaicSectionDescription = `Qiskit accelerates the development of quantum applications by
    providing the complete set of tools needed for interacting withquantum systems and simulators.`
  mosaicSectionElements = [
    {
      position: 'first',
      title: 'Access to circuits',
      description: 'Access a rich set of well-studied circuits, which can be used as benchmarks, building blocks in more complex circuits, or as a tool to explore quantum computational advantage.',
      image: '/images/landing-page/feature-circuit.png'
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

  fullOverviewLink = {
    url: '/overview',
    label: 'Full overview',
    segment: { action: 'Overview' }
  }
}
</script>

<style lang="scss">
.landing-page {
  &__grid {
    @include responsive-grid-bg-strip('/images/grid/grid-mosaic.svg', 112rem, auto, 16rem);
  }

  &__section {
    margin-top: $layout-05;
    margin-bottom: $layout-03;
    padding-bottom: $layout-07;

    @include mq($until: large) {
      margin-bottom: $layout-01;
    }

    @include mq($until: medium) {
      padding-bottom: $layout-05;
    }
  }
}
</style>
