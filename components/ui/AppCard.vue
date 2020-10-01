<template>
  <article class="app-card">
    <div
      class="app-card__image"
      :lazy-background="image"
    />
    <div class="app-card__content">
      <slot />
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop(String) image
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

$img-medium-width: 13rem;

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
    background-color: $cool-gray-80;
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

  &__content {
    @include type-style('body-long-01');
    padding: $spacing-05 $spacing-05 $spacing-05 $spacing-07;
  }
}
</style>
