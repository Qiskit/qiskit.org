<template>
  <article
    class="card"
    :class="{
      card_vertical: verticalLayout,
      'card_description-whole-size': descriptionWholeSize,
    }"
  >
    <div
      v-if="image"
      class="card__image"
      :class="imageContain ? 'card__image_contain' : null"
      :style="{
        'background-image': `url(${image})`,
      }"
    />
    <div class="card__content">
      <header class="card__header">
        <div>
          <h4 class="card__title">
            {{ title }}
          </h4>
          <h5 v-if="subtitle">
            {{ subtitle }}
          </h5>
        </div>
        <div class="cds--row">
          <div v-if="hasTags(tags)" class="card__tags">
            <bx-tag
              v-for="tag in tags"
              :key="tag"
              class="card__tag"
              type="purple"
            >
              {{ tag }}
            </bx-tag>
          </div>
          <div v-if="hasTags(tooltipTags)" class="card__tags">
            <div
              v-for="tag in tooltipTags"
              :key="tag.label"
              class="card__custom-pill"
            >
              {{ tag.label }}
              <bx-tooltip-icon :body-text="tag.description" direction="bottom">
                <Information16 class="card__tooltip__icon" />
              </bx-tooltip-icon>
            </div>
          </div>
        </div>
      </header>
      <div class="card__body">
        <div class="card__description">
          <slot />
        </div>
        <UiCta
          v-if="to"
          class="card__cta"
          is-wider
          kind="ghost"
          :label="ctaLink.label"
          :segment="ctaLink.segment"
          :url="ctaLink.url"
        />
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/tag/tag.js";
import "@carbon/web-components/es/components/tooltip/tooltip-icon.js";
import Information16 from "@carbon/icons-vue/lib/information/16";
import { CtaClickedEventProp } from "~/types/segment";

export interface TagTooltip {
  // the short string label for inside the tag
  label: string;
  // the description for the tooltip
  description: string;
}

interface Props {
  descriptionWholeSize?: boolean;
  ctaLabel?: string;
  image?: string;
  imageContain?: boolean;
  segment?: CtaClickedEventProp | undefined;
  subtitle?: string;
  tags?: string[];
  title: string;
  to?: string;
  tooltipTags?: TagTooltip[];
  verticalLayout?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  descriptionWholeSize: false,
  ctaLabel: "",
  image: "",
  imageContain: false,
  segment: undefined,
  subtitle: "",
  tags: () => [],
  to: "",
  tooltipTags: () => [],
  verticalLayout: false,
});

const ctaLink = computed(() => ({
  url: props.to,
  label: props.ctaLabel,
  segment: props.segment,
}));

// TODO: Refactor to do a cleaner check for "tags" and "tooltip tags" (https://github.com/Qiskit/qiskit.org/pull/2935#discussion_r1088770246)
function hasTags(tags: string[] | TagTooltip[]) {
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
    flex: 0 0 14rem;
    background-color: qiskit.$background-color-light;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;

    @include carbon.breakpoint-between(md, lg) {
      flex: 0 0 13rem;
    }

    @include carbon.breakpoint-down(md) {
      height: 13rem;
      width: auto;
    }

    &_contain {
      background-color: transparent;
      background-size: contain;
    }
  }

  &__content {
    padding: carbon.$spacing-05 carbon.$spacing-07;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: carbon.$spacing-03;

    @include carbon.breakpoint-down(lg) {
      flex-direction: column;
    }

    .cds--row {
      margin-right: 0;
      margin-left: 0;
      margin-bottom: carbon.$spacing-03;
    }
  }

  &__tag {
    white-space: nowrap;
  }

  &__title {
    flex: 1;
    margin-bottom: carbon.$spacing-02;
  }

  &__tooltip {
    &__icon {
      fill: carbon.$white;
      margin-left: carbon.$spacing-02;
    }
  }
}

.card_vertical {
  flex-direction: column;

  .card {
    &__content {
      padding: carbon.$spacing-05;
    }

    &__cta {
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

bx-tag {
  background-color: qiskit.$tag-background-color;
  color: qiskit.$tag-text-color;
  margin-right: carbon.$spacing-03;
  margin-left: 0;
  min-width: 0;

  &:last-child {
    margin-right: 0;
  }
}

bx-tooltip-icon {
  --cds-inverse-02: #{carbon.$cool-gray-90};

  line-height: 0;
}
</style>

<style lang="scss">
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.card {
  &__custom-pill {
    @include carbon.type-style("label-01");

    background-color: qiskit.$tag-background-color;
    color: qiskit.$tag-text-color;
    display: inline-flex;
    min-width: 0;
    max-width: 100%;
    min-height: 1.5rem;
    align-items: center;
    justify-content: center;
    padding: carbon.$spacing-02 carbon.$spacing-03;
    margin: carbon.$spacing-02 carbon.$spacing-03 carbon.$spacing-02
      carbon.$spacing-03;
    border-radius: 6.9375rem;
    cursor: default;
    vertical-align: middle;
    word-break: break-word;
  }

  &__custom-pill:last-child {
    margin-right: 0;
  }
}
</style>
