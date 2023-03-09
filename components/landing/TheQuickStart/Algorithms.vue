<template>
  <section class="algorithms">
    <div class="algorithms__container">
      <h3>Get the SDK</h3>
      <div class="algorithms__section">
        <CodeSnippet
          :code-lines="['pip install qiskit', 'pip install qiskit']"
          :code-snippet-title="'TODO: update this'"
          :code-snippet-location="'quick-start-algorithms'"
        />
      </div>
      <h3>Test some algorithms</h3>
      <bx-tabs container value="Bell State">
        <bx-tab 
          v-for="algorithm in algorithmsContent"
          :key="algorithm"
          :target="algorithm.title"
          :value="algorithm.title"
        >
          {{ algorithm.title }}
        </bx-tab>
      </bx-tabs>
      <div 
        v-for="algorithm in algorithmsContent"
        class="algorithms__section"
        :id="algorithm.title"
        :key="algorithm.title"
        role="tabpanel"
        :aria-labelledby="algorithm.title"
      >
        <CodeSnippet
          :code-lines="algorithm.codeSample"
          :code-snippet-title="algorithm.title"
          :code-snippet-location="'quick-start-algorithms'"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import CodeSnippet from '~/components/ui/CodeSnippet.vue'
import { AlgorithmsContent } from '~/constants/providersContent'
import '@carbon/web-components/es/components/tabs/index.js';

@Component({
  components: { CodeSnippet }
})
export default class Algorithms extends Vue {
  algorithmsContent = AlgorithmsContent
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
}
</style>