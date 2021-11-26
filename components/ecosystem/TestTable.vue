<template>
  <cv-data-table
    ref="table"
    class="table"
  >
    <template slot="headings">
      <cv-data-table-heading align="center" heading="Terra Version" />
      <cv-data-table-heading align="center" heading="Stable" />
      <cv-data-table-heading align="center" heading="Dev" />
      <cv-data-table-heading align="center">
        Standard
        <cv-tooltip
          direction="bottom"
          tip="Results of testing this package with the requirements provided by the project authors"
        />
      </cv-data-table-heading>
      <cv-data-table-heading align="center" heading="Date of last test (UTC)" />
    </template>
    <template slot="data">
      <cv-data-table-row v-for="(row, rowIndex) in filteredData" :key="`${rowIndex}`" :value="`${rowIndex}`">
        <cv-data-table-cell align="center">
          {{ row[0] }}
        </cv-data-table-cell>
        <cv-data-table-cell v-if="row[1] == true" align="center">
          <cv-tag kind="green" label="passed" />
        </cv-data-table-cell>
        <cv-data-table-cell v-else-if="row[1] == false" align="center">
          <cv-tag kind="red" label="failed" />
        </cv-data-table-cell>
        <cv-data-table-cell v-else align="center">
          <cv-tag kind="gray" label="no data" />
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
        <cv-data-table-cell v-if="row[3] == true" align="center">
          <cv-tag kind="green" label="passed" />
        </cv-data-table-cell>
        <cv-data-table-cell v-else-if="row[3] == false" align="center">
          <cv-tag kind="red" label="failed" />
        </cv-data-table-cell>
        <cv-data-table-cell v-else align="center">
          <cv-tag kind="gray" label="no data" />
        </cv-data-table-cell>
        <cv-data-table-cell align="center">
          {{ row[4] }}
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
  @Prop({ type: Array, default: () => [['', '', '', '', '']] }) filteredData!: string[]
}
</script>
