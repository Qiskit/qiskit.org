<template>
  <fieldset class="app-fieldset">
    <legend class="app-fieldset__label">
      {{ label }}
    </legend>
    <slot />
  </fieldset>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class AppFieldset extends Vue {
  @Prop(String) label!: string
}
</script>

<style lang="scss">
@import '~carbon-components/scss/globals/scss/typography';

.app-fieldset {
  margin-bottom: $layout-03;

  &__label {
    @include type-style('body-short-01');
    color: $cool-gray-80;
    margin-bottom: $layout-01;
  }
}
</style>
