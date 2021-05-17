<template>
  <fieldset class="app-fieldset">
    <legend class="app-fieldset__label caption">
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
.app-fieldset {
  margin-bottom: $layout-03;

  &__label {
    margin-bottom: $layout-01;
  }
}
</style>
