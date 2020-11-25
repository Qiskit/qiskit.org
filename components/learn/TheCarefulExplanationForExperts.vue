<template>
  <CarefulExplanation v-bind="$attrs">
    <template #summary>
      <h2 class="copy__subtitle">
        A Carefully Worded Summary of Quantum Computing for Experts
      </h2>
      <p class="copy__paragraph">
        The ability to control and manipulate matter on an atomic scale was a dream first shared by Richard Feynman in his speech, “There’s Plenty of Room at the Bottom,” in 1959. By the 80’s, this idea really began to pick up speed, and a new subject called Quantum Computing had begun to emerge.
      </p>
    </template>
    <p class="copy__paragraph">
      In the 90’s, Peter Shor presented, for the first time, an algorithm that if run on a quantum processor, could provide a substantial speedup to the fundamental computational limits set by classical physics. The possibilities of a quantum computer, from being able to speed up algorithms, to their ability to more reliably simulate quantum systems themselves, was enough of an incentive for scientists and engineers across multiple disciplines to begin to dedicate their professional lives to this end goal.
    </p>
    <p class="copy__paragraph">
      Given the rapid progress made in the field, it is hard to believe that it has only been a few years since Serge Haroche and David Wineland won the Nobel Prize in Physics in 2012 for “ground breaking experimental methods that enable measuring and manipulation of individual quantum systems”, and thus, fulfilled Feynman’s original proposal. We are now at a point where we are not only casual observers of quantum phenomena, but <em>designers</em> and <em>creators</em> of the quantum world.
    </p>
    <p class="copy__paragraph">
      There remain numerous, fundamental challenges in physics, computer science, and information theory that will need to be confronted before a fault tolerant, universal quantum computer is realized. However, it would have been very hard to predict the progress this community has made just a decade ago, and we would be hard-pressed to guess what the next ten years are going to look like.
    </p>
    <p class="copy__paragraph">
      Maybe now is the perfect time to get involved yourself, and we have provided all the tools you need here&mdash;real quantum machines, a programming framework through Qiskit, and a community that is happy to include you and answers any questions you may have along the way.
    </p>
  </CarefulExplanation>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class TheCarefulExplanationForExperts extends Vue { }
</script>
