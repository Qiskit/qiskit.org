<template>
  <div>
    <header>
      <qiskit-ui-shell v-if="isALearningPage" @on-click="onClick" />
      <qiskit-ui-shell v-else variant="hide-account" @on-click="onClick" />
    </header>
    <main class="main">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { trackClickEvent } = useSegment();

function onClick(e: CustomEvent) {
  trackClickEvent(`${e.detail?.label?.toLowerCase()}`, "menu");
}

const isALearningPage = computed(() => route.path.includes("/learn"));
</script>

<style lang="scss" scoped>
.main {
  margin-top: 3.25rem;
}

qiskit-ui-shell {
  --header-content-max-width: 96rem;
}
</style>
