<template>
  <div class="code-snippet">
    <code class="code-snippet__code-cell">
      <pre
        v-for="(line, index) in codeLines"
        :key="index"
        :class="{ 'code-snippet__code-cell_comment': line.startsWith('#') }"
        v-text="line"
      />
    </code>
    <bx-btn
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
    </bx-btn>
  </div>
</template>

<script setup lang="ts">
// import "@carbon/web-components/es/components/button/index.js";

interface Props {
  code: string;
  codeSnippetTitle: string;
  codeSnippetLocation: string;
}

const props = defineProps<Props>();

const codeLines = computed(() => {
  const code = props.code;
  const codeLines = code.split("\n");
  const codeLinesWithEmptyLines = codeLines.map((line) => {
    if (line === "") {
      return "\n";
    }
    return line;
  });
  return codeLinesWithEmptyLines;
});

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
