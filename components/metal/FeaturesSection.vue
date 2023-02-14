<template>
  <section class="features-section">
    <div class="features-section__container">
      <h2>
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

<script setup lang="ts">
import { METAL_FEATURES } from '~/constants/metalContent'

const metalFeatures = METAL_FEATURES
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.features-section {
  background-color: $background-color-dark;

  &__container {
    @include contained();

    padding-top: carbon.$spacing-10;
    padding-bottom: carbon.$spacing-12;

    @include mq($until: medium) {
      padding-top: carbon.$spacing-06;
      padding-bottom: carbon.$spacing-06;
    }
  }

  &__description {
    max-width: 9 * $column-size-large;
    margin-bottom: carbon.$spacing-12;

    @include mq($until: large) {
      margin-bottom: carbon.$spacing-07;
    }

    @include mq($from: medium, $until: large) {
      max-width: 6 * $column-size-medium;
    }

    @include mq($until: medium) {
      width: 100%;
    }
  }

  &__card {
    margin-top: carbon.$spacing-09;
  }
}
</style>
