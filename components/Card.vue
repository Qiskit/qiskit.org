<template>
  <article
    class="card"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <h3>{{ title }}</h3>
    <section v-if="info" v-html="info" />
    <a
      v-if="to"
      :href="to"
      target="_blank"
      rel="noopener"
    />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({
  props: {
    title: String,
    image: String,
    to: {
      type: String,
      default: ''
    },
    info: String
  }
})
export default class extends Vue { };
</script>

<style scoped>
.card {
  border: 1px solid #cccccc;
  box-shadow: 0 0 2rem 0rem rgba(0, 0, 0, 0.2);
  background-color: white;
  min-height: 15rem;
  position: relative;
  transition: box-shadow 0.2s;
  background-position: center;
}

.card[small] {
  min-height: 7.5rem;
}

.card:hover {
  box-shadow: 0 0rem 1rem 0rem rgba(0, 0, 0, 0.4);
}

.card > a {
  color: black;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.card > a:hover {
  opacity: 1.0;
}

.card h3 {
  padding: 0 1rem;
  margin: 1rem 0 0 0;
  background-color: white;
  display: inline-block;
}

.card section {
  background-color: rgba(255, 255, 255, 0.9);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30%;
  padding: 1rem;
}
</style>
