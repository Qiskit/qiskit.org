<template>
  <!-- The ID `alchemer-survey-trigger` is required to trigger the popup -->
  <bx-btn
    id="alchemer-survey-trigger"
    class="ui-alchemer-survey-trigger"
    size="sm"
    type="button"
  >
    Feedback</bx-btn
  >
</template>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.ui-alchemer-survey-trigger {
  &::part(button) {
    padding: carbon.$spacing-04 carbon.$spacing-02;
    position: fixed;
    right: 0;
    top: 50%;
    transform: rotate(180deg);
    writing-mode: vertical-lr;
    z-index: 300;
  }
}
</style>
