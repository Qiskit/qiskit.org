<template>
  <main class="summer-school-page">
    <AppPageHeaderWithCard
      :description="eventData.header.description"
      :cta="eventData.header.cta"
      :card-title="eventData.header.cardSectionHeading"
    >
      <template slot="title">
        {{ eventData.header.titleLine1 }}
        <br>
        {{ eventData.header.titleLine2 }}
      </template>
      <template slot="card">
        <EventCard v-bind="eventData.header.card" vertical-layout>
          {{ eventData.header.card.description }}
        </EventCard>
      </template>
    </AppPageHeaderWithCard>

    <AppMosaicSection
      class="summer-school-page__section"
      :title="eventData.mosaic.title"
      :elements="eventData.mosaic.tiles"
    />

    <section
      class="summer-school-page__section"
      :style="`order: ${eventData.agenda.pageOrder}`"
    >
      <h2 class="copy__title" v-text="eventData.agenda.title" />
      <p class="copy__paragraph" v-text="eventData.agenda.subtitle" />
      <cv-tabs>
        <cv-tab :label="eventData.agenda.week1.tabName">
          <AppDataTable
            class="summer-school-page__section"
            :columns="agendaColumnsDataTable"
            :elements="eventData.agenda.week1.tableData"
          />
        </cv-tab>
        <cv-tab :label="eventData.agenda.week2.tabName">
          <AppDataTable
            class="summer-school-page__section"
            :columns="agendaColumnsDataTable"
            :elements="eventData.agenda.week2.tableData"
          />
        </cv-tab>
      </cv-tabs>
    </section>

    <FaqSection class="summer-school-page__section" />

    <AppHelpfulResourcesSection
      class="summer-school-page__section"
      :title="eventData.helpfulResources.title"
      :resources="eventData.helpfulResources.resources"
    />
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import * as EventContent from '~/pages/events/summer-school-2021-content'

@Component({
  head () {
    const title = EventContent.metadata.title
    const description = EventContent.metadata.description
    const image = EventContent.metadata.image

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
  }
})
export default class SummerSchoolPage extends QiskitPage {
  routeName = 'summer-school'
  agendaColumnsDataTable: string[] = ['Day', 'Topic', 'Speaker', 'Format']
  eventData = EventContent
}
</script>

<style lang="scss" scoped>
.summer-school-page {
  color: $text-color;
  display: flex;
  flex-direction: column;

  &__section {
    @include contained();
    width: 100%;
    margin-top: $layout-05;
    margin-bottom: $layout-03;

    @include mq($until: large) {
      margin-bottom: $layout-01;
    }
  }
}
</style>

<style lang="scss" scoped>
// overrides
.summer-school-page {
  ::v-deep {
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

    .app-data-table {
      margin-top: $spacing-07;
      padding: 0;
    }
  }
}

</style>
