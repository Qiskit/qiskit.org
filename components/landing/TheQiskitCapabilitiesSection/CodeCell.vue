<template>
  <code class="code-cell">
    <div class="code-cell__block" :class="{'code-cell__block_active' : activeCells[0]}">
      <pre class="code-cell__line">import qiskit</pre>
      <pre> &nbsp; </pre>
      <pre class="code-cell__line"><span class="code-cell__comment"># Qiskit quantum circuits libraries</span></pre>
      <pre class="code-cell__line">quantum_circuit = qiskit.circuit.library.QuantumVolume(5) <span class="code-cell__comment">#1</span> <span class="code-cell__comment">#3</span></pre>
      <pre class="code-cell__line">quantum_circuit.draw()</pre>
    </div>
    <div class="code-cell__block" :class="{'code-cell__block_active' : activeCells[1]}">
      <pre class="code-cell__line"><span class="code-cell__comment"># prepare your circuit to run</span></pre>
      <pre class="code-cell__line">from qiskit import IBMQ <span class="code-cell__comment">#2</span></pre>
      <pre> &nbsp; </pre>
      <pre class="code-cell__line">provider = IBMQ.load_account() <span class="code-cell__comment">#3</span></pre>
      <pre class="code-cell__line">backend = provider.get_backend(<span class="code-cell__string">'ibmq_santiago'</span>) <span class="code-cell__comment">#4</span></pre>
      <pre> &nbsp; </pre>
      <pre class="code-cell__line">optimized_circuit = qiskit.transpile(quantum_circuit, backend) <span class="code-cell__comment">#5</span></pre>
      <pre class="code-cell__line">optimized_circuit.draw()</pre>
    </div>
    <div class="code-cell__block" :class="{'code-cell__block_active' : activeCells[2]}">
      <pre class="code-cell__line"><span class="code-cell__comment"># run in real hardware</span></pre>
      <pre class="code-cell__line">job = backend.run(optimized_circuit)</pre>
      <pre class="code-cell__line">retrieved_job = backend.retrieve_job(job.job_id())</pre>
      <pre class="code-cell__line">result = retrieved_job.result() <span class="code-cell__comment">#6</span></pre>
    </div>
  </code>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class CodeCell extends Vue {
  @Prop({ type: Array, default: 1 }) activeCells!: boolean[]
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
      border-left: 0.125rem solid $border-active-color;
    }

    @include mq($until: medium) {
      opacity: 1;
      border-left: 0.125rem solid $border-active-color;
    }
  }

  &__comment {
    color: $text-active-color;
  }
  &__string {
    color: $text-active-color;
  }

  &__line {
    word-break:break-word;
    white-space:normal;
  }
}

</style>
