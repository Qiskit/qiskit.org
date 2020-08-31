<template>
  <nav class="the-table-of-contents">
    <AppLink
      v-for="entry in entries"
      :key="entry.sectionId || entry.label"
      class="the-table-of-contents__entry"
      :class="{
        'the-table-of-contents__entry_active': isActive(entry),
        'the-table-of-contents__entry_second-level': entry.isSecondary
      }"
      :url="entry.sectionId && `#${entry.sectionId}`"
    >{{ entry.label }}</AppLink>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import AppLink from '~/components/ui/AppLink.vue'
import { TableOfContentEntry } from '~/constants/overviewContent'

@Component({
  components: { AppLink }
})
export default class extends Vue {
  @Prop({ type: Array, default: [] }) entries!: Array<TableOfContentEntry>
  @Prop(String) activeSection!: string

  isActive (entry: TableOfContentEntry): boolean {
    return !!(entry.sectionId && (entry.sectionId === this.activeSection))
  }
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.the-table-of-contents {
  display: flex;
  flex-direction: column;

  &__entry {
    @include type-style('body-long-01');
    color: $cool-gray-80;
    text-decoration: none;
    margin-bottom: $layout-02;

    &_second-level {
      &:hover {
        text-decoration: underline;
      }

      &::before {
        content: "-";
        color: $purple-70;
        font-weight: bold;
        display: inline-block;
        padding-right: $layout-02;
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
