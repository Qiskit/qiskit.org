<template>
  <bx-ordered-list>
    <bx-list-item>
      Open your Google Calendar by visiting
      <UiLink
        url="https://calendar.google.com/calendar/u/0/r/settings/addbyurl?pli=1"
      >
        this link
      </UiLink>
    </bx-list-item>
    <bx-list-item
      >Paste the events subscription link you copied above</bx-list-item
    >
    <bx-list-item>Click "Add Calendar"</bx-list-item>
  </bx-ordered-list>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/list/index.js";
</script>
