<template>
  <article class="app-introductory-content" :class="{ 'app-introductory-content_narrow': narrow }">
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
    </div>
    <div class="app-introductory-content__details">
      <slot />
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { NavLink } from '~/constants/menuLinks'

@Component
export default class AppIntroductoryContent extends Vue {
  @Prop(String) description!: string
  @Prop(Object) link!: NavLink
  @Prop({ type: Boolean, default: false }) narrow!: boolean
}
</script>

<style lang="scss" scoped>
.app-introductory-content {
  display: grid;
  column-gap: 2rem;
  grid-template-areas: 'overview main main main';
  grid-template-columns: repeat(4, 1fr);

  &_narrow {
    grid-template-areas: 'overview main';
    grid-template-columns: (4.5 * $column-size-large) 1fr;
  }

  @include mq($until: large) {
    display: block;
  }

  &__overview {
    margin-bottom: $layout-03;

    @include mq($from: large) {
      $grid-columns: 5/13; // Number of columns that the element will use at this breakpoint.

      max-width: 100% * $grid-columns;
      padding-right: $spacing-07;
    }

    @include mq($from: max-size) {
      $grid-columns: 4/13; // Number of columns that the element will use at this breakpoint.

      max-width: 100% * $grid-columns;
    }
  }

  &__description {
    margin-bottom: $layout-05;

    @include mq($until: large) {
      margin-bottom: $layout-03;
    }
  }

  &__details {
    width: 100%;
  }
}
</style>
