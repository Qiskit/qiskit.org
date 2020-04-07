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
@import '~carbon-components/scss/globals/scss/typography';

.legacy-section {
  & > div {
    @include framed();

    display: flex;
    flex-direction: row;
    padding-top: 2.4rem;
    padding-bottom: 2.4rem;
  }

  article {
    min-width: 0;
    margin-right: 3rem;
    flex: 3;

    &:last-child {
      margin-right: 0;
    }

    h2 {
      @include code-08();
    }

    p {
      @include type-style('body-long-02');
      /* TODO: Remove when adapting to Carbon. Should be regulated by the type style. */
      line-height: 2rem;
      margin-top: 0.9rem;
      margin-bottom: 0.9rem;

      a {
        color: black;
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
  .legacy-section {
    & > div {
      flex-direction: column;
    }

    article {
      margin-right: 0;
      margin-bottom: 2rem;
    }
  }
}
</style>
