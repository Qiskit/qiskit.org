<template>
  <cv-data-table
    class="seminar-series-data-table"
    :columns="columns"
  >
    <template slot="data">
      <cv-data-table-row v-for="(row, rowIndex) in dataPerRow" :key="`${rowIndex}`">
        <cv-data-table-cell v-for="({ component, styles, data}, elementIndex) in row" :key="`${elementIndex}`">
          <AppCta v-if="isAppCtaComponent(component)" kind="ghost" v-bind="data" :style="styles" />
          <component
            :is="component"
            v-else
            :style="styles"
          >
            {{ data }}
          </component>
        </cv-data-table-cell>
      </cv-data-table-row>
    </template>
  </cv-data-table>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { GeneralLink } from '~/constants/appLinks'
import { SeminarSeriesEvent } from '~/hooks/event-conversion-utils'

interface tableRowElement {
  component: string,
  styles: string,
  data: string | GeneralLink,
}

@Component
export default class SeminarSeriesDataTable extends Vue {
  @Prop({ type: Array, default: () => [] }) events!: SeminarSeriesEvent[]
  @Prop({ type: String, required: true }) eventsSection!: string

  dataPerRow: tableRowElement[][] = this.events.map(event => ([
    {
      component: 'span',
      styles: 'min-width: 9rem; display: inline-block;',
      data: event.speaker
    },
    {
      component: 'span',
      styles: 'min-width: 9rem; display: inline-block;',
      data: event.institution
    },
    {
      component: 'span',
      styles: 'min-width: 19rem; display: inline-block;',
      data: event.title
    },
    {
      component: 'span',
      styles: 'min-width: 8rem; display: inline-block;',
      data: event.date
    },
    {
      component: 'AppCta',
      styles: 'min-width: 5rem;',
      data: {
        url: event.to,
        label: 'Join event',
        segment: {
          action: `seminar-series > ${this.eventsSection} > talk-on-youtube`
        }
      }
    }
  ]))

  columns = ['Speaker', 'Institution', 'Name of talk', 'Date of talk', 'Link to talk']

  isAppCtaComponent (component: string) : boolean {
    return component === 'AppCta'
  }
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
