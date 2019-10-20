<template>
  <main>
    <LegacyPresentation
      :title="title"
      image="images/qiskit-terra-logo.svg"
      :description="description"
      sources="https://github.com/Qiskit/qiskit-terra"
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
      </article>
      <article>
        <h2>Example</h2>
        <pre v-highlightjs><code class="python">from qiskit import QuantumCircuit, Aer, execute

qc = QuantumCircuit(2, 2)

qc.h(0)
qc.cx(0, 1)
qc.measure([0, 1], [0, 1])

backend = Aer.get_backend('qasm_simulator')
job_sim = execute(qc, backend)
sim_result = job_sim.result()

print(sim_result.get_counts(qc))</code></pre>
      </article>
    </LegacySection>
    <LegacySection>
      <article>
        <h2>Stack</h2>
        <ul class="stack-list">
          <li class="element">
            <p class="stack-list__title">User Inputs (Circuits, and Scheules)</p>
            <p class="stack-list__description">Quantum Circuit, Pulse Schedule</p>
          </li>
          <li class="element">
            <p class="stack-list__title">Transpiler</p>
            <p class="stack-list__description">Optimization Passes, Third Party</p>
          </li>
          <li class="element">
            <p class="stack-list__title">Providers</p>
            <p class="stack-list__description">Qiskit Aer, IBM Q, Third Party</p>
          </li>
          <li class="element dot">
            <p class="stack-list__title">Visualization and Quantum Information Tools</p>
            <p class="stack-list__description">Histogram, State, Unitary, Entanglement, ...</p>
          </li>
        </ul>
      </article>
    </LegacySection>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import LegacyPresentation from '~/components/headers/LegacyPresentation.vue'
import LegacySection from '~/components/sections/LegacySection.vue'
import Cta from '~/components/ctas/Cta.vue'

@Component({
  layout: 'legacy',
  components: {
    Cta,
    LegacyPresentation,
    LegacySection
  },
  head(this: QiskitTerra) {
    return {
      title: `${this.title} | ${this.description}`,
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/atom-one-dark.min.css' }
      ]
    }
  }
})
export default class QiskitTerra extends Vue {
  title: String = 'Qiskit Terra'
  description: String = 'A solid foundation for quantum computing'
}
</script>

<style lang="scss">
.legacy-presentation {
  --legacy-presentation-color: rgb(224, 219, 218);
  --legacy-presentation-text-color: black;
}

code {
  font-size: 0.8rem;
}
</style>

<style lang="scss" scoped>

.legacy-section {
  .stack-list {
    list-style: none;

    li {
      border-left: 2px solid black;
      padding-left: 1rem;
      padding-bottom: 1.5rem;
      position: relative;

      &:last-child {
        border: none;

        .stack-list__title::before {
          content: '';
          display: inline-block;
          position: absolute;
          width: 0.8rem;
          height: 0.8rem;
          background-color: black;
          top: 0.2rem;
          left: -1.35rem;
          border-radius: 50%;
        }
      }
    }

    &__title, &__description {
      padding: 0;
      margin: 0;
      line-height: normal;
      position: relative;
      top: -0.2rem;
    }

    &__title {
      &::before {
        content: '';
        display: inline-block;
        position: absolute;
        width: 0.25rem;
        height: 50%;
        background-color: black;
        top: 0.2rem;
        left: -1rem;
      }
    }

    &__description {
      font-size: 0.7rem;
    }
  }
}
</style>
