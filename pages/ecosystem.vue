<template>
  <main>
    <UiAppPageHeaderFixed class="ecosystem-header__hero">
      <br />
      Explore
      <UiTypewriterEffect
        :values="['core packages', 'tools', 'prototypes', 'community projects']"
      />
      from Qiskit
      <br />
      and the Qiskit community
    </UiAppPageHeaderFixed>
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
      <UiAppCta
        class="ecosystem-header__cta"
        :label="joinAction.label"
        :url="joinAction.url"
      />
      <UiAppFiltersResultsLayout class="ecosystem__filters-result-section">
        <template #filters-on-m-l-screen>
          <UiAppFieldset label="Tier">
            <client-only>
              <bx-checkbox
                v-for="option in tiers"
                :key="option.name"
                class="ecosystem__filters-result-section__tiers"
                :checked="isTierFilterChecked(option.name)"
                :label-text="option.name"
                :value="option.name"
                @bx-checkbox-changed="
                  updateTierFilter(option.name, $event.target.checked)
                "
              />
            </client-only>
          </UiAppFieldset>
        </template>
        <template #filters-on-s-screen>
          <UiAppMultiSelect
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
              class="cds--col-sm-4 cds--col-xlg-8"
            >
              <UiAppCard
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
              </UiAppCard>
              <bx-accordion v-if="member.testsResults.length != 0">
                <bx-accordion-item
                  class="bx-accordion__item"
                  :title-text="`Test Results (${new Date(
                    member.updatedAt * 1000
                  ).toLocaleString('en-UK', { timeZone: 'UTC' })})`"
                >
                  <!-- <template #content>
                    <TestTable :filtered-data="getTestRows(member)" />
                  </template> -->
                </bx-accordion-item>
              </bx-accordion>
            </div>
          </div>
        </template>
      </UiAppFiltersResultsLayout>
    </section>
  </main>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/accordion/index.js";
import "@carbon/web-components/es/components/checkbox/index.js";
import StarFilled16 from "@carbon/icons-vue/lib/star--filled/16";
import { GeneralLink } from "~/constants/appLinks";
import rawMembers from "~/content/ecosystem/members.json";
import rawTiers from "~/content/ecosystem/tiers.json";
import type { Member, Tier } from "~/types/ecosystem";

const members = rawMembers as Member[];
const tiers = rawTiers as Tier[];

definePageMeta({
  layout: "default-max",
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

const tierFilters = ref<string[]>([]);

const tierFiltersAsString = computed(() => tierFilters.value.join(","));

const filteredMembers = computed(() => {
  if (!members) {
    return [];
  }

  const noTierFilters = tierFilters.value.length === 0;

  return noTierFilters
    ? members
    : members.filter((member) => tierFilters.value.includes(member.tier));
});

const tiersNames = computed(() => tiers.map((tier) => tier.name));

// function getTestRows(member: any) {
//   if (member.testsResults) {
//     return member.testsResults.map((res: any) => {
//       // make tiemstamp human readable
//       const timestamp = new Date(res.timestamp * 1000).toLocaleString("en-UK", {
//         timeZone: "UTC",
//       });
//       // Convert package name to title case
//       let packageName;
//       if (res.package) {
//         packageName = res.package
//           .replaceAll("-", " ")
//           .split(" ")
//           .map((s: string) => s.charAt(0).toUpperCase() + s.substring(1))
//           .join(" ");
//       }

//       return {
//         packageName,
//         packageVersion: res.packageVersion,
//         pythonVersion: res.pythonVersion,
//         qiskitVersion: res.qiskitVersion,
//         status: res.status,
//         timestamp,
//       };
//     });
//   }
// }

function getTierDescription(tierName: string): string {
  const tier = tiers.find((tier: any) => tier.name === tierName);
  return tier!.description || "";
}

function updateTierFilter(filterValue: string, isChecked: boolean) {
  isChecked
    ? tierFilters.value.push(filterValue)
    : (tierFilters.value = tierFilters.value.filter(
        (tier: any) => tier !== filterValue
      ));
}

function updateTierFilters(newTierFilters: string) {
  const newTierFiltersAsArray = newTierFilters.split(",");
  tierFilters.value = newTierFiltersAsArray;
}

const isTierFilterChecked = (filterValue: string): boolean =>
  tierFilters.value.includes(filterValue);

const joinAction: GeneralLink = {
  url: "https://github.com/qiskit-community/ecosystem#ecosystem--",
  label: "Join the ecosystem",
};

// TODO: Refactor tracking
// export default class EcosystemPage {
//   routeName: string = 'ecosystem';
// }
</script>

<style lang="scss">
@use "~/assets/scss/carbon.scss";

.ecosystem-header {
  &__hero {
    .cds--col-max-8 {
      max-width: 100%;
      flex: 0 0 100%;
    }
  }

  &__cta {
    height: 50%;
  }
}

.ecosystem__filters-result-section {
  margin-top: 4rem;

  &__tiers {
    text-transform: capitalize;
  }
}

.cds--col-sm-4 {
  padding-bottom: carbon.$spacing-08;
}

.app-card {
  &__description {
    .cds--row {
      margin-left: 0;
    }
  }

  &__tags {
    flex-direction: row;
  }
}

.bx--accordion__title {
  display: flex;
  flex-direction: row;
  gap: 10px;

  p,
  .p {
    margin-bottom: 0;
  }
}

.bx--accordion__item {
  background-color: carbon.$cool-gray-20;
  border-bottom: none;
}

.bx--accordion__item--active .bx--accordion__content {
  padding: 0;
  margin: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.bx--accordion__item:last-child {
  border-bottom: none;
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

  .app-card__title {
    font-size: 20px;
  }
}

.bx-accordion__item::part(expando) {
  background-color: carbon.$cool-gray-20;
}
</style>
