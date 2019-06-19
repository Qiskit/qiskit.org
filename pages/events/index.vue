<template>
  <main>
    <h2>Qiskit Camp</h2>
    <Card
      title="Qiskit Camp Europe"
      image="/images/events/promo-europe.jpg"
      href="/events/europe"
      info="Cosas Nazis"
    />
    <Card small />
    <Card small />
    <h2>Archives</h2>
    <Card small />
    <Card small />
    <Card small />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Card from '~/components/Card.vue'

async function loadSections(source: string): Promise<string[][]> {
  const sectionSources: string[] =
    (await import(`~/src/${source}/toc.md`)).attributes

  return Promise.all(
    sectionSources.map(
      async (sectionName) => {
        const definition = await import(`~/src/${source}/${sectionName}`)
        return [
          sectionName,
          definition.attributes.figure,
          definition.html
        ]
      }
    )
  )
}

@Component({
  components: {
    Card
  },

  async asyncData() {
    return {
      sections: await loadSections('index')
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
