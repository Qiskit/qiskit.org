<template>
  <header class="seminar-series-header">
    <div class="seminar-series-header__container">
      <div class="seminar-series-header__main">
        <div>
          <h1 class="seminar-series-header__title">
            <slot />
          </h1>
          <div class="seminar-series-header__description">
            <slot name="description" />
          </div>
        </div>
        <AppCta v-bind="cta" class="seminar-series-header__cta" />
      </div>
      <div v-if="this.$slots.aside" class="seminar-series-header__aside">
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
export default class SeminarSeriesHeader extends Vue {
  @Prop({ type: Object, required: true }) cta!: GeneralLink;
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.seminar-series-header {
  @include responsive-grid-bg-strip('/images/grid/grid-hero-learn.svg', auto, 28rem);

  &__container {
    @include contained();
    display: grid;
    column-gap: $spacing-07;
    grid-template-columns: 3fr 4fr 3fr;
    grid-template-areas: 'main main aside';
    row-gap: $spacing-07;

    @include mq($until: large) {
      grid-template-columns: 1fr 1fr;
      grid-template-areas: 'main aside';
    }

    @include mq($until: medium) {
      grid-template-columns: 1fr;
      grid-template-areas:
        'main'
        'aside';
    }
  }

  &__aside {
    grid-area: aside;
  }

  &__cta {
    margin: 0 0 $layout-02;

    @include mq($until: medium) {
      margin-top: $layout-03;
    }
  }

  &__description {
    @include type-style('body-long-01');
    margin: $layout-05 0 0;
    max-width: 6 * $column-size-large;

    p:not(:last-child) {
      margin-bottom: $layout-03;
    }

    @include mq($until: medium) {
      margin-top: $layout-03;
    }
  }

  &__main {
    display: flex;
    flex-flow: column;
    grid-area: main;
    justify-content: space-between;
    margin-top: $spacing-07;
  }

  &__title {
    @include type-style('expressive-heading-05', true);
    color: $white-text-01;
  }
}
</style>
