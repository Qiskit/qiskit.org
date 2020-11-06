<template>
  <ThePageHeader>
    Connect with the
    <TypewriterEffect
      :values="[
        'enthusiasts',
        'advocates',
        'mentors',
        'experts'
      ]"
    /><br>
    from within the Qiskit community
  </ThePageHeader>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import ThePageHeader from '~/components/ui/ThePageHeader.vue'
import TypewriterEffect from '~/components/ui/TypewriterEffect.vue'

@Component({ components: { ThePageHeader, TypewriterEffect } })
export default class extends Vue { }
</script>

<style lang="scss">
</style>
