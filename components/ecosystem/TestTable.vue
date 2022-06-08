<template>
  <AppDataTable :columns="['Status', 'Test Type', 'Terra Version']">
    <cv-data-table-row
      v-for="(row, rowIndex) in tableData"
      :key="`${rowIndex}`"
    >
      <cv-data-table-cell
        v-for="({ component, styles, data }, elementIndex) in row"
        :key="`${elementIndex}`"
      >
        <!-- eslint-disable vue/no-v-html -->
        <span v-if="component == 'span'" :style="styles" v-html="data" />
        <CheckmarkFilled16
          v-else-if="component === true"
          :fill="styles"
          aria-label="Passing tests"
        />
        <ErrorFilled16
          v-else-if="component === false"
          :fill="styles"
          aria-label="Failing tests"
        />
        <PendingFilled16
          v-else
          fill="#c6c6c6"
          aria-label="No test information"
        />
        <!-- eslint-enable -->
      </cv-data-table-cell>
    </cv-data-table-row>
  </AppDataTable>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { TableRowElement } from '~/components/ui/AppDataTable.vue'

@Component
export default class TestTable extends Vue {
  @Prop({ type: Array, default: () => [['', '', '']] }) filteredData!: Object[];

  tableData = this.dataPerRow(this.filteredData);

  dataPerRow (filteredData: Object[]): TableRowElement[][] {
    return filteredData.map(({ passed, testType, terraVersion }: any) => [
      {
        component: passed,
        styles: passed ? '#42be65' : '#da1e28',
        data: ''
      },
      {
        component: 'span',
        data: testType
      },
      {
        component: 'span',
        data: terraVersion
      }
    ])
  }
}
</script>

<style lang="scss">
.test-table {
  padding: 0;
  background-color: $cool-gray-10;
}

.bx--data-table th[aria-sort] {
  background-color: $cool-gray-10;
  border-bottom: 1px solid $cool-gray-30;
}

.bx--data-table tbody tr td,
.bx--data-table tbody tr:hover td {
  background-color: $cool-gray-10 !important;
  border-bottom: 1px solid $cool-gray-30 !important;
  color: $black-100;
}
</style>
