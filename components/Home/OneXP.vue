<template>
  <section class="page-section">
    <div class="one-xp">
      <div class="one-xp__container cds--grid">
        <div class="one-xp__copy-section">
          <h2 class="one-xp__copy-section__title">
            Qiskit is getting a new documentation<br />and learning experience →
          </h2>
          <div class="one-xp__copy-section__features">
            <div
              v-for="feature in features"
              :key="feature.title"
              class="one-xp__copy-section__features__feature"
            >
              <h3 v-text="feature.title" />
              <p
                class="one-xp__copy-section__features__feature__description"
                v-text="feature.description"
              />
              <UiCta
                kind="one-xp"
                :label="feature.cta.label"
                :segment="feature.cta.segment"
                :url="feature.cta.url"
              />
            </div>
          </div>
        </div>
        <div class="one-xp__image-section">
          <nuxt-img
            alt="Screenshot of the new Qiskit documentation"
            class="one-xp__image-section__image"
            format="webp"
            sizes="sm:800px"
            src="/images/one-xp/documentation-screenshot.png"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CtaClickedEventProp } from "~/types/segment";

interface Feature {
  title: string;
  description: string;
  cta: {
    label: string;
    segment: CtaClickedEventProp;
    url: string;
  };
}

const features: Feature[] = [
  {
    title: "Documentation",
    description:
      "We are reorganizing Qiskit documentation on IBM Quantum to better support your research and development workflows.",
    cta: {
      label: "Check out Documentation",
      segment: {
        cta: "go-to-documentation",
        location: "one-xp-banner",
      },
      url: "https://example.com",
    },
  },
  {
    title: "Learning",
    description:
      "We are building a new learning application with courses and tutorials to help you learn the basics and start experimenting with Qiskit.",
    cta: {
      label: "Check out Learning",
      segment: {
        cta: "go-to-learning",
        location: "one-xp-banner",
      },
      url: "https://example.com",
    },
  },
];
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.one-xp {
  background-color: carbon.$cool-gray-10;

  &__container {
    display: flex;
    flex-direction: column;
    gap: carbon.$spacing-08;
    padding-bottom: carbon.$spacing-09;
    padding-top: carbon.$spacing-09;

    @include carbon.breakpoint-up(md) {
      gap: carbon.$spacing-09;
    }

    @include carbon.breakpoint-up(lg) {
      flex-direction: row;
    }

    @include carbon.breakpoint-up(xlg) {
      gap: carbon.$spacing-12;
    }
  }

  &__copy-section {
    &__title {
      margin-bottom: carbon.$spacing-07;
    }

    &__features {
      display: flex;
      flex-direction: column;
      gap: carbon.$spacing-08;

      @include carbon.breakpoint-up(md) {
        flex-direction: row;
        gap: carbon.$spacing-10;
      }

      &__feature {
        flex: 1;

        &__description {
          margin-bottom: carbon.$spacing-06;
        }
      }
    }
  }

  &__image-section {
    align-items: center;
    display: grid;
    justify-content: center;

    @include carbon.breakpoint-down(lg) {
      margin-left: -2rem;
      margin-right: -2rem;
    }

    @include carbon.breakpoint-down(md) {
      margin-left: -1rem;
      margin-right: -1rem;
    }

    &__image {
      max-width: 30rem;
      width: 100%;

      @include carbon.breakpoint-up(lg) {
        width: 22rem;
      }

      @include carbon.breakpoint-up(xlg) {
        max-width: initial;
        width: 36rem;
      }
    }
  }
}
</style>
