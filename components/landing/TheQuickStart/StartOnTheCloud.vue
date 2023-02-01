<template>
  <section class="start-on-the-cloud">
    <div class="start-on-the-cloud__wrapper">
      <div class="start-on-the-cloud__content">
        <h3>Start Online</h3>
        <p>
          Get started in the cloud without installing anything with IBM Quantum
          Lab.
        </p>
        <AppCta
          kind="ghost"
          v-bind="ibmQExperienceLink"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { IBM_Q_EXPERIENCE } from '~/constants/appLinks'

const ibmQExperienceLink = IBM_Q_EXPERIENCE
</script>

<style lang="scss" scoped>
.start-on-the-cloud {
  &__wrapper {
    @include responsive-grid-bg('/images/grid/grid-white.svg', 36rem);

    background-color: $background-color-lighter;
    background-position: bottom left;
    background-repeat: no-repeat;
    height: 100%;

    @include mq($until: medium) {
      background-position: bottom right;
      height: 17rem;
    }
  }

  &__content {
    padding: $spacing-07;

    @include mq($until: large) {
      padding: $spacing-05;
    }
  }
}
</style>
