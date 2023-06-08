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
        <p class="cds--col-md-5 cds--col-lg-8 cds--col-xlg-7 cds--col-max-6">
          The Ecosystem consists of projects, tools, utilities, libraries and
          tutorials from a broad community of developers and researchers. The
          goal of the Ecosystem is to celebrate, support and accelerate
          development of quantum technologies using Qiskit.
        </p>
      </div>
      <UiCta
        class="ecosystem-header__cta"
        :label="joinAction.label"
        :url="joinAction.url"
      />
      <div class="ecosystem__tiers">
        <client-only>
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
        </client-only>
      </div>
      <UiFiltersResultsLayout>
        <template #filters-on-m-l-screen>
          <UiFieldset class="ecosystem__categories" label="Category">
            <client-only>
              <bx-checkbox
                v-for="category in sortedMembersCategories"
                :key="category"
                :checked="isCategoryFilterChecked(category)"
                :label-text="category"
                :value="category"
                @bx-checkbox-changed="
                  updateCategoryFilter(category, $event.target.checked)
                "
              />
            </client-only>
          </UiFieldset>
        </template>
        <template #filters-on-s-screen>
          <div class="ecosystem__categories__multiselect">
            <UiMultiSelect
              label="Category"
              :options="sortedMembersCategories"
              :value="categoryFiltersAsString"
              @change-selection="updateCategoryFilters($event)"
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
              :value="propToSortBy"
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
              <div
                v-if="filteredMembers.length > 0"
                class="cds--row ecosystem__members"
              >
                <EcosystemItemCard
                  v-for="member in sortMembers(filteredMembers)"
                  :key="member.name"
                  class="cds--col-sm-4 cds--col-xlg-8"
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
              <p v-else class="cds--col">
                Try using wider search criteria, or consider
                <UiLink v-bind="joinAction">joining the ecosystem. </UiLink>
              </p>
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

const joinAction: Link = {
  url: "https://github.com/qiskit-community/ecosystem#ecosystem--",
  label: "Join the ecosystem",
};

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

const categoryFilters = ref<string[]>([]);
const selectedTab = ref<string>("Main");
const searchedText = ref<string>("");
const propToSortBy = ref<string>("name");

const tiersNames = tiers.map((tier) => tier.name);
const membersCategories = members.map((member) => member.labels);
const sortedMembersCategories = [...new Set(membersCategories.flat())].sort(
  (a, b) => a.localeCompare(b)
);
const membersByTier: MembersByTier = tiersNames.reduce((acc, tierName) => {
  return {
    ...acc,
    ...{ [tierName]: members.filter((member) => member.tier === tierName) },
  };
}, {});

const categoryFiltersAsString = computed(() => categoryFilters.value.join(","));

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

  if (categoryFilters.value.length > 0) {
    result = result.filter((member) =>
      categoryFilters.value.every((filter) => member.labels.includes(filter))
    );
  }

  return result;
});

function selectTab(tab: string) {
  selectedTab.value = tab;
}

function getTierDescription(tierName: string): string {
  const tier = tiers.find((tier: any) => tier.name === tierName);
  return tier?.description || "";
}

function setSortValue(inputValue: string) {
  propToSortBy.value = inputValue;
}

function updateCategoryFilter(filterValue: string, isChecked: boolean) {
  if (isChecked) {
    categoryFilters.value.push(filterValue);
  } else {
    const index = categoryFilters.value.indexOf(filterValue);
    if (index !== -1) {
      categoryFilters.value.splice(index, 1);
    }
  }
}

function updateCategoryFilters(newCategoryFilters: string) {
  const newCategoryFiltersAsArray =
    newCategoryFilters === "" ? [] : newCategoryFilters.split(",");
  categoryFilters.value = newCategoryFiltersAsArray;
}

function isCategoryFilterChecked(filterValue: string): boolean {
  return categoryFilters.value.includes(filterValue);
}

function searchOnMembers(inputText: string) {
  searchedText.value = inputText;
}

function sortMembers(membersToSort: Member[]) {
  const membersOnAscOrder = sortBy(membersToSort, [
    `${propToSortBy.value}`,
  ]) as Member[];

  return propToSortBy.value === "stars"
    ? reverse(membersOnAscOrder)
    : membersOnAscOrder;
}
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

  &__categories {
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
</style>
