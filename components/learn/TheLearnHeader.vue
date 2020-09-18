<template>
  <ThePageHeader class="the-learn-header">
    Start your path towards
    <br>learning
    <TypewriterEffect
      :values="['Qiskit', 'Python', 'Quantum']"
    />
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
