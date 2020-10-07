<template>
  <article class="feature-card">
    <h3 class="feature-card__title">
      {{ title }}
    </h3>
    <div
      class="feature-card__image"
      :lazy-background="image"
    />
    <div class="feature-card__description">
      {{ description }}
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
  min-height: 13rem;
  width: 100%;
  display: flex;

  @include mq($until: medium) {
    height: auto;
    flex-direction: column;
  }

  &__image {
    flex: 0 0 14rem;
    background-color: $cool-gray-100;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    overflow: hidden;

    @include mq($from: medium, $until: large) {
      flex: 0 0 13rem;
    }

    @include mq($until: medium) {
      height: 13rem;
      width: auto;
    }
  }

  &__title {
    flex: 0 0 auto;
    @include type-style('productive-heading-02');
  }

  &__description {
    @include type-style('body-long-01');
    margin-top: $layout-02;
    margin-bottom: $layout-02;
  }
}
</style>
