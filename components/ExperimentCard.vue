<template>
  <article
    class="experiment"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <a
      v-if="to"
      :href="to"
      :target="isPointingOutside ? '_blank' : '_self'"
      rel="noopener"
    />
    <div class="stump" />
    <h3 v-if="title">
      {{ title }}
    </h3>
    <section class="author">
      by {{ author }}
    </section>
    <section v-if="info" v-html="info" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop(String) title
  @Prop(String) author
  @Prop(String) image
  @Prop({ default: '' }) to
  @Prop(String) info

  get isPointingOutside() {
    return this.$props.to.startsWith('http')
  }
};
</script>

<style scoped>
.experiment {
  background-color: white;
  position: relative;
  transition: box-shadow 0.2s;
  background-position: top right;
  background-size: cover;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  background-color: var(--secondary-color, white);
}

.experiment[small] {
  min-height: 7.5rem;
}

.experiment > a {
  color: black;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.experiment > a:hover {
  opacity: 1.0;
}

.experiment h3 {
  padding: 0 1rem;
  margin: 1rem 0 0 0;
  background-color: white;
  display: inline-block;
}

.experiment h3:last-child {
  padding-bottom: 1rem;
}

.experiment .author {
  color: grey;
  padding-bottom: 0;
}

.experiment section {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 1rem;
  align-self: stretch;
}

.stump {
  min-height: 5rem;
}

[major] .stump {
  min-height: 15rem;
}
</style>
