<template>
  <cv-accordion ref="acc" class="content-accordion" @change="actionChange">
    <div
      v-for="(tab, index) in tabs"
      :key="tab.title"
      @click.capture="preventFromClosing(index, $event)"
    >
      <cv-accordion-item
        :key="tab.title"
        :open="index === expandedItem"
      >
        <template slot="title">
          {{ tab.title }}
        </template>
        <template slot="content">
          <AccordionLayout
            :title="tab.title"
            :description="tab.description"
            :installation="tab.installation"
            :image="tab.image"
            :website-cta="tab.websiteCta"
            :doc-cta="tab.docCta"
            :source-cta="tab.sourceCta"
            :hello-world-example="tab.helloWorldExample"
          />
        </template>
      </cv-accordion-item>
    </div>
  </cv-accordion>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { ProviderObject } from '~/constants/providersContent'

@Component
export default class ContentAccordion extends Vue {
  @Prop(Array) tabs!: Array<ProviderObject>

  expandedItem: number = 0

  preventFromClosing (index: number, event: MouseEvent) {
    if (index === this.expandedItem) {
      event.stopPropagation()
    }
  }

  actionChange ({ changedIndex }: { changedIndex: number }) : void {
    this.expandedItem = changedIndex
  }
}
</script>

<style lang="scss">
.content-accordion {
  & .bx--accordion__item {
    border-bottom: none;
    border-top-color: $border-color;
    overflow-anchor: none;
  }

  & .bx--accordion__heading {
    height: 2.5rem;
    background-color: $background-color-light;

    &:hover::before {
      background-color: $background-color-light-2;
    }
  }

  & .bx--accordion__title {
    padding-left: $spacing-07;
    margin: 0;
  }

  & .bx--accordion__arrow {
    fill: $text-color-light;
  }

  & button[aria-expanded="true"]{
    color: $text-color-white;
    background-color: $button-background-color;

    &:hover::before {
      background-color: $button-background-color;
    }
  }

  & button[aria-expanded="true"] > .bx--accordion__title{
    color: $text-color-white;
  }

  & button[aria-expanded="true"] > .bx--accordion__arrow{
    fill: $text-color-white;
  }

  & .bx--accordion__content {
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
