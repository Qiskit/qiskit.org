<template>
  <article class="page-section">
    <div
      class="page-section__layout"
      :class="{
        'page-section__layout_reversed': asidePosition == 'start',
        'page-section__layout_framed': framed
      }"
    >
      <div
        class="page-section__main-content"
        :class="{
          'page-section__main-content_alone': !this.$slots.aside
        }"
      >
        <slot />
      </div>
      <aside
        v-if="this.$slots.aside"
        class="page-section__aside"
      >
        <slot name="aside" />
      </aside>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class PageSection extends Vue {
  @Prop({ type: String, default: 'end' }) asidePosition!: 'start' | 'end';
  @Prop({ type: Boolean, default: false }) framed!: boolean;
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.page-section {
  padding-top: $spacing-09;
  padding-bottom: $spacing-09;

  &__layout {
    display: flex;
    flex-direction: row;

    &_reversed {
      flex-direction: row-reverse;
    }

    &_framed {
      @include framed();
    }
  }

  &__main-content {
    width: 50%;

    &_alone {
      width: 100%;
    }

    @include mq($until: medium) {
      width: 100%;
    }
  }

  &__aside {
    width: 50%;

    @include mq($until: medium) {
      display: none;
    }
  }
}
</style>
