<template>
  <section>
    <h2 class="copy__title" v-text="title" />
    <AppMosaic :mosaic-elements="mosaicElements" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { MosaicElement } from '~/components/ui/AppMosaic.vue'

@Component
export default class WhatIsThisEvent extends Vue {
  @Prop(Array) mosaicElements!: MosaicElement[]
  @Prop(String) title!: string
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/copy.scss';
</style>
