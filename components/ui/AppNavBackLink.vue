<template>
  <nav class="app-nav-back-link">
    <UiBasicLink
      class="app-nav-back-link__link"
      :class="`app-nav-back-link__link_${theme}`"
      :url="url"
    >
      <ArrowLeft16 class="app-nav-back-link__icon" /><span v-text="label" />
    </UiBasicLink>
  </nav>
</template>

<script setup lang="ts">
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

.app-nav-back-link {
  @include contained();

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
