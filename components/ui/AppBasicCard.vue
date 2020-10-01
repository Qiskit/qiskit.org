<template>
  <article class="app-card">
    <div
      class="app-card__image"
      :lazy-background="image"
    />
    <div class="app-card__content">
      <h3 class="app-card__title">
        {{ title }}
      </h3>
      <div class="app-card__description">
        <slot />
      </div>
      <AppCta v-if="to" :url="to" class="app-card__link">
        {{ ctaLabel }}
      </AppCta>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import AppCta from '~/components/ui/AppCta.vue'

@Component({ components: { AppCta } })
export default class extends Vue {
  @Prop(String) image
  @Prop(String) title
  @Prop(String) to
  @Prop(String) ctaLabel
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
    padding: $spacing-05 $spacing-05 $spacing-05 $spacing-07;
    display: flex;
    flex-direction: column;
  }

  &__title {
    @include type-style('productive-heading-02');
    margin-bottom: $layout-02;
  }

  &__description {
    @include type-style('body-long-01');
  }

  &__link {
    margin-top: auto;
  }
}
</style>
