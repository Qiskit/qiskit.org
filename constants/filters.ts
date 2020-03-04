interface Filter {
  label: string
  value: string
}

type LocationFilter = {
  america: Filter,
  europe: Filter,
  africa: Filter,
  asia: Filter
}

type TypesFilter = {
  camp: Filter,
  unconference: Filter,
  hackathon: Filter
}

const LOCATION_FILTERS: LocationFilter = {
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

const TYPES_FILTERS: TypesFilter = {
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
