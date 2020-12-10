<template>
  <section class="metal-grid">
    <div class="metal-grid__underlayer">
      <TheDarkHeader class="metal-grid__header" />
    </div>
    <div class="metal-grid__container">
      <div
        v-for="(row, index) in positions"
        :key="rowId(index)"
        class="metal-grid__row"
      >
        <div
          v-for="pos in row"
          :key="posId(pos)"
          class="metal-grid__cell"
          :class="{
            'metal-grid__cell_trigger': isTrigger(pos),
            'metal-grid__cell_hidden': isHidden(pos),
            'metal-grid__cell_decoherent': pos.isDecoherent
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

type CellCoordinates = { x: number, y: number }
type CellSpecification = { c: number, r: number, isDecoherent?: boolean }
type Decoherences = { [key: number]: number }

@Component
export default class MetalGrid extends Vue {
  timeToRemoveNextCell: number = 5 // in ms
  timeToLoadMetal: number = 50 // in ms
  triggerPositionFromTopCenter: CellCoordinates = { x: -3, y: 2 }

  noDecoherenceColumnCount: number = 30
  noDecoherenceRowCount: number = 11

  decoherenceExtraCount: number = 3

  rowDecoherenceChance: Decoherences = {
    0: 0.5,
    1: 0.7,
    2: 0.8
  }

  columnDecoherenceChance: Decoherences = {
    0: 0.5,
    1: 0.7,
    2: 0.8
  }

  // XXX: Column count must be even
  pattern: number[][] = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
  ] // size 16x9

  hiddenCells: string[] = []

  slotContainerIsHidden: boolean = false

  positions: CellSpecification[][] = Array.from((() => {
    const {
      rowDecoherenceChance,
      columnDecoherenceChance,
      decoherenceExtraCount,
      noDecoherenceColumnCount,
      noDecoherenceRowCount
    } = this

    function* generateRows (): Iterable<CellSpecification[]> {
      const totalRowCount = noDecoherenceRowCount + decoherenceExtraCount
      for (let r = 0; r < totalRowCount; r++) {
        yield Array.from(genColumns(r))
      }
    }

    function* genColumns (currentRow: number): Iterable<CellSpecification> {
      const totalColumnCount = noDecoherenceColumnCount + decoherenceExtraCount
      for (let c = -decoherenceExtraCount; c < totalColumnCount; c++) {
        const isInDecoherenceRowZone = currentRow >= noDecoherenceRowCount
        const rowIsDecoherent = Math.random() < rowDecoherenceChance[currentRow - noDecoherenceRowCount]
        const isInDecoherenceLeftColumnZone = c < 0
        const leftColumnIsDecoherent = Math.random() < columnDecoherenceChance[-c - 1]
        const isInDecoherenceRightColumnZone = c >= noDecoherenceColumnCount
        const rightColumnIsDecoherent = Math.random() < columnDecoherenceChance[c - noDecoherenceColumnCount]
        const isDecoherent =
          (isInDecoherenceRowZone && rowIsDecoherent) ||
          (isInDecoherenceLeftColumnZone && leftColumnIsDecoherent) ||
          (isInDecoherenceRightColumnZone && rightColumnIsDecoherent)

        yield { c, r: currentRow, isDecoherent }
      }
    }

    return generateRows()
  })())

  fallingCells: string[] = Array.from((() => {
    const { noDecoherenceColumnCount, pattern } = this
    const self = this
    const centralColumn = Math.floor(noDecoherenceColumnCount / 2)
    const [rowStart, rowEnd] = [1, pattern.length + 1]
    const [columnStart, columnEnd] = [
      centralColumn - pattern[0].length / 2,
      centralColumn + pattern[0].length / 2
    ]

    function* gen (): Iterable<string> {
      for (let r = rowStart; r < rowEnd; r++) {
        for (let c = columnStart; c < columnEnd; c++) {
          const cellIsAlwaysVisible = pattern[r - rowStart][c - columnStart] === 0
          if (cellIsAlwaysVisible) {
            continue
          }
          yield self.posId({ c, r })
        }
      }
    }

    return gen()
  })())

  isHidden (pos: CellSpecification) {
    return this.hiddenCells.includes(this.posId(pos))
  }

  isTrigger (pos: CellSpecification) {
    const centralColumn = Math.floor(this.noDecoherenceColumnCount / 2)
    const { x: triggerX, y: triggerY } = this.triggerPositionFromTopCenter
    const { c, r } = pos
    return c === centralColumn + triggerX && r === triggerY
  }

  triggerAnimation (pos: CellSpecification) {
    if (!this.isTrigger(pos)) { return }
    this.slotContainerIsHidden = true
    this.removeCell()
  }

  removeCell () {
    const length = this.fallingCells.length
    const noMoreCells = length === 0

    if (noMoreCells) {
      setTimeout(() => {
        this.$router.push({ path: '/metal' })
      }, this.timeToLoadMetal)
      return
    }

    const index = Math.floor(Math.random() * length)
    const cellToHideId = this.fallingCells.splice(index, 1)[0]
    this.hiddenCells.splice(0, 0, cellToHideId)

    setTimeout(this.removeCell, this.timeToRemoveNextCell)
  }

  posId (pos: CellSpecification): string {
    return `cell-${pos.c}-${pos.r}`
  }

  rowId (index: number): string {
    return `row-${index}`
  }
}
</script>

<style lang="scss">
@import '~carbon-components/scss/globals/scss/typography';

.metal-grid {
  position: relative;
  width: 100%;
  min-height: 42rem;

  @include mq($until: large) {
    min-height: 28rem * 40 / 64;
  }

  &__underlayer {
    @include contained();
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
    }

  }

  &__container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    width: 100vw;
    display: flex;
    flex-direction: column;
  }

  $large-cell: 64px;
  $medium-cell: 40px;

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
      transition:
        transform 300ms ease-in,
        opacity 300ms,
        border-radius 300ms;

      @include mq($until: large) {
        width: $medium-cell - 1px;
        height: $medium-cell - 1px;
      }
    }

    &_hidden::before {
      transform: scale(0.3, 0.3) rotate(45deg);
      border-radius: 50%;
      opacity: 0;
    }

    &_decoherent::before {
      opacity: 0;
    }

    &_trigger {

      &::before {
        cursor: pointer;
        z-index: 200;
        animation: anxious-tile 2s linear 0s infinite normal;

        @include mq($until: large) {
          animation: very-anxious-tile 2s linear 0s infinite normal;
        }
      }

      &:hover::before {
        animation: very-anxious-tile 2s linear 0s infinite normal;
      }

      &_triggered::before,
      &_triggered:hover::before {
        animation: none;
      }

      // Shaking effects
      $rotation-multiplier: 1;
      $magnification: 1.1;

      @keyframes anxious-tile {
        0%    { box-shadow: 0px 0px 0px 0px $cool-gray-70; transform: rotate( 0deg); }
        10%   { box-shadow: 0px 1px 5px 0px $cool-gray-20; transform: rotate( 0deg); }
        18%   { box-shadow: 0px 1px 5px 0px $cool-gray-20; transform: rotate(-3deg * $rotation-multiplier); }
        26%   { box-shadow: 0px 1px 5px 0px $cool-gray-20; transform: rotate( 4deg * $rotation-multiplier); }
        34%   { box-shadow: 0px 1px 5px 0px $cool-gray-20; transform: rotate(-3deg * $rotation-multiplier); background-color: white;}
        45%   { box-shadow: 0px 1px 5px 0px $cool-gray-20; transform: rotate( 1deg * $rotation-multiplier); }
        55%   { box-shadow: 0px 1px 5px 0px $cool-gray-20; transform: rotate( 0deg); }
        65%   { box-shadow: 0px 0px 0px 0px $cool-gray-60; transform: rotate( 0deg); }
        100%  { box-shadow: 0px 0px 0px 0px $cool-gray-70; transform: rotate( 0deg); }
      }

      @keyframes very-anxious-tile {
        0%    { box-shadow: 0px 0px 0px 0px $cool-gray-70; transform: rotate( 0deg) scale(1); background-color: white; }
        10%   { box-shadow: 0px 1px 5px 0px $cool-gray-20; transform: rotate( 0deg) scale($magnification); background-color: white; }
        18%   { box-shadow: 0px 1px 5px 0px $cool-gray-20; transform: rotate(-5deg * $rotation-multiplier) scale($magnification); }
        26%   { box-shadow: 0px 1px 5px 0px $cool-gray-20; transform: rotate( 7deg * $rotation-multiplier) scale($magnification); }
        34%   { box-shadow: 0px 1px 5px 0px $cool-gray-20; transform: rotate(-5deg * $rotation-multiplier) scale($magnification); }
        45%   { box-shadow: 0px 1px 5px 0px $cool-gray-20; transform: rotate( 3deg * $rotation-multiplier) scale($magnification); }
        55%   { box-shadow: 0px 1px 5px 0px $cool-gray-20; transform: rotate( 0deg) scale($magnification); }
        65%   { box-shadow: 0px 0px 0px 0px $cool-gray-60; transform: rotate( 0deg) scale($magnification); background-color: white; }
        100%  { box-shadow: 0px 0px 0px 0px $cool-gray-70; transform: rotate( 0deg) scale(1); background-color: white; }
      }
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
