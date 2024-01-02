<template>
  <div class="ui-code-snippet">
    <code class="ui-code-snippet__code-cell">
      <template v-for="(line, index) in codeLines" :key="index">
        <br v-if="line === ''" />
        <pre
          v-else
          :class="{
            'ui-code-snippet__code-cell_comment': line.startsWith('#'),
          }"
          v-text="line"
        />
      </template>
    </code>
    <bx-btn
      v-track-click="{
        cta: `Copy ${codeSnippetTitle} install code`,
        location: codeSnippetLocation,
      }"
      title="Copy"
      size="sm"
      class="ui-code-snippet__copy-button"
      @click="copyToClipboard($event)"
    >
      Copy
    </bx-btn>
  </div>
</template>

<script setup lang="ts">
interface Props {
  code: string;
  codeSnippetTitle: string;
  codeSnippetLocation: string;
}

const props = defineProps<Props>();

const codeLines = computed(() => {
  return props.code.split("\n");
});

const copyCodeCta = "Copy";

function copyToClipboard(e: { target: any }) {
  const buttonElement = e.target;
  const codeBlock = buttonElement.parentNode;
  const codeSnippet = codeBlock.querySelector(".ui-code-snippet__code-cell");

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

.ui-code-snippet {
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
      box-shadow:
        inset 0 0 0 1px qiskit.$button-background-color-light,
        inset 0 0 0 2px carbon.$white-0;
    }

    &__label {
      display: block;
      width: 100%;
    }
  }
}
</style>
