<template>
  <section class="legacy-section">
    <div>
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop(Boolean) colored;
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/mixins.scss';

.legacy-section {
  background-color: white;

  & > div {
    @include framed();

    display: flex;
    flex-direction: row;
    padding-top: 2.4rem;
    padding-bottom: 2.4rem;
  }

  article {
    margin-right: 3rem;
    flex: 3;

    h2 {
      font-size: 1.5rem;
      font-weight: 300;
      font-family: 'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace;
      margin-bottom: 1.5rem;
    }

    p {
      font-weight: normal;
      font-size: 0.85rem;
      line-height: 1.7rem;
      margin-top: 0.9rem;

      a {
        color: black;
        font-style: italic;
      }
    }
  }

  aside {
    flex: 2;

    img {
      max-width: 100%;
    }
  }
}

@media (max-width: 600px) {
  .importance--decoration {
    display: none;
  }

  .copy-container {
    width: 100%;
  }
}
</style>
