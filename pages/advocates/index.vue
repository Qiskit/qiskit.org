<template>
  <main class="community-page advocates-page">
    <TheAdvocatesHeader />
    <div class="inner-navigation-scope">
      <InnerNavigation
        class="inner-navigation"
        :sections="[
          { anchor: 'become-an-advocate', label: 'Become an Advocate' },
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
      <PageSection id="meet-the-advocates" framed>
        <MeetTheAdvocates :advocates="filteredAdvocates" />
      </PageSection>
    </div>
  </main>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex'
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import InnerNavigation from '~/components/ui/InnerNavigation.vue'
import PageSection from '~/components/ui/PageSection.vue'
import AdvocateCard from '~/components/advocates/AdvocateCard.vue'
import CompactFeature from '~/components/ui/CompactFeature.vue'
import AppCta from '~/components/ui/AppCta.vue'
import TheAdvocatesHeader from '~/components/advocates/TheAdvocatesHeader.vue'
import MeetTheAdvocates from '~/components/advocates/MeetTheAdvocates.vue'

type Benefit = Pick<CompactFeature, 'icon'|'title'|'description'>

@Component({
  components: {
    InnerNavigation,
    PageSection,
    AdvocateCard,
    CompactFeature,
    AppCta,
    TheAdvocatesHeader,
    MeetTheAdvocates
  },

  head () {
    return {
      title: 'Qiskit Advocates'
    }
  },

  computed: {
    ...mapGetters([
      'filteredAdvocates'
    ])
  },

  methods: {
    ...mapActions({
      fetchAdvocates: 'fetchAdvocates'
    })
  },

  async fetch ({ store }) {
    const advocates = await store.dispatch('fetchAdvocates')

    store.commit('setAdvocates', advocates)
  }
})
export default class extends QiskitPage {
  routeName: string = 'advocates'
  advocateBenefits: Array<Benefit> = [
    {
      icon: 'high-five.svg',
      title: 'Network with experts and enthusiasts',
      description: 'Advocates will be added to a group of quantum experts and will be a part of regular information sharing sessions.'
    },
    {
      icon: 'global-network.svg',
      title: 'Access to Qiskit core members and projects',
      description: 'Advocates will receive special access to core members of the Qiskit team for questions and brainstorming ideas.'
    },
    {
      icon: 'location.svg',
      title: 'Invitation to events',
      description: 'Active Qiskit Advocates will be invited to attend global events created for the quantum computing community.'
    }
  ]
}
</script>

<style lang="scss">
@import '~/assets/scss/community-page.scss';
@import '~carbon-components/scss/globals/scss/typography';

.advocates-page {
  background-color: $white;
}

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
      margin-top: $layout-03;
    }
  }

  .compact-feature {
    padding-right: $layout-01;
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
</style>
