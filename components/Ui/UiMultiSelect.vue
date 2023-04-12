<template>
  <client-only>
    <bx-multi-select
      class="multi-select"
      :theme="theme"
      :label-text="label"
      :value="value"
      :selection-feedback="feedback"
      @bx-multi-select-selected="$emit('change-selection', $event.target.value)"
    >
      <bx-multi-select-item
        v-for="option in formatedOptions"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </bx-multi-select-item>
    </bx-multi-select>
  </client-only>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/multi-select/index.js";
import "@carbon/web-components/es/components/multi-select/multi-select-item.js";

defineEmits(["change-selection"]);

type multiSelectOption = {
  label: string;
  value: string;
  name: string;
};

interface Props {
  label: string;
  options: string[];
  value: string;
}

const props = defineProps<Props>();

const formatedOptions = computed(() => formatOptions(props.options));

const theme = ref("light");
const feedback = ref("fixed");

function formatOptions(optionsList: any): Array<multiSelectOption> {
  return optionsList.map((item: string) => ({
    label: item,
    value: item,
    name: item,
  }));
}
</script>

<style lang="scss">
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.multi-select {
  & .bx--list-box--light,
  & .bx--list-box__menu {
    background-color: qiskit.$background-color-white;
    border-bottom-color: carbon.$cool-gray-20;
  }

  .bx--list-box__menu-item {
    background-color: qiskit.$background-color-lighter;
  }

  .bx--list-box__menu-icon {
    right: 0.8rem;
  }

  .bx--list-box__menu-icon > svg {
    fill: carbon.$black-100;
  }

  .bx--list-box--expanded:hover.bx--list-box--light:hover {
    background-color: qiskit.$background-color-lighter;
  }

  .bx--list-box__menu-item--highlighted {
    background-color: qiskit.$background-color-light;
  }

  .bx--tag--filter {
    background-color: qiskit.$tag-background-color;
    color: qiskit.$tag-text-color;
    margin-left: 0;
    margin-right: carbon.$spacing-05;
  }

  .bx--tag--high-contrast .bx--tag__close-icon:hover {
    background-color: qiskit.$tag-background-color;
  }

  .bx--list-box__menu-item:hover .bx--list-box__menu-item__option {
    color: carbon.$black-100;
  }
}
</style>
