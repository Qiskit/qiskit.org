<template>
  <div class="event-page">
    <EventMenu>
      <li
        v-for="link in event.attributes.nav"
        :key="link.goTo"
      >
        <nuxt-link :to="link.goTo">
          {{ link.text }}
        </nuxt-link>
      </li>
    </EventMenu>
    <header
      :style="{
        backgroundImage: `url(${uri.hBackground}), url(${uri.lBackground})`
      }"
    >
      <section class="headlines">
        <h1>{{ event.attributes.title }}</h1>
        <p>{{ event.attributes.tagline }}</p>
        <p>{{ event.attributes.dates }}<br></p>
      </section>
      <section class="scroll-down">
        <div class="icon-scroll" />
        <p>Scroll-down for further info</p>
      </section>
    </header>
    <!-- TODO: We should migrate to nuxt-content and get rid of this. -->
    <!-- eslint-disable vue/no-v-html -->
    <main v-html="event.html" />
    <!-- eslint-enable -->
    <EventFooter />
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import { Context } from '@nuxt/types'
import QiskitPage from '~/components/logic/QiskitPage.vue'

function getBackgroundUris (background: string): [string, string] {
  const bgRoute = '/images/events/headers/'
  const lBackgroundUri = `${bgRoute}${background}-low-res.jpg`
  const hBackgroundUri = `${bgRoute}${background}-hi-res.jpg`
  return [lBackgroundUri, hBackgroundUri]
}

@Component({
  layout: 'event',
  head () {
    const self = this as any

    return {
      title: self.title,
      bodyAttrs: {
        id: 'event-body'
      }
    }
  },
  async asyncData (context: Context) {
    const sourceName = context.route.params.slug
    if (sourceName === 'undefined') {
      return
    }
    const definition = await import(`~/content/events/${sourceName}.md`)
    const [lBackgroundUri, hBackgroundUri] =
      getBackgroundUris(definition.attributes.background)
    return {
      event: definition,
      uri: {
        hBackground: hBackgroundUri,
        lBackground: lBackgroundUri
      }
    }
  }
})
export default class EventEntry extends QiskitPage {
  routeName = 'events-entry'
}
</script>

<style scoped>
header {
  position: relative;
  height: 100vh;
  color: white;
  text-align: center;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-color: rgb(103, 58, 183);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-shadow: -1px 0 black, 0 1px #000, 1px 0 black, 0 -1px black
}

/* Hack to target Safari only and disable the fixed effect which seems broken
in the latest version of the browser. */
@media not all and (min-resolution:.001dpcm) {
  @media {
    header {
      background-attachment: scroll;
    }
  }
}

header p {
  margin: 0.8rem;
}

header .headlines {
  margin-top: 60px;
}

.interest {
  margin-top: 2rem;
}

.sign-up {
  display: inline-block;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: bold;
  color: white;
  text-decoration: none;
  background-color: transparent;
  border: 1px solid white;
  padding: 0.7rem 2rem;
  margin-top: 2rem;
}

.scroll-down {
  margin-top: 2rem;
  position: relative;
  font-style: italic;
}

.icon-scroll {
  width: 30px;
  height: 53px;
  margin: 0 auto;
  box-shadow: inset 0 0 0 3px #fff;
  border-radius: 25px;
}

.icon-scroll:before {
  position: absolute;
}

.icon-scroll:before {
  content: '';
  width: 8px;
  height: 8px;
  background: #fff;
  margin-left: -4px;
  top: 8px;
  border-radius: 4px;
  animation: scroll 1.5s infinite;
}

@keyframes scroll {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translateY(46px);
  }
}

@media (max-height: 500px) {
  .headlines {
    font-size: 0.9em;
    margin-top: 4.4rem;
    margin-bottom: -6rem;
  }

  .headlines h1 {
    margin-bottom: 0;
  }
}

@media (max-height: 320px) {
  .headlines {
    font-size: 0.9em;
    margin-top: 6.5rem;
    margin-bottom: -7rem;
  }

  .icon-scroll {
    display: none;
  }
}

</style>

<style>
#event-body a {
  text-decoration: none;
}

#event-body {
  background-color: white;
  background-image: url('/images/events/deco/dots.svg'), url('/images/events/deco/dots.svg'), url('/images/events/deco/dots.svg'),
    url('/images/events/deco/lines.svg'), url('/images/events/deco/lines.svg'), url('/images/events/deco/lines.svg');
  background-repeat: repeat-x, repeat-x, repeat-x, repeat-y, repeat-y, repeat-y;
  background-position: top calc(100vh + 890px) left 0, top calc(100vh + 930px) left 0, top calc(100vh + 970px) left 0,
    top 0 right 100px, top 0 right 0, top 0 right -100px;
  color: black;
}

#event-body h2::before {
  content: "";
  float: left;
  width: 5%;
  margin-top: 0.5rem;
  margin-right: 5%;
  border-top: 1px solid #0A1D8F;
}

#event-body h2 {
  margin: 2rem 0 2.5rem;
  color: #0A1D8F;
}

#event-body main {
  background-color: transparent;
  background-image: none;
}

#event-body main .cta {
  border-color: black;
}

#event-body main > :not(h2):not(iframe):not(table) {
  margin-left: 10%;
  margin-right: 1.5rem;
  line-height: 1.4rem;
  margin-bottom: 1rem;
  max-width: 30rem;
}

#event-body main ul {
  list-style-type: square;
  padding-left: 2rem;
  margin-bottom: 2rem;
}

#event-body main ul li {
  margin: 0.5rem 0;
}

#event-body main .clarification {
  font-size: 0.7rem;
  line-height: 1rem;
}

#event-body h2 {
  padding-top: 4rem;
  margin: 0 0 2rem;
  color: #0A1D8F;
}

#event-body h2::before {
  content: "";
  float: left;
  width: 5%;
  margin-top: 0.5rem;
  margin-right: 5%;
  border-top: 1px solid #0A1D8F;
}

#event-body .agenda h2 {
  margin-bottom: 0.5rem;
}

#event-body .agenda .location {
  font-weight: bold;
  padding-left: 10%;
  margin-bottom: 3rem;
}

#event-body h3 {
  font-weight: bold;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}

#event-body .agenda h3 {
  margin-top: 0;
}

#event-body h3 strong {
  font-weight: bold;
}

#event-body table {
  margin-left: 10%;
}

table tr td.time {
  color: #0A1D8F;
}

#event-body table td {
  text-align: center;
  padding: 1.2rem 1.2rem 1rem 0;
  border-bottom: 1px dotted #0A1D8F;
}

#event-body table tr td:first-child {
  text-align: left;
}

#event-body td.multislot {
  vertical-align: top;
}

#event-body .session {
  margin-bottom: 1rem;
}

#event-body .author {
  font-style: italic;
}
</style>
