<template>
  <article class="compact-feature">
    <img
      class="compact-feature__icon"
      :src="`/images/icons/${icon}`"
      alt=""
    >
    <h3 class="compact-feature__title">
      {{ title }}
    </h3>
    <div class="compact-feature__description">
      {{ description }}
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class CompactFeature extends Vue {
  @Prop({ type: String, default: '' }) icon!: string
  @Prop({ type: String, default: '' }) title!: string
  @Prop({ type: String, default: '' }) description!: string
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

$feature-icon-size: 2.25rem;

.compact-feature {
  background-color: $background-color-secondary;
  height: 100%;
  padding: $spacing-05;

  @include mq($until: large) {
    padding-bottom: $spacing-06;
  }

  &__icon {
    height: $feature-icon-size;
    margin-bottom: $spacing-06;
  }

  &__title {
    @include type-style('productive-heading-02');

    color: $text-color-white;
    margin-bottom: $spacing-04;
    height: 2.5rem; // for consistent alignment

    @include mq($until: medium) {
      height: initial;
    }
  }

  &__description {
    @include type-style('body-long-01');

    color: $text-color-white;
  }
}
</style>
