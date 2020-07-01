<template>
  <article class="learn-card">
    <div class="learn-card__content">
      <p class="learn-card__copy">
        Gain access to a free, digital textbook to study the concepts of quantum
        computing using Qiskit.
      </p>
      <AppLink
        class="landing-page__link learn-card__link"
        url="/education"
        :segment="{ action: 'Get Learning' }"
      >
        <span class="learn-card__copy">Get Learning</span>
        <ArrowRight16 />
      </AppLink>
    </div>
    <div class="learn-card__media" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import AppLink from '~/components/ui/AppLink.vue'

@Component({
  components: { AppLink }
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/landing-page.scss';
@import '~carbon-components/scss/globals/scss/typography';

.learn-card {
  height: 16rem;
  width: 100%;
  background-color: $cool-gray-10;
  display: flex;

  @include mq($until: large) {
    height: 10rem;
  }

  &__content {
    padding: $spacing-07;
    width: 16rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: $cool-gray-60;

    @include mq($until: large) {
      @include type-style('label-01');
      padding: $spacing-05;
      width: 10rem;
    }
  }

  &__copy {
    @include type-style('body-long-01');

    @include mq($until: large) {
      @include type-style('label-01');
    }
  }

  &__link {
    margin-bottom: $spacing-04;
    fill: $purple-70;
    display: flex;
    align-items: center;

    :first-child {
      margin-right: $spacing-06;
    }
  }

  &__media {
    flex: 1;
    background-image: url('/images/learn-image.png');
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
