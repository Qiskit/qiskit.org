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
    <img :src="image" class="accordion-layout__image">
    <p class="accordion-layout__description">
      {{ description }}
    </p>
    <div class="accordion-layout__cta-group">
      <AppCta
        class="accordion-layout__cta-group__item"
        kind="ghost"
        v-bind="websiteCta"
      />
      <AppCta
        class="accordion-layout__cta-group__item"
        kind="ghost"
        v-bind="docCta"
      />
      <AppCta
        class="accordion-layout__cta-group__item"
        kind="ghost"
        v-bind="sourceCta"
      />
    </div>
    <!-- TODO: replace w/ dynamic code sample -->
    <cv-code-snippet
      kind="multiline"
      light
      feedback-aria-label="Copy code snippet"
    >
      <span
        v-for="line in helloWorldExample"
        :key="line"
        v-text="line"
      />
    </cv-code-snippet>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { NavLink } from '~/constants/menuLinks'

// TODO: It is not possible to extract the interface of the component props
// so we need this redundant interface to do it. Explore if it is worth
// removing the @Prop decorator in favour of:
// https://class-component.vuejs.org/guide/props-definition.html
interface AccordionLayoutProps {
  image: string,
  description: string,
  websiteCta:NavLink,
  docCta:NavLink,
  sourceCta:NavLink,
  helloWorldExample: string[]
}

export { AccordionLayoutProps }

@Component
export default class AccordionLayout extends Vue implements AccordionLayoutProps {
  @Prop(String) image!: string
  @Prop(String) description!: string
  @Prop(Object) websiteCta!: NavLink
  @Prop(Object) docCta!: NavLink
  @Prop(Object) sourceCta!: NavLink
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
    margin: $spacing-07;
  }

  &__description {
    margin-bottom: $spacing-06;
  }

  &__cta-group {
    display: flex;
    margin-bottom: $spacing-06;

    .app-cta {
      padding: 0;
      width: 6rem;
      margin-right: $spacing-08;
    }
  }
}
</style>
