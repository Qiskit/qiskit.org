<template>
  <article class="advocate-card">
    <figure>
      <img :src="image" :alt="name">
    </figure>
    <div class="content">
      <p class="bold">
        <strong>{{ name }}</strong>
      </p>
      <p>{{ location }}</p>
      <p class="bold">
        <strong>Focus Areas</strong>
      </p>
      <p>{{ areas }}</p>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop(String) name
  @Prop(String) image
  @Prop(String) location
  @Prop(String) areas
}
</script>

<style scoped>
.advocate-card {
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: white;
}

figure {
  width: 6rem;
  margin: 0 auto;
}
img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
p {
  font-size: 0.8em;
}
p.bold {
  margin-top: 1em;
  font-size: 1em;
  font-weight: 800;
}
</style>
