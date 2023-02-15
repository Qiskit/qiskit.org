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
interface Props {
  dataTableColumns: string[];
  sectionTitle: string;
}

defineProps<Props>();
</script>
