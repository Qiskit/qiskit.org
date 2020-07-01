<template>
  <article class="quick-start landing-page__util_vertical-spacer">
    <h2 class="quick-start__header">
      Quick Start
    </h2>
    <p class="landing-page__copy">
      When you are looking to start with Qiskit you have two options. You can get started
      locally and use your favorite development environment, or you can get started online
      with IBM's hosted Jupyter Notebooks.
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

@Component({
  components: {
    StartLocally,
    StartOnTheCloud
  }
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/landing-page.scss';
@import '~carbon-components/scss/globals/scss/typography';

.quick-start {
  @include contained();

  color: $gray-60;

  @include mq($until: large) {
    display: none;
  }

  &__header {
    @include type-style('expressive-heading-05');
    color: $cool-gray-80;
    margin-bottom: $layout-03;
  }

  &__sections {
    display: flex;
    flex-direction: row;
  }
}
</style>
