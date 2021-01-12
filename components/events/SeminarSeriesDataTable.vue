<template>
  <cv-data-table
    ref="table"
    class="seminar-series-data-table"
    :columns="columns"
    zebra="zebra"
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
export default class AppFieldset extends Vue {
  @Prop(Array) data!: tableRow[]

  columns = ['Speaker', 'Name of talk', 'Institution', 'Date of talk', 'Link to talk']
}
</script>

<style lang="scss">

.seminar-series-data-table {

}
</style>
