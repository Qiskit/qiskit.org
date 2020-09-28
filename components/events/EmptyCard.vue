<template>
  <article class="empty-card">
    <img
      class="empty-card__image"
      src="data:image/svg+xml,%3Csvg width='224' height='200' viewBox='0 0 224 200' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='224' height='200' fill='%23C1C7CD'/%3E%3Cpath d='M112 111.346V81.7308M156 138H68L112 61L156 138Z' stroke='white' stroke-width='2' stroke-linejoin='round'/%3E%3Cpath d='M112 126.154C113.62 126.154 114.933 124.828 114.933 123.192C114.933 121.557 113.62 120.231 112 120.231C110.38 120.231 109.067 121.557 109.067 123.192C109.067 124.828 110.38 126.154 112 126.154Z' fill='white'/%3E%3C/svg%3E%0A"
      alt=""
    >
    <div class="empty-card__content">
      <h3 class="empty-card__title">
        {{ title }}
      </h3>
      <p class="copy__paragraph">
        {{ description }}
      </p>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop(String) title
  @Prop(String) description
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.empty-card {
  height: 13rem;
  width: 100%;
  background-color: $cool-gray-10;
  margin-bottom: $layout-02;
  display: flex;

  @include mq($until: medium) {
    height: auto;
    flex-direction: column;
  }

  @include mq($until: large) {
    margin-bottom: $layout-01;
  }

  &__image {
    width: 14rem;
    background-color: $cool-gray-30;

    @include mq($from: medium, $until: large) {
      width: 13rem;
    }

    @include mq($until: medium) {
      height: 11rem;
      width: auto;
    }
  }

  &__content {
    flex: 1;
    margin: $spacing-05 $spacing-05 $spacing-05 $spacing-07;
    display: flex;
    flex-direction: column;
  }

  &__title {
    @include type-style('productive-heading-02');
  }
}
</style>
