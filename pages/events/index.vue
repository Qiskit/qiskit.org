<template>
  <div>
    <AppPageHeaderFixed>
      Join <TypewriterEffect
        :values="[
          'events',
          'hackathons',
          'camps',
          'unconferences',
          'talks'
        ]"
      /> from the world&rsquo;s largest
      quantum computing community
    </AppPageHeaderFixed>
    <div class="bx--grid">
      <div class="event-page__time-filters">
        <client-only>
          <cv-tabs aria-label="navigation tab label" @tab-selected="selectTab">
            <cv-tab id="tab-1" label="Upcoming events" />
            <cv-tab id="tab-2" label="Past events" />
          </cv-tabs>
        </client-only>
      </div>
      <AppFiltersResultsLayout>
        <template slot="filters-on-m-l-screen">
          <AppFieldset
            v-for="filter in extraFilters"
            :key="filter.label"
            :label="filter.label"
          >
            <client-only>
              <cv-checkbox
                v-for="option in filter.options"
                :key="option"
                :value="option"
                :label="option"
                :checked="isFilterChecked(filter.filterType, option)"
                :aria-checked="isFilterChecked(filter.filterType, option)"
                @change="updateFilter(filter.filterType, option, $event)"
              />
            </client-only>
          </AppFieldset>
        </template>
        <template slot="filters-on-s-screen">
          <div
            v-for="filter in extraFilters"
            :key="filter.label"
          >
            <AppMultiSelect
              :label="filter.label"
              :options="filter.options"
              :value="getCheckedFilters(filter.filterType)"
              @change-selection="updateWholeFilter(filter.filterType, $event)"
            />
          </div>
        </template>
        <template slot="results">
          <AppCard
            v-if="noEvents"
            :image="emptyCard.img"
            :title="emptyCard.title"
          >
            <div class="event-page__empty-card-description">
              {{ emptyCard.description }}
            </div>
          </AppCard>
          <div v-else class="bx--row">
            <div
              v-for="event in filteredEvents"
              :key="`${event.title}-${event.place}-${event.date}`"
              class="bx--col-sm-4 bx--col-xlg-8"
            >
              <EventCard
                class="app-filters-results-layout__results-item"
                :types="event.types"
                :title="event.title"
                :image="event.image"
                :location="event.location"
                :date="event.date"
                :to="event.to"
              />
            </div>
          </div>
        </template>
        <template slot="extra-info">
          <div class="event-page__start-an-event">
            <h3>Start an event</h3>
            <p class="event-page__start-an-event__description">
              We can help you bring Qiskit experts to your campus for guest
              lectures, hackathons, and other events.
            </p>
            <AppCta v-bind="eventRequestLink" />
          </div>
        </template>
      </AppFiltersResultsLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'

import {
  CommunityEvent,
  WORLD_REGION_OPTIONS,
  COMMUNITY_EVENT_TYPE_OPTIONS
} from '~/store/events'
import { EVENT_REQUEST_LINK } from '~/constants/appLinks'

definePageMeta({
  layout: 'default-max'
})

useHead({
  title: 'Qiskit Events'
})

const eventRequestLink = EVENT_REQUEST_LINK
const emptyCard = {
  title: 'No events found',
  description: 'Trying doing a wider search criteria, or consider starting your own event.',
  img: '/images/events/no-events.svg'
}
const extraFilters = [
  {
    label: 'Locations',
    options: WORLD_REGION_OPTIONS,
    filterType: 'regionFilters'
  },
  {
    label: 'Types',
    options: COMMUNITY_EVENT_TYPE_OPTIONS,
    filterType: 'typeFilters'
  }
]

const { data: upcomingEvents } = useLazyAsyncData(
  'fetch-upcoming-events',
  async () => await import('~/content/events/upcoming-community-events.json') as CommunityEvent[]
)

const { data: pastEvents } = useLazyAsyncData(
  'fetch-past-events',
  async () => await import('~/content/events/past-community-events.json') as CommunityEvent[]
)

const activeSet = ref('upcoming')
const regionFilters = ref([] as string[])
const typeFilters = ref([] as string[])

const showUpcomingEvents = computed(() => activeSet.value === 'upcoming')
const events = computed(() => showUpcomingEvents.value ? upcomingEvents.value : pastEvents.value)
const noRegionFiltersSelected = computed(() => regionFilters.value.length === 0)
const noTypeFiltersSelected = computed(() => typeFilters.value.length === 0)

const filteredEvents = computed(
  () => {
    if (noTypeFiltersSelected.value && noRegionFiltersSelected.value) { return events.value }

    if (noRegionFiltersSelected.value) { return filterBy(events.value, typeFilters.value, 'types') }

    if (noTypeFiltersSelected.value) { return filterBy(events.value, regionFilters.value, 'regions') }

    const eventsAfterApplyTypeFilter = filterBy(events.value, typeFilters, 'types')

    return filterBy(eventsAfterApplyTypeFilter, regionFilters, 'regions')

    function filterBy (allEvents: CommunityEvent[], selectedFilters: string[], propToFilter: keyof CommunityEvent) {
      return allEvents.filter((event) => {
        const propValue = event[propToFilter] || []
        const valueArray = Array.isArray(propValue) ? propValue : [propValue]
        return valueArray.some(value => selectedFilters.includes(value))
      })
    }
  }
)

const noEvents = computed(() => filteredEvents.value.length === 0)

const getCheckedFilters = (filter: string) => (this as any)[filter]

const updateWholeFilter = (filter: string, filterValues: string[]) => {
  filter === 'regionFilters'
    ? regionFilters.value = filterValues
    : typeFilters.value = filterValues
}

const isFilterChecked = (filter: string, filterValue: string): boolean => {
  return filter === 'regionFilters'
    ? regionFilters.value.includes(filterValue)
    : typeFilters.value.includes(filterValue)
}

function updateFilter (filter: string, filterValue: string, isSelected: boolean) {
  if (filter === 'regionFilters') {
    isSelected
      ? addFilter(regionFilters.value, filterValue)
      : removeFilter(regionFilters.value, filterValue)
  } else if (filter === 'typeFilters') {
    isSelected
      ? addFilter(typeFilters.value, filterValue)
      : removeFilter(typeFilters.value, filterValue)
  }
}

function addFilter (filterContent: string[], filterValue: string) {
  const filterIndex = filterContent.indexOf(filterValue)
  const noFilterFound = filterIndex === -1

  noFilterFound && filterContent.push(filterValue)
}

function removeFilter (filterContent: string[], filterValue: string) {
  const filterIndex = filterContent.indexOf(filterValue)
  const isFilterFound = filterIndex !== -1

  isFilterFound && filterContent.splice(filterIndex, 1)
}

const selectTab = (selectedTab: number) => {
  activeSet.value = selectedTab === 0 ? 'upcoming' : 'past'
}

// TODO: Refactor "logic" pages
// export default class EventsPage extends QiskitPage {
//   const routeName = 'events'
// }
</script>

<style lang="scss">
@import '~carbon-components/scss/globals/scss/typography';

.event-page {
  &__time-filters {
    margin-top: $spacing-07;
    margin-bottom: $spacing-09;

    .bx--tabs--scrollable__nav-link {
      color: black;
      border-bottom-color: $border-color;
    }

    .bx--tabs--scrollable__nav-item--selected:not(.bx--tabs--scrollable__nav-item--disabled) .bx--tabs--scrollable__nav-link {
        border-bottom-color: $border-color-secondary;
    }

    .bx--tabs--scrollable__nav-item:not(.bx--tabs--scrollable__nav-item--disabled) .bx--tabs--scrollable__nav-link,
    .bx--tabs--scrollable__nav-item:hover:not(.bx--tabs--scrollable__nav-item--selected):not(.bx--tabs--scrollable__nav-item--disabled) .bx--tabs--scrollable__nav-link {
      color: $text-color;
    }

    @include mq($until: medium) {
      margin-bottom: 0;

      .bx--tabs-trigger {
        background-color: $background-color-white;
        border-bottom: 1px solid $border-color;

        &[class*="--open"] {
          background-color: $background-color-lighter;
        }
      }

      .bx--tabs-trigger svg {
        fill: $black-100;
      }

      .bx--tabs-trigger-text {
        color: $text-color;
      }

      .bx--tabs-trigger--open {
        border-bottom: 1px solid $border-color-quaternary;
      }

      .bx--tabs-trigger--open,
      .bx--tabs--scrollable__nav-item {
        background-color: $background-color-lighter;
      }

      .bx--tabs--scrollable__nav-item:last-child .bx--tabs--scrollable__nav-link {
        border-bottom: none;
      }

      .bx--tabs--scrollable__nav-item:hover:not(.bx--tabs--scrollable__nav-item--selected):not(.bx--tabs--scrollable__nav-item--disabled) {
        background-color: $background-color-light;
      }
    }
  }

  &__main-content {
    @include mq($until: medium) {
      margin-top: $spacing-09;
    }
  }

  &__empty-card-description {
    height: 8rem;

    @include mq($until: medium) {
      height: auto;
    }
  }

  &__start-an-event {
    margin-top: $spacing-10;
    margin-bottom: $spacing-10;

    &__description {
      margin-top: $spacing-06;
      margin-bottom: $spacing-07;
      max-width: 20rem;

      @include mq($from: large) {
        max-width: 24rem;
      }
    }
  }
}
</style>
