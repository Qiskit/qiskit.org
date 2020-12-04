<template>
  <article class="feature-card">
    <h3 class="feature-card__title">
      {{ title }}
    </h3>
    <div class="feature-card__content">
      <div
        class="feature-card__image"
        :lazy-background="image"
      />
      <!-- TODO: HTML content should not be in strings but in components
      but lacking of a better solution given time constraints. -->
      <!-- eslint-disable vue/no-v-html -->
      <div class="feature-card__description" v-html="description" />
      <!-- eslint-enable -->
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class FeatureCard extends Vue {
  @Prop(String) image!: string
  @Prop(String) title!: string
  @Prop(String) description!: string
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.feature-card {
  width: 100%;
  display: flex;

  @include mq($until: large) {
    flex-direction: column;
  }

  &__title {
    flex: 0 0 12rem;
    @include type-style('productive-heading-02');
    padding-right: $spacing-07;
    padding-bottom: $spacing-07;

    @include mq($until: large) {
      flex: 0 0 auto;
    }
  }

  &__content {
    min-height: 11rem;
    display: flex;

    @include mq($until: medium) {
      flex-direction: column;
    }
  }

  &__image {
    flex: 0 0 14rem;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    overflow: hidden;

    @include mq($until: medium) {
      background-size: contain;
      height: 11rem;
      width: auto;
    }
  }

  &__description {
    @include type-style('body-long-01');
    padding: $spacing-05 $spacing-05 $spacing-05 $spacing-07;

    @include mq($until: medium) {
      padding: $spacing-06 0 0 0;
    }
  }
}
</style>
