<template>
  <header
    class="app-page-header"
    :class="{ 'app-page-header_bg-grid': bgGrid }"
  >
    <div
      class="app-page-header__container"
      :class="{
        'app-page-header__container_has-aside': hasAside,
        'app-page-header__container_fixed-height': fixedHeight,
      }"
    >
      <div class="app-page-header__top-link">
        <!-- TODO: Implement "top link" -->
      </div>

      <div
        class="app-page-header__main"
        :class="{ 'app-page-header__main_fixed-height': fixedHeight }"
      >
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

      <div v-if="hasAside" class="app-page-header__aside">
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
export default class AppPageHeader extends Vue {
  @Prop({ type: Boolean, required: false, default: false }) bgGrid!: Boolean
  @Prop({ type: Object, required: false, default: null }) cta!: GeneralLink
  @Prop({ type: Boolean, required: false, default: false }) fixedHeight!: Boolean

  get hasAside () {
    return !!this.$slots.aside
  }
}
</script>

<style lang="scss" scoped>
@import "~carbon-components/scss/globals/scss/typography";
@import "~/assets/scss/blocks/copy.scss";

$top-link-height: 4.375rem;
$top-link-height-large: 3.75rem;

.app-page-header {
  &__container {
    @include contained();
    display: grid;
    column-gap: $spacing-07;
    grid-template-columns: 1fr;
    grid-template-rows: $top-link-height auto;
    grid-template-areas:
      "top-link"
      "main";

    @include mq($until: large) {
      grid-template-rows: $top-link-height-large auto;
    }

    &_has-aside {
      grid-template-columns: 1fr auto;
      grid-template-areas:
        "top-link top-link"
        "main aside";

      @include mq($until: large) {
        grid-template-columns: repeat(2, 1fr);
      }

      @include mq($until: medium) {
        grid-template-columns: 1fr;
        grid-template-areas:
          'top-link'
          'main'
          'aside';
      }
    }

    &_fixed-height {
      align-items: center;
      height: 28rem;

      @include mq($until: large) {
        height: 17.5rem;
      }
    }
  }

  &__top-link {
    align-items: center;
    display: flex;
    grid-area: top-link;
  }

  &__main {
    display: flex;
    flex-flow: column;
    gap: $spacing-05;
    grid-area: main;
    justify-content: space-between;

    @include mq($until: x-large) {
      gap: $spacing-06;
    }

    @include mq($until: large) {
      gap: $spacing-09;
    }

    &_fixed-height {
      margin-bottom: $top-link-height;

      @include mq($until: large) {
        margin-bottom: $top-link-height-large;
      }

      @include mq($until: medium) {
        margin-bottom: initial;
      }
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
    grid-area: aside;
    justify-content: flex-end;

    @include mq($until: medium) {
      margin-top: $spacing-09;
    }
  }

  &_bg-grid {
    @include responsive-grid-bg-strip("/images/grid/grid-hero-learn.svg", auto, 28rem);
  }
}
</style>
