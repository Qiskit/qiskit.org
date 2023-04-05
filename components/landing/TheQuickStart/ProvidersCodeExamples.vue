<template>
  <section class="providers-code-examples">
    <div class="providers-code-examples__container">
      <h3>Get the SDK</h3>
      <div class="providers-code-examples__section">
        <CodeSnippet
          :code-lines="installCode"
          :code-snippet-title="`${providerTitle} install-code`"
          :code-snippet-location="'quick-start-providers-code-examples'"
        />
      </div>
      <bx-tabs container :value="activeTabLabel" @bx-tabs-selected="updateSelectedTab($event)">
        <bx-tab
          v-for="algorithm in codeExamples"
          :key="algorithm.name"
          :target="algorithm.name"
          :value="algorithm.name"
        >
          {{ algorithm.name }}
        </bx-tab>
      </bx-tabs>
      <div
        v-for="algorithm in codeExamples"
        :id="algorithm.name"
        :key="algorithm.name"
        class="providers-code-examples__section"
        role="tabpanel"
        :aria-labelledby="algorithm.name"
      >
        <CodeSnippet
          :code-lines="algorithm.fullCode"
          :code-snippet-title="algorithm.name"
          :code-snippet-location="'quick-start-providers-code-examples'"
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

interface codeExample {
  name: string
  runMethod: string
  fullCode: string[]
}

@Component({
  components: { CodeSnippet }
})
export default class ProvidersCodeExamples extends Vue {
  @Prop(Array) installCode!: string[]
  @Prop(String) providerTitle!: string
  @Prop(Array) codeExamples!: codeExample[]

  activeTabLabel = this.codeExamples[0].name

  updateSelectedTab (e: { detail: { item: { value: string } } }) {
    this.activeTabLabel = e.detail.item.value
  }

  @Watch('installCode')
  onSelectedProviderUpdated () {
    this.activeTabLabel = this.codeExamples[0].name
  }
}
</script>

<style lang="scss" scoped>
$cta-max-width: 4rem;

.providers-code-examples {
  padding: $spacing-05;

  &__container {
    background-color: $background-color-lighter;
    padding: $spacing-05;
  }

  &__section {
    position: relative;
  }
}
</style>
