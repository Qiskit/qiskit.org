<template>
  <article class="learn-card">
    <div class="bx--col-max-3 bx--col-lg-4 bx--col-md-4 learn-card__content">
      <p>
        Gain access to a free, digital textbook to study the concepts of quantum
        computing using Qiskit.
      </p>
      <AppCta
        kind="ghost"
        v-bind="learnLink"
      />
    </div>
    <div
      class="bx--col-md learn-card__media"
      lazy-background="/images/landing-page/learn-image.jpg"
    />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class LearnCard extends Vue {
  learnLink = {
    url: 'learn',
    label: 'Get learning',
    segment: { action: 'Get Learning' }
  }
}
</script>

<style lang="scss" scoped>
.learn-card {
  display: flex;
  flex-wrap: wrap;

  @include mq($from: medium) {
    height: $spacing-10 * 3;
  }

  @include mq($from: large) {
    height: $spacing-11 * 3;
  }

  @include mq($from: x-large) {
    height: $spacing-12 * 3;
  }

  @include mq($from: max-size) {
    height: $spacing-13 * 3;
  }

  &__content {
    background-color: $background-color-lighter;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    padding: $spacing-05;

    @include mq($until: medium) {
      order: 1;
    }

    @include mq($from: medium) {
      padding-right: $spacing-07;
    }

    @include mq($from: large) {
      padding: $spacing-07;
    }
  }

  &__media {
    background-position: center 25%;
    background-size: cover;
    flex: 1;
    min-height: $spacing-10 * 3;
  }
}
</style>
