<template>
  <section>
    <h2 v-text="sectionTitle" />
    <AppDataTable :columns="dataTableColumns">
      <slot name="data-table-elements" />
    </AppDataTable>
    <slot />
  </section>
</template>

<script setup lang="ts">
import { TableRowElement } from '~/components/ui/AppDataTable.vue'

interface Props {
  dataTableColumns?: string[]
  dataTableElements?: TableRowElement[]
  sectionTitle: string
}

withDefaults(defineProps<Props>(), {
  dataTableColumns: () => [],
  dataTableElements: () => []
})
</script>
