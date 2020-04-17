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
      <div class="event-page__event-index">
        <div class="event-page__filters-others">
          <fieldset class="bx--fieldset">
            <legend class="bx--label">
              Region
            </legend>
            <div class="event-page__chrome-columns-fix">
              <client-only>
                <cv-checkbox
                  v-for="region in regions"
                  :key="region"
                  :value="region"
                  :label="region"
                  :checked="isFilterChecked('regionFilters', region)"
                  :aria-checked="`${isFilterChecked('regionFilters', region)}`"
                  @change="updateFilter('regionFilters', region, $event)"
                />
              </client-only>
            </div>
          </fieldset>
          <fieldset class="bx--fieldset">
            <legend class="bx--label">
              Type
            </legend>
            <div class="event-page__chrome-columns-fix">
              <client-only>
                <cv-checkbox
                  v-for="type in types"
                  :key="type"
                  :value="type"
                  :label="type"
                  :checked="isFilterChecked('typeFilters', type)"
                  :aria-checked="`${isFilterChecked('typeFilters', type)}`"
                  @change="updateFilter('typeFilters', type, $event)"
                />
              </client-only>
            </div>
          </fieldset>
        </div>
        <div v-if="hasEvents" class="event-page__results">
          <EventCard
            v-for="event in filteredEvents"
            :key="`${event.place}-${event.date}`"
            :type="formatType(event.types)"
            :title="event.title"
            :image="event.image"
            :location="event.location"
            :date="event.date"
            :to="event.to"
          />
        </div>
        <div v-else class="event-page__results">
          <p class="event-page__no-events-msg">
            Nothing here yet - let’s make it happen!
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
import {
  CommunityEvent,
  WORLD_REGION_OPTIONS,
  COMMUNITY_EVENT_TYPE_OPTIONS
} from '~/store/modules/events.ts'

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

export default class extends QiskitPage {
  regions = WORLD_REGION_OPTIONS
  types = COMMUNITY_EVENT_TYPE_OPTIONS
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

  formatType (types: CommunityEvent[]): string {
    return types.join(', ')
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

  &__event-index {
    display: flex;
    justify-content: space-between;

    @include mq($until: medium) {
      flex-direction: column;
    }
  }

  &__filters-time {
    margin-top: 2rem;
  }

  /*
  It seems to be a problem with Chrome when trying to set the number of columns
  to 2 inside a fieldset:
  https://stackoverflow.com/questions/55819846/column-count-does-not-work-within-a-fieldst-in-chrome
  https://stackoverflow.com/questions/3322891/why-is-chrome-cutting-off-text-in-my-css3-multi-column-layout
  */
  &__chrome-columns-fix {
    @include mq($until: medium) {
      column-count: 2;
    }

    & > * {
      @include mq($until: medium) {
        display: block;
      }
    }
  }

  &__results {
    width: 75%;

    @include mq($until: medium) {
      width: 100%;
    }
  }

  &__no-events-msg {
    @include type-style('body-short-02');
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

  & > * {
    margin: 1rem;
  }
}
</style>
