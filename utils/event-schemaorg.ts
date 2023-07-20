interface EventSchemaOrg {
  startDate: Date;
  mode: "Online" | "Offline";
  location: string;
  url: string;
  name: string;
  image: string;
  performer?: string;
  endDate?: Date;
}

export function createEventSchemaOrg(event: EventSchemaOrg) {
  let location;
  if (event.mode === "Online") {
    location = defineVirtualLocation({
      url: event.url,
    });
  } else {
    location = definePlace({
      name: event.location,
      address: event.location,
      url: event.url,
    });
  }

  const eventAttendanceMode =
    event.mode === "Online"
      ? "OnlineEventAttendanceMode"
      : "OfflineEventAttendanceMode";

  const schemaEvent: any = {
    name: event.name,
    eventAttendanceMode,
    image: event.image,
    location,
    startDate: new Date(event.startDate).toISOString(),
    organizer: {
      name: "IBM Quantum",
      url: "https://ibm.com/quantum",
    },
  };

  if (event.performer) {
    schemaEvent.performer = event.performer;
  }

  if (event.endDate) {
    schemaEvent.endDate = event.endDate.toISOString();
  }

  return defineEvent(schemaEvent);
}
