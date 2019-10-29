<template>
  <div class="experiment-header-container">
    <div>
      <nuxt-link
        class="experiment-header__back-navigation"
        to="/experiments"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 18">
          <path fill="#999" d="M8.681.196l2.121 2.12-8.484 8.487-2.12-2.12z" />
          <path fill="#999" d="M10.803 15.047l-2.121 2.121L.197 8.683l2.121-2.121z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 18">
          <path fill="#999" d="M8.681.196l2.121 2.12-8.484 8.487-2.12-2.12z" />
          <path fill="#999" d="M10.803 15.047l-2.121 2.121L.197 8.683l2.121-2.121z" />
        </svg>
        Back to experiments
      </nuxt-link>
      <h1>{{ name }}</h1>
      <p class="experiment-header__author">
        {{ authors }}
      </p>
      <Cta
        v-if="launch"
        class="experiment-header__cta"
        :to="launch"
      >
        Launch
      </Cta>
      <Cta
        v-if="source"
        class="experiment-header__cta"
        :to="source"
        secondary
      >
        Explore the code
      </Cta>
      <div class="experiment-header__media">
        <Media
          v-for="(url, index) in media"
          :key="`media-item-${index}`"
          :src="url"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import Cta from '~/components/ctas/Cta.vue'
import Media from '~/components/Media.vue'

@Component({
  components: { Cta, Media }
})
export default class extends Vue {
  @Prop(String) name
  @Prop(String) authors
  @Prop(String) launch
  @Prop(String) source
  @Prop(Array) media
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/mixins.scss';

.experiment-header-container {
  background-color: black;
  padding-top: 1rem;
  padding-bottom: 4rem;

  & > div {
    @include framed();
  }

  h1 {
    font-size: 2.5rem;
    color: white;
  }
}

.experiment-header__author {
  color: var(--secondary-color-lightmost);
  margin: 1rem 0 1rem 0;

  &::before {
    content: "by";
    color: var(--primary-color-lightmost);
  }
}

.experiment-header__back-navigation {
  height: 100%;
  vertical-align: middle;
  display: inline-flex;
  text-decoration: none;
  color: var(--secondary-color-lightmost);
  margin-bottom: 2rem;

  &:hover {
    border-bottom: 1px solid var(--secondary-color-lightmost);
  }

  svg {
    width: 0.5rem;

    path {
      fill: var(--secondary-color-lightmost);
    }

    &:last-child {
      margin-right: 0.25rem;
    }
  }
}

.experiment-header__cta {
  margin-right: 1rem;
}

.experiment-header__media {
  width: 100%;
}

@media (min-width: 600px) {
  .experiment-header__media {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.5rem;

    & > * {
      max-width: 100%;

      &:first-child {
        grid-column-start: 1;
        grid-column-end: 3;
      }
    }
  }
}
</style>
