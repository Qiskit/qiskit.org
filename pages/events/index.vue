<template>
  <div class="event-page">
    <UiPageHeaderFixed>
      Join
      <UiTypewriterEffect
        :values="['events', 'hackathons', 'camps', 'unconferences', 'talks']"
      />
      from the world&rsquo;s largest quantum computing community
    </UiPageHeaderFixed>
    <div class="cds--grid">
      <div class="event-page__tabs">
        <client-only>
          <bx-tabs
            value="upcoming"
            @bx-tabs-selected="selectTab($event.target.value)"
          >
            <bx-tab id="tab-1" value="upcoming">Upcoming events</bx-tab>
            <bx-tab id="tab-2" value="past">Past events</bx-tab>
            <bx-tab id="tab-3" value="calendar">Calendar</bx-tab>
          </bx-tabs>
        </client-only>
      </div>
      <div v-if="showCalendar">
        <iframe
          class="event-page__calendar"
          src="https://airtable.com/embed/shrzmTpiOo1Ye8Nrs?backgroundColor=purple&viewControls=on"
          width="100%"
          height="560"
        />
        <EventsFollowCalendar />
        <EventsRequestEvent />
      </div>
      <UiFiltersResultsLayout v-else>
        <template #filters-on-m-l-screen>
          <UiFieldset
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
          </UiFieldset>
        </template>
        <template #filters-on-s-screen>
          <div v-for="filter in extraFilters" :key="filter.label">
            <UiMultiSelect
              :label="filter.label"
              :options="filter.options"
              :value="getCheckedFilters(filter.filterType)"
              @change-selection="updateWholeFilter(filter.filterType, $event)"
            />
          </div>
        </template>
        <template #results>
          <UiCard
            v-if="noEvents"
            :image="emptyCard.img"
            :title="emptyCard.title"
          >
            <div class="event-page__empty-card-description">
              {{ emptyCard.description }}
            </div>
          </UiCard>
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
              >
                {{ eventItem.abstract }}
              </EventsItemCard>
            </div>
          </div>
        </template>
        <template #extra-info>
          <EventsFollowCalendar id="follow-our-event-calendar" />
          <EventsRequestEvent />
        </template>
      </UiFiltersResultsLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/checkbox/index.js";
import "@carbon/web-components/es/components/code-snippet/index.js";
import "@carbon/web-components/es/components/tabs/index.js";
import {
  CommunityEvent,
  WORLD_REGION_OPTIONS,
  COMMUNITY_EVENT_TYPE_OPTIONS,
} from "~/types/events";

import rawPastEvents from "~/content/events/past-community-events.json";
import rawUpcomingEvents from "~/content/events/upcoming-community-events.json";

type TabActiveSet = "calendar" | "past" | "upcoming";

definePageMeta({
  layout: "default-max",
  pageTitle: "Qiskit Events",
  routeName: "events",
});

const pastEvents = rawPastEvents as CommunityEvent[];
const upcomingEvents = rawUpcomingEvents as CommunityEvent[];

useHead({
  title: "Qiskit Events",
});

const { trackClickEvent } = useSegment();

const emptyCard = {
  title: "No events found",
  description:
    "Try using wider search criteria, or consider starting your own event.",
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

const activeSet = ref<TabActiveSet>("upcoming");
const regionFilters = ref<string[]>([]);
const tabsIsDirty = ref(false);
const typeFilters = ref<string[]>([]);

const showCalendar = computed(() => activeSet.value === "calendar");
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

function updateWholeFilter(filter: string, newFilters: string) {
  const newFiltersArray = newFilters === "" ? [] : newFilters.split(",");
  if (isRegionFilter(filter)) {
    regionFilters.value = newFiltersArray;
  } else {
    typeFilters.value = newFiltersArray;
  }
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

const selectTab = (selectedTab: string) => {
  activeSet.value = selectedTab as TabActiveSet;

  if (tabsIsDirty) {
    trackClickEvent(`${selectedTab}`, "events-list");
  }

  tabsIsDirty.value = true;
};
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.event-page {
  &__card {
    margin-bottom: carbon.$spacing-06;

    @include carbon.breakpoint-down(lg) {
      margin-bottom: carbon.$spacing-05;
    }

    @include carbon.breakpoint-up(xlg) {
      height: calc(100% - #{carbon.$spacing-06});
    }
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
        .bx--tabs--scrollable__nav-item--selected,
        .bx--tabs--scrollable__nav-item--disabled
      )
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
          .bx--tabs--scrollable__nav-item--selected,
          .bx--tabs--scrollable__nav-item--disabled
        ) {
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

  &__calendar {
    margin-bottom: carbon.$spacing-10;
    border: 1px solid qiskit.$border-color;

    @include carbon.breakpoint-down(md) {
      margin-top: carbon.$spacing-06;
    }
  }

  &:deep(.event-page__section) {
    margin-top: carbon.$spacing-10;
    margin-bottom: carbon.$spacing-10;
  }

  &:deep(.event-page__section__description) {
    margin-top: carbon.$spacing-06;
    margin-bottom: carbon.$spacing-07;
    max-width: 20rem;

    @include carbon.breakpoint-up(lg) {
      max-width: 24rem;
    }
  }

  &:deep(.event-page__tabs) {
    margin-top: carbon.$spacing-07;
    margin-bottom: carbon.$spacing-09;
    padding-top: carbon.$spacing-06;
  }

  &:deep(.event-page__instructions) {
    padding-left: carbon.$spacing-06;
  }
}
</style>
