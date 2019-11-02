<template>
  <div class="syntax-highlight">
    <button
      title="Copy to clipboard"
      @click="copyToClipboard"
    >
      Copy
    </button>
    <pre v-highlightjs><code ref="code" :class="lang"><slot /></code></pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop({ type: String, default: 'python' }) lang

  copyToClipboard() {
    const code = this.$refs.code as HTMLElement
    navigator.clipboard.writeText(code.innerText)
  }
}
</script>

<style lang="scss" scoped>
.syntax-highlight {
  position: relative;

  button {
    position: absolute;
    top: 0; right: 0;
    text-transform: uppercase;
    border: none;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
  }

  code {
    padding: 1.5rem 1rem;
    font-size: 0.7rem;
  }
}
</style>
