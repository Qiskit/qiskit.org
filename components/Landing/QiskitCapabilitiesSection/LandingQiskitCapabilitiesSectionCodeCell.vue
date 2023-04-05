<template>
  <code class="code-cell">
    <div
      class="code-cell__block"
      :class="{ 'code-cell__block_active': activeBlocks[0] }"
    >
      <pre>import qiskit</pre>
      <pre>&nbsp;</pre>
      <pre><span class="code-cell__comment"># create circuit with Qiskit quantum circuit libraries</span></pre>
      <pre class="code-cell__line">
quantum_circuit = qiskit.circuit.library.QuantumVolume(5)</pre
      >
      <pre class="code-cell__line">quantum_circuit.measure_all()</pre>
      <pre class="code-cell__line">quantum_circuit.draw()</pre>
      <pre>&nbsp;</pre>
    </div>
    <div
      class="code-cell__block"
      :class="{ 'code-cell__block_active': activeBlocks[1] }"
    >
      <pre><span class="code-cell__comment"># select simulator backend</span></pre>
      <pre>from qiskit import BasicAer</pre>
      <pre>&nbsp;</pre>
      <pre>backend = BasicAer.get_backend('qasm_simulator')</pre>
      <pre>&nbsp;</pre>
      <pre><span class="code-cell__comment"># prepare your circuit to run on the simulator</span></pre>
      <pre>optimized_circuit = qiskit.transpile(quantum_circuit, backend)</pre>
      <pre>optimized_circuit.draw()</pre>
      <pre>&nbsp;</pre>
    </div>
    <div
      class="code-cell__block"
      :class="{ 'code-cell__block_active': activeBlocks[2] }"
    >
      <pre><span class="code-cell__comment"># run on simulator</span></pre>
      <pre class="code-cell__line">job = backend.run(optimized_circuit)</pre>
      <pre class="code-cell__line">result = job.result()</pre>
      <pre class="code-cell__line">print(result.get_counts())</pre>
    </div>
  </code>
</template>

<script setup lang="ts">
interface Props {
  activeBlocks: boolean[];
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.code-cell {
  display: block;
  background-color: qiskit.$background-color-lighter;
  color: qiskit.$text-color;
  overflow-x: scroll;
  padding: carbon.$spacing-05 0;

  &__block {
    opacity: 0.4;
    border-left: 0.125rem solid transparent;
    padding: carbon.$spacing-04 carbon.$spacing-05;
    margin: -(carbon.$spacing-03) 0;
    transition: all 0.2s ease-in;

    &_active {
      opacity: 1;
      border-color: qiskit.$border-active-color;
    }

    @include carbon.breakpoint-down(md) {
      border-color: transparent;
    }
  }

  &__comment,
  &__string {
    color: qiskit.$text-active-color;
  }

  &__line {
    word-break: break-word;
    white-space: normal;
  }
}
</style>
