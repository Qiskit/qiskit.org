<template>
  <section id="meet-the-advocates" class="bx--grid meet-the-advocates">
    <h2>
      Meet the Advocates
    </h2>
    <div class="bx--row">
      <div class="bx--col-md-5 bx--col-lg-8 bx--col-xlg-7 bx--col-max-6">
        <p>
          Qiskit advocates are some of the finest minds in quantum computing,
          all over the world. If you are interested in getting involved with the
          quantum computing community, reach out to an advocate local to your
          area.
        </p>
        <p>
          <AppLink :url="joinSlackLink">
            Sign-up for the Qiskit Slack workspace
          </AppLink>
          to reach the advocates and join the conversation.
        </p>
      </div>
    </div>
    <AppFiltersResultsLayout class="meet-the-advocates__filters-result-section">
      <template slot="filters-on-m-l-screen">
        <AppFieldset :label="filter.label">
          <client-only>
            <cv-checkbox
              v-for="option in filter.options"
              :key="option"
              :checked="isRegionFilterChecked(option)"
              :label="option"
              :value="option"
              @change="updateRegionFilter(option, $event)"
            />
          </client-only>
        </AppFieldset>
      </template>
      <template slot="filters-on-s-screen">
        <AppMultiSelect
          :label="filter.label"
          :options="filter.options"
          :value="regionFilters"
          @change-selection="updateRegionFilters($event)"
        />
      </template>
      <template slot="results">
        <div class="bx--row">
          <div
            v-for="(advocate, index) in advocates"
            :key="index"
            class="bx--col-max-8"
          >
            <AdvocateCard v-bind="advocate" />
          </div>
        </div>
      </template>
    </AppFiltersResultsLayout>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import type { MapperForStateWithNamespace } from 'vuex'
import { Component, Prop } from 'vue-property-decorator'
import { Advocate, ADVOCATES_WORLD_REGION_OPTIONS, State } from '~/store/advocates'

@Component({
  computed: {
    ...mapState<MapperForStateWithNamespace>('advocates', {
      regionFilters: (state: State) => state.regionFilters
    })
  }
})
export default class MeetTheAdvocates extends Vue {
  @Prop(Array) advocates!: Advocate[]

  /**
   * Region filters from Vuex store.
   *
   * Initialized with mapState.
   */
  public regionFilters!: string[]

  private filter = {
    label: 'Locations',
    options: ADVOCATES_WORLD_REGION_OPTIONS
  }

  isRegionFilterChecked (filterValue: string): boolean {
    return this.regionFilters.includes(filterValue)
  }

  updateRegionFilter (option: string, isChecked: boolean): void {
    const regionFilters = this.regionFilters.filter(oldOption => oldOption !== option)

    if (isChecked) {
      regionFilters.push(option)
    }

    this.updateRegionFilters(regionFilters)
  }

  updateRegionFilters (regionFilters: string[]): void {
    this.$store.commit('advocates/setRegionFilters', regionFilters)
  }

  joinSlackLink: string = 'https://ibm.co/joinqiskitslack'
}
</script>

<style lang="scss" scoped>
.meet-the-advocates {
  margin-top: $layout-06;

  &__filters-result-section {
    margin-top: $spacing-10;
  }
}
</style>
