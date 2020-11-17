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
            <cv-checkbox
              v-for="option in filter.options"
              :key="option"
              v-model="activeFilters"
              :label="option"
              :value="option"
            />
          </client-only>
        </AppFieldset>
      </template>
      <template slot="filters-on-s-screen">
        <AppMultiSelect
          :label="filter.label"
          :options="filter.options"
          :value="activeFilters"
          @change-selection="updateActiveFilters($event)"
        />
      </template>
      <template slot="results">
        <InfiniteScroll
          v-slot="advocate"
          :items="filteredAdvocates"
          :min-items="5"
          :key-generator="(advocate) => advocate.name"
        >
          <AdvocateCard v-bind="advocate" />
        </InfiniteScroll>
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
import AppFiltersResultsLayout from '~/components/ui/AppFiltersResultsLayout.vue'
import InfiniteScroll from '~/components/ui/InfiniteScroll.vue'
import { ADVOCATES_WORLD_REGION_OPTIONS } from '~/store/modules/advocates.ts'
import { Advocate } from '~/types/advocate'

@Component({
  components: {
    AdvocateCard,
    AppMultiSelect,
    AppFieldset,
    AppFiltersResultsLayout,
    InfiniteScroll
  }
})
export default class MeetTheAdvocates extends Vue {
  @Prop(Array) advocates!: Advocate[]

  private activeFilters: string[] = [];

  private filter = {
    label: 'Locations',
    options: ADVOCATES_WORLD_REGION_OPTIONS
  }

  /**
   * List of advocates filtered by selected locations.
   * The selected filter locations correspond to advocate regions.
   * If no location is selected in the filter, all advocates shall be shown.
   */
  get filteredAdvocates (): Advocate[] {
    if (this.activeFilters.length === 0) {
      return this.advocates
    }

    return this.advocates.filter(advocate => this.activeFilters.includes(advocate.region))
  }

  /**
   * Updates the active filters.
   */
  updateActiveFilters (activeFilters: string[]): void {
    this.activeFilters = activeFilters
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/copy.scss';

.meet-the-advocates {
  @include contained();
  margin-top: $layout-06;
}
</style>
