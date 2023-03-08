<template>
  <article class="accordion-layout">
    <p class="accordion-layout__description">
      {{ description }}
    </p>
    <img v-if="image" :src="image" class="accordion-layout__image">
    <CodeSnippet
      :code-lines="[ installation ]"
      :code-snippet-title="title"
      :code-snippet-location="'providers'"
    />
    <div class="accordion-layout__code-block">
      <CodeSnippet
        :code-lines="codeExample"
        :code-snippet-title="title"
        :code-snippet-location="'providers'"
      />
    </div>
    <div class="accordion-layout__cta-group">
      <AppCta
        v-for="cta in validCtas"
        :key="cta.label"
        kind="ghost"
        v-bind="cta"
      />
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import CodeSnippet from '../ui/CodeSnippet.vue'
import { GeneralLink } from '~/constants/appLinks'

interface AccordionLayoutProps {
  title: string
  image: string | null
  description: string
  installation: string
  websiteCta: {
    label: string | null
    url: string | null
  }
  docsCta: {
    label: string | null
    url: string | null
  }
  sourceCta: {
    label: string | null
    url: string | null
  }
  codeExample: string[]
}

export { AccordionLayoutProps }

@Component({
  components: { CodeSnippet }
})
export default class AccordionLayout extends Vue implements AccordionLayoutProps {
  @Prop(String) title!: string
  @Prop(String) description!: string
  @Prop(String) image!: string
  @Prop(String) installation!: string
  @Prop(Object) websiteCta!: GeneralLink
  @Prop(Object) docsCta!: GeneralLink
  @Prop(Object) sourceCta!: GeneralLink
  @Prop(Array) codeExample!: string[]

  get validCtas () {
    return [this.websiteCta, this.docsCta, this.sourceCta].filter(cta => cta.url !== null)
  }
}
</script>

<style lang="scss" scoped>
$cta-max-width: 4rem;

.accordion-layout {
  display: flex;
  flex-direction: column;

  &__image {
    align-self: center;
    height: auto;
    width: 100%;
    margin-bottom: $spacing-05;
  }

  &__description {
    margin-bottom: $spacing-06;
  }

  &__cta-group {
    display: flex;

    @include mq($until: medium) {
      flex-direction: column;
    }

    .app-cta {
      max-width: 10rem;
      padding-left: $spacing-05;

      @include mq($until: medium) {
        max-width: initial;
      }
    }
  }
}
</style>
