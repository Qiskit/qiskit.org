<template>
  <AppPageHeader bg-grid fixed-height>
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
  </AppPageHeader>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class TheLearnHeader extends Vue { }
</script>
