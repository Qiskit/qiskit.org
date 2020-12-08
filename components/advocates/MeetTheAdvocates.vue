<template>
  <section id="meet-the-advocates" class="meet-the-advocates">
    <h2 class="copy__title">
      Meet the Advocates
    </h2>
    <p class="copy__paragraph copy__paragraph_importance_support">
      Qiskit advocates are some of the finest minds in quantum computing,
      all over the world. If you are interested in getting involved with the
      quantum computing community, reach out to an advocate local to your area.
    </p>
    <p class="copy__paragraph copy__paragraph_importance_support">
      <strong>Note:</strong> you must have a <AppLink class="copy__link" :url="joinSlackLink">
        Slack account
      </AppLink> in the Qiskit workspace order to contact advocates.
    </p>
    <AppFiltersResultsLayout>
      <template slot="filters-on-m-l-screen">
        <AppFieldset :label="filter.label">
          <client-only>
            <cv-checkbox
              v-for="option in filter.options"
              :key="option"
              v-model="regionFilters"
              :label="option"
              :value="option"
              @change="setRegionFilters(regionFilters)"
            />
          </client-only>
        </AppFieldset>
      </template>
      <template slot="filters-on-s-screen">
        <AppMultiSelect
          :label="filter.label"
          :options="filter.options"
          :value="regionFilters"
          @change-selection="setRegionFilters($event)"
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
import { Component, Prop, Watch } from 'vue-property-decorator'
import AdvocateCard from '~/components/advocates/AdvocateCard.vue'
import AppMultiSelect from '~/components/ui/AppMultiSelect.vue'
import AppFieldset from '~/components/ui/AppFieldset.vue'
import AppFiltersResultsLayout from '~/components/ui/AppFiltersResultsLayout.vue'
import AppLink from '~/components/ui/AppLink.vue'
import InfiniteScroll from '~/components/ui/InfiniteScroll.vue'
import { Advocate, ADVOCATES_WORLD_REGION_OPTIONS, State } from '~/store/modules/advocates.ts'

@Component({
  components: {
    AdvocateCard,
    AppMultiSelect,
    AppFieldset,
    AppFiltersResultsLayout,
    AppLink,
    InfiniteScroll
  },

  computed: {
    ...mapState<MapperForStateWithNamespace>('advocates', {
      regionFiltersFromStore: (state: State) => state.regionFilters
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
  public regionFiltersFromStore!: string[]

  /**
   * Region filters.
   *
   * Reflects the component local state of the region filters, which syncs with
   * the region filters state from the Vuex store.
   *
   * This variable is necessary in order to bind its value to `cv-checkbox`. If
   * we were to bind the region filters value from the Vuex store directly, it
   * would result in store mutations when the active elements in the checkbox
   * group change.
   */
  private regionFilters: string[] = [];

  private filter = {
    label: 'Locations',
    options: ADVOCATES_WORLD_REGION_OPTIONS
  }

  mounted () {
    this.regionFilters = this.regionFiltersFromStore
  }

  @Watch('regionFiltersFromStore')
  onRegionFiltersFromStoreChanged (regionFiltersFromStore: string[]) {
    this.regionFilters = regionFiltersFromStore
  }

  /**
   * Updates the region filters in the Vuex store.
   */
  setRegionFilters (regionFilters: string[]): void {
    this.$store.commit('advocates/setRegionFilters', regionFilters)
  }

  joinSlackLink: string = 'https://ibm.co/joinqiskitslack'
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/copy.scss';

.meet-the-advocates {
  @include contained();
  margin-top: $layout-06;
}
</style>
