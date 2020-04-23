<template>
  <main class="element terra-element">
    <ElementPresentation
      class="element__presentation"
      :title="title"
      image="/images/qiskit-terra-logo.svg"
      :description="description"
      sources="https://github.com/Qiskit/qiskit-terra"
      segment-action="Qiskit Terra: GitHub Repository"
    />
    <PageSection class="element__body" framed>
      <article class="element__copy">
        <h2 class="element__header">
          About
        </h2>
        <p class="element__paragraph">
          Qiskit Terra provides the foundational roots for our software stack.
          Within Terra is a set of tools for composing quantum programs at the
          level of circuits and pulses, optimizing them for the constraints of
          a particular physical quantum processor, and managing the batched
          execution of experiments on remote-access backends. Terra is
          modularly constructed, simplifying the addition of extensions for
          circuit optimizations and backends. We welcome your contributions!
        </p>
        <h2 class="element__header">
          Stack
        </h2>
        <SoftwareStack :stack="elementStack" />
      </article>
      <template #extra>
        <article class="element_example">
          <h2 class="element__header">
            Example
          </h2>
          <!-- eslint-disable vue/multiline-html-element-content-newline -->
          <!-- eslint-disable vue/html-indent -->
          <SyntaxHighlight
            lang="python"
            :label="title"
          >from qiskit import QuantumCircuit, Aer, execute

  qc = QuantumCircuit(2, 2)

  qc.h(0)
  qc.cx(0, 1)
  qc.measure([0, 1], [0, 1])

  backend = Aer.get_backend('qasm_simulator')
  job_sim = execute(qc, backend)
  sim_result = job_sim.result()

  print(sim_result.get_counts(qc))</SyntaxHighlight>
          <!-- eslint-enable vue/html-indent -->
          <!-- eslint-enable vue/multiline-html-element-content-newline -->
        </article>
      </template>
    </PageSection>
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitElementPage from '~/components/logic/QiskitElementPage.vue'
import ElementPresentation from '~/components/elements/ElementPresentation.vue'
import PageSection from '~/components/ui/sections/PageSection.vue'
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
  title = 'Qiskit Terra'
  description = 'A solid foundation for quantum computing'
  routeName = 'terra-element'
  elementStack: Array<StackLayer> = [
    {
      title: 'User Inputs (Circuits, and Schedules)',
      description: 'Quantum Circuit, Pulse Schedule'
    },
    {
      title: 'Transpiler',
      description: 'Optimization Passes, Third Party'
    },
    {
      title: 'Providers',
      description: 'Qiskit Aer, IBM Quantum, Third Party'
    },
    {
      title: 'Visualization and Quantum Information Tools',
      description: 'Histogram, State, Unitary, Entanglement, ...'
    }
  ]
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/elements.scss';

.terra-element {
  --community-header__background-color: rgb(224, 219, 218);
  --community-header__text-color: $inverse-01;
}
</style>
