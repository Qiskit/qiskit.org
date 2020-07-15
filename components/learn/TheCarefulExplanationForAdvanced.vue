<template>
  <CarefulExplanation v-bind="$attrs" v-on="$listeners">
    <template #title>
      <h2 class="copy__subtitle">
        A Carefully Worded Summary of Quantum Computing for Advanced
      </h2>
    </template>
    <template #summary>
      <p class="copy__paragraph">
        There are many misconceptions about quantum computers, this is understandable since the science is exciting and potentially very useful, but is unfortunately not easily accessible to someone without the appropriate background. Part of the problem is that some quantum mechanical concepts cannot be analogised to everyday experiences, so that has been avoided here.
      </p>
    </template>
    <p class="copy__paragraph">
      To understand why quantum computing is useful we need to explain how quantum mechanics came about. Before the development of quantum mechanics, physicists described the world around us using mathematical models that we now know as 'Classical Mechanics'.
    </p>
    <p class="copy__paragraph">
      In the early 1900s, physicists carried out some experiments that classical mechanics could not explain: these results were impossible according to classical mechanics. A more accurate model was needed that could predict these results and we now call this new model 'Quantum Mechanics'.
    </p>
    <p class="copy__paragraph">
      Classical mechanics is very accurate for a large number of applications, and we normally only see the disagreements between classical and quantum mechanics in very specific experiments, for example interactions on the atomic scale. We say that atoms and electrons are in 'quantum states' which means a state described by quantum mechanics. As you can imagine, it is very difficult to manipulate single atoms or electrons and as a result it is generally very difficult to manipulate quantum states.
    </p>
    <p class="copy__paragraph">
      Around the 1950s &amp; '60s, computer science as a distinct discipline took off and theoretical computer scientists aimed to discover the limitations of computers. Since these computers could not manipulate quantum states, and there was not any known advantage of them being able to do so, these scientists used classical physics to create algorithms and determine how quickly certain problems could be solved.
    </p>
    <p class="copy__paragraph">
      As mentioned before, classical mechanics determined some results impossible that quantum mechanics does not, and at the beginning of the 1980s it became apparent that a computer that can manipulate quantum states (quantum computer) would be able to perform certain calculations more efficiently than believed on a conventional (classical) computer.
    </p>
    <p class="copy__paragraph">
      Currently we only know how to use quantum computers to improve a handful of algorithms and building a machine precise enough to manipulate quantum states is difficult and expensive. There are only a few working quantum computers at the time of writing, and they are still in the experimental stages.
    </p>
    <p class="copy__paragraph">
      What Can Quantum Computers Be Used For?
    </p>
    <p class="copy__paragraph">
      As mentioned before, quantum computers can perform certain calculations much faster than a classical computer. There are problems that would benefit from quantum computers that appear in many areas from drug design to cryptography.
    </p>
    <p class="copy__paragraph">
      Building a quantum computer would not only be useful to solve computational problems, but also to test our theories of quantum physics. And as with all scientific research, the process of building a working quantum computer helps advance technology and materials sciences.
    </p>
  </CarefulExplanation>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import CarefulExplanation from '~/components/learn/CarefulExplanation.vue'

@Component({ components: { CarefulExplanation } })
export default class extends Vue { }
</script>
