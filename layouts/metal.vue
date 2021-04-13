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
  background-color: $ui-background_dark;
  color: $text-01_dark;
}
</style>
