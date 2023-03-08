<template>
  <section class="algorithms">
    <div class="algorithms__container">
      <h3>Get the SDK</h3>
      <div class="algorithms__section">
        <code class="algorithms__code-cell">
          <pre class="algorithms__code-cell__line">pip install qiskit</pre>
          <pre class="algorithms__code-cell__line">pip install qiskit-ibm-provider</pre>
        </code>
        <!--
          @click="[copyToClipboard($event), $trackClickEvent(`Copy ${title} install code`, 'providers')]"
        -->
        <cv-button
          title="Copy"
          size="sm"
          class="algorithms__copy-button"
          @click="copyToClipboard($event)"
        >
          Copy
        </cv-button>
      </div>
      <h3>Test some algorithms</h3>
      <cv-tabs container>
        <cv-tab v-for="algorithm in algorithmsContent" :key="algorithm.title" :label="algorithm.title">
          <div class="algorithms__section">
            <code class="algorithms__code-cell">
              <template v-for="(line, index) in algorithm.codeSample">
                <!-- eslint-disable vue/no-v-html -->
                <pre v-if="line.startsWith('#')" :key="line" class="algorithms__code-cell__comment" v-html="line" />
                <pre v-else :key="index" class="algorithms__code-cell__line" v-html="line" />
                <!-- eslint-enable -->
              </template>
            </code>
            <cv-button
              title="Copy"
              size="sm"
              class="algorithms__copy-button"
              @click="copyToClipboard($event)"
            >
              Copy
            </cv-button>
          </div>
        </cv-tab>
      </cv-tabs>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { AlgorithmsContent } from '~/constants/providersContent'

@Component
export default class Algorithms extends Vue {
  copyCodeCta = 'Copy'
  algorithmsContent = AlgorithmsContent

  copyToClipboard (e: { target: any }): void {
    const buttonElement = e.target
    const codeBlock = buttonElement.parentNode
    const codeSnippet = codeBlock.querySelector('.algorithms__code-cell')
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

.algorithms {
  padding: $spacing-05;

  &__container {
    background-color: $background-color-lighter;
    padding: $spacing-05;
  }

  &__section {
    position: relative;
    margin-bottom: $spacing-07;
  }

  &__code-cell {
    display: block;
    background-color: $background-color-white;
    color: $text-color;
    padding: $spacing-05 $spacing-12 $spacing-05 $spacing-05;

    &__comment {
      color: $text-active-color;
      word-break: break-word;
      white-space: normal;
    }

    &__line {
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

<style lang="scss">
// Carbon overrides
.algorithms {
  .bx--tabs--scrollable {
    background-color: $background-color-lighter;
  }

  .bx--tabs--scrollable .bx--tabs--scrollable__nav-item--selected {
    background-color: $background-color-light-2;

    &:hover {
      background-color: $background-color-light;
    }
  }

  .bx--tabs--scrollable .bx--tabs--scrollable__nav-item {
    &:hover {
      background-color: $background-color-light;
    }
  }

  .bx--tabs--scrollable .bx--tabs--scrollable__nav-link,
  .bx--tabs--scrollable .bx--tabs--scrollable__nav-item--selected .bx--tabs--scrollable__nav-link {
    border-bottom: 2px solid transparent;
  }

  .bx--tabs--scrollable .bx--tabs--scrollable__nav-link:active {
    border: none;
    outline: none;
  }
}
</style>
