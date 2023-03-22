<template>
  <div class="code-snippet">
    <code class="code-snippet__code-cell">
      <!-- eslint-disable vue/no-v-html -->
      <pre
        v-for="(line, index) in codeLines"
        :key="index"
        :class="{ 'code-snippet__code-cell_comment': line.startsWith('#') }"
        v-html="line"
      />
      <!-- eslint-enable -->
    </code>
    <cv-button
      title="Copy"
      size="sm"
      class="code-snippet__copy-button"
      @click="
        [
          copyToClipboard($event),
          trackClickEvent(
            `Copy ${codeSnippetTitle} install code`,
            codeSnippetLocation
          ),
        ]
      "
    >
      Copy
    </cv-button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  codeLines: string[];
  codeSnippetTitle: string;
  codeSnippetLocation: string;
}

defineProps<Props>();

const { trackClickEvent } = useSegment();

const copyCodeCta = "Copy";

function copyToClipboard(e: { target: any }) {
  const buttonElement = e.target;
  const codeBlock = buttonElement.parentNode;
  const codeSnippet = codeBlock.querySelector(".code-snippet__code-cell");

  if (codeSnippet !== null) {
    navigator.clipboard.writeText(codeSnippet.innerText);
    buttonElement.innerText = "Copied!";

    setTimeout(() => {
      buttonElement.blur();
      buttonElement.innerText = copyCodeCta;
    }, 3500);
  }
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

$cta-max-width: 4rem;

.code-snippet {
  position: relative;
  margin-bottom: carbon.$spacing-05;
  max-width: initial;

  &__code-cell {
    display: block;
    background-color: qiskit.$background-color-white;
    color: qiskit.$text-color;
    padding: carbon.$spacing-05;
    overflow-x: scroll;

    &_comment {
      color: qiskit.$text-active-color;
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
    background-image: linear-gradient(
      90deg,
      qiskit.$button-background-color-light 0%,
      qiskit.$button-background-color-light 50%,
      qiskit.$background-color-secondary 50%,
      qiskit.$background-color-secondary 100%
    );
    transition: background-position-x 0.3s ease-out;

    &:hover,
    &:active {
      background-position-x: 0;
    }

    &:focus {
      border-color: qiskit.$button-background-color-light;
      box-shadow: inset 0 0 0 1px qiskit.$button-background-color-light,
        inset 0 0 0 2px carbon.$white-0;
    }

    &__label {
      display: block;
      width: 100%;
    }
  }
}
</style>
