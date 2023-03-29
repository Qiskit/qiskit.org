<template>
  <section>
    <h2 v-text="sectionTitle" />
    <UiAppDataTable :columns="dataTableColumns">
      <slot name="data-table-elements" />
    </UiAppDataTable>
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
