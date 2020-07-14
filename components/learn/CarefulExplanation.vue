<template>
  <article>
    <slot name="summary" />
    <template v-if="compact">
      <AppCta :url="url" target="_blank">
        Read more
      </AppCta>
    </template>
    <slot v-else />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import AppCta from '~/components/ui/AppCta.vue'

@Component({ components: { AppCta } })
export default class extends Vue {
  @Prop({ type: Boolean, default: false }) compact!: boolean
  @Prop({ type: String, default: '#' }) url!: string
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/copy.scss';
</style>
