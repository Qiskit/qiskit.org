<template>
  <header class="layout-lead-space-with-card">
    <div class="cds--grid">
      <div class="cds--row">
        <div class="cds--col layout-lead-space-with-card__hero">
          <div>
            <h1 class="layout-lead-space-with-card__headline">
              <slot name="title" />
            </h1>
            <div class="layout-lead-space-with-card__description">
              <slot name="description" />
            </div>
          </div>
          <UiCta
            v-if="cta"
            :label="cta.label"
            :segment="cta.segment"
            :url="cta.url"
          />
        </div>
        <aside
          class="cds--col-lg-5 cds--col-md-4 layout-lead-space-with-card__aside"
        >
          <div>
            <div class="layout-lead-space-with-card__card-title-wrapper">
              <div
                class="layout-lead-space-with-card__card-title"
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
import { TextLink } from "~/types/links";

interface Props {
  cardTitle: string;
  cta?: TextLink;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
@use "sass:math";
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.layout-lead-space-with-card {
  @include qiskit.responsive-grid-bg-strip(
    "/images/grid/grid-hero-learn.svg",
    auto,
    28rem
  );

  padding-top: carbon.$spacing-12;

  @include carbon.breakpoint-down(md) {
    padding-top: carbon.$spacing-09;
  }

  &__hero {
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
