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
            :image="tab.content.image"
            :description="tab.content.description"
            :cta="tab.content.cta"
          />
        </template>
      </cv-accordion-item>
    </div>
  </cv-accordion>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { AccordionLayoutProps } from '~/components/overview/AccordionLayout.vue'

type ContentAccordionTab = {
  title: string,
  content: AccordionLayoutProps
}

export { ContentAccordionTab }

@Component
export default class ContentAccordion extends Vue {
  @Prop(Array) tabs!: Array<ContentAccordionTab>

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
@import '~carbon-components/scss/globals/scss/typography';

.content-accordion {
  & .bx--accordion__item {
    @include type-style('body-long-01');
    border-bottom: none;
    border-top-color: $gray-20;
    overflow-anchor: none;
  }

  & .bx--accordion__heading {
    height: 2.5rem;
    background-color: $cool-gray-20;

    &:hover::before {
      background-color: $cool-gray-30;
    }
  }

  & .bx--accordion__title {
    color: $gray-80;
    padding-left: $spacing-07;
    margin: 0;
  }

  & .bx--accordion__arrow {
    fill: $gray-80;
  }

  & button[aria-expanded="true"]{
    color: $white;
    background-color: $purple-70;

    &:hover::before {
      background-color: $purple-70;
    }
  }

  & button[aria-expanded="true"] > .bx--accordion__title{
    color: $white;
  }

  & button[aria-expanded="true"] > .bx--accordion__arrow{
    fill: $white;
  }

  & .bx--accordion__content {
    min-height: 30.5rem;
    padding: $spacing-06 $spacing-07;
    background-color: $cool-gray-10;
    color: $gray-80;

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
