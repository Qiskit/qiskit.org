<template>
  <main>
    <LegacyPresentation
      :title="title"
      image="/images/qiskit-terra-logo.svg"
      :description="description"
      sources="https://github.com/Qiskit/qiskit-terra"
      segment-action="Qiskit Terra: GitHub Repository"
    />
    <LegacySection>
      <article>
        <h2>About</h2>
        <p>
          Qiskit Terra provides the foundational roots for our software stack.
          Within Terra is a set of tools for composing quantum programs at the
          level of circuits and pulses, optimizing them for the constraints of
          a particular physical quantum processor, and managing the batched
          execution of experiments on remote-access backends. Terra is
          modularly constructed, simplifying the addition of extensions for
          circuit optimizations and backends. We welcome your contributions!
        </p>
        <h2>Stack</h2>
        <SoftwareStack
          :stack="[
            {
              title: 'User Inputs (Circuits, and Scheules)',
              description: 'Quantum Circuit, Pulse Schedule'
            },
            {
              title: 'Transpiler',
              description: 'Optimization Passes, Third Party'
            },
            {
              title: 'Providers',
              description: 'Qiskit Aer, IBM Q, Third Party'
            },
            {
              title: 'Visualization and Quantum Information Tools',
              description: 'Histogram, State, Unitary, Entanglement, ...'
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
    </LegacySection>
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitElementPage from '~/components/qiskit/QiskitElementPage.vue'
import LegacyPresentation from '~/components/headers/LegacyPresentation.vue'
import LegacySection from '~/components/sections/LegacySection.vue'
import SoftwareStack from '~/components/qiskit/SoftwareStack.vue'
import SyntaxHighlight from '~/components/qiskit/SyntaxHighlight.vue'
import Cta from '~/components/ctas/Cta.vue'

@Component({
  layout: 'legacy',
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
  title = 'Qiskit Terra'
  description = 'A solid foundation for quantum computing'
}
</script>

<style lang="scss">
@import '~/assets/scss/legacy-elements.scss';
</style>

<style lang="scss" scoped>
.legacy-presentation {
  --legacy-presentation-color: rgb(224, 219, 218);
  --legacy-presentation-text-color: black;
}

.legacy-section {
  background-color: white;
}
</style>
