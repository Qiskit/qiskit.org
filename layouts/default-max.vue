<template>
  <!-- tabindex is needed to allow hiding the menu in iOS Safari -->
  <div tabindex="-1">
    <qiskit-ui-shell />
    <div class="main-container">
      <nuxt />
    </div>
    <PageFooter theme="light" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import '@qiskit/web-components/components/ui-shell'

@Component
export default class MaxLayout extends Vue {}
</script>

<style lang="scss">
.main-container {
  margin-top: 3.5rem;
}
</style>
