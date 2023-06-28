<template>
  <fieldset class="ui-fieldset">
    <legend class="ui-fieldset__label">
      {{ label }}
    </legend>
    <slot />
  </fieldset>
</template>

<script setup lang="ts">
interface Props {
  label: string;
}

defineProps<Props>();
</script>

<style lang="scss">
@use "~/assets/scss/carbon.scss";

.ui-fieldset {
  margin-bottom: carbon.$spacing-07;

  &__label {
    margin-bottom: carbon.$spacing-05;
  }
}
</style>
