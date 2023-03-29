<template>
  <UiBasicLink class="link" :class="`link_${kind}`" v-bind="$attrs">
    <slot />
  </UiBasicLink>
</template>

<script setup lang="ts">
interface Props {
  kind?: "primary" | "secondary";
}

withDefaults(defineProps<Props>(), {
  kind: "primary",
});
</script>

<style lang="scss" scoped>
@use "~/assets/scss/helpers/index.scss" as qiskit;

.link {
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
