<template>
  <div class="event-page">
    <header v-if="isDesktop" class="header-video" playsinline>
      <video
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
  </main>
    <main class="wrapper event-page__content">
      <div class="event-page__filters-time">
        <cv-tabs aria-label="navigation tab label">
          <cv-tab id="tab-1" label="Tab link 1" />
          <cv-tab id="tab-2" label="Tab link 2" />
        </cv-tabs>
      </div>
      <div class="event-page__view">
        Carbon tabs
      </div>
      <div class="event-page__filters-checkboxes">
        <cv-checkbox
          value="check-1"
          label="check-1"
        />
        <cv-checkbox
          value="check-2"
          label="check-2"
        />
        <cv-checkbox
          value="check-3"
          label="check-3"
        />
      </div>
      <div class="event-page__results">
        Results
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/qiskit/QiskitPage.vue'
import EventCard from '~/components/cards/EventCard.vue'

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
      title: 'Qiskit Experiments'
    }
  },

  async asyncData () {
    const eventsModule = await import('~/content/events/events-previews.json')
    const events: Array<Event> = eventsModule.default || []

    return { events }
  }
})

export default class extends QiskitPage {
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

<style lang="scss">

.event-page {
  // background-color: var(--primary-color);
  height: 100%;
  color: white;

  &__title {
    position: absolute;
    bottom: 0;
    z-index: 1;
    width: 100%;
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  &__filters-time {
    grid-area: 1 / 1 / 2 / 7;

    // .bx--tabs__nav-item--selected:not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link {
    //   color: white;
    // }

    // .bx--tabs__nav-link {
    //   color: var(--body-color-light);
    // }

    // .bx--tabs__nav-item--selected:not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link {
    //   border-color: var(--secondary-color);
    // }
  }

  &__view {
    grid-area: 1 / 7 / 2 / 8;
  }

  &__filters-checkboxes {
    grid-area: 2 / 1 / 3 / 3;
  }

  &__results {
    grid-area: 2 / 3 / 3 / 8;
  }
}

.header-video {
  position: relative;
  overflow: hidden;
  height: 35vh;

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
    background: linear-gradient(0deg, var(--primary-color) 0%, #242a2e00 100%);
  }
}

.wrapper {
  max-width: 1056px;
  margin: 0 auto;
  width: 100%;
}
</style>
