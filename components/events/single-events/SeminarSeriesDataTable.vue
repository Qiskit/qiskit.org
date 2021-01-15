<template>
  <cv-data-table
    class="seminar-series-data-table"
    :columns="columns"
  >
    <template slot="data">
      <cv-data-table-row v-for="({ speaker, nameOfTalk, institution, dateOfTalk, linkToTalk }, rowIndex) in data" :key="`${rowIndex}`">
        <cv-data-table-cell>{{ speaker }}</cv-data-table-cell>
        <cv-data-table-cell>{{ nameOfTalk }}</cv-data-table-cell>
        <cv-data-table-cell>{{ institution }}</cv-data-table-cell>
        <cv-data-table-cell>{{ dateOfTalk }}</cv-data-table-cell>
        <cv-data-table-cell><AppCta kind="ghost" v-bind="linkToTalk" /></cv-data-table-cell>
      </cv-data-table-row>
    </template>
  </cv-data-table>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { GeneralLink } from '~/constants/appLinks'

type tableRow = {
  speaker: string,
  nameOfTalk: string,
  institution: string,
  dateOfTalk: string,
  linkToTalk: GeneralLink
}

@Component
export default class SeminarSeriesDataTable extends Vue {
  @Prop(Array) data!: tableRow[]

  columns = ['Speaker', 'Seminar title', 'Institution', 'Date of talk', 'Link to talk']
}
</script>

<style lang="scss" scoped>
.seminar-series-data-table {
  overflow-x: scroll;
}

</style>

<style lang="scss">
.bx--data-table th {
  color: $black-100;
  background-color: $cool-gray-20;
}

.bx--data-table tbody tr td, .bx--data-table tbody tr:hover td {
  color: $cool-gray-80;
  background-color: $white;
  border-top: none;
  border-bottom: 1px solid $cool-gray-20;
}
</style>
