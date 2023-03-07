<template>
  <section class="providers">
    <h4>Providers</h4>
    <ul class="providers__list">
      <li v-for="item in providersList" :key="item.id">
        <a class="providers__list__item" href="" target="_blank">
          {{ item.title }}
          <span class="providers__list__cta">
            <span class="providers__list__cta-label">Learn more</span>
            <Launch16 class="providers__list__cta-icon" />
          </span>
        </a>
      </li>
    </ul>
    <AppCta
      class="providers__btn"
      v-bind="providersPage"
    />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { GeneralLink } from '~/constants/appLinks'

type ProviderLink = {
  title: string,
  id: string,
  link: string
}

type ProvidersList = Array<ProviderLink>

@Component
export default class StartLocally extends Vue {
  providersPage: GeneralLink = {
    url: '/providers',
    label: 'See all providers'
  }

  // TODO: replace w/ proper provider information and figure out how we'll handle this data
  providersList: ProvidersList = [
    {
      title: 'Provider 1',
      id: '1',
      link: ''
    },
    {
      title: 'Provider 2',
      id: '2',
      link: ''
    },
    {
      title: 'Provider 3',
      id: '3',
      link: ''
    },
    {
      title: 'Provider 4',
      id: '4',
      link: ''
    },
    {
      title: 'Provider 5',
      id: '5',
      link: ''
    },
    {
      title: 'Provider 6',
      id: '6',
      link: ''
    },
    {
      title: 'Provider 7',
      id: '7',
      link: ''
    },
    {
      title: 'Provider 8',
      id: '8',
      link: ''
    },
    {
      title: 'Provider 9',
      id: '9',
      link: ''
    },
    {
      title: 'Provider 10',
      id: '10',
      link: ''
    },
    {
      title: 'Provider 11',
      id: '11',
      link: ''
    },
    {
      title: 'Provider 12',
      id: '12',
      link: ''
    }
  ]
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.providers {
  padding-top: $spacing-05;

  &__list {
    max-height: 29rem;
    overflow-y: scroll;
    margin-bottom: $spacing-07;
    border-bottom: 1px solid $background-color-light;

    &__cta {
      display: flex;
      align-items: center;
      opacity: 0;
    }

    &__item {
      display: flex;
      justify-content: space-between;
      color: $text-color;
      text-decoration: none;
      background-color: $background-color-lighter;
      padding: $spacing-03;
      border-left: 2px solid transparent;
      margin-bottom: $spacing-04;

      &:hover,
      &:focus,
      &:active {
        background-color: $background-color-light;
        cursor: pointer;
        border-left: 2px solid $border-color-secondary;

        .providers__list__cta {
          opacity: 1;
        }
      }
    }

    &__cta-label {
      padding-right: $spacing-03;
      color: $text-active-color;
    }

    &__cta-icon {
      fill: $text-active-color;
    }
  }

  &__btn {
    @include mq($until: large) {
      margin-bottom: $spacing-07;
    }
  }
}
</style>
