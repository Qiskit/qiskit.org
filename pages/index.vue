<template>
  <main class="element landing-page">
    <div class="landing-page__presentation-container">
      <div class="landing-page__presentation-picture" />
      <div class="landing-page__section">
        <TheHeroMoment
          class="landing-page__presentation"
          :version="qiskitVersion"
        />
      </div>
    </div>
    <article class="landing-page__section">
      <h2 class="landing-page__header">
        What can Qiskit do
      </h2>
      <p class="landing-page__paragraph">
        Qiskit accelerates the development of quantum applications by
        providing the complete set of tools needed for interacting with
        quantum systems and simulators.
      </p>
      <TheFeatureMosaic class="landing-page__feature-mosaic" />
      <!-- TODO: Link to the overview page -->
      <LandingCta
        kind="secondary"
        class="landing-page__full-overview-cta"
        url="#"
        @click="$trackClickEvent({
          action: 'Visit Full Overview'
        })"
      >
        Full Overview
      </LandingCta>
    </article>
  </main>
</template>

<script lang="ts">
import axios from 'axios'

import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import TheHeroMoment from '~/components/landing/TheHeroMoment.vue'
import LandingCta from '~/components/landing/LandingCta.vue'
import TheFeatureMosaic from '~/components/landing/TheFeatureMosaic.vue'

@Component({
  components: {
    LandingCta,
    TheHeroMoment,
    TheFeatureMosaic
  },
  head () {
    return { title: 'Qiskit' }
  },
  async asyncData () {
    const qiskitPackageInfoUrl = 'https://pypi.org/pypi/qiskit/json'
    const packageInfo = (await axios.get(qiskitPackageInfoUrl)).data
    return {
      qiskitVersion: packageInfo.info.version
    }
  }
})
export default class extends QiskitPage {
  routeName = 'qiskit-landing-page'
}
</script>

<style lang="scss">
@import '~/assets/scss/element.scss';
@import '~carbon-components/scss/globals/scss/typography';

.landing-page {
  background-color: $white-background-ui;

  &__presentation-container {
    position: relative;
    padding-top: $layout-06;
    padding-bottom: $layout-07;
    margin-bottom: $layout-06;
    background-size:
      5rem 5rem,
      5rem 5rem;
    background-image:
      linear-gradient(to right, $cool-gray-10 1px, transparent 1px),
      linear-gradient(to bottom, $cool-gray-10 1px, transparent 1px);
    background-position:
      -1rem center,
      -1rem center;
    background-repeat:
      repeat,
      repeat;

    overflow: hidden;

    @include mq($from: medium, $until: large) {
      padding-top: $layout-05;
      padding-bottom: $layout-06;
      margin-bottom: $layout-05;
      background-size:
        3rem 3rem,
        3rem 3rem;
    }

    @include mq($until: medium) {
      padding-top: $layout-03;
      padding-bottom: $layout-05;
      margin-bottom: $layout-03;
      background-size:
        2rem 2rem,
        2rem 2rem;
    }
  }

  &__presentation-picture {
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 50%;
    background: url('/images/hero-illustration.png') no-repeat;
    background-size: contain;

    $picture-threshold-for-hiding: 0.75 * $medium;

    @include mq($from: $picture-threshold-for-hiding, $until: large) {
      left: 40%;
    }

    @include mq($until: $picture-threshold-for-hiding) {
      display: none;
    }
  }

  &__section {
    @include contained();
    margin-bottom: $layout-07;
  }

  &__feature-mosaic {
    margin-top: $layout-01;
    margin-bottom: $layout-03;

    @include mq($from: medium, $until: large) {
      margin-bottom: $layout-01;
    }

    @include mq($until: medium) {
      margin-bottom: $layout-01;
    }
  }

  &__header {
    @include type-style('expressive-heading-05');
    margin-bottom: $layout-03;
    color: $cool-gray-80;

    @include mq($from: medium, $until: large) {
      @include type-style('expressive-heading-03');
      font-weight: 300;
      margin-bottom: $layout-01;
      max-width: 4 * $column-size-medium;
    }

    @include mq($until: medium) {
      @include type-style('expressive-heading-03');
      font-weight: 300;
      max-width: 4 * $column-size-small;
      margin-bottom: $layout-01;
    }
  }

  &__paragraph {
    @include type-style('body-long-01');
    color: $gray-60;
    max-width: 6.25 * $column-size-large;
    margin-bottom: $layout-04;

    @include mq($from: medium, $until: large) {
      @include type-style('label-01');
      max-width: 4 * $column-size-medium;
      margin-bottom: $layout-03;
    }

    @include mq($until: medium) {
      @include type-style('label-01');
      max-width: 4 * $column-size-small;
      margin-bottom: $layout-03;
    }
  }
}
</style>
