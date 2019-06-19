<template>
  <main>
    <section
      v-for="(section, index) in sections"
      :key="`${section}-${index}`"
    >
      <h2>{{ section.title }}</h2>
      <Card
        title="Qiskit Camp Europe"
        image="/images/events/promo-europe.jpg"
        to="/events/europe"
      />
    </section>

  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Card from '~/components/Card.vue'

async function loadToc(source: string): Promise<any> {
  const root = `src/${source}`
  const toc = (await import(`~/${root}/toc.md`)).attributes
  toc.root = root
  return toc
}

@Component({
  components: {
    Card
  },

  async asyncData() {
    return {
      sections: await loadToc('events/index')
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
