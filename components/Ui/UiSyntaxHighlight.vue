<template>
  <div class="syntax-highlight">
    <bx-btn
      size="sm"
      title="Copy to clipboard"
      class="syntax-highlight__copy-button"
      @click="[copyToClipboard(code), trackClickEvent(segmentAction)]"
    >
      copy
    </bx-btn>
    <code class="syntax-highlight__code" v-text="code" />
  </div>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/button/index.js";
import { CtaClickedEventProp } from "~/types/segment";

interface Props {
  code?: string;
  label: string;
}

const props = withDefaults(defineProps<Props>(), {
  code: "",
});

const { trackClickEvent } = useSegment();

const segmentAction = computed<CtaClickedEventProp>(() => ({
  cta: `${props.label}: Copy Code Sample`,
  location: "syntax-highlight",
}));

function copyToClipboard(code: string) {
  navigator.clipboard.writeText(code);
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.syntax-highlight {
  position: relative;
  background-color: qiskit.$background-color-lighter;
  padding: carbon.$spacing-05 carbon.$spacing-07;

  @include carbon.breakpoint-down(lg) {
    padding: carbon.$spacing-05 carbon.$spacing-05;
  }

  &__copy-button {
    position: absolute;
    right: 0;
    bottom: 0;
    border: none;
    text-transform: lowercase;
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
  }

  &__code {
    min-height: 8rem;
  }
}
</style>
