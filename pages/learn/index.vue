<template>
  <div>
    <AppPageHeaderFixed>
      Start your path towards learning
      <TypewriterEffect
        :values="[
          'Qiskit',
          'Python',
          'Quantum Computing',
          'Error Mitigation',
          'Quantum Hardware',
          'Quantum Algorithms',
          'Quantum Applications'
        ]"
      />
    </AppPageHeaderFixed>
    <TheLearningResourceList
      :top-filters="learnLevelOptions"
      :active-top-filter="learnLevel"

      :aside-filters="timeScaleOptions"
      :active-aside-filter="timeScale"

      @top-filter-changed="setLearnLevel"
      @aside-filter-changed="setTimeScale"
    >
      <div class="app-filters-results-layout__careful-explanation">
        <TheCarefulExplanationForBeginners
          v-if="isShowingOneMinuteFor(learnLevels.beginner) && !isShowingEverything"
          :compact="isShowingMoreResources"
          url="/learn/?learnLevel=Beginner&amp;timeScale=1%20minute"
        />
        <TheCarefulExplanationForExperts
          v-if="isShowingOneMinuteFor(learnLevels.advanced) && !isShowingEverything"
          :compact="isShowingMoreResources"
          url="/learn/?learnLevel=Advanced&amp;timeScale=1%20minute"
        />
      </div>
      <div class="bx--row">
        <div
          v-for="resource in filteredLearningResources"
          :key="resource.path"
          class="bx--col-sm-4 bx--col-xlg-8"
        >
          <AppCard
            :image="resource.image"
            :title="resource.title"
            :to="resource.to"
            :cta-label="resource.ctaLabel"
            class="app-filters-results-layout__results-item app-filters-results-layout__results-item_2-cols-xlg"
          >
            <nuxt-content :document="resource" />
          </AppCard>
        </div>
      </div>
    </TheLearningResourceList>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import {
  TimeScale,
  LearnLevel,
  LEARN_LEVELS,
  TIME_SCALES,
  LEARN_LEVEL_OPTIONS,
  TIME_SCALE_OPTIONS
} from '~/store/learning-resources'

@Component({
  head () {
    return {
      title: 'Qiskit Learn'
    }
  },
  layout: 'default-max',
  computed: {
    ...mapGetters('learning-resources', [
      'filteredLearningResources',
      'learnLevel',
      'timeScale'
    ])
  },
  async middleware ({ $content, store }) {
    const learningResources = await $content('learning-resources')
      .sortBy('order', 'asc')
      .fetch()
    store.commit('learning-resources/setLearningResources', learningResources)
  }
})

export default class LearnPage extends QiskitPage {
  routeName = 'learn'

  learnLevelOptions = LEARN_LEVEL_OPTIONS
  timeScaleOptions = TIME_SCALE_OPTIONS

  learnLevels = LEARN_LEVELS
  timeScales = TIME_SCALES

  beforeRouteEnter (route: any, _: any, next: any) {
    next((learnPage: any) => learnPage._parseFilterFromUrl(route))
  }

  beforeRouteUpdate (route: any, _: any, next: any) {
    this._parseFilterFromUrl(route)
    next()
  }

  _parseFilterFromUrl (route: any) {
    const timeScale = route.query.timeScale || this.timeScales.all
    const learnLevel = route.query.learnLevel || this.learnLevels.all
    this.$store.commit('learning-resources/setTimeScale', timeScale)
    this.$store.commit('learning-resources/setLearnLevel', learnLevel)
  }

  setTimeScale (scale: TimeScale): void {
    this._updateQueryParameter('timeScale', scale)
  }

  setLearnLevel (level: LearnLevel) {
    this._updateQueryParameter('learnLevel', level)
  }

  _updateQueryParameter (paramName: string, value: string) {
    this.$router.push({
      query: {
        ...this.$route.query,
        [paramName]: value
      }
    })
  }

  get isShowingEverything (): boolean {
    const { timeScale, learnLevel } = (this as any)
    return timeScale === this.timeScales.all && learnLevel === this.learnLevels.all
  }

  isShowingOneMinuteFor (level: LearnLevel): boolean {
    return this.isShowingOneMinute && this.isShowingLevel(level)
  }

  get isShowingOneMinute (): boolean {
    const { timeScale } = (this as any)
    return [this.timeScales.all, this.timeScales.minute].includes(timeScale)
  }

  isShowingLevel (level: LearnLevel): boolean {
    const { learnLevel } = (this as any)
    return [this.learnLevels.all, level].includes(learnLevel)
  }

  get isShowingMoreResources () {
    const { advanced, beginner } = this.learnLevels
    return (this as any).filteredLearningResources.length > 0 ||
      (this.isShowingOneMinuteFor(advanced) && this.isShowingOneMinuteFor(beginner))
  }
}
</script>

<style lang="scss" scoped>
.app-filters-results-layout {
  &__careful-explanation {
    @include mq($from: x-large) {
      $grid-columns: 11/12; // Number of columns that the element will use at this breakpoint.

      max-width: 100% * $grid-columns;
    }
  }
}
</style>
