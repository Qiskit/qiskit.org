<template>
  <article class="page-section-container">
    <div
      :class="{
        'page-section': true,
        'page-section--reversed': extraPosition == 'start',
      }"
    >
      <div
        :class="{
          'copy-container': true,
          'copy-container--alone': !this.$slots.extra
        }"
      >
        <slot />
      </div>
      <aside
        v-if="this.$slots.extra"
        class="extra-container importance--decoration"
      >
        <slot name="extra" />
      </aside>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop({ type: String, default: 'end' }) extraPosition;
}
</script>

<style lang="scss" scoped>
.page-section-container {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.page-section {
  display: flex;
  flex-direction: row;

  & > * {
    width: 50%;
  }

  &--reversed {
    flex-direction: row-reverse;
  }
}

.copy-container {
  width: 50%;

  &--alone {
    width: 100%;
  }
}

.extra-container {
  width: 50%;
}

@media (max-width: 600px) {
  .importance--decoration {
    display: none;
  }

  .copy-container {
    width: 100%;
  }
}
</style>
