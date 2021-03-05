<template>
  <header
    class="app-page-header"
    :class="{ 'app-page-header_bg-grid': bgGrid }"
  >
    <div class="app-page-header__container">
      <div class="app-page-header__top-link">
        <!-- TODO: Implement "top link" -->
      </div>

      <div class="app-page-header__main">
        <div>
          <AppPageHeaderTitle>
            <slot name="headline" />
          </AppPageHeaderTitle>
          <div class="app-page-header__description">
            <slot name="description" />
          </div>
        </div>
        <AppCta v-bind="cta" />
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
export default class AppPageHeader extends Vue {
  @Prop({ default: false, required: false, type: Boolean }) bgGrid!: Boolean
  @Prop({ required: true, type: Object }) cta!: GeneralLink
}
</script>

<style lang="scss" scoped>
@import "~carbon-components/scss/globals/scss/typography";
@import "~/assets/scss/blocks/copy.scss";

.app-page-header {
  &__container {
    @include contained();
    display: grid;
    column-gap: $spacing-07;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 70px auto;
    grid-template-areas:
      "top-link top-link"
      "main aside";
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
  }

  &__description {
    @include type-style("body-long-01");
    margin-top: $spacing-05;

    @include mq($until: x-large) {
      margin-top: $spacing-06;
    }
  }

  &__aside {
    grid-area: aside;
  }

  &_bg-grid {
    @include responsive-grid-bg-strip("/images/grid/grid-hero-learn.svg", auto, 28rem);
  }
}
</style>
