<template>
  <section class="metal-grid">
    <div class="metal-grid__underlayer">
      <MetalDarkHeader class="metal-grid__header" />
    </div>
    <div class="metal-grid__container">
      <div
        v-for="(row, index) in positions"
        :key="getRowId(index)"
        class="metal-grid__row"
      >
        <div
          v-for="pos in row"
          :key="getPosId(pos)"
          class="metal-grid__cell"
          :class="{
            'metal-grid__cell_trigger': isTrigger(pos),
            'metal-grid__cell_hidden': isHidden(pos),
            'metal-grid__cell_decoherent': pos.isDecoherent,
          }"
          @click="triggerAnimation(pos)"
        />
      </div>
    </div>
    <div
      ref="slot-container"
      class="metal-grid__slot-container"
      :class="{
        'metal-grid__slot-container_hidden': slotContainerIsHidden,
      }"
    >
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
type CellCoordinates = { x: number; y: number };
type CellSpecification = { c: number; r: number; isDecoherent?: boolean };
type Decoherences = { [key: number]: number };

const router = useRouter();

const timeToRemoveNextCell = 5; // in ms
const timeToLoadMetal = 50; // in ms
const triggerPositionFromTopCenter: CellCoordinates = { x: -3, y: 2 };

const noDecoherenceColumnCount = 30;
const noDecoherenceRowCount = 11;

const decoherenceExtraCount = 3;

const rowDecoherenceChance: Decoherences = {
  0: 0.5,
  1: 0.7,
  2: 0.8,
};

const columnDecoherenceChance: Decoherences = {
  0: 0.5,
  1: 0.7,
  2: 0.8,
};

// XXX: Column count must be even
const pattern: number[][] = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
]; // size 16x9

const hiddenCells = ref<string[]>([]);

const slotContainerIsHidden = ref(false);

const positions = computed<CellSpecification[][]>(() =>
  Array.from(
    (() => {
      function* generateRows(): Iterable<CellSpecification[]> {
        const totalRowCount = noDecoherenceRowCount + decoherenceExtraCount;
        for (let r = 0; r < totalRowCount; r++) {
          yield Array.from(genColumns(r));
        }
      }

      function* genColumns(currentRow: number): Iterable<CellSpecification> {
        const totalColumnCount =
          noDecoherenceColumnCount + decoherenceExtraCount;
        for (let c = -decoherenceExtraCount; c < totalColumnCount; c++) {
          const isInDecoherenceRowZone = currentRow >= noDecoherenceRowCount;
          const rowIsDecoherent =
            Math.random() <
            rowDecoherenceChance[currentRow - noDecoherenceRowCount];
          const isInDecoherenceLeftColumnZone = c < 0;
          const leftColumnIsDecoherent =
            Math.random() < columnDecoherenceChance[-c - 1];
          const isInDecoherenceRightColumnZone = c >= noDecoherenceColumnCount;
          const rightColumnIsDecoherent =
            Math.random() <
            columnDecoherenceChance[c - noDecoherenceColumnCount];
          const isDecoherent =
            (isInDecoherenceRowZone && rowIsDecoherent) ||
            (isInDecoherenceLeftColumnZone && leftColumnIsDecoherent) ||
            (isInDecoherenceRightColumnZone && rightColumnIsDecoherent);

          yield { c, r: currentRow, isDecoherent };
        }
      }

      return generateRows();
    })()
  )
);

const fallingCells = computed<string[]>(() =>
  Array.from(
    (() => {
      const centralColumn = Math.floor(noDecoherenceColumnCount / 2);
      const [rowStart, rowEnd] = [1, pattern.length + 1];
      const [columnStart, columnEnd] = [
        centralColumn - pattern[0].length / 2,
        centralColumn + pattern[0].length / 2,
      ];

      function* gen(): Iterable<string> {
        for (let r = rowStart; r < rowEnd; r++) {
          for (let c = columnStart; c < columnEnd; c++) {
            const cellIsAlwaysVisible =
              pattern[r - rowStart][c - columnStart] === 0;
            if (cellIsAlwaysVisible) {
              continue;
            }
            yield getPosId({ c, r });
          }
        }
      }

      return gen();
    })()
  )
);

function isHidden(pos: CellSpecification): boolean {
  return hiddenCells.value.includes(getPosId(pos));
}

function isTrigger(pos: CellSpecification): boolean {
  const centralColumn = Math.floor(noDecoherenceColumnCount / 2);
  const { x: triggerX, y: triggerY } = triggerPositionFromTopCenter;
  const { c, r } = pos;
  return c === centralColumn + triggerX && r === triggerY;
}

function triggerAnimation(pos: CellSpecification) {
  if (!isTrigger(pos)) {
    return;
  }
  slotContainerIsHidden.value = true;
  removeCell();
}

function removeCell() {
  const length = fallingCells.value.length;
  const noMoreCells = length === 0;

  if (noMoreCells) {
    setTimeout(() => {
      router.push({ path: "/metal" });
    }, timeToLoadMetal);
    return;
  }

  const index = Math.floor(Math.random() * length);
  const cellToHideId = fallingCells.value.splice(index, 1)[0];
  hiddenCells.value.splice(0, 0, cellToHideId);

  setTimeout(removeCell, timeToRemoveNextCell);
}

function getPosId(pos: CellSpecification): string {
  return `cell-${pos.c}-${pos.r}`;
}

function getRowId(index: number): string {
  return `row-${index}`;
}
</script>

<style lang="scss">
@use "sass:math";
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.metal-grid {
  position: relative;
  height: 100%;
  width: 100%;
  min-height: 42rem;

  @include carbon.breakpoint-down(lg) {
    min-height: math.div(28rem * 40, 64);
  }

  &__underlayer {
    @include qiskit.contained;

    overflow: hidden;
    background-color: carbon.$cool-gray-100;
    height: 42rem;
    margin-top: -1px;

    @include carbon.breakpoint-down(lg) {
      height: 26.5rem;
    }
  }

  &__header {
    position: relative;

    @include carbon.breakpoint-between(sm, md) {
      top: 2rem;
    }

    @include carbon.breakpoint-between(md, lg) {
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

    @include carbon.breakpoint-down(lg) {
      flex: 0 0 $medium-cell;
      height: $medium-cell;
    }
  }

  &__cell {
    position: relative;
    flex: 0 0 $large-cell;

    @include carbon.breakpoint-down(lg) {
      flex: 0 0 $medium-cell;
    }

    &::before {
      content: "";
      border: 1px solid carbon.$cool-gray-20;
      position: absolute;
      width: $large-cell - 1px;
      height: $large-cell - 1px;
      background-color: white;
      box-sizing: content-box;
      transition: transform 300ms ease-in, opacity 300ms, border-radius 300ms;

      @include carbon.breakpoint-down(lg) {
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

        @include carbon.breakpoint-down(lg) {
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
        0% {
          box-shadow: 0 0 0 0 carbon.$cool-gray-70;
          transform: rotate(0deg);
        }

        10% {
          box-shadow: 0 1px 5px 0 carbon.$cool-gray-20;
          transform: rotate(0deg);
        }

        18% {
          box-shadow: 0 1px 5px 0 carbon.$cool-gray-20;
          transform: rotate(-3deg * $rotation-multiplier);
        }

        26% {
          box-shadow: 0 1px 5px 0 carbon.$cool-gray-20;
          transform: rotate(4deg * $rotation-multiplier);
        }

        34% {
          box-shadow: 0 1px 5px 0 carbon.$cool-gray-20;
          transform: rotate(-3deg * $rotation-multiplier);
          background-color: white;
        }

        45% {
          box-shadow: 0 1px 5px 0 carbon.$cool-gray-20;
          transform: rotate(1deg * $rotation-multiplier);
        }

        55% {
          box-shadow: 0 1px 5px 0 carbon.$cool-gray-20;
          transform: rotate(0deg);
        }

        65% {
          box-shadow: 0 0 0 0 carbon.$cool-gray-60;
          transform: rotate(0deg);
        }

        100% {
          box-shadow: 0 0 0 0 carbon.$cool-gray-70;
          transform: rotate(0deg);
        }
      }

      @keyframes very-anxious-tile {
        0% {
          box-shadow: 0 0 0 0 carbon.$cool-gray-70;
          transform: rotate(0deg) scale(1);
          background-color: white;
        }

        10% {
          box-shadow: 0 1px 5px 0 carbon.$cool-gray-20;
          transform: rotate(0deg) scale($magnification);
          background-color: white;
        }

        18% {
          box-shadow: 0 1px 5px 0 carbon.$cool-gray-20;
          transform: rotate(-5deg * $rotation-multiplier) scale($magnification);
        }

        26% {
          box-shadow: 0 1px 5px 0 carbon.$cool-gray-20;
          transform: rotate(7deg * $rotation-multiplier) scale($magnification);
        }

        34% {
          box-shadow: 0 1px 5px 0 carbon.$cool-gray-20;
          transform: rotate(-5deg * $rotation-multiplier) scale($magnification);
        }

        45% {
          box-shadow: 0 1px 5px 0 carbon.$cool-gray-20;
          transform: rotate(3deg * $rotation-multiplier) scale($magnification);
        }

        55% {
          box-shadow: 0 1px 5px 0 carbon.$cool-gray-20;
          transform: rotate(0deg) scale($magnification);
        }

        65% {
          box-shadow: 0 0 0 0 carbon.$cool-gray-60;
          transform: rotate(0deg) scale($magnification);
          background-color: white;
        }

        100% {
          box-shadow: 0 0 0 0 carbon.$cool-gray-70;
          transform: rotate(0deg) scale(1);
          background-color: white;
        }
      }
    }
  }

  &__slot-container {
    pointer-events: none;
    position: absolute;
    padding-top: carbon.$spacing-10;
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
