import { defineStore } from 'pinia'

const ADVOCATES_WORLD_REGIONS = Object.freeze({
  northAmerica: 'America (North)',
  southAmerica: 'America (South)',
  oceania: 'Oceania',
  africa: 'Africa',
  europe: 'Europe',
  asia: 'Asia'
} as const)

type AdvocatesWorldRegion = typeof ADVOCATES_WORLD_REGIONS[keyof typeof ADVOCATES_WORLD_REGIONS]

/**
 * Interface for a Qiskit advocate.
 */
interface Advocate {
  city: string
  country: string
  image: string
  location?: string
  name: string
  region: AdvocatesWorldRegion
  slackId?: string
  slackUsername?: string
}

const ADVOCATES_WORLD_REGION_OPTIONS = Object.values(ADVOCATES_WORLD_REGIONS).sort()

export {
  AdvocatesWorldRegion,
  ADVOCATES_WORLD_REGIONS,
  ADVOCATES_WORLD_REGION_OPTIONS,
  Advocate
}

export const useAdvocatesStore = defineStore(
  'advocates',
  {
    state: () => ({
      advocates: [] as Advocate[],
      regionFilters: [] as string[]
    }),
    getters: {
      filteredAdvocates: ({ advocates, regionFilters }) => {
        const noRegionFilters = regionFilters.length === 0

        if (noRegionFilters) {
          return advocates
        }

        return advocates.filter(advocate => regionFilters.includes(advocate.region))
      }
    },
    actions: {
      async fetchAdvocates () {
        this.advocates = await import('~/content/advocates/advocates.json') as Advocate[] || []
      }
    }
  }
)
