<template>
  <main>
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
</style>
