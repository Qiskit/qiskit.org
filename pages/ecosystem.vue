<template>
  <main>
    <UiPageHeaderFixed class="ecosystem-header__hero">
      <br />
      Explore
      <UiTypewriterEffect
        :values="['core packages', 'tools', 'prototypes', 'community projects']"
      />
      from Qiskit
      <br />
      and the Qiskit community
    </UiPageHeaderFixed>
    <section id="ecosystem" class="cds--grid ecosystem">
      <h2>Ecosystem Resources</h2>
      <div class="cds--row">
        <div class="cds--col-md-5 cds--col-lg-8 cds--col-xlg-7 cds--col-max-6">
          <p>
            The Ecosystem consists of projects, tools, utilities, libraries and
            tutorials from a broad community of developers and researchers. The
            goal of the Ecosystem is to celebrate, support and accelerate
            development of quantum technologies using Qiskit.
          </p>
        </div>
      </div>
      <UiCta
        class="ecosystem-header__cta"
        :label="joinAction.label"
        :url="joinAction.url"
      />
      <div class="ecosystem__tiers">
        <client-only>
          <div class="cds--row">
            <div class="cds--col">
              <bx-tabs
                class="ecosystem__tiers__tabs"
                trigger-content="Select an item"
                value="Main"
                @bx-tabs-selected="selectTab($event.target.value)"
              >
                <bx-tab
                  v-for="tierName in tiersNames"
                  :id="`tab${tierName}`"
                  :key="tierName"
                  :target="`panel${tierName}`"
                  :value="`${tierName}`"
                >
                  {{ tierName }}
                </bx-tab>
              </bx-tabs>
            </div>
          </div>
        </client-only>
      </div>
      <UiFiltersResultsLayout>
        <template #filters-on-m-l-screen>
          <div class="ecosystem__filters">
            <UiFieldset label="Labels">
              <client-only>
                <bx-checkbox
                  v-for="label in sortedProjectLabels"
                  :key="label"
                  :checked="isLabelFilterChecked(label)"
                  :label-text="label"
                  :value="label"
                  @bx-checkbox-changed="
                    updateLabelFilter(label, $event.target.checked)
                  "
                />
              </client-only>
            </UiFieldset>
          </div>
        </template>
        <template #filters-on-s-screen>
          <div class="ecosystem__filters__multiselect">
            <UiMultiSelect
              label="Labels"
              :options="sortedProjectLabels"
              :value="labelFiltersAsString"
              @change-selection="updateLabelFilters($event)"
            />
          </div>
        </template>
        <template #results>
          <div class="ecosystem__toolbar cds--row">
            <div class="ecosystem__search cds--col-lg-13 cds--col-md-6">
              <bx-search
                placeholder="Search using keywords like algorithms, simulator, or machine learning"
                @bx-search-input="searchOnMembers($event.detail.value)"
              />
            </div>
            <bx-dropdown
              class="ecosystem__sort-dropdown cds--col-lg-3 cds--col-md-2"
              label-text="Sort by"
              :value="sortByValue"
              @bx-dropdown-selected="setSortValue($event.detail.item.value)"
            >
              <bx-dropdown-item value="name">Name</bx-dropdown-item>
              <bx-dropdown-item value="stars">Stars</bx-dropdown-item>
            </bx-dropdown>
          </div>
          <div class="ecosystem__tier-panel">
            <div
              v-for="tierName in tiersNames"
              :id="`panel${tierName}`"
              :key="tierName"
              role="tabpanel"
              :aria-labelledby="`tab${tierName}`"
            >
              <template v-if="filteredMembers.length > 0">
                <div class="cds--row ecosystem__members">
                  <div
                    v-for="member in sortMembers(filteredMembers)"
                    :key="member.name"
                    class="cds--col-sm-4 cds--col-xlg-8"
                  >
                    <EcosystemItemCard
                      :name="member.name"
                      :labels="member.labels"
                      :tier="member.tier"
                      :tier-description="getTierDescription(member.tier)"
                      :url="member.url"
                      :website="member.website"
                      :licence="member.licence"
                      :stars="member.stars"
                      :description="member.description"
                      :tests-results="member.testsResults"
                      :updated-at="member.updatedAt"
                    />
                  </div>
                </div>
              </template>
              <template v-else>
                <div class="cds--col">
                  <p>
                    Try using wider search criteria, or consider
                    <UiLink v-bind="joinAction">joining the ecosystem. </UiLink>
                  </p>
                </div>
              </template>
            </div>
          </div>
        </template>
      </UiFiltersResultsLayout>
    </section>
  </main>
</template>

<script setup lang="ts">
import sortBy from "lodash/sortBy";
import reverse from "lodash/reverse";
import { Link } from "~/types/links";
import rawMembers from "~/content/ecosystem/members.json";
import rawTiers from "~/content/ecosystem/tiers.json";
import type { Member, Tier } from "~/types/ecosystem";

interface MembersByTier {
  [key: string]: Member[];
}

const members = rawMembers as Member[];
const tiers = rawTiers as Tier[];

definePageMeta({
  layout: "default-max",
  pageTitle: "Qiskit Ecosystem",
  routeName: "ecosystem",
});

useHead({
  title: "Qiskit Ecosystem",
  meta: [
    {
      name: "description",
      content:
        "The Ecosystem consists of projects, tools, utilities, libraries and tutorials from a broad community of developers and researchers. The goal of the Ecosystem is to celebrate, support and accelerate development of quantum technologies using Qiskit.",
    },
  ],
});

const labelFilters = ref<string[]>([]);
const selectedTab = ref<string>("Main");
const searchedText = ref<string>("");
const sortByValue = ref<string>("name");

const labelFiltersAsString = computed(() => labelFilters.value.join(","));

const tiersNames = tiers.map((tier) => tier.name);
const membersLabels = members.map((member) => member.labels);
const projectLabels = Array.from(new Set(membersLabels.flat()));
const sortedProjectLabels = projectLabels.sort((a, b) => a.localeCompare(b));

const membersByTier: MembersByTier = tiersNames.reduce((acc, tierName) => {
  return { ...acc, ...{ [tierName]: getMembersByTier(tierName) } };
}, {});

const selectTab = (tab: string) => {
  selectedTab.value = tab;
};

const filteredMembers = computed(() => {
  if (!members) {
    return [];
  }

  const filteredMembersByTier = membersByTier[selectedTab.value];

  let result = filteredMembersByTier;

  if (searchedText.value !== "") {
    result = result.filter((member) =>
      member.description
        .toLowerCase()
        .includes(searchedText.value.toLowerCase())
    );
  }

  if (labelFilters.value.length > 0) {
    result = result.filter((member) =>
      labelFilters.value.every((filter) => member.labels.includes(filter))
    );
  }

  return result;
});

function sortMembers(membersToSort: Member[]) {
  const membersOnAscOrder = sortBy(membersToSort, [
    `${sortByValue.value}`,
  ]) as Member[];

  return sortByValue.value === "stars"
    ? reverse(membersOnAscOrder)
    : membersOnAscOrder;
}

function setSortValue(inputValue: string) {
  sortByValue.value = inputValue;
}

function getMembersByTier(tier: Member["tier"]) {
  return members.filter((member) => member.tier === tier);
}

function updateLabelFilter(filterValue: string, isChecked: boolean) {
  if (isChecked) {
    labelFilters.value.push(filterValue);
  } else {
    const index = labelFilters.value.indexOf(filterValue);
    if (index !== -1) {
      labelFilters.value.splice(index, 1);
    }
  }
}

function getTierDescription(tierName: string): string {
  const tier = tiers.find((tier: any) => tier.name === tierName);
  return tier?.description || "";
}

function updateLabelFilters(newLabelFilters: string) {
  const newLabelFiltersAsArray =
    newLabelFilters === "" ? [] : newLabelFilters.split(",");
  labelFilters.value = newLabelFiltersAsArray;
}

function searchOnMembers(inputText: string) {
  searchedText.value = inputText;
}

const isLabelFilterChecked = (filterValue: string): boolean =>
  labelFilters.value.includes(filterValue);

const joinAction: Link = {
  url: "https://github.com/qiskit-community/ecosystem#ecosystem--",
  label: "Join the ecosystem",
};
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.ecosystem {
  &__tiers {
    margin-top: carbon.$spacing-10;
  }

  &__tier-panel {
    margin-top: carbon.$spacing-07;
  }

  &__filters {
    margin-top: carbon.$spacing-07;

    &__checkboxes {
      @include carbon.breakpoint-down(md) {
        display: none;
      }
    }

    &__multiselect {
      margin-top: carbon.$spacing-05;
    }
  }

  &__toolbar {
    margin-top: carbon.$spacing-06;

    @include carbon.breakpoint-down(md) {
      margin-top: initial;
    }
  }

  &__search {
    margin-top: calc(carbon.$spacing-06 + 2px);

    --cds-field-01: #{carbon.$cool-gray-10};
    --cds-field-04: #{carbon.$cool-gray-30};

    @include carbon.breakpoint-down(md) {
      margin-bottom: carbon.$spacing-05;
    }
  }

  &__sort-dropdown {
    --cds-text-01: #{carbon.$cool-gray-60};
    --cds-field-01: #{carbon.$cool-gray-10};
    --cds-field-04: #{carbon.$cool-gray-30};
  }

  &__members {
    margin-top: carbon.$spacing-06;
  }
}

.cds--col-sm-4 {
  padding-bottom: carbon.$spacing-08;
}

.card {
  &__description {
    .cds--row {
      margin-left: 0;
    }
  }

  &__tags {
    flex-direction: row;
  }
}

.bx-accordion__item {
  &::part(content) {
    margin: 0;
    padding: 0;
  }

  &::part(expando) {
    background-color: carbon.$cool-gray-20;
  }
}
</style>
