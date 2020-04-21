<template>
  <main>
    <header>
      <CommunityHeader
        id="presentation"
        main-title="Qiskit Experiments"
      >
        <p>Browse and contribute with innovatives ways of using quantum computing and Qiskit.</p>
      </CommunityHeader>
    </header>
    <div class="inner-navigation-scope">
      <PageSection id="featured-experiments">
        <h2>Now featuring</h2>
        <ExperimentCarousel
          :experiments="featured"
        />
      </PageSection>
      <PageSection id="browse-the-experiments">
        <h2>Browse the experiments</h2>
        <div class="experiment-card-container">
          <ExperimentCard
            v-for="(experiment, index) in experiments"
            :key="`experiment-${index}`"
            :title="experiment.title"
            :image="experiment.image"
            :to="experiment.to"
            :author="experiment.author"
            :summary="experiment.description"
          />
        </div>
      </PageSection>
    </div>
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/qiskit/QiskitPage.vue'
import InnerNavigation from '~/components/menus/InnerNavigation.vue'
import CommunityHeader from '~/components/headers/CommunityHeader.vue'
import PageSection from '~/components/sections/PageSection.vue'
import ExperimentCard from '~/components/experiments/ExperimentCard.vue'
import ExperimentCarousel from '~/components/experiments/ExperimentCarousel.vue'

@Component({
  components: {
    InnerNavigation,
    CommunityHeader,
    PageSection,
    ExperimentCard,
    ExperimentCarousel
  },

  head () {
    return {
      title: 'Qiskit Experiments'
    }
  },

  async asyncData (ctx) {
    const sections = await ctx.app.deepLoadCardToc('toc.md', {
      basePath: 'experiments/index/'
    })
    return {
      featured: sections[0].collections.cards.map(({ attributes }) => attributes),
      experiments: sections[1].collections.cards.map(({ attributes }) => attributes)
    }
  }
})
export default class extends QiskitPage {
  routeName: string = 'projects'
}
</script>

<style lang="scss">
@import '~carbon-components/scss/globals/scss/typography';

main {
  background-color: $ui-background;
}

.actions {
  margin-top: 1rem;
  list-style: none;
  display: flex;
  flex-direction: row;
}

#featured-experiments {
  color: $inverse-01;
  background-color: $inverse-02;
  padding-bottom: 7rem;

  h2 {
    @include type-style('productive-heading-06');
    @include elegant-title();
    margin-bottom: 4rem;
  }

  .page-section {
    @include framed();
  }
}

#browse-the-experiments {
  color: $text-01;

  h2 {
    @include type-style('productive-heading-06');
    @include elegant-title();
  }

  .page-section {
    @include framed();
  }

  .experiment-card-container {
    width: 100%;
    margin-top: 3rem;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

    & > * {
      @include mq($until: medium) {
        margin-bottom: 1rem;
      }
    }

    .experiment-card {
      min-width: 300px;
      transform-origin: center 80%;
      transition: box-shadow 0.2s, transform 0.2s;
      box-shadow: 0px 2px 10px 0 #000f;

      &:hover {
        z-index: 1;
        transform: scale(1.05);
        box-shadow: 0px 10px 20px 5px #000f;
      }
    }

    @include mq($until: medium) {
      display: block;
    }
  }
}
</style>
