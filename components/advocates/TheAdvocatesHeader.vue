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

@Component
export default class extends Vue { }
</script>
