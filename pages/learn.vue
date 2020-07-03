<template>
  <div class="learn-page">
    <header class="the-learn-header">
      <div class="the-learn-header__container">
        <h1 class="the-learn-header__title">
          Start your path towards<br>
          learning
          <span class="the-learn-header__relevant-word">
            Qiskit
          </span>
        </h1>
      </div>
    </header>
    <section class="the-learning-resources-list">
      <client-only>
        <div class="the-learning-resources-list__container">
          <h2 class="copy__title">
            Learning resources
          </h2>
          <p
            class="
              copy__paragraph
              copy__paragraph_outstanding
            "
          >
            The below are designed and created by the Qiskit team. However, we
            recommend a familiar with linear algebra and Python from these
            trusted resources.
          </p>
          <cv-tabs class="the-learning-resources-list__filter-level" aria-label="navigation tab label" @tab-selected="selectTab">
            <cv-tab id="tab-1" label="All resources" />
            <cv-tab id="tab-2" label="beginner resources" />
            <cv-tab id="tab-3" label="advanced resources" />
          </cv-tabs>
          <div class="the-learning-resources-list__layout">
            <fieldset class="the-learning-resources-list__filter-time">
              <legend class="the-learning-resources-list__filter-time-label">
                Time to spend learning
              </legend>
              <client-only>
                <cv-radio-group vertical>
                  <cv-radio-button
                    v-for="region in regions"
                    :key="region"
                    name="time"
                    :value="region"
                    :label="region"
                    :checked="isFilterChecked('regionFilters', region)"
                    :aria-checked="`${isFilterChecked('regionFilters', region)}`"
                    @change="updateFilter('regionFilters', region, $event)"
                  />
                </cv-radio-group>
              </client-only>
            </fieldset>
            <section class="the-learning-resources-list__results">
              <template v-if="hasEvents">
                <LearningResourceCard
                  v-for="learningResource in resources"
                  :key="learningResource.path"
                  :title="learningResource.title"
                  :image="learningResource.image"
                  :cta-label="learningResource.ctaLabel"
                  :to="learningResource.to"
                >
                  <nuxt-content class="copy" :document="learningResource" />
                </LearningResourceCard>
              </template>
            </section>
          </div>
        </div>
      </client-only>
    </section>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex'
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import LearningResourceCard from '~/components/learn/LearningResourceCard.vue'
import AppLink from '~/components/ui/AppLink.vue'
import {
  CommunityEvent,
  WORLD_REGION_OPTIONS,
  COMMUNITY_EVENT_TYPE_OPTIONS
} from '~/store/modules/events.ts'
import { EVENT_REQUEST_LINK } from '~/constants/appLinks'

@Component({
  components: {
    LearningResourceCard,
    AppLink
  },

  head () {
    return {
      title: 'Qiskit Learn'
    }
  },

  async asyncData ({ $content }) {
    return {
      resources: await $content('learning-resources').fetch()
    }
  },

  computed: {
    ...mapGetters([
      'filteredEvents',
      'typeFilters',
      'regionFilters'
    ])
  },

  methods: {
    ...mapActions({
      fetchEvents: 'fetchEvents'
    })
  },

  async fetch ({ store }) {
    const upcomingEvents = await store.dispatch('fetchUpcomingEvents')
    const pastEvents = await store.dispatch('fetchPastEvents')

    const upcomingEventsPayload = { events: 'upcomingCommunityEvents', eventsSet: upcomingEvents }
    const pastEventsPayload = { events: 'pastCommunityEvents', eventsSet: pastEvents }
    store.commit('setEvents', upcomingEventsPayload)
    store.commit('setEvents', pastEventsPayload)
  }
})

export default class extends QiskitPage {
  regions = WORLD_REGION_OPTIONS
  types = COMMUNITY_EVENT_TYPE_OPTIONS
  routeName: string = 'events'
  eventRequestLink = EVENT_REQUEST_LINK
  isDesktop: boolean = false

  get hasEvents (): boolean {
    return (this as any).filteredEvents.length !== 0
  }

  isFilterChecked (filter: string, filterValue: string): Array<CommunityEvent> {
    const typeFilters = (this as any).typeFilters
    const regionFilters = (this as any).regionFilters

    return filter === 'regionFilters'
      ? regionFilters.includes(filterValue)
      : typeFilters.includes(filterValue)
  }

  updateFilter (filter: string, filterValue: string, isSelected: boolean): void {
    const payload = { filter, filterValue }
    const { commit } = this.$store

    isSelected
      ? commit('addFilter', payload)
      : commit('removeFilter', payload)
  }

  selectTab (selectedTab: number) {
    const activeSet = selectedTab === 0 ? 'upcoming' : 'past'

    this.$store.commit('setActiveSet', activeSet)
  }

  formatType (types: CommunityEvent[]): string {
    return types.join(', ')
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/copy.scss';
@import '~carbon-components/scss/globals/scss/typography';

.learn-page {
  background-color: white;
}

.the-learn-header {
  @include responsive-grid-bg-strip('/images/grid/grid-hero-learn.svg', auto, 28rem);
  min-height: 28rem;

  &__container {
    @include contained();
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 28rem;
  }

  &__title {
    @include type-style('expressive-heading-05', true);
    color: $white-text-01;
  }

  &__relevant-word {
    font-style: italic;
    background-color: $purple-70;
    color: white;
    padding: $spacing-01 $spacing-03;
  }
}

.the-learning-resources-list {
  @include responsive-grid-bg('/images/grid/grid-left-inverted.svg', 36rem);
  background-repeat: no-repeat;
  background-position: left bottom;

  &__container {
    @include contained();
  }

  &__layout {
    display: flex;
    justify-content: space-between;
  }

  &__filter-level {
    margin-bottom: $layout-04;
  }

  &__filter-time {
    color: $cool-gray-80;
  }

  &__filter-time-label {
    margin-bottom: $layout-01;
  }

  &__results {
    width: 75%;
  }
}
</style>

<style lang="scss">
@import '~/assets/scss/blocks/copy.scss';
/**
 * TODO: Review if there is some mechanism, inside the Carbon Themes
 * framework, for applying a different theme to an specific component (#703).
 *
 * If there is not, we need some alternative way of overriding component
 * internal CSS. The following approach takes advantage of BEM methodology
 * and CSS specificity to override the internal CSS.
 */
.the-learning-resources-list {
  &__filter-level {
    & a.bx--tabs__nav-link {
      color: $cool-gray-80;
      border-bottom-color: $cool-gray-20;

      &:focus,
      &:active {
        outline: none;
      }

      &:not(.bx--tabs__nav-item--disabled) {
        color: $cool-gray-80;
      }
    }

    & .bx--tabs__nav-item {
      &:hover:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link,
      &:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled):not(.bx--tabs__nav-item--selected) .bx--tabs__nav-link:focus,
      &:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled):not(.bx--tabs__nav-item--selected) a.bx--tabs__nav-link:active,
      &:not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link, .bx--tabs__nav-item--selected:not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link:focus {
        color: $cool-gray-80;
      }

      &--selected:not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link {
        border-bottom-color: $purple-70;
      }
    }
  }

  & .bx--radio-button__appearance {
    border-color: black;
  }
}
</style>
