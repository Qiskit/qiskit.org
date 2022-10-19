<template>
  <main class="summer-school-page">
    <AppPageHeaderWithCard
      :cta="null"
      :card-title="headerData.cardSectionHeading"
    >
      <template slot="title">
        {{ headerData.titleLine1 }}
        <br>
        {{ headerData.titleLine2 }}
      </template>
      <template slot="description">
        <p>
          The Qiskit Global Summer School 2022 is a two-week intensive summer program designed to empower the quantum researchers and developers of tomorrow with the skills and know-how to explore the world of quantum computing and its applications. This third-annual summer school will provide a focused introduction to quantum computing and its applications to quantum simulation, with a specific focus on quantum chemistry.
        </p>
        <p>
          Please follow
          <AppLink v-bind="headerData.qiskitTwitterLink">
            Qiskit Twitter
          </AppLink>
          for more details and updates. For any questions, please check out our FAQ below!
        </p>
        <p>
          See you next year!
        </p>
      </template>
      <template slot="card">
        <EventCard v-bind="headerData.card" vertical-layout>
          {{ headerData.card.description }}
        </EventCard>
      </template>
    </AppPageHeaderWithCard>

    <div class="bx--grid summer-school-page__content">
      <AppMosaicSection
        class="summer-school-page__section"
        :title="mosaicData.title"
        :elements="mosaicData.tiles"
      />

      <section class="summer-school-page__section">
        <h2 v-text="agendaData.title" />
        <p v-text="agendaData.subtitle" />
        <cv-tabs>
          <cv-tab
            v-for="week in agendaData.weeks"
            :key="week.tabName"
            :label="week.tabName"
          >
            <AppDataTable
              class="summer-school-page__section"
              :columns="agendaColumnsDataTable"
            >
              <cv-data-table-row v-for="(row, rowIndex) in week.tableData" :key="`${rowIndex}`">
                <cv-data-table-cell v-for="({styles, data}, elementIndex) in row" :key="`${elementIndex}`">
                  <span :style="styles">{{ data }}</span>
                </cv-data-table-cell>
              </cv-data-table-row>
            </AppDataTable>
          </cv-tab>
        </cv-tabs>
      </section>

      <FaqSection class="summer-school-page__section" />

      <AppHelpfulResourcesSection
        class="summer-school-page__section"
        :title="helpfulResourcesData.title"
        :resources="helpfulResourcesData.resources"
      />
    </div>
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import {
  header,
  mosaic,
  agenda,
  helpfulResources
} from '~/constants/summerSchool2022Content'

@Component({
  head () {
    const title = 'Qiskit Global Summer School 2022'
    const description = `The Qiskit Global Summer School 2022 is a two-week intensive summer school
    designed to empower the next generation of quantum researchers and developers with the skills
    and know-how to explore quantum applications on their own`
    const image = '/images/events/summer-school/summer-school-logo.png'

    return {
      title,
      meta: [
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
  layout: 'default-max'
})
export default class SummerSchoolPage extends QiskitPage {
  routeName = 'summer-school'
  agendaColumnsDataTable: string[] = ['Day', 'Topic', 'Speaker', 'Format']
  headerData = header
  mosaicData = mosaic
  agendaData = agenda
  helpfulResourcesData = helpfulResources
}
</script>

<style lang="scss" scoped>
.summer-school-page {
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
.summer-school-page {
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
      &:hover:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link,
      &:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled):not(.bx--tabs__nav-item--selected) .bx--tabs__nav-link:focus,
      &:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled):not(.bx--tabs__nav-item--selected) a.bx--tabs__nav-link:active,
      &:not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link, .bx--tabs__nav-item--selected:not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link:focus {
        color: $text-color-light;
      }

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
