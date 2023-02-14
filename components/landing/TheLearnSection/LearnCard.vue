<template>
  <article class="learn-card">
    <div class="bx--col-max-3 bx--col-lg-4 bx--col-md-3 learn-card__content">
      <div class="bx--aspect-ratio bx--aspect-ratio--4x3 learn-card__content__aspect-ratio">
        <div class="bx--aspect-ratio--object learn-card__content__aspect-ratio__object">
          <p class="learn-card__description">
            Gain access to a free, digital textbook to study the concepts of quantum
            computing using Qiskit.
          </p>
          <AppCta
            class="learn-card__cta"
            kind="ghost"
            v-bind="learnLink"
          />
        </div>
      </div>
    </div>
    <div
      class="bx--col-md learn-card__media"
      lazy-background="/images/landing-page/learn-image.jpg"
    />
  </article>
</template>

<script setup lang="ts">
import { GeneralLink } from '~/constants/appLinks'

const learnLink: GeneralLink = {
  url: '/learn',
  label: 'Get learning',
  segment: { cta: 'get-learning', location: 'learn-card' }
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/variables.scss" as qiskit;

.learn-card {
  display: flex;
  flex-wrap: wrap;

  &__content {
    background-color: qiskit.$background-color-lighter;
    padding: carbon.$spacing-05;

    @include mq($until: medium) {
      order: 1;
    }

    @include mq($from: medium) {
      min-height: 12rem;
      padding-right: carbon.$spacing-07;
    }

    @include mq($from: large) {
      min-height: 16.25rem;
      padding: carbon.$spacing-07;
    }

    @include mq($from: x-large) {
      min-height: 18.75rem;
    }

    @include mq($from: max-size) {
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
    @include mq($until: medium) {
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
    background-position: center 25%;
    background-size: cover;
    flex: 1;
    min-height: 12rem;
  }

  &__cta {
    padding: 0;
  }

  &__description {
    margin-bottom: carbon.$spacing-06;
  }
}
</style>
