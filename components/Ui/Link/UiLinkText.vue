<template>
  <UiLink
    class="ui-link-text"
    :class="`ui-link-text_${kind}`"
    :segment="link?.segment"
    :title="link?.title"
    :url="link?.url"
  >
    <slot />
  </UiLink>
</template>

<script setup lang="ts">
import type { Link } from "~/types/links";

interface Props {
  kind?: "primary" | "secondary";
  link: Link;
}

withDefaults(defineProps<Props>(), {
  kind: "primary",
});
</script>

<style lang="scss" scoped>
@use "~/assets/scss/helpers/index.scss" as qiskit;

.ui-link-text {
  // &_none is intentionally not resolved

  &_primary,
  &_secondary {
    text-decoration: none;
  }

  &_primary {
    color: qiskit.$link-color;

    &:hover,
    &:focus,
    &:active {
      color: qiskit.$link-hover-color;
    }

    &:visited {
      color: qiskit.$link-visited-color;
    }
  }

  &_secondary {
    color: qiskit.$link-color-secondary;

    &:hover,
    &:focus,
    &:active {
      color: qiskit.$link-hover-color-secondary;
      text-decoration: underline;
    }

    &:visited {
      color: qiskit.$link-visited-color-secondary;
    }
  }
}
</style>
