<template>
  <ThePageHeader class="the-learn-header">
    Start your path towards<br>
    learning <RelevantWord>Qiskit</RelevantWord>
  </ThePageHeader>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import ThePageHeader from '~/components/ui/ThePageHeader.vue'
import RelevantWord from '~/components/ui/RelevantWord.vue'

@Component({ components: { ThePageHeader, RelevantWord } })
export default class extends Vue { }
</script>
