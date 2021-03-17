<template>
  <article
    class="app-card"
    :class="{'app-card_vertical': verticalLayout}"
  >
    <div
      class="app-card__image"
      :class="imageContain ? 'app-card__image_contain' : null"
      :lazy-background="image"
    />
    <div class="app-card__content">
      <header class="app-card__header">
        <h3 class="app-card__title">
          {{ title }}
        </h3>
        <div v-if="hasTags" class="app-card__tags">
          <cv-tag
            v-for="tag in tags"
            :key="tag"
            :label="tag"
            kind="purple"
          />
        </div>
      </header>
      <div class="app-card__description">
        <slot />
      </div>
      <AppCta
        v-if="to"
        class="app-card__cta"
        v-bind="ctaLink"
        kind="ghost"
      />
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { SegmentData } from '~/constants/appLinks'

@Component
export default class AppCard extends Vue {
  @Prop({ type: String, default: '' }) image!: string
  @Prop({ type: Boolean, required: false, default: false }) imageContain!: boolean
  @Prop({ type: String, default: '' }) title!: string
  @Prop({ type: Array, default: () => [] }) tags!: string[]
  @Prop({ type: String, default: '' }) to!: string
  @Prop({ type: String, default: '' }) ctaLabel!: string
  @Prop({ type: Object, required: false }) segment: SegmentData | undefined
  @Prop({ type: Boolean, default: false }) verticalLayout!: Boolean

  get ctaLink () {
    return {
      url: this.to,
      label: this.ctaLabel,
      segment: this.segment
    }
  }

  get hasTags () {
    return Array.isArray(this.tags) && this.tags.length > 0
  }
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.app-card {
  min-height: 13rem;
  width: 100%;
  background-color: $cool-gray-10;
  color: $cool-gray-80;
  display: flex;

  @include mq($until: medium) {
    height: auto;
    flex-direction: column;
  }

  &__image {
    flex: 0 0 14rem;
    background-color: $cool-gray-20;
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
    padding: $spacing-05 $spacing-05 $spacing-05 $spacing-07;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
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
    @include type-style('productive-heading-02');
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    flex: 0;
    justify-content: flex-end;
    margin-left: $spacing-06;

    @include mq($until: large) {
      justify-content: flex-start;
      margin-top: $spacing-03;
      margin-left: 0;
    }

    .bx--tag--purple {
      background-color: $purple-70;
      color: $white;
    }

    .bx--tag:first-child {
      margin-left: 0;
    }
  }

  &__description {
    @include type-style('body-long-01');
    margin-top: $layout-02;
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
</style>
