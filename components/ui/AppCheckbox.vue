<template>
  <cv-checkbox
    class="app-checkbox"
    v-bind="formatedOption"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

type ckeckboxOption = {
  label: string,
  value: string
}

@Component
export default class extends Vue {
  @Prop(String) option!: string
  // TODO: Add checked, aria-checked and @change when doing the filter behaviour. Also
  // reuse this component on events page

  formatedOption = this.formatOption(this.option)

  formatOption (option: string): ckeckboxOption {
    return { label: option, value: option }
  }
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
