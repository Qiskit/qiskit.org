<template>
  <main class="element landing-page">
    <!-- TheHeroMoment is not a section since it has not the same margin as
    other sections. -->
    <TheHeroMoment
      class="landing-page__hero-moment"
      :version="qiskitVersion"
    />
    <TheFeatures />
    <QuickStart />
    <article class="landing-page__section">
      <h2 class="landing-page__header">
        Learn with Qiskit
      </h2>
      <LearnCard />
    </article>
  </main>
</template>

<script lang="ts">
import axios from 'axios'

import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import TheHeroMoment from '~/components/landing/TheHeroMoment/index.vue'
import TheFeatures from '~/components/landing/TheFeatures/index.vue'
import QuickStart from '~/components/landing/QuickStart/index.vue'
import LearnCard from '~/components/landing/LearnCard.vue'

@Component({
  components: {
    TheHeroMoment,
    TheFeatures,
    QuickStart,
    LearnCard
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

  &__hero-moment {
    margin-bottom: $layout-05;

    @include mq($from: medium, $until: large) {
      margin-bottom: $layout-06;
    }

    @include mq($until: medium) {
      margin-bottom: 0;
    }
  }

  &__title {
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

  &__copy {
    @include type-style('body-long-01');
    color: $gray-60;
    max-width: 6 * $column-size-large;
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

  &__util {
    &_vertical-spacer {
      padding-bottom: $layout-07;

      @include mq($until: medium) {
        padding-bottom: $layout-05;
      }
    }
  }
}
</style>
