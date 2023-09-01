<template>
  <article class="fall-fest-page">
    <LayoutLeadSpaceWithCard
      :cta="headerData.cta"
      :card-title="headerData.cardSectionHeading"
    >
      <template #title>
        {{ headerData.titleLine1 }}
      </template>
      <template #description>
        <p>
          The Qiskit Fall Fest is a collection of quantum computing events on
          college campuses around the world. Every Fall Fest event is organized
          and run by the students on each campus, with support from IBM Quantum.
          Student leaders work alongside IBM to design and plan their event,
          which are run in October and November. Each event is standalone - only
          made for the students on that particular campus. The events vary from
          technical hackathons to beginner-friendly challenges, all with the
          goal of helping to grow the local community’s skill set.
        </p>
      </template>
      <template #card>
        <EventsCard
          :cta-label="headerData.card.ctaLabel"
          :image="headerData.card.image"
          :location="headerData.card.location"
          :segment="headerData.card.segment"
          :time="headerData.card.time"
          :title="headerData.card.title"
          :to="headerData.card.to"
          vertical-layout
        >
          {{ headerData.card.description }}
        </EventsCard>
      </template>
    </LayoutLeadSpaceWithCard>

    <div class="cds--grid fall-fest-page__content">
      <section class="fall-fest-page__section">
        <UiHelpfulResources
          class="fall-fest-page__section"
          :title="helpfulResourcesData.title"
          :resources="helpfulResourcesData.resources"
        />
      </section>
    </div>
  </article>
</template>

<script setup lang="ts">
import { header, helpfulResources } from "~/constants/fallFest2023Content";

definePageMeta({
  pageTitle: headerData.titleLine1,
  routeName: "fall-fest",
});

const config = useRuntimeConfig();

const title = headerData.titleLine1;
const description =
  "The Qiskit Fall Fest is a collection of quantum computing events from universities around the world, organized by students and supported by the IBM Quantum community.";
const image = `${config.public.siteUrl}/images/events/fall-fest/fall-fest.png`;
const pageUrl = `${config.public.siteUrl}/events/fall-fest`;

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: image,
  ogImageAlt: title,
  ogUrl: pageUrl,
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterDescription: description,
});

const headerData = header;
const helpfulResourcesData = helpfulResources;
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.fall-fest-page {
  display: flex;
  flex-direction: column;

  &__section {
    margin-top: carbon.$spacing-10;
    margin-bottom: carbon.$spacing-07;

    @include carbon.breakpoint-down(lg) {
      margin-bottom: carbon.$spacing-05;
    }
  }

  &__content {
    @include carbon.breakpoint-down(lg) {
      max-width: 100%;
    }
  }
}
</style>
