<template>
  <!-- tabindex is needed to allow hiding the menu in iOS Safari -->
  <div class="layout" tabindex="-1">
    <slot />
    <FooterComponent theme="dark" />
  </div>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/helpers/index.scss" as qiskit;

.layout {
  background-color: qiskit.$background-color-black;
  color: qiskit.$text-color-lighter-2;
}

:deep(h2),
:deep(p) {
  color: qiskit.$text-color-lighter-2;
}

:deep(h3) {
  color: qiskit.$text-color-white;
}
</style>
