<template>
  <main>
    <header>
      <ExperimentHeader
        :name="title"
        :authors="author"
        :launch="launch"
        :source="source"
        :media="media"
      />
    </header>
    <PageSection id="copy">
      <MdContent
        :render-fn="render"
        :static-render-fns="staticRenderFns"
      />
    </PageSection>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { Context } from '@nuxt/types'
import ExperimentHeader from '~/components/headers/ExperimentHeader.vue'
import PageSection from '~/components/sections/PageSection.vue'
import MdContent from '~/components/MdContent.vue'

@Component({
  layout: 'second-level',

  components: {
    ExperimentHeader,
    MdContent,
    PageSection
  },

  head() {
    const self = this as any
    const image = self.media[0].url
    return {
      title: self.title,
      meta: [
        { hid: 'description', name: 'description', content: self.description },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@qiskit' },
        { hid: 'twitter:title', name: 'twitter:title', content: self.title },
        { hid: 'twitter:description', name: 'twitter:description', content: self.description },
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
    return {
      ...definition.attributes,
      launch: definition.attributes.launch,
      ...definition.vue
    }
  }
})
export default class extends Vue { }
</script>

<style lang="scss">
@import '~/assets/scss/mixins.scss';

#copy {
  background-color: white;
  padding-top: 0;
  padding-bottom: 2rem;

  .page-section {
    @include framed();
  }

  ul, ol {
    list-style-position: inside;
    padding-left: 2rem;
    margin-top: 1rem;
  }

  ul {
    list-style-type: square;
  }

  ol li,
  ul li {
    margin: 1rem 0;
  }

  h2 {
    margin-top: 3rem;
  }

  h3 {
    margin-top: 2rem;
  }

  p {
    text-align: justify;
  }
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
}
</style>
