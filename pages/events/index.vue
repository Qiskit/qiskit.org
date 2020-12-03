<template>
  <div class="event-page">
    <TheEventsHeader />
    <div class="event-page__container">
      <div class="event-page__time-filters">
        <client-only>
          <cv-tabs aria-label="navigation tab label" @tab-selected="selectTab">
            <cv-tab id="tab-1" label="Upcoming events" />
            <cv-tab id="tab-2" label="Past events" />
          </cv-tabs>
        </client-only>
      </div>
      <div
        v-for="filter in extraFilters"
        :key="filter.label"
        class="event-page__extra-filters event-page__extra-filters_on-small-screen"
      >
        <client-only>
          <AppMultiSelect
            :label="filter.label"
            :options="filter.options"
            :value="getCheckedFilters(filter.filterType)"
            @change-on-multi-select="updateWholeFilter(filter.filterType, $event)"
          />
        </client-only>
      </div>
      <div class="event-page__event-index">
        <div class="event-page__extra-filters event-page__extra-filters_on-large-screen">
          <AppFieldset
            v-for="filter in extraFilters"
            :key="filter.label"
            :label="filter.label"
          >
            <client-only>
              <cv-checkbox
                v-for="option in filter.options"
                :key="option.label"
                class="event-page__extra-filters__checkboxes"
                :value="option.value"
                :label="option.label"
                :checked="isFilterChecked(filter.filterType, option.value)"
                :aria-checked="isFilterChecked(filter.filterType, option.value)"
                @change="updateFilter(filter.filterType, option.value, $event)"
              />
            </client-only>
          </AppFieldset>
        </div>
        <div class="event-page__main-content">
          <div>
            <AppCard
              v-if="noEvents"
              :image="emptyCard.img"
              :title="emptyCard.title"
            >
              {{ emptyCard.description }}
            </AppCard>
            <EventCard
              v-for="event in filteredEvents"
              v-else
              :key="`${event.title}-${event.place}-${event.date}`"
              :types="event.types"
              :title="event.title"
              :image="event.image"
              :location="event.location"
              :date="event.date"
              :to="event.to"
            />
          </div>
          <div class="event-page__start-an-event">
            <h3 class="event-page__start-an-event__title">
              Start an event
            </h3>
            <p class="copy__paragraph copy__paragraph_importance_outstanding event-page__start-an-event__description">
              We can help you bring Qiskit experts to your campus for guest lectures, hackathons, and other events.
            </p>
            <AppCta v-bind="eventRequestLink" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex'
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'

import {
  CommunityEvent,
  WORLD_REGION_OPTIONS,
  COMMUNITY_EVENT_TYPE_OPTIONS,
  EventMultiSelectOption
} from '~/store/modules/events.ts'
import { EVENT_REQUEST_LINK } from '~/constants/appLinks'

@Component({
  head () {
    return {
      title: 'Qiskit Events'
    }
  },

  computed: {
    ...mapGetters([
      'filteredEvents',
      'typeFilters',
      'regionFilters'
    ])
  },

  methods: {
    ...mapActions({
      fetchEvents: 'fetchEvents'
    })
  },

  async fetch ({ store }) {
    const upcomingEvents = await store.dispatch('fetchUpcomingEvents')
    const pastEvents = await store.dispatch('fetchPastEvents')

    const upcomingEventsPayload = { events: 'upcomingCommunityEvents', eventsSet: upcomingEvents }
    const pastEventsPayload = { events: 'pastCommunityEvents', eventsSet: pastEvents }
    store.commit('setEvents', upcomingEventsPayload)
    store.commit('setEvents', pastEventsPayload)
  }
})
export default class EventsPage extends QiskitPage {
  regions = WORLD_REGION_OPTIONS
  types = COMMUNITY_EVENT_TYPE_OPTIONS
  routeName: string = 'events'
  eventRequestLink = EVENT_REQUEST_LINK
  emptyCard = {
    title: 'No events found',
    description: 'Trying doing a wider search criteria, or consider starting your own event.',
    img: '/images/events/no-events.svg'
  }

  // multiselect
  regionsOptions = this.getOptions(this.regions)
  typesOptions = this.getOptions(this.types)
  regionsLabel: string = 'Locations'
  typesLabel: string = 'Types'
  regionsFilters: string = 'regionFilters'
  typesFilters: string = 'typeFilters'

  extraFilters = [
    {
      label: this.regionsLabel,
      options: this.regionsOptions,
      filterType: this.regionsFilters
    },
    {
      label: this.typesLabel,
      options: this.typesOptions,
      filterType: this.typesFilters
    }
  ]

  get noEvents (): boolean {
    return (this as any).filteredEvents.length === 0
  }

  getOptions (optionsList: any): Array<EventMultiSelectOption> {
    return optionsList.map((item: string) => ({ label: item, value: item, name: item }))
  }

  getCheckedFilters (filter: string) {
    return (this as any)[filter]
  }

  updateWholeFilter (filter: string, filterValues: string[]): void {
    const { commit } = this.$store
    const payload = { filter, filterValues }

    commit('updateFilterSet', payload)
  }

  isFilterChecked (filter: string, filterValue: string): Array<CommunityEvent> {
    const typeFilters = (this as any).typeFilters
    const regionFilters = (this as any).regionFilters

    return filter === 'regionFilters'
      ? regionFilters.includes(filterValue)
      : typeFilters.includes(filterValue)
  }

  updateFilter (filter: string, filterValue: string, isSelected: boolean): void {
    const payload = { filter, filterValue }
    const { commit } = this.$store

    isSelected
      ? commit('addFilter', payload)
      : commit('removeFilter', payload)
  }

  selectTab (selectedTab: number) {
    const activeSet = selectedTab === 0 ? 'upcoming' : 'past'

    this.$store.commit('setActiveSet', activeSet)
  }
}
</script>

<style lang="scss">
@import '~carbon-components/scss/globals/scss/typography';

.event-page {
  background-color: $white;
  color: $white-text-01;

  &__container {
    @include contained();
  }

  &__event-index {
    display: flex;
    justify-content: space-between;

    @include mq($until: medium) {
      flex-direction: column;
    }
  }

  &__time-filters {
    margin-top: $layout-03;
    margin-bottom: $layout-04;
    .bx--tabs__nav-link {
      color: $black-100;
      border-bottom-color: $gray-20;
    }

    .bx--tabs__nav-item:not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link,
    .bx--tabs__nav-item:hover:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link {
      color: $gray-100;
    }

    .bx--tabs__nav-item--selected:not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link {
        border-bottom-color: $purple-70;
    }

    @include mq($until: medium) {
      margin-bottom: 0;
      .bx--tabs-trigger {
        background-color: $white;
        border-bottom: 1px solid $gray-20;

        &[class*="--open"] {
          background-color: $cool-gray-10;
        }
      }

      .bx--tabs-trigger svg {
        fill: $black-100;
      }

      .bx--tabs-trigger-text {
        color: $gray-100;
      }

      .bx--tabs-trigger--open {
        border-bottom: 1px solid $gray-60;
      }

      .bx--tabs-trigger--open,
      .bx--tabs__nav-item {
        background-color: $cool-gray-10;
      }

      .bx--tabs__nav-item:last-child .bx--tabs__nav-link {
        border-bottom: none;
      }

      .bx--tabs__nav-item:hover:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled) {
        background-color: $cool-gray-20;
      }
    }
  }

  &__extra-filters {
    &__checkboxes {
      .bx--checkbox-label::before {
        border: 1px solid $black-100;
      }

      .bx--checkbox:focus + .bx--checkbox-label::before {
        box-shadow: 0 0 0 2px $white, 0 0 0 4px $purple-60;
      }

      .bx--checkbox:checked + .bx--checkbox-label::before {
        background-color: $gray-10;
        border-color: $gray-10;
      }
    }

    &_on-large-screen {
      @include mq($until: medium) {
        display: none;
      }
    }

    &_on-small-screen {
      @include mq($from: medium) {
        display: none;
      }
    }
  }

  &__main-content {
    width: 75%;

    @include mq($until: medium) {
      width: 100%;
      margin-top: $layout-04;
    }
  }

  &__start-an-event {
    margin-top: $layout-05;
    margin-bottom: $layout-05;

    &__title {
      @include type-style('productive-heading-02');
    }

    &__description {
      margin-top: $layout-02;
      margin-bottom: $layout-03;
    }
  }
}
</style>
