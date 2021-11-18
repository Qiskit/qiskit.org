<template>
  <cv-tile
    class="member-card"
  >
    <div class="title-row">
      <h2>
        <AppLink :url="member.url">
          {{ member.name }}
        </AppLink>
      </h2>
      <div>
        <cv-tag
          kind="purple"
          :label="member.tier"
        />
      </div>
      <div
        v-for="(label, index) in member.labels"
        :key="index"
      >
        <cv-tag
          kind="gray"
          :label="label"
        />
      </div>
    </div>
    <p>{{ member.licence }}</p>
    <p>
      {{ member.description }}
    </p>
    <div>
      <TestTable
        v-if="member.tests_results.length != 0"
        class="test-table"
        :filtered-data="rows"
      />
    </div>
    <div>
      <cv-data-table
        ref="table"
        class="test-table"
        :columns="exampleCols"
        :data="exampleRows"
      />
    </div>
  </cv-tile>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component({
  data () {
    return {
      exampleCols: [' ', 'Type', 'Result'],
      exampleRows: [['style', 'pylint', 'pass'], ['coverage', 'coverage3', 'fail']]
    }
  },
  computed: {
    rows: {
      get () {
        const rows = []
        if (this.member.tests_results) {
          // group data by terra version number
          const versionGroups = this.member.tests_results.reduce((groups: any, item: any) => {
            const group = (groups[item.terra_version] || [])
            group.push(item)
            groups[item.terra_version] = group
            return groups
          }, {})

          // for each version number, group data by test type (dev, stable, standard)
          for (const [version, testArray] of Object.entries(versionGroups)) {
            const groupsByTestType = testArray.reduce((groups: any, item: any) => {
              const group = (groups[item.test_type] || [])
              group.push(item)
              groups[item.test_type] = group
              return groups
            }, {})

            // get date of last test (assumes all tests for the same version have same timestamp)
            const date = new Date(testArray[0].timestamp * 1000).toLocaleString('en-UK', { timeZone: 'UTC' })

            // construct row for data table
            const r = [
              version,
              groupsByTestType.STABLE_COMPATIBLE ? groupsByTestType.STABLE_COMPATIBLE[0].passed : null,
              groupsByTestType.DEV_COMPATIBLE ? groupsByTestType.DEV_COMPATIBLE[0].passed : null,
              groupsByTestType.STANDARD ? groupsByTestType.STANDARD[0].passed : null,
              date]
            rows.push(r)
          }
        }
        return rows
      }
    }
  }
})
export default class MemberCard extends Vue {
  @Prop({ type: Object, default: '' }) member!: object
}
</script>

<style lang="scss">
.member-card {
  margin-bottom: $spacing-08;
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

.test-table {
  padding-bottom: 0.5rem;
}

</style>
