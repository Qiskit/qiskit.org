<template>
  <section class="page-section">
    <div class="one-xp">
      <div class="one-xp__container cds--grid">
        <div class="one-xp__copy-section">
          <h2 class="one-xp__copy-section__title">
            Qiskit is getting a new documentation<br />and learning experience!
          </h2>
          <div class="one-xp__copy-section__features">
            <div
              v-for="feature in features"
              :key="feature.title"
              class="one-xp__copy-section__features__feature"
            >
              <h3 v-text="feature.title" />
              <p v-text="feature.description" />
              <UiCta
                :label="feature.cta.label"
                :segment="feature.cta.segment"
                :url="feature.cta.url"
              />
            </div>
          </div>
        </div>
        <div class="one-xp__image-section">
          <nuxt-img
            alt="Laptop showing the Qiskit documentation"
            class="one-xp__image-section__image"
            format="webp"
            sizes="sm:800px"
            src="/images/one-xp/laptop-with-documentation.png"
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
      "The new documentation experience on IBM Quantum organizes content to make it easier to use Qiskit with IBM Quantum hardware.",
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
      "We’ve built a new learning experience and will be migrating content from the Qiskit Textbook to the new system in the coming months.",
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
    gap: carbon.$spacing-12;
  }

  &__copy-section {
    padding-bottom: carbon.$spacing-10;
    padding-top: carbon.$spacing-10;

    &__title {
      margin-bottom: carbon.$spacing-10;
    }

    &__features {
      display: flex;
      gap: carbon.$spacing-10;

      &__feature {
        flex: 1;
      }
    }
  }

  &__image-section {
    align-items: center;
    background-color: #fafafa;
    display: grid;

    &__image {
      width: 35rem;
    }
  }
}
</style>
