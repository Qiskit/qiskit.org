<template>
  <ThePageHeader>
    Connect with the<br>
    <TypewriterEffect
      :values="[
        'enthusiasts',
        'advocates',
        'mentors',
        'experts'
      ]"
    />
    from within<br>
    the Qiskit community
  </ThePageHeader>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class TheAdvocatesHeader extends Vue { }
</script>
