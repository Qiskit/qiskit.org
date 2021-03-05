<template>
  <section class="learning-path-external-recommended-readings">
    <h2 class="learning-path-external-recommended-readings__headline">
      External recommended readings
    </h2>
    <AppLink
      v-for="link in links"
      :key="link"
      class="learning-path-external-recommended-readings__link"
      :url="link"
    >
      {{ link }}
    </AppLink>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class LearningPathExternalRecommendedReadings extends Vue {
  links = [
    'https://math.mit.edu/~gs/linearalgebra/',
    'https://machinelearningmastery.com/gentle-introduction-linear-algebra/'
  ]
}
</script>

<style lang="scss" scoped>
@import "~carbon-components/scss/globals/scss/typography";

.learning-path-external-recommended-readings {
  &__headline {
    @include type-style("productive-heading-01");
    color: $cool-gray-80;
    margin-bottom: $spacing-05;

    @include mq($until: x-large) {
      @include type-style("expressive-heading-04");
      margin-bottom: $spacing-06;
    }
  }

  &__link {
    display: block;
    margin-bottom: $spacing-01;
    width: fit-content;
  }
}
</style>
