<template>
  <header class="textbook-demo-header">
    <div class="textbook-demo-header__container">
      <div>
        <AppPageHeaderTitle kind="secondary">
          Qiskit Textbook (beta)
        </AppPageHeaderTitle>
        <AppMegaDropdownMenu
          class="textbook-demo-header__dropdown"
          kind="secondary"
          :placeholder="dropdownMenuPlaceholder"
          :content="dropdownMenuContent"
        />
      </div>
      <AppCta v-bind="startLearningCTA" class="textbook-demo-header__cta" />
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { TEXTBOOK_DEMO_START_LEARNING } from '~/constants/appLinks'
import { TEXTBOOK_DEMO_MEGA_MENU } from '~/constants/megaMenuLinks'

@Component
export default class TextbookDemoHeader extends Vue {
  startLearningCTA = TEXTBOOK_DEMO_START_LEARNING
  dropdownMenuPlaceholder = 'Browse content'
  dropdownMenuContent = TEXTBOOK_DEMO_MEGA_MENU
}
</script>

<style lang="scss" scoped>
.textbook-demo-header {
  background: linear-gradient(315deg, $cool-gray-10 0%, $blue-40 25%, $purple-70 100%);
  height: 37.5rem;

  &__container {
    @include contained();
    max-width: $max-size;
    background-image: url("/images/textbook-demo/qiskit-logo-header.png");
    background-position: right center;
    background-repeat: no-repeat;
    background-size: 50% auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding-top: $spacing-09;

    @include mq($from:medium, $until: large) {
      padding-top: $layout-06;
      background-position: calc(100% + 5rem) calc(100% + 5rem);
      background-size: 60%;
    }

    @include mq($until: medium) {
      background-position: calc(100% + 5rem) calc(100% + 2rem);
      background-size: 90%;
    }
  }

  &__dropdown {
    margin-top: $layout-03;
  }

  &__cta {
    align-self: flex-end;
  }
}
</style>
