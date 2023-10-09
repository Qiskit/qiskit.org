<template>
  <section>
    <div class="cds--row">
      <div class="cds--col-md-5 cds--col-lg-8 cds--col-xlg-7 cds--col-max-6">
        <h2 v-text="sectionTitle" />
        <p v-if="sectionDescription">
          {{ sectionDescription }}
        </p>
      </div>
    </div>
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
  sectionDescription?: string;
}

defineProps<Props>();
</script>
