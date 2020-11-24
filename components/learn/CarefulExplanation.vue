<template>
  <article>
    <slot name="summary" />
    <template v-if="compact">
      <AppCta
        kind="ghost"
        :url="url"
      >
        Read more
      </AppCta>
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
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/copy.scss';
</style>
