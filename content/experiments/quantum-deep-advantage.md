---
title: Quantum Deep Advantage
author: Asier Arranz, Makoto Nakai, Eden Chen, Liu Sitong, Yinjie Zhou, Sam Tonetto
description: Automation of the quantum circuit building process by using reinforcement learning and validating the method by performing simple numerical experiments on a Bell State.
image: /images/experiments/quantum-deep-advantage/gates.gif
to: /experiments/quantum-deep-advantage
media:
  - /images/experiments/quantum-deep-advantage/qda.jpg
  - /images/experiments/quantum-deep-advantage/quantum-deep.gif
  - https://www.youtube.com/embed/5DBJIHtjJMg

source: https://github.com/dacozai/QuantumDeepAdvantage
belongsTo: experiments
---
Automation of the quantum circuit building process by using reinforcement learning and validating the method by performing simple numerical experiments on a Bell State.

Making quantum circuits is a hard task, even for specific use cases on simple operations, the composing mechanism isn’t very intuitive and usually some extensive research and try/error needs to be done.

With this approach, based on an input we know and an output we want, a neural network will start trying random combinations with reinforcement learning until the circuit is optimized and reduced to minimum amount of gates.

