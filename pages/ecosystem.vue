<template>
  <article>
    <LayoutLeadSpaceFixed>
      Explore
      <br class="show-in-md" />
      <UiTypewriterEffect
        :values="['core packages', 'tools', 'prototypes', 'community projects']"
      />
      <br />
      from Qiskit and the
      <br />
      Qiskit community
    </LayoutLeadSpaceFixed>
    <UiJoinWithCards
      class="ecosystem-page__join-section"
      :cards="joinSectionCards"
      :cta="ecosystemJoinLink"
    >
      <template #description>
        <p>
          The Ecosystem consists of projects, tools, utilities, libraries and
          tutorials from a broad community of developers and researchers. The
          goal of the Ecosystem is to celebrate, support and accelerate
          development of quantum technologies using Qiskit.
        </p>
      </template>
    </UiJoinWithCards>
    <section id="ecosystem" class="cds--grid ecosystem-page">
      <h2>Explore the ecosystem projects</h2>
      <div class="cds--row">
        <p class="cds--col-md-5 cds--col-lg-8 cds--col-xlg-7 cds--col-max-6">
          Browse through the ecosystem using search, filter, and sort options.
          Find inspiration for your own projects or collaborate with others to
          unlock the full potential of Qiskit.
        </p>
      </div>
      <UiFiltersResultsLayout class="ecosystem-page__results">
        <template #filters-on-m-l-screen>
          <UiFieldset class="ecosystem-page__categories" label="Tier">
            <client-only>
              <bx-checkbox
                v-for="tier in tiersNames"
                :key="tier"
                :checked="isTierFilterChecked(tier)"
                :label-text="tier"
                :value="tier"
                @bx-checkbox-changed="
                  updateTierFilter(tier, $event.target.checked)
                "
              />
            </client-only>
          </UiFieldset>
          <UiFieldset class="ecosystem-page__categories" label="Category">
            <client-only>
              <bx-checkbox
                v-for="category in categoryFilterOptionsSorted"
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
          <div class="ecosystem-page__tiers__multiselect">
            <UiMultiSelect
              label="Tiers"
              :options="tiersNames"
              :value="tierFiltersAsString"
              @change-selection="updateTierFilters($event)"
            />
          </div>
          <div class="ecosystem-page__categories__multiselect">
            <UiMultiSelect
              label="Category"
              :options="categoryFilterOptionsSorted"
              :value="categoryFiltersAsString"
              @change-selection="updateCategoryFilters($event)"
            />
          </div>
        </template>
        <template #results>
          <div class="ecosystem-page__toolbar cds--row">
            <div class="ecosystem-page__search cds--col-lg-13 cds--col-md-6">
              <bx-search
                placeholder="Search using keywords like algorithms, simulator, or machine learning"
                @bx-search-input="updateSearchTerm($event.detail.value)"
              />
            </div>
            <bx-dropdown
              class="ecosystem-page__sort-dropdown cds--col-lg-3 cds--col-md-2"
              label-text="Sort by"
              :value="selectedSortingOption"
              @bx-dropdown-selected="
                updateSelectedSortingOption($event.detail.item.value)
              "
            >
              <bx-dropdown-item value="default">Default</bx-dropdown-item>
              <bx-dropdown-item value="name">Name</bx-dropdown-item>
              <bx-dropdown-item value="stars">Stars</bx-dropdown-item>
            </bx-dropdown>
          </div>
          <div class="ecosystem-page__tier-panel">
            <p v-if="filteredMembersSorted.length === 0" class="cds--col">
              Try using wider search criteria, or consider
              <UiLink v-bind="ecosystemJoinLink">joining the ecosystem.</UiLink>
            </p>
            <div v-else class="cds--row ecosystem-page__members">
              <EcosystemCard
                v-for="member in filteredMembersSorted"
                :key="member.name"
                class="cds--col-sm-4 cds--col-xlg-8"
                :member="member"
              />
            </div>
          </div>
        </template>
      </UiFiltersResultsLayout>
    </section>
  </article>
</template>

<script setup lang="ts">
import { TextLink } from "types/links";
import rawMembers from "~/content/ecosystem/members.json";
import rawTiers from "~/content/ecosystem/tiers.json";
import { Member, Tier } from "~/types/ecosystem";

const members = rawMembers as Member[];
const config = useRuntimeConfig();

definePageMeta({
  pageTitle: "Qiskit Ecosystem",
  routeName: "ecosystem",
});

const description =
  "Discover the Qiskit Ecosystem, a vibrant community accelerating quantum technologies with projects, tools, libraries, and tutorials. Join us now!";

useSeoMeta({
  title: "Qiskit Ecosystem",
  ogTitle: "Qiskit Ecosystem",
  description,
  ogDescription: description,
  ogImage: `${config.public.siteUrl}/images/qiskit-logo.png`,
  ogUrl: `${config.public.siteUrl}/ecosystem/`,
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterDescription: description,
});

const joinSectionCards = [
  {
    name: "Main tier",
    description: "The main Qiskit packages maintained by IBM Quantum.",
    icon: "quantum.svg",
  },
  {
    name: "Extensions tier",
    description: "IBM Quantum supported Qiskit extensions.",
    icon: "transform--02.svg",
  },
  {
    name: "Community tier",
    description:
      "Software packages supported by the Qiskit community, not maintained by IBM Quantum.",
    icon: "group.svg",
  },
];

const ecosystemJoinLink: TextLink = {
  url: "https://github.com/qiskit-community/ecosystem#ecosystem--",
  label: "Join the ecosystem",
};

/**
 * Tier selection
 */
const tiers = rawTiers as Tier[];
const tiersNames = tiers.map((tier) => tier.name);

/**
 * Category filters
 */
const categoryFilterOptions = members.map((member) => member.labels);
const categoryFilterOptionsSorted = [
  ...new Set(categoryFilterOptions.flat()),
].sort((a, b) => a.localeCompare(b));

const categoryFilters = ref<string[]>([]);
const categoryFiltersAsString = computed(() => categoryFilters.value.join(","));
const tierFilters = ref<string[]>([]);
const tierFiltersAsString = computed(() => tierFilters.value.join(","));

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

function updateTierFilter(filterValue: string, isChecked: boolean) {
  if (isChecked) {
    tierFilters.value.push(filterValue);
  } else {
    const index = tierFilters.value.indexOf(filterValue);
    if (index !== -1) {
      tierFilters.value.splice(index, 1);
    }
  }
}

function updateTierFilters(newTierFilters: string) {
  const newTierFiltersAsArray =
    newTierFilters === "" ? [] : newTierFilters.split(",");
  tierFilters.value = newTierFiltersAsArray;
}

function isTierFilterChecked(filterValue: string): boolean {
  return tierFiltersAsString.value.includes(filterValue);
}

/**
 * Search term
 */
const searchTerm = ref<string>("");

function updateSearchTerm(newSearchTerm: string) {
  searchTerm.value = newSearchTerm.trim();
}

/**
 * Sorting options
 */
type SortingOption = "default" | "name" | "stars";
const selectedSortingOption = ref<SortingOption>("default");

function updateSelectedSortingOption(sortingOption: SortingOption) {
  selectedSortingOption.value = sortingOption;
}

/**
 * Members
 */
const filteredMembers = computed<Member[]>(() => {
  if (!members) {
    return [];
  }

  let filteredMembers = members;

  // Tier filter
  if (tierFilters.value.length > 0) {
    filteredMembers = filteredMembers.filter((member) =>
      tierFilters.value.some((filter) => member.tier.includes(filter))
    );
  }

  // Category filter
  if (categoryFilters.value.length > 0) {
    filteredMembers = filteredMembers.filter((member) =>
      categoryFilters.value.some((filter) => member.labels.includes(filter))
    );
  }

  // Search term filter
  if (searchTerm.value !== "") {
    filteredMembers = filteredMembers.filter(
      (member) =>
        member.description
          .toLowerCase()
          .includes(searchTerm.value.toLowerCase()) ||
        member.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  }

  return filteredMembers;
});

const filteredMembersSorted = computed<Member[]>(() => {
  if (selectedSortingOption.value === "stars") {
    return filteredMembers.value.sort((a, b) => b.stars - a.stars);
  } else if (selectedSortingOption.value === "name") {
    return filteredMembers.value.sort((a, b) => a.name.localeCompare(b.name));
  }

  return filteredMembers.value.sort((a, b) => b.tier.localeCompare(a.tier));
});
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/classes.scss";

.ecosystem-page {
  &__join-section {
    margin-bottom: carbon.$spacing-12;
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

  &__results {
    margin-top: carbon.$spacing-07;
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

.project-card {
  &__license {
    font-size: 12px;
    margin-right: carbon.$spacing-05;
    margin-top: calc(carbon.$spacing-01 / 2);
  }

  &__star {
    display: flex;
    flex-direction: row;

    svg {
      margin-top: calc(carbon.$spacing-01 / 2);
      margin-right: carbon.$spacing-01;
      fill: carbon.$cool-gray-60;
    }
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
