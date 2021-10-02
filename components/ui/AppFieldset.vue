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
.app-fieldset {
  margin-bottom: $spacing-07;

  &__label {
    margin-bottom: $spacing-05;
  }
}
</style>
