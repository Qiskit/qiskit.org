<template>
  <div>
    <header>
      <qiskit-ui-shell variant="hide-account" @on-click="onClick" />
    </header>
    <main class="main">
      <slot />
    </main>
    <LayoutFooter />
    <UiAlchemerSurveyTrigger />
  </div>
</template>

<script setup lang="ts">
const { trackClickEvent } = useSegment();

function onClick(e: CustomEvent) {
  trackClickEvent(`${e.detail?.label?.toLowerCase()}`, "menu");
}
</script>

<style lang="scss" scoped>
.main {
  margin-top: 3.25rem;
}

qiskit-ui-shell {
  --header-content-max-width: 96rem;
}
</style>
