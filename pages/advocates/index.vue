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
    <MdContent
      :render-fn="renderFn"
      :static-render-fns="staticRenderFns"
    />
    <section
      v-for="(section, index) in sections"
      :key="`section-${index}`"
      class="advocates"
    >
      <h2
        v-if="!!section.title"
        :id="section.anchor"
        class="section-title"
      >
        {{ section.title }}
      </h2>
      <div class="card-container">
        <AdvocateProfile
          v-for="(card, cardIndex) in section.collections.regular"
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
import AdvocateProfile from '~/components/AdvocateProfile.vue'
import Button from '~/components/Button.vue'
import MdContent from '~/components/MdContent.vue'

@Component({
  layout: 'secondary',

  components: { AdvocateProfile, Button, MdContent },

  async asyncData(ctx) {
    const index = await import(`~/content/advocates/index/${'master.md'}`)
    const sections = await ctx.app.deepLoadCardToc('profiles.md', {
      basePath: 'advocates/index/'
    })

    return {
      sections,
      attributes: index.attributes,
      renderFn: index.vue.render,
      staticRenderFns: index.vue.staticRenderFns
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

section > h2 {
  color: black;
  font-size: 1.5em;
  margin-bottom: 1.5em;
  margin-top: 1em;
}

section > h2::before {
  content: none;
}

.join > h2,
.apply > h2 {
  color: white;
}

.join,
.apply,
.advocates {
  padding: 0 5%;
}

.join {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  background-color: var(--secondary-color);
  color: #FFFFFF;
}

.join > ul {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
  margin: 1rem 3rem 1rem 0;
}

.join > ul > li {
  margin: 1em 1em 2em;
}

.join > ul > li > p:first-of-type {
  float: left;
}

.join > ul > li > p > img {
  padding-right: 1rem;
  height: 3rem;
  width: 3rem;
  border-radius: 0;
}

.card-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.advocate-card {
  padding: 1em;
  box-shadow: 10px 10px 11px -10px var(--shadow-color);
  border: 1px solid var(--shadow-color);
  width: 25%;
  margin: 0.5em;
}

.apply {
  background-color: var(--gray-color);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  color: #FFFFFF;
  padding-bottom: 3rem;
}

.apply > ol {
  list-style: none;
  counter-reset: my-awesome-counter;
  margin-bottom: 2rem;
}

.apply > ol > li {
  margin: 0.5em;
  position: relative;
  counter-increment: my-awesome-counter;
  --size: 1.5rem;
}

.apply > ol > li::before {
  content: counter(my-awesome-counter);
  color: var(--gray-color);
  font-size: 1rem;
  font-weight: bold;
  position: relative;
  margin-right: 0.5rem;
  display: inline-block;
  line-height: var(--size);
  width: var(--size);
  height: var(--size);
  background: white;
  border-radius: 50%;
  text-align: center;
}

@media (max-width: 800px) {
  .join > ul {
    display: block;
  }

  .card-container {
    flex-direction: column;
    align-items: center;
  }

  .advocate-card {
    width: 70%;
  }
}
</style>
