<template>
  <header class="textbook-demo-header">
    <div class="textbook-demo-header__container">
      <div>
        <AppPageHeaderTitle>
          Qiskit Textbook (beta)
        </AppPageHeaderTitle>
        <div class="textbook-demo-header__dropdown-container">
          <TheMegaDropdownMenu/>
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
import TheMegaDropdownMenu from '~/components/ui/TheMegaDropdownMenu.vue'

@Component({
  components: {
    TheMegaDropdownMenu
  }
})
export default class TextbookDemoHeader extends Vue {
  cta = CTA
}
</script>

<style lang="scss" scoped>
.textbook-demo-header {
  background-color: $cool-gray-10;
  background-image: url("/images/textbook-demo/header.png");
  background-position: right top;
  background-repeat: no-repeat;
  background-size: 60% auto;
  height: 34rem;

  @include mq($until: large) {
    background-position: right bottom;
    background-size: 70% auto;
  }

  @include mq($until: medium) {
    background-size: contain;
  }

  &__container {
    @include contained();
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    padding-top: $spacing-09;

    @include mq($until: large) {
      padding-top: $layout-06;
    }
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
