<template>
  <main>
    <section id="whyJoin" class="join">
      <h3 class="section-title">
        Why Join
      </h3>
      <div class="gallery-text">
        <div class="gallery-text-column">
          <div class="gallery-text-content">
            <img src="images/icons/apply01.svg">
            <div>
              <h3 class="gallery-text-subtitle">
                Funding for your projects and work
              </h3>
              <p>Advocates can request funding or events and projects</p>
            </div>
          </div>
          <div class="gallery-text-content">
            <img src="images/icons/apply03.svg">
            <div>
              <h3 class="gallery-text-subtitle">
                Prioritized access to hardware
              </h3>
              <p>Advocates will receive prioritized access to publicly available hardware</p>
            </div>
          </div>
        </div>
        <div class="gallery-text-column">
          <div class="gallery-text-content">
            <img src="images/icons/apply02.svg">
            <div>
              <h3 class="gallery-text-subtitle">
                Network with experts and enthusiasts
              </h3>
              <p>Advocates will be added to a group of quantum experts and will receive ~~~~(??).</p>
            </div>
          </div>
          <div class="gallery-text-content">
            <img src="images/icons/apply04.svg">
            <div>
              <h3 class="gallery-text-subtitle">
                Increased visibility for your work
              </h3>
              <p>All advocates will have the opportunity to have their work supported by IBM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="apply">
      <h3 class="section-title">
        Steps to apply
      </h3>
      <ol>
        <li>Fill the form below</li>
        <li>Click the link to attend test</li>
        <li>Learn, Do the test and get certified!</li>
      </ol>
      <div class="button-container">
        <button onclick="alert('Redirect to apply form')">
          Apply Now!
        </button>
      </div>
    </section>
    <section
      v-for="(section, index) in sections"
      :key="`section-${index}`"
    >
      <h3
        v-if="!!section.title"
        :id="section.anchor"
        class="section-title"
      >
        {{ section.title }}
      </h3>
      <div class="card-container">
        <AdvocateCard
          v-for="(card, cardIndex) in section.regular"
          :key="`card-${cardIndex}`"
          :name="card.attributes.name"
          :image="`/images/advocates/${card.attributes.image}`"
          :location="card.attributes.location"
          :areas="card.attributes.areas"
          major
        />
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import AdvocateCard from '~/components/AdvocateCard.vue'

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
  layout: 'advocate',

  components: { AdvocateCard },

  async asyncData() {
    const root = 'advocates/index'
    const sections = await loadToc(root)
    for (const aSection of sections) {
      await embedDocuments(aSection, root, 'regular')
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
</style>

<style scoped>
.card-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.advocate-card {
  padding: 1em;
  box-shadow: 10px 10px 11px -10px var(--gray-shadow);
  border: 1px solid var(--gray-shadow);
  width: 25%;
  margin: 0.5em;
}

@media (max-width: 800px) {
  .card-container {
    flex-direction: column;
    align-items: center;
  }
  .advocate-card {
    width: 70%;
  }
}
</style>
