<template>
  <!-- tabindex is needed to allow hiding the menu in iOS Safari -->
  <div class="layout" tabindex="-1">
    <nuxt />
    <PageFooter theme="dark" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class MetalLayout extends Vue {
  isMenuShown: boolean = false
}
</script>

<style lang="scss" scoped>
.layout {
  background-color: $background-color-black;
  color: $text-color-lighter-2;
}

::v-deep {
  h2,
  p {
    color: $text-color-lighter-2;
  }

  h3 {
    color: $text-color-white;
  }
}
</style>
