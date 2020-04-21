<template>
  <main>
    <LegacyPresentation
      :title="title"
      image="/images/qiskit-aqua-logo.svg"
      :description="description"
      sources="https://github.com/Qiskit/qiskit-aqua"
      segment-action="Qiskit Aqua: GitHub Repository"
    />
    <LegacySection>
      <article>
        <h2>About</h2>
        <p>
          Qiskit Aqua contains a library of cross-domain quantum algorithms
          upon which applications for near-term quantum computing can be built.
          Aqua is designed to be extensible, and employs a pluggable framework
          where quantum algorithms can easily be added. It currently allows the
          user to experiment on chemistry, AI, optimization and finance
          applications for near-term quantum computers.
        </p>
        <h2>Stack</h2>
        <SoftwareStack
          :stack="[
            {
              title: 'Qiskit Aqua Translators',
              description: 'Chemistry, AI, Optimization, Finance'
            },
            {
              title: 'Quantum Algorithms',
              description: 'QPE, Grover, HHL, QSVM, VQE, QAOA, ...'
            },
            {
              title: 'Qiskit Terra',
              description: 'Compile Circuits'
            },
            {
              title: 'Providers',
              description: 'Qiskit Aer, IBM Quantum, Third Party'
            }
          ]"
        />
      </article>
      <article>
        <h2>Example</h2>
        <!-- eslint-disable vue/multiline-html-element-content-newline -->
        <!-- eslint-disable vue/html-indent -->
        <SyntaxHighlight
          lang="python"
          :label="title"
        >from qiskit import Aer
from qiskit.aqua.components.oracles import LogicalExpressionOracle
from qiskit.aqua.algorithms import Grover

sat_cnf = """
c Example DIMACS 3-sat
p cnf 3 5
-1 -2 -3 0
1 -2 3 0
1 2 -3 0
1 -2 -3 0
-1 2 3 0
"""

backend = Aer.get_backend('qasm_simulator')
oracle = LogicalExpressionOracle(sat_cnf)
algorithm = Grover(oracle)
result = algorithm.run(backend)

print(result["result"])</SyntaxHighlight>
        <!-- eslint-enable vue/html-indent -->
        <!-- eslint-enable vue/multiline-html-element-content-newline -->
      </article>
    </LegacySection>
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitElementPage from '~/components/qiskit/QiskitElementPage.vue'
import LegacyPresentation from '~/components/elements/LegacyPresentation.vue'
import LegacySection from '~/components/sections/LegacySection.vue'
import SoftwareStack from '~/components/qiskit/SoftwareStack.vue'
import SyntaxHighlight from '~/components/qiskit/SyntaxHighlight.vue'
import Cta from '~/components/ui/Cta.vue'

@Component({
  components: {
    Cta,
    LegacyPresentation,
    LegacySection,
    SoftwareStack,
    SyntaxHighlight
  },
  head (this: QiskitElementPage) {
    return {
      title: `${this.title} | ${this.description}`,
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/atom-one-dark.min.css' }
      ]
    }
  }
})
export default class extends QiskitElementPage {
  title = 'Qiskit Aqua'
  description = 'Algorithms for quantum computing applications'
  routeName = 'aqua-element'
}
</script>

<style lang="scss">
@import '~/assets/scss/legacy-elements.scss';
</style>

<style lang="scss" scoped>
.legacy-presentation {
  --legacy-presentation-color: rgb(219, 251, 251);
  --legacy-presentation-text-color: $inverse-01;
}

.legacy-section {
  background-color: $inverse-02;
}
</style>
