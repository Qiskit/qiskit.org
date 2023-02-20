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
    <img v-if="image" :src="image" class="accordion-layout__image">
    <p class="accordion-layout__description">
      {{ description }}
    </p>
    <div class="accordion-layout__cta-group">
      <AppCta
        v-if="websiteCta"
        class="accordion-layout__cta-group__item"
        kind="ghost"
        v-bind="websiteCta"
      />
      <AppCta
        v-if="docCta"
        class="accordion-layout__cta-group__item"
        kind="ghost"
        v-bind="docCta"
      />
      <AppCta
        v-if="sourceCta"
        class="accordion-layout__cta-group__item"
        kind="ghost"
        v-bind="sourceCta"
      />
    </div>
    <!-- TODO: replace w/ dynamic code sample -->
    <cv-code-snippet
      kind="multiline"
      light
      wrap-text
      feedback-aria-label="Copy code snippet"
      class="accordion-layout__code-snippet"
    >
      <span v-for="line in helloWorldExample" :key="line">{{ line }}</span>
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
  title: string
  image: string | null
  installation: string
  description: string
  websiteCta?: NavLink
  docCta: NavLink
  sourceCta: NavLink
  helloWorldExample: string[]
}

export { AccordionLayoutProps }

@Component
export default class AccordionLayout extends Vue implements AccordionLayoutProps {
  @Prop(String) title!: string
  @Prop(String) installation!: string
  @Prop(String) image!: string
  @Prop(String) description!: string
  @Prop(Object) websiteCta!: { url: string, label: string }
  @Prop(Object) docCta!: { url: string, label: string }
  @Prop(Object) sourceCta!: { url: string, label: string }
  @Prop(Array) helloWorldExample!: string[]
}
</script>

<style lang="scss" scoped>
.accordion-layout {
  display: flex;
  flex-direction: column;

  &__image {
    align-self: center;
    width: 100%;
    margin: $spacing-06 0;
  }

  &__description {
    margin: $spacing-06 0;
  }

  &__cta-group {
    display: flex;

    .app-cta {
      max-width: 10rem;
    }
  }

  &__code-snippet {
    ::v-deep {
      .bx--snippet-btn--expand {
        display: none;
      }
    }
  }
}
</style>
