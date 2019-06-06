<template>
  <div>
    <Menu>
      <li><a href="#gather-together">Gather together</a></li>
      <li><a href="#get-involved">Get involved</a></li>
    </Menu>
    <nuxt />
    <footer>
      <p>Copyright IBM Corp. 2018-2019</p>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Menu from '~/components/Menu.vue'
import { Component } from 'vue-property-decorator';

@Component({
  components: {
    Menu
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

* {
  margin: 0;
  padding: 0;
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

footer {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 10rem;
  text-align: center;
  margin-top: 4rem;
  background-color: #0A1D8F;
}
</style>
