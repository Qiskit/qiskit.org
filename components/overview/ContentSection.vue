<template>
  <article class="content-section">
    <div class="content-section__overview">
      <h2 class="copy__title">
        {{ title }}
      </h2>
      <p class="content-section__description">
        {{ description }}
      </p>
      <AppCta
        v-if="link"
        v-bind="link"
        kind="ghost"
      />
    </div>
    <div class="content-section__detail">
      <slot />
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { NavLink } from '~/constants/menuLinks'

@Component
export default class ContentSection extends Vue {
  @Prop(String) title!: string
  @Prop(String) description!: string
  @Prop(Object) link!: NavLink
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/copy.scss';

.content-section {
  display: flex;

  @include mq($until: large) {
    display: block;
  }

  &__overview {
    flex: 0 0 (4.5 * $column-size-large);
    padding-right: $spacing-07;
    margin-bottom: $layout-03;

    @include mq($until: large) {
      padding-right: 0;
      display: block;
    }
  }

  &__description {
    @include type-style('body-long-01');
    color: $cool-gray-80;
    margin-bottom: $layout-05;

    @include mq($until: large) {
      margin-bottom: $layout-03;
    }
  }

  &__detail {
    flex: 1;
    background-color: $cool-gray-10;
  }
}
</style>
