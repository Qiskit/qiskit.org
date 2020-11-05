<template>
  <div class="meet-the-advocates">
    <div class="meet-the-advocates__container">
      <h2 class="copy__title">
        Meet the Advocates
      </h2>
      <p class="copy__paragraph copy__paragraph_importance_support">
        Qiskit advocates are some of the finest minds in quantum computing,
        all over the world. If you are interested in getting involved with the
        quantum computing community, reach out to an advocate local to your area.
      </p>
      <div
        class="meet-the-advocates__extra-filters meet-the-advocates__extra-filters_on-small-screen"
      >
        <AppMultiSelect
          :label="extraFilter.label"
          :options="extraFilter.options"
        />
      </div>
      <AppFiltersResultsLayout>
        <template slot="filters">
          <AppFieldset :label="extraFilter.label">
            <client-only>
              <AppCheckbox
                v-for="option in extraFilter.options"
                :key="option.label"
                v-bind="option"
              />
            </client-only>
          </AppFieldset>
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import AppCard from '~/components/ui/AppCard.vue'
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
    AppCard,
    AppMultiSelect,
    AppFieldset,
    AppCheckbox,
    AppFiltersResultsLayout
  }
})
export default class extends Vue {
  @Prop(Array) advocates!: any

  regions = ['Europe', 'Asia', 'Africa', 'America']
  emptyCard = {
    title: 'No people found',
    description: 'No Qiskit advocates found for the given criteria. Trying doing a broader search. There are literally dozens of us.',
    img: '/images/events/no-events.svg'
  }

  regionsOptions = this.getOptions(this.regions)
  regionsLabel: string = 'Locations'
  regionsFilters: string = 'regionFilters'

  extraFilter = {
    label: this.regionsLabel,
    options: this.regionsOptions,
    filterType: this.regionsFilters
  }

  getOptions (optionsList: any): Array<multiSelectOption> {
    return optionsList.map((item: string) => ({ label: item, value: item, name: item }))
  }
}
</script>

<style lang="scss">
@import '~carbon-components/scss/globals/scss/typography';

.meet-the-advocates {
  background-color: $white;
  color: $white-text-01;

  &__container {
    @include contained();
  }

  &__extra-filters {
    &_on-large-screen {
      @include mq($until: medium) {
        display: none;
      }
    }

    &_on-small-screen {
      @include mq($from: medium) {
        display: none;
      }
    }
  }
}
</style>
