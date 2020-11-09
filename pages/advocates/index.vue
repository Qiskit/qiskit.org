<template>
  <main class="community-page advocates-page">
    <TheAdvocatesHeader />
    <div class="inner-navigation-scope">
      <AdvocatesJoinSection />
      <MapSection
        id="global-community"
        :points="cities()"
      >
        <h2 class="community-page__header community-page__header_elegant">
          Global Community
        </h2>
      </MapSection>
      <PageSection id="meet-the-advocates" framed>
        <MeetTheAdvocates :advocates="profiles" />
      </PageSection>
    </div>
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import PageSection from '~/components/ui/PageSection.vue'
import MapSection from '~/components/advocates/MapSection.vue'
import CompactFeature from '~/components/ui/CompactFeature.vue'
import TheAdvocatesHeader from '~/components/advocates/TheAdvocatesHeader.vue'
import AdvocatesJoinSection from '~/components/advocates/AdvocatesJoinSection.vue'
import MeetTheAdvocates from '~/components/advocates/MeetTheAdvocates.vue'

type Benefit = Pick<CompactFeature, 'icon'|'title'|'description'>

@Component({
  components: {
    PageSection,
    MapSection,
    CompactFeature,
    TheAdvocatesHeader,
    AdvocatesJoinSection,
    MeetTheAdvocates
  },

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
export default class extends QiskitPage {
  routeName: string = 'advocates'

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

#global-community {
  color: $text-01;
}
</style>
