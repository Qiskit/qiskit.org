<template>
  <ThePageHeader class="the-learn-header">
    Join events from the world&rsquo;s
    <TypewriterEffect
      :values="[
        'largest',
      ]"
    />
    quantum computing community
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
