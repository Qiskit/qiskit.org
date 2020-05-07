<template>
  <div class="experiment-header-container">
    <div>
      <AppLink
        class="experiment-header__back-navigation"
        v-bind="{ url: '/experiments' }"
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
      </AppLink>
      <h1>{{ name }}</h1>
      <p class="experiment-header__meta">
        <span class="experiment-header__author">
          {{ authors }}
        </span>
        |
        <AppLink
          class="experiment-header__source-code-link"
          v-bind="{ url: source, label: 'Explore the code'}"
        />
      </p>
      <Cta v-if="launch" :link="{ url: launch, label: 'Launch' }" />
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
import Cta from '~/components/ui/Cta.vue'
import Media from '~/components/ui/Media.vue'
import AppLink from '~/components/ui/AppLink.vue'

@Component({
  components: { Cta, Media, AppLink }
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
@import '~carbon-components/scss/globals/scss/typography';

.experiment-header-container {
  background-color: $ui-background;
  padding-top: 1rem;
  padding-bottom: 4rem;

  & > div {
    @include framed();
  }

  h1 {
    @include type-style('productive-heading-07');
    color: $text-01;
  }
}

.experiment-header__meta {
  @include type-style('body-short-01');
  color: $purple-30;
  margin: 1rem 0 1rem 0;
}

.experiment-header__author {
    &::before {
    content: "by";
    color: $text-02;
  }
}

.experiment-header__source-code-link {
  color: currentColor;
}

.experiment-header__back-navigation {
  @include type-style('label-01');
  height: 100%;
  vertical-align: middle;
  display: inline-flex;
  text-decoration: none;
  color: $text-02;
  margin-bottom: 2rem;

  &:hover {
    color: $text-02;
    border-bottom: 1px solid $text-02;
  }

  svg {
    width: 0.5rem;

    path {
      fill: $text-02;
    }

    &:last-child {
      margin-right: 0.25rem;
    }
  }
}

.experiment-header__media {
  margin-top: 1rem;
  width: 100%;

  & > * {
    @include mq($from: medium) {
      max-width: 100%;
    }

    &:first-child {
      @include mq($from: medium) {
        grid-column-start: 1;
        grid-column-end: 3;
      }
    }
  }

  @include mq($from: medium) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.5rem;
  }
}
</style>
