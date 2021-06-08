<template>
  <header class="app-page-header-with-img">
    <div class="bx--grid">
      <div v-if="backLink" class="bx--row app-page-header-with-img__back-link">
        <AppNavBackLink v-bind="backLink" />
      </div>
      <div class="bx--row app-page-header-with-img__content">
        <main class="bx--col app-page-header-with-img__main">
          <div>
            <h1 class="app-page-header-with-img__headline">
              <slot name="title" />
            </h1>
            <div class="bx--col-lg-0 bx--col-md-0 app-page-header-with-img__image">
              <slot name="image" />
            </div>
            <div class="app-page-header-with-img__description">
              <slot name="description" />
            </div>
          </div>
          <AppCta v-if="cta" v-bind="cta" />
        </main>
        <aside class="bx--col-lg-5 bx--col-md-4 bx--col-sm-0 app-page-header-with-img__aside">
          <slot name="image" />
        </aside>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { GeneralLink } from '~/constants/appLinks'

@Component
export default class AppPageHeaderWithImage extends Vue {
  @Prop({ type: Object, required: true }) cta!: GeneralLink
  @Prop({ type: Object, required: false }) backLink!: GeneralLink
}
</script>

<style lang="scss" scoped>
.app-page-header-with-img {
  @include responsive-grid-bg-strip("/images/grid/grid-hero-learn.svg", auto, 28rem);

  &__back-link {
    height: 0;

    ::v-deep .app-nav-back-link{
      padding-left: $spacing-05;
      margin: 0;
    }
  }

  &__content {
    padding-top: $layout-06;

    @include mq($until: medium) {
      padding-top: $layout-04;
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
    margin-top: $spacing-07;
  }

  &__description {
    margin-top: $spacing-05;

    @include mq($until: x-large) {
      margin-top: $spacing-06;
    }

    @include mq($until: large) {
      margin-top: $spacing-09;
    }

    @include mq($from: large) {
      $grid-columns: 8/11; // Number of columns that the element will use at this breakpoint.

      max-width: 100% * $grid-columns;
    }
  }

  &__aside {
    @include mq($until: medium) {
      margin-top: $spacing-09;
    }
  }

  &__image {
    width: 100%;
  }
}
</style>
