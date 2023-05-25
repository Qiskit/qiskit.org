<template>
  <header class="page-header-with-img">
    <div class="cds--grid">
      <div v-if="backLink" class="cds--row page-header-with-img__back-link">
        <UiNavBackLink
          :label="backLink.label"
          :segment="backLink.segment"
          :url="backLink.url"
        />
      </div>
      <div class="cds--row page-header-with-img__content">
        <h1 class="page-header-with-img__headline">
          <slot name="title" />
        </h1>
        <div class="page-header-with-img__image-wrapper">
          <slot name="image" />
        </div>
        <div class="page-header-with-img__description">
          <slot name="description" />
        </div>
        <UiCta
          v-if="cta"
          class="page-header-with-img__cta"
          :label="cta.label"
          :segment="cta.segment"
          :title="cta.title"
          :url="cta.url"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Link } from "~/types/links";

interface Props {
  backLink?: Link;
  cta: Link;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.page-header-with-img {
  &__back-link {
    height: 0;

    :deep(.nav-back-link) {
      padding-left: carbon.$spacing-05;
      margin: 0;
    }
  }

  &__content {
    display: grid;
    padding: carbon.$spacing-12 carbon.$spacing-05 0;
    gap: carbon.$spacing-05;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, auto) 52px;
    grid-template-areas:
      "headline headline img img"
      "description description img img"
      ". . img img"
      "cta . img img";

    // Set last row to 52px to not modify the height of the cta

    @include carbon.breakpoint-down(md) {
      padding-top: carbon.$spacing-09;
      grid-template-columns: 1fr;
      grid-template-areas:
        "headline"
        "img"
        "description"
        "cta";
    }
  }

  &__headline {
    grid-area: headline;
    margin-top: carbon.$spacing-07;
  }

  &__image-wrapper {
    grid-area: img;
    text-align: right;

    @include carbon.breakpoint-down(md) {
      text-align: center;
    }
  }

  &__description {
    grid-area: description;
    margin-top: carbon.$spacing-05;
  }

  &__cta {
    grid-area: cta;
  }
}

:deep(.page-header-with-img__image) {
  max-height: 25rem;
  width: auto;

  @include carbon.breakpoint-down(xlg) {
    height: auto;
    max-width: 22rem;
    width: 100%;
  }
}
</style>
