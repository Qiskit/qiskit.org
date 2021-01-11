<template>
  <header class="page-header">
    <div class="page-header__container">
      <h1 class="page-header__title">
        <slot />
      </h1>
      <div v-if="this.$slots.description" class="page-header__description">
        <slot name="description" />
      </div>
      <AppCta v-if="cta" v-bind="cta" class="page-header__cta" />
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { GeneralLink } from '~/constants/appLinks.ts'

@Component
export default class ThePageHeader extends Vue {
  @Prop({ type: Object, required: false }) cta: GeneralLink | undefined;
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.page-header {
  @include responsive-grid-bg-strip('/images/grid/grid-hero-learn.svg', auto, 28rem);
  min-height: 28rem;

  @include mq($until: large) {
    min-height: 28rem * 40 / 64;
  }

  &__container {
    @include contained();
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 28rem;

    @include mq($until: large) {
      height: 28rem * 40 / 64;
    }
  }

  &__cta {
    margin: $layout-06 0 0;
  }

  &__description {
    @include type-style('body-long-01');
    margin: $layout-05 0 0;
    max-width: 6 * $column-size-large;

    p:not(:last-child) {
      margin-bottom: $layout-03;
    }
  }

  &__title {
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
}
</style>
