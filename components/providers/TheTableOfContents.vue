<template>
  <nav class="the-table-of-contents">
    <!-- Needed to avoid multiline to remove blank space around the content. -->
    <!-- eslint-disable vue/multiline-html-element-content-newline -->
    <BasicLink
      v-for="entry in entries"
      :key="entry.sectionId || entry.title"
      class="the-table-of-contents__entry"
      :class="{
        'the-table-of-contents__entry_active': isActive(entry),
        'the-table-of-contents__entry_second-level': entry.isSecondary
      }"
      :url="entry.sectionId && `#${entry.sectionId}`"
    >{{ entry.title }}</BasicLink>
    <!-- eslint-enable -->
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { TableOfContentEntry } from '~/constants/providersContent'

@Component
export default class TheTableOfContents extends Vue {
  @Prop({ type: Array, default: () => [] }) entries!: TableOfContentEntry[]
  @Prop(String) activeSection!: string

  isActive (entry: TableOfContentEntry): boolean {
    return !!(entry.sectionId && (entry.sectionId === this.activeSection))
  }
}
</script>

<style lang="scss" scoped>
.the-table-of-contents {
  display: flex;
  flex-direction: column;

  &__entry {
    color: $text-color-light;
    text-decoration: none;
    margin-bottom: $spacing-06;

    &_second-level {
      &:hover {
        text-decoration: underline;
      }

      &::before {
        content: "-";
        color: $text-active-color;
        font-weight: bold;
        display: inline-block;
        padding-right: $spacing-04;
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
