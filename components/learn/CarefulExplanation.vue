<template>
  <article>
    <slot name="summary" />
    <template v-if="compact">
      <p class="copy__link" style="cursor: pointer" @click="$emit('ctaClick')">
        Read more
      </p>
    </template>
    <slot v-else />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop({ type: Boolean, default: false }) compact!: boolean
  @Prop({ type: String, default: '#' }) url!: string
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/copy.scss';
</style>
