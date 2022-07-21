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
        <h4 class="app-card__title">
          {{ title }}
        </h4>
        <div v-if="tags" class="app-card__tags">
          <div
            v-for="tag in Object.values(tags).flat()"
            :key="tag"
            class="app-card__custom-pill"
          >
            {{ tag }}
            <cv-tooltip
              v-if="tag == tags.tier"
              :tip="getTooltip(tag)"
              direction="bottom"
            />
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

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { CtaClickedEventProp } from '~/constants/segment'

@Component
export default class AppCard extends Vue {
  @Prop({ type: String, default: '' }) image!: string
  @Prop({ type: Boolean, required: false, default: false })
  imageContain!: boolean;

  @Prop({ type: String, default: '' }) title!: string
  @Prop({ type: [Array, Object], default: () => [] }) tags!: string[]
  @Prop({ type: String, default: '' }) to!: string
  @Prop({ type: String, default: '' }) ctaLabel!: string
  @Prop({ type: Object, required: false }) segment:
    | CtaClickedEventProp
    | undefined

  @Prop({ type: Boolean, default: false }) verticalLayout!: Boolean
  @Prop({ type: Boolean, default: false }) descriptionWholeSize!: Boolean
  @Prop({ type: Array, default: () => [] }) tooltips!: object[]

  get ctaLink () {
    return {
      url: this.to,
      label: this.ctaLabel,
      segment: this.segment
    }
  }

  getTooltip (tagName: string) {
    const tip = (this as any).tooltips.find((tip: any) => tip.name === tagName)
    return tip.description
  }
}
</script>

<style lang="scss">
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

    @include mq($until: large) {
      flex-direction: column;
    }
  }

  &__title {
    flex: 1;
  }

  &__custom-pill {
    background-color: $tag-background-color;
    color: $tag-text-color;
    margin-right: $spacing-03;
    appearance: none;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.33333;
    letter-spacing: 0.32px;
    display: inline-flex;
    min-width: 2rem;
    max-width: 100%;
    min-height: 1.5rem;
    align-items: center;
    justify-content: center;
    padding: 0.25rem 0.5rem;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    border-radius: 6.9375rem;
    cursor: default;
    vertical-align: middle;
    word-break: break-word;
  }
}

.bx--tooltip__trigger svg {
  fill: white;
  margin-left: $spacing-02;
}

.bx--tooltip__trigger:hover svg {
  fill: white;
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
