<template>
  <client-only>
    <cv-multi-select
      class="app-multi-select"
      :theme="theme"
      :label="label"
      :options="formatedOptions"
      :value="value"
      :selection-feedback="feedback"
      @change="$emit('change-selection', $event)"
    />
  </client-only>
</template>

<script setup lang="ts">
type multiSelectOption = {
  label: string,
  value: string,
  name: string
}

interface Props {
  label: string,
  options: string[],
  value: string[]
}

const props = defineProps<Props>()

const formatedOptions = computed(() => formatOptions(props.options))

const theme = ref('light')
const feedback = ref('fixed')

function formatOptions (optionsList: any): Array<multiSelectOption> {
  return optionsList.map((item: string) => ({ label: item, value: item, name: item }))
}
</script>

<style lang="scss">
  .app-multi-select {
    & .bx--list-box--light,
    & .bx--list-box__menu {
      background-color: $background-color-white;
      border-bottom-color: $cool-gray-20;
    }

    .bx--list-box__menu-item {
      background-color: $background-color-lighter;
    }

    .bx--list-box__menu-icon {
      right: 0.8rem;
    }

    .bx--list-box__menu-icon > svg {
      fill: $black-100;
    }

    .bx--list-box--expanded:hover.bx--list-box--light:hover {
      background-color: $background-color-lighter;
    }

    .bx--list-box__menu-item--highlighted {
      background-color: $background-color-light;
    }

    .bx--tag--filter {
      background-color: $tag-background-color;
      color: $tag-text-color;
      margin-left: 0;
      margin-right: $spacing-05;
    }

    .bx--tag--high-contrast .bx--tag__close-icon:hover {
      background-color: $tag-background-color;
    }

    .bx--list-box__menu-item:hover .bx--list-box__menu-item__option {
      color: $black-100;
    }
  }
</style>
