<template>
  <main>
    <LegacyPresentation
      :title="title"
      image="/images/qiskit-aer-logo.svg"
      :description="description"
      sources="https://github.com/Qiskit/qiskit-aer"
      segment-action="Qiskit Aer: GitHub Repository"
    />
    <LegacySection>
      <article>
        <h2>About</h2>
        <p>
          Qiskit Aer provides a high performance simulator framework for the
          Qiskit software stack. It contains optimized C++ simulator backends
          for executing circuits compiled in Qiskit Terra, and tools for
          constructing highly configurable noise models for performing
          realistic noisy simulations of the errors that occur during execution
          on real devices.
        </p>
        <h2>Stack</h2>
        <SoftwareStack
          :stack="[
            {
              title: 'Qiskit Terra',
              description: 'Quantum Circuit'
            },
            {
              title: 'Noise Simulation (QasmSimulator Only)',
              description: 'NoiseModel, QuantumErrors, ReadoutErrors'
            },
            {
              title: 'Backends',
              description: 'QasmSimulator, StatevectorSimulator, UnitarySimulator'
            },
            {
              title: 'Job and Result',
              description: 'Counts, Memory, Statevector, Unitary, Snapshots'
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
        >from qiskit import QuantumCircuit, execute, Aer, IBMQ
from qiskit.providers.aer.noise import NoiseModel

# Choose a real device to simulate
IBMQ.load_account()
provider = IBMQ.get_provider(group='open')
device = provider.get_backend('ibmq_16_melbourne')
coupling_map = device.configuration().coupling_map

# Generate an Aer noise model for device
noise_model = NoiseModel.from_backend(properties)
basis_gates = noise_model.basis_gates

# Generate a quantum circuit
qc = QuantumCircuit(2, 2)

qc.h(0)
qc.cx(0, 1)
qc.measure([0, 1], [0, 1])

# Perform noisy simulation
backend = Aer.get_backend('qasm_simulator')
job_sim = execute(qc, backend,
                  coupling_map=coupling_map,
                  noise_model=noise_model,
                  basis_gates=basis_gates)

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
  title = 'Qiskit Aer'
  description = 'A high performance simulator framework for quantum circuits'
  routeName = 'aer-element'
}
</script>

<style lang="scss">
@import '~/assets/scss/legacy-elements.scss';
</style>

<style lang="scss" scoped>
.legacy-presentation {
  --legacy-presentation-color: rgb(179, 230, 255);
  --legacy-presentation-text-color: $inverse-01;
}

.legacy-section {
  background-color: $inverse-02;
}
</style>
