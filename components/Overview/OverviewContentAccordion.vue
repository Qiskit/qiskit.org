<template>
  <bx-accordion class="content-accordion">
    <div v-for="(tab, index) in tabs" :key="tab.title">
      <bx-accordion-item
        :key="tab.title"
        :class="
          index === expandedItem
            ? 'content-accordion__accordion-item_expanded'
            : ''
        "
        :open="index === expandedItem"
        :title-text="tab.title"
        @bx-accordion-item-toggled="
          handleAccordionItemToggled({ changedIndex: index }, $event)
        "
      >
        <OverviewAccordionLayout
          :image="tab.content.image"
          :description="tab.content.description"
          :cta="tab.content.cta"
        />
      </bx-accordion-item>
    </div>
  </bx-accordion>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/accordion/index.js";
import { AccordionLayoutProps } from "~/components/Overview/OverviewAccordionLayout.vue";

export type ContentAccordionTab = {
  title: string;
  content: AccordionLayoutProps;
};

interface Props {
  tabs: Array<ContentAccordionTab>;
}

defineProps<Props>();

const expandedItem = ref(0);

function handleAccordionItemToggled(
  { changedIndex }: { changedIndex: number },
  event: any
) {
  if (changedIndex === expandedItem.value) {
    event.target.open = true;
  } else {
    expandedItem.value = changedIndex;
  }
}
</script>

<style lang="scss">
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.content-accordion {
  & bx-accordion-item {
    border-bottom: none;
    border-top-color: qiskit.$border-color;
    overflow-anchor: none;

    &::part(content) {
      background-color: qiskit.$background-color-lighter;
      padding: carbon.$spacing-06 carbon.$spacing-07;

      @include carbon.breakpoint-between(md, lg) {
        padding-left: carbon.$spacing-06;
        padding-right: carbon.$spacing-06;
      }

      @include carbon.breakpoint-down(md) {
        padding-left: carbon.$spacing-05;
        padding-right: carbon.$spacing-05;
      }
    }

    &::part(expando) {
      background-color: qiskit.$background-color-light;
    }

    &.content-accordion__accordion-item_expanded {
      &::part(expando) {
        background-color: qiskit.$button-background-color;
        color: qiskit.$text-color-white;

        &:hover::before {
          background-color: qiskit.$button-background-color;
        }
      }

      &::part(expando-icon) {
        --cds-ui-05: #{qiskit.$text-color-white};
      }
    }
  }
}
</style>
