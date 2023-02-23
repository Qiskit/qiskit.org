<template>
  <section id="meet-the-advocates" class="cds--grid meet-the-advocates">
    <h2>Meet the Advocates</h2>
    <div class="cds--row">
      <div class="cds--col-md-5 cds--col-lg-8 cds--col-xlg-7 cds--col-max-6">
        <p>
          Qiskit advocates are some of the finest minds in quantum computing,
          all over the world. If you are interested in getting involved with the
          quantum computing community, reach out to an advocate local to your
          area.
        </p>
        <p>
          <UiAppLink :url="joinSlackLink">
            Sign-up for the Qiskit Slack workspace
          </UiAppLink>
          to reach the advocates and join the conversation.
        </p>
      </div>
    </div>
    <UiAppFiltersResultsLayout
      class="meet-the-advocates__filters-result-section"
    >
      <template #filters-on-m-l-screen>
        <UiAppFieldset :label="filter.label">
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
        </UiAppFieldset>
      </template>
      <template #filters-on-s-screen>
        <UiAppMultiSelect
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
            <AdvocatesAdvocateCard
              :name="advocate.name"
              :image="advocate.image"
              :city="advocate.city"
              :country="advocate.country"
              :region="advocate.region"
              :slack-id="advocate.slackId"
              :slack-username="advocate.slackUsername"
            />
          </div>
        </div>
      </template>
    </UiAppFiltersResultsLayout>
  </section>
</template>

<script setup lang="ts">
import { ADVOCATES_WORLD_REGION_OPTIONS, Advocate } from "~/types/advocates";
import "@carbon/web-components/es/components/checkbox/index.js";
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
  const newRegionFiltersAsArray = newRegionFilters.split(",");
  regionFilters.value = newRegionFiltersAsArray;
}

const joinSlackLink = "https://ibm.co/joinqiskitslack";
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
