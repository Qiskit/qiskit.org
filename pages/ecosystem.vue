<template>
  <main>
    <!-- TODO: Integrate components -->
    <!-- <AppPageHeaderFixed class="ecosystem-header__hero">
      <br />
      Explore
      <TypewriterEffect
        :values="['core packages', 'tools', 'prototypes', 'community projects']"
      />
      from Qiskit
      <br />
      and the Qiskit community
    </AppPageHeaderFixed> -->
    <section id="ecosystem" class="bx--grid ecosystem">
      <h2>Ecosystem Resources</h2>
      <div class="bx--row">
        <div class="bx--col-md-5 bx--col-lg-8 bx--col-xlg-7 bx--col-max-6">
          <p>
            The Ecosystem consists of projects, tools, utilities, libraries and
            tutorials from a broad community of developers and researchers. The
            goal of the Ecosystem is to celebrate, support and accelerate
            development of quantum technologies using Qiskit.
          </p>
        </div>
      </div>
      <div class="bx-row">
        <!-- <UiAppCta class="ecosystem-header__cta" :label="joinAction.label" :url="joinAction.url" /> -->
      </div>
      <!-- <AppFiltersResultsLayout class="ecosystem__filters-result-section">
        <template slot="filters-on-m-l-screen">
          <AppFieldset label="Tier">
            <client-only>
              <cv-checkbox
                v-for="option in tiers"
                :key="option.name"
                class="ecosystem__filters-result-section__tiers"
                :label="option.name"
                :value="option.name"
                :checked="isTierFilterChecked(option.name)"
                @change="updateTierFilter(option.name, $event)"
              />
            </client-only>
          </AppFieldset>
        </template>
        <template slot="filters-on-s-screen">
          <AppMultiSelect
            label="Tier"
            :options="tiersNames"
            :value="tierFilters"
            @change-selection="updateTierFilters($event)"
          />
        </template>
        <template slot="results">
          <div class="bx--row">
            <div
              v-for="(member, index) in filteredMembers"
              :key="index"
              class="bx--col-sm-4 bx--col-xlg-8"
            >
              <AppCard
                class="project-card"
                :title="member.name"
                :tags="member.labels"
                :tooltip-tags="[
                  {
                    label: member.tier,
                    message: getTierDescription(member.tier),
                  },
                ]"
                cta-label="Go to repo"
                :segment="{
                  cta: `go-to-repo-${member.name}`,
                  location: 'ecosystem-card',
                }"
                :to="member.url"
              >
                <div class="bx--row">
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
              </AppCard>
              <cv-accordion v-if="member.testsResults.length != 0">
                <cv-accordion-item>
                  <template slot="title">
                    <span style="font-weight: bold">Test Results</span>
                    <span
                      >({{
                        new Date(member.updatedAt * 1000).toLocaleString(
                          "en-UK",
                          { timeZone: "UTC" }
                        )
                      }})</span
                    >
                  </template>
                  <template slot="content">
                    <TestTable :filtered-data="getTestRows(member)" />
                  </template>
                </cv-accordion-item>
              </cv-accordion>
            </div>
          </div>
        </template>
      </AppFiltersResultsLayout> -->
    </section>
  </main>
</template>

<script setup lang="ts">
// TODO: Integrate old code
// import { Component } from "vue-property-decorator";
// import { GeneralLink } from "~/constants/appLinks";

definePageMeta({
  layout: "default-max",
});

useHead({
  // TODO: Review if this is the intended title
  title: "Qiskit Ecosystem",
  meta: [
    {
      name: "description",
      content:
        "The Ecosystem consists of projects, tools, utilities, libraries and tutorials from a broad community of developers and researchers. The goal of the Ecosystem is to celebrate, support and accelerate development of quantum technologies using Qiskit.",
    },
  ],
});

// TODO: Integrate old code
// const { data: members } = useLazyAsyncData(
//   "fetch-members",
//   async () => await import("~/content/ecosystem/members.json")
// );

// const { data: tiers } = useLazyAsyncData(
//   "fetch-tiers",
//   async () => await import("~/content/ecosystem/tiers.json")
// );

// const tierFilters = ref<string[]>([]);

// const noTierFiltersSelected = computed(() => tierFilters.value.length === 0);

// const filteredMembers = computed(() => {
//   return noTierFiltersSelected
//     ? members.value
//     : members.value.filter((member) => tierFilters.value.includes(member.tier));
// });

// const tiersNames = computed(() => tiers.value.map((tier: any) => tier.name));

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

// function getTierDescription(tierName: string): string {
//   const tier = tiers.value.find((tier: any) => tier.name === tierName);
//   return tier.description || "";
// }

// function updateTierFilter(filterValue: string, isChecked: boolean) {
//   isChecked
//     ? tierFilters.value.push(filterValue)
//     : (tierFilters.value = tierFilters.value.filter(
//         (tier: any) => tier !== filterValue
//       ));
// }

// const updateTierFilters = (filterValues: string[]) => {
//   tierFilters.value = filterValues;
// };

// function isTierFilterChecked(filterValue: string): boolean {
//   return tierFilters.value.includes(filterValue);
// }

// TODO: Refactor tracking
// export default class EcosystemPage {
//   routeName: string = 'ecosystem';

//   joinAction: GeneralLink = {
//     url: 'https://github.com/qiskit-community/ecosystem#ecosystem--',
//     label: 'Join the ecosystem'
//   };
// }
</script>

<style lang="scss">
// TODO: Review old CSS
// .ecosystem-header {
//   &__hero {
//     .bx--col-max-8 {
//       max-width: 100%;
//       flex: 0 0 100%;
//     }
//   }

//   &__cta {
//     height: 50%;
//   }
// }

// .ecosystem__filters-result-section {
//   margin-top: 4rem;

//   &__tiers {
//     text-transform: capitalize;
//   }
// }

// .bx--col-sm-4 {
//   padding-bottom: carbon.$spacing-08;
// }

// .app-card {
//   &__description {
//     .bx--row {
//       margin-left: 0;
//     }
//   }

//   &__tags {
//     flex-direction: row;
//   }
// }

// .bx--accordion__title {
//   display: flex;
//   flex-direction: row;
//   gap: 10px;

//   p,
//   .p {
//     margin-bottom: 0;
//   }
// }

// .bx--accordion__item {
//   background-color:carbon.$cool-gray-20;
//   border-bottom: none;
// }

// .bx--accordion__item--active .bx--accordion__content {
//   padding: 0;
//   margin: 0;
//   padding-top: 0;
//   padding-bottom: 0;
// }

// .bx--accordion__item:last-child {
//   border-bottom: none;
// }

// .project-card {
//   &__license {
//     font-size: 12px;
//     margin-right: carbon.$spacing-05;
//     margin-top: calc($spacing-01 / 2);
//   }

//   &__star {
//     display: flex;
//     flex-direction: row;

//     svg {
//       margin-top: calc($spacing-01 / 2);
//       margin-right: carbon.$spacing-01;
//       fill:carbon.$cool-gray-60;
//     }

//   }

//   .app-card__title {
//     font-size: 20px;
//   }
// }
</style>
