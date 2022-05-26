<template>
  <code class="code-cell">
    <div class="code-cell__block" :class="{'code-cell__block_active' : activeBlocks[0]}">
      <pre>import qiskit</pre>
      <pre>&nbsp;</pre>
      <pre><span class="code-cell__comment"># Qiskit quantum circuits libraries</span></pre>
      <pre class="code-cell__line">quantum_circuit = qiskit.circuit.library.QuantumVolume(5)</pre>
      <pre class="code-cell__line">quantum_circuit.measure_all()</pre>
      <pre class="code-cell__line">quantum_circuit.draw()</pre>
    </div>
    <div class="code-cell__block" :class="{'code-cell__block_active' : activeBlocks[1]}">
      <pre><span class="code-cell__comment"># prepare your circuit to run</span></pre>
      <pre>from qiskit import IBMQ</pre>
      <pre>&nbsp;</pre>
      <pre><span class="code-cell__comment"># Get the API token in</span></pre>
      <pre><span class="code-cell__comment"># https://quantum-computing.ibm.com/</span></pre>
      <pre>IBMQ.save_account("YOUR TOKEN")</pre>
      <pre>&nbsp;</pre>
      <pre class="code-cell__line">provider = IBMQ.load_account()</pre>
      <pre class="code-cell__line">backend = provider.get_backend(<span class="code-cell__string">'ibmq_quito'</span>)</pre>
      <pre>&nbsp;</pre>
      <pre class="code-cell__line">optimized_circuit = qiskit.transpile(quantum_circuit, backend)</pre>
      <pre class="code-cell__line">optimized_circuit.draw()</pre>
    </div>
    <div class="code-cell__block" :class="{'code-cell__block_active' : activeBlocks[2]}">
      <pre><span class="code-cell__comment"># run in real hardware</span></pre>
      <pre class="code-cell__line">job = backend.run(optimized_circuit)</pre>
      <pre class="code-cell__line">retrieved_job = backend.retrieve_job(job.job_id())</pre>
      <pre class="code-cell__line">result = retrieved_job.result()</pre>
      <pre class="code-cell__line">print(result.get_counts())</pre>
    </div>
  </code>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class CodeCell extends Vue {
  @Prop({ type: Array, default: [true, false, false] }) activeBlocks!: boolean[]
}
</script>

<style lang="scss" scoped>
.code-cell {
  display: block;
  background-color: $background-color-lighter;
  color: $text-color;
  padding: $spacing-05 0;

  &__block {
    opacity: 0.4;
    border-left: 0.125rem solid transparent;
    padding: $spacing-04 $spacing-05;
    margin: -$spacing-03 0;
    transition: all 0.2s ease-in;

    &_active {
      opacity: 1;
      border-color: $border-active-color;
    }

    @include mq($until: medium) {
      border-color: transparent;
    }
  }

  &__comment,
  &__string {
    color: $text-active-color;
  }

  &__line {
    word-break: break-word;
    white-space: normal;
  }
}
</style>
