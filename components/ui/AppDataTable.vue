<template>
  <cv-data-table class="app-data-table" :columns="columns" :sortable="false">
    <template #data>
      <slot />
    </template>
  </cv-data-table>
</template>

<script setup lang="ts">
import { GeneralLink } from "~/constants/appLinks";

export interface TableRowElement {
  component?: string;
  styles?: string;
  data: string | GeneralLink;
}

interface Props {
  columns: string[];
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
.app-data-table {
  overflow-x: scroll;
  max-width: 100%;
}
</style>

<style lang="scss">
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.bx--data-table th {
  color: $black-100;
  background-color: qiskit.$background-color-light;

  // TODO: remove this override once issue is fixed
  // https://github.com/carbon-design-system/carbon-components-vue/issues/1161#issuecomment-815689534
  &[aria-sort] {
    padding: carbon.$spacing-05;
  }
}

.bx--data-table tbody tr td,
.bx--data-table tbody tr:hover td {
  background-color: qiskit.$background-color-white;
  border-top: none;
  border-bottom: 1px solid qiskit.$border-color;
}

.bx--data-table li {
  list-style-type: disc;
  margin-left: carbon.$spacing-06;
}
</style>
