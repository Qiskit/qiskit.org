<template>
  <div class="code-snippet">
    <code class="code-snippet__code-cell">
      <!-- eslint-disable vue/no-v-html -->
      <pre
        v-for="(line, index) in codeLines"
        :key="index"
        class="code-snippet__code-cell_line"
        :class="{'code-snippet__code-cell_comment' : line.startsWith('#') }"
        v-html="line"
      />
      <!-- eslint-enable -->
    </code>
    <cv-button
      title="Copy"
      size="sm"
      class="code-snippet__copy-button"
      @click="[copyToClipboard($event), $trackClickEvent(`Copy ${copyButtonLabel} install code`, copyButtonLocation)]"
    >
      Copy
    </cv-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class CodeSnippet extends Vue {
  @Prop(Array) codeLines!: string[]
  @Prop(String) copyButtonLabel!: string
  @Prop(String) copyButtonLocation!: string

  copyCodeCta = 'Copy'

  copyToClipboard (e: { target: any }) {
    const buttonElement = e.target
    const codeBlock = buttonElement.parentNode
    const codeSnippet = codeBlock.querySelector('.code-snippet__code-cell')

    if (codeSnippet !== null) {
      navigator.clipboard.writeText(codeSnippet.innerText)
      buttonElement.innerText = 'Copied!'

      setTimeout(() => {
        buttonElement.blur()
        buttonElement.innerText = this.copyCodeCta
      }, 3500)
    }
  }
}
</script>

<style lang="scss" scoped>
$cta-max-width: 4rem;

.code-snippet {
  position: relative;
  margin-bottom: $spacing-05;
  max-width: initial;

  &__code-cell {
    display: block;
    background-color: $background-color-white;
    color: $text-color;
    padding: $spacing-05 $spacing-12 $spacing-05 $spacing-05;

    &_comment {
      color: $text-active-color;
      word-break: break-word;
      white-space: normal;
    }

    &_line {
      word-break: break-word;
      white-space: normal;
    }
  }

  &__copy-button {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    max-width: $cta-max-width;
    background-size: 200% 100%;
    background-position-x: 100%;
    background-image: linear-gradient(90deg, $button-background-color-light 0%, $button-background-color-light 50%, $background-color-secondary 50%, $background-color-secondary 100%);
    transition: background-position-x 0.3s ease-out;

    &:hover,
    &:active {
      background-position-x: 0;
    }

    &:focus {
      border-color: $button-background-color-light;
      box-shadow: inset 0 0 0 1px $button-background-color-light, inset 0 0 0 2px $white-0;
    }

    &__label {
      display: block;
      width: 100%;
    }
  }
}
</style>
