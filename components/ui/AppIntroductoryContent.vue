<template>
  <article class="app-introductory-content" :class="{ 'app-introductory-content_narrow': narrow }">
    <div class="app-introductory-content__overview">
      <slot name="title" />
      <p class="app-introductory-content__description">
        {{ description }}
      </p>
      <AppCta
        v-if="link"
        v-bind="link"
        kind="ghost"
      />
    </div>
    <div class="app-introductory-content__layout">
      <slot />
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { NavLink } from '~/constants/menuLinks'

@Component
export default class AppIntroductoryContent extends Vue {
  @Prop(String) description!: string
  @Prop(Object) link!: NavLink
  @Prop({ type: Boolean, default: false }) narrow!: boolean
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/copy.scss';

.app-introductory-content {
  display: grid;
  column-gap: 2rem;
  grid-template-areas: 'overview main main main';
  grid-template-columns: repeat(4, 1fr);

  @include mq($until: large) {
    display: block;
  }

  &__overview {
    grid-area: overview;
    margin-bottom: $layout-03;

    @include mq($until: large) {
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

  &__layout {
    grid-area: main;
    width: 100%;
  }

  &_narrow {
    grid-template-areas: 'overview main';
    grid-template-columns: (4.5 * $column-size-large) 1fr;

    @include mq($until: large) {
      display: block;
    }
  }
}
</style>
