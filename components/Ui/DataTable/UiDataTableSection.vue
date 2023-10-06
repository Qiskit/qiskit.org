<template>
  <section>
    <div class="cds--row">
      <div class="cds--col-md-5 cds--col-lg-8 cds--col-xlg-7 cds--col-max-6">
        <h2 v-text="sectionTitle" />
        <p>
          Extension Events are intimate gatherings at various campuses, tailored
          for a select few attendees. Due to their close-knit nature, we do not
          provide links as these events primarily take place within the
          institution's community.
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
  sectionDescription: string;
}

defineProps<Props>();
</script>
