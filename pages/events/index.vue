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
        v-for="(card, cardIndex) in section.collections.cards"
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

@Component({
  layout: 'secondary',

  components: { Card },

  async asyncData(ctx) {
    return {
      sections: await ctx.app.deepLoadCardToc('toc.md', {
        basePath: 'events/index/'
      })
    }
  }
})
export default class extends Vue { }
</script>
<style>
main {
  position: relative;
  top: 63px;
}

.card {
  margin-left: 10%;
  margin-bottom: 2rem;
  max-width: 40rem;
  margin-right: 10%;
}
</style>
