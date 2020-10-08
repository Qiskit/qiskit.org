<template>
  <section class="building-section">
    <div class="building-section__container">
      <h2 class="building-section__title">
        Building together
      </h2>
      <p class="building-section__description">
        Whether you are learning, teaching or performing scientific research, we hope Metal will get you there faster.
      </p>

      <div class="building-section__content">
        <div class="building-section__copy">
          <h3 class="copy__subtitle">
            Call for community participation
          </h3>
          <p class="copy__paragraph">
            This may just be the beginning, but we think Qiskit Metal has immense potential. We hope to form this software into one usable by superconducting quantum hardware designers across industry and academia, and perhaps even for other qubit architectures. Over time, we hope Metal will become the gateway for conventional microchip designers to get their feet wet designing quantum processors. And we hope that soon, quantum hardware experts will be able to write their own quantum analysis plugins and run them as their own Qiskit Metal backends.
          </p>
          <h3 class="copy__subtitle">
            Open source
          </h3>
          <p class="copy__paragraph">
            Qiskit Metal is a visionary work in progress in its early development stages. We're working toward a vision—a quantum design & analysis platform built from the ground up specifically for quantum hardware. It is crucial that we keep this product open source in order to grow Qiskit Metal into the software that will be most useful for quantum hardware engineers around the world and for the innovation in and growth of the field as a whole. If Qiskit Metal doesn't have what you want, then you extend Metal to build it!
          </p>
          <h3 class="copy__subtitle">
            Early access
          </h3>
          <p class="copy__paragraph">
            Through an early-access program, we are thrilled to ask you to join this journey to revolutionize quantum devices.
            <br>
            <br>
            The early-access program will start in November and proceed through March, 2021, during which time we will work closely to develop Metal and design quantum devices with it.
          </p>
        </div>
        <div class="building-section__img">
          <img
            src="/images/metal/whiteboard-dark.png"
            alt="Sketched illustration of a group standing in front of a whiteboard."
          >
        </div>
      </div>

      <LandingCta
        class="card-link"
        :url="stayInTouchLink"
        kind="dark"
      >
        Stay in touch
      </LandingCta>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import LandingCta from '~/components/landing/LandingCta.vue'

@Component({
  components: { LandingCta }
})

export default class extends Vue {
  stayInTouchLink = ''
}
</script>

<style lang="scss" scoped>
@import "~carbon-components/scss/globals/scss/typography";
@import '~/assets/scss/blocks/copy.scss';

.building-section {
  background-color: $cool-gray-100;

  &__container {
    @include contained();
    padding-top: $layout-05;
    padding-bottom: $layout-06;
  }

  &__title {
    @include type-style("expressive-heading-05");
    margin-bottom: $layout-03;
    font-weight: 300;

    @include mq($until: large) {
      @include type-style("expressive-heading-04");
    }
  }

  &__description {
    @include type-style("body-long-01");
    max-width: 9 * $column-size-large;
    margin-bottom: $layout-06;

    @include mq($until: large) {
      margin-bottom: $layout-03;
    }

    @include mq($from: medium, $until: large) {
      max-width: 6 * $column-size-medium;
    }

    @include mq($until: medium) {
      width: 100%;
    }
  }

  &__content {
    display: flex;
    margin-bottom: $layout-06;

    @include mq($until: medium) {
      margin-bottom: $layout-05;
    }
  }

  &__copy {
    flex: 0 0 28rem;
  }

  .copy__paragraph,
  .copy__subtitle {
    color: $white;
  }

  &__img img {
    @include mq($until: large) {
      display: none;
    }
  }
}
</style>
