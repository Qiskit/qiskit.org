<template>
  <section>
    <h2 v-text="sectionTitle" />
    <div style="max-width: 550px;">
      <p>
        Extension Events are intimate gatherings at various campuses, tailored for a select few attendees.
        Due to their close-knit nature, we do not provide links as these events primarily take place within the institution's community.
      </p>
    </div>
    <div class="scrollable-table">
      <UiDataTable :columns="dataTableColumns">
        <slot name="data-table-elements" />
      </UiDataTable>
    </div>
    <slot />
  </section>
</template>

<script setup lang="ts">
import { ref, PropType } from 'vue';

interface Props {
  dataTableColumns: string[];
  sectionTitle: string;
  sectionDescription: string;
}

defineProps<Props>();
</script>


<style lang="scss" scoped>

.scrollable-table {
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: 637px;
  overflow-y: auto;
}

</style>






