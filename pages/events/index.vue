<template>
  <div class="event-page">
    <header class="header-video">
      <video
        v-if="isDesktop"
        ref="video"
        class="header-video__video"
        loop
        preload="none"
        playsinline
      >
        <source src="@/assets/videos/qiskit-camp-africa-2019.mp4" type="video/mp4">
        <source src="@/assets/videos/qiskit-camp-africa-2019.mp4" type="video/ogg">
        Your browser does not support HTML5 video.
      </video>
      <div class="event-page__title">
        <h1 class="wrapper">
          Qiskit Events
        </h1>
      </div>
    </header>
    <div class="wrapper">
      <div class="event-page__filters-time">
        <client-only>
          <cv-tabs aria-label="navigation tab label" @tab-selected="selectTab">
            <cv-tab id="tab-1" label="Upcoming" />
            <cv-tab id="tab-2" label="Past" />
          </cv-tabs>
        </client-only>
      </div>
      <div class="event-page__checkboxes-results">
        <div class="event-page__filters-checkboxes">
          <fieldset class="bx--fieldset">
            <legend class="bx--label">
              Location
            </legend>
            <client-only>
              <cv-checkbox
                v-for="location in locations"
                :key="location"
                :value="location"
                :label="location"
                :checked="isFilterChecked('locationFilters', location)"
                :aria-checked="`${isFilterChecked('locationFilters', location)}`"
                @change="updateFilter('locationFilters', location, $event)"
              />
            </client-only>
          </fieldset>
          <fieldset class="bx--fieldset">
            <legend class="bx--label">
              Type
            </legend>
            <client-only>
              <cv-checkbox
                v-for="type in types"
                :key="type.value"
                :value="type.value"
                :label="type.label"
                :checked="isFilterChecked('typeFilters', type.label)"
                :aria-checked="`${isFilterChecked('typeFilters', type.label)}`"
                @change="updateFilter('typeFilters', type.label, $event)"
              />
            </client-only>
          </fieldset>
        </div>
        <div v-if="hasEvents" class="event-page__results">
          <EventCard
            v-for="event in filteredEvents"
            :key="`${event.place}-${event.date}`"
            :type="event.type"
            :title="event.title"
            :image="event.image"
            :place="event.place"
            :date="event.date"
            :to="event.to"
          />
        </div>
        <div v-else class="event-page__results">
          <p class="event-page__no-events-msg">
            No events: Plan an event in your area today!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex'
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/qiskit/QiskitPage.vue'
import EventCard from '~/components/cards/EventCard.vue'
import { ORDERED_TYPE_FILTERS, Filter } from '~/constants/filters'
import { CommunityEvent, LOCATION_CATEGORIES } from '~/store/modules/events.ts'

@Component({
  layout: 'carbon',

  components: {
    EventCard
  },

  head () {
    return {
      title: 'Qiskit Events'
    }
  },

  computed: {
    ...mapGetters([
      'filteredEvents',
      'typeFilters',
      'locationFilters'
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

export default class extends QiskitPage {
  locations = LOCATION_CATEGORIES
  types: Array<Filter> = ORDERED_TYPE_FILTERS
  routeName: string = 'events'
  windowWidth: Number = 0

  get hasEvents (): boolean {
    return (this as any).filteredEvents.length !== 0
  }

  autoplayVideo () {
    if (!this.$refs.video) {
      return
    }

    const video = this.$refs.video as HTMLMediaElement

    video.load()
    video.muted = true
    video.play()
  }

  get isDesktop () {
    return this.windowWidth > 600
  }

  async mounted () {
    this.windowWidth = window.innerWidth

    await this.$nextTick()
    this.autoplayVideo()
  }

  isFilterChecked (filter: string, filterValue: string): Array<CommunityEvent> {
    const typeFilters = (this as any).typeFilters
    const locationFilters = (this as any).locationFilters

    return filter === 'locationFilters'
      ? locationFilters.includes(filterValue)
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

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.event-page {
  color: $text-01;

  &__title {
    position: absolute;
    bottom: .5rem;
    z-index: 1;
    width: 100%;

    h1 {
      @include type-style('productive-heading-07');
    }
  }

  &__checkboxes-results {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }

  &__filters-time {
    margin-top: 2rem;
  }

  &__results {
    width: 100%;

    @include mq($from: medium) {
      width: 75%;
    }
  }

  &__no-events-msg {
    @include type-style('expressive-paragraph-01');
  }
}

.header-video {
  position: relative;
  overflow: hidden;

  @include mq($from: medium) {
    height: 35vh;
  }

  &__video {
    position: absolute;
    width: 100%;

    @include mq($from: x-large) {
      top: -60%;
    }
  }

  &:after {
    content: '';
    height: 100%;
    width: 100%;
    bottom: -.5rem;
    position: absolute;
    background: linear-gradient(0deg, #262626 0%, #26262600 100%);
  }
}

.wrapper {
  max-width: 1056px;
  margin: 0 auto;
  width: 100%;
}
</style>
