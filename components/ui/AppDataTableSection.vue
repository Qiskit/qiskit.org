<template>
  <section>
    <h2 v-text="sectionTitle" />
    <AppDataTable :columns="dataTableColumns">
      <slot name="data-table-elements" />
    </AppDataTable>
    <slot />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { TableRowElement } from '~/components/ui/AppDataTable.vue'

@Component
export default class AppDataTableSection extends Vue {
  @Prop({ type: String, required: true }) sectionTitle!: string
  @Prop({ type: Array, default: () => [] }) dataTableColumns!: string[]
  @Prop({ type: Array, default: () => [] }) dataTableElements!: TableRowElement[]
}
</script>
