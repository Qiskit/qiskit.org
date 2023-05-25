<template>
  <article class="accordion-layout">
    <p class="accordion-layout__description">
      {{ description }}
    </p>
    <UiCodeSnippet
      :code="installation"
      :code-snippet-title="title"
      :code-snippet-location="'providers'"
    />
    <div class="accordion-layout__code-block">
      <UiCodeSnippet
        :code="codeExamples[0].fullCode"
        :code-snippet-title="title"
        :code-snippet-location="'providers'"
      />
    </div>
    <div class="accordion-layout__cta-group">
      <UiCta
        v-for="cta in validCtas"
        :key="cta.label"
        kind="ghost"
        v-bind="cta"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
import { Link } from "~/types/links";
import type { ProviderCodeExample } from "~/types/providers";

export interface AccordionLayoutProps {
  title: string;
  description: string;
  installation: string;
  websiteCta: Link;
  docsCta: Link;
  sourceCta: Link;
  codeExamples: ProviderCodeExample[];
}

const props = defineProps<AccordionLayoutProps>();

// FIX: This should already be checked by the GeneralLink type
const validCtas = computed(() => {
  return [props.websiteCta, props.docsCta, props.sourceCta].filter(
    (cta) => cta.url !== null
  );
});
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

$cta-max-width: 4rem;

.accordion-layout {
  display: flex;
  flex-direction: column;

  &__description {
    margin-bottom: carbon.$spacing-06;
  }

  &__cta-group {
    display: flex;

    @include carbon.breakpoint-down(md) {
      flex-direction: column;
    }

    .app-cta {
      max-width: 10rem;
      padding-left: carbon.$spacing-05;

      @include carbon.breakpoint-down(md) {
        max-width: initial;
      }
    }
  }
}
</style>
