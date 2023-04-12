<template>
  <bx-data-table class="data-table">
    <bx-table>
      <bx-table-head>
        <bx-table-header-row>
          <bx-table-header-cell v-for="column in columns" :key="column">
            {{ column }}
          </bx-table-header-cell>
        </bx-table-header-row>
      </bx-table-head>
      <bx-table-body>
        <slot />
      </bx-table-body>
    </bx-table>
  </bx-data-table>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/data-table/index.js";
import { GeneralLink } from "~/constants/appLinks";

export interface TableRowElement {
  addTooltip?: boolean;
  component?: string;
  packageName?: string;
  styles?: string;
  data: string | GeneralLink;
}

interface Props {
  columns: string[];
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
@use "~/assets/scss/helpers/index.scss" as qiskit;

.data-table {
  display: block;
  overflow-x: scroll;
  max-width: 100%;
}

bx-table-header-cell {
  --cds-ui-03: #{qiskit.$background-color-light};
}
</style>

<style lang="scss">
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

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

bx-table-body {
  background-color: qiskit.$background-color-white;
}
</style>
