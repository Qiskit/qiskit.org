---
title: Quantalier
author: Qiskit Team
description: The Quantalier is a visual experiment based on IBM Q’s quantum computers. Physically made of over 1000 LEDs and a Raspberry Pi, the shape of the Quantalier reflects the interior elements of a real quantum computer.
image: /images/experiments/quantalier/QuantalierPizGloria.jpg
to: /experiments/quantalier
media:
  - /images/experiments/quantalier/QuantalierPizGloria.jpg
  - https://www.youtube.com/embed/wUo454pRTDY
  - /images/experiments/quantalier/QuantalierNight.jpg

source: https://github.com/qiskit
routeName: projects
---
The Quantum Chandelier, called the Quantalier, is a visual experiment based on IBM Q’s quantum computers. Physically made of over 1000 LEDs and a single Raspberry Pi, the shape of the Quantalier reflects the interior elements of a real quantum computer.

The horizontal disks of this Quantalier represent the cooling plates of a real quantum computer. In a real computer, these plates isolate the temperature gradients that allow the bottom component to be supercooled to the extremely low temperature of 15 milliKelvin.

The LED cables represent the cables within a real quantum computer which carry microwave pulses. These microwave pulses allow information from the external world to be sent to the interior quantum chip. This allows users to send circuits to be run on a quantum computer.

When someone uses one of IBM’s public quantum computers the LEDs in the Quantalier lights up. Each color represents a different quantum device. Red indicates that the last job called for the 14 qubit device named “Melbourne”, blue indicates ibmqx2 was called, green ibmqx4, and yellow the QASM simulator.

The cycle of the Quantalier’s LEDs represents how programs run on real quantum computers. First, the representative color cascades down as a user’s circuit is sent and downloaded to the quantum device. Then, the bottom tube flashes as the circuit is processed by the quantum chip. The Quantalier then pulses twice to indicate that the processing is finished. Finally, the color ascends as the processing results are returned to the users.
