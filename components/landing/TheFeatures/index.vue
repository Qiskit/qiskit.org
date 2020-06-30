<template>
  <article
    class="the-features"
  >
    <div class="the-features__container">
      <h2 class="landing-page__title">
        What can Qiskit do
      </h2>
      <p class="landing-page__copy">
        Qiskit accelerates the development of quantum applications by
        providing the complete set of tools needed for interacting with
        quantum systems and simulators.
      </p>
      <TheFeatureMosaic class="the-features__mosaic" />
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
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

import { Component } from 'vue-property-decorator'
import LandingCta from '~/components/landing/LandingCta.vue'
import TheFeatureMosaic from '~/components/landing/TheFeatures/TheFeatureMosaic.vue'

@Component({
  components: { LandingCta, TheFeatureMosaic }
})
export default class extends Vue {
  routeName = 'qiskit-landing-page'
}
</script>

<style lang="scss">
@import '~/assets/scss/element.scss';
@import '~carbon-components/scss/globals/scss/typography';

.the-features {
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
