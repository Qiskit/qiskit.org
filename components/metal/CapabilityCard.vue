<template>
  <article class="capability-card">
    <div class="capability-card__container">
      <h3 class="capability-card__title">
        {{ title }}
      </h3>
      <div class="capability-card__description">
        <!-- TODO: HTML content should not be in strings but in components
        but lacking of a better solution given time constraints. -->
        <!-- eslint-disable vue/no-v-html -->
        <span v-html="description" />
        <!-- estlint-enable -->
      </div>
    </div>
    <video
      v-if="isVideo()"
      class="capability-card__visual-resource"
      loop
      autoplay
      muted
      playsinline
    >
      <source :src="visualResource" type="video/mp4">
      <source :src="visualResource" type="video/ogg">
      Your browser does not support video.
    </video>
    <div
      v-else
      class="capability-card__visual-resource"
      :lazy-background="visualResource"
    />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class CapabilityCard extends Vue {
  @Prop(String) visualResource!: string
  @Prop(String) title!: string
  @Prop(String) description!: string

  isVideo (): boolean {
    const extension = this.visualResource.substring(this.visualResource.length - 4)
    return extension === '.mp4'
  }
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.capability-card {
  display: flex;
  min-height: 20rem;

  @include mq($until: medium) {
    flex-direction: column;
  }

  &__container {
    display: flex;
    flex: 1;
    padding-right: $spacing-07;

    @include mq($until: large) {
      flex-direction: column;
    }
  }

  &__title {
    @include type-style('productive-heading-02');
    flex: 0 0 12rem;
    padding-right: $spacing-07;

    @include mq($until: large) {
      flex: 0 0 auto;
      padding-right: 0;
      padding-bottom: $spacing-07;
    }

    @include mq($until: medium) {
      padding-bottom: 0;
      margin-bottom: $layout-01;
    }
  }

  &__description {
    @include type-style('body-long-01');
    flex: 1;

    @include mq($until: large) {
      padding-bottom: $spacing-05;
    }

    @include mq($until: medium) {
      padding-bottom: 0;
      margin-bottom: $layout-01;
    }
  }

  &__visual-resource {
    flex: 0 0 32rem;
    width: 100%;
    height: 100%;
    background-size: contain;
    background-position: center top;
    background-repeat: no-repeat;

    @include mq($from: medium, $until: large) {
      flex: 1.5;
    }

    @include mq($from: medium) {
      display: none;
    }

    @include mq($until: medium) {
      flex: 0 0 16rem;
      margin: 0;
    }
  }
}
</style>
