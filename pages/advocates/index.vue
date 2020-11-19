<template>
  <main class="community-page advocates-page">
    <header>
      <CommunityHeader
        id="presentation"
        main-title="Qiskit Advocates"
      >
        <p>A global program that provides support to the individuals who actively contribute to the Qiskit Community.</p>
        <template #features>
          <div id="advocates-benefits">
            <CompactFeature
              v-for="benefit in advocateBenefits"
              :key="`benefit-${benefit.icon}`"
              v-bind="benefit"
            />
          </div>
        </template>
      </CommunityHeader>
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
      <PageSection id="become-an-advocate" framed>
        <h2 class="community-page__header">
          Become an Advocate
        </h2>
        <ol>
          <li>Click on the "Apply now" button below.</li>
          <li>Complete the test in the application with at least a 70%.</li>
          <li>Provide at least 3 contributions to the Qiskit community and complete application by <strong>August 15, 2020</strong>.</li>
        </ol>
        <ul class="actions">
          Closed
        </ul>
      </PageSection>
      <MapSection
        id="global-community"
        :points="cities()"
      >
        <h2 class="community-page__header community-page__header_elegant">
          Global Community
        </h2>
      </MapSection>
      <PageSection id="meet-the-advocates" framed>
        <h2 class="community-page__header community-page__header_elegant">
          Meet the Advocates
        </h2>
        <div class="advocate-cards-container">
          <AdvocateCard
            v-for="profile in profiles"
            :key="`advocate-${profile.attributes.name}`"
            v-bind="profile.attributes"
          />
        </div>
      </PageSection>
    </div>
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import CompactFeature from '~/components/ui/CompactFeature.vue'

type Benefit = Pick<CompactFeature, 'icon'|'title'|'description'>

@Component({
  head () {
    return {
      title: 'Qiskit Advocates'
    }
  },

  async asyncData (ctx) {
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
export default class AdvocatesPage extends QiskitPage {
  routeName: string = 'advocates'
  advocateBenefits: Array<Benefit> = [
    {
      icon: 'Community',
      title: 'Network with experts and enthusiasts',
      description: 'Advocates will be added to a group of quantum experts and will be a part of regular information sharing sessions.'
    },
    {
      icon: 'Qiskit',
      title: 'Access to Qiskit core members and projects',
      description: 'Advocates will receive special access to core members of the Qiskit team for questions and brainstorming ideas.'
    },
    {
      icon: 'Visibility',
      title: 'Increased visibility for your work',
      description: 'All advocates will have the opportunity to have their work supported and highlighted by IBM.'
    },
    {
      icon: 'Events',
      title: 'Invitation to events',
      description: 'Active Qiskit Advocates will be invited to attend global events created for the quantum computing community.'
    }
  ]

  cities () {
    const cityIndex = this.$data.profiles.reduce((cityIndex: any, card: any) => {
      const { location, latitude, longitude } = card.attributes
      cityIndex[location] = { name: location, latitude, longitude }
      return cityIndex
    }, {})
    return Object.values(cityIndex)
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/community-page.scss';
@import '~carbon-components/scss/globals/scss/typography';

main {
  background-color: $ui-background;
}

.inner-navigation {
  position: sticky;
  top: 0;
  z-index: 100;

  @include mq($until: medium) {
    position: static;
  }
}

.actions {
  margin-top: $layout-01;
  list-style: none;
  display: flex;
  flex-direction: row;
}

#advocates-benefits {
  display: flex;
  flex-direction: row;

  & > * {
    flex: 1;

    @include mq($until: medium) {
      text-align: center;
      margin-top: $layout-03;
    }
  }

  .compact-feature {
    padding-right: $layout-01;

    &:last-child {
      padding-right: 0;
    }
  }

  @include mq($until: medium) {
    display: flex;
    flex-direction: column;
  }
}

#become-an-advocate {
  color: $inverse-01;
  background-color: $inverse-02;

  ol {
    margin-top: $layout-01;
    list-style-position: inside;
    list-style-type: decimal;
  }

  li {
    @include body-long-04();
  }
}

#global-community {
  color: $text-01;
}

#meet-the-advocates {
  color: $text-01;

  .advocate-cards-container {
    margin-top: $layout-04;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: $spacing-05;

    & > * {
      @include mq($until: medium) {
        margin-bottom: $layout-01;
      }
    }

    .advocate-card {
      width: 100%;
    }

    @include mq($until: medium) {
      display: block;
    }
  }
}
</style>
