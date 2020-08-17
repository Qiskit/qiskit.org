<template>
  <nav class="the-table-of-contents">
    <AppLink
      v-for="entry in entries"
      :key="entry.label"
      class="the-table-of-contents__entry"
      :class="{ 'the-table-of-contents__entry_second-level': entry.isSecondary }"
      :url="entry.url"
    >
      {{ entry.label }}
    </AppLink>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import AppLink from '~/components/ui/AppLink.vue'

@Component({
  components: { AppLink }
})
export default class extends Vue {
  @Prop(Array) entries
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

    @include mq($until: large) {
      @include type-style('label-01');
    }

    &:hover {
      text-decoration: underline;
    }

    &_second-level {
      &::before {
        content: "-";
        color: $purple-70;
        font-weight: bold;
        display:inline-block;
        padding-right: $layout-02;
      }
    }
  }
}
</style>
