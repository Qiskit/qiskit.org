<template>
  <UiCard
    class="advocate-card"
    :image="image"
    :title="name"
    :tags="formattedRegion"
  >
    <div v-if="location" class="advocate-card__location">
      <Map20 class="advocate-card__icon" />
      {{ location }}
    </div>
    <div v-if="slackUsername" class="advocate-card__contact">
      <LogoSlack20 class="advocate-card__icon" />
      <UiLink :url="`https://qiskit.slack.com/team/${slackId}`">
        @{{ slackUsername }}
      </UiLink>
    </div>
  </UiCard>
</template>

<script setup lang="ts">
import LogoSlack20 from "@carbon/icons-vue/lib/logo--slack/20";
import Map20 from "@carbon/icons-vue/lib/map/20";

interface Props {
  name: string;
  image: string;
  city?: string;
  country?: string;
  region?: string;
  slackId?: string;
  slackUsername?: string;
}

const props = withDefaults(defineProps<Props>(), {
  city: "",
  country: "",
  region: "",
  slackId: "",
  slackUsername: "",
});

// Tags on AppCard is an Array
const formattedRegion = computed(() => (props.region ? [props.region] : []));

const location = computed(() =>
  [props.city, props.country].filter((e) => !!e).join(", ")
);
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.advocate-card {
  margin-bottom: carbon.$spacing-06;

  @include carbon.breakpoint-down(lg) {
    margin-bottom: carbon.$spacing-05;
  }

  &__location,
  &__contact {
    display: flex;
    align-items: center;
  }

  &__contact {
    margin-top: carbon.$spacing-03;
  }

  &__icon {
    margin-right: carbon.$spacing-03;
    fill: currentcolor;
  }
}
</style>
