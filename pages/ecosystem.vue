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
          <bx-tabs
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
          <div class="ecosystem__toolbar cds--row">
            <bx-search
              class="ecosystem__search cds--col-lg-14 cds--col-md-6"
              placeholder="Search using keywords like algorithms, simulator, or machine learning"
              @bx-search-input="searchOnMembers($event.detail.value)"
            />
            <bx-dropdown
              class="cds--col-lg-2 cds--col-md-2"
              trigger-content="&#x21c5; Sort by ..."
              @bx-dropdown-selected="setSortValue($event.detail.item.value)"
            >
              <bx-dropdown-item value="name">Name</bx-dropdown-item>
              <bx-dropdown-item value="stars">Stars</bx-dropdown-item>
            </bx-dropdown>
          </div>
          <div
            v-for="tierName in tiersNames"
            :id="`panel${tierName}`"
            :key="tierName"
            class="ecosystem__tier-panel"
            role="tabpanel"
            :aria-labelledby="`tab${tierName}`"
          >
            <div class="cds--row ecosystem__members">
              <div
                v-for="member in sortMembers(filteredMembers)"
                :key="member.name"
                class="cds--col-sm-4 cds--col-xlg-8"
              >
                <UiCard
                  class="project-card"
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
                  <div class="cds--row">
                    <p class="project-card__license">
                      {{ member.licence }}
                    </p>
                    <div class="project-card__star">
                      <StarFilled16 />
                      <p class="project-card__star-val">
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
          </div>
        </client-only>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
// import "@carbon/web-components/es/components/accordion/index.js";
// import "@carbon/web-components/es/components/checkbox/index.js";
import sortBy from "lodash/sortBy";
import reverse from "lodash/reverse";
import StarFilled16 from "@carbon/icons-vue/lib/star--filled/16";
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

const selectedTab = ref<string>("Main");
const searchedText = ref<string>("");
const sortByValue = ref<string>("");

const tiersNames = tiers.map((tier) => tier.name);

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

  return searchedText.value === ""
    ? filteredMembersByTier
    : filteredMembersByTier.filter(
        (member) =>
          member.description
            .toLowerCase()
            .includes(searchedText.value.toLowerCase()) ||
          member.name.toLowerCase().includes(searchedText.value.toLowerCase())
      );
});

function sortMembers(membersToSort: Member[]) {
  const membersOnAscOrder = sortBy(membersToSort, [`${sortByValue.value}`]);

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

function searchOnMembers(inputText: string) {
  searchedText.value = inputText;
}

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

  &__toolbar {
    margin-top: carbon.$spacing-06;
  }

  &__search {
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

  :deep(.card__title) {
    font-size: 20px;
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
