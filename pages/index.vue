<template>
  <main>
<<<<<<< HEAD
<<<<<<< HEAD
    <HomeLeadSpace :version="qiskitVersion" />
    <HomeCapabilities />
    <HomeProviders />
    <HomeLearn />
=======
    <SchemaOrgDebug />
=======
>>>>>>> 2535aa84b (add list of events)
    <LandingHeroMomentComponent :version="qiskitVersion" />
    <LandingQiskitCapabilitiesSectionComponent />
    <LandingQuickStartComponent />
    <LandingLearnSectionComponent />
>>>>>>> d49ff5dc6 (move schemaOrg to composable)
  </main>
</template>

<script setup lang="ts">
import { CommunityEvent } from "../types/events";
import rawUpcomingEvents from "~/content/events/upcoming-community-events.json";

interface PackageInfo {
  info: {
    version: string;
  };
}

definePageMeta({
  layout: "default-max",
  pageTitle: "Qiskit",
  routeName: "qiskit-landing-page",
});

const config = useRuntimeConfig();

useSeoMeta({
  title: "Qiskit",
  ogTitle: "Qiskit",
  description:
    "Qiskit is an open-source SDK for working with quantum computers at the level of pulses, circuits, and application modules.",
  ogDescription:
    "Qiskit is an open-source SDK for working with quantum computers at the level of pulses, circuits, and application modules.",
  ogImage: `${config.public.siteUrl}/images/qiskit-logo.png`,
  ogUrl: `${config.public.siteUrl}`,
});

const { data: packageInfo } = await useAsyncData<PackageInfo>(() =>
  $fetch("https://pypi.org/pypi/qiskit/json")
);

const qiskitVersion = packageInfo.value?.info.version ?? "";

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
        endDate: new Date(event.endDate),
        eventAttendanceMode,
        image: event.image,
        location,
        startDate: new Date(event.startDate),
        organizer: {
          name: "IBM Quantum",
          url: "https://ibm.com/quantum",
        },
      };

      if (event.speaker) {
        schemaEvent.performer = event.speaker;
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
</script>
