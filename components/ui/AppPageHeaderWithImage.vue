<template>
  <header class="app-page-header-with-img">
    <div class="bx--grid">
      <div v-if="backLink" class="bx--row app-page-header-with-img__back-link">
        <AppNavBackLink v-bind="backLink" />
      </div>
      <div class="bx--row app-page-header-with-img__content">
        <h1 class="app-page-header-with-img__headline">
          <slot name="title" />
        </h1>
        <div class="app-page-header-with-img__image-wrapper">
          <slot name="image" />
        </div>
        <div class="app-page-header-with-img__description">
          <slot name="description" />
        </div>
        <AppCta v-if="cta" v-bind="cta" class="app-page-header-with-img__cta" />
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
    display: grid;
    padding: $spacing-12 $spacing-05 0;
    gap: $spacing-05;
    grid-template-columns: repeat(4, 1fr);
    // Set last row to 52px to not modify the height of the cta
    grid-template-rows: repeat(3, auto) 52px;
    grid-template-areas:
      "headline headline img img"
      "description description img img"
      ". . img img"
      "cta . img img"
    ;

    @include mq($until: medium) {
      padding-top: $layout-04;
      grid-template-columns: 1fr;
      grid-template-areas:
        "headline"
        "img"
        "description"
        "cta"
      ;
    }
  }

  &__headline {
    grid-area: headline;
    margin-top: $spacing-07;
  }

  &__image-wrapper {
    grid-area: img;
    text-align: right;

    @include mq($until: medium) {
      text-align: center;
    }
  }

  &__image {
    max-height: 25rem;
    width: auto;

    @include mq($until: x-large) {
      height: auto;
      max-width: 22rem;
      width: 100%;
    }
  }

  &__description {
    grid-area: description;
    margin-top: $spacing-05;
  }

  &__cta {
    grid-area: cta;
  }
}
</style>
