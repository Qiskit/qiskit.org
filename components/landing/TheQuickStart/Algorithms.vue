<template>
  <section class="algorithms">
    <div class="algorithms__container">
      <h3>Get the SDK</h3>
      <div class="algorithms__section">
        <CodeSnippet
          :code-lines="installCode"
          :code-snippet-title="`${providerTitle} install-code`"
          :code-snippet-location="'quick-start-algorithms'"
        />
      </div>
      <h3>Test some algorithms</h3>
      <bx-tabs container :value="activeTabValue" @bx-tabs-selected="updateSelectedTab($event)">
        <bx-tab
          v-for="(algorithm, index) in codeExamples"
          :key="index"
          :target="index"
          :value="index"
        >
          {{ algorithm.name }}
        </bx-tab>
      </bx-tabs>
      <div
        v-for="(algorithm, index) in codeExamples"
        :id="index"
        :key="index"
        class="algorithms__section"
        role="tabpanel"
        :aria-labelledby="index"
      >
        <CodeSnippet
          :code-lines="algorithm.fullCode"
          :code-snippet-title="algorithm.name"
          :code-snippet-location="'quick-start-algorithms'"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import CodeSnippet from '~/components/ui/CodeSnippet.vue'
import '@carbon/web-components/es/components/tabs/index.js'

type codeExample = {
  name: string
  runMethod: string
  fullCode: string[]
}

@Component({
  components: { CodeSnippet }
})
export default class Algorithms extends Vue {
  @Prop(Array) installCode!: string[]
  @Prop(String) providerTitle!: string
  @Prop(Array) codeExamples!: codeExample[]

  activeTabValue = 0

  updateSelectedTab (e: { detail: { item: { value: number } } }) {
    this.activeTabValue = e.detail.item.value
  }

  @Watch('installCode')
  onSelectedProviderUpdated () {
    this.activeTabValue = 0
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
}
</style>
