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
          <cv-tabs aria-label="navigation tab label">
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
                :key="location.value"
                :value="location.value"
                :label="location.label"
                :checked="isFilterChecked('locationFilters', location.label)"
                :aria-checked="`${isFilterChecked('locationFilters', location.label)}`"
                @change="updateFilter('locationFilters', location.label, $event)"
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
        <div class="event-page__results">
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
  ORDERED_LOCATION_FILTERS,
  ORDERED_TYPE_FILTERS,
  Filter
} from '~/constants/filters'

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
      'getTypeFilters',
      'getLocationFilters'
    ])
  },

  methods: {
    ...mapActions({
      fetchEvents: 'fetchEvents'
    }),
    isFilterChecked (filter, filterValue) {
      const typeFilters = this.$store.getters.getTypeFilters
      const locationFilters = this.$store.getters.getLocationFilters

      return filter === 'locationFilters'
        ? locationFilters.includes(filterValue)
        : typeFilters.includes(filterValue)
    },
    updateFilter (filter, filterValue, selectFilter) {
      const payload = { filter, filterValue }

      selectFilter
        ? this.$store.commit('addFilter', payload)
        : this.$store.commit('removeFilter', payload)
    }
  },

  async fetch ({ store }) {
    const events = await store.dispatch('fetchEvents')

    store.commit('setEvents', events)
  }
})

export default class extends QiskitPage {
  locations: Array<Filter> = ORDERED_LOCATION_FILTERS
  types: Array<Filter> = ORDERED_TYPE_FILTERS
  routeName: string = 'events'
  windowWidth: Number = 0

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
}
</script>

<style lang="scss" scoped>

.event-page {
  color: white;

  &__title {
    position: absolute;
    bottom: .5rem;
    z-index: 1;
    width: 100%;

    h1 {
      font-size: 3.4rem;
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

    @include mq($from: desktop) {
      width: 75%;
    }
  }
}

.header-video {
  position: relative;
  overflow: hidden;

  @include mq($from: desktop) {
    height: 35vh;
  }

  &__video {
    position: absolute;
    width: 100%;

    @include mq($from: super-wide-desktop) {
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
