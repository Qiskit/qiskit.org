<template>
  <article class="quick-start landing-page__util_vertical-spacer">
    <h2 class="landing-page__title">
      Quick Start
    </h2>
    <p class="landing-page__copy landing-page__copy_outstanding">
      When you are looking to start Qiskit you have two options. You can start
      Qiskit locally which is much more secure and private, or you get started
      online where you can immediately jump in and start working.
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
