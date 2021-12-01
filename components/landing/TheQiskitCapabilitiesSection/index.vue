<template>
  <article class="bx--grid page-section">
    <h2 v-text="title" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class TheQiskitCapabilitiesSection extends Vue {
  @Prop(String) title!: string
  @Prop(String) description!: string
}
</script>
