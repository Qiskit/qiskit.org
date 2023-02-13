<template>
  <fieldset class="app-fieldset">
    <legend class="app-fieldset__label">
      {{ label }}
    </legend>
    <slot />
  </fieldset>
</template>

<script setup lang="ts">
interface Props {
  label: string
}

defineProps<Props>()
</script>

<style lang="scss">
.app-fieldset {
  margin-bottom: $spacing-07;

  &__label {
    margin-bottom: $spacing-05;
  }
}
</style>
