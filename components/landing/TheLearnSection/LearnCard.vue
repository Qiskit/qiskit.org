<template>
  <article class="learn-card">
    <div class="learn-card__content">
      <p class="copy__paragraph copy__paragraph_importance_support">
        Gain access to a free, digital textbook to study the concepts of quantum
        computing using Qiskit.
      </p>
      <AppCta
        url="/learn"
        :segment="{ action: 'Get Learning' }"
      >
        Get Learning
      </AppCta>
    </div>
    <div
      lazy-background="/images/landing-page/learn-image.png"
      class="learn-card__media"
    />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import AppCta from '~/components/ui/AppCta.vue'

@Component({
  components: { AppCta }
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/copy.scss';
@import '~carbon-components/scss/globals/scss/typography';

.learn-card {
  height: 16rem;
  width: 100%;
  background-color: $cool-gray-10;
  display: flex;

  @include mq($until: large) {
    height: auto;
  }

  &__content {
    padding: $spacing-07;
    width: 16rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: $cool-gray-60;

    @include mq($until: large) {
      padding: $spacing-05;
      width: 10rem;
    }
  }

  &__media {
    flex: 1;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right center;
    overflow: hidden;

    @include mq($until: large) {
      background-position: right -75px center;
    }
  }
}
</style>
