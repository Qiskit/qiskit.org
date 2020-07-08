<template>
  <div class="syntax-highlight">
    <cv-button
      size="small"
      title="Copy to clipboard"
      class="syntax-highlight__copy-button"
      @click="copyToClipboard(code) && $trackClickEvent({
        action: segmentAction
      })"
    >
      Copy
    </cv-button>
    <code class="syntax-highlight__code">
      {{ code }}
    </code>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop(String) label
  @Prop({ type: String, default: '' }) code!: string

  segmentAction = `${this.label}: Copy Code Sample`

  copyToClipboard (code: string) {
    navigator.clipboard.writeText(code)
  }
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.syntax-highlight {
  position: relative;
  background-color: $cool-gray-10;
  padding: $spacing-05 $spacing-07;

  @include mq($until: large) {
    padding: $spacing-05 $spacing-05;
  }

  &__copy-button {
    position: absolute;
    right: 0;
    bottom: 0;
    border: none;
    text-transform: lowercase;
    background-color: $purple-70;
    padding: $spacing-03 $spacing-05;

    &:hover {
      background-color: $interactive-01;
    }
  }

  &__code {
    @include type-style('code-02');
    color: $gray-60;
    min-height: 8rem;

    @include mq($until: large) {
      @include type-style('code-01');
    }
  }
}
</style>
