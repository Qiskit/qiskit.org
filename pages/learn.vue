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
      <div class="the-learning-resources-list__container">
        <h2 class="copy__title">
          Learning resources
        </h2>
        <p
          class="
              copy__paragraph
              copy__paragraph_importance_outstanding
            "
        >
          The below are designed and created by the Qiskit team. However, we
          recommend a familiarity with <AppLink class="copy__link" url="https://www.khanacademy.org/math/linear-algebra">
            linear algebra
          </AppLink> and <AppLink class="copy__link" url="https://www.coursera.org/specializations/python">
            Python
          </AppLink> from these
          trusted resources.
        </p>
        <client-only>
          <cv-tabs
            class="the-learning-resources-list__filter-level"
            aria-label="navigation tab label"
            no-default-to-first
            @tab-selected="setLearnLevel"
          >
            <cv-tab
              v-for="level in learnLevelOptions"
              :key="level"
              :label="level"
              :selected="level === learnLevel"
            />
          </cv-tabs>
        </client-only>
        <div class="the-learning-resources-list__layout">
          <fieldset class="the-learning-resources-list__filter-time">
            <legend
              class="
                the-learning-resources-list__filter-time-label
                the-learning-resources-list__medium-large-only
              "
            >
              Time to spend learning
            </legend>
            <client-only>
              <cv-dropdown
                class="the-learning-resources-list__small-only"
                :value="timeScale"
                @change="setTimeScale($event)"
              >
                <cv-dropdown-item
                  v-for="scale in timeScaleOptions"
                  :key="scale"
                  :value="scale"
                >
                  {{ scale }}
                </cv-dropdown-item>
              </cv-dropdown>
              <cv-radio-group
                class="the-learning-resources-list__medium-large-only"
                vertical
              >
                <cv-radio-button
                  v-for="scale in timeScaleOptions"
                  :key="scale"
                  name="time"
                  :value="scale"
                  :label="scale"
                  :checked="scale === timeScale"
                  :aria-checked="scale === timeScale"
                  @change="setTimeScale(scale)"
                />
              </cv-radio-group>
            </client-only>
          </fieldset>
          <section class="the-learning-resources-list__results">
            <TheCarefulExplanationForBeginner
              v-if="isShowingOneMinuteFor(learnLevels.beginner) && !isShowingEverything"
              class="the-learning-resources-list__item"
              :compact="isShowingMoreResources"
              url="/learn/?learnLevel=beginner&amp;timeScale=1%20minute"
            />
            <TheCarefulExplanationForExperts
              v-if="isShowingOneMinuteFor(learnLevels.advanced) && !isShowingEverything"
              class="the-learning-resources-list__item"
              :compact="isShowingMoreResources"
              url="/learn/?learnLevel=advanced&amp;timeScale=1%20minute"
            />
            <LearningResourceCard
              v-for="resource in filteredLearningResources"
              :key="resource.path"
              class="the-learning-resources-list__item"
              :title="resource.title"
              :image="resource.image"
              :cta-label="resource.ctaLabel"
              :to="resource.to"
            >
              <nuxt-content class="copy" :document="resource" />
            </LearningResourceCard>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import LearningResourceCard from '~/components/learn/LearningResourceCard.vue'
import TheCarefulExplanationForBeginner from '~/components/learn/TheCarefulExplanationForBeginner.vue'
import TheCarefulExplanationForExperts from '~/components/learn/TheCarefulExplanationForExperts.vue'
import AppLink from '~/components/ui/AppLink.vue'
import {
  TimeScale,
  LEARN_LEVELS,
  TIME_SCALES,
  LEARN_LEVEL_OPTIONS,
  TIME_SCALE_OPTIONS,
  LearnLevel
} from '~/store/modules/learning-resources.ts'

@Component({
  components: {
    LearningResourceCard,
    TheCarefulExplanationForExperts,
    TheCarefulExplanationForBeginner,
    AppLink
  },

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
    const learningResources = await $content('learning-resources').fetch()
    store.commit('setLearningResources', learningResources)
  }
})

export default class extends QiskitPage {
  routeName = 'learn'

  learnLevelOptions = LEARN_LEVEL_OPTIONS
  timeScaleOptions = TIME_SCALE_OPTIONS

  learnLevels = LEARN_LEVELS
  timeScales = TIME_SCALES

  beforeRouteEnter (route, _, next) {
    next(learnPage => learnPage._parseFilterFromUrl(route))
  }

  beforeRouteUpdate (route, _, next) {
    this._parseFilterFromUrl(route)
    next()
  }

  _parseFilterFromUrl (route) {
    const timeScale = route.query.timeScale || this.timeScales.any
    const learnLevel = route.query.learnLevel || this.learnLevels.all
    this.$store.commit('setTimeScale', timeScale)
    this.$store.commit('setLearnLevel', learnLevel)
  }

  setTimeScale (scale: TimeScale): void {
    const { timeScale: currentScale } = this as any
    if (currentScale === scale) {
      return
    }
    this._updateQueryParameter('timeScale', scale)
  }

  setLearnLevel (tabIndex: number) {
    const { learnLevel: currentLevel } = this as any
    const level = this.learnLevelOptions[tabIndex]
    if (currentLevel === level) {
      return
    }
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
    return timeScale === this.timeScales.any && learnLevel === this.learnLevels.all
  }

  isShowingOneMinuteFor (level: LearnLevel): boolean {
    return this.isShowingOneMinute && this.isShowingLevel(level)
  }

  get isShowingOneMinute (): boolean {
    const { timeScale } = (this as any)
    return [this.timeScales.any, this.timeScales.minute].includes(timeScale)
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
@import '~/assets/scss/blocks/copy.scss';
@import '~carbon-components/scss/globals/scss/typography';
@include carbon--theme($carbon--theme--white);

.learn-page {
  background-color: white;
}

.the-learn-header {
  @include responsive-grid-bg-strip('/images/grid/grid-hero-learn.svg', auto, 28rem);
  min-height: 28rem;

  @include mq($until: large) {
    min-height: 28rem * 40 / 64;
  }

  &__container {
    @include contained();
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 28rem;

    @include mq($until: large) {
      height: 28rem * 40 / 64;
    }
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

    @include mq($until: medium) {
      display: block;
    }
  }

  &__filter-level {
    margin-bottom: $layout-04;

    @include mq($until: medium) {
      margin-bottom: $layout-01;
    }
  }

  &__filter-time {
    margin-right: $layout-03;
    color: $cool-gray-80;
    flex: 0 0 25%;

    @include mq($until: medium) {
      width: auto;
      margin-right: 0;
      margin-bottom: $layout-03;
    }
  }

  &__filter-time-label {
    margin-bottom: $layout-01;
    white-space: nowrap;
  }

  &__item {
    margin-bottom: $layout-02;

    @include mq($until: large) {
      margin-bottom: $layout-01;
    }
  }

  &__small-only {
    @include mq($from: medium) {
      display: none;
    }
  }

  &__medium-large-only {
    @include mq($until: medium) {
      display: none;
    }
  }

  &__results {
    flex: auto;

    @include mq($until: medium) {
      width: 100%;
    }
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

    & .bx--tabs__nav-item:hover:not(.bx--tabs__nav-item--disabled) {
      box-shadow: none;
    }

    & .bx--tabs__nav-item:hover:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled),
    & .bx--tabs__nav-item,
    & .bx--tabs-trigger {
      background-color: white;

      svg {
        fill: $gray-100;
      }
    }

    & .bx--tabs__nav-link,
    & .bx--tabs-trigger-text {
      color: $gray-100;
    }
  }

  &__filter-time {
    & .bx--dropdown,
    & .bx--dropdown-item {
      background-color: white;

        svg {
          fill: $gray-100;
        }
    }

    & .bx--dropdown-item:hover,
    & .bx--dropdown--show-selected .bx--dropdown--selected:hover {
      // To match default light theme UI hover, which is not among the Carbon
      // palette. 🤦
      background-color: #e5e5e5;
    }

    & .bx--dropdown-link,
    & .bx--dropdown-text {
      color: $gray-100;
      border-top-color: #dde1e6;
    }

    & .bx--dropdown--show-selected .bx--dropdown--selected .bx--dropdown-link {
      border-top-color: #dde1e6;
      border-bottom-color: #dde1e6;
    }

    & .bx--dropdown-link:hover {
      border-bottom-color: #dde1e6;
    }
  }

  & .bx--radio-button__appearance {
    border-color: black;
  }
}
</style>
