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
          <UiLink :url="joinSlackLink">
            Sign-up for the Qiskit Slack workspace
          </UiLink>
          to reach the advocates and join the conversation.
        </p>
      </div>
    </div>
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
            class="cds--col-sm-4 cds--col-xlg-8"
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
// import "@carbon/web-components/es/components/checkbox/index.js";
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

// TODO: Refactor links (https://github.com/Qiskit/qiskit.org/issues/1566)
const joinSlackLink = "https://qisk.it/join-slack";
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
