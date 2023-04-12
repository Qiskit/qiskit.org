<template>
  <UiDataTable
    class="test-table"
    :columns="[
      'Status',
      'Test Type',
      `${tableData[0][2].packageName} Version`,
      'Test Logs',
    ]"
  >
    <bx-table-row v-for="(row, rowIndex) in tableData" :key="`${rowIndex}`">
      <bx-table-cell
        v-for="({ component, styles, data, addTooltip }, elementIndex) in row"
        :key="`${elementIndex}`"
      >
        <span v-if="component === 'span'" :style="styles">
          {{ data }}
          <bx-tooltip-icon
            v-if="addTooltip"
            :body-text="testTypeTooltip[data]"
            direction="bottom"
          >
            <Information16 class="bx-tooltip-icon__icon" />
          </bx-tooltip-icon>
        </span>
        <UiCta
          v-else-if="component === 'link'"
          class="card__cta"
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
      </bx-table-cell>
    </bx-table-row>
  </UiDataTable>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/tooltip/tooltip-icon.js";
import Information16 from "@carbon/icons-vue/lib/information/16";
import CheckmarkFilled16 from "@carbon/icons-vue/lib/checkmark--filled/16";
import ErrorFilled16 from "@carbon/icons-vue/lib/error--filled/16";
import PendingFilled16 from "@carbon/icons-vue/lib/pending--filled/16";

interface filteredDataItem {
  logsLink: string;
  packageName: string | undefined;
  packageVersion: string;
  passed: boolean;
  testType: string;
  timestamp: string;
}

interface TestTypeToolTip {
  [key: string]: string;
}

interface Props {
  filteredData: filteredDataItem[];
}

const props = defineProps<Props>();

const testTypeTooltip: TestTypeToolTip = {
  development:
    "This test type indicates the ecosystem tests were run for this package using the latest development version of Qiskit",
  stable:
    "This test type indicates the ecosystem tests were run for this package using the latest stable version of Qiskit",
  standard:
    "This test type means the ecosystem tests were run for this package using the Qiskit version specified in the package requirements",
  "last passing version":
    "This test type means the results in this row show the latest version of Qiskit for which the ecosystem tests pass for this package",
};

const tableData = computed(() => {
  return props.filteredData.map(
    ({ passed, testType, packageVersion, logsLink, packageName }) => [
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
});
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.test-table {
  overflow-x: scroll;
}

bx-table-cell {
  --cds-hover-field: #{carbon.$cool-gray-10};
  --cds-text-02: #{carbon.$black-100};

  background-color: carbon.$cool-gray-10;
  border-bottom: 1px solid carbon.$cool-gray-30;
}
</style>
