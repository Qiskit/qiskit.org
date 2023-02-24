<template>
  <article class="accordion-layout">
    <p class="accordion-layout__description">
      {{ description }}
    </p>
    <img v-if="image" :src="image" class="accordion-layout__image">
    <cv-code-snippet
      class="accordion-layout__code-snippet__line"
      kind="oneline"
      light
      feedback-aria-label="Copy code snippet"
    >
      <span>{{ installation }}</span>
    </cv-code-snippet>
    <AppCta
      v-if="websiteCta"
      kind="ghost"
      v-bind="websiteCta"
    />
    <!-- TODO: replace w/ dynamic code sample -->
    <cv-code-snippet
      class="accordion-layout__code-snippet__block"
      kind="multiline"
      light
      feedback-aria-label="Copy code snippet"
    >
      <span v-for="(line, index) in helloWorldExample" :key="index">{{ line }}</span>
    </cv-code-snippet>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { NavLink } from '~/constants/menuLinks'

interface AccordionLayoutProps {
  title: string
  image?: string | null
  description: string
  installation: string
  websiteCta?: NavLink
  docCta?: NavLink
  sourceCta?: NavLink
  helloWorldExample: string[]
}

export { AccordionLayoutProps }

@Component
export default class AccordionLayout extends Vue implements AccordionLayoutProps {
@Prop(String) title!: string
@Prop(String) description!: string
@Prop(String) image!: string
@Prop(String) installation!: string
@Prop(Object) websiteCta?: NavLink
@Prop(Object) docCta?: NavLink
@Prop(Object) sourceCta?: NavLink
@Prop(Array) helloWorldExample!: string[]
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
    &__line,
    &__block {
      margin-bottom: $spacing-05;
      max-width: initial;
    }
  }
}
</style>
