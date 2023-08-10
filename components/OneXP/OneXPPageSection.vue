<template>
  <section class="page-section">
    <div class="one-xp">
      <div class="one-xp__container cds--grid">
        <div class="one-xp__copy-section">
          <h2 class="one-xp__copy-section__title">
            <slot name="title" />
          </h2>
          <div class="one-xp__copy-section__features">
            <div
              v-for="feature in features"
              :key="feature.title"
              class="one-xp__copy-section__features__feature"
            >
              <h3 v-if="feature.title" v-text="feature.title" />
              <p
                v-for="description in feature.descriptionParagraphs"
                :key="description"
                class="one-xp__copy-section__features__feature__description"
                v-text="description"
              />
              <div class="one-xp__copy-section__features__feature__ctas">
                <UiCta
                  kind="one-xp"
                  :label="feature.cta.label"
                  :segment="feature.cta.segment"
                  :url="feature.cta.url"
                />
                <UiCta
                  v-if="feature.secondaryCta"
                  kind="ghost"
                  :label="feature.secondaryCta.label"
                  :segment="feature.secondaryCta.segment"
                  :url="feature.secondaryCta.url"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="one-xp__image-section">
          <nuxt-img
            :alt="imgAlt"
            class="one-xp__image-section__image"
            format="webp"
            sizes="sm:800px"
            :src="imgSrc"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CtaClickedEventProp } from "~/types/segment";

interface FeatureCta {
  label: string;
  segment: CtaClickedEventProp;
  url: string;
}

interface Feature {
  title?: string;
  descriptionParagraphs: string[];
  cta: FeatureCta;
  secondaryCta?: FeatureCta;
}
interface Props {
  features: Feature[];
  imgAlt: string;
  imgSrc: string;
}

defineProps<Props>();
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
    flex: auto;

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
          max-width: 28rem;
        }

        &__ctas {
          display: flex;
          gap: carbon.$spacing-06;
        }
      }
    }
  }

  &__image-section {
    align-items: center;
    display: grid;
    flex: 0;

    @include carbon.breakpoint-up(lg) {
      justify-content: center;
    }

    @include carbon.breakpoint-down(lg) {
      margin-left: -0.5rem;
      margin-right: -0.5rem;
    }

    &__image {
      max-width: 30rem;
      width: 100%;

      @include carbon.breakpoint-up(lg) {
        width: 22rem;
      }

      @include carbon.breakpoint-up(xlg) {
        max-width: initial;
        width: 30rem;
      }
    }
  }
}
</style>
