<template>
  <article class="app-introductory-content">
    <div class="app-introductory-content__overview">
      <h2 v-text="title" />
      <p class="app-introductory-content__description">
        {{ description }}
      </p>
      <UiAppCta
        v-if="link"
        kind="ghost"
        :label="link.label"
        :segment="link.segment"
        :url="link.url"
      />
      <template v-if="linkset">
        <UiAppCta
          v-for="link in linkset"
          :key="link.label"
          kind="ghost"
          :label="link.label"
          :segment="link.segment"
          :url="link.url"
        />
      </template>
    </div>
    <div class="app-introductory-content__details">
      <slot />
    </div>
  </article>
</template>

<script setup lang="ts">
import { NavLink } from "~/constants/menuLinks";

interface Props {
  description: string;
  link: NavLink;
  linkset: NavLink[];
  title: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.app-introductory-content {
  display: flex;

  @include carbon.breakpoint-down(lg) {
    display: block;
  }

  &__overview {
    margin-bottom: carbon.$spacing-07;

    @include carbon.breakpoint-up(lg) {
      $grid-columns: math.div(
        5,
        13
      ); // Number of columns that the element will use at this breakpoint.

      max-width: 100% * $grid-columns;
      padding-right: carbon.$spacing-07;
    }

    @include carbon.breakpoint-up(max) {
      $grid-columns: math.div(
        4,
        13
      ); // Number of columns that the element will use at this breakpoint.

      max-width: 100% * $grid-columns;
    }
  }

  &__description {
    margin-bottom: carbon.$spacing-10;

    @include carbon.breakpoint-down(lg) {
      margin-bottom: carbon.$spacing-07;
    }
  }

  &__details {
    width: 100%;
  }
}
</style>
