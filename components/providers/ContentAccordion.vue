<template>
  <bx-accordion ref="acc" class="content-accordion" @change="actionChange">
    <div
      v-for="(tab, index) in tabs"
      :key="tab.title"
    >
      <bx-accordion-item
        :open="index === expandedItem"
        :title-text="tab.title"
      >
        <AccordionLayout
          :title="tab.title"
          :description="tab.description"
          :installation="tab.installation"
          :image="tab.image"
          :website-cta="tab.websiteCta"
          :docs-cta="tab.docsCta"
          :source-cta="tab.sourceCta"
          :code-examples="tab.codeExamples"
        />
      </bx-accordion-item>
    </div>
  </bx-accordion>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { ProviderObject } from '~/constants/providersContent'
import '@carbon/web-components/es/components/accordion/index.js'

@Component
export default class ContentAccordion extends Vue {
  @Prop(Array) tabs!: Array<ProviderObject>

  expandedItem: number = 0

  actionChange ({ changedIndex }: { changedIndex: number }) : void {
    this.expandedItem = changedIndex
  }
}
</script>

<style lang="scss">
.content-accordion {
  bx-accordion-item {
    border-bottom: none;
    border-top-color: $border-color;
    overflow-anchor: none;
  }

  ::part(expando) {
    height: 2.5rem;
    background-color: $background-color-light;

    &:hover::before {
      background-color: $background-color-light-2;
    }

    &:focus::before {
      border-color: $border-active-color;
    }
  }

  ::part(expando-icon) {
    fill: $text-color-light;
  }

  ::part(content) {
    padding: $spacing-06 $spacing-07;
    background-color: $background-color-lighter;

    @include mq($from: medium, $until: large) {
      padding-left: $spacing-06;
      padding-right: $spacing-06;
    }

    @include mq($until: medium) {
      padding-left: $spacing-05;
      padding-right: $spacing-05;
    }
  }
}
</style>
