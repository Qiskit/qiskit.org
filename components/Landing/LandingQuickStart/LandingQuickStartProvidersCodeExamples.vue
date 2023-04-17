<template>
  <section class="providers-code-examples">
    <div class="providers-code-examples__container">
      <div class="providers-code-examples__section">
        <h3>Install</h3>
        <UiCodeSnippet
          :code-lines="installCode"
          :code-snippet-title="`${providerTitle} install-code`"
          :code-snippet-location="'quick-start-providers-code-examples'"
        />
      </div>
      <div class="providers-code-examples__section">
        <h3>Build and run</h3>
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
          role="tabpanel"
          :aria-labelledby="algorithm.name"
        >
          <UiCodeSnippet
            :code-lines="algorithm.fullCode"
            :code-snippet-title="algorithm.name"
            :code-snippet-location="'quick-start-providers-code-examples'"
          />
        </div>
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

.providers-code-examples {
  --cds-heading-01-font-weight: 500;

  padding: carbon.$spacing-05;

  &__container {
    background-color: qiskit.$background-color-lighter;
    padding: carbon.$spacing-05;
  }

  &__section {
    &:not(:last-child) {
      margin-bottom: carbon.$spacing-07;
    }
  }
}
</style>
