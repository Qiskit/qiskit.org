<template>
  <header class="page-header">
    <div class="page-header__container">
      <div class="page-header__main">
        <h1 class="page-header__title">
          <slot />
        </h1>
        <div v-if="this.$slots.description" class="page-header__description">
          <slot name="description" />
        </div>
        <AppCta v-if="cta" v-bind="cta" class="page-header__cta" />
      </div>
      <div v-if="this.$slots.aside" class="page-header__aside">
        <slot name="aside" />
      </div>
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

  &__aside {
    align-self: start;
    width: 5 * $column-size-large;
  }

  &__container {
    @include contained();
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-height: 28rem;

    @include mq($until: large) {
      min-height: 28rem * 40 / 64;
    }

    @include mq($until: medium) {
      align-items: initial;
      flex-direction: column;
      justify-content: center;
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

  &__main {
    max-width: 10 * $column-size-large;

    @include mq($from: medium, $until: large) {
      max-width: 6 * $column-size-medium;
    }

    @include mq($until: medium) {
      max-width: 5 * $column-size-medium;
    }
  }

  &__title {
    @include type-style('expressive-heading-05', true);
    color: $white-text-01;
  }
}
</style>
