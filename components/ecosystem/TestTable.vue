<template>
  <cv-data-table
    ref="table"
    :columns="columns"
    :data="filteredData"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class TestTable extends Vue {
  @Prop({ type: Array, default: () => ['', 'dev', 'stable'] }) columns!: string[]
  @Prop({ type: Array, default: () => [['terra 0.16', 'pass', 'pass'], ['terra 0.17', 'fail', 'pass'], ['terra 0.18', 'fail', 'pass']] }) filteredData!: string[]
}
</script>

<style lang="scss">
.member-card {
  margin-bottom: $spacing-06;
  height: 90%;
}
.title-row {
  display: flex;
  flex-direction: row;
}
.cv-tag {
  margin-left: 0.5rem;
  margin-top: 0.5rem;
}
</style>
