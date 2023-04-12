const WORLD_REGIONS = Object.freeze({
  northAmerica: "North America",
  southAmerica: "South America",
  asiaPacific: "Asia Pacific",
  europe: "Europe",
  africa: "Africa",
  online: "Online",
  tbd: "TBD",
} as const);

type WorldRegion = (typeof WORLD_REGIONS)[keyof typeof WORLD_REGIONS];

const WORLD_REGION_OPTIONS = [
  WORLD_REGIONS.northAmerica,
  WORLD_REGIONS.southAmerica,
  WORLD_REGIONS.asiaPacific,
  WORLD_REGIONS.europe,
  WORLD_REGIONS.africa,
  WORLD_REGIONS.online,
];

const COMMUNITY_EVENT_TYPES = Object.freeze({
  hackathon: "Hackathon",
  camp: "Camp",
  industryEvent: "Industry Event",
  openSource: "Open Source",
  workshop: "Workshop",
  challenge: "Challenge",
  networking: "Networking",
  talks: "Talks",
} as const);

type CommunityEventType =
  (typeof COMMUNITY_EVENT_TYPES)[keyof typeof COMMUNITY_EVENT_TYPES];

type CommunityEvent = {
  types: CommunityEventType[];
  title: string;
  image: string;
  // TODO: We need to clarify if region and place have default values and what
  // these are. Place and region may seem mandatory but human error is
  // possible. In that case, what's the value of place and region?
  //
  // See also:
  // https://github.com/Qiskit/qiskit.org/issues/527
  location: string;
  regions: WorldRegion[];
  date: string;
  startDate: string;
  startDateAndTime: string | null;
  endDate: string;
  to: string;
  abstract?: string;
};

const COMMUNITY_EVENT_TYPE_OPTIONS = Object.values(
  COMMUNITY_EVENT_TYPES
).sort();

export {
  WorldRegion,
  WORLD_REGIONS,
  WORLD_REGION_OPTIONS,
  CommunityEvent,
  CommunityEventType,
  COMMUNITY_EVENT_TYPES,
  COMMUNITY_EVENT_TYPE_OPTIONS,
};
