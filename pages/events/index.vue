<template>
  <div>
    <UiAppPageHeaderFixed>
      Join
      <UiTypewriterEffect
        :values="['events', 'hackathons', 'camps', 'unconferences', 'talks']"
      />
      from the world&rsquo;s largest quantum computing community
    </UiAppPageHeaderFixed>
    <div class="cds--grid">
      <div class="event-page__tabs">
        <client-only>
          <bx-tabs value="upcoming">
            <bx-tab id="tab-1" value="upcoming">Upcoming events</bx-tab>
            <bx-tab id="tab-2" value="past">Past events</bx-tab>
          </bx-tabs>
        </client-only>
      </div>
      <UiAppFiltersResultsLayout>
        <template #filters-on-m-l-screen>
          <UiAppFieldset
            v-for="filter in extraFilters"
            :key="filter.label"
            :label="filter.label"
          >
            <client-only>
              <bx-checkbox
                v-for="option in filter.options"
                :key="option"
                :checked="isFilterChecked(filter.filterType, option)"
                :label-text="option"
                :value="option"
                @bx-checkbox-changed="
                  updateFilter(filter.filterType, option, $event.target.checked)
                "
              />
            </client-only>
          </UiAppFieldset>
        </template>
        <template #filters-on-s-screen>
          <div v-for="filter in extraFilters" :key="filter.label">
            <UiAppMultiSelect
              :label="filter.label"
              :options="filter.options"
              :value="getCheckedFilters(filter.filterType)"
              @change-selection="updateWholeFilter(filter.filterType, $event)"
            />
          </div>
        </template>
        <template #results>
          <UiAppCard
            v-if="noEvents"
            :image="emptyCard.img"
            :title="emptyCard.title"
          >
            <div class="event-page__empty-card-description">
              {{ emptyCard.description }}
            </div>
          </UiAppCard>
          <div v-else class="cds--row">
            <div
              v-for="(eventItem, index) in filteredEvents"
              :key="index"
              class="cds--col-sm-4 cds--col-xlg-8"
            >
              <EventsItemCard
                class="event-page__card"
                :types="eventItem.types"
                :title="eventItem.title"
                :image="eventItem.image"
                :location="eventItem.location"
                :date="eventItem.date"
                :time="eventItem.startDateAndTime"
                :to="eventItem.to"
              />
            </div>
          </div>
        </template>
        <!-- <template slot="extra-info">
          <div class="event-page__section">
            <h3>Follow our event calendar</h3>
            <p class="event-page__section__description">
              !-- eslint-disable-next-line vue/singleline-html-element-content-newline --
              Stay up to date with all of our scheduled events by following our
              calendar. You can view the calendar by visiting
              <UiAppLink v-bind="qiskitCalendarLink">{{
                qiskitCalendarLink.label
              }}</UiAppLink
              >, or subscribe to it by adding to the calendar app of your
              choice.
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
                  <component
                    :is="instructions"
                    class="event-page__instructions"
                  />
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
            <UiAppCta :label="eventRequestLink.label" :url="eventRequestLink.url" />
          </div>
        </template> -->
      </UiAppFiltersResultsLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/checkbox/index.js";
import "@carbon/web-components/es/components/tabs/index.js";
// import GoogleCalendarInstructions from '~/components/events/calendars/GoogleInstructions.vue'
// import OutlookCalendarInstructions from '~/components/events/calendars/OutlookInstructions.vue'
// import AppleCalendarInstructions from '~/components/events/calendars/AppleInstructions.vue'
import {
  CommunityEvent,
  WORLD_REGION_OPTIONS,
  COMMUNITY_EVENT_TYPE_OPTIONS,
} from "~/types/events";
// import { EVENT_REQUEST_LINK, GeneralLink } from '~/constants/appLinks'
import rawPastEvents from "~/content/events/past-community-events.json";
import rawUpcomingEvents from "~/content/events/upcoming-community-events.json";

const pastEvents = rawPastEvents as CommunityEvent[];
const upcomingEvents = rawUpcomingEvents as CommunityEvent[];

definePageMeta({
  layout: "default-max",
});

useHead({
  title: "Qiskit Events",
});

// const calendarsInstructions = [
//   {
//     name: 'Google',
//     instructions: GoogleCalendarInstructions
//   },
//   {
//     name: 'Outlook',
//     instructions: OutlookCalendarInstructions
//   },
//   {
//     name: 'Apple',
//     instructions: AppleCalendarInstructions
//   }
// ]

// const qiskitCalendarSyncLink = 'https://qisk.it/calendar-sync'
// const qiskitCalendarLink: GeneralLink = {
//   url: 'https://qisk.it/calendar',
//   label: 'https://qisk.it/calendar',
//   segment: {
//     cta: 'qiskit-calendar', location: 'events-page'
//   }
// }

// const eventRequestLink = EVENT_REQUEST_LINK

const emptyCard = {
  title: "No events found",
  description:
    "Trying doing a wider search criteria, or consider starting your own event.",
  img: "/images/events/no-events.svg",
};

const extraFilters = [
  {
    label: "Locations",
    options: WORLD_REGION_OPTIONS,
    filterType: "regionFilters",
  },
  {
    label: "Types",
    options: COMMUNITY_EVENT_TYPE_OPTIONS,
    filterType: "typeFilters",
  },
];

const activeSet = ref<"past" | "upcoming">("upcoming");
const regionFilters = ref<string[]>([]);
const typeFilters = ref<string[]>([]);

const showUpcomingEvents = computed(() => activeSet.value === "upcoming");
const events = computed(() =>
  showUpcomingEvents.value ? upcomingEvents : pastEvents
);
const noRegionFiltersSelected = computed(
  () => regionFilters.value.length === 0
);
const noTypeFiltersSelected = computed(() => typeFilters.value.length === 0);

const filteredEvents = computed(() => {
  if (noTypeFiltersSelected.value && noRegionFiltersSelected.value) {
    return events.value;
  }

  if (noRegionFiltersSelected.value) {
    return filterBy(events.value, typeFilters.value, "types");
  }

  if (noTypeFiltersSelected.value) {
    return filterBy(events.value, regionFilters.value, "regions");
  }

  const eventsAfterApplyTypeFilter = filterBy(
    events.value,
    typeFilters.value,
    "types"
  );

  return filterBy(eventsAfterApplyTypeFilter, regionFilters.value, "regions");

  function filterBy(
    allEvents: CommunityEvent[],
    selectedFilters: string[],
    propToFilter: keyof CommunityEvent
  ) {
    return allEvents.filter((event) => {
      const propValue = event[propToFilter] || [];
      const valueArray = Array.isArray(propValue) ? propValue : [propValue];
      return valueArray.some((value) => selectedFilters.includes(value));
    });
  }
});

const noEvents = computed(() => filteredEvents.value.length === 0);

const regionFiltersAsString = computed(() => regionFilters.value.join(","));
const typeFiltersAsString = computed(() => typeFilters.value.join(","));

function isRegionFilter(filter: string) {
  return filter === "regionFilters";
}

function getCheckedFilters(filter: string) {
  return isRegionFilter(filter)
    ? regionFiltersAsString.value
    : typeFiltersAsString.value;
}

function updateWholeFilter(filter: string, newRegionFilters: string) {
  isRegionFilter(filter)
    ? (regionFilters.value = newRegionFilters.split(","))
    : (typeFilters.value = newRegionFilters.split(","));
}

function isFilterChecked(filter: string, filterValue: string): boolean {
  return isRegionFilter(filter)
    ? regionFilters.value.includes(filterValue)
    : typeFilters.value.includes(filterValue);
}

function updateFilter(filter: string, filterValue: string, isChecked: boolean) {
  if (isChecked) {
    isRegionFilter(filter)
      ? regionFilters.value.push(filterValue)
      : typeFilters.value.push(filterValue);
  } else {
    isRegionFilter(filter)
      ? regionFilters.value.splice(regionFilters.value.indexOf(filterValue), 1)
      : typeFilters.value.splice(typeFilters.value.indexOf(filterValue), 1);
  }
}

// function addFilter (filterContent: string[], filterValue: string) {
//   const filterIndex = filterContent.indexOf(filterValue)
//   const noFilterFound = filterIndex === -1

//   noFilterFound && filterContent.push(filterValue)
// }

// function removeFilter (filterContent: string[], filterValue: string) {
//   const filterIndex = filterContent.indexOf(filterValue)
//   const isFilterFound = filterIndex !== -1

//   isFilterFound && filterContent.splice(filterIndex, 1)
// }

// const selectTab = (selectedTab: number) => {
//   activeSet.value = selectedTab === 0 ? 'upcoming' : 'past'
// }

// TODO: Refactor tracking
// export default class EventsPage {
//   const routeName = 'events'
// }
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.event-page {
  &__card {
    margin-bottom: carbon.$spacing-06;
  }

  &__tabs {
    margin-top: carbon.$spacing-07;
    margin-bottom: carbon.$spacing-09;

    .bx--tabs--scrollable__nav-link {
      color: carbon.$black-100;
      border-bottom-color: qiskit.$border-color;
    }

    .bx--tabs--scrollable__nav-item--selected:not(
        .bx--tabs--scrollable__nav-item--disabled
      )
      .bx--tabs--scrollable__nav-link {
      border-bottom-color: qiskit.$border-color-secondary;
    }

    .bx--tabs--scrollable__nav-item:not(
        .bx--tabs--scrollable__nav-item--disabled
      )
      .bx--tabs--scrollable__nav-link,
    .bx--tabs--scrollable__nav-item:hover:not(
        .bx--tabs--scrollable__nav-item--selected
      ):not(.bx--tabs--scrollable__nav-item--disabled)
      .bx--tabs--scrollable__nav-link {
      color: qiskit.$text-color;
    }

    @include carbon.breakpoint-down(md) {
      margin-bottom: 0;

      .bx--tabs-trigger {
        background-color: qiskit.$background-color-white;
        border-bottom: 1px solid qiskit.$border-color;

        &[class*="--open"] {
          background-color: qiskit.$background-color-lighter;
        }
      }

      .bx--tabs-trigger svg {
        fill: carbon.$black-100;
      }

      .bx--tabs-trigger-text {
        color: qiskit.$text-color;
      }

      .bx--tabs-trigger--open {
        border-bottom: 1px solid qiskit.$border-color-quaternary;
      }

      .bx--tabs-trigger--open,
      .bx--tabs--scrollable__nav-item {
        background-color: qiskit.$background-color-lighter;
      }

      .bx--tabs--scrollable__nav-item:last-child
        .bx--tabs--scrollable__nav-link {
        border-bottom: none;
      }

      .bx--tabs--scrollable__nav-item:hover:not(
          .bx--tabs--scrollable__nav-item--selected
        ):not(.bx--tabs--scrollable__nav-item--disabled) {
        background-color: qiskit.$background-color-light;
      }
    }
  }

  &__main-content {
    @include carbon.breakpoint-down(md) {
      margin-top: carbon.$spacing-09;
    }
  }

  &__empty-card-description {
    height: 8rem;

    @include carbon.breakpoint-down(md) {
      height: auto;
    }
  }

  &__section {
    margin-top: carbon.$spacing-10;
    margin-bottom: carbon.$spacing-10;

    &__description {
      margin-top: carbon.$spacing-06;
      margin-bottom: carbon.$spacing-07;
      max-width: 20rem;

      @include carbon.breakpoint-up(lg) {
        max-width: 24rem;
      }
    }
  }

  &__tab {
    padding-top: carbon.$spacing-06;
  }

  &__instructions {
    padding-left: carbon.$spacing-06;
  }
}
</style>
