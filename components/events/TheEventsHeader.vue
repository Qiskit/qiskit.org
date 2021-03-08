<template>
  <AppPageHeader bg-grid fixed-height>
    Join <TypewriterEffect
      :values="[
        'events',
        'hackathons',
        'camps',
        'unconferences',
        'talks'
      ]"
    /> from the world&rsquo;s largest
    quantum computing community
  </AppPageHeader>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class TheEventsHeader extends Vue { }
</script>
