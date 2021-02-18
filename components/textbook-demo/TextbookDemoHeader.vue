<template>
  <header class="textbook-demo-header">
    <div class="textbook-demo-header__container">
      <div>
        <AppPageHeaderTitle>
          Qiskit Textbook (beta)
        </AppPageHeaderTitle>
        <div class="textbook-demo-header__dropdown-container">
          "Browse Content Dropdown"
        </div>
      </div>
      <div class="textbook-demo-header__cta-container">
        <AppCta v-bind="cta" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { TEXTBOOK_DEMO_START_LEARNING as CTA } from '~/constants/appLinks.ts'

@Component
export default class TextbookDemoHeader extends Vue {
  cta = CTA
}
</script>

<style lang="scss" scoped>
.textbook-demo-header {
  background-color: $cool-gray-10;
  height: 34rem;

  &__container {
    @include contained();
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    padding-top: $spacing-09;
  }

  &__dropdown-container {
    margin-top: $layout-03;
  }

  &__cta-container {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
