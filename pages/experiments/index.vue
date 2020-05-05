<template>
  <main class="community-page experiments-page">
    <header>
      <CommunityHeader
        id="presentation"
        main-title="Qiskit Experiments"
      >
        <p>Browse and contribute with innovatives ways of using quantum computing and Qiskit.</p>
      </CommunityHeader>
    </header>
    <div class="inner-navigation-scope">
      <PageSection id="featured-experiments" framed>
        <h2 class="community-page__header community-page__header_elegant">
          Now featuring
        </h2>
        <ExperimentCarousel
          :experiments="featured"
        />
      </PageSection>
      <PageSection id="browse-the-experiments" framed>
        <h2 class="community-page__header community-page__header">
          Browse the experiments
        </h2>
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
import QiskitPage from '~/components/logic/QiskitPage.vue'
import CommunityHeader from '~/components/ui/CommunityHeader.vue'
import PageSection from '~/components/ui/PageSection.vue'
import ExperimentCard from '~/components/experiments/ExperimentCard.vue'
import ExperimentCarousel from '~/components/experiments/ExperimentCarousel.vue'

@Component({
  components: {
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
@import '~/assets/scss/community-page.scss';

main {
  background-color: $ui-background;
}

.actions {
  margin-top: $layout-01;
  list-style: none;
  display: flex;
  flex-direction: row;
}

#featured-experiments {
  color: $inverse-01;
  background-color: $inverse-02;
  padding-bottom: $layout-06;

  h2 {
    margin-bottom: $layout-05;
  }

  .page-section {
    @include framed();
  }
}

#browse-the-experiments {
  color: $text-01;

  .page-section {
    @include framed();
  }

  .experiment-card-container {
    width: 100%;
    margin-top: $layout-04;
    display: grid;
    grid-gap: $spacing-05;
    grid-template-columns: repeat(auto-fill, minmax(19rem, 1fr));

    & > * {
      @include mq($until: medium) {
        margin-bottom: $layout-01;
      }
    }

    .experiment-card {
      min-width: 19rem;
      transform-origin: center 80%;
      transition: box-shadow 0.2s, transform 0.2s;
      box-shadow: 0px 0.1rem 0.75 0 #000f;

      &:hover {
        z-index: 1;
        transform: scale(1.05);
        box-shadow: 0px 0.75rem 1.5rem 0.25rem #000f;
      }
    }

    @include mq($until: medium) {
      display: block;
    }
  }
}
</style>
