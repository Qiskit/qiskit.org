<template>
  <nav class="ui-link-back">
    <UiLink
      class="ui-link-back__link"
      :class="`ui-link-back__link_${theme}`"
      :url="url"
    >
      <ArrowLeft16 class="ui-link-back__icon" /><span v-text="label" />
    </UiLink>
  </nav>
</template>

<script setup lang="ts">
import ArrowLeft16 from "@carbon/icons-vue/lib/arrow--left/16";

interface Props {
  label: string;
  theme?: "light" | "dark";
  url: string;
}

withDefaults(defineProps<Props>(), {
  theme: "light",
});
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.ui-link-back {
  @include qiskit.contained;

  padding-bottom: carbon.$spacing-06;
  padding-top: carbon.$spacing-06;

  &__link {
    align-items: center;
    display: flex;
    width: fit-content;

    &_dark {
      color: qiskit.$text-color-white;
    }

    &_light {
      color: qiskit.$link-color-tertiary;
    }
  }

  &__icon {
    margin-right: carbon.$spacing-05;
  }
}
</style>
