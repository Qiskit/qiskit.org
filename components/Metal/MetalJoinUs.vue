<template>
  <section class="early-access-section">
    <div class="early-access-section__container">
      <h2>Join Us</h2>
      <p class="early-access-section__description">
        We are thrilled to ask you to join this journey to revolutionize quantum
        devices. We will work closely to develop Metal and design quantum
        devices with it.
      </p>
      <UiCta
        :label="joinSlackLink.label"
        theme="dark"
        :url="joinSlackLink.url"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
// TODO: Refactor links (https://github.com/Qiskit/qiskit.org/issues/1566)
const joinSlackLink = {
  url: "https://qisk.it/join-slack",
  label: "Stay in touch through Slack",
};
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.early-access-section {
  background-color: qiskit.$background-color-dark;

  &__container {
    @include qiskit.contained;

    padding-top: carbon.$spacing-10;
    padding-bottom: carbon.$spacing-12;

    @include carbon.breakpoint-down(md) {
      padding-top: carbon.$spacing-07;
      padding-bottom: carbon.$spacing-10;
    }
  }

  &__description {
    max-width: 7 * qiskit.$column-size-large;
    margin-bottom: 3.25rem;

    @include carbon.breakpoint-down(lg) {
      margin-bottom: carbon.$spacing-07;
    }

    @include carbon.breakpoint-between(md, lg) {
      max-width: 5.5 * qiskit.$column-size-medium;
    }

    @include carbon.breakpoint-down(md) {
      width: 100%;
      max-width: initial;
    }
  }
}
</style>
