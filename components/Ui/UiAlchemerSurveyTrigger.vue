<template>
  <!-- The ID `alchemer-survey-trigger` is required to trigger the popup -->
  <bx-btn
    :id="buttonId"
    class="ui-alchemer-survey-trigger"
    size="sm"
    type="button"
    @click="hideButton"
  >
    <div class="ui-alchemer-survey-trigger__label">Feedback</div>
  </bx-btn>
</template>

<script setup lang="ts">
const buttonId = "alchemer-survey-trigger";

function hideButton() {
  const button = document.getElementById(buttonId);
  if (button) {
    button.style.display = "none";
  }
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.ui-alchemer-survey-trigger {
  &::part(button) {
    padding: carbon.$spacing-04 carbon.$spacing-02;
    position: fixed;
    right: 0;
    top: 50%;
    transform: rotate(180deg);
    z-index: 300;
  }

  &__label {
    writing-mode: vertical-rl;
  }
}
</style>
