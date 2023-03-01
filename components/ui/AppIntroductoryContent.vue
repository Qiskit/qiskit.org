<template>
  <article class="app-introductory-content">
    <div class="bx--grid bx--no-gutter">
      <div class="bx--row">
        <div class="bx--col-lg-4">
          <div class="app-introductory-content__overview">
            <h2 v-text="title" />
            <p class="app-introductory-content__description">
              {{ description }}
            </p>
            <AppCta
              v-if="link"
              v-bind="link"
              kind="ghost"
            />
            <template v-if="linkset">
              <AppCta
                v-for="link in linkset"
                v-bind="link"
                :key="link"
                kind="ghost"
              />
            </template>
          </div>
        </div>
        <div class="bx--col-lg-12">
          <slot />
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { NavLink } from '~/constants/menuLinks'

@Component
export default class AppIntroductoryContent extends Vue {
  @Prop(String) title!: string
  @Prop(String) description!: string
  @Prop(Object) link!: NavLink
  @Prop(Array) linkset!: NavLink[]
}
</script>

<style lang="scss" scoped>
.app-introductory-content {

  @include mq($until: large) {
    display: block;
  }

  &__overview {
    @include mq($from: large) {
      position: sticky;
      top: 4.5rem;
    }
  }

  &__description {
    margin-bottom: $spacing-07;
  }
}
</style>
