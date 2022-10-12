<template>
  <main class="fall-fest-page">
    <AppPageHeaderWithCard
      :cta="headerData.cta"
      :card-title="headerData.cardSectionHeading"
    >
      <template slot="title">
        {{ headerData.titleLine1 }}
        <br>
        {{ headerData.titleLine2 }}
      </template>
      <template slot="description">
        <p>
          The Qiskit Fall Fest is a collection of quantum computing events on college campuses around the world. Every Fall Fest event is organized and run by the students on each campus, with support from the entire IBM Quantum team. Student leaders work alongside IBM throughout the month of September to design and plan their event, which are then run in October. The events vary from technical hackathons to beginner-friendly challenges, all with the goal of helping to grow the local community’s skill set.
        </p>
      </template>
      <template slot="card">
        <EventCard v-bind="headerData.card" vertical-layout>
          {{ headerData.card.description }}
        </EventCard>
      </template>
    </AppPageHeaderWithCard>

    <div class="bx--grid fall-fest-page__content">
      <section class="fall-fest-page__section">
        <UniversityDirectorySection />
      </section>
    </div>

    <div class="bx--grid fall-fest-page__content">
      <section class="fall-fest-page__section">
        <h2 v-text="agendaData.title" />
        <p v-text="agendaData.subtitle" />
        <cv-tabs>
          <cv-tab
            v-for="week in agendaData.weeks"
            :key="week.tabName"
            :label="week.tabName"
          >
            <AppDataTable
              class="fall-fest-page__section"
              :columns="agendaColumnsDataTable"
            >
              <cv-data-table-row v-for="(row, rowIndex) in week.tableData" :key="`${rowIndex}`">
                <cv-data-table-cell v-for="({styles, data, link}, elementIndex) in row" :key="`${elementIndex}`">
                  <AppLink v-if="link" class="fall-fest-page__table-link" :style="styles" :url="link">
                    Link to event
                  </AppLink>
                  <span v-else :style="styles">{{ data }}</span>
                </cv-data-table-cell>
              </cv-data-table-row>
            </AppDataTable>
          </cv-tab>
        </cv-tabs>
      </section>

      <AppHelpfulResourcesSection
        class="fall-fest-page__section"
        :title="helpfulResourcesData.title"
        :resources="helpfulResourcesData.resources"
      />
    </div>
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import UniversityDirectorySection from '../../components/events/fall-fest/UniversityDirectorySection.vue'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import {
  header,
  agenda,
  helpfulResources
} from '~/constants/fallFest2022Content'

@Component({
  head () {
    const title = 'Qiskit Fall Fest 2022'
    const description = 'The Qiskit Fall Fest is a collection of quantum computing events on college campuses around the world. Every Fall Fest event is organized and run by the students on each campus, with support from the entire IBM Quantum team. Student leaders work alongside IBM throughout the month of September to design and plan their event, which are then run in October. The events vary from technical hackathons to beginner-friendly challenges, all with the goal of helping to grow the local community’s skill set.'
    const image = '/images/events/fall-fest/fall-fest.png'

    return {
      title,
      meta: [
        {
          name: 'description',
          content: description
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: image
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: title
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: image
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: image
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: title
        }
      ]
    }
  },
  components: { UniversityDirectorySection },
  layout: 'default-max'
})
export default class FallFestPage extends QiskitPage {
  routeName = 'fall-fest'
  agendaColumnsDataTable: string[] = ['University', 'Start Date', 'End Date', 'Detail', 'Type of Event', 'Link']
  headerData = header
  agendaData = agenda
  helpfulResourcesData = helpfulResources
}
</script>

<style lang="scss" scoped>
.fall-fest-page {
  display: flex;
  flex-direction: column;

  &__section {
    margin-top: $spacing-10;
    margin-bottom: $spacing-07;

    @include mq($until: large) {
      margin-bottom: $spacing-05;
    }
  }

  &__content {
    @include mq($until: large) {
      max-width: 100%;
    }
  }
}
</style>

<style lang="scss" scoped>
// overrides
.fall-fest-page {
  &__table-link {
    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }

  ::v-deep {
    // TODO: Extract styles like "_checkbox" to be defined globally
    & a.bx--tabs__nav-link {
      color: $text-color-light;
      border-bottom-color: $border-color;

      &:focus,
      &:active {
        outline: none;
      }

      &:not(.bx--tabs__nav-item--disabled) {
        color: $text-color-light;
      }
    }

    // TODO: Not sure if the order is important in these selectors.
    // So, disabling. Review the reule 'no-descending-specificity' here:
    // https://stylelint.io/user-guide/ignore-code
    // stylelint-disable no-descending-specificity
    & .bx--tabs__nav-item {
      &--selected:not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link {
        border-bottom-color: $border-color-secondary;
      }
    }

    & .bx--tabs__nav-item:hover:not(.bx--tabs__nav-item--disabled) {
        box-shadow: none;
      }

      & .bx--tabs__nav-item:hover:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled),
      & .bx--tabs__nav-item,
      & .bx--tabs-trigger {
        background-color: $background-color-white;

        svg {
          fill: $gray-100;
        }
      }

      & .bx--tabs__nav-link,
      & .bx--tabs-trigger-text {
        color: $text-color;
    }
    // stylelint-enable no-descending-specificity

    .app-data-table {
      margin-top: $spacing-07;
      padding: 0;
    }
  }
}

</style>
