<template>
  <article>
    <slot name="summary" />
    <template v-if="compact">
      <AppCta
        kind="ghost"
        v-bind="readMoreLink"
      />
    </template>
    <slot v-else />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class CarefulExplanation extends Vue {
  @Prop({ type: Boolean, default: false }) compact!: boolean
  @Prop({ type: String, default: '#' }) url!: string

  readMoreLink = {
    url: this.url,
    label: 'Read more'
  }
}
</script>
