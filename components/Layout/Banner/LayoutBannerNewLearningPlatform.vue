<template>
  <qiskit-banner>
    Introducing&nbsp;
    <UiLink
      :segment="newLearningPlatformLink.segment"
      :url="newLearningPlatformLink.url"
    >
      {{ newLearningPlatformLink.label }}
    </UiLink>
    , a new home for free quantum education resources. Continue to use&nbsp;
    <UiLink :segment="qiskitLearnLink.segment" :url="qiskitLearnLink.url">
      {{ qiskitLearnLink.label }}
    </UiLink>
    &nbsp;<strong>until December 1st, 2023</strong>.&nbsp;
    <UiLink :segment="moreInfoBlogLink.segment" :url="moreInfoBlogLink.url">
      {{ moreInfoBlogLink.label }}
    </UiLink>
  </qiskit-banner>
</template>

<script setup lang="ts">
import { TextLink } from "~/types/links";

const newLearningPlatformLink: TextLink = {
  url: "#",
  label: "IBM Quantum Learning",
  segment: { cta: "new-learning-platform", location: "announcement-banner" },
};

const qiskitLearnLink: TextLink = {
  url: "/learn",
  label: "qiskit.org/learn",
  segment: { cta: "qiskit-learn", location: "announcement-banner" },
};

const moreInfoBlogLink: TextLink = {
  url: "#",
  label: "More information...",
  segment: { cta: "more-info-blog", location: "announcement-banner" },
};
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

qiskit-banner {
  display: inline-block;
  width: 100%;
  background: carbon.$cool-gray-20;
  color: inherit;

  a,
  a:visited {
    color: inherit;
  }
}
</style>
