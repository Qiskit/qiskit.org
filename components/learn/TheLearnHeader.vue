<template>
  <ThePageHeader class="the-learn-header">
    Start your path towards
    <br>learning
    <TypedWord
      :values="['Qiskit', 'Python', 'Quantum']"
    />
  </ThePageHeader>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import ThePageHeader from '~/components/ui/ThePageHeader.vue'
import TypedWord from '~/components/ui/TypedWord.vue'

@Component({ components: { ThePageHeader, TypedWord } })
export default class extends Vue { }
</script>
