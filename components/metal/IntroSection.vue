<template>
  <section class="intro-section">
    <div class="intro-section__container">
      <h2 class="intro-section__title">
        Streamlining quantum device design
      </h2>
      <div class="intro-section__content">
        <p class="intro-section__description">
          Metal’s vision is to develop a community-driven universal toolkit capable of orchestrating quantum chip development from concept to fabrication in a simple, scalable, and open framework. <br><br>
          A first-of-its-kind, open-source project for engineers and scientists to design superconducting quantum device with ease: Qiskit Metal.
        </p>
        <iframe
          class="intro-section__video"
          width="608"
          height="341"
          src="https://www.youtube.com/embed/NHTDqdGfzcc"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <AppCtaBtn
        class="intro-section__cta"
        v-bind="accessRequest"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import AppCtaBtn from '~/components/metal/AppCtaBtn.vue'

@Component({ components: { AppCtaBtn } })
export default class extends Vue {
  accessRequest = {
    url: 'http://qisk.it/metal',
    label: 'Request early access'
  }
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.intro-section {
  &__container {
    @include contained();
    padding-top: $layout-05;
    padding-bottom: 0;
  }

  &__title {
    @include type-style('expressive-heading-05');
    margin-bottom: $layout-03;
    font-weight: 300;

    @include mq($until: large) {
      @include type-style('expressive-heading-04');
    }
  }

  &__content {
    display: flex;
    flex-direction: row;

    @include mq($until: medium) {
      flex-direction: column;
    }
  }

  &__description {
    @include type-style('body-long-01');
    max-width: 6 * $column-size-large;
    margin-bottom: $layout-06;
    padding-right: $spacing-07;

    @include mq($until: large) {
      margin-bottom: $layout-03;
    }

    @include mq($from: medium, $until: large) {
      max-width: 4 * $column-size-medium;
    }

    @include mq($until: medium) {
      max-width: 100%;
    }
  }

  &__video {
    width: 100%;

    @include mq($until: medium) {
      margin-bottom: $layout-03;
    }
  }

  &__cta {
    position: relative;
    top: -3.2rem;

    @include mq($until: large) {
      top: 0;
      margin-top: $layout-03;
    }
  }
}
</style>
