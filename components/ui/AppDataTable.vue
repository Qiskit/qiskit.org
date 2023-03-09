<template>
  <bx-data-table class="app-data-table">
    <bx-table>
      <bx-table-head>
        <bx-table-header-row>
          <bx-table-header-cell
            v-for="columnTitle in columns"
            :key="columnTitle"
          >
            {{ columnTitle }}
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
  component?: string;
  styles?: string;
  data: string | GeneralLink;
}

interface Props {
  columns: string[];
}

defineProps<Props>();
</script>

<style lang="scss">
@use "~/assets/scss/helpers/index.scss" as qiskit;

bx-table-body {
  background-color: qiskit.$background-color-white;
}
</style>
