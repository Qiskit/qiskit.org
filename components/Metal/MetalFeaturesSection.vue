<template>
  <section class="features-section">
    <div class="features-section__container">
      <h2>Why Qiskit Metal</h2>
      <p class="features-section__description">
        Designing quantum devices is the bedrock of the quantum ecosystem, but
        it is a difficult, multi-step process that connects traditionally
        disparate worlds.
        <br /><br />
        Metal is automating and streamlining this process. Our vision is to
        develop a community-driven universal platform capable of orchestrating
        quantum chip development from concept to fabrication in a simple and
        open framework.
      </p>
      <MetalFeatureCard
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
import { METAL_FEATURES } from "~/constants/metalContent";

const metalFeatures = METAL_FEATURES;
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.features-section {
  background-color: qiskit.$background-color-dark;

  &__container {
    @include qiskit.contained;

    padding-top: carbon.$spacing-10;
    padding-bottom: carbon.$spacing-12;

    @include carbon.breakpoint-down(md) {
      padding-top: carbon.$spacing-06;
      padding-bottom: carbon.$spacing-06;
    }
  }

  &__description {
    max-width: 9 * qiskit.$column-size-large;
    margin-bottom: carbon.$spacing-12;

    @include carbon.breakpoint-down(lg) {
      margin-bottom: carbon.$spacing-07;
    }

    @include carbon.breakpoint-between(md, lg) {
      max-width: 6 * qiskit.$column-size-medium;
    }

    @include carbon.breakpoint-down(md) {
      width: 100%;
    }
  }

  &__card {
    margin-top: carbon.$spacing-09;
  }
}
</style>
