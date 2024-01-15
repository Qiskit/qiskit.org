<template>
  <bx-ordered-list>
    <bx-list-item>
      Open your Google Calendar by visiting
      <UiLinkText
        :link="{
          url: 'https://calendar.google.com/calendar/u/0/r/settings/addbyurl?pli=1',
        }"
      >
        this link
      </UiLinkText>
    </bx-list-item>
    <bx-list-item
      >Paste the events subscription link you copied above</bx-list-item
    >
    <bx-list-item>Click "Add Calendar"</bx-list-item>
  </bx-ordered-list>
</template>
