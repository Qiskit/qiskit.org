<template>
  <main>
    <AppPageHeaderFixed>
      Explore <br>
      <TypewriterEffect
        :values="[
          'core packages',
          'tools',
          'prototypes',
          'community projects'
        ]"
      />
      <br>
      from Qiskit and the Qiskit community
    </AppPageHeaderFixed>
    <section id="meet-the-advocates" class="bx--grid meet-the-advocates">
      <h2>
        Ecosystem Resources
      </h2>
      <div class="bx--row">
        <div class="bx--col-md-5 bx--col-lg-8 bx--col-xlg-7 bx--col-max-6">
          <p>
            The Ecosystem consists of projects, tools, utilities, libraries and tutorials from a broad community of developers and researchers. The goal of the Ecosystem is to celebrate, support and accelerate development of quantum technologies using Qiskit.
          </p>
        </div>
        <AppCta class="ecosystem-header__cta" v-bind="joinAction" />
      </div>
      <AppFiltersResultsLayout class="meet-the-advocates__filters-result-section">
        <template slot="filters-on-m-l-screen">
          <AppFieldset label="Tier">
            <client-only>
              <cv-checkbox
                v-for="option in tiers"
                :key="option"
                class="meet-the-advocates__filters-result-section__tiers"
                :label="option"
                :value="option"
                :checked="isTierFilterChecked(option)"
                @change="updateTierFilter(option, $event)"
              />
            </client-only>
          </AppFieldset>
        </template>
        <template slot="filters-on-s-screen" />
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
                :tags="member.labels.concat([member.tier])"
                cta-label="Go to repo"
                :to="member.url"
              >
                <p class="project-card__license">
                  {{ member.licence }}
                </p>
                <p>
                  {{ member.description }}
                </p>
              </AppCard>
              <cv-accordion v-if="member.testsResults.length != 0">
                <cv-accordion-item>
                  <template slot="title">
                    <span style="font-weight: bold">Test Results</span>
                    <span>({{ new Date(member.updatedAt * 1000).toLocaleString('en-UK', { timeZone: 'UTC' }) }})</span>
                  </template>
                  <template slot="content">
                    <TestTable
                      class="test-table"
                      :filtered-data="getTestRows(member)"
                    />
                  </template>
                </cv-accordion-item>
              </cv-accordion>
            </div>
          </div>
        </template>
      </AppFiltersResultsLayout>
    </section>
  </main>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import { GeneralLink } from '~/constants/appLinks'

@Component({
  head () {
    return {
      title: 'Qiskit Ecosystem'
    }
  },
  layout: 'default-max',
  computed: {
    ...mapGetters('ecosystem', [
      'filteredMembers',
      'tierFilters',
      'tiers'
    ])
  },
  async fetch ({ store }) {
    await store.dispatch('ecosystem/fetchMembers')
  },
  methods: {
    getTestRows (member: any): void {
      if (member.testsResults) {
        return member.testsResults.map(({ terraVersion, testType, passed, timestamp }: any) => {
          timestamp = new Date(timestamp * 1000).toLocaleString('en-UK', { timeZone: 'UTC' })
          let formattedTestType
          if (testType === 'STABLE_COMPATIBLE') { formattedTestType = 'stable' } else if (testType === 'DEV_COMPATIBLE') { formattedTestType = 'dev' } else if (testType === 'STANDARD') { formattedTestType = 'standard' }
          return { terraVersion, testType: formattedTestType, passed, timestamp }
        })
      }
    },
    updateTierFilter (tier: string, isChecked: boolean): void {
      const tierFilters = (this as any).tierFilters.filter((oldOption: any) => oldOption !== tier)

      if (isChecked) {
        tierFilters.push(tier)
      }
      this.$store.commit('ecosystem/setTierFilters', tierFilters)
    },
    isTierFilterChecked (filterValue: string): boolean {
      return (this as any).tierFilters.includes(filterValue)
    }
  }

})

export default class EcosystemPage extends QiskitPage {
  routeName: string = 'ecosystem'

  joinAction: GeneralLink = {
    url: 'https://github.com/qiskit-community/ecosystem#ecosystem--',
    label: 'Join the ecosystem'
  }
}
</script>

<style lang="scss">
.ecosystem-header__cta {
  margin-left: $spacing-03;
  margin-right: $spacing-03;
  height: 50%;
}

.meet-the-advocates__filters-result-section {
  margin-top: 4rem;

  &__tiers {
    text-transform: capitalize;
  }
}

.bx--col-sm-4 {
  padding-bottom: $spacing-08
}

.app-card__tags {
    flex-direction: row;
}

.bx--accordion__title {
  display: flex;
  flex-direction: row;
  gap: 10px;

  p, .p {
    margin-bottom: 0;
  }
}

.bx--accordion__item {
  background-color: $cool-gray-20;
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
  }

  .app-card__title {
    font-size: 20px;
  }
}
</style>
