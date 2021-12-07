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
        v-if="member.testsResults.length != 0"
        class="test-table"
        :filtered-data="testRows"
      />
    </div>
    <div>
      <StylesTable
        v-if="(member.stylesResults && member.stylesResults.length !=0) | (member.coveragesResults && member.coveragesResults.length !=0)"
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
        const rows: any[][] = []
        const matrix: any = {}

        const self = this as any
        if (self.member.testsResults) {
          self.member.testsResults.forEach(({ terraVersion, testType, passed, timestamp }: any) => {
            if (!matrix[terraVersion]) { matrix[terraVersion] = {} }
            const dateVal = new Date(timestamp * 1000).toLocaleString('en-UK', { timeZone: 'UTC' })
            matrix[terraVersion].date = dateVal
            matrix[terraVersion][testType] = passed
          })
          for (const [key, val] of Object.entries(matrix)) {
            const testType = val as any
            if (testType.STABLE_COMPATIBLE === undefined) { testType.STABLE_COMPATIBLE = 'no data' }
            if (testType.DEV_COMPATIBLE === undefined) { testType.DEV_COMPATIBLE = 'no data' }
            if (testType.STANDARD === undefined) { testType.STANDARD = 'no data' }
            const r = [key, testType.STABLE_COMPATIBLE, testType.DEV_COMPATIBLE, testType.STANDARD, testType.date]
            rows.push(r)
          }
        }
        return rows
      }
    },
    otherRows: {
      get () {
        const rows: any[][] = []
        const self = this as any
        if (self.member.stylesResults) {
          self.member.stylesResults.forEach(({ styleType, passed }: any) => {
            const r = ['style', styleType, passed]
            rows.push(r)
          })
        }
        if (self.member.coveragesResults) {
          self.member.coveragesResults.forEach(({ coverageType, passed }: any) => {
            const r = ['coverage', coverageType, passed]
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
