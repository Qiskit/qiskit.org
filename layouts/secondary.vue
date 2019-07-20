<template>
  <div class="wrapper">
    <Menu>
      <li><a href="/">Home</a></li>
      <li><a href="/events/">Events</a></li>
      <!-- <li><a href="/advocates">Advocates</a></li> -->
    </Menu>
    <nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Menu from '~/components/Menu.vue'
import Footer from '~/components/Footer.vue'
import { Component } from 'vue-property-decorator'

@Component({
  components: {
    Menu,
    Footer
  }
})
export default class extends Vue { };
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
  --secondary-color: rgb(103, 58, 183);
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
  background-image: url('/img/dots.svg'), url('/img/dots.svg'), url('/img/dots.svg'),
    url('/img/lines.svg'), url('/img/lines.svg'), url('/img/lines.svg');
  background-repeat: repeat-x, repeat-x, repeat-x, repeat-y, repeat-y, repeat-y;
  background-position: top calc(100vh + 890px) left 0, top calc(100vh + 930px) left 0, top calc(100vh + 970px) left 0,
    top 0 right 100px, top 0 right 0, top 0 right -100px;
}

.wrapper {
  display: flex;
  flex-direction: column;
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
</style>
