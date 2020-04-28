<template>
  <div class="syntax-highlight">
    <button
      title="Copy to clipboard"
      @click="copyToClipboard"
    >
      Copy
    </button>
    <pre v-highlightjs="code"><code :class="lang" /></pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop({ type: String, default: 'python' }) lang
  @Prop(String) label
  @Prop({ type: String, default: '' }) code

  copyToClipboard () {
    navigator.clipboard.writeText(this.code)
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
