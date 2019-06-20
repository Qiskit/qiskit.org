<template>
  <main>
    <section
      v-for="(section, index) in sections"
      :key="`section-${index}`"
    >
      <h2
        v-if="!!section.title"
        :id="section.anchor"
      >
        {{ section.title }}
      </h2>
      <Card
        v-for="(card, cardIndex) in section.major"
        :key="`major-${cardIndex}`"
        :title="card.attributes.title"
        :image="card.attributes.image"
        :to="card.attributes.to"
        :info="card.html"
        major
      />
      <Card
        v-for="(card, cardIndex) in section.regular"
        :key="`regular-${cardIndex}`"
        :title="card.attributes.title"
        :image="card.attributes.image"
        :to="card.attributes.to"
        :info="card.html"
      />
      <section class="minor">
        <Card
          v-for="(card, cardIndex) in section.minor"
          :key="`minor-${cardIndex}`"
          :title="card.attributes.title"
          :image="card.attributes.image"
          :to="card.attributes.to"
          :info="card.html"
        />
      </section>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Card from '~/components/Card.vue'

async function loadToc(source: string): Promise<any> {
  const toc = (await import(`~/src/${source}/toc.md`)).attributes
  return toc
}

async function embedDocuments(section, source: string, collection: string) {
  if (!section[collection]) { return [] }
  section[collection] = await Promise.all(section[collection].map(
    path => import(`~/src/${source}/${path}`)
  ))
}

@Component({
  components: {
    Card
  },

  async asyncData() {
    const root = 'index'
    const sections = await loadToc(root)
    for (const aSection of sections) {
      await embedDocuments(aSection, root, 'major')
      await embedDocuments(aSection, root, 'regular')
      await embedDocuments(aSection, root, 'minor')
    }
    return {
      sections
    }
  }
})
export default class extends Vue { }
</script>
<style>
main {
  position: relative;
  top: 60px;
}

header {
  height: 100vh;
}

.minor {
  display: grid;
  grid-column-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  box-sizing: border-box;
  margin-left: 10%;
  margin-right: 10%;
  max-width: 40rem;
}

.minor .card {
  margin-left: 0;
  margin-right: 0;
  box-sizing: border-box;
}

.card {
  margin-left: 10%;
  margin-bottom: 2rem;
  max-width: 40rem;
  margin-right: 10%;
}
</style>
