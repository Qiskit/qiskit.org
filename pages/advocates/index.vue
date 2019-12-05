<template>
  <main>
    <header>
      <GatesHeader
        id="presentation"
        main-title="Qiskit Advocates"
      >
        <p>A global program that provides support to the individuals who actively contribute to the Qiskit Community.</p>
        <template #features>
          <div id="advocates-benefits">
            <CompactFeature
              icon="Community"
            >
              <h2>Network with experts and enthusiasts</h2>
              <p>Advocates will be added to a group of quantum experts and will be a part of regular information sharing sessions.</p>
            </CompactFeature>
            <CompactFeature
              icon="Qiskit"
            >
              <h2>Access to Qiskit core members and projects</h2>
              <p>Advocates will receive special access to core members of the Qiskit team for questions and brainstorming ideas.</p>
            </CompactFeature>
            <CompactFeature
              icon="Visibility"
            >
              <h2>Increased visibility for your work</h2>
              <p>All advocates will have the opportunity to have their work supported and highlighted by IBM.</p>
            </CompactFeature>
            <CompactFeature
              icon="Events"
            >
              <h2>Invitation to events</h2>
              <p>Active Qiskit Advocates will be invited to attend global events created for the quantum computing community.</p>
            </CompactFeature>
          </div>
        </template>
      </GatesHeader>
    </header>
    <div class="inner-navigation-scope">
      <InnerNavigation
        class="inner-navigation"
        :sections="[
          { anchor: 'become-an-advocate', label: 'Become an Advocate' },
          { anchor: 'global-community' , label: 'Global Community' },
          { anchor: 'meet-the-advocates', label: 'Meet the Advocates' },
        ]"
      />
      <PageSection id="become-an-advocate">
        <h2>Become an Advocate</h2>
        <ol>
          <li>Click on the "Apply now" button below.</li>
          <li>Complete the test in the application with at least a 70%.</li>
          <li>Provide at least 3 contributions to the Qiskit community and complete application by <strong>October 9, 2019</strong>.</li>
        </ol>
        <ul class="actions">
          <li>
            Closed
          </li>
        </ul>
      </PageSection>
      <MapSection
        id="global-community"
        :points="cities()"
      >
        <h2>Global Community</h2>
      </MapSection>
      <PageSection id="meet-the-advocates">
        <h2>Meet the Advocates</h2>
        <div class="advocate-cards-container">
          <AdvocateCard
            v-for="(card, index) in profiles"
            :key="`advocate-${index}`"
            :name="card.attributes.name"
            :image="`/images/advocates/${card.attributes.image}`"
            :location="card.attributes.location"
            :areas="card.attributes.areas"
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
import MapSection from '~/components/advocates/MapSection.vue'
import AdvocateCard from '~/components/cards/AdvocateCard.vue'
import CompactFeature from '~/components/features/CompactFeature.vue'
import { segmentMixin } from '~/mixins/segment-mixin.ts'

@Component({
  mixins: [segmentMixin],
  components: {
    InnerNavigation,
    GatesHeader,
    PageSection,
    MapSection,
    AdvocateCard,
    CompactFeature
  },

  head() {
    return {
      title: 'Qiskit Advocates'
    }
  },

  async asyncData(ctx) {
    const index = await import(`~/content/advocates/index/${'master.md'}`)
    const sections = await ctx.app.deepLoadCardToc('profiles.md', {
      basePath: 'advocates/index/'
    })
    return {
      profiles: sections[0].collections.regular,
      attributes: index.attributes,
      renderFn: index.vue.render,
      staticRenderFns: index.vue.staticRenderFns
    }
  }
})
export default class extends Vue {
  title: string = 'Qiskit Advocates'
  belongsTo: string = 'advocates'
  to: string = 'advocates/index/'

  cities () {
    const cityIndex = this.$data.profiles.reduce((cityIndex, card) => {
      const { location, latitude, longitude } = card.attributes
      cityIndex[location] = { name: location, latitude, longitude }
      return cityIndex
    }, {})
    return Object.values(cityIndex)
  }
}
</script>

<style lang="scss">
main {
  background-color: var(--primary-color-darkmost);
  background-image: linear-gradient(150deg, var(--primary-color-darkmost) 15%,var(--primary-color-dark) 70%,var(--primary-color) 94%);
}

.inner-navigation {
  position: sticky;
  top: 0;
  z-index: 100;

  @include mq($until: desktop) {
    position: static;
  }
}

.actions {
  margin-top: 1rem;
  list-style: none;
  display: flex;
  flex-direction: row;
}

#advocates-benefits {
  display: flex;
  flex-direction: row;

  & > * {
    flex: 1;

    @include mq($until: desktop) {
      text-align: center;
      margin-top: 2rem;
    }
  }

  .compact-feature {
    padding-right: 1rem;

    &:last-child {
      padding-right: 0;
    }
  }

  @include mq($until: desktop) {
    display: flex;
    flex-direction: column;
  }
}

#become-an-advocate {
  color: var(--body-color-dark);
  background-color: white;

  .page-section {
    @include framed();
  }

  ol {
    margin-top: 1rem;
    list-style-position: inside
  }
}

#global-community {
  color: var(--body-color-light);

  h2 {
    @include elegant-title();
  }
}

#meet-the-advocates {
  color: var(--body-color-light);

  h2 {
    @include elegant-title();
  }

  .page-section {
    @include framed();
  }

  .advocate-cards-container {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    & > * {
      @include mq($until: desktop) {
        margin-bottom: 1rem;
      }
    }

    .advocate-card {
      width: 100%;
      border: 1px solid var(--secondary-color);
    }

    @include mq($until: desktop) {
      display: block;
    }
  }
}
</style>
