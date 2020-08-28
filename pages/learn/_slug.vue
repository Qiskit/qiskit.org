<template>
  <div class="learn-entry">
    <main v-html="pageContent.html" />
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import { Context } from '@nuxt/types'
import QiskitPage from '~/components/logic/QiskitPage.vue'

@Component({
  layout: 'learn',
  head () {
    const self = this as any

    return { title: self.title }
  },
  async asyncData (context: Context) {
    const sourceName = context.route.params.slug
    if (sourceName === 'undefined') {
      return
    }
    const pageContent = await import(`~/content/learn/${sourceName}.md`)
    return { pageContent }
  }
})
export default class extends QiskitPage {}
</script>

<style lang="scss">
.learn-entry {
  background-color: white;
}

.learn-entry a {
  text-decoration: none;
}

.learn-entry main {
  @include contained();
  background-color: transparent;
  background-image: none;
}

.learn-entry h2 {
  padding-top: 4rem;
  margin: 0 0 2rem;
  color: #0A1D8F;

  &::before {
    content: "";
    float: left;
    width: 5%;
    margin-top: 0.5rem;
    margin-right: 5%;
    border-top: 1px solid #0A1D8F;
  }
}

.learn-entry h3 {
  font-weight: bold;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}

.learn-entry h3 strong {
  font-weight: bold;
}

.learn-entry table {
  margin: $layout-05 5%;
}

.learn-entry table td {
  text-align: center;
  padding: 1.2rem 1.2rem 1rem 0;
  border-bottom: 1px dotted #0A1D8F;
}

.learn-entry table tr td:first-child {
  text-align: left;
}
</style>
