<template>
  <article class="learn-card">
    <div class="cds--col-max-3 cds--col-lg-4 cds--col-md-3 learn-card__content">
      <div
        class="cds--aspect-ratio cds--aspect-ratio--4x3 learn-card__content__aspect-ratio"
      >
        <div
          class="cds--aspect-ratio--object learn-card__content__aspect-ratio__object"
        >
          <p class="learn-card__description">
            Gain access to a free, digital textbook to study the concepts of
            quantum computing using Qiskit.
          </p>
          <UiCta
            class="learn-card__cta"
            kind="ghost"
            :label="learnLink.label"
            :segment="learnLink.segment"
            :url="learnLink.url"
          />
        </div>
      </div>
    </div>
    <div class="cds--col-md learn-card__media">
      <nuxt-img
        class="learn-card__media__image"
        format="webp"
        sizes="sm:500px md:700 xl:1000"
        src="/images/landing-page/learn-image.jpg"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
import { Link } from "~/types/links";

const learnLink: Link = {
  url: "/learn",
  label: "Get learning",
  segment: { cta: "get-learning", location: "learn-card" },
};
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.learn-card {
  display: flex;
  flex-wrap: wrap;

  &__content {
    background-color: qiskit.$background-color-lighter;
    padding: carbon.$spacing-05;

    @include carbon.breakpoint-down(md) {
      order: 1;
    }

    @include carbon.breakpoint-up(md) {
      min-height: 12rem;
      padding-right: carbon.$spacing-07;
    }

    @include carbon.breakpoint-up(lg) {
      min-height: 16.25rem;
      padding: carbon.$spacing-07;
    }

    @include carbon.breakpoint-up(xlg) {
      min-height: 18.75rem;
    }

    @include carbon.breakpoint-up(max) {
      height: 30rem;
    }

    &__aspect-ratio {
      height: 100%;

      &__object {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
      }
    }

    // Removes aspect ratio for sm breakpoint
    @include carbon.breakpoint-down(md) {
      &__aspect-ratio {
        &::before {
          padding-top: 0;
        }

        &__object {
          position: initial;
        }
      }
    }
  }

  &__media {
    min-height: 12rem;
    overflow: hidden;
    padding: 0;
    position: relative;

    &__image {
      height: 135%;
      object-fit: cover;
      position: absolute;
      width: 100%;
    }
  }

  &__cta {
    padding: 0;
  }

  &__description {
    margin-bottom: carbon.$spacing-06;
  }
}
</style>
