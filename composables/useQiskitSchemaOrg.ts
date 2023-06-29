import { CommunityEvent } from "../types/events";
import rawUpcomingEvents from "~/content/events/upcoming-community-events.json";

export function useQiskitSchemaOrg() {
  const upcomingEvents = rawUpcomingEvents as CommunityEvent[];

  const createEventSchema = (events: CommunityEvent[]) => {
    const entities = events
      .filter((event) => event.startDate)
      .map((event) => {
        let location;
        if (["YouTube", "Virtual"].includes(event.location)) {
          location = defineVirtualLocation({
            url: event.to,
          });
        } else {
          location = definePlace({
            ame: event.location,
            address: event.location,
            url: event.to,
          });
        }

        const eventAttendanceMode = ["YouTube", "Virtual"].includes(
          event.location
        )
          ? "OnlineEventAttendanceMode"
          : "OfflineEventAttendanceMode";

        const schemaEvent: any = {
          name: event.title,
          eventAttendanceMode,
          image: event.image,
          location,
          startDate: new Date(event.startDate).toISOString(),
          organizer: {
            name: "IBM Quantum",
            url: "https://ibm.com/quantum",
          },
        };

        if (event.speaker) {
          schemaEvent.performer = event.speaker;
        }

        const endDate = new Date(event.endDate);
        if (endDate.valueOf()) {
          schemaEvent.endDate = endDate.toISOString();
        }

        if (schemaEvent.name === "Qiskit Office Hour") {
          console.log(schemaEvent);
        }

        return defineEvent(schemaEvent);
      });

    return entities;
  };

  const eventsSchema = createEventSchema(upcomingEvents);

  useSchemaOrg([
    defineWebSite({
      name: "Qiskit.org",
    }),
    defineOrganization({
      name: "Qiskit",
      logo: "/images/qiskit-logo.png",
    }),
    defineWebPage(),
    ...eventsSchema,
  ]);
}
