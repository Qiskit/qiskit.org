<template>
  <article class="accordion-layout">
    <p class="accordion-layout__description">
      {{ description }}
    </p>
    <img v-if="image" :src="image" class="accordion-layout__image">
    <cv-code-snippet
      class="accordion-layout__code-snippet__oneline"
      kind="oneline"
      light
      feedback-aria-label="Copy code snippet"
    >
      <span>{{ installation }}</span>
    </cv-code-snippet>
    <code class="accordion-layout__code-cell">
      <template v-for="(line, index) in helloWorldExample">
        <!-- eslint-disable vue/no-v-html -->
        <pre v-if="line.startsWith('#')" :key="line" class="accordion-layout__code-cell__comment" v-html="line" />
        <pre v-else :key="index" class="accordion-layout__code-cell__line" v-html="line" />
        <!-- eslint-enable -->
      </template>
    </code>
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
import { NavLink } from '~/constants/menuLinks'

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
  helloWorldExample: string[]
}

export { AccordionLayoutProps }

@Component
export default class AccordionLayout extends Vue implements AccordionLayoutProps {
  @Prop(String) title!: string
  @Prop(String) description!: string
  @Prop(String) image!: string
  @Prop(String) installation!: string
  @Prop(Object) websiteCta!: NavLink
  @Prop(Object) docsCta!: NavLink
  @Prop(Object) sourceCta!: NavLink
  @Prop(Array) helloWorldExample!: string[]

  get validCtas () {
    return [this.websiteCta, this.docsCta, this.sourceCta].filter(cta => cta.url !== null)
  }
}
</script>

<style lang="scss" scoped>
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

  &__code-snippet {
    &__oneline,
    &__block {
      margin-bottom: $spacing-05;
      max-width: initial;
    }

    &__line {
      display: block;
    }
  }

  &__cta-group {
    display: flex;

    .app-cta {
      max-width: 10rem;
      padding-left: $spacing-05;
    }
  }

  &__code-cell {
    display: block;
    background-color: $background-color-white;
    color: $text-color;
    padding: $spacing-05;

    &__comment {
      color: $text-active-color;
    }

    &__line {
      word-break: break-word;
      white-space: normal;
    }
  }
}
</style>
