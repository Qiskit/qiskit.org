<template>
  <div>
    <qiskit-ui-shell v-if="isALearningPage" @on-click="onClick" />
    <qiskit-ui-shell v-else variant="hide-account" @on-click="onClick" />
    <div class="main-container">
      <slot />
    </div>
    <Footer theme="light" />
  </div>
</template>

<script setup lang="ts">
import "@qiskit/web-components/ui-shell";

const route = useRoute();
const { trackClickEvent } = useSegment();

function onClick(e: CustomEvent) {
  trackClickEvent(`${e.detail?.label?.toLowerCase()}`, "menu");
}

const isALearningPage = computed(() => route.path.includes("/learn"));
</script>

<style lang="scss" scoped>
.main-container {
  margin-top: 3.25rem;
}

qiskit-ui-shell {
  --header-content-max-width: 96rem;
}
</style>
