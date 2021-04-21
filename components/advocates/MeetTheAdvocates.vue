<template>
  <section id="meet-the-advocates" class="meet-the-advocates">
    <h2>
      Meet the Advocates
    </h2>
    <p class="copy__paragraph copy__paragraph_importance_support">
      Qiskit advocates are some of the finest minds in quantum computing,
      all over the world. If you are interested in getting involved with the
      quantum computing community, reach out to an advocate local to your area.
    </p>
    <p class="copy__paragraph copy__paragraph_importance_support">
      <AppLink class="copy__link" :url="joinSlackLink">
        Sign-up for the Qiskit Slack workspace
      </AppLink>
      to reach the advocates and join the conversation.
    </p>
    <AppFiltersResultsLayout>
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
        <InfiniteScroll
          v-slot="advocate"
          :items="advocates"
          :min-items="5"
          :key-generator="(advocate) => advocate.name"
        >
          <AdvocateCard v-bind="advocate" />
        </InfiniteScroll>
      </template>
    </AppFiltersResultsLayout>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, MapperForStateWithNamespace } from 'vuex'
import { Component, Prop } from 'vue-property-decorator'
import AdvocateCard from '~/components/advocates/AdvocateCard.vue'
import AppMultiSelect from '~/components/ui/AppMultiSelect.vue'
import AppFieldset from '~/components/ui/AppFieldset.vue'
import AppFiltersResultsLayout from '~/components/ui/AppFiltersResultsLayout.vue'
import InfiniteScroll from '~/components/ui/InfiniteScroll.vue'
import AppLink from '~/components/ui/AppLink.vue'
import { Advocate, ADVOCATES_WORLD_REGION_OPTIONS, State } from '~/store/advocates'

@Component({
  components: {
    AdvocateCard,
    AppMultiSelect,
    AppFieldset,
    AppFiltersResultsLayout,
    InfiniteScroll,
    AppLink
  },

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
  @include contained();

  margin-top: $layout-06;
}
</style>
