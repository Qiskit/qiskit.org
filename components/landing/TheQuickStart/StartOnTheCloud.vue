<template>
  <section class="start-on-the-cloud">
    <div class="start-on-the-cloud__content">
      <h3 class="copy__subtitle">
        Start Online
      </h3>
      <p class="copy__paragraph copy__paragraph_importance_support">
        IBM's hosted Jupyter Notebooks let you get started without installing anything.
      </p>
      <AppCta
        kind="ghost"
        v-bind="ibmQExperienceLink"
      />
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
@import '~/assets/scss/blocks/copy.scss';
@import '~carbon-components/scss/globals/scss/typography';

.start-on-the-cloud {
  @include responsive-grid-bg('/images/grid/grid-white.svg', 36rem);

  width: 37%;
  background-color: $cool-gray-10;
  background-position: bottom left;
  background-repeat: no-repeat;

  @include mq($until: medium) {
    width: auto;
    height: 17rem;
    background-position: bottom right;
  }

  &__content {
    padding: $spacing-07;

    @include mq($until: large) {
      padding: $spacing-05;
    }
  }
}
</style>
