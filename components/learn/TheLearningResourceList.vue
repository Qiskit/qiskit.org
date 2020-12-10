<template>
  <section class="the-learning-resources-list">
    <div class="the-learning-resources-list__container">
      <h2 class="copy__title">
        Learning resources
      </h2>
      <p
        class="
          copy__paragraph
          copy__paragraph_importance_outstanding
        "
      >
        The below are designed and created by the Qiskit team. However, we
        recommend a familiarity with <AppLink url="https://www.khanacademy.org/math/linear-algebra">
          linear algebra
        </AppLink> and <AppLink url="https://www.coursera.org/specializations/python">
          Python
        </AppLink> from these
        trusted resources.
      </p>
      <client-only>
        <cv-tabs
          class="the-learning-resources-list__filter-level"
          aria-label="navigation tab label"
          no-default-to-first
          @tab-selected="selectTopFilter"
        >
          <cv-tab
            v-for="filter in topFilters"
            :key="filter"
            :label="filter"
            :selected="filter === activeTopFilter"
          />
        </cv-tabs>
      </client-only>
      <div class="the-learning-resources-list__layout">
        <fieldset class="the-learning-resources-list__filter-time">
          <legend
            class="
                the-learning-resources-list__filter-time-label
                the-learning-resources-list__medium-large-only
              "
          >
            Time to spend learning
          </legend>
          <client-only>
            <cv-dropdown
              class="the-learning-resources-list__small-only"
              :value="activeAsideFilter"
              @change="selectAsideFilter($event)"
            >
              <cv-dropdown-item
                v-for="filter in asideFilters"
                :key="filter"
                :value="filter"
              >
                {{ filter }}
              </cv-dropdown-item>
            </cv-dropdown>
            <cv-radio-group
              class="the-learning-resources-list__medium-large-only"
              vertical
            >
              <cv-radio-button
                v-for="filter in asideFilters"
                :key="filter"
                name="aside-filter"
                :value="filter"
                :label="filter"
                :checked="filter === activeAsideFilter"
                :aria-checked="filter === activeAsideFilter"
                @change="selectAsideFilter(filter)"
              />
            </cv-radio-group>
          </client-only>
        </fieldset>
        <section class="the-learning-resources-list__results">
          <slot />
        </section>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class TheLearningResourceList extends Vue {
  @Prop({ type: Array, default: [] }) topFilters!: Array<string>
  @Prop(String) activeTopFilter!: string

  @Prop({ type: Array, default: [] }) asideFilters!: Array<string>
  @Prop(String) activeAsideFilter!: string

  selectTopFilter (tabIndex: number) {
    const topFilterValue = this.topFilters[tabIndex]
    if (this.activeTopFilter === topFilterValue) {
      return
    }
    this.$emit('top-filter-changed', topFilterValue)
  }

  selectAsideFilter (asideFilterValue: string): void {
    if (this.activeAsideFilter === asideFilterValue) {
      return
    }
    this.$emit('aside-filter-changed', asideFilterValue)
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/copy.scss';
@import '~carbon-components/scss/globals/scss/typography';

.the-learning-resources-list {
  @include responsive-grid-bg('/images/grid/grid-left-inverted.svg', 36rem);
  background-repeat: no-repeat;
  background-position: left bottom;

  &__container {
    @include contained();
  }

  &__layout {
    display: flex;
    justify-content: space-between;

    @include mq($until: medium) {
      display: block;
    }
  }

  &__filter-level {
    margin-bottom: $layout-04;

    @include mq($until: medium) {
      margin-bottom: $layout-01;
    }
  }

  &__filter-time {
    margin-right: $layout-03;
    color: $cool-gray-80;
    flex: 0 0 25%;

    @include mq($until: medium) {
      width: auto;
      margin-right: 0;
      margin-bottom: $layout-03;
    }
  }

  &__filter-time-label {
    margin-bottom: $layout-01;
    white-space: nowrap;
  }

  &__small-only {
    @include mq($from: medium) {
      display: none;
    }
  }

  &__medium-large-only {
    @include mq($until: medium) {
      display: none;
    }
  }

  &__results {
    flex: auto;

    @include mq($until: medium) {
      width: 100%;
    }

    & > * {
      margin-bottom: $layout-02;

      @include mq($until: large) {
        margin-bottom: $layout-01;
      }
    }
  }
}
</style>

<style lang="scss">
@import '~/assets/scss/blocks/copy.scss';
/**
 * TODO: Review if there is some mechanism, inside the Carbon Themes
 * framework, for applying a different theme to an specific component (#703).
 *
 * If there is not, we need some alternative way of overriding component
 * internal CSS. The following approach takes advantage of BEM methodology
 * and CSS specificity to override the internal CSS.
 */
.the-learning-resources-list {
  &__filter-level {
    & a.bx--tabs__nav-link {
      color: $cool-gray-80;
      border-bottom-color: $cool-gray-20;

      &:focus,
      &:active {
        outline: none;
      }

      &:not(.bx--tabs__nav-item--disabled) {
        color: $cool-gray-80;
      }
    }

    & .bx--tabs__nav-item {
      &:hover:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link,
      &:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled):not(.bx--tabs__nav-item--selected) .bx--tabs__nav-link:focus,
      &:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled):not(.bx--tabs__nav-item--selected) a.bx--tabs__nav-link:active,
      &:not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link, .bx--tabs__nav-item--selected:not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link:focus {
        color: $cool-gray-80;
      }

      &--selected:not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link {
        border-bottom-color: $purple-70;
      }
    }

    & .bx--tabs__nav-item:hover:not(.bx--tabs__nav-item--disabled) {
      box-shadow: none;
    }

    & .bx--tabs__nav-item:hover:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled),
    & .bx--tabs__nav-item,
    & .bx--tabs-trigger {
      background-color: white;

      svg {
        fill: $gray-100;
      }
    }

    & .bx--tabs__nav-link,
    & .bx--tabs-trigger-text {
      color: $gray-100;
    }
  }

  &__filter-time {
    & .bx--dropdown,
    & .bx--dropdown-item {
      background-color: white;

        svg {
          fill: $gray-100;
        }
    }

    & .bx--dropdown-item:hover,
    & .bx--dropdown--show-selected .bx--dropdown--selected:hover {
      // To match default light theme UI hover, which is not among the Carbon
      // palette. 🤦
      background-color: #e5e5e5;
    }

    & .bx--dropdown-link,
    & .bx--dropdown-text {
      color: $gray-100;
      border-top-color: #dde1e6;
    }

    & .bx--dropdown--show-selected .bx--dropdown--selected .bx--dropdown-link {
      border-top-color: #dde1e6;
      border-bottom-color: #dde1e6;
    }

    & .bx--dropdown-link:hover {
      border-bottom-color: #dde1e6;
    }

    // update color
    & .bx--list-box__label {
      color: $white-text-01;
    }
  }

  & .bx--radio-button__appearance {
    border-color: black;
  }
}
</style>
