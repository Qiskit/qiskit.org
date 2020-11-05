<template>
  <div class="meet-the-advocates">
    <h2 class="copy__title">
      Meet the Advocates
    </h2>
    <p class="copy__paragraph copy__paragraph_importance_support">
      Qiskit advocates are some of the finest minds in quantum computing,
      all over the world. If you are interested in getting involved with the
      quantum computing community, reach out to an advocate local to your area.
    </p>
    <AppFiltersResultsLayout>
      <template slot="filters-on-m-l-screen">
        <AppFieldset :label="filter.label">
          <client-only>
            <AppCheckbox
              v-for="option in filter.options"
              :key="option.label"
              v-bind="option"
            />
          </client-only>
        </AppFieldset>
      </template>
      <template slot="filters-on-s-screen">
        <AppMultiSelect v-bind="filter.label" />
      </template>
      <template slot="results">
        <AdvocateCard
          v-for="advocate in advocates"
          :key="`advocate-${advocate.attributes.name}`"
          v-bind="advocate.attributes"
        />
      </template>
    </AppFiltersResultsLayout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import AdvocateCard from '~/components/advocates/AdvocateCard.vue'
import AppMultiSelect from '~/components/ui/AppMultiSelect.vue'
import AppFieldset from '~/components/ui/AppFieldset.vue'
import AppCheckbox from '~/components/ui/AppCheckbox.vue'
import AppFiltersResultsLayout from '~/components/ui/AppFiltersResultsLayout.vue'

type multiSelectOption = {
  label: string,
  value: string,
  name: string
}

@Component({
  components: {
    AdvocateCard,
    AppMultiSelect,
    AppFieldset,
    AppCheckbox,
    AppFiltersResultsLayout
  }
})
export default class extends Vue {
  @Prop(Array) advocates!: any

  regions = ['Europe', 'Asia', 'Africa', 'America']

  regionsOptions = this.getOptions(this.regions)
  regionsLabel: string = 'Locations'
  regionsFilters: string = 'regionFilters'

  filter = {
    label: this.regionsLabel,
    options: this.regionsOptions,
    filterType: this.regionsFilters
  }

  getOptions (optionsList: any): Array<multiSelectOption> {
    return optionsList.map((item: string) => ({ label: item, value: item, name: item }))
  }
}
</script>
