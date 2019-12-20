<template>
  <div>
    <Menu>
      <li
        v-for="link in event.attributes.nav"
        :key="link.goTo"
      >
        <nuxt-link :to="link.goTo">
          {{ link.text }}
        </nuxt-link>
      </li>
    </Menu>
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
    <main v-html="event.html" />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { Context } from '@nuxt/types'
import Menu from '~/components/Menu.vue'
import Footer from '~/components/Footer.vue'
import { segmentMixin } from '~/mixins/segment-mixin.ts'


function getBackgroundUris (background: string): [string, string] {
  const bgRoute = '/images/events/headers/'
  const lBackgroundUri = `${bgRoute}${background}-low-res.jpg`
  const hBackgroundUri = `${bgRoute}${background}-hi-res.jpg`
  return [lBackgroundUri, hBackgroundUri]
}

@Component({
  layout: 'event',
  mixins: [segmentMixin],
  components: {
    Menu,
    Footer
  },
  head () {
    const self = this as any

    return {
      title: self.title
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
export default class extends Vue { }
</script>

<style>
@font-face {
  font-family: 'IBM Plex Mono';
  font-style: normal;
  font-weight: 400;
  src: local("IBM Plex Mono"), local("IBMPlexMono"), url("/fonts/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-Regular.woff") format("woff");
}

@font-face {
  font-family: 'IBM Plex Mono';
  font-style: italic;
  font-weight: 400;
  src: local("IBM Plex Mono Italic"), local("IBMPlexMono-Italic"), url("/fonts/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-Italic.woff") format("woff");
}

@font-face {
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  src: local("IBM Plex Sans"), local("IBMPlexSans"), url("/fonts/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-Regular.woff") format("woff");
}

:root {
  --secondary-color: rgb(138, 63, 252);
  --dark-color: rgb(33, 37, 43);
}

* {
  margin: 0;
  padding: 0;
}

ul {
  margin: 1rem 0 1rem 3rem;
}

a {
  text-decoration: none;
  color: #4A90E2;
}

a:hover {
  opacity: 0.6;
}

html {
  font-family: 'IBM Plex Sans', sans-serif;
  /* min-fs + (max-fs - min-fs) * ((viewport-width - min-vw) / (max-vw - min-vw)) */
  font-size: calc(10px + (18 - 10) * ((900px - 340px) / (900 - 340)));
  background-image: url('/images/events/deco/dots.svg'), url('/images/events/deco/dots.svg'), url('/images/events/deco/dots.svg'),
    url('/images/events/deco/lines.svg'), url('/images/events/deco/lines.svg'), url('/images/events/deco/lines.svg');
  background-repeat: repeat-x, repeat-x, repeat-x, repeat-y, repeat-y, repeat-y;
  background-position: top calc(100vh + 890px) left 0, top calc(100vh + 930px) left 0, top calc(100vh + 970px) left 0,
    top 0 right 100px, top 0 right 0, top 0 right -100px;
}

h2::before {
  content: "";
  float: left;
  width: 5%;
  margin-top: 0.5rem;
  margin-right: 5%;
  border-top: 1px solid #0A1D8F;
}

h2 {
  margin: 2rem 0 2.5rem;
  color: #0A1D8F;
}

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

main .cta {
  border-color: black;
}

main > :not(h2):not(iframe):not(table) {
  margin-left: 10%;
  margin-right: 1.5rem;
  line-height: 1.4rem;
  margin-bottom: 1rem;
  max-width: 30rem;
}

main ul {
  list-style-type: square;
  padding-left: 2rem;
  margin-bottom: 2rem;
}

main ul li {
  margin: 0.5rem 0;
}

main .clarification {
  font-size: 0.7rem;
  line-height: 1rem;
}

h2 {
  padding-top: 4rem;
  margin: 0 0 2rem;
  color: #0A1D8F;
}

h2::before {
  content: "";
  float: left;
  width: 5%;
  margin-top: 0.5rem;
  margin-right: 5%;
  border-top: 1px solid #0A1D8F;
}

.agenda h2 {
  margin-bottom: 0.5rem;
}

.agenda .location {
  font-weight: bold;
  padding-left: 10%;
  margin-bottom: 3rem;
}

h3 {
  font-weight: bold;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}

.agenda h3 {
  margin-top: 0;
}

h3 strong {
  font-weight: bold;
}

table {
  margin-left: 10%;
}

table tr td.time {
  color: #0A1D8F;
}

table td {
  text-align: center;
  padding: 1.2rem 1.2rem 1rem 0;
  border-bottom: 1px dotted #0A1D8F;
}

table tr td:first-child {
  text-align: left;
}

td.multislot {
  vertical-align: top;
}

.session {
  margin-bottom: 1rem;
}

.author {
  font-style: italic;
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
