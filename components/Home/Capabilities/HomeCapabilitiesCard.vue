<template>
  <article>
    <div class="home-capabilities-card__container">
      <div class="home-capabilities-card__thumbnail">
        <nuxt-img
          class="home-capabilities-card__thumbnail__media"
          format="webp"
          :src="thumbnailResource"
          width="160px"
          alt=""
        />
      </div>
      <div class="home-capabilities-card__copy">
        <h3 class="home-capabilities-card__title">
          {{ title }}
        </h3>
        <nuxt-img
          class="home-capabilities-card__thumbnail__mobile"
          format="webp"
          :src="thumbnailResource"
          width="160px"
          alt=""
        />
        <div class="home-capabilities-card__description">
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
import { TextLink } from "~/types/links";

interface Props {
  thumbnailResource: string;
  title: string;
  description: string;
  link?: TextLink | undefined;
}

withDefaults(defineProps<Props>(), {
  link: undefined,
});
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

$card-img-width: 10rem;

.home-capabilities-card {
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
