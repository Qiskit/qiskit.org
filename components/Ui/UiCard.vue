<template>
  <article
    class="card"
    :class="{
      card_vertical: verticalLayout,
      'card_description-whole-size': descriptionWholeSize,
    }"
  >
    <div v-if="image" class="card__image-container">
      <!-- TODO: investigate why this particular img is not being populated in past Events tab-->
      <!-- <nuxt-img
        class="card__image"
        :class="imageContain ? 'card__image_contain' : null"
        format="webp"
        loading="lazy"
        sizes="sm:300px md:650px"
        :src="image"
      /> -->
      <img
        class="card__image"
        :alt="altText"
        :class="imageContain ? 'card__image_contain' : null"
        :src="image"
      />
    </div>
    <div class="card__content">
      <header class="card__header">
        <div>
          <h4 class="card__title">
            {{ title }}
          </h4>
          <h5 v-if="subtitle">
            {{ subtitle }}
          </h5>
          <div class="card__tags">
            <template v-if="hasTags(tags)">
              <bx-tag v-if="primaryTag" class="card__tag" type="purple">
                {{ primaryTag }}
              </bx-tag>
              <bx-tag
                v-for="tag in tags"
                :key="tag"
                class="card__tag"
                type="purple"
              >
                {{ tag }}
              </bx-tag>
            </template>
          </div>
        </div>
      </header>
      <div class="card__body">
        <div class="card__description">
          <slot />
        </div>
        <div class="card__ctas">
          <UiCta
            v-if="to"
            is-wider
            kind="ghost"
            :label="ctaLink.label"
            :segment="ctaLink.segment"
            :url="ctaLink.url"
          />
          <UiCta
            v-if="secondaryCta"
            is-wider
            kind="ghost"
            :label="secondaryCta.label"
            :segment="secondaryCta.segment"
            :url="secondaryCta.url"
          />
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { TextLink } from "~/types/links";
import { CtaClickedEventProp } from "~/types/segment";

interface Props {
  descriptionWholeSize?: boolean;
  ctaLabel?: string;
  image?: string;
  imageContain?: boolean;
  altText?: string;
  segment?: CtaClickedEventProp | undefined;
  subtitle?: string;
  tags?: string[];
  title: string;
  to?: string;
  secondaryCta?: TextLink | null;
  primaryTag?: string;
  verticalLayout?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  descriptionWholeSize: false,
  ctaLabel: "",
  image: "",
  imageContain: false,
  altText: "No description available",
  segment: undefined,
  subtitle: "",
  tags: () => [],
  to: "",
  secondaryCta: undefined,
  primaryTag: undefined,
  verticalLayout: false,
});

const ctaLink = computed(() => ({
  url: props.to,
  label: props.ctaLabel,
  segment: props.segment,
}));

// TODO: Refactor to do a cleaner check for "tags" and "tooltip tags" (https://github.com/Qiskit/qiskit.org/pull/2935#discussion_r1088770246)
function hasTags(tags: string[]) {
  return Array.isArray(tags) && tags.length > 0;
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.card {
  min-height: 13rem;
  width: 100%;
  background-color: qiskit.$background-color-lighter;
  display: flex;

  @include carbon.breakpoint-down(md) {
    height: auto;
    flex-direction: column;
  }

  &__image {
    background-color: qiskit.$background-color-light;
    height: 100%;
    object-fit: cover;
    position: absolute;
    width: 100%;

    &_contain {
      background-color: transparent;
      object-fit: contain;
    }
  }

  &__image-container {
    flex: 0 0 14rem;
    overflow: hidden;
    position: relative;

    @include carbon.breakpoint-between(md, lg) {
      flex: 0 0 13rem;
    }

    @include carbon.breakpoint-down(md) {
      flex: 0 0 24rem;
    }
  }

  &__body {
    overflow-wrap: break-word;
  }

  &__content {
    padding: carbon.$spacing-05 carbon.$spacing-07;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__ctas {
    display: flex;
    justify-content: flex-start;
    padding-bottom: 0;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: carbon.$spacing-07;

    @include carbon.breakpoint-down(lg) {
      flex-direction: column;
    }
  }

  &__tag {
    margin-right: carbon.$spacing-03;

    &:first-child {
      margin-left: 0;
    }
  }

  &__tags {
    display: flex;
    margin-right: carbon.$spacing-03;
  }

  &__title {
    flex: 1;
    margin-bottom: carbon.$spacing-03;
  }
}

.card_vertical {
  flex-direction: column;

  .card {
    &__content {
      padding: carbon.$spacing-05;
    }

    &__ctas {
      display: flex;
      padding-bottom: 0;
    }

    &__description {
      margin-bottom: carbon.$spacing-03;
      margin-top: carbon.$spacing-03;
    }

    &__image {
      min-height: 4 * qiskit.$column-size-large;

      @include carbon.breakpoint-down(lg) {
        min-height: 5 * qiskit.$column-size-large;
      }

      @include carbon.breakpoint-between(sm, md) {
        min-height: 6 * qiskit.$column-size-large;
      }
    }
  }
}

.card_description-whole-size {
  .card {
    &__header {
      min-height: carbon.$spacing-09;
    }

    &__body {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
    }
  }
}
</style>
