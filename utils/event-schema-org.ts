type EventAttendanceModeTypes =
  | "OfflineEventAttendanceMode"
  | "OnlineEventAttendanceMode"
  | "MixedEventAttendanceMode";

interface VirtualLocation {
  "@type"?: "VirtualLocation";
  url: string;
}
interface Place {
  name: string;
  address: string;
  url: string;
}

interface EventSchemaOrg {
  name: string;
  eventAttendanceMode: EventAttendanceModeTypes;
  image: string;
  location: VirtualLocation | Place;
  startDate: string;
  organizer: {
    name: string;
    url: string;
  };
  performer?: {
    name: string;
  };
  endDate?: string;
}

interface Event {
  startDate: Date;
  mode: "Online" | "Offline";
  location: string;
  url?: string;
  name: string;
  image: string;
  performer?: string;
  endDate?: Date;
}

export function createEventSchemaOrg(event: Event) {
  let location;
  if (event.mode === "Online") {
    location = {
      url: event.url,
    };
  } else {
    location = {
      name: event.location,
      address: event.location,
      url: event.url,
    };
  }

  const eventAttendanceMode =
    event.mode === "Online"
      ? "OnlineEventAttendanceMode"
      : "OfflineEventAttendanceMode";

  const schemaEvent: EventSchemaOrg = {
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
    schemaEvent.performer = {
      name: event.performer,
    };
  }

  if (event.endDate) {
    schemaEvent.endDate = event.endDate.toISOString();
  }

  return defineEvent(schemaEvent);
}
