<template>
  <article class="introductory-content">
    <div class="introductory-content__overview">
      <h2 v-text="title" />
      <p class="introductory-content__description">
        {{ description }}
      </p>
      <UiCta
        v-if="link"
        kind="ghost"
        :label="link.label"
        :segment="link.segment"
        :url="link.url"
      />
      <template v-if="linkset">
        <UiCta
          v-for="linksetLink in linkset"
          :key="linksetLink.label"
          kind="ghost"
          :label="linksetLink.label"
          :segment="linksetLink.segment"
          :url="linksetLink.url"
        />
      </template>
    </div>
    <div class="introductory-content__details">
      <slot />
    </div>
  </article>
</template>

<script setup lang="ts">
import { NavLink } from "~/constants/menuLinks";

interface Props {
  description: string;
  link?: NavLink;
  linkset?: NavLink[];
  title: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
@use "sass:math";
@use "~/assets/scss/carbon.scss";

.introductory-content {
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
