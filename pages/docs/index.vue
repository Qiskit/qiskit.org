<template>
<main class='docs-page'>
    <cv-side-nav id="side-nav" fixed expanded>
      <p class="sidebar-title">{{docsContext.docstitle}}</p>
      <div style="margin: 20px">do something with search bar here</div>
        <cv-side-nav-items>
          <div v-for="(heading, idx) in docsContext.sidebar_headings" :key="idx">
            <cv-side-nav-menu 
              v-if="heading.subheadings"
              :title="heading.title">
              <cv-side-nav-menu-item 
                v-for="(subheading, idx) in heading.subheadings"
                :key="idx"
                :href="subheading.url">
                {{subheading.title}}
              </cv-side-nav-menu-item>
            </cv-side-nav-menu>
            <cv-side-nav-link v-else :href="heading.url">
              {{heading.title}}
            </cv-side-nav-link>
            <cv-side-nav-divider />
          </div>
        </cv-side-nav-items>
      </cv-side-nav>
  <div class="docs-body" v-html="docs.body"></div>
  <div class="right-menu" v-html="docs.toc"></div>
</main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import docsData from '~/content/docs/circuit.json'
import docsContext from '~/content/docs/globalcontext.json'

@Component({
  layout: 'default-max',
  head () {
    return {
      title: 'Documentation'
    }
  },
  data() {
    return {
      docs: docsData,
      docsContext: docsContext
    }
  }
})
export default class DocsPage extends QiskitPage {
  routeName = 'docs'
}
</script>

<style lang="scss">
  .docs-page {
    display: flex;
    flex-direction: row;
  }

  .cv-side-nav {
    z-index: unset;
    margin-top: 3.5rem;
    background-color: $background-color-lighter;

    a.bx--side-nav__link::before {
      background-color: $active-color;
    }

    p {
      margin: 0;
    }

    .sidebar-title {
      padding: $spacing-05 $spacing-03 0 $spacing-03 ;
      text-align: center;
      font-weight: bold;
    }
  }

  .docs-body {
    margin-left: 275px;
    margin-top: 25px;
    width: 80%;
  }

  .right-menu {
    width: 20%;
    height: 100%;
    padding: $spacing-03;

    ul > li > a.reference.internal {
    color: $link-color-secondary;
    margin: $spacing-05;
    text-decoration: none;
    }

    ul > li > ul {
      margin-left: $spacing-05;
    }
  }

  a {
    color: $focus-color;
  } 
</style>