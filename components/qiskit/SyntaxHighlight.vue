<template>
  <pre v-highlightjs>
    <code :class="lang"><slot /></code>
  </pre>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop({ type: String, default: 'python' }) lang;
}
</script>

<style lang="scss" scoped>
code {
  font-size: 0.7rem;
}
</style>
