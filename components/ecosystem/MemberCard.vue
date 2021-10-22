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
    <div class="bx--row">
      <TestTable :columns="['', 'dev', 'stable']" :filtered-data="[['terra 0.16', 'pass', 'pass'], ['terra 0.17', 'fail', 'pass'], ['terra 0.18', 'fail', 'pass']]" class="bx--col-sm-4 bx--col-xlg-8" />
      <TestTable :columns="['', '']" :filtered-data="[['styles', 'pass'], ['coverage', 'fail']]" class="bx--col-sm-4 bx--col-xlg-8" />
    </div>
  </cv-tile>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class MemberCard extends Vue {
  @Prop({ type: Object, default: '' }) member!: object
}
</script>

<style lang="scss">
.member-card {
  margin-bottom: $spacing-08;
  height: 100%;
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
