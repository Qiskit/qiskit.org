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
      <cv-tabs container>
        <cv-tab v-for="algorithm in algorithmsContent" :key="algorithm.title" :label="algorithm.title">
          <div class="algorithms__section">
            <CodeSnippet
              :code-lines="algorithm.codeSample"
              :code-snippet-title="algorithm.title"
              :code-snippet-location="'quick-start-algorithms'"
            />
          </div>
        </cv-tab>
      </cv-tabs>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import CodeSnippet from '~/components/ui/CodeSnippet.vue'
import { AlgorithmsContent } from '~/constants/providersContent'

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

<style lang="scss">
// Carbon overrides
.algorithms {
  .bx--tabs--scrollable {
    background-color: $background-color-lighter;
  }

  .bx--tabs--scrollable .bx--tabs--scrollable__nav-item--selected {
    background-color: $background-color-light-2;

    &:hover {
      background-color: $background-color-light;
    }
  }

  .bx--tabs--scrollable .bx--tabs--scrollable__nav-item {
    &:hover {
      background-color: $background-color-light;
    }
  }

  .bx--tabs--scrollable .bx--tabs--scrollable__nav-link,
  .bx--tabs--scrollable .bx--tabs--scrollable__nav-item--selected .bx--tabs--scrollable__nav-link {
    border-bottom: 2px solid transparent;
  }

  .bx--tabs--scrollable .bx--tabs--scrollable__nav-link:active {
    border: none;
    outline: none;
  }
}
</style>
