<template>
  <section class="providers-list">
    <h4>Providers</h4>
    <ul class="providers-list__list">
      <template v-for="(item, index) in providersList">
        <li
          v-if="item.docsCta"
          :key="index"
          class="providers-list__list-item"
          :class="activeIndex === index ? 'providers-list__list-item_active' : 'providers-list__list-item_inactive'"
          tabindex="0"
          @click="updateSelectedProvider(index)"
        >
          {{ item.title }}
          <AppCta
            class="providers-list__list__cta"
            v-bind="{ url: item.docsCta.url, label: `Learn more` }"
            kind="ghost"
          />
        </li>
      </template>
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
import { ProviderObject } from '~/constants/providersContent'

@Component
export default class StartLocally extends Vue {
  @Prop(Array) providersList!: ProviderObject[]

  providersPage: GeneralLink = {
    url: '/providers',
    label: 'See all providers',
    segment: {
      cta: 'see-all-providers',
      location: 'quick-start'
    }
  }

  activeIndex = 0

  updateSelectedProvider (selectedProviderIndex: number):void {
    this.activeIndex = selectedProviderIndex
    this.$emit('select-provider', selectedProviderIndex)
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
      opacity: 0;
      width: initial;

      &:focus {
        opacity: 1;
        outline: initial;
      }
    }

    &-item {
      display: flex;
      justify-content: space-between;
      color: $text-color;
      padding: $spacing-03 $spacing-05 $spacing-03 $spacing-03;
      border-left: 2px solid transparent;
      margin-bottom: $spacing-04;
      max-height: 2.5rem;
      align-items: center;

      &_inactive {
        background-color: $background-color-lighter;
      }

      &_active {
        background-color: $background-color-light;
        border-left: 2px solid $border-color-secondary;

        .providers-list__list__cta {
          opacity: 1;
        }
      }

      &:hover,
      &:focus,
      &:active {
        background-color: $background-color-light;
        border-left: 2px solid $border-color-secondary;
        border: 1px solid $border-color-secondary;
        outline: initial;

        .providers-list__list__cta {
          opacity: 1;
        }
      }
    }
  }

  &__btn {
    @include mq($until: large) {
      margin-bottom: $spacing-07;
    }
  }
}
</style>
