---
title: Qonway Game of Life
author: Daniel Bultrini, Enrique de la Torre and Xiang Nan
description: A reinterpretation of the classical Conway Game of Life by incorporating quantum physics to the rules and speeding up new state generation.
image: /images/experiments/qonway-game-of-life/featured.jpeg
to: /experiments/qonway-game-of-life
media:
  - /images/experiments/qonway-game-of-life/life.jpeg
  - /images/experiments/qonway-game-of-life/onedgameoflife.jpeg
source: https://github.com/qonwaygameoflife/qonwaygameoflife
routeName: projects
---
These are three renditions of the quantum game of life - top left is the classical game of life, top right is the semi quantum version
and the bottom is a fully quantum kernel rendition. The fully quantum kernel uses a quantum cloning machine to bring cells to life as an average of the neighbouring cells.

Continous boundary conditions! And you can draw live cells! (draw on the top left classical game and the new cells will be replicated to the other 2).

## 1D Quantum Game of Life

In this case, instead of a 2D board to code the Game of Life, we use a 1D quantum register. By putting the qubits in different states as if they were cells: alive (|1>), dead (|0>) or neither alive nor dead (superposition), the idea was to produce all possible results by sequentially applying the same Truth Table Oracle which coded the dead/alive rules. However:
* The resulting circuit was (as you can see above) huge
* The output of an oracle was inputted in the next one but, it is likely, that by doing so we were also propagating an unintended phase change that eventually **corrupted** the results. With 4 or more input qubits, the outputs of the second oracle were no longer valid.