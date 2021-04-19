<template>
  <div class="syntax-highlight">
    <cv-button
      size="small"
      title="Copy to clipboard"
      class="syntax-highlight__copy-button"
      @click="[copyToClipboard(code), $trackClickEvent(segmentAction)]"
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
export default class SyntaxHighlight extends Vue {
  @Prop(String) label!: string
  @Prop({ type: String, default: '' }) code!: string

  segmentAction = {
    action: `${this.label}: Copy Code Sample`
  }

  copyToClipboard (code: string) {
    navigator.clipboard.writeText(code)
  }
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.syntax-highlight {
  position: relative;
  background-color: $background-color-lighter;
  padding: $spacing-05 $spacing-07;

  @include mq($until: large) {
    padding: $spacing-05 $spacing-05;
  }

  &__copy-button {
    position: absolute;
    right: 0;
    bottom: 0;
    border: none;
    padding: $spacing-03 $spacing-05;

    text-transform: lowercase;
    background-size: 200% 100%;
    background-position-x: 100%;
    background-image: linear-gradient(90deg, $background-color-secondary 0%, $background-color-secondary 50%, $background-color-secondary 50%, $background-color-secondary 100%);
    transition: background-position-x 0.3s ease-out;

    &:hover,
    &:active {
      background-position-x: 0;
    }
  }

  &__code {
    @include type-style('code-02');
    color: $text-color-light;
    min-height: 8rem;

    @include mq($until: large) {
      @include type-style('code-01');
    }
  }
}
</style>
