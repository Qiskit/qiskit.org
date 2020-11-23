<template>
  <cv-multi-select
    class="app-multi-select"
    :theme="theme"
    :label="label"
    :options="options"
    :value="value"
    :selection-feedback="feedback"
    @change="$emit('change-on-multi-select', $event)"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class AppMultiSelect extends Vue {
  @Prop(Array) options!: string[]
  @Prop(String) label!: string
  @Prop(Array) value!: string[]

  theme: string = 'light'
  feedback: string = 'fixed'
}
</script>

<style lang="scss">
  .app-multi-select {

    & .bx--list-box--light,
    & .bx--list-box__menu {
      background-color: $white;
      border-bottom-color: $gray-20;
    }

    .bx--list-box__label,
    .bx--list-box__menu-item,
    .bx--list-box__menu-item--highlighted .bx--list-box__menu-item__option,
    .bx--list-box__menu-item__option {
      color: $white-text-01;
    }

    .bx--list-box__menu-item {
      background-color: $cool-gray-10;
      color: $white-text-01;
    }

    .bx--list-box__menu-icon {
      right: 0.8rem;
    }

    .bx--list-box__menu-icon > svg {
      fill: $black-100;
    }

    .bx--list-box--expanded:hover.bx--list-box--light:hover {
      background-color: $cool-gray-10;
    }

    .bx--checkbox-label::before {
      border: 1px solid $black-100;
    }

    .bx--list-box__menu-item--highlighted {
      background-color: $cool-gray-20;
    }

    .bx--tag--filter {
      background-color: $purple-70;
      color: $white;
      margin-left: 0;
      margin-right: $spacing-05;
    }

    .bx--tag--high-contrast .bx--tag__close-icon:hover {
      background-color: $purple-70;
    }

    .bx--checkbox:checked + .bx--checkbox-label::before {
      background-color: $black-100;
      border-color: $black-100;
      border-width: 1px;
    }

    .bx--checkbox:checked + .bx--checkbox-label::after {
      border-left: 2px solid $white;
      border-bottom: 2px solid $white;
    }

    .bx--list-box__menu-item:hover .bx--list-box__menu-item__option {
      color: $black-100;
    }
  }
</style>
