<template>
  <article class="accordion-layout">
    <cv-code-snippet
      kind="oneline"
      light
      feedback-aria-label="Copy code snippet"
    >
      <!-- TODO: replace w/ dynamic code snippet -->
      <span>pip install something</span>
    </cv-code-snippet>
    <img :src="image" class="accordion-layout__image" />
    <p class="accordion-layout__description">
      {{ description }}
    </p>
    <UiCta kind="ghost" :label="cta.label" :url="cta.url" />
    <!-- TODO: replace w/ dynamic code sample -->
    <cv-code-snippet
      kind="multiline"
      light
      feedback-aria-label="Copy code snippet"
    >
      import qiskit from qiskit_runtime import ... (very) short code example
      Lorem ipsum dolor sit amet consectetur adipiscing elit Suspendisse id
      laoreet urna nec egestas lorem Donec porta mauris sed facilisis pulvinar
    </cv-code-snippet>
  </article>
</template>

<script setup lang="ts">
// TODO: It is not possible to extract the interface of the component props
// so we need this redundant interface to do it. Explore if it is worth
// removing the @Prop decorator in favour of:
// https://class-component.vuejs.org/guide/props-definition.html
export interface AccordionLayoutProps {
  image: string;
  description: string;
  cta: {
    url: string;
    label: string;
  };
}

defineProps<AccordionLayoutProps>();
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.accordion-layout {
  display: flex;
  flex-direction: column;

  &__image {
    align-self: center;
    height: auto;
    width: 100%;
    max-width: 26rem;
    margin-bottom: carbon.$spacing-05;
  }

  &__description {
    margin-bottom: carbon.$spacing-06;
  }
}
</style>
