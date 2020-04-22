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
  @Prop(String) label

  copyToClipboard () {
    const code = this.$refs.code as HTMLElement
    navigator.clipboard.writeText(code.textContent || '')
    this.$trackClickEvent({
      action: `${this.label}: Copy Code Sample`
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

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
    @include type-style('code-02');
    padding: 1.5rem 1rem;
  }
}
</style>
