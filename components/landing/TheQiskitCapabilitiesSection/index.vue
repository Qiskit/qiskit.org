<template>
  <article class="bx--grid page-section">
    <h2>What can Qiskit Do</h2>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class TheQiskitCapabilitiesSection extends Vue {
  @Prop(String) description!: string
}
</script>
