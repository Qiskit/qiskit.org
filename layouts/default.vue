<template>
  <div>
    <qiskit-ui-shell variant="hide-account" @on-click="onClick" />
    <div class="main-container">
      <slot />
    </div>
    <FooterComponent old-container theme="light" />
  </div>
</template>

<script setup lang="ts">
import { useQiskitSchemaOrg } from "../composables/useQiskitSchemaOrg";

const { trackClickEvent } = useSegment();

function onClick(e: CustomEvent) {
  trackClickEvent(`${e.detail?.label?.toLowerCase()}`, "menu");
}

useQiskitSchemaOrg();
</script>

<style lang="scss" scoped>
.main-container {
  margin-top: 3.25rem;
}

qiskit-ui-shell {
  --header-content-max-width: 96rem;
}
</style>
