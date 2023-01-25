<template>
  <article
    class="app-card"
    :class="{
      'app-card_vertical': verticalLayout,
      'app-card_description-whole-size': descriptionWholeSize,
    }"
  >
    <div
      v-if="image"
      class="app-card__image"
      :class="imageContain ? 'app-card__image_contain' : null"
      :lazy-background="image"
    />
    <div class="app-card__content">
      <header class="app-card__header">
        <div>
          <h4 class="app-card__title">
            {{ title }}
          </h4>
          <h5 v-if="subtitle">
            {{ subtitle }}
          </h5>
        </div>
        <div class="bx--row">
          <div v-if="hasTags(tags)" class="app-card__tags">
            <cv-tag v-for="tag in tags" :key="tag" :label="tag" kind="purple" />
          </div>
          <div v-if="hasTags(tooltipTags)" class="app-card__tags">
            <div
              v-for="tag in tooltipTags"
              :key="tag.index"
              class="app-card__custom-pill"
            >
              {{ tag.label }}
              <cv-tooltip
                :tip="tag.message"
                direction="bottom"
              />
            </div>
          </div>
        </div>
      </header>
      <div class="app-card__body">
        <div class="app-card__description">
          <slot />
        </div>
        <AppCta
          v-if="to"
          class="app-card__cta"
          v-bind="ctaLink"
          is-wider
          kind="ghost"
        />
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { CtaClickedEventProp } from '~/constants/segment'

export interface TagTooltip {
  // the short string label for inside the tag
  label: string,
  // the description for the tooltip
  description: string,
}

interface Props {
  descriptionWholeSize?: boolean
  ctaLabel?: string
  image?: string
  imageContain?: boolean
  segment?: CtaClickedEventProp | undefined
  subtitle?: string
  tags?: string[]
  title: string
  to?: string
  tooltipTags?: TagTooltip[]
  verticalLayout?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  descriptionWholeSize: false,
  ctaLabel: '',
  image: '',
  imageContain: false,
  segment: undefined,
  subtitle: '',
  tags: () => [],
  to: '',
  tooltipTags: () => [],
  verticalLayout: false,
})

const ctaLink = computed(() => ({
  url: props.to,
  label: props.ctaLabel,
  segment: props.segment,
}))

function hasTags (tags: string[] | TagTooltip[]) {
  return Array.isArray(tags) && tags.length > 0
}
</script>

<style lang="scss" scoped>
.app-card {
  min-height: 13rem;
  width: 100%;
  background-color: $background-color-lighter;
  display: flex;

  @include mq($until: medium) {
    height: auto;
    flex-direction: column;
  }

  &__image {
    flex: 0 0 14rem;
    background-color: $background-color-light;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;

    @include mq($from: medium, $until: large) {
      flex: 0 0 13rem;
    }

    @include mq($until: medium) {
      height: 13rem;
      width: auto;
    }

    &_contain {
      background-color: transparent;
      background-size: contain;
    }
  }

  &__content {
    padding: $spacing-05 $spacing-07;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: $spacing-03;

    @include mq($until: large) {
      flex-direction: column;
    }

    .bx--row {
      margin-right: 0;
      margin-left: 0;
      margin-bottom: $spacing-03;
    }
  }

  &__title {
    flex: 1;
    margin-bottom: $spacing-02;
  }
}

.app-card_vertical {
  flex-direction: column;

  .app-card {
    &__content {
      padding: $spacing-05;
    }

    &__cta {
      padding-bottom: 0;
    }

    &__description {
      margin-bottom: $spacing-03;
      margin-top: $spacing-03;
    }

    &__image {
      min-height: 4 * $column-size-large;

      @include mq($until: large) {
        min-height: 5 * $column-size-large;
      }

      @include mq($from: small, $until: medium) {
        min-height: 6 * $column-size-large;
      }
    }
  }
}

.app-card_description-whole-size {
  .app-card {
    &__header {
      min-height: $spacing-09;
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

<style lang="scss">
@import '~carbon-components/scss/globals/scss/typography';

.bx--tooltip__trigger.bx--tooltip--bottom.bx--tooltip--align-center
.bx--assistive-text {
  width: 10rem;
}

.app-card {
  .bx--tag--purple {
    background-color: $tag-background-color;
    color: $tag-text-color;
    margin-right: $spacing-03;
    margin-left: 0;
    min-width: 0;
  }

  .bx--tag--purple:last-child {
    margin-right: 0;
  }

  &__custom-pill {
    @include type-style('caption-01');

    background-color: $tag-background-color;
    color: $tag-text-color;
    display: inline-flex;
    min-width: 0;
    max-width: 100%;
    min-height: 1.5rem;
    align-items: center;
    justify-content: center;
    padding: $spacing-02 $spacing-03;
    margin-top: $spacing-02;
    margin-bottom: $spacing-02;
    margin-right: $spacing-03;
    margin-left: $spacing-03;
    border-radius: 6.9375rem;
    cursor: default;
    vertical-align: middle;
    word-break: break-word;

    .bx--tooltip__trigger svg {
      fill: white;
      margin-left: $spacing-02;

      :hover svg {
        fill: white;
      }
    }
  }

  &__custom-pill:last-child {
    margin-right: 0;
  }
}
</style>
