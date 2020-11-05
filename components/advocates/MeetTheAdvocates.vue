<template>
  <div class="meet-the-advocates">
    <div class="meet-the-advocates__container">
      <h2 class="copy__title">
        Meet the Advocates
      </h2>
      <p class="copy__paragraph copy__paragraph_importance_support">
        Qiskit advocates are some of the finest minds in quantum computing,
        all over the world. If you are interested in getting involved with the
        quantum computing community, reach out to an advocate local to your area.
      </p>
      <div
        class="meet-the-advocates__extra-filters meet-the-advocates__extra-filters_on-small-screen"
      >
        <AppMultiSelect
          :label="extraFilter.label"
          :options="extraFilter.options"
        />
      </div>
      <div class="meet-the-advocates__index">
        <div class="meet-the-advocates__extra-filters meet-the-advocates__extra-filters_on-large-screen">
          <AppFieldset :label="extraFilter.label">
            <client-only>
              <cv-checkbox
                v-for="option in extraFilter.options"
                :key="option.label"
                class="meet-the-advocates__extra-filters__checkboxes"
                :value="option.value"
                :label="option.label"
              />
            </client-only>
          </AppFieldset>
        </div>
        <div class="meet-the-advocates__main-content">
          <AdvocateCard
            v-for="advocate in advocates"
            :key="`advocate-${advocate.attributes.name}`"
            v-bind="advocate.attributes"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import AppCard from '~/components/ui/AppCard.vue'
import AdvocateCard from '~/components/advocates/AdvocateCard.vue'
import AppMultiSelect from '~/components/ui/AppMultiSelect.vue'
import AppFieldset from '~/components/ui/AppFieldset.vue'

type multiSelectOption = {
  label: string,
  value: string,
  name: string
}

@Component({
  components: {
    AdvocateCard,
    AppCard,
    AppMultiSelect,
    AppFieldset
  }
})
export default class extends Vue {
  @Prop(Array) advocates!: any

  regions = ['Europe', 'Asia', 'Africa', 'America']
  emptyCard = {
    title: 'No people found',
    description: 'No Qiskit advocates found for the given criteria. Trying doing a broader search. There are literally dozens of us.',
    img: '/images/events/no-events.svg'
  }

  regionsOptions = this.getOptions(this.regions)
  regionsLabel: string = 'Locations'
  regionsFilters: string = 'regionFilters'

  extraFilter = {
    label: this.regionsLabel,
    options: this.regionsOptions,
    filterType: this.regionsFilters
  }

  getOptions (optionsList: any): Array<multiSelectOption> {
    return optionsList.map((item: string) => ({ label: item, value: item, name: item }))
  }
}
</script>

<style lang="scss">
@import '~carbon-components/scss/globals/scss/typography';

.meet-the-advocates {
  background-color: $white;
  color: $white-text-01;

  &__container {
    @include contained();
  }

  &__index {
    display: flex;
    justify-content: space-between;
    margin-top: $layout-05;

    @include mq($until: medium) {
      flex-direction: column;
    }
  }

  &__extra-filters {
    &__checkboxes {
      .bx--checkbox-label::before {
        border: 1px solid $black-100;
      }

      .bx--checkbox:focus + .bx--checkbox-label::before {
        box-shadow: 0 0 0 2px $white, 0 0 0 4px $purple-60;
      }
    }

    &_on-large-screen {
      @include mq($until: medium) {
        display: none;
      }
    }

    &_on-small-screen {
      @include mq($from: medium) {
        display: none;
      }
    }
  }

  &__main-content {
    width: 75%;

    @include mq($until: medium) {
      width: 100%;
      margin-top: $layout-04;
    }
  }
}
</style>
