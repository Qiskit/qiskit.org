<template>
  <article class="map-section">
    <div class="map-section__map-container" />
    <div class="map-section__content">
      <slot />
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component({
  mounted () {
    require('d3')
    require('topojson')
    const Datamap = require('datamaps')
    const map = new Datamap({
      element: this.$el.querySelector('.map-section__map-container'),
      responsive: true,
      projection: 'mercator',
      geographyConfig: {
        highlightOnHover: false,
        popupOnHover: false,
        borderColor: 'var(--border-color)'
      },
      fills: {
        defaultFill: '#0000',
        city: 'var(--city-color)'
      },
      bubblesConfig: {
        borderWidth: 0,
        highlightBorderWidth: 0,
        highlightFillColor: 'var(--bubble-color)',
        popupTemplate (_: any, data: any) {
          return `<div class="map-tip">${data.name}</div>`
        }
      },
      done () {
        // fix cutting the bottom of the map.
        this.element.style.paddingBottom = '60%'
      }
    })
    const advocateLocations = this.$props.points.map((location: any) => {
      return { ...location, fillKey: 'city', radius: 5 }
    })
    map.bubbles(advocateLocations)
    window.onresize = () => {
      requestAnimationFrame(() => {
        map.resize()
      })
    }
  }
})
export default class MapSection extends Vue {
  @Prop({ type: String, default: 'end' }) extraPosition!: any
  @Prop(Array) points!: any
}
</script>

<style lang="scss" scoped>
.map-section {
  --border-color: #{$ui-04};
  --city-color: #{$purple-60};
  --bubble-color: #{$purple-50};

  position: relative;

  &__content {
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    padding-top: $spacing-09;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;

    & * {
      pointer-events: initial;
    }
  }
}
</style>

<style lang="scss">
@import '~carbon-components/scss/globals/scss/typography';

.map-tip {
  @include type-style('body-short-01');
  position: relative;
  color: $inverse-01;
  background-color: var(--bubble-color);
  padding: $spacing-03 $spacing-04;
  transform: translateX(-50%);
  border-radius: 2px;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: 100%;
    left: 50%;
    width: 0;
    height: 0;
    font-size: 0;
    border: 8px solid transparent;
    border-bottom: 8px solid var(--bubble-color);
    transform: translate(-50%);
  }
}
</style>
