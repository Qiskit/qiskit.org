<template>
  <article class="learning-resource-card">
    <img
      class="learning-resource-card__image"
      :style="{
        backgroundImage: `url('${image}')`
      }"
      alt=""
    >
    <div class="learning-resource-card__content">
      <header>
        <h3 class="landing-page__subtitle">
          {{ title }}
        </h3>
      </header>
      <p class="landing-page__copy">
        {{ description }}Lipsum
      </p>
      <AppLink class="landing-page__link" :url="to">
        <span>{{ ctaLabel }}ss</span>
        <ArrowRight16 />
      </AppLink>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import AppLink from '~/components/ui/AppLink.vue'

@Component({
  components: { AppLink }
})
export default class extends Vue {
  @Prop(String) image
  @Prop(String) title
  @Prop(String) description
  @Prop(String) ctaLabel
  @Prop(String) to
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/landing-page.scss';
@import '~carbon-components/scss/globals/scss/typography';

.learning-resource-card {
  height: 13rem;
  width: 100%;
  margin-bottom: $layout-01;
  background-color: $cool-gray-10;
  display: flex;

  @include mq($until: medium) {
    height: auto;
    flex-direction: column;
  }

  &__image {
    width: 14rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;

    @include mq($from: medium, $until: large) {
      width: 13rem;
    }

    @include mq($until: medium) {
      height: 11rem;
      width: auto;
    }
  }

  &__content {
    margin: 1rem;
    display: flex;
    flex-direction: column;
  }
}
</style>
