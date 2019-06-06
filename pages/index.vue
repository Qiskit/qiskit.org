<template>
  <main>
    <section
      v-for="sec in sections"
      :key="sec[0]"
      class="stack-section"
    >
      <div>
        <figure>
          <img alt="" :src="sec[1]">
        </figure>
        <div class="content" v-html="sec[2]" />
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

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
  top: 90px;
}

.stack-section > div {
  display: flex;
  flex-direction: row;
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.stack-section > div > figure {
  flex: 2;
  margin-right: 3rem;
}

.stack-section > div > figure img {
  max-width: 100%;
}

.stack-section > div > .content {
  flex: 3;
  line-height: 1.9em;
  width: 100%;
}

.content h2 {
  margin: 0 0 3rem;
}

.content a {
  color: var(--secondary-color);
}

.stack-section:nth-child(2n) {
  background-color: var(--secondary-color);
}

.stack-section:nth-child(2n) > div {
  color: white;
  flex-direction: row-reverse;
}

.stack-section:nth-child(2n) > div > figure {
  margin-left: 3rem;
  margin-right: 0;
}

.stack-section:nth-child(2n) > div > .content a {
  color: white;
}
</style>
