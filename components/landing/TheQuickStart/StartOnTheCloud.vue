<template>
  <section class="start-on-the-cloud">
    <div class="start-on-the-cloud__wrapper">
      <div class="start-on-the-cloud__content">
        <h3 class="copy__subtitle">
          Start Online
        </h3>
        <p class="copy__paragraph copy__paragraph_importance_support">
          Get started in the cloud without installing anything with IBM Quantum Lab.
        </p>
        <AppCta
          kind="ghost"
          v-bind="ibmQExperienceLink"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { IBM_Q_EXPERIENCE } from '~/constants/appLinks'

@Component
export default class StartOnTheCloud extends Vue {
  ibmQExperienceLink = IBM_Q_EXPERIENCE
}
</script>

<style lang="scss" scoped>
.start-on-the-cloud {
  &__wrapper {
    @include responsive-grid-bg('/images/grid/grid-white.svg', 36rem);

    background-color: $cool-gray-10;
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
