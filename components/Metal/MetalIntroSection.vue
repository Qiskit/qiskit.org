<template>
  <section class="intro-section">
    <div class="intro-section__container">
      <div class="cds--row">
        <h2 class="cds--col-md-6 cds--col-lg-8">
          Qiskit Metal | quantum device design is now open
        </h2>
      </div>
      <div class="intro-section__content">
        <p class="intro-section__description">
          Our vision is to develop a community-driven universal toolkit capable
          of orchestrating quantum chip development from concept to fabrication
          in a simple, scalable, and open framework.
          <br /><br />
          A first-of-its-kind, open-source project for engineers and scientists
          to design superconducting quantum devices with ease: Qiskit Metal.
        </p>
        <iframe
          class="intro-section__video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/C5jDrZgLQ_s"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <UiCta
        class="intro-section__cta"
        :label="joinWaitingListLink.label"
        theme="dark"
        :url="joinWaitingListLink.url"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const joinWaitingListLink = {
  url: "https://qiskit.org/documentation/metal",
  label: "Get started now",
};
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.intro-section {
  position: relative;
  margin-top: -18.5rem;

  @include carbon.breakpoint-down(lg) {
    margin-top: -8rem;
  }

  @include carbon.breakpoint-down(md) {
    margin-top: -5rem;
  }

  &__container {
    @include qiskit.contained;

    padding-top: carbon.$spacing-10;
    padding-bottom: 0;
  }

  &__content {
    display: flex;
    flex-direction: row;

    @include carbon.breakpoint-down(md) {
      flex-direction: column;
    }
  }

  &__description {
    max-width: 6 * qiskit.$column-size-large;
    margin-bottom: carbon.$spacing-12;
    padding-right: carbon.$spacing-07;

    @include carbon.breakpoint-down(lg) {
      margin-bottom: carbon.$spacing-07;
    }

    @include carbon.breakpoint-between(md, lg) {
      max-width: 4 * qiskit.$column-size-medium;
    }

    @include carbon.breakpoint-down(md) {
      max-width: 100%;
    }
  }

  &__video {
    width: 100%;

    @include carbon.breakpoint-down(md) {
      margin-bottom: carbon.$spacing-07;
    }
  }

  &__cta {
    position: relative;
    top: -3.2rem;

    @include carbon.breakpoint-down(lg) {
      top: 0;
      margin-top: carbon.$spacing-07;
    }
  }
}
</style>
