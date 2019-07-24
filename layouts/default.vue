<template>
  <div class="wrapper">
    <Menu>
      <li><a href="/">Home</a></li>
      <li><a href="/events/">Events</a></li>
      <!-- <li><a href="/advocates">Advocates</a></li> -->
    </Menu>
    <header>
      <video src="video/qiskit-camp-community.mp4" muted autoplay loop />
      <section>
        <img alt="Qiskit Logo" src="/images/qiskit-logo.png">
        <div>
          <h1>Welcome to the Qiskit Community!</h1>
        </div>
      </section>
    </header>
    <nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import Menu from '~/components/Menu.vue'
import Footer from '~/components/Footer.vue'

@Component({ components: { Menu, Footer } })
export default class extends Vue { };
</script>

<style>
@import url(~/static/css/fonts.css);
@import url(~/static/css/config.css);
@import url(~/static/css/theme.css);

header {
  position: relative;
  top: 63px;
  height: calc(100vh - 63px);
  width: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--dark-color)
}

header video {
  position: absolute;
  left: 50%;
  top: 0;
  height: 100vh;
  width: auto;
  transform: translateX(-50%);
}

header > section {
  position: relative;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

header > section > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

header img {
  height: 10vw;
  min-height: 10rem;
  max-height: 14rem;
}

header h1 {
  margin-left: 1.5rem;
}

@media (max-width: 800px) {

  header section {
    display: block;
    text-align: center;
  }

  header h1 {
    margin: 0;
    margin-top: 2rem;
  }

}

@media (max-height: 390px) {
  header h1 {
    margin: 0;
    margin-top: 0.5rem;
  }

  header section {
    padding: 1rem;
  }
}
</style>
