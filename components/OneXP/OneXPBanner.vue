<template>
  <div class="one-xp-banner">
    <div class="one-xp-banner__container cds--grid">
      <span class="one-xp-banner__copy">
        🎉 Qiskit is getting a new documentation and learning experience on IBM
        Quantum!
      </span>
      <UiCta
        class="one-xp-banner__cta"
        kind="ghost"
        label="Learn more"
        segment="feature.secondaryCta.segment"
        url="https://example.com"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.one-xp-banner {
  background-image: linear-gradient(to right, carbon.$purple-10, carbon.$white);
  padding: carbon.$spacing-04 0;

  &__container {
    display: inline-flex;
    flex-direction: column;
    gap: carbon.$spacing-03;

    @include carbon.breakpoint-up(lg) {
      flex-direction: row;
    }
  }

  &__copy {
    font-weight: bold;
  }

  &__cta {
    padding: 0;
  }
}
</style>
