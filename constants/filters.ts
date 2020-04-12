interface Filter {
  label: string
  value: string
}

type LabeledFilters = {
  [key: string]: Filter
}

const TYPES_FILTERS: LabeledFilters = {
  camp: {
    label: 'Camp',
    value: 'camp'
  },
  unconference: {
    label: 'Unconference',
    value: 'unconference'
  },
  hackathon: {
    label: 'Hackathon',
    value: 'hackathon'
  }
}

const ORDERED_TYPE_FILTERS: Array<Filter> = [
  TYPES_FILTERS.camp,
  TYPES_FILTERS.unconference,
  TYPES_FILTERS.hackathon
]

export {
  ORDERED_TYPE_FILTERS,
  Filter
}
