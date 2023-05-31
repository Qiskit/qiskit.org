<template>
  <main>
    <UiPageHeaderFixed>
      Explore
      <UiTypewriterEffect
        :values="['core packages', 'tools', 'prototypes', 'community projects']"
      />
      from Qiskit
      <br />
      and the Qiskit community
    </UiPageHeaderFixed>
    <section class="cds--grid">
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
      <UiCta :label="joinAction.label" :url="joinAction.url" />
      <div class="ecosystem-page__tabs">
        <client-only>
          <bx-tabs
            :value="tiers[0].name"
            @bx-tabs-selected="selectTab($event.target.value)"
          >
            <bx-tab
              v-for="tier in tiers"
              :id="`tab-${tier.name}`"
              :key="tier.name"
              :value="tier.name"
            >
              {{ tier.name }}
            </bx-tab>
          </bx-tabs>
        </client-only>
      </div>
      <UiFiltersResultsLayout>
        <template #filters-on-m-l-screen>
          <UiFieldset label="Tier">
            <client-only>
              <bx-checkbox
                v-for="option in tiers"
                :key="option.name"
                :checked="isTierFilterChecked(option.name)"
                :label-text="option.name"
                :value="option.name"
                @bx-checkbox-changed="
                  updateTierFilter(option.name, $event.target.checked)
                "
              />
            </client-only>
          </UiFieldset>
        </template>
        <template #filters-on-s-screen>
          <UiMultiSelect
            label="Tier"
            :options="tiersNames"
            :value="tierFiltersAsString"
            @change-selection="updateTierFilters($event)"
          />
        </template>
        <template #results>
          <div class="cds--row">
            <div
              v-for="(member, index) in filteredMembers"
              :key="index"
              class="ecosystem-page__project-card-wrapper cds--col-sm-4 cds--col-xlg-8"
            >
              <UiCard
                class="ecosystem-page__project-card"
                :title="member.name"
                :tags="member.labels"
                :tooltip-tags="[
                  {
                    label: member.tier,
                    description: getTierDescription(member.tier),
                  },
                ]"
                cta-label="Go to repo"
                :segment="{
                  cta: `go-to-repo-${member.name}`,
                  location: 'ecosystem-card',
                }"
                :to="member.url"
              >
                <div class="ecosystem-page__project-card__details">
                  <p class="ecosystem-page__project-card__details__license">
                    {{ member.licence }}
                  </p>
                  <div class="ecosystem-page__project-card__details__star">
                    <StarFilled16 />
                    <p>
                      {{ member.stars }}
                    </p>
                  </div>
                </div>
                <p>
                  {{ member.description }}
                </p>
              </UiCard>
              <bx-accordion v-if="member.testsResults.length != 0">
                <bx-accordion-item
                  class="bx-accordion__item"
                  :title-text="`Test Results (${formatTimestamp(
                    member.updatedAt
                  )})`"
                >
                  <EcosystemTestTable :filtered-data="getTestRows(member)" />
                </bx-accordion-item>
              </bx-accordion>
            </div>
          </div>
        </template>
      </UiFiltersResultsLayout>
    </section>
  </main>
</template>

<script setup lang="ts">
import StarFilled16 from "@carbon/icons-vue/lib/star--filled/16";
import { Link } from "~/types/links";
import rawMembers from "~/content/ecosystem/members.json";
import rawTiers from "~/content/ecosystem/tiers.json";
import type { Member, Tier } from "~/types/ecosystem";

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

const { trackClickEvent } = useSegment();

const activeTab = ref<string>(tiers[0].name);
const tabsIsDirty = ref(false);

const tierFilters = ref<string[]>([]);

const tierFiltersAsString = computed(() => tierFilters.value.join(","));

const filteredMembers = computed(() => {
  if (!members) {
    return [];
  }

  return members.filter((member) => member.tier === activeTab.value);
});

const tiersNames = computed(() => tiers.map((tier) => tier.name));

function formatTimestamp(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleString("en-UK", {
    timeZone: "UTC",
  });
}

function getTestRows(member: Member) {
  if (member.testsResults) {
    return member.testsResults.map((res) => {
      const timestamp = formatTimestamp(res.timestamp);
      // Convert package name to title case
      let packageName;
      if (res.package) {
        packageName = res.package
          .replaceAll("-", " ")
          .split(" ")
          .map((s: string) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(" ");
      }

      return {
        packageName,
        packageVersion: res.packageVersion,
        testType: res.testType,
        passed: res.passed,
        timestamp,
        logsLink: res.logsLink,
      };
    });
  }

  return [];
}

function getTierDescription(tierName: string): string {
  const tier = tiers.find((tier: any) => tier.name === tierName);
  return tier!.description || "";
}

const selectTab = (selectedTab: string) => {
  activeTab.value = selectedTab;

  if (tabsIsDirty) {
    trackClickEvent(`${selectedTab}`, "ecosystem-list");
  }

  tabsIsDirty.value = true;
};

function updateTierFilter(filterValue: string, isChecked: boolean) {
  isChecked
    ? tierFilters.value.push(filterValue)
    : (tierFilters.value = tierFilters.value.filter(
        (tier: any) => tier !== filterValue
      ));
}

function updateTierFilters(newTierFilters: string) {
  const newTierFiltersAsArray =
    newTierFilters === "" ? [] : newTierFilters.split(",");
  tierFilters.value = newTierFiltersAsArray;
}

const isTierFilterChecked = (filterValue: string): boolean =>
  tierFilters.value.includes(filterValue);

const joinAction: Link = {
  url: "https://github.com/qiskit-community/ecosystem#ecosystem--",
  label: "Join the ecosystem",
};
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.ecosystem-page {
  &__project-card {
    &__details {
      display: flex;
      flex-wrap: wrap;

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

    :deep(.card__title) {
      font-size: 1.25rem;
    }
  }

  &__project-card-wrapper {
    padding-bottom: carbon.$spacing-08;
  }

  &__tabs {
    margin-top: carbon.$spacing-07;
    margin-bottom: carbon.$spacing-09;
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
