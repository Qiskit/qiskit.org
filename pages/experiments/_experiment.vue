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
import { segmentMixin } from '~/mixins/segment-mixin.ts'

@Component({
  layout: 'second-level',
  mixins: [segmentMixin],
  components: {
    ExperimentHeader,
    MdContent,
    PageSection
  },

  head () {
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

  async asyncData (context: Context) {
    const sourceName = context.route.params.experiment
    if (sourceName === 'undefined') {
      return
    }
    const definition = await import(`~/content/experiments/${sourceName}.md`)
    const componentRenderFns = serializableRenderFns(definition.vue)
    return {
      ...definition.attributes,
      launch: definition.attributes.launch,
      render: componentRenderFns.render,
      staticRenderFns: componentRenderFns.staticRenderFns
    }
  }
})
export default class extends Vue {
  render: String | null = null
  staticRenderFns: String | null = null
  routeName = 'projects-entry'
}

type RenderFns = { render: Function, staticRenderFns: Function[] }
type Serializable<T> = { [key in keyof T]: string }

function serializableRenderFns ({ render, staticRenderFns }: RenderFns): Serializable<RenderFns> {
  return {
    render: `(${render})`,
    staticRenderFns: `[${staticRenderFns.map(f => f + '').join(',')}]`
  }
}
</script>

<style lang="scss" scoped>
#copy {
  color: var(--body-color-dark);
  background-color: white;
  padding-top: 0;
  padding-bottom: 2rem;
}

.content {
  @include framed();
}
</style>
