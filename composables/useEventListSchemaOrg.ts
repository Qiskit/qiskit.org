import { EventSchemaOrg, createEventSchemaOrg } from "./useEventSchemaOrg";

export function useEventListSchemaOrg(events: EventSchemaOrg[]) {
  const eventEntities = events
    .filter((event) => event.startDate)
    .sort((a, b) => {
      const dateA = a.startDate;
      const dateB = b.startDate;

      return dateA > dateB ? 1 : dateA < dateB ? -1 : 0;
    })
    .map(createEventSchemaOrg);

  const eventsSchema = defineItemList({
    itemListElement: eventEntities,
    itemListOrder: "Ascending",
    numberOfItems: eventEntities.length,
  });

  useSchemaOrg([eventsSchema]);
}
