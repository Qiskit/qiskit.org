<template>
  <article class="app-introductory-content">
    <div class="app-introductory-content__overview">
      <h2 v-text="title" />
      <p class="app-introductory-content__description">
        {{ description }}
      </p>
      <AppCta
        v-if="link"
        v-bind="link"
        kind="ghost"
      />
      <template v-if="linkset">
        <AppCta
          v-for="link in linkset"
          v-bind="link"
          :key="link.index"
          kind="ghost"
        />
      </template>
    </div>
    <div class="app-introductory-content__details">
      <slot />
    </div>
  </article>
</template>

<script setup lang="ts">
import { NavLink } from '~/constants/menuLinks'

interface Props {
  description: string
  link: NavLink
  linkset: NavLink[]
  title: string
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.app-introductory-content {
  display: flex;

  @include mq($until: large) {
    display: block;
  }

  &__overview {
    margin-bottom: carbon.$spacing-07;

    @include mq($from: large) {
      $grid-columns: math.div(5, 13); // Number of columns that the element will use at this breakpoint.

      max-width: 100% * $grid-columns;
      padding-right: carbon.$spacing-07;
    }

    @include mq($from: max-size) {
      $grid-columns: math.div(4, 13); // Number of columns that the element will use at this breakpoint.

      max-width: 100% * $grid-columns;
    }
  }

  &__description {
    margin-bottom: carbon.$spacing-10;

    @include mq($until: large) {
      margin-bottom: carbon.$spacing-07;
    }
  }

  &__details {
    width: 100%;
  }
}
</style>
