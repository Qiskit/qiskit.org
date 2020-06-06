<template>
  <section class="banner">
    <div class="banner__layout">
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class extends Vue {}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.banner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 4rem;
  background-color: black;

  &__layout {
    @include framed();
  }
}
</style>
