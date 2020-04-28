<template>
  <main class="element aqua-element">
    <ElementPresentation
      class="element__presentation"
      :title="title"
      image="/images/qiskit-aqua-logo.svg"
      :description="description"
      sources="https://github.com/Qiskit/qiskit-aqua"
      segment-action="Qiskit Aqua: GitHub Repository"
    />
    <PageSection class="element__body" framed>
      <article class="element__copy">
        <h2 class="element__header">
          About
        </h2>
        <p class="element__paragraph">
          Qiskit Aqua contains a library of cross-domain quantum algorithms
          upon which applications for near-term quantum computing can be built.
          Aqua is designed to be extensible, and employs a pluggable framework
          where quantum algorithms can easily be added. It currently allows the
          user to experiment on chemistry, AI, optimization and finance
          applications for near-term quantum computers.
        </p>
        <h2 class="element__header">
          Stack
        </h2>
        <SoftwareStack :stack="elementStack" />
      </article>
      <template #extra>
        <article class="element__example">
          <h2 class="element__header">
            Example
          </h2>
          <SyntaxHighlight
            :label="title"
            :code="codeExample"
          />
        </article>
      </template>
    </PageSection>
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitElementPage from '~/components/logic/QiskitElementPage.vue'
import ElementPresentation from '~/components/elements/ElementPresentation.vue'
import PageSection from '~/components/ui/PageSection.vue'
import SoftwareStack, { StackLayer } from '~/components/ui/SoftwareStack.vue'
import SyntaxHighlight from '~/components/ui/SyntaxHighlight.vue'
import Cta from '~/components/ui/Cta.vue'

@Component({
  components: {
    Cta,
    ElementPresentation,
    PageSection,
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

  elementStack: Array<StackLayer> = [
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
  ]

  codeExample: string = `from qiskit import Aer
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

print(result["result"])`
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/element.scss';

.aqua-element {
  --community-header__background-color: rgb(219, 251, 251);
  --community-header__text-color: $inverse-01;
}
</style>
