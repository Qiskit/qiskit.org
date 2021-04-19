<template>
  <section
    class="accordion__section"
  >
    <h2 class="copy__title">
      {{ document.title }}
    </h2>
    <cv-accordion :align="`end`">
      <nuxt-content :document="document" />
    </cv-accordion>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import { IContentDocument } from '@nuxt/content/types/content'

@Component
export default class AccordionSection extends Vue {
  @Prop({ type: String }) title: string | undefined
  @Prop({ type: Object }) document!: IContentDocument

  cvTemplate (slot: string, children: any[]) {
    return {
      type: 'element',
      tag: 'template',
      props: { [slot]: '' },
      children
    }
  }

  cvAccordionItem (element: any) {
    return {
      type: 'element',
      tag: 'cv-accordion-item',
      props: {},
      children: [this.cvTemplate('title', [element]), this.cvTemplate('content', [])]
    }
  }

  @Watch('document', { immediate: true })
  onDocumentChange (val: IContentDocument) {
    val.body.children
      .filter((element:any) => element.tag === 'item')
      .forEach((element:any) => {
        element.tag = 'cv-accordion-item'
      })
  }
}
</script>

<style lang="scss" scoped>
.summer-school-page {
  color: $white-text-01;
  display: flex;
  flex-direction: column;

  &__section {
    @include contained();
    width: 100%;
    margin-top: $layout-05;
    margin-bottom: $layout-03;

    @include mq($until: large) {
      margin-bottom: $layout-01;
    }
  }
}
</style>

<style lang="scss">
// overrides
.summer-school-page {
  .bx--accordion__title {
    color: $white-text-01;
  }

  .bx--accordion__heading:hover,
  .bx--accordion__heading:hover::before {
    background-color: $cool-gray-10;
  }

  .bx--accordion__arrow {
    fill: $white-text-01;
  }

  & a.bx--tabs__nav-link {
    color: $cool-gray-80;
    border-bottom-color: $cool-gray-20;

    &:focus,
    &:active {
      outline: none;
    }

    &:not(.bx--tabs__nav-item--disabled) {
      color: $cool-gray-80;
    }
  }

  & .bx--tabs__nav-item {
    &:hover:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link,
    &:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled):not(.bx--tabs__nav-item--selected) .bx--tabs__nav-link:focus,
    &:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled):not(.bx--tabs__nav-item--selected) a.bx--tabs__nav-link:active,
    &:not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link, .bx--tabs__nav-item--selected:not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link:focus {
      color: $cool-gray-80;
    }

    &--selected:not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link {
      border-bottom-color: $purple-70;
    }
  }

  & .bx--tabs__nav-item:hover:not(.bx--tabs__nav-item--disabled) {
      box-shadow: none;
    }

    & .bx--tabs__nav-item:hover:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled),
    & .bx--tabs__nav-item,
    & .bx--tabs-trigger {
      background-color: white;

      svg {
        fill: $gray-100;
      }
    }

    & .bx--tabs__nav-link,
    & .bx--tabs-trigger-text {
      color: $gray-100;
  }

  .app-data-table-section {
    margin-top: 0;
    padding: 0;
  }
}

</style>
