<template>
  <section>
    <h2 v-text="sectionTitle" />
    <UiDataTable :columns="dataTableColumns">
      <slot name="data-table-elements" />
    </UiDataTable>
    <slot />
  </section>
</template>

<script setup lang="ts">
interface Props {
  dataTableColumns: string[];
  sectionTitle: string;
}

defineProps<Props>();
</script>
