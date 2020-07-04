const TIME_SCALES = Object.freeze({
  any: 'any',
  minute: '1 minute',
  day: '1 day',
  week: '1 week',
  month: '1 month',
  year: '1 year',
  fourYears: '4 years'
} as const)

const LEARN_LEVELS = Object.freeze({
  all: 'All resources',
  beginner: 'beginner',
  advanced: 'advanced'
} as const)

type LearnLevel = typeof LEARN_LEVELS[keyof typeof LEARN_LEVELS]
type TimeScale = typeof TIME_SCALES[keyof typeof TIME_SCALES]

const LEARN_LEVEL_OPTIONS = Object.freeze([
  LEARN_LEVELS.all,
  LEARN_LEVELS.beginner,
  LEARN_LEVELS.advanced
])

const TIME_SCALE_OPTIONS = Object.freeze([
  TIME_SCALES.any,
  TIME_SCALES.minute,
  TIME_SCALES.day,
  TIME_SCALES.week,
  TIME_SCALES.month,
  TIME_SCALES.fourYears
])

type Classification = {
  time: TimeScale,
  level: LearnLevel
}

type LearningResource = {
  title: string,

  to: string,

  image: string,

  path: string,

  ctaLabel: string,

  classifications: Classification[]
}

export {
  LearnLevel,
  TimeScale,
  LearningResource,
  LEARN_LEVELS,
  TIME_SCALES,
  LEARN_LEVEL_OPTIONS,
  TIME_SCALE_OPTIONS
}

type State = {
  learnLevel: LearnLevel,
  timeScale: TimeScale,
  learningResources: LearningResource[]
}

export default {
  state (): State {
    return {
      learnLevel: LEARN_LEVELS.all,
      timeScale: TIME_SCALES.any,
      learningResources: []
    }
  },
  getters: {
    filteredLearningResources (state: State): LearningResource[] {
      const {
        learnLevel: currentLearnLevel,
        timeScale: currentTimeScale,
        learningResources
      } = state
      const filtered = learningResources.filter((resource) => {
        return resource.classifications.some(matchesCurrentFilters)
      })
      return filtered

      function matchesCurrentFilters (classification: Classification): boolean {
        const { level, time } = classification
        const matchesLevel = currentLearnLevel === LEARN_LEVELS.all ||
          level === currentLearnLevel
        const matchesTime = currentTimeScale === TIME_SCALES.any ||
          time === currentTimeScale
        return matchesLevel && matchesTime
      }
    },
    learnLevel (state: State): LearnLevel {
      return state.learnLevel
    },
    timeScale (state: State): TimeScale {
      return state.timeScale
    }
  },
  mutations: {
    setLearningResources (state: State, learningResources: LearningResource[]) {
      state.learningResources = learningResources
    },
    setLearnLevel (state: State, level: LearnLevel) {
      state.learnLevel = level
    },
    setTimeScale (state: State, scale: TimeScale) {
      state.timeScale = scale
    }
  }
}
