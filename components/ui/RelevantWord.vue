<template>
  <span class="relevant-word">
    <slot />
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.relevant-word {
  font-style: italic;
  background-color: $purple-70;
  color: white;
  padding: $spacing-01 $spacing-03;
}
</style>
