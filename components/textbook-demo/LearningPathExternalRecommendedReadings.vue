<template>
  <section class="learning-path-external-recommended-readings">
    <h2 class="learning-path-external-recommended-readings__headline">
      External recommended readings
    </h2>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class LearningPathExternalRecommendedReadings extends Vue {}
</script>

<style lang="scss" scoped>
@import "~carbon-components/scss/globals/scss/typography";

.learning-path-external-recommended-readings {
  &__headline {
    @include type-style("productive-heading-01");
    color: $cool-gray-80;

    @include mq($until: x-large) {
      @include type-style("expressive-heading-04");
    }
  }
}
</style>
