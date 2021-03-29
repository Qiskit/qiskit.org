<template>
  <header class="app-page-header">
    <div class="app-page-header__container">
      <div class="app-page-header__main">
        <div>
          <h1 class="app-page-header__headline">
            <slot />
          </h1>
          <div class="app-page-header__description">
            <slot name="description" />
          </div>
        </div>
        <AppCta v-if="cta" v-bind="cta" />
      </div>
      <div class="app-page-header__aside">
        <slot name="aside" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { GeneralLink } from '~/constants/appLinks'

@Component
export default class AppPageHeaderWithCard extends Vue {
  @Prop({ type: Object, required: false, default: null }) cta!: GeneralLink
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/blocks/copy.scss";

.app-page-header {
  @include responsive-grid-bg-strip("/images/grid/grid-hero-learn.svg", auto, 28rem);

  &__container {
    @include contained();
    display: grid;
    column-gap: $spacing-07;
    grid-template-columns: 1fr auto;

    @include mq($until: large) {
      grid-template-columns: 1fr 1fr;
    }

    @include mq($until: medium) {
      grid-template-columns: 1fr;
    }
  }

  &__main {
    display: flex;
    flex-flow: column;
    gap: $spacing-05;
    justify-content: space-between;

    @include mq($until: x-large) {
      gap: $spacing-06;
    }

    @include mq($until: large) {
      gap: $spacing-09;
    }
  }

  &__headline {
    @include type-style('expressive-heading-05', true);
    color: $white-text-01;
    max-width: 10 * $column-size-large;

    @include mq($from: medium, $until: large) {
      max-width: 6 * $column-size-medium;
    }

    @include mq($until: medium) {
      max-width: 5 * $column-size-medium;
    }
  }

  &__description {
    margin-top: $spacing-05;

    @include mq($until: x-large) {
      margin-top: $spacing-06;
    }

    @include mq($until: large) {
      margin-top: $spacing-09;
    }
  }

  &__aside {
    display: flex;
    justify-content: flex-end;

    @include mq($until: medium) {
      margin-top: $spacing-09;
    }
  }
}
</style>
