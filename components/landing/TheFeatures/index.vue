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
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'

import { Component } from 'vue-property-decorator'
import TheFeatureMosaic from '~/components/landing/TheFeatures/TheFeatureMosaic.vue'

@Component({
  components: { TheFeatureMosaic }
})
export default class extends Vue { }
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
