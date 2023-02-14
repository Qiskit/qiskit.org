<template>
  <footer>
    <p>Copyright IBM Corp. 2018-{{ currentYear }}</p>
  </footer>
</template>

<script setup lang="ts">
const today = new Date()
const currentYear = today.getFullYear()
</script>

<style lang="scss" scoped>
@use "~/assets/scss/helpers/variables.scss" as qiskit;

footer {
  color: qiskit.$text-color;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 10rem;
  text-align: center;
  margin-top: 4rem;
  background-color: qiskit.$background-color-white;
}
</style>
