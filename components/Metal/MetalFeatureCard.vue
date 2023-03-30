<template>
  <article class="feature-card">
    <h3 class="feature-card__title">
      {{ title }}
    </h3>
    <div class="feature-card__content">
      <div
        class="feature-card__image"
        :style="{ 'background-image': `url(${image})` }"
      />
      <!-- TODO: HTML content should not be in strings but in components
      but lacking of a better solution given time constraints. -->
      <!-- eslint-disable vue/no-v-html -->
      <div class="feature-card__description" v-html="description" />
      <!-- eslint-enable -->
    </div>
  </article>
</template>

<script setup lang="ts">
interface Props {
  image: string;
  title: string;
  description: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.feature-card {
  width: 100%;
  display: flex;

  @include carbon.breakpoint-down(lg) {
    flex-direction: column;
  }

  &__title {
    flex: 0 0 12rem;
    padding-right: carbon.$spacing-07;
    padding-bottom: carbon.$spacing-07;

    @include carbon.breakpoint-down(lg) {
      flex: 0 0 auto;
    }
  }

  &__content {
    min-height: 11rem;
    display: flex;

    @include carbon.breakpoint-down(md) {
      flex-direction: column;
    }
  }

  &__image {
    flex: 0 0 14rem;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    overflow: hidden;

    @include carbon.breakpoint-down(md) {
      background-size: contain;
      height: 11rem;
      width: auto;
    }
  }

  &__description {
    padding: carbon.$spacing-05 carbon.$spacing-05 carbon.$spacing-05
      carbon.$spacing-07;

    @include carbon.breakpoint-down(md) {
      padding: carbon.$spacing-06 0 0 0;
    }
  }
}
</style>
