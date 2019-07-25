<template>
  <main>
    <header>
      <h1>{{ attributes.title }}</h1>
      <p class="author">
        by {{ attributes.author }}
      </p>
      <Button
        v-if="attributes.launch"
        :href="attributes.launch"
        call-to-action
      >
        Launch
      </Button>
      <Button
        v-if="attributes.source"
        :href="attributes.source"
      >
        Explore the sources
      </Button>
      <div
        class="holder featured"
      >
        <video
          v-if="attributes.media[0] && attributes.media[0].isVideo"
          :src="attributes.media[0].url"
          muted
          autoplay
          controls
          loop
        />
        <img
          v-if="attributes.media[0] && !attributes.media[0].isVideo"
          :src="attributes.media[0].url"
        >
      </div>
      <div class="holder secondary">
        <video
          v-if="attributes.media[1] && attributes.media[1].isVideo"
          :src="attributes.media[1].url"
          muted
          autoplay
          controls
          loop
        />
        <img
          v-if="attributes.media[1] && !attributes.media[1].isVideo"
          :src="attributes.media[1].url"
        >
        <video
          v-if="attributes.media[2] && attributes.media[2].isVideo"
          :src="attributes.media[2].url"
          muted
          autoplay
          controls
          loop
        />
        <img
          v-if="attributes.media[2] && !attributes.media[2].isVideo"
          :src="attributes.media[2].url"
        >
      </div>
    </header>
    <MdContent
      :render-fn="vue.render"
      :static-render-fns="vue.staticRenderFns"
    />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { Context } from '@nuxt/vue-app'
import Button from '~/components/Button.vue'
import MdContent from '~/components/MdContent.vue'

@Component({
  layout: 'secondary',

  components: { Button, MdContent },

  head() {
    const self = this as any
    const title = self.attributes.title
    const description = self.attributes.description
    const image = self.attributes.media[0].url
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@qiskit' },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', content: description },
        { hid: 'twitter:image', name: 'twitter:image', content: image }
      ]
    }
  },

  async asyncData(context: Context) {
    const sourceName = context.route.params.experiment
    if (sourceName === 'undefined') {
      return
    }
    const definition = await import(`~/content/experiments/${sourceName}.md`)
    definition.attributes.media =
      (definition.attributes.media || []).slice(0, 3) // limit to 3 items
    definition.attributes.media.forEach((url, index) => {
      definition.attributes.media[index] = { url, isVideo: isVideo(url) }
    })
    return definition

    function isVideo(url: string): boolean {
      return ['.mp4'].some(ext => url.endsWith(ext))
    }
  }
})
export default class extends Vue { }
</script>

<style>
@import url('~/static/css/theme.css');

main {
  position: relative;
  top: 63px;
  flex: 1;
}

header {
  margin: 2rem 10% 3rem 10%;
  max-width: 60rem;
}

.author {
  color: grey;
  margin: 1rem 0 1rem 0;
}

.holder {
  width: 100%;
}

.featured {
  margin-top: 2rem;
}

.featured > * {
  width: 100%;
}

.secondary {
  display: flex;
}

.secondary > * {
  max-width: 50%;
}

.content {
  margin-top: 3rem;
}

.content > :not(h2):not(iframe):not(table) {
  margin-left: 10%;
  margin-right: 1.5rem;
  line-height: 1.4rem;
  margin-bottom: 1rem;
  max-width: 40rem;
  text-align: justify;
}

.content ul {
  list-style-type: square;
  padding-left: 2rem;
  margin-bottom: 2rem;
}

.content ul li {
  margin: 0.5rem 0;
}

.content .clarification {
  font-size: 0.7rem;
  line-height: 1rem;
}

.content h3 {
  font-weight: bold;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}

@media (max-width: 800px) {
  .secondary {
    display: block;
  }

  .secondary > * {
    max-width: 100%;
  }

  .button {
    margin-bottom: 0.5rem;
  }

  .content > :not(h2):not(iframe):not(table) {
    margin-right: 10%;
  }
}
</style>
