<template>
  <section class="building-section">
    <div class="building-section__container">
      <h2 class="building-section__title">
        Building together
      </h2>
      <p class="building-section__description copy__paragraph_importance_outstanding">
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
            Qiskit Metal is a visionary work in progress in its early development stages. We‘re working toward a vision—a quantum design & analysis platform built from the ground up specifically for quantum hardware. It is crucial that we keep this product open source in order to grow Qiskit Metal into the software that will be most useful for quantum hardware engineers around the world and for the innovation in and growth of the field as a whole. If Qiskit Metal doesn't have what you want, then you extend Metal to build it!
          </p>
          <h3 class="copy__subtitle">
            Education
          </h3>
          <!-- eslint-disable vue/multiline-html-element-content-newline -->
          <p class="copy__paragraph">
            A few sentences here about educational material. The first link is to “<AppLink
              class="building-section__copy-link copy__link "
              url="https://qiskit.org/learn/intro-qc-qh/"
            >Introduction to Quantum Computing and Quantum Hardware</AppLink>“ summer school lectures series by Zlatko Minev on Superconducting Qubits. The second link is to the “<AppLink
              class="building-section__copy-link copy__link "
              url="https://qiskit.org/textbook/ch-quantum-hardware/transmon-physics.html"
            >Qiskit textbook</AppLink>“ chapters we are building on quantum devices and their control.
          </p>
          <!-- eslint-enable -->
        </div>
        <div class="building-section__media">
          <img
            class="building-section__media-img"
            src="/images/metal/whiteboard-dark.png"
            alt="Sketched illustration of a group standing in front of a whiteboard."
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import AppLink from '~/components/ui/AppLink.vue'

@Component({ components: { AppLink } })

export default class extends Vue {}
</script>

<style lang="scss" scoped>
@import "~carbon-components/scss/globals/scss/typography";
@import '~/assets/scss/blocks/copy.scss';

.building-section {
  background-color: $cool-gray-100;

  &__container {
    @include contained();
    padding-top: $layout-05;
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
    max-width: 7.5 * $column-size-large;
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
    margin-bottom: $layout-05;
  }

  &__copy {
    flex: 0 0 28rem;

    @include mq($until: medium) {
      flex: 1;
    }

    &-link {
      color: $purple-50;
      text-decoration: underline;
    }
  }

  .copy__paragraph,
  .copy__subtitle {
    color: $white;
  }

  .copy__paragraph {
    margin-bottom: $layout-04;
  }

  &__media-img {
    @include mq($until: large) {
      display: none;
    }
  }
}
</style>
