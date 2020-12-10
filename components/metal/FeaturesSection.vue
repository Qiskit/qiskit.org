<template>
  <section class="features-section">
    <div class="features-section__container">
      <h2 class="features-section__title">
        Why Qiskit Metal
      </h2>
      <p class="features-section__description">
        Designing quantum devices is the bedrock of the quantum ecosystem, but it is a difficult, multi-step process that connects traditionally disparate worlds.
        <br><br>
        Metal is automating and streamlining this process. Our vision is to develop a community-driven universal platform capable of orchestrating quantum chip development from concept to fabrication in a simple and open framework.
      </p>
      <FeatureCard
        v-for="feature in metalFeatures"
        :key="feature.title"
        class="features-section__card"
        :title="feature.title"
        :description="feature.description"
        :image="feature.image"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { METAL_FEATURES } from '~/constants/metalContent'

@Component
export default class FeaturesSection extends Vue {
  metalFeatures = METAL_FEATURES
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.features-section {
  background-color: $cool-gray-80;

  &__container {
    @include contained();
    padding-top: $layout-05;
    padding-bottom: $layout-06;

    @include mq($until: medium) {
      padding-top: $layout-02;
      padding-bottom: $layout-02;
    }
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

  &__card {
    margin-top: $layout-04;
  }
}
</style>
