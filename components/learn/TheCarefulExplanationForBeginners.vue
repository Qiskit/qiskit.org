<template>
  <CarefulExplanation v-bind="$attrs">
    <template #summary>
      <h2 class="copy__subtitle">
        A Carefully Worded Summary of Quantum Computing for Beginners
      </h2>
      <p class="copy__paragraph">
        Physics is an attempt to describe the behaviour of the world around us. Around the early 20th century, through delicate experiments in laboratories, physicists saw strange behaviours which could not be explained by their current understanding of physics. These discoveries led to the development of the more complete ‘quantum’ physics, which was able to describe this behaviour very successfully.
      </p>
    </template>
    <p class="copy__paragraph">
      Quantum physics explained behaviour previously thought impossible, and it was later discovered that this could be exploited to solve specific computational problems that were also previously thought impossible. Since this behaviour occurs only in delicate laboratory experiments, performing these new computations require delicate machines known as quantum computers. We are still learning how to build quantum computers, and it will be a while before they are large and stable enough to be useful, but progress is promising and the science is fascinating.
    </p>
    <p class="copy__paragraph">
      Quantum computing is a great way to dip your toes into quantum physics, and we have all the tools you need to learn right here: real quantum computers, a programming framework through Qiskit, and a community that is happy to include you and answer any questions you may have along the way.
    </p>
  </CarefulExplanation>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class TheCarefulExplanationForBeginners extends Vue {}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/copy.scss';
</style>
