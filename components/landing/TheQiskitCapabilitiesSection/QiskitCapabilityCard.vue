<template>
  <article>
    <div class="qiskit-capability-card__container">
      <div class="qiskit-capability-card__thumbnail">
        <img class="qiskit-capability-card__thumbnail__media" :src="thumbnailResource">
      </div>
      <div class="qiskit-capability-card__copy">
        <h3 class="qiskit-capability-card__title">
          {{ title }}
        </h3>
        <img class="qiskit-capability-card__thumbnail__mobile" :src="thumbnailResource">
        <div class="qiskit-capability-card__description">
          <p v-text="description" />
          <AppCta
            v-if="link"
            v-bind="link"
            kind="ghost"
          />
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { GeneralLink } from '~/constants/appLinks'

interface Props {
  thumbnailResource: string
  title: string
  description: string
  link?: GeneralLink | undefined
}

withDefaults(defineProps<Props>(), {
  link: undefined
})
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

$card-img-width: 10rem;

.qiskit-capability-card {
  &__container {
    display: flex;

    @include mq($until: large) {
      flex-direction: column;
    }
  }

  &__copy {
    padding-right: carbon.$spacing-07;
  }

  &__thumbnail {
    margin-right: carbon.$spacing-07;

    @include mq($until: large) {
      margin-right: initial;
      margin-bottom: carbon.$spacing-05;
    }

    @include mq($until: large) {
      display: none;
    }

    &__media {
      display: block;
      width: 100%;
      width: $card-img-width;
    }

    &__mobile {
      display: none;
      @include mq($until: large) {
        display: block;
        width: $card-img-width;
        margin-bottom: carbon.$spacing-05;
      }
    }
  }

  &__title {
    padding-right: carbon.$spacing-07;

    @include mq($until: large) {
      padding-right: 0;
    }

    @include mq($until: medium) {
      padding-bottom: 0;
      margin-bottom: carbon.$spacing-05;
    }
  }

  &__description {
    padding-bottom: carbon.$spacing-05;
  }
}
</style>
