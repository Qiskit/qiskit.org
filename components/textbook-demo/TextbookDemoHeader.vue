<template>
  <header class="textbook-demo-header">
    <div class="textbook-demo-header__container">
      <div>
        <AppPageHeaderTitle>
          Qiskit Textbook (beta)
        </AppPageHeaderTitle>
        <AppMegaDropdownMenu
          class="textbook-demo-header__dropdown"
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
import { TEXTBOOK_DEMO_START_LEARNING } from '~/constants/appLinks.ts'
import { TEXTBOOK_DEMO_MEGA_MENU } from '~/constants/megaMenuLinks'
import AppMegaDropdownMenu from '~/components/ui/AppMegaDropdownMenu.vue'

@Component({
  components: {
    AppMegaDropdownMenu
  }
})
export default class TextbookDemoHeader extends Vue {
  startLearningCTA = TEXTBOOK_DEMO_START_LEARNING
  dropdownMenuPlaceholder = 'Browse content'
  dropdownMenuContent = TEXTBOOK_DEMO_MEGA_MENU
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
    justify-content: space-between;
    height: 100%;
    padding-top: $spacing-09;

    @include mq($until: large) {
      padding-top: $layout-06;
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
