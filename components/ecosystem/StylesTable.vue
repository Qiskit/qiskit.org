<template>
  <cv-data-table
    ref="table"
    class="table"
  >
    <template slot="headings">
      <cv-data-table-heading align="center" heading="" />
      <cv-data-table-heading align="center" heading="Type" />
      <cv-data-table-heading align="center" heading="Result" />
    </template>
    <template slot="data">
      <cv-data-table-row v-for="(row, rowIndex) in filteredData" :key="`${rowIndex}`" :value="`${rowIndex}`">
        <cv-data-table-cell align="center">
          {{ row[0] }}
        </cv-data-table-cell>
        <cv-data-table-cell align="center">
          {{ row[1] }}
        </cv-data-table-cell>
        <cv-data-table-cell v-if="row[2] == true" align="center">
          <cv-tag kind="green" label="passed" />
        </cv-data-table-cell>
        <cv-data-table-cell v-else-if="row[2] == false" align="center">
          <cv-tag kind="red" label="failed" />
        </cv-data-table-cell>
        <cv-data-table-cell v-else align="center">
          <cv-tag kind="gray" label="no data" />
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
export default class StylesTable extends Vue {
  @Prop({ type: Array, default: () => [['', '', '']] }) filteredData!: string[]
}
</script>
