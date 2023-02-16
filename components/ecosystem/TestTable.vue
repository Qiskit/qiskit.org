<template>
  <AppDataTable
    class="test-table"
    :columns="[
      'Status',
      'Test Type',
      `${tableData[0][2].packageName} Version`,
      'Test Logs',
    ]"
  >
    <cv-data-table-row
      v-for="(row, rowIndex) in tableData"
      :key="`${rowIndex}`"
    >
      <cv-data-table-cell
        v-for="({ component, styles, data, addTooltip }, elementIndex) in row"
        :key="`${elementIndex}`"
      >
        <span v-if="component === 'span'" :style="styles">
          {{ data }}
          <cv-tooltip
            v-if="addTooltip"
            :tip="testTypeTooltip[data]"
            direction="bottom"
          />
        </span>
        <UiAppCta
          v-else-if="component === 'link'"
          class="app-card__cta"
          is-wider
          label="see test logs"
          kind="ghost"
          :url="data"
        />
        <CheckmarkFilled16
          v-else-if="component === true"
          :fill="styles"
          aria-label="Passing tests"
        />
        <ErrorFilled16
          v-else-if="component === false"
          :fill="styles"
          aria-label="Failing tests"
        />
        <PendingFilled16
          v-else
          fill="#c6c6c6"
          aria-label="No test information"
        />
      </cv-data-table-cell>
    </cv-data-table-row>
  </AppDataTable>
</template>

<script setup lang="ts">
import { TableRowElement } from "~/components/ui/AppDataTable.vue";

interface Props {
  filteredData?: Object[];
}

const props = withDefaults(defineProps<Props>(), {
  filteredData: () => [["", "", ""]],
});

const testTypeTooltip = {
  development:
    "This test type indicates the ecosystem tests were run for this package using the latest development version of Qiskit",
  stable:
    "This test type indicates the ecosystem tests were run for this package using the latest stable version of Qiskit",
  standard:
    "This test type means the ecosystem tests were run for this package using the Qiskit version specified in the package requirements",
  "last passing version":
    "This test type means the results in this row show the latest version of Qiskit for which the ecosystem tests pass for this package",
};

const tableData = computed(() => dataPerRow(props.filteredData));

function dataPerRow(filteredData: Object[]): TableRowElement[][] {
  return filteredData.map(
    ({ passed, testType, packageVersion, logsLink, packageName }: any) => [
      {
        component: passed,
        styles: passed ? "#42be65" : "#da1e28",
        data: "",
      },
      {
        component: "span",
        data: testType,
        addTooltip: true,
      },
      {
        component: "span",
        data: packageVersion,
        packageName,
      },
      {
        component: "link",
        data: logsLink,
      },
    ]
  );
}
</script>

<style lang="scss">
.test-table {
  overflow-x: unset !important;

  .bx--data-table th[aria-sort] {
    background-color: carbon.$cool-gray-10;
    border-bottom: 1px solidcarbon.$cool-gray-30;
  }

  .bx--data-table tbody tr td,
  .bx--data-table tbody tr:hover td {
    background-color: carbon.$cool-gray-10;
    border-bottom: 1px solidcarbon.$cool-gray-30;
    color: $black-100;
  }
}
</style>
