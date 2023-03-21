<template>
  <section class="algorithms">
    <div class="algorithms__container">
      <h3>Get the SDK</h3>
      <div class="algorithms__section">
        <UiCodeSnippet
          :code-lines="installCode"
          :code-snippet-title="`${providerTitle} install-code`"
          :code-snippet-location="'quick-start-algorithms'"
        />
      </div>
      <h3>Test some algorithms</h3>
      <bx-tabs
        container
        :value="activeTabLabel"
        @bx-tabs-selected="updateSelectedTab($event)"
      >
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
        class="algorithms__section"
        role="tabpanel"
        :aria-labelledby="algorithm.name"
      >
        <UiCodeSnippet
          :code-lines="algorithm.fullCode"
          :code-snippet-title="algorithm.name"
          :code-snippet-location="'quick-start-algorithms'"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/tabs/index.js";

interface codeExample {
  name: string;
  runMethod: string;
  fullCode: string[];
}

interface Props {
  installCode: string[];
  providerTitle: string;
  codeExamples: codeExample[];
}

const props = defineProps<Props>();

const activeTabLabel = ref(props.codeExamples[0].name);

function updateSelectedTab(e: { detail: { item: { value: string } } }) {
  activeTabLabel.value = e.detail.item.value;
}

watch(
  () => props.installCode,
  () => {
    activeTabLabel.value = props.codeExamples[0].name;
  }
);
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.algorithms {
  padding: carbon.$spacing-05;

  &__container {
    background-color: qiskit.$background-color-lighter;
    padding: carbon.$spacing-05;
  }

  &__section {
    position: relative;
    margin-bottom: carbon.$spacing-07;
  }
}
</style>
