<template>
  <section class="early-access-section">
    <div class="early-access-section__container">
      <h2>
        Join Us
      </h2>
      <p class="early-access-section__description">
        We are thrilled to ask you to join this journey to revolutionize quantum devices. We will work closely to develop Metal and design quantum devices with it.
      </p>
      <AppCta v-bind="joinSlackLink" theme="dark" />
    </div>
  </section>
</template>

<script setup lang="ts">
const joinSlackLink = {
  url: 'https://ibm.co/joinqiskitslack',
  label: 'Stay in touch through Slack'
}
</script>

<style lang="scss" scoped>
.early-access-section {
  background-color: $background-color-dark;

  &__container {
    @include contained();

    padding-top: $spacing-10;
    padding-bottom: $spacing-12;

    @include mq($until: medium) {
      padding-top: $spacing-07;
      padding-bottom: $spacing-10;
    }
  }

  &__description {
    max-width: 7 * $column-size-large;
    margin-bottom: 3.25rem;

    @include mq($until: large) {
      margin-bottom: $spacing-07;
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
