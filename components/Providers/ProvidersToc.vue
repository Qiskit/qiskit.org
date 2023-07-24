<template>
  <nav class="providers-toc">
    <div class="providers-toc__entry" v-text="title" />
    <UiLink
      v-for="entry in entries"
      :key="entry.sectionId"
      class="providers-toc__entry"
      :class="{
        'providers-toc__entry_active': isActive(entry),
        'providers-toc__entry_second-level': entry.isSecondary,
      }"
      :url="`#${entry.sectionId}`"
      >{{ entry.title }}</UiLink
    >
  </nav>
</template>

<script setup lang="ts">
import { TableOfContentEntry } from "~/types/providers";

interface Props {
  activeSection: string;
  entries: TableOfContentEntry[];
  title: string;
}

const props = defineProps<Props>();

function isActive(entry: TableOfContentEntry): boolean {
  return !!(entry.sectionId && entry.sectionId === props.activeSection);
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.providers-toc {
  display: flex;
  flex-direction: column;

  &__entry {
    color: qiskit.$text-color-light;
    text-decoration: none;
    margin-bottom: carbon.$spacing-06;

    &_second-level {
      &:hover {
        text-decoration: underline;
      }

      &::before {
        content: "-";
        color: qiskit.$text-active-color;
        font-weight: bold;
        display: inline-block;
        padding-right: carbon.$spacing-04;
      }
    }

    &_active {
      font-weight: bold;
    }

    // A way for expressing combinations of multiple BEM modifiers in SASS.
    // Inspiration at:
    // https://stackoverflow.com/questions/41181012/scss-bem-style-children-structure-when-parent-has-modificator
    // https://stackoverflow.com/questions/47652849/matching-multiple-bem-modifiers-in-sass/47653943#47653943
    &_active#{&} {
      &_second-level::before {
        content: "■";
      }
    }
  }
}
</style>
