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
      <div class="event-page__tabs">
        <client-only>
          <cv-tabs aria-label="Event tabs" @tab-selected="selectTab">
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
                :time="event.startDateAndTime"
                :to="event.to"
              >
                {{ event.abstract }}
              </EventCard>
            </div>
          </div>
        </template>
        <template slot="extra-info">
          <div id="follow-our-event-calendar" class="event-page__anchor">
            <a href="#follow-our-event-calendar" />
            <div class="event-page__section">
              <h3>Follow our event calendar</h3>
              <p class="event-page__section__description">
                <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
                Stay up to date with all of our scheduled events by following our calendar. You can view the calendar by visiting <AppLink v-bind="qiskitCalendarLink">{{ qiskitCalendarLink.label }}</AppLink>, or subscribe to it by adding to the calendar app of your choice.
              </p>
              <div class="event-page__tabs">
                <cv-tabs aria-label="Calendar applications">
                  <cv-tab
                    v-for="{ name, instructions } in calendarsInstructions"
                    :id="`tab-${name}`"
                    :key="name"
                    :label="name"
                    class="event-page__tab"
                  >
                    <p class="event-page__sync">
                      Start by copying the calendar subscription link
                      <cv-code-snippet
                        kind="inline"
                        feedback-aria-label="Copy calendar sync url"
                      >
                        <span>{{ qiskitCalendarSyncLink }}</span>
                      </cv-code-snippet>
                    </p>
                    <component :is="instructions" class="event-page__instructions" />
                  </cv-tab>
                </cv-tabs>
              </div>
            </div>
            <div class="event-page__section">
              <h3>Start an event</h3>
              <p class="event-page__section__description">
                We can help you bring Qiskit experts to your campus for guest
                lectures, hackathons, and other events.
              </p>
              <AppCta v-bind="eventRequestLink" />
            </div>
          </div>
        </template>
      </AppFiltersResultsLayout>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { Component } from 'vue-property-decorator'
import GoogleCalendarInstructions from '~/components/events/calendars/GoogleInstructions.vue'
import OutlookCalendarInstructions from '~/components/events/calendars/OutlookInstructions.vue'
import AppleCalendarInstructions from '~/components/events/calendars/AppleInstructions.vue'
import QiskitPage from '~/components/logic/QiskitPage.vue'

import {
  CommunityEvent,
  WORLD_REGION_OPTIONS,
  COMMUNITY_EVENT_TYPE_OPTIONS
} from '~/store/events'
import { EVENT_REQUEST_LINK, GeneralLink } from '~/constants/appLinks'

@Component({
  head () {
    return {
      title: 'Qiskit Events'
    }
  },
  layout: 'default-max',
  computed: {
    ...mapGetters('events', [
      'filteredEvents',
      'typeFilters',
      'regionFilters'
    ])
  },
  components: {
    AppleCalendarInstructions,
    GoogleCalendarInstructions,
    OutlookCalendarInstructions
  },

  async fetch ({ store }) {
    const upcomingEvents = await store.dispatch('events/fetchUpcomingEvents')
    const pastEvents = await store.dispatch('events/fetchPastEvents')

    const upcomingEventsPayload = { events: 'upcomingCommunityEvents', eventsSet: upcomingEvents }
    const pastEventsPayload = { events: 'pastCommunityEvents', eventsSet: pastEvents }
    store.commit('events/setEvents', upcomingEventsPayload)
    store.commit('events/setEvents', pastEventsPayload)
  }
})
export default class EventsPage extends QiskitPage {
  routeName: string = 'events'
  eventRequestLink = EVENT_REQUEST_LINK
  emptyCard = {
    title: 'No events found',
    description: 'Try using wider search criteria, or consider starting your own event.',
    img: '/images/events/no-events.svg'
  }

  extraFilters = [
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

  calendarsInstructions = [
    {
      name: 'Google',
      instructions: GoogleCalendarInstructions
    },
    {
      name: 'Outlook',
      instructions: OutlookCalendarInstructions
    },
    {
      name: 'Apple',
      instructions: AppleCalendarInstructions
    }
  ]

    qiskitCalendarSyncLink = 'https://qisk.it/calendar-sync'
    qiskitCalendarLink: GeneralLink = {
      url: 'https://qisk.it/calendar',
      label: 'https://qisk.it/calendar',
      segment: {
        cta: 'qiskit-calendar', location: 'events-page'
      }
    }

    get noEvents (): boolean {
      return (this as any).filteredEvents.length === 0
    }

    getCheckedFilters (filter: string) {
      return (this as any)[filter]
    }

    updateWholeFilter (filter: string, filterValues: string[]): void {
      const { commit } = this.$store
      const payload = { filter, filterValues }

      commit('events/updateFilterSet', payload)
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
        ? commit('events/addFilter', payload)
        : commit('events/removeFilter', payload)
    }

    selectTab (selectedTab: number) {
      const activeSet = selectedTab === 0 ? 'upcoming' : 'past'

      this.$store.commit('events/setActiveSet', activeSet)
    }
}
</script>

<style lang="scss">
@import '~carbon-components/scss/globals/scss/typography';

.event-page {
  &__tabs {
    margin-top: $spacing-07;
    margin-bottom: $spacing-09;

    .bx--tabs--scrollable__nav-link {
      color: $black-100;
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

  &__section {
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

    a {
      text-decoration: none;

      h3{
        color: black;
      }
    }

  }

  &__anchor{
    scroll-margin-top: 65px;
  }

  &__tab {
    padding-top: $spacing-06;
  }

  &__instructions {
    padding-left: $spacing-06;
  }

}
</style>
