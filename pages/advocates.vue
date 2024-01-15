<template>
  <article>
    <LayoutLeadSpaceFixed>
      Connect with the<br />
      <UiTypewriterEffect
        :values="['enthusiasts', 'advocates', 'mentors', 'experts']"
      /><br />
      within the Qiskit community
    </LayoutLeadSpaceFixed>
    <UiJoinWithCards
      class="advocates-page__join-section"
      :cards="joinSectionCards"
      :cta="advocatesJoinLink"
    >
      <template #description>
        <p>
          The Qiskit advocate program is a global program that provides support
          to the individuals who actively contribute to the Qiskit Community.
        </p>
      </template>
    </UiJoinWithCards>
    <AdvocatesMeetTheAdvocates />
  </article>
</template>

<script setup lang="ts">
import { type TextLink } from "~/types/links";

definePageMeta({
  pageTitle: "Qiskit Advocates",
  routeName: "advocates",
});

const config = useRuntimeConfig();
const description =
  "The Qiskit advocate program is a global program that provides support to the individuals who actively contribute to the Qiskit Community. Join the program today!";

useSeoMeta({
  title: "Qiskit Advocates",
  ogTitle: "Qiskit Advocates",
  description,
  ogDescription: description,
  ogImage: `${config.public.siteUrl}/images/qiskit-logo.png`,
  ogUrl: `${config.public.siteUrl}/advocates/`,
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterDescription: description,
});

const advocatesJoinLink: TextLink = {
  url: "https://qisk.it/advocateapplication",
  label: "Join the program",
  segment: { cta: "join-the-program", location: "advocates" },
};

const joinSectionCards = [
  {
    icon: "high-five.svg",
    name: "Network with experts and enthusiasts",
    description:
      "Advocates will be added to a group of quantum experts and will be a part of regular information sharing sessions.",
  },
  {
    icon: "global-network.svg",
    name: "Access to Qiskit core members and projects",
    description:
      "Advocates will receive special access to core members of the Qiskit team for questions and brainstorming ideas.",
  },
  {
    icon: "location.svg",
    name: "Invitation to events",
    description:
      "Active Qiskit Advocates will be invited to attend global events created for the quantum computing community.",
  },
];
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.advocates-page__join-section {
  margin-bottom: carbon.$spacing-12;
}
</style>
