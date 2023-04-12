<template>
  <nav class="table-of-contents">
    <!-- Needed to avoid multiline to remove blank space around the content. -->
    <!-- eslint-disable vue/multiline-html-element-content-newline -->
    <UiBasicLink
      v-for="entry in entries"
      :key="entry.sectionId || entry.label"
      class="table-of-contents__entry"
      :class="{
        'table-of-contents__entry_active': isActive(entry),
        'table-of-contents__entry_second-level': entry.isSecondary,
      }"
      :url="entry.sectionId && `#${entry.sectionId}`"
      >{{ entry.label }}</UiBasicLink
    >
    <!-- eslint-enable -->
  </nav>
</template>

<script setup lang="ts">
import { TableOfContentEntry } from "~/constants/overviewContent";

interface Props {
  entries: Array<TableOfContentEntry>;
  activeSection: string;
}

const props = defineProps<Props>();

function isActive(entry: TableOfContentEntry): boolean {
  return !!(entry.sectionId && entry.sectionId === props.activeSection);
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.table-of-contents {
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
        padding-right: carbon.$spacing-06;
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
