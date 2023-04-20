<template>
  <article class="introductory-content">
    <div class="cds--grid bx--no-gutter">
      <div class="cds--row">
        <div class="cds--col-lg-4">
          <div class="introductory-content__overview">
            <h2 v-text="title" />
            <p class="introductory-content__description">
              {{ description }}
            </p>
          </div>
        </div>
        <div class="cds--col-lg-12">
          <slot />
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Props {
  description: string;
  title: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.introductory-content {
  @include carbon.breakpoint-down(lg) {
    display: block;
  }

  &__overview {
    @include carbon.breakpoint-up(lg) {
      position: sticky;
      top: 4.5rem;
    }
  }

  &__description {
    margin-bottom: carbon.$spacing-07;
  }
}
</style>
