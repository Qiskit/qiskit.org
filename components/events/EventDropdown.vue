<template>
  <div class="event-dropdown">
    <h1>Hello</h1>
    <cv-multi-select
      :theme="theme"
      :label="labelRegions"
      :options="regionOptions"
      :selection-feedback="feedback"
      @change="selectedOptions => updateWholeFilter('regionFilters', selectedOptions)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  CommunityEvent,
  WORLD_REGION_OPTIONS,
  COMMUNITY_EVENT_TYPE_OPTIONS,
  EventMultiSelectOption
} from '~/store/modules/events.ts'

export default class extends Vue {
  regions = WORLD_REGION_OPTIONS
  types = COMMUNITY_EVENT_TYPE_OPTIONS
  // multiselect
  regionOptions = this.getOptions(this.regions)
  typeOptions = this.getOptions(this.types)
  theme: string = 'light'
  labelRegions: string = 'Locations'
  labelTypes: string = 'Types'
  feedback: string = 'fixed'

  getOptions (optionsList): Array<EventMultiSelectOption> {
    console.log(this.regions, 'regions')
    // return optionsList.map(item => ({ label: item, value: item, name: item }))
    return [
      {
        label: 'test',
        value: 'test',
        name: 'test'
      }
    ]

  }

  getCheckedFilters (filter) {
    console.log(this, 'this')
    return (this as any)[filter]
  }

  updateWholeFilter (filter: string, filterValues: string[]): void {
    const { commit } = this.$store
    const payload = { filter, filterValues }

    commit('updateFilterSet', payload)
  }
}
</script>

<style lang="scss" scoped>
  .event-dropdown {
    background: orange;
  }
</style>
