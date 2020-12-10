<template>
  <article class="the-learn-section">
    <div
      class="
        the-learn-section__container
        copy__util
        copy__util_vertical-spacer
      "
    >
      <h2 class="copy__title">
        Learn with Qiskit
      </h2>
      <LearnCard />
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class TheLearnSection extends Vue {}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/copy.scss';

.the-learn-section {
  @include responsive-grid-bg('/images/grid/grid-left.svg', 36rem);
  background-repeat: no-repeat;
  background-position: left bottom -2px;

  &__container {
    @include contained();
  }
}
</style>
