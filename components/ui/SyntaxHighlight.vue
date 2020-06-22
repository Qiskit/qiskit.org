<template>
  <div class="syntax-highlight">
    <cv-button
      size="small"
      title="Copy to clipboard"
      class="syntax-highlight__copy-button"
      :class="{ 'syntax-highlight__copy-button_bottom': btnOnBottom}"
      @click="copyToClipboard"
    >
      Copy
    </cv-button>
    <pre v-highlightjs="code"><code class="syntax-highlight__code" :class="lang" /></pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop({ type: String, default: 'python' }) lang!: string
  @Prop(String) label
  @Prop({ type: String, default: '' }) code!: string
  @Prop({ type: Boolean, default: false }) btnOnBottom

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

  &__copy-button {
    position: absolute;
    right: 0;
    text-transform: uppercase;
    border: none;
    padding: 0.5rem;

    &_bottom {
      bottom: 0;
    }

    &:hover {
      background-color: $interactive-01;
      color: white;
    }
  }

  &__code {
    @include type-style('code-02');
    padding: $spacing-07 $spacing-05 $spacing-05;
  }
}
</style>
