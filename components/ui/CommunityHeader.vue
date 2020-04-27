<template>
  <section
    :class="{
      'community-header': true,
      'community-header_background_gradient': !noGradient
    }"
  >
    <article
      :class="{
        'community-header__content': true,
        'community-header__content_reversed': asidePosition == 'start'
      }"
    >
      <section class="community-header__main-content">
        <h1 class="community-header__title">
          {{ mainTitle }}
        </h1>
        <div class="community-header__description">
          <slot />
        </div>
      </section>
      <aside
        v-if="this.$slots.extra"
        class="community-header__aside"
      >
        <slot name="extra" />
      </aside>
    </article>
    <aside
      v-if="this.$slots.features"
      class="community-header__features"
    >
      <slot name="features" />
    </aside>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop(String) mainTitle!: string
  @Prop({ type: String, default: 'end' }) asidePosition!: 'start'|'end'
  @Prop({ type: Boolean, default: false }) noGradient!: boolean
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.community-header {
  color: var(--community-header__text-color, white);
  background-color: var(--community-header__background-color, $ui-background);

  height: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;

  &_background_gradient {
    background-image: linear-gradient(150deg,
      $purple-60 15%,
      $purple-50 70%,
      $purple-30 94%);
  }

  &__main-content {
    flex: 1;
  }

  &__title {
    @include productive-heading-09();
  }

  &__content {
    @include framed();
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    color: currentColor;

    @include mq($until: medium) {
      flex-direction: column;
      text-align: center;
    }

    &_reversed {
      flex-direction: row-reverse;

      @include mq($until: medium) {
        flex-direction: column-reverse;
      }
    }
  }

  &__features {
    @include framed();
    display: flex;
    flex-direction: row;
    color: $text-01;
    margin-top: 4rem;
  }
}
</style>
