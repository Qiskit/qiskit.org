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
        v-for="(card, cardIndex) in section.cards"
        :key="`card-${cardIndex}`"
        :title="card.attributes.title"
        :image="`/images/events/${card.attributes.image}`"
        :to="card.attributes.to"
        :info="card.html"
        major
      />
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

async function embedCards(section, source: string) {
  const cards = await Promise.all(section.cards.map(
    path => import(`~/src/${source}/${path}`)
  ))
  section.cards = cards
}

@Component({
  layout: 'secondary',

  components: {
    Card
  },

  async asyncData() {
    const root = 'events/index'
    const sections = await loadToc(root)
    for (const aSection of sections) {
      await embedCards(aSection, root)
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

.card {
  margin-left: 10%;
  margin-bottom: 2rem;
  max-width: 40rem;
  margin-right: 10%;
}
</style>
