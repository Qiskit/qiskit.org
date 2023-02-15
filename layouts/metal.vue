<template>
  <!-- tabindex is needed to allow hiding the menu in iOS Safari -->
  <div class="layout" tabindex="-1">
    <slot />
    <Footer theme="dark" />
  </div>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/helpers/index.scss" as qiskit;

.layout {
  background-color: qiskit.$background-color-black;
  color: qiskit.$text-color-lighter-2;
}

::v-deep {
  h2,
  p {
    color: qiskit.$text-color-lighter-2;
  }

  h3 {
    color: qiskit.$text-color-white;
  }
}
</style>
