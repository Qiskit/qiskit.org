<template>
  <article class="bx--grid page-section">
    <h2>What Can Qiskit Do</h2>
    <CodeCell :active-blocks="activeBlocks" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class TheQiskitCapabilitiesSection extends Vue {
  activeBlocks = [true, false, false]
}
</script>
