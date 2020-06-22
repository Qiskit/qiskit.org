<template>
  <article class="quick-start">
    <h2 class="quick-start__header">
      Quick Start
    </h2>
    <p class="quick-start__description">
      When you are looking to start Qiskit you have two options. You can
      start Qiskit locally which is much more secure and private, or you get
      started online where you can immediately jump in and start working.
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
import StartLocally from './StartLocally.vue'
import StartOnTheCloud from './StartOnTheCloud.vue'
import AppLink from '~/components/ui/AppLink.vue'
import SyntaxHighlight from '~/components/ui/SyntaxHighlight.vue'

@Component({
  components: {
    StartLocally,
    StartOnTheCloud,
    AppLink,
    SyntaxHighlight
  }
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.quick-start {
  &__header {
    @include type-style('expressive-heading-05');
    margin-bottom: $layout-03;
    color: $cool-gray-80;
  }

  &__description {
    @include type-style('body-long-01');
    max-width: 7 * $column-size-large;
    margin-bottom: $layout-01;
  }

  &__sections {
    display: flex;
    flex-direction: row;
  }
}
</style>
