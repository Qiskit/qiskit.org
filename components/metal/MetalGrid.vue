<template>
  <section class="metal-grid">
    <div class="metal-grid__underlayer">
      <TheDarkHeader class="metal-grid__header" />
    </div>
    <div class="metal-grid__container">
      <div
        v-for="(row, index) in positions"
        :key="rowId(row, index)"
        class="metal-grid__row"
      >
        <div
          v-for="pos in row"
          :key="posId(pos)"
          class="metal-grid__cell"
          :class="{
            'metal-grid__cell_trigger': isTrigger(pos),
            'metal-grid__cell_hidden': isHidden(pos),
            'metal-grid__cell_decoherent': pos.decoherent
          }"
          @click="triggerAnimation(pos)"
        />
      </div>
    </div>
    <div
      ref="slot-container"
      class="metal-grid__slot-container"
      :class="{
        'metal-grid__slot-container_hidden': slotContainerIsHidden
      }"
    >
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import TheDarkHeader from './TheDarkHeader.vue'
import AppIcon from '~/components/ui/AppIcon.vue'

@Component({
  components: { AppIcon, TheDarkHeader }
})
export default class extends Vue {
  timeToRemoveCell = 5 // in ms
  timeToLoadMetal = 0 // in ms
  triggerPositionFromTopCenter = { x: -3, y: 2 } // y: 0 is the first line

  // this is the solid part
  columnCount: number = 30
  rowCount: number = 11

  // decoherenceSize will add rows and columns
  decoherenceSize: number = 3
  rowDecoherence = {
    0: 0.5,
    1: 0.7,
    2: 0.8
  }

  columnDecoherence = {
    0: 0.5,
    1: 0.7,
    2: 0.8
  }

  /*
  pattern = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ]
  */

  // TODO: This currently only works with an even number of columns
  pattern = [ // length [9, 16]
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
  ]

  /*
  pattern = [
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ]
  */

  hiddenCells: string[] = []

  slotContainerIsHidden: boolean = false

  positions = Array.from((() => {
    const { rowDecoherence, columnDecoherence, decoherenceSize, columnCount, rowCount } = this

    function* genRows () {
      for (let r = 0; r < rowCount + decoherenceSize; r++) {
        yield Array.from((() => {
          function* genColumns () {
            for (let c = -decoherenceSize; c < columnCount + decoherenceSize; c++) {
              const decoherent = (r >= rowCount && Math.random() < rowDecoherence[r - rowCount]) ||
                                  (c < 0 && Math.random() < columnDecoherence[-c - 1]) ||
                                  (c >= columnCount && Math.random() < columnDecoherence[c - columnCount])

              yield { c, r, decoherent }
            }
          }
          return genColumns()
        })())
      }
    }

    return genRows()
  })())

  visibleCells = Array.from((() => {
    const { columnCount, pattern } = this
    const self = this
    const rows = { init: 1, end: pattern.length + 1 }
    const centralColumn = Math.floor(columnCount / 2)
    const columns = { init: centralColumn - pattern[0].length / 2, end: centralColumn + pattern[0].length / 2 }

    function* gen () {
      for (let r = rows.init; r < rows.end; r++) {
        for (let c = columns.init; c < columns.end; c++) {
          if (pattern[r - rows.init][c - columns.init] === 0) {
            continue
          }
          yield self.posId({ c, r })
        }
      }
    }
    return gen()
  })())

  isHidden (pos) {
    return this.hiddenCells.includes(this.posId(pos))
  }

  isTrigger (pos) {
    const centralColumn = Math.floor(this.columnCount / 2)
    return pos.c === centralColumn + this.triggerPositionFromTopCenter.x && pos.r === this.triggerPositionFromTopCenter.y
  }

  triggerAnimation (pos) {
    if (!this.isTrigger(pos)) { return }
    this.slotContainerIsHidden = true
    this.removeCell()
  }

  removeCell () {
    const length = this.visibleCells.length
    if (!length) {
      setTimeout(() => {
        this.$router.push({ path: '/metal' })
      }, this.timeToLoadMetal)
      return
    }
    const index = Math.floor(Math.random() * length)
    const posId = this.visibleCells.splice(index, 1)[0]
    this.hiddenCells.splice(0, 0, posId)
    setTimeout(this.removeCell, this.timeToRemoveCell)
  }

  posId (pos) {
    return `cell-${pos.c}-${pos.r}`
  }

  rowId (row, index) {
    return `row-${index}`
  }
}
</script>

<style lang="scss">
@import '~carbon-components/scss/globals/scss/typography';

$large-cell: 64px;
$medium-cell: 40px;

.metal-grid {
  position: relative;
  width: 100%;
  min-height: 42rem;

  @include mq($until: large) {
    min-height: 28rem * 40 / 64;
  }

  &__underlayer {
    overflow: hidden;
    background-color: $cool-gray-100;
    height: 42rem;
    margin-top: 1px;

    @include mq($until: large) {
      height: 26.5rem;
    }
  }

  &__header {
    position: relative;

    @include mq($from: small, $until: medium) {
      top: 2rem;
    }

    @include mq($from: medium, $until: large) {
      top: -5rem;
      // left: 12rem;
    }

  }

  &__intro {
    @include type-style('display-03');
    font-size: 2.5rem;
    margin-left: 14rem;
    color: white;

    @include mq($until: large) {
      font-size: 1.5rem;
      margin-left: 10rem;
    }
    @include mq($until: medium) {
      font-size: 1rem;
      margin-left: 6rem;
    }
  }

  &__logo {
    display: inline-block;
    position: relative;
    width: 12rem;
    height: 12rem;
    color: $cool-gray-10;
    vertical-align: middle;
    margin-right: 2rem;

    @include mq($until: large) {
      width: 8rem;
      height: 8rem;
      margin-right: 2rem;
    }
    @include mq($until: medium) {
      width: 5rem;
      height: 5rem;
      margin-right: 1rem;
    }
  }

  &__title {
    @include type-style('display-04');
    display: inline-block;
    line-height: 10rem;
    font-size: 10rem;
    color: white;
    position: relative;
    left: -0.075em;
    vertical-align: middle;

    @include mq($until: large) {
      line-height: 6rem;
      font-size: 6rem;
    }
    @include mq($until: medium) {
      line-height: 4rem;
      font-size: 4rem;
    }
  }

  &__container {
    display: flex;
    flex-direction: column;
    width: 100vw;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
  }

  &__row {
    display: flex;
    flex: 0 0 $large-cell;
    justify-content: center;
    width: 100vw;
    height: $large-cell;

    @include mq($until: large) {
      flex: 0 0 $medium-cell;
      height: $medium-cell;
    }
  }

  &__cell {
    position: relative;
    flex: 0 0 $large-cell;

    @include mq($until: large) {
      flex: 0 0 $medium-cell;
    }

    &::before {
      content: "";
      border: 1px solid #E1E1E2;
      position: absolute;
      width: $large-cell - 1px;
      height: $large-cell - 1px;
      background-color: white;
      box-sizing: content-box;
      // Transition speed and function
      transition: transform 300ms ease-in, opacity 300ms, border-radius 300ms;

      @include mq($until: large) {
        width: $medium-cell - 1px;
        height: $medium-cell - 1px;
      }
    }

    // This is the final state of each tile
    // if you want to change the speed look at 9 lines above
    &_hidden::before {
      /* // falling transition
      transform: translateY(150%);
      */

      // semi-rounded scale and rotate
      transform: scale(0.3, 0.3) rotate(45deg);
      border-radius: 50%;
      /*/
      // fully-rounded and scale
      transform: scale(0.3, 0.3);
      border-radius: 20%;
      //*/

      // Common CSS for all transitions
      opacity: 0;
    }

    // NO EFFECT ON HOLE
    /*
    &_trigger::before {
      border: none;
      background-color: transparent;
      cursor: pointer;
      z-index: 200;
    }
    */

    // PUMPING BACKGROUND HOLE EFFECT
    /*
    @keyframes pumpingBackground {
      0%   { background-color: $cool-gray-80; }
      30%  { background-color: $cool-gray-70; }
      100% { background-color: $cool-gray-80; }
    }

    &_trigger::before {
      border: none;
      cursor: pointer;
      z-index: 200;

      background-color: $cool-gray-80;
      box-shadow: inset 0px 0px 20px 2px black, inset 0px 0px 10px 1px black;

      animation: pumpingBackground 1.5s linear 0s infinite normal;
    }
    */

    // ANXIOUS TILE EFFECT
    // this variables can be changed to tweak the effect.
    // also you can change the degrees directly.
    $anxiousTile_RotationAmount: 1;
    $veryAnxiousTile_Scaling: 1.1;
    @keyframes anxiousTile {
      0%    { box-shadow: 0px 0px 0px 0px $cool-gray-70; transform: rotate( 0deg); }
      10%   { box-shadow: 0px 1px 5px 0px $cool-gray-20; transform: rotate( 0deg); }
      18%   { box-shadow: 0px 1px 5px 0px $cool-gray-20; transform: rotate(-3deg * $anxiousTile_RotationAmount); }
      26%   { box-shadow: 0px 1px 5px 0px $cool-gray-20; transform: rotate( 4deg * $anxiousTile_RotationAmount); }
      34%   { box-shadow: 0px 1px 5px 0px $cool-gray-20; transform: rotate(-3deg * $anxiousTile_RotationAmount); background-color: white;}
      45%   { box-shadow: 0px 1px 5px 0px $cool-gray-20; transform: rotate( 1deg * $anxiousTile_RotationAmount); }
      55%   { box-shadow: 0px 1px 5px 0px $cool-gray-20; transform: rotate( 0deg); }
      65%   { box-shadow: 0px 0px 0px 0px $cool-gray-60; transform: rotate( 0deg); }
      100%  { box-shadow: 0px 0px 0px 0px $cool-gray-70; transform: rotate( 0deg); }
    }
    @keyframes veryAnxiousTile {
      0%    { box-shadow: 0px 0px 0px 0px $cool-gray-70; transform: rotate( 0deg) scale(1); background-color: $cool-gray-100; }
      10%   { box-shadow: 0px 1px 5px 0px $cool-gray-20; transform: rotate( 0deg) scale($veryAnxiousTile_Scaling); background-color: $cool-gray-100; }
      18%   { box-shadow: 0px 1px 5px 0px $cool-gray-20; transform: rotate(-5deg * $anxiousTile_RotationAmount) scale($veryAnxiousTile_Scaling); }
      26%   { box-shadow: 0px 1px 5px 0px $cool-gray-20; transform: rotate( 7deg * $anxiousTile_RotationAmount) scale($veryAnxiousTile_Scaling); }
      34%   { box-shadow: 0px 1px 5px 0px $cool-gray-20; transform: rotate(-5deg * $anxiousTile_RotationAmount) scale($veryAnxiousTile_Scaling); }
      45%   { box-shadow: 0px 1px 5px 0px $cool-gray-20; transform: rotate( 3deg * $anxiousTile_RotationAmount) scale($veryAnxiousTile_Scaling); }
      55%   { box-shadow: 0px 1px 5px 0px $cool-gray-20; transform: rotate( 0deg) scale($veryAnxiousTile_Scaling); }
      65%   { box-shadow: 0px 0px 0px 0px $cool-gray-60; transform: rotate( 0deg) scale($veryAnxiousTile_Scaling); background-color: $cool-gray-100; }
      100%  { box-shadow: 0px 0px 0px 0px $cool-gray-70; transform: rotate( 0deg) scale(1); background-color: $cool-gray-100; }
    }
    &_trigger{

      &::before {
        cursor: pointer;
        z-index: 200;
        animation: anxiousTile 2s linear 0s infinite normal;

        @include mq($until: medium) { // Mobile animation
          animation: veryAnxiousTile 2s linear 0s infinite normal;
        }
      }
      &:hover::before {
        animation: veryAnxiousTile 2s linear 0s infinite normal;
      }
      &_triggered::before,
      &_triggered:hover::before {
        animation: none;
      }
    }

    &_decoherent::before {
      opacity: 0;
    }
  }

  &__metal-word-letter {
    &_letter-M {
      color: white;
    }

    &_letter-e {
      color: $cool-gray-10;
    }

    &_letter-t {
      color: $cool-gray-20;
    }

    &_letter-a {
      color: $cool-gray-30;
    }

    &_letter-l {
      color: $cool-gray-40;
    }
  }

  &__slot-container {
    pointer-events: none;
    position: absolute;
    padding-top: $layout-05;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 110;
    transition: opacity 500ms ease-out;

    &_hidden {
      opacity: 0;
    }
  }
}
</style>
