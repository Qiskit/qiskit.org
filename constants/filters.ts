interface Filter {
  label: string
  value: string
}

type LabeledFilters = {
  [key: string]: Filter
}

const LOCATION_FILTERS: LabeledFilters = {
  america: {
    label: 'America',
    value: 'america'
  },
  europe: {
    label: 'Europe',
    value: 'europe'
  },
  africa: {
    label: 'Africa',
    value: 'africa'
  },
  asia: {
    label: 'Asia',
    value: 'asia'
  }
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

const ORDERED_LOCATION_FILTERS: Array<Filter> = [
  LOCATION_FILTERS.america,
  LOCATION_FILTERS.asia,
  LOCATION_FILTERS.europe,
  LOCATION_FILTERS.africa
]

const ORDERED_TYPE_FILTERS: Array<Filter> = [
  TYPES_FILTERS.camp,
  TYPES_FILTERS.unconference,
  TYPES_FILTERS.hackathon
]

export {
  ORDERED_LOCATION_FILTERS,
  ORDERED_TYPE_FILTERS,
  Filter
}
