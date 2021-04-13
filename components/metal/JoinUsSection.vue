<template>
  <section class="early-access-section">
    <div class="early-access-section__container">
      <h2 class="early-access-section__title">
        Join Us
      </h2>
      <p class="early-access-section__description">
        We are thrilled to ask you to join this journey to revolutionize quantum devices. We will work closely to develop Metal and design quantum devices with it.
      </p>
      <AppCta v-bind="joinSlackLink" theme="dark" />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class JoinUsSection extends Vue {
  joinSlackLink = {
    url: 'https://ibm.co/joinqiskitslack',
    label: 'Stay in touch through Slack'
  }
}
</script>

<style lang="scss" scoped>
@import "~carbon-components/scss/globals/scss/typography";

.early-access-section {
  background-color: $ui-02_dark;

  &__container {
    @include contained();
    padding-top: $layout-05;
    padding-bottom: $layout-06;

    @include mq($until: medium) {
      padding-top: $layout-03;
      padding-bottom: $layout-05;
    }
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
}
</style>
