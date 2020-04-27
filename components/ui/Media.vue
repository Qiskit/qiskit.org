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
    <iframe
      v-if="isYouTube(src)"
      :src="src"
      class="media__element"
      width="560"
      height="315"
      frameborder="0"
      allow="autoplay; accelerometer; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
    <iframe
      v-if="isVimeo(src)"
      :src="src"
      class="media__element"
      width="640"
      height="360"
      frameborder="0"
      allow="autoplay; fullscreen"
      allowfullscreen
    />
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
}
</style>
