<template>
  <header class="legacy-presentation">
    <div>
      <img
        class="legacy-presentation__image"
        :src="image"
        :alt="`${title} logo`"
      >
      <div class="legacy-presentation__info">
        <h1 class="legacy-presentation__title">
          {{ title }}
        </h1>
        <p class="legacy-presentation__description">
          {{ description }}
        </p>
        <Cta
          v-if="to"
          :to="to"
          @click="segmentAction && $trackClickEvent({
            action: segmentAction
          })"
        >
          Get Started!
        </Cta>
        <Cta
          v-if="sources"
          :to="sources"
          type="tertiary"
          @click="segmentAction && $trackClickEvent({
            action: segmentAction
          })"
        >
          <div class="social-network">
            <svg viewBox="0 0 24 24" width="24" height="24" aria-labelledby="github-icon" role="img"><title id="github-icon">GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
            <span class="name">GitHub</span>
          </div>
        </Cta>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import Cta from '~/components/ctas/Cta.vue'

@Component({
  components: { Cta }
})
export default class extends Vue {
  @Prop(String) image
  @Prop(String) title
  @Prop(String) description
  @Prop({ type: String, required: false }) to
  @Prop({ type: String, required: false }) sources
  @Prop(String) segmentAction
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.legacy-presentation {
  color: var(--legacy-presentation-text-color, white);
  background-color: var(--legacy-presentation-color, $ui-background);
  min-height: 340px;
  display: flex;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;

  & > div {
    @include framed();

    display: flex;
    justify-content: center;
    text-align: left;
    align-items: center;
    width: 100%;
  }

  &__info {
    flex: 1;
  }

  &__title {
    @include code-09();
  }

  &__description {
    @include type-style('productive-heading-04');
    margin: 1.1rem 0;
  }

  &__image {
    width: 200px;
    height: 200px;
    margin-right: 3em;
  }
}

.social-network {
  display: flex;
  align-items: center;

  .name {
    padding-left: 0.4rem;
  }

  svg {
    width: 0.8rem;
    height: 0.8rem;
  }
}

@include mq($until: medium) {
  .legacy-presentation {
    & > div {
      flex-direction: column;
    }

    * {
      text-align: center;
    }

    &__image {
      width: 128px;
      height: 128px;
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
}
</style>
