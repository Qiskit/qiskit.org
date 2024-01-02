<template>
  <section class="events-fall-fest-university-directory">
    <article class="cds--row">
      <div class="cds--col-lg-4">
        <h2>Event Directory</h2>
        <p>
          Discover the array of events taking place at this years Qiskit Fall
          Fest! These select events take months of preparation and help showcase
          or teach quantum computing skills to local communities.
        </p>
      </div>
      <div class="cds--col-xlg-12 cds--col-lg-12">
        <div class="cds--row">
          <div
            v-for="{ image, title, startDate, cta, detail } in directoryData"
            :key="title"
            class="cds--col-xlg-8"
          >
            <UiCard
              :cta-label="cta?.label"
              :to="cta?.url"
              :segment="cta?.segment"
              :image="image"
              :title="title"
              class="events-fall-fest-university-directory__card"
              :description-whole-size="true"
            >
              <p>
                {{ startDate }}
                <!-- eslint-disable-next-line vue/html-self-closing -->
                <br />
                {{ detail }}
              </p>
            </UiCard>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { TextLink } from "~/types/links";

type University = {
  image: string;
  title: string;
  detail: string;
  startDate: string;
  cta?: TextLink;
};

interface Props {
  directoryData: University[];
}

const props = withDefaults(defineProps<Props>(), {});

const config = useRuntimeConfig();

const sortedEvents = sortEvents(props.directoryData);

useSchemaOrg([
  defineItemList({
    itemListElement: sortedEvents.map((event) =>
      createEventSchemaOrg({
        startDate: new Date(event.startDate),
        location: event.title,
        mode: event.detail === "In Person" ? "Offline" : "Online",
        url: `${config.public.siteUrl}/fall-fest`,
        name: event.title,
        image: event.image,
      }),
    ),
    itemListOrder: "Ascending",
    numberOfItems: sortedEvents.length,
  }),
]);
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.events-fall-fest-university-directory {
  &__subtitle {
    margin-bottom: carbon.$spacing-05;
  }

  &__section {
    margin-bottom: carbon.$spacing-07;
  }

  &__card {
    margin-bottom: carbon.$spacing-06;

    @include carbon.breakpoint-down(lg) {
      margin-bottom: carbon.$spacing-05;
    }

    @include carbon.breakpoint-up(xlg) {
      height: calc(100% - #{carbon.$spacing-06});
    }
  }
}
</style>
