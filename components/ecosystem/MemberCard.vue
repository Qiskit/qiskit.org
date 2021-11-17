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
        :columns="['terra version', 'test date (UTC)', 'test type', 'result']"
        :filtered-data="rows"
      />
    </div>
  </cv-tile>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component({
  computed: {
    rows: {
      get () {
        const rows = []
        if (this.member.tests_results) {
          this.member.tests_results.forEach((result: any) => {
            const date = new Date(result.timestamp * 1000).toLocaleString('en-UK', { timeZone: 'UTC' })
            const r = [result.terra_version, date, result.test_type, result.passed]
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
