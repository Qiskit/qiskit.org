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
            v-for="advocate in filteredAdvocates"
            :key="advocate.name"
            class="bx--col-max-8"
          >
            <AdvocateCard v-bind="advocate" />
          </div>
        </div>
      </template>
    </AppFiltersResultsLayout>
  </section>
</template>

<script setup lang="ts">
import { ADVOCATES_WORLD_REGION_OPTIONS, Advocate } from '~/types/advocates'

const filter = {
  label: 'Locations',
  options: ADVOCATES_WORLD_REGION_OPTIONS
}

const { data: advocates } = useLazyAsyncData(
  'fetch-advocates',
  async () => await import('~/content/advocates/advocates.json') as Advocate[]
)

const regionFilters = ref([] as string[])

const filteredAdvocates = computed(
  () => {
    const noRegionFilters = regionFilters.value.length === 0

    return noRegionFilters
      ? advocates
      : advocates.value.filter(advocate => regionFilters.value.includes(advocate.region))
  }
)

const isRegionFilterChecked = (filterValue: string): boolean => regionFilters.value.includes(filterValue)

function updateRegionFilter (option: string, isChecked: boolean) {
  const filteredRegionFilters = regionFilters.value.filter(oldOption => oldOption !== option)

  if (isChecked) {
    filteredRegionFilters.push(option)
  }

  regionFilters.value = filteredRegionFilters
}

const joinSlackLink: string = 'https://ibm.co/joinqiskitslack'
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.meet-the-advocates {
  margin-top: carbon.$spacing-12;

  &__filters-result-section {
    margin-top: carbon.$spacing-10;
  }
}
</style>
