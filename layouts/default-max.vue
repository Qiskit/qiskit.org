<template>
  <div>
    <qiskit-ui-shell v-if="isALearningPage" @on-click="onClick" />
    <qiskit-ui-shell v-else variant="hide-account" @on-click="onClick" />
    <div class="main-container">
      <slot />
    </div>
    <LayoutFooter theme="light" />
  </div>
</template>

<script setup lang="ts">
import { useQiskitSchemaOrg } from "../composables/useQiskitSchemaOrg";

const route = useRoute();
const { trackClickEvent } = useSegment();

function onClick(e: CustomEvent) {
  trackClickEvent(`${e.detail?.label?.toLowerCase()}`, "menu");
}

const isALearningPage = computed(() => route.path.includes("/learn"));

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
