<template>
  <div>
    <qiskit-ui-shell variant="hide-account" @on-click="onClick" />
    <div class="main-container">
      <slot />
    </div>
    <Footer old-container theme="light" />
  </div>
</template>

<script setup lang="ts">
import "@qiskit/web-components/ui-shell";

function onClick(e: CustomEvent) {
  // TODO: Refactor tracking
  // $trackClickEvent(`${e.detail?.label?.toLowerCase()}`, "menu");
}
</script>

<style lang="scss" scoped>
.main-container {
  margin-top: 3.25rem;
}

qiskit-ui-shell {
  --header-content-max-width: 96rem;
}
</style>
