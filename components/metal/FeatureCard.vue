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
      <div class="feature-card__description" v-html="description" />
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop(String) image
  @Prop(String) title
  @Prop(String) description
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
    background-color: $cool-gray-90;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;

    @include mq($until: medium) {
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
