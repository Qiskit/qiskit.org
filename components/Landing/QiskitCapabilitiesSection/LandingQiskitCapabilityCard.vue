<template>
  <article>
    <div class="qiskit-capability-card__container">
      <div class="qiskit-capability-card__thumbnail">
        <nuxt-img
          class="qiskit-capability-card__thumbnail__media"
          format="webp"
          :src="thumbnailResource"
          width="160px"
        />
      </div>
      <div class="qiskit-capability-card__copy">
        <h3 class="qiskit-capability-card__title">
          {{ title }}
        </h3>
        <nuxt-img
          class="qiskit-capability-card__thumbnail__mobile"
          format="webp"
          :src="thumbnailResource"
          width="160px"
        />
        <div class="qiskit-capability-card__description">
          <p v-text="description" />
          <UiCta
            v-if="link"
            kind="ghost"
            :label="link.label"
            :segment="link.segment"
            :url="link.url"
          />
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { Link } from "~/types/links";

interface Props {
  thumbnailResource: string;
  title: string;
  description: string;
  link?: Link | undefined;
}

withDefaults(defineProps<Props>(), {
  link: undefined,
});
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

$card-img-width: 10rem;

.qiskit-capability-card {
  &__container {
    display: flex;

    @include carbon.breakpoint-down(lg) {
      flex-direction: column;
    }
  }

  &__copy {
    padding-right: carbon.$spacing-07;
  }

  &__thumbnail {
    margin-right: carbon.$spacing-07;

    @include carbon.breakpoint-down(lg) {
      margin-right: initial;
      margin-bottom: carbon.$spacing-05;
    }

    @include carbon.breakpoint-down(lg) {
      display: none;
    }

    &__media {
      display: block;
      width: $card-img-width;
    }

    &__mobile {
      display: none;

      @include carbon.breakpoint-down(lg) {
        display: block;
        width: $card-img-width;
        margin-bottom: carbon.$spacing-05;
      }
    }
  }

  &__title {
    padding-right: carbon.$spacing-07;

    @include carbon.breakpoint-down(lg) {
      padding-right: 0;
    }

    @include carbon.breakpoint-down(md) {
      padding-bottom: 0;
      margin-bottom: carbon.$spacing-05;
    }
  }

  &__description {
    padding-bottom: carbon.$spacing-05;
  }
}
</style>
