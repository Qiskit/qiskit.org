<template>
  <header class="app-page-header">
    <div class="bx--grid">
      <div class="bx--row">
        <main class="bx--col app-page-header__main">
          <div>
            <h1 class="app-page-header__headline">
              <slot name="title" />
            </h1>
            <div class="app-page-header__description">
              <slot name="description" />
            </div>
          </div>
          <AppCta v-if="cta" v-bind="cta" />
        </main>
        <aside class="bx--col-lg-5 bx--col-md-4 app-page-header__aside">
          <div>
            <div class="app-page-header__card-title-wrapper">
              <div
                class="app-page-header__card-title"
                v-text="cardTitle"
              />
            </div>
            <slot name="card" />
          </div>
        </aside>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { GeneralLink } from '~/constants/appLinks'

interface Props {
  cardTitle: string
  cta: GeneralLink
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.app-page-header {
  @include responsive-grid-bg-strip("/images/grid/grid-hero-learn.svg", auto, 28rem);

  padding-top: carbon.$spacing-12;

  @include carbon.breakpoint-down(md) {
    padding-top: carbon.$spacing-09;
  }

  &__main {
    display: flex;
    flex-flow: column;
    gap: carbon.$spacing-05;
    justify-content: space-between;

    @include carbon.breakpoint-down(xlg) {
      gap: carbon.$spacing-06;
    }

    @include carbon.breakpoint-down(lg) {
      gap: carbon.$spacing-09;
    }
  }

  &__headline {
    margin-top: carbon.$spacing-07;
  }

  &__description {
    margin-top: carbon.$spacing-05;

    @include carbon.breakpoint-down(xlg) {
      margin-top: carbon.$spacing-06;
    }

    @include carbon.breakpoint-down(lg) {
      margin-top: carbon.$spacing-09;
    }

    @include carbon.breakpoint-up(lg) {
      $grid-columns: math.div(6, 11); // Number of columns that the element will use at this breakpoint.

      max-width: 100% * $grid-columns;
    }
  }

  &__aside {
    @include carbon.breakpoint-down(md) {
      margin-top: carbon.$spacing-09;
    }
  }

  &__card-title {
    border-bottom: 4px solid qiskit.$border-color-tertiary;
    display: inline;
    padding-bottom: carbon.$spacing-02;
    padding-right: carbon.$spacing-03;

    &-wrapper {
      margin-bottom: carbon.$spacing-06;
    }
  }
}
</style>
