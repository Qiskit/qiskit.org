<template>
  <section class="data-table-section">
    <h2 class="copy__title">
      {{ sectionTitle }}
    </h2>
    <AppDataTable :columns="dataTableColumns" :elements="dataTableElements" />
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

<style lang="scss" scoped>
@import "~/assets/scss/blocks/copy.scss";

.data-table-section {
  .copy__title {
    max-width: initial;
  }
}
</style>
