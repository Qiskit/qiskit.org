<template>
  <section class="early-access-section">
    <div class="early-access-section__container">
      <h2 class="early-access-section__title">
        Early Access
      </h2>
      <p class="early-access-section__description">
        Through an early-access program, we are thrilled to ask you to join this journey to revolutionize quantum devices.
        <br>
        <br>
        The early-access program will start in November and proceed through March, 2021, during which time we will work closely to develop Metal and design quantum devices with it.
      </p>

      <AppCta
        class="early-access-section__cta"
        :url="stayInTouchLink"
      >
        Sign up to stay in touch
      </AppCta>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import AppCta from '~/components/ui/AppCta.vue'

@Component({
  components: { AppCta }
})

export default class extends Vue {
  // TODO: update with url
  stayInTouchLink = 'https://qiskit.org'
}
</script>

<style lang="scss" scoped>
@import "~carbon-components/scss/globals/scss/typography";
@import '~/assets/scss/blocks/copy.scss';

.early-access-section {
  background-color: $cool-gray-80;

  &__container {
    @include contained();
    padding-top: $layout-05;
    padding-bottom: $layout-06;
  }

  &__title {
    @include type-style("expressive-heading-05");
    margin-bottom: $layout-03;
    font-weight: 300;

    @include mq($until: large) {
      @include type-style("expressive-heading-04");
    }
  }

  &__description {
    @include type-style("body-long-01");
    max-width: 7 * $column-size-large;
    margin-bottom: 3.25rem;

    @include mq($until: large) {
      margin-bottom: $layout-03;
    }

    @include mq($from: medium, $until: large) {
      max-width: 5.5 * $column-size-medium;
    }

    @include mq($until: medium) {
      width: 100%;
      max-width: initial;
    }
  }

  &__cta {
    color: $white !important;
    background-color: $purple-70;
    padding: $spacing-05;
    width: fit-content !important;

    @include mq($until: medium) {
      width: 100% !important;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
