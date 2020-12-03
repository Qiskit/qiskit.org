<template>
  <ThePageHeader class="the-learn-header">
    Start your path towards learning
    <TypewriterEffect
      :values="[
        'Qiskit',
        'Python',
        'Quantum Computing',
        'Error Mitigation',
        'Quantum Hardware',
        'Quantum Algorithms',
        'Quantum Applications'
      ]"
    />
  </ThePageHeader>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class TheLearnHeader extends Vue { }
</script>
