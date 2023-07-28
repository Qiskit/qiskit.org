<template>
  <article class="providers-accordion-content">
    <p class="providers-accordion-content__description">
      {{ description }}
    </p>
    <UiCodeSnippet
      :code="installation"
      :code-snippet-title="title"
      :code-snippet-location="'providers'"
    />
    <div class="providers-accordion-content__code-block">
      <UiCodeSnippet
        :code="codeExamples[0].fullCode"
        :code-snippet-title="title"
        :code-snippet-location="'providers'"
      />
    </div>
    <div class="providers-accordion-content__cta-group">
      <UiCta
        v-for="cta in ctas"
        :key="cta.label"
        kind="ghost"
        :url="cta.url"
        :label="cta.label"
        :segment="cta.segment"
        :title="cta.title"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
import { TextLink } from "~/types/links";
import { ProviderCodeExample } from "~/types/providers";

interface Props {
  title: string;
  description: string;
  installation: string;
  docsCta?: TextLink;
  sourceCta?: TextLink;
  websiteCta?: TextLink;
  codeExamples: ProviderCodeExample[];
}

const props = defineProps<Props>();

const ctas = computed(() => {
  const ctas = [];

  if (props.websiteCta) {
    ctas.push(props.websiteCta);
  }
  if (props.docsCta) {
    ctas.push(props.docsCta);
  }
  if (props.sourceCta) {
    ctas.push(props.sourceCta);
  }

  return ctas;
});
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

$cta-max-width: 4rem;

.providers-accordion-content {
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
