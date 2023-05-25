<template>
  <section id="meet-the-advocates" class="meet-the-advocates">
    <UiFiltersResultsLayout class="meet-the-advocates__filters-result-section">
      <template #filters-on-m-l-screen>
        <UiFieldset :label="filter.label">
          <client-only>
            <bx-checkbox
              v-for="option in filter.options"
              :key="option"
              :checked="isRegionFilterChecked(option)"
              :label-text="option"
              :value="option"
              @bx-checkbox-changed="
                updateRegionFilter(option, $event.target.checked)
              "
            />
          </client-only>
        </UiFieldset>
      </template>
      <template #filters-on-s-screen>
        <UiMultiSelect
          :label="filter.label"
          :options="filter.options"
          :value="regionFiltersAsString"
          @change-selection="updateRegionFilters($event)"
        />
      </template>
      <template #results>
        <div class="cds--row">
          <div
            v-for="advocate in filteredAdvocates"
            :key="advocate.name"
            class="cds--col-max-8"
          >
            <AdvocatesItemCard
              :name="advocate.name"
              :image="advocate.image"
              :city="advocate.city"
              :country="advocate.country[0]"
              :region="advocate.region"
              :slack-id="advocate.slackId"
              :slack-username="advocate.slackUsername"
            />
          </div>
        </div>
      </template>
    </UiFiltersResultsLayout>
  </section>
</template>

<script setup lang="ts">
import { ADVOCATES_WORLD_REGION_OPTIONS, Advocate } from "~/types/advocates";
import rawAdvocates from "~/content/advocates/advocates.json";

const advocates = rawAdvocates as Advocate[];

const filter = {
  label: "Locations",
  options: ADVOCATES_WORLD_REGION_OPTIONS,
};

const regionFilters = ref<string[]>([]);

const regionFiltersAsString = computed(() => regionFilters.value.join(","));

const filteredAdvocates = computed(() => {
  if (!advocates) {
    return [];
  }

  const noRegionFilters = regionFilters.value.length === 0;

  return noRegionFilters
    ? advocates
    : advocates.filter((advocate) =>
        regionFilters.value.includes(advocate.region)
      );
});

const isRegionFilterChecked = (filterValue: string): boolean =>
  regionFilters.value.includes(filterValue);

function updateRegionFilter(option: string, isChecked: boolean) {
  const filteredRegionFilters = regionFilters.value.filter(
    (oldOption) => oldOption !== option
  );

  if (isChecked) {
    filteredRegionFilters.push(option);
  }

  regionFilters.value = filteredRegionFilters;
}

function updateRegionFilters(newRegionFilters: string) {
  const newRegionFiltersAsArray =
    newRegionFilters === "" ? [] : newRegionFilters.split(",");
  regionFilters.value = newRegionFiltersAsArray;
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.meet-the-advocates {
  &__filters-result-section {
    margin-top: carbon.$spacing-08;
  }
}
</style>
