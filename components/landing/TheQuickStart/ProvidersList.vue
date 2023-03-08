<template>
  <section class="providers-list">
    <h4>Providers</h4>
    <ul class="providers-list__list">
      <li v-for="item in providersList" :key="item.id">
        <a class="providers-list__list__item" :href="item.link" target="_blank">
          {{ item.title }}
          <span class="providers-list__list__cta">
            <span class="providers-list__list__cta-label">Learn more</span>
            <Launch16 class="providers-list__list__cta-icon" />
          </span>
        </a>
      </li>
    </ul>
    <AppCta
      class="providers-list__btn"
      v-bind="providersPage"
    />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { GeneralLink } from '~/constants/appLinks'

type ProviderLink = {
  title: string,
  id: string,
  link: string
}

@Component
export default class StartLocally extends Vue {
  @Prop(Array) providersList!: ProviderLink[]

  providersPage: GeneralLink = {
    url: '/providers',
    label: 'See all providers'
  }
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.providers-list {
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

        .providers-list__list__cta {
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
