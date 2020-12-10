<template>
  <div class="learn-page">
    <TheLearnHeader />
    <TheLearningResourceList
      :top-filters="learnLevelOptions"
      :active-top-filter="learnLevel"

      :aside-filters="timeScaleOptions"
      :active-aside-filter="timeScale"

      @top-filter-changed="setLearnLevel"
      @aside-filter-changed="setTimeScale"
    >
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
      <AppCard
        v-for="resource in filteredLearningResources"
        :key="resource.path"
        :image="resource.image"
        :title="resource.title"
        :to="resource.to"
        :cta-label="resource.ctaLabel"
      >
        <nuxt-content class="copy" :document="resource" />
      </AppCard>
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
} from '~/store/modules/learning-resources.ts'

@Component({
  head () {
    return {
      title: 'Qiskit Learn'
    }
  },

  computed: {
    ...mapGetters([
      'filteredLearningResources',
      'learnLevel',
      'timeScale'
    ])
  },

  async middleware ({ $content, store }) {
    const learningResources = await $content('learning-resources')
      .sortBy('order', 'asc')
      .fetch()
    store.commit('setLearningResources', learningResources)
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
    this.$store.commit('setTimeScale', timeScale)
    this.$store.commit('setLearnLevel', learnLevel)
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
.learn-page {
  background-color: white;
}
</style>
