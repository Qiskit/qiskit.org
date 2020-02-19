<template>
  <main>
    <header class="header-video">
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
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/qiskit/QiskitPage.vue'

@Component({
  layout: 'event',

  head () {
    return {
      title: 'Qiskit Experiments'
    }
  }
})

export default class extends QiskitPage {
  routeName: string = 'events'

  autoplayVideo () {
    setTimeout(() => {
      if (this.$refs.video) {
        this.$refs.video.load()
        this.$refs.video.muted = true
        this.$refs.video.play()
      }
    }, 1)
  }

  created () {
    this.autoplayVideo()
  }
}
</script>

<style lang="scss">

.header-video {
  position: relative;
  overflow: hidden;
  height: 40vh;

  &__video {
    position: absolute;
    width: 100%;
    top: -50%;
  }

  &:after {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    background: linear-gradient(0deg, var(--primary-color) 0%, #242a2e00 100%);
  }
}
</style>
