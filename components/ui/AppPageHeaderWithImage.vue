<template>
  <header class="app-page-header-with-img">
    <div class="bx--grid">
      <div class="bx--row">
        <main class="bx--col app-page-header-with-img__main">
          <div>
            <h1 class="app-page-header-with-img__headline">
              <slot name="title" />
            </h1>
            <div class="app-page-header-with-img__description">
              <slot name="description" />
            </div>
          </div>
          <AppCta v-if="cta" v-bind="cta" />
        </main>
        <aside class="bx--col-lg-5 bx--col-md-4 app-page-header-with-img__aside">
          <img
            class="app-page-header-with-img__aside-image"
            :src="imgLink"
          >
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
  @Prop({ type: String, required: true }) cardTitle!: string
  @Prop({ type: Object, required: true }) cta!: GeneralLink
  @Prop({ type: Object, required: true }) imgLink!: string
}
</script>

<style lang="scss" scoped>
.app-page-header-with-img {
  @include responsive-grid-bg-strip("/images/grid/grid-hero-learn.svg", auto, 28rem);

  padding-top: $layout-06;

  @include mq($until: medium) {
    padding-top: $layout-04;
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

    @include mq($from: large) {
      $grid-columns: 6/11; // Number of columns that the element will use at this breakpoint.

      max-width: 100% * $grid-columns;
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
  }

  &__aside {
    @include mq($until: medium) {
      margin-top: $spacing-09;
    }

    &-image {
      width: 100%;
    }
  }
}
</style>
