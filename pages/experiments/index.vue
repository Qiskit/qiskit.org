<template>
  <main>
    <header>
      <GatesHeader
        id="presentation"
        main-title="Qiskit Experiments"
      >
        <p>Browse and contribute with innovatives ways of using quantum computing and Qiskit.</p>
        <p>Do you have something to share?</p>
        <ul>
          <Cta>Submit your experiment</Cta>
        </ul>
      </GatesHeader>
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
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import InnerNavigation from '~/components/menus/InnerNavigation.vue'
import GatesHeader from '~/components/headers/GatesHeader.vue'
import PageSection from '~/components/sections/PageSection.vue'
import Cta from '~/components/ctas/Cta.vue'
import ExperimentCard from '~/components/cards/ExperimentCard.vue'
import ExperimentCarousel from '~/components/cards/ExperimentCarousel.vue'

@Component({
  components: {
    InnerNavigation,
    GatesHeader,
    PageSection,
    Cta,
    ExperimentCard,
    ExperimentCarousel
  },

  head() {
    return {
      title: 'Qiskit Experiments'
    }
  },

  async asyncData(ctx) {
    const sections = await ctx.app.deepLoadCardToc('toc.md', {
      basePath: 'experiments/index/'
    })
    return {
      featured: sections[0].collections.cards.map(({ attributes }) => attributes),
      experiments: sections[1].collections.cards.map(({ attributes }) => attributes)
    }
  }
})
export default class extends Vue { }
</script>

<style lang="scss">
@import '~/assets/scss/mixins.scss';

main {
  color: var(--body-color-light);
  background-color: var(--primary-color-darkmost);
  background-image: linear-gradient(150deg, var(--primary-color-darkmost) 15%,var(--primary-color-dark) 70%,var(--primary-color) 94%);
}

.actions {
  margin-top: 1rem;
  list-style: none;
  display: flex;
  flex-direction: row;
}

#featured-experiments {
  color: var(--body-color-dark);
  background-color: white;
  padding-bottom: 7rem;

  h2 {
    @include elegant-title();
    margin-bottom: 4rem;
  }

  .page-section {
    @include framed();
  }
}

#browse-the-experiments {
  h2 {
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

    .experiment-card {
      min-width: 300px;
      border: 1px solid var(--secondary-color);
      transform-origin: center 80%;
      transition: box-shadow 0.2s, transform 0.2s;
      box-shadow: 0px 2px 10px 0 #000f;

      &:hover {
        z-index: 1;
        transform: scale(1.05);
        box-shadow: 0px 10px 20px 5px #000f;
      }
    }
  }
}

@media (max-width: 600px) {
  #meet-the-advocates {
    .experiment-card-container {
      display: block;

      & > * {
        margin-bottom: 1rem;
      }
    }
  }
}
</style>
