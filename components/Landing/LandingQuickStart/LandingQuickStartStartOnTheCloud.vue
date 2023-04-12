<template>
  <section class="start-on-the-cloud">
    <div class="start-on-the-cloud__wrapper">
      <div class="start-on-the-cloud__content">
        <h3>Start Online</h3>
        <p>
          Get started in the cloud without installing anything with IBM Quantum
          Lab.
        </p>
        <UiCta
          kind="ghost"
          :label="ibmQExperienceLink.label"
          :url="ibmQExperienceLink.url"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { IBM_Q_EXPERIENCE } from "~/constants/appLinks";
const ibmQExperienceLink = IBM_Q_EXPERIENCE;
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.start-on-the-cloud {
  &__wrapper {
    @include qiskit.responsive-grid-bg("/images/grid/grid-white.svg", 36rem);

    background-color: qiskit.$background-color-lighter;
    background-position: bottom left;
    background-repeat: no-repeat;
    height: 100%;

    @include carbon.breakpoint-down(md) {
      background-position: bottom right;
      height: 17rem;
    }
  }

  &__content {
    padding: carbon.$spacing-07;

    @include carbon.breakpoint-down(lg) {
      padding: carbon.$spacing-05;
    }
  }
}
</style>
