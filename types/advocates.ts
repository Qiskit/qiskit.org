const ADVOCATES_WORLD_REGIONS = Object.freeze({
  northAmerica: "America (North)",
  southAmerica: "America (South)",
  oceania: "Oceania",
  africa: "Africa",
  europe: "Europe",
  asia: "Asia",
} as const);

type AdvocatesWorldRegion =
  (typeof ADVOCATES_WORLD_REGIONS)[keyof typeof ADVOCATES_WORLD_REGIONS];

const ADVOCATES_WORLD_REGION_OPTIONS = Object.values(
  ADVOCATES_WORLD_REGIONS
).sort();

interface Advocate {
  city: string;
  country: string[];
  image: string;
  location?: string;
  name: string;
  region: AdvocatesWorldRegion;
  slackId?: string;
  slackUsername?: string;
}

export { AdvocatesWorldRegion, ADVOCATES_WORLD_REGION_OPTIONS, Advocate };
