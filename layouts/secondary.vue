<template>
  <div class="wrapper">
    <Menu>
      <!--<li><a href="/">Home</a></li>
      <li><a href="/events/">Events</a></li>
      <li><a href="/advocates">Advocates</a></li> -->
    </Menu>
    <nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import Menu from '~/components/BlankMenu.vue'
import Footer from '~/components/Footer.vue'

@Component({ components: { Menu, Footer } })
export default class extends Vue { };
</script>

<style>
@import url(~/static/css/fonts.css);
@import url(~/static/css/config.css);
@import url(~/static/css/theme.css);
</style>
