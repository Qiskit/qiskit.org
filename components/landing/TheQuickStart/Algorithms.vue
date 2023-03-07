<template>
  <section class="algorithms">
    <div class="algorithms__container">
      <h3>Get the SDK</h3>
      <div class="algorithms__section">
        <code class="algorithms__code-cell">
          <pre class="algorithms__code-cell__line">pip install qiskit</pre>
          <pre class="algorithms__code-cell__line">pip install qiskit-ibm-provider</pre>
        </code>
        <!--
          @click="[copyToClipboard($event), $trackClickEvent(`Copy ${title} install code`, 'providers')]"
        -->
        <cv-button
          title="Copy"
          size="sm"
          class="algorithms__copy-button"
          @click="copyToClipboard($event)"
        >
          Copy
        </cv-button>
      </div>
      <h3>Test some algorithms</h3>
      <cv-tabs container>
        <cv-tab label="Bell state">
          <div class="algorithms__section">
            <code class="algorithms__code-cell">
              <pre class="algorithms__code-cell__line">import qiskit</pre>
              <pre class="algorithms__code-cell__line">&nbsp;</pre>
              <pre class="algorithms__code-cell__comment"># Oiskit quantum circuits libraries</pre>
              <pre class="algorithms__code-cell__line">quantum_circuit = qiskit.circuit.library.QuantumVolume</pre>
              <pre class="algorithms__code-cell__line">quantum_circuit.measure_all()</pre>
              <pre class="algorithms__code-cell__line">quantum_circuit.draw()</pre>
              <pre class="algorithms__code-cell__line">&nbsp;</pre>
              <pre class="algorithms__code-cell__line">prepare your circuit to run</pre>
              <pre class="algorithms__code-cell__line">from qiskit import IBMQ</pre>
              <pre class="algorithms__code-cell__line">&nbsp;</pre>
              <pre class="algorithms__code-cell__comment">#Get the API token in</pre>
              <pre class="algorithms__code-cell__comment"># https://quantum-computing.ibm.com/</pre>
              <pre class="algorithms__code-cell__line">IBMQ.save_account("YOUR TOKEN")</pre>
              <pre class="algorithms__code-cell__line">&nbsp;</pre>
              <pre class="algorithms__code-cell__line">provider = IBM.load_account()</pre>
              <pre class="algorithms__code-cell__line">backend = provader.get_ backend('ibmq_quito')</pre>
              <pre class="algorithms__code-cell__line">&nbsp;</pre>
              <pre class="algorithms__code-cell__line">optimized_circuit = qiskit.transpile(quantum_circuit, backend)</pre>
              <pre class="algorithms__code-cell__line">optimized_circuit.draw()</pre>
              <pre class="algorithms__code-cell__line">&nbsp;</pre>
              <pre class="algorithms__code-cell__comment"># run in real hardware</pre>
              <pre class="algorithms__code-cell__line">job = backend.run (optimized_circuit)</pre>
              <pre class="algorithms__code-cell__line">retrieved_job = backend.retrieve_job(job.job_id())</pre>
              <pre class="algorithms__code-cell__line">result = retrieved_job.result()</pre>
              <pre class="algorithms__code-cell__line">print result.get_counts()</pre>
            </code>
            <cv-button
              title="Copy"
              size="sm"
              class="algorithms__copy-button"
              @click="copyToClipboard($event)"
            >
              Copy
            </cv-button>
          </div>
        </cv-tab>
        <cv-tab label="Quantum Volume">
          <div class="algorithms__section">
            <code class="algorithms__code-cell">
              <pre class="algorithms__code-cell__line">pip install qiskit</pre>
              <pre class="algorithms__code-cell__line">pip install qiskit-ibm-provider</pre>
            </code>
            <cv-button
              title="Copy"
              size="sm"
              class="algorithms__copy-button"
              @click="copyToClipboard($event)"
            >
              Copy
            </cv-button>
          </div>
        </cv-tab>
        <cv-tab label="VQE">
          <div class="algorithms__section">
            <code class="algorithms__code-cell">
              <pre class="algorithms__code-cell__line">pip install qiskit</pre>
              <pre class="algorithms__code-cell__line">pip install qiskit-ibm-provider</pre>
            </code>
            <cv-button
              title="Copy"
              size="sm"
              class="algorithms__copy-button"
              @click="copyToClipboard($event)"
            >
              Copy
            </cv-button>
          </div>
        </cv-tab>
        <cv-tab label="QAOA">
          <div class="algorithms__section">
            <code class="algorithms__code-cell">
              <pre class="algorithms__code-cell__line">pip install qiskit</pre>
              <pre class="algorithms__code-cell__line">pip install qiskit-ibm-provider</pre>
            </code>
            <cv-button
              title="Copy"
              size="sm"
              class="algorithms__copy-button"
              @click="copyToClipboard($event)"
            >
              Copy
            </cv-button>
          </div>
        </cv-tab>
        <cv-tab label="QSVM">
          <div class="algorithms__section">
            <code class="algorithms__code-cell">
              <pre class="algorithms__code-cell__line">pip install qiskit</pre>
              <pre class="algorithms__code-cell__line">pip install qiskit-ibm-provider</pre>
            </code>
            <cv-button
              title="Copy"
              size="sm"
              class="algorithms__copy-button"
              @click="copyToClipboard($event)"
            >
              Copy
            </cv-button>
          </div>
        </cv-tab>
      </cv-tabs>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class Algorithms extends Vue {
  copyCodeCta = 'Copy'

  copyToClipboard (e: { target: any }): void {
    const buttonElement = e.target
    const codeBlock = buttonElement.parentNode
    const codeSnippet = codeBlock.querySelector('.algorithms__code-cell')
    if (codeSnippet !== null) {
      navigator.clipboard.writeText(codeSnippet.innerText)
      buttonElement.innerText = 'Copied!'
      setTimeout(() => {
        buttonElement.blur()
        buttonElement.innerText = this.copyCodeCta
      }, 3500)
    }
  }
}
</script>

<style lang="scss" scoped>
$cta-max-width: 4rem;

.algorithms {
  padding: $spacing-05;

  &__container {
    background-color: $background-color-lighter;
    padding: $spacing-05;
  }

  &__section {
    position: relative;
    margin-bottom: $spacing-07;
  }

  &__code-cell {
    display: block;
    background-color: $background-color-white;
    color: $text-color;
    padding: $spacing-05 $spacing-12 $spacing-05 $spacing-05;

    &__comment {
      color: $text-active-color;
      word-break: break-word;
      white-space: normal;
    }

    &__line {
      word-break: break-word;
      white-space: normal;
    }
  }

  &__copy-button {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    max-width: $cta-max-width;
    background-size: 200% 100%;
    background-position-x: 100%;
    background-image: linear-gradient(90deg, $button-background-color-light 0%, $button-background-color-light 50%, $background-color-secondary 50%, $background-color-secondary 100%);
    transition: background-position-x 0.3s ease-out;

    &:hover,
    &:active {
      background-position-x: 0;
    }

    &:focus {
      border-color: $button-background-color-light;
      box-shadow: inset 0 0 0 1px $button-background-color-light, inset 0 0 0 2px $white-0;
    }

    &__label {
      display: block;
      width: 100%;
    }
  }
}
</style>
