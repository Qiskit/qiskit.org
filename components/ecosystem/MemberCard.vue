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
        :filtered-data="testRows"
      />
    </div>
    <div>
      <StylesTable
        v-if="(member.styles_results && member.styles_results.length !=0) | (member.coverages_results && member.coverages_results.length !=0)"
        class="test-table"
        :filtered-data="otherRows"
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
      exampleCols: [' ', 'Type', 'Result']
    }
  },
  computed: {
    testRows: {
      get () {
        const rows = []
        const matrix = {}

        const self = this as any
        if (self.member.tests_results) {
          self.member.tests_results.forEach(({ terra_version, test_type, passed, timestamp }) => {
            if (!matrix[terra_version]) { matrix[terra_version] = {} }
            const dateVal = new Date(timestamp * 1000).toLocaleString('en-UK', { timeZone: 'UTC' })
            matrix[terra_version].date = dateVal
            matrix[terra_version][test_type] = passed
          })
          for (const [key, val] of Object.entries(matrix)) {
            if (val.STABLE_COMPATIBLE === undefined) { val.STABLE_COMPATIBLE = 'no data' }
            if (val.DEV_COMPATIBLE === undefined) { val.DEV_COMPATIBLE = 'no data' }
            if (val.STANDARD === undefined) { val.STANDARD = 'no data' }
            const r = [key, val.STABLE_COMPATIBLE, val.DEV_COMPATIBLE, val.STANDARD, val.date]
            rows.push(r)
          }
        }
        return rows
      }
    },
    otherRows: {
      get () {
        const rows = []
        const self = this as any
        if (self.member.styles_results) {
          self.member.styles_results.forEach(({ style_type, passed }) => {
            const r = ['style', style_type, passed]
            rows.push(r)
          })
        }
        if (self.member.coverages_results) {
          self.member.coverages_results.forEach(({ coverage_type, passed }) => {
            const r = ['coverage', coverage_type, passed]
            rows.push(r)
          })
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
