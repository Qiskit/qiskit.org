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
              :key="option"
              :option="option"
            />
          </client-only>
        </AppFieldset>
      </template>
      <template slot="filters-on-s-screen">
        <AppMultiSelect v-bind="filter" />
      </template>
      <template slot="results">
        <AdvocateCard
          v-for="advocate in advocates"
          :key="`advocate-${advocate.name}`"
          v-bind="advocate"
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

  filter = {
    label: 'Locations',
    options: ['Americas', 'Asia Pacific', 'Europe', 'Africa'],
    filterType: 'regionFilters'
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
