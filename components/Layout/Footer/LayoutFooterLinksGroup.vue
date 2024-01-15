<template>
  <section class="layout-footer-links-group">
    <h2
      class="h4 layout-footer-links-group__title"
      :class="`layout-footer-links-group__title_theme_${theme}`"
    >
      {{ title }}
    </h2>
    <nav :class="{ 'layout-footer-links-group__icons-group': iconsOnly }">
      <UiLinkText
        v-for="element in elements"
        :key="element.url"
        class="caption layout-footer-links-group__link"
        :class="`layout-footer-links-group__link_theme_${theme}`"
        kind="secondary"
        :link="element"
      >
        <component
          :is="element.icon"
          v-if="iconsOnly"
          :class="`layout-footer-links-group__icon-link layout-footer-links-group__icon-link_theme_${theme}`"
        />
        <span v-else>{{ element.label }}</span>
      </UiLinkText>
    </nav>
  </section>
</template>

<script setup lang="ts">
import { type IconLink } from "~/types/links";

interface Props {
  title: string;
  elements: IconLink[];
  iconsOnly?: boolean;
  theme?: "light" | "dark";
}

withDefaults(defineProps<Props>(), {
  iconsOnly: false,
  theme: "light",
});
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.layout-footer-links-group {
  &__title {
    margin-bottom: carbon.$spacing-06;

    &_theme_light {
      color: qiskit.$text-color-lighter;
    }

    &_theme_dark {
      color: qiskit.$text-color-white;
    }
  }

  &__link {
    text-decoration: none;
    display: inline-block;
    width: 100%;
    margin-bottom: carbon.$spacing-04;

    &_theme_light {
      color: qiskit.$text-color-lighter;

      &:active,
      &:visited,
      &:hover {
        color: qiskit.$text-color-lighter;
      }
    }

    &_theme_dark {
      color: qiskit.$text-color-white;

      &:active,
      &:visited,
      &:hover {
        color: qiskit.$text-color-white;
      }
    }
  }

  &__icons-group {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0 carbon.$spacing-05;
    justify-items: start;
  }

  &__icon-link {
    &_theme_light {
      color: qiskit.$text-color-lighter;
    }

    &_theme_dark {
      color: qiskit.$text-color-white;
    }
  }
}
</style>
