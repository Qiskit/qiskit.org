<template>
  <article class="quick-start copy__util_vertical-spacer">
    <h2 class="copy__title">
      Quick Start
    </h2>
    <p class="copy__paragraph copy__paragraph_importance_outstanding">
      When you are looking to start Qiskit, you have two options. You can start Qiskit locally, which is much more secure and private, or you get started with hosted Jupyter Notebooks in IBM Quantum Lab.
    </p>
    <div class="quick-start__sections">
      <StartLocally />
      <StartOnTheCloud />
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class TheQuickStart extends Vue {}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/copy.scss';
@import '~carbon-components/scss/globals/scss/typography';

.quick-start {
  @include contained();
  color: $cool-gray-80;

  &__header {
    @include type-style('expressive-heading-05');
    color: $cool-gray-80;
    margin-bottom: $layout-03;
  }

  &__sections {
    display: flex;
    flex-direction: row;

    @include mq($until: medium) {
      flex-direction: column;
    }
  }
}
</style>
