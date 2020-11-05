<template>
  <cv-checkbox
    class="app-checkbox"
    :value="value"
    :label="label"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop(String) value!: string
  @Prop(String) label!: string
  // TODO: Add checked, aria-checked and @change when doing the filter behaviour. Also
  // reuse this component on events page
}
</script>

<style lang="scss">
.app-checkbox {
  .bx--checkbox-label::before {
    border: 1px solid $black-100;
  }

  .bx--checkbox:focus + .bx--checkbox-label::before {
    box-shadow: 0 0 0 2px $white, 0 0 0 4px $purple-60;
  }
}
</style>
