<template>
  <main>
    <header>
      <section>
        <div>
          <h1>{{ attributes.title }}</h1>
          <p class="header-subtitle">
            {{ attributes.tagline }}
          </p>
        </div>
      </section>
    </header>
    <section class="benefits">
      <h2
        v-if="!!sections[0].title"
        :id="sections[0].anchor"
        class="section-title"
      >
        {{ sections[0].title }}
      </h2>
      <div class="card-container">
        <Card
          v-for="(card, cardIndex) in sections[0].collections.cards"
          :key="`card-${cardIndex}`"
          :title="card.attributes.title"
          :image="card.attributes.image"
          :to="card.attributes.to"
          :info="card.html"
          major
        />
      </div>
    </section>
    <section class="recommendations">
      <h2
        v-if="!!sections[1].title"
        :id="sections[1].anchor"
        class="section-title"
      >
        {{ sections[1].title }}
      </h2>
      <div class="card-container">
        <Card
          v-for="(card, cardIndex) in sections[1].collections.cards"
          :key="`card-${cardIndex}`"
          :title="card.attributes.title"
          :image="card.attributes.image"
          :to="card.attributes.to"
          :info="card.html"
          major
        />
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Card from '~/components/Card.vue'
import Button from '~/components/Button.vue'
import MdContent from '~/components/MdContent.vue'

@Component({
  layout: 'secondary',

  components: { Card, Button, MdContent },

  async asyncData(ctx) {
    const index = await import(`~/content/education/index/${'master.md'}`)
    const sections = await ctx.app.deepLoadCardToc('toc.md', {
      basePath: 'education/index/'
    })

    return {
      attributes: index.attributes,
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
  height: calc(100vh - 63px);
  width: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(/images/advocates/advocates-decoration.svg);
  background-color: white;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

header > section {
  position: relative;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

header > section > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

header img {
  height: 100vw;
  position: absolute;
  width: auto;
  top: 10px;
}

header h1 {
  font-size: 50px;
  margin-left: 1.5rem;
  text-align: center;
}

header .header-subtitle {
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  max-width: 30rem;
  margin: 0 auto;
}

@media (max-width: 800px) {

  header section {
    display: block;
    text-align: center;
  }

  header h1 {
    margin: 0;
    margin-top: 2rem;
  }

}

@media (max-height: 390px) {
  header h1 {
    margin: 0;
    margin-top: 0.5rem;
  }

  header section {
    padding: 1rem;
  }
}

.card-container {
  margin: 0 10%;
  max-width: 60rem;
}

.benefits .card-container {
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
}

.recommendations .card-container {
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: 1fr 1fr;
}

@media (max-width: 800px) {
  .benefits .card-container,
  .recommendations .card-container {
    display: block;
  }
}
</style>
