<template>
  <div class="event-page">
    <header class="header-video" playsinline>
      <video
        v-if="isDesktop"
        ref="video"
        class="header-video__video"
        loop
        preload="none"
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
    <EventCard
      v-for="event in events"
      :key="`${event.place}-${event.date}`"
      :type="event.type"
      :title="event.title"
      :image="event.image"
      :place="event.place"
      :date="event.date"
      :to="event.to"
    />
    <main class="wrapper">
      <div class="event-page__time-view">
        <div class="event-page__filters-time">
          <cv-tabs aria-label="navigation tab label">
            <cv-tab id="tab-1" label="Upcoming" />
            <cv-tab id="tab-2" label="Past" />
          </cv-tabs>
        </div>
        <div class="event-page__view">
          Different views
        </div>
      </div>
      <div class="event-page__checkboxes-results">
        <div class="event-page__filters-checkboxes">
          <fieldset class="bx--fieldset">
            <legend class="bx--label">
              Location
            </legend>
            <cv-checkbox
              v-for="location in locations"
              :key="location.value"
              v-model="locationModel"
              :name="location.value"
              :value="location.value"
              :label="location.label"
            />
          </fieldset>
          <fieldset class="bx--fieldset">
            <legend class="bx--label">
              Type
            </legend>
            <cv-checkbox
              v-for="type in types"
              :key="type.value"
              v-model="typeModel"
              :name="type.value"
              :value="type.value"
              :label="type.label"
            />
          </fieldset>
        </div>
        <div class="event-page__results">
          <EventCard
            type="Camp"
            title="Qiskit Camp 2020"
            image="/images/events/promo-vermont.jpg"
            place="Vermont, United States"
            date="March 20-25, 2020"
            to="/experiments/quantalier"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/qiskit/QiskitPage.vue'
import EventCard from '~/components/cards/EventCard.vue'
import {
  ORDERED_LOCATION_FILTERS,
  ORDERED_TYPE_FILTERS,
  Filter
} from '~/constants/filters'

type Event = {
  type: String,
  title: String,
  image: String,
  place: String,
  date: String,
  to: String
}

@Component({
  layout: 'event',

  components: {
    EventCard
  },

  head () {
    return {
      title: 'Qiskit Events'
    }
  },

  async asyncData () {
    const eventsModule = await import('~/content/events/events-previews.json')
    const events: Array<Event> = eventsModule.default || []

    return { events }
  }
})

export default class extends QiskitPage {
  locations: Array<Filter> = ORDERED_LOCATION_FILTERS
  types: Array<Filter> = ORDERED_TYPE_FILTERS
  routeName: string = 'events'
  windowWidth: Number = 0
  locationModel: Array<Filter> = []
  typeModel: Array<Filter> = []

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

<style lang="scss">

.event-page {
  height: 100%;
  color: white;

  &__title {
    position: absolute;
    bottom: 0;
    z-index: 1;
    width: 100%;

    h1 {
      font-size: 3.4rem;
    }
  }

  &__time-view,
  &__checkboxes-results {
    display: flex;
    justify-content: space-between;
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
