<template>
  <cv-accordion ref="acc" class="content-accordion" @change="actionChange">
    <div
      v-for="(tab, index) in tabs"
      :key="tab.title"
      @click.capture="preventFromClosing(index, $event)"
    >
      <cv-accordion-item :key="tab.title" :open="index === expandedItem">
        <template #title>
          {{ tab.title }}
        </template>
        <template #content>
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

<script setup lang="ts">
import { AccordionLayoutProps } from "~/components/overview/AccordionLayout.vue";

export type ContentAccordionTab = {
  title: string;
  content: AccordionLayoutProps;
};

interface Props {
  tabs: Array<ContentAccordionTab>;
}

defineProps<Props>();

const expandedItem = ref(0);

function preventFromClosing(index: number, event: MouseEvent) {
  if (index === expandedItem.value) {
    event.stopPropagation();
  }
}

function actionChange({ changedIndex }: { changedIndex: number }) {
  expandedItem.value = changedIndex;
}
</script>

<style lang="scss">
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.content-accordion {
  & .bx--accordion__item {
    border-bottom: none;
    border-top-color: qiskit.$border-color;
    overflow-anchor: none;
  }

  & .bx--accordion__heading {
    height: 2.5rem;
    background-color: qiskit.$background-color-light;

    &:hover::before {
      background-color: qiskit.$background-color-light-2;
    }
  }

  & .bx--accordion__title {
    padding-left: carbon.$spacing-07;
    margin: 0;
  }

  & .bx--accordion__arrow {
    fill: qiskit.$text-color-light;
  }

  & button[aria-expanded="true"] {
    color: qiskit.$text-color-white;
    background-color: qiskit.$button-background-color;

    &:hover::before {
      background-color: qiskit.$button-background-color;
    }
  }

  & button[aria-expanded="true"] > .bx--accordion__title {
    color: qiskit.$text-color-white;
  }

  & button[aria-expanded="true"] > .bx--accordion__arrow {
    fill: qiskit.$text-color-white;
  }

  & .bx--accordion__content {
    padding: carbon.$spacing-06 carbon.$spacing-07;
    background-color: qiskit.$background-color-lighter;

    @include carbon.breakpoint-between(md, lg) {
      padding-left: carbon.$spacing-06;
      padding-right: carbon.$spacing-06;
    }

    @include carbon.breakpoint-down(md) {
      padding-left: carbon.$spacing-05;
      padding-right: carbon.$spacing-05;
    }
  }
}
</style>
