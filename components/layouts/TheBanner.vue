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
export default class TheBanner extends Vue {}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.banner {
  box-sizing: border-box;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  padding: $spacing-05 0;
  background-color: black;

  &__layout {
    @include framed();
  }
}
</style>
