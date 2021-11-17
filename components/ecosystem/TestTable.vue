<template>
  <cv-data-table
    ref="table"
    class="table"
    :columns="columns"
  >
    <template slot="data">
      <cv-data-table-row v-for="(row, rowIndex) in filteredData" :key="`${rowIndex}`" :value="`${rowIndex}`">
        <cv-data-table-cell>{{ row[0] }}</cv-data-table-cell>
        <cv-data-table-cell>{{ row[1] }}</cv-data-table-cell>
        <cv-data-table-cell>{{ row[2] }}</cv-data-table-cell>
        <cv-data-table-cell v-if="row[3]">
          <cv-tag kind="green" label="passed" />
        </cv-data-table-cell>
        <cv-data-table-cell v-else>
          <cv-tag kind="red" label="failed" />
        </cv-data-table-cell>
      </cv-data-table-row>
    </template>
  </cv-data-table>
</template>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class TestTable extends Vue {
  @Prop({ type: Array, default: () => ['', 'dev', 'stable'] }) columns!: string[]
  @Prop({ type: Array, default: () => [['terra 0.16', 'pass', 'pass'], ['terra 0.17', 'fail', 'pass'], ['terra 0.18', 'fail', 'pass']] }) filteredData!: string[]
}
</script>
