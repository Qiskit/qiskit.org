<template>
  <header class="page-header">
    <div class="cds--grid">
      <div class="cds--row">
        <main class="cds--col page-header__main">
          <div>
            <h1 class="page-header__headline">
              <slot name="title" />
            </h1>
            <div class="page-header__description">
              <slot name="description" />
            </div>
          </div>
          <UiCta
            v-if="cta"
            :label="cta.label"
            :segment="cta.segment"
            :url="cta.url"
          />
        </main>
        <aside class="cds--col-lg-5 cds--col-md-4 page-header__aside">
          <div>
            <div class="page-header__card-title-wrapper">
              <div class="page-header__card-title" v-text="cardTitle" />
            </div>
            <slot name="card" />
          </div>
        </aside>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Link } from "~/types/links";

interface Props {
  cardTitle: string;
  cta?: Link;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
@use "sass:math";
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.page-header {
  @include qiskit.responsive-grid-bg-strip(
    "/images/grid/grid-hero-learn.svg",
    auto,
    28rem
  );

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
      $grid-columns: math.div(
        6,
        11
      ); // Number of columns that the element will use at this breakpoint.

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
