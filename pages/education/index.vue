<template>
  <main>
    <header>
      <section>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_EweJlth2Sk"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <div>
            <h1>{{ attributes.title }}</h1>
            <p class="header-subtitle">
              {{ attributes.tagline }}
            </p>
          </div>
        </div>
      </section>
    </header>
    <section class="recommendations">
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
          centered-background
        />
      </div>
    </section>
    <section class="benefits">
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
          centered-background
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
  height: 425px;
  width: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #242a2e;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  color: white;
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
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

header iframe {
  margin-right: 2rem;
}

header img {
  height: 100vw;
  position: absolute;
  width: auto;
  top: 10px;
}

header h1 {
  font-size: 50px;
}

header .header-subtitle {
  font-weight: bold;
  font-size: 1rem;
  max-width: 30rem;
  margin: 1.5rem auto 0;
}

@media (max-width: 800px) {
  header {
    height: 700px;
  }

  header section {
    display: block;
    text-align: center;
  }

  header > section > div {
    display: block;
  }

  header iframe {
    margin: 0;
    width: 100%;
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
