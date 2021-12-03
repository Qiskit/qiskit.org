<template>
  <article class="bx--grid page-section">
    <h2>What Can Qiskit Do</h2>
    <CodeCell :active-cells="activeCells" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class TheQiskitCapabilitiesSection extends Vue {
  activeCells = [true, false, false]
}
</script>
