<template>
  <div class="media">
    <img
      v-if="isImg(src)"
      :src="src"
      class="media__element"
    >
    <video
      v-if="isVideo(src)"
      :src="src"
      class="media__element"
    />
    <div
      v-if="isYouTube(src) || isVimeo(src)"
      class="media__iframe-container"
    >
      <iframe
        :src="src"
        class="media__responsive-iframe"
        allow="autoplay; fullscreen"
        allowfullscreen
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class Media extends Vue {
  @Prop(String) src

  isImg (src: string): boolean {
    return [
      '.jpg',
      '.jpeg',
      '.gif',
      '.png'
    ].some(ext => src.endsWith(ext))
  }

  isVideo (src: string): boolean {
    return [
      '.mp4'
    ].some(ext => src.endsWith(ext))
  }

  isYouTube (src: string): boolean {
    return src.startsWith('https://www.youtube.com/embed/')
  }

  isVimeo (src: string): boolean {
    return src.startsWith('https://player.vimeo.com/video/')
  }
}
</script>

<style lang="scss" scoped>
.media {

  &__element {
    max-width: 100%;
  }

  &__iframe-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%;
  }

  &__responsive-iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
