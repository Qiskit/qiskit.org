<template>
  <section class="intro-section">
    <div class="intro-section__container">
      <h2 class="intro-section__title">
        Streamlining quantum device design
      </h2>
      <div class="intro-section__content">
        <p class="intro-section__description">
          Metal’s vision is to develop a community-driven universal toolkit capable of orchestrating quantum chip development from concept to fabrication in a simple, scalable, and open framework. <br><br>
          A first-of-its-kind, open-source project for engineers and scientists to design superconducting quantum device with ease: Qiskit Metal.
        </p>
      </div>
      <AppCta
        class="intro-section__cta"
        v-bind="accessRequest"
      >
        {{ accessRequest.label }}
      </AppCta>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import AppCta from '~/components/ui/AppCta.vue'

@Component({ components: { AppCta } })
export default class extends Vue {
  accessRequest = {
    url: 'https://qiskit.org',
    label: 'Request early access'
  }
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.intro-section {
  &__container {
    @include contained();
    padding-top: $layout-05;
    padding-bottom: $layout-06;
  }

  &__title {
    @include type-style('expressive-heading-05');
    margin-bottom: $layout-03;
    font-weight: 300;

    @include mq($until: large) {
      @include type-style('expressive-heading-04');
    }
  }

  &__description {
    @include type-style('body-long-01');
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

  &__cta {
    color: $white !important;
    background-color: $purple-70;
    padding: $spacing-05;
    width: fit-content !important;
  }
}
</style>
