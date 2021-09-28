---
title: Introduction to Quantum Computing and Quantum Hardware
tagline: An introduction to the world of quantum computing, with an exploration of some of the key quantum algorithms and their implementations, as well as the quantum hardware that is designed to run these algorithms. The course was first offered during the Qiskit Global Summer School in July 2020 as a two-week intensive summer school.
description: An introduction to the world of quantum computing, with an exploration of some of the key quantum algorithms and their implementations, as well as the quantum hardware that is designed to run these algorithms. The course was first offered during the Qiskit Global Summer School in July 2020 as a two-week intensive summer school.
nav:
  - text: About the Course
    goTo: '#about-the-course'
  - text: Curriculum
    goTo: '#curriculum'
  - text: Course Description
    goTo: '#course-description'
  - text: Contributors
    goTo: '#contributors'
routeName: learn
---

## About the Course
This course is an introduction to the world of quantum computing, with an exploration of some of the key quantum algorithms and their implementations using quantum circuits, as well as the quantum hardware that is designed to run these algorithms. The course was first offered during the Qiskit Global Summer School in July 2020 as a two-week intensive summer school.

There are 27 lectures in this course, which cover the material in 9 lecture notes and 9 associated labs. The textbook for the course is available online: [Learn Quantum Computation using Qiskit](http://qiskit.org/textbook-beta).

## Prerequisites
In order to make the best out of these lectures, we strongly recommend reviewing linear algebra and brushing up on Python. Here are some recommended materials:

* Multiplying two matrices, introductory linear algebra:
  * [Khan Academy](https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:matrices/x9e81a4f98389efdf:multiplying-matrices-by-matrices/v/matrix-multiplication-intro)
  * [Linear algebra prerequisites in the Qiskit Textbook](https://learn.qiskit.org/course/ch-appendix/an-introduction-to-linear-algebra-for-quantum-computing)
* Basic familiarity with Python:
  * [Python prerequisites in the Qiskit Textbook](https://learn.qiskit.org/course/ch-prerequisites/introduction-to-python-and-jupyter-notebooks)

## Curriculum
<table id="resources">
  <thead>
    <tr>
      <th>Lecture</th>
      <th>Video</th>
      <th>Notes</th>
      <th>Lab</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        Lecture 1<br>
        <strong>Qubits and Quantum States, Quantum Circuits, Measurements Part 1</strong><br>
        (Lecturer: Elisa Bäumer)
      </td>
      <td>
        <a href="https://youtu.be/NZD9APb7ZtY?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR">Lecture Video</a>
      </td>
      <td rowspan="3">
        <a href="https://github.com/qiskit-community/intro-to-quantum-computing-and-quantum-hardware/blob/master/lectures/introqcqh-lecture-notes-1.pdf?raw=true">Lecture Notes 1</a>
      </td>
      <td rowspan="3">
        <a href="https://github.com/qiskit-community/intro-to-quantum-computing-and-quantum-hardware/blob/master/labs/introqcqh-lab-1.zip?raw=true">Lab 1</a>
      </td>
    </tr>
    <tr>
      <td>
        Lecture 2<br>
        <strong>Qubits and Quantum States, Quantum Circuits, Measurements Part 2</strong><br>
        (Lecturer: Elisa Bäumer)
      </td>
      <td>
        <a href="https://youtu.be/SlZoTjkPy7o?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR">Lecture Video</a>
      </td>
    </tr>
    <tr>
      <td>
        Lecture 3<br>
        <strong>Qubits and Quantum States, Quantum Circuits, Measurements Part 3</strong><br>
        (Lecturer: Elisa Bäumer)
      </td>
      <td>
        <a href="https://youtu.be/9MpSQglnqI0?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR">Lecture Video</a>
      </td>
    </tr>
    <tr>
      <td>
        Lecture 4<br>
        <strong>Writing and Running Quantum Programs Part 1</strong><br>
        (Lecturer: Elisa Bäumer)
      </td>
      <td>
        <a href="https://youtu.be/qrYVO9-dxLE?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR">Lecture Video</a>
      </td>
      <td rowspan="3">
        <a href="https://github.com/qiskit-community/intro-to-quantum-computing-and-quantum-hardware/blob/master/lectures/introqcqh-lecture-notes-2.pdf?raw=true">Lecture Notes 2</a>
      </td>
      <td rowspan="3">
        <a href="https://github.com/qiskit-community/intro-to-quantum-computing-and-quantum-hardware/blob/master/labs/introqcqh-lab-2.zip?raw=true">Lab 2</a>
      </td>
    </tr>
    <tr>
      <td>
        Lecture 5<br>
        <strong>Writing and Running Quantum Programs Part 2</strong><br>
        (Lecturer: Elisa Bäumer)
      </td>
      <td>
        <a href="https://youtu.be/iJX794qJIpY?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR">Lecture Video</a>
      </td>
    </tr>
    <tr>
      <td>
        Lecture 6<br>
        <strong>Writing and Running Quantum Programs Part 3</strong><br>
        (Lecturer: Elisa Bäumer)
      </td>
      <td>
        <a href="https://youtu.be/enYP9TaDeJI?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR">Lecture Video</a>
      </td>
    </tr>
    <tr>
      <td>
        Lecture 7<br>
        <strong>Shor's Algorithm I: Quantum Fourier Transform, Quantum Phase Estimation Part 1</strong><br>
        (Lecturer: Abraham Asfaw)
      </td>
      <td>
        <a href="https://youtu.be/mAHC1dWKNYE?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR">Lecture Video</a>
      </td>
      <td rowspan="3">
        <a href="https://github.com/qiskit-community/intro-to-quantum-computing-and-quantum-hardware/blob/master/lectures/introqcqh-lecture-notes-3.pdf?raw=true">Lecture Notes 3</a>
      </td>
      <td rowspan="3">
        <a href="https://github.com/qiskit-community/intro-to-quantum-computing-and-quantum-hardware/blob/master/labs/introqcqh-lab-3.zip?raw=true">Lab 3</a>
      </td>
    </tr>
    <tr>
      <td>
        Lecture 8<br>
        <strong>Shor's Algorithm I: Quantum Fourier Transform, Quantum Phase Estimation Part 2</strong><br>
        (Lecturer: Abraham Asfaw)
      </td>
      <td>
        <a href="https://youtu.be/pq2jkfJlLmY?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR">Lecture Video</a>
      </td>
    </tr>
    <tr>
      <td>
        Lecture 9<br>
        <strong>Shor's Algorithm I: Quantum Fourier Transform, Quantum Phase Estimation Part 3</strong><br>
        (Lecturer: Abraham Asfaw)
      </td>
      <td>
        <a href="https://youtu.be/5kcoaanYyZw?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR">Lecture Video</a>
      </td>
    </tr>
    <tr>
      <td>
        Lecture 10<br>
        <strong>Shor's Algorithm II: From Factoring to Period-Finding, Writing the Quantum Program Part 1</strong><br>
        (Lecturer: Abraham Asfaw)
      </td>
      <td>
        <a href="https://youtu.be/YpcT8u2a2jc?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR">Lecture Video</a>
      </td>
      <td rowspan="3">
        <a href="https://github.com/qiskit-community/intro-to-quantum-computing-and-quantum-hardware/blob/master/lectures/introqcqh-lecture-notes-4.pdf?raw=true">Lecture Notes 4</a>
      </td>
      <td rowspan="3">
        <a href="https://github.com/qiskit-community/intro-to-quantum-computing-and-quantum-hardware/blob/master/labs/introqcqh-lab-4.zip?raw=true">Lab 4</a>
      </td>
    </tr>
    <tr>
      <td>
        Lecture 11<br>
        <strong>Shor's Algorithm II: From Factoring to Period-Finding, Writing the Quantum Program Part 2</strong><br>
        (Lecturer: Abraham Asfaw)
      </td>
      <td>
        <a href="https://youtu.be/dscRoTBPeso?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR">Lecture Video</a>
      </td>
    </tr>
    <tr>
      <td>
        Lecture 12<br>
        <strong>Shor's Algorithm II: From Factoring to Period-Finding, Writing the Quantum Program Part 3</strong><br>
        (Lecturer: Abraham Asfaw)
      </td>
      <td>
        <a href="https://youtu.be/IFmkzWF-S2k?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR">Lecture Video</a>
      </td>
    </tr>
    <tr>
      <td>
        Lecture 13<br>
        <strong>Quantum Error Correction using Repetition Codes Part 1</strong><br>
        (Lecturer: James Wootton)
      </td>
      <td>
        <a href="https://youtu.be/ZY8PddknCos?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR">Lecture Video</a>
      </td>
      <td rowspan="3">
        <a href="https://github.com/qiskit-community/intro-to-quantum-computing-and-quantum-hardware/blob/master/lectures/introqcqh-lecture-notes-5.pdf?raw=true">Lecture Notes 5</a>
      </td>
      <td rowspan="3">
        <a href="https://github.com/qiskit-community/intro-to-quantum-computing-and-quantum-hardware/blob/master/labs/introqcqh-lab-5.zip?raw=true">Lab 5</a>
      </td>
    </tr>
    <tr>
      <td>
        Lecture 14<br>
        <strong>Quantum Error Correction using Repetition Codes Part 2</strong><br>
        (Lecturer: James Wootton)
      </td>
      <td>
        <a href="https://youtu.be/SHr3uSv9Bts?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR">Lecture Video</a>
      </td>
    </tr>
    <tr>
      <td>
        Lecture 15<br>
        <strong>Quantum Error Correction using Repetition Codes Part 3</strong><br>
        (Lecturer: James Wootton)
      </td>
      <td>
        <a href="https://youtu.be/96a0G4G5ZH8?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR">Lecture Video</a>
      </td>
    </tr>
    <tr>
      <td>
        Lecture 16<br>
        <strong>Superconducting Qubits I: Quantizing a Harmonic Oscillator, Josephson Junctions Part 1</strong><br>
        (Lecturer: Zlatko Minev)
      </td>
      <td>
        <a href="https://youtu.be/eZJjQGu85Ps?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR">Lecture Video</a>
      </td>
      <td rowspan="3">
        <a href="https://github.com/qiskit-community/intro-to-quantum-computing-and-quantum-hardware/blob/master/lectures/introqcqh-lecture-notes-6.pdf?raw=true">Lecture Notes 6</a>
      </td>
      <td rowspan="3">
        <a href="https://github.com/qiskit-community/intro-to-quantum-computing-and-quantum-hardware/blob/master/labs/introqcqh-lab-6.zip?raw=true">Lab 6</a>
      </td>
    </tr>
    <tr>
      <td>
        Lecture 17<br>
        <strong>Superconducting Qubits I: Quantizing a Harmonic Oscillator, Josephson Junctions Part 2</strong><br>
        (Lecturer: Zlatko Minev)
      </td>
      <td>
        <a href="https://youtu.be/SDiiFOham6Y?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR">Lecture Video</a>
      </td>
    </tr>
    <tr>
      <td>
        Lecture 18<br>
        <strong>Superconducting Qubits I: Quantizing a Harmonic Oscillator, Josephson Junctions Part 3</strong><br>
        (Lecturer: Zlatko Minev)
      </td>
      <td>
        <a href="https://youtu.be/hGBAz63NIH8?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR">Lecture Video</a>
      </td>
    </tr>
    <tr>
      <td>
        Lecture 19<br>
        <strong>Superconducting Qubits II: Circuit Quantum Electrodynamics, Readout and Calibration Methods Part 1</strong><br>
        (Lecturer: Zlatko Minev)
      </td>
      <td>
        <a href="https://youtu.be/dmYnfGo-8eM?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR">Lecture Video</a>
      </td>
      <td rowspan="3">
        <a href="https://github.com/qiskit-community/intro-to-quantum-computing-and-quantum-hardware/blob/master/lectures/introqcqh-lecture-notes-7.pdf?raw=true">Lecture Notes 7</a>
      </td>
      <td rowspan="3">
        <a href="https://github.com/qiskit-community/intro-to-quantum-computing-and-quantum-hardware/blob/master/labs/introqcqh-lab-7.zip?raw=true">Lab 7</a>
      </td>
    </tr>
    <tr>
      <td>
        Lecture 20<br>
        <strong>Superconducting Qubits II: Circuit Quantum Electrodynamics, Readout and Calibration Methods Part 2</strong><br>
        (Lecturer: Zlatko Minev)
      </td>
      <td>
        <a href="https://youtu.be/jUPAeOoZpEU?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR">Lecture Video</a>
      </td>
    </tr>
    <tr>
      <td>
        Lecture 21<br>
        <strong>Superconducting Qubits II: Circuit Quantum Electrodynamics, Readout and Calibration Methods Part 3</strong><br>
        (Lecturer: Zlatko Minev)
      </td>
      <td>
        <a href="https://youtu.be/ruFzh1NpNF4?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR">Lecture Video</a>
      </td>
    </tr>
    <tr>
      <td>
        Lecture 22<br>
        <strong>Quantum Chemistry I: Obtaining the Qubit Hamiltonian for H2 and LiH Part 1</strong><br>
        (Lecturer: Antonio Mezzacapo)
      </td>
      <td>
        <a href="https://youtu.be/2XEjrwWhr88?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR">Lecture Video</a>
      </td>
      <td rowspan="3">
        <a href="https://github.com/qiskit-community/intro-to-quantum-computing-and-quantum-hardware/blob/master/lectures/introqcqh-lecture-notes-8.pdf?raw=true">Lecture Notes 8</a>
      </td>
      <td rowspan="3">
        <a href="https://github.com/qiskit-community/intro-to-quantum-computing-and-quantum-hardware/blob/master/labs/introqcqh-lab-8.zip?raw=true">Lab 8</a><br>
        <a href="https://www.youtube.com/watch?v=DMosNL68b6Q&list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR&index=30">Video</a>
      </td>
    </tr>
    <tr>
      <td>
        Lecture 23<br>
        <strong>Quantum Chemistry I: Obtaining the Qubit Hamiltonian for H2 and LiH Part 2</strong><br>
        (Lecturer: Antonio Mezzacapo)
      </td>
      <td>
        <a href="https://youtu.be/DWOfMWPKHDU?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR">Lecture Video</a>
      </td>
    </tr>
    <tr>
      <td>
        Lecture 24<br>
        <strong>Quantum Chemistry I: Obtaining the Qubit Hamiltonian for H2 and LiH Part 3</strong><br>
        (Lecturer: Antonio Mezzacapo)
      </td>
      <td>
        <a href="https://youtu.be/AZQDCWX_aqA?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR">Lecture Video</a>
      </td>
    </tr>
    <tr>
      <td>
        Lecture 25<br>
        <strong>Quantum Chemistry II: Finding the Ground States of H2 and LiH Part 1</strong><br>
        (Lecturer: Abhinav Kandala)
      </td>
      <td>
        <a href="https://youtu.be/p9gScAOvc5I?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR">Lecture Video</a>
      </td>
      <td rowspan="3">
        <a href="https://github.com/qiskit-community/intro-to-quantum-computing-and-quantum-hardware/blob/master/lectures/introqcqh-lecture-notes-9.pdf?raw=true">Lecture Notes 9</a>
      </td>
      <td rowspan="3">
        <a href="https://github.com/qiskit-community/intro-to-quantum-computing-and-quantum-hardware/blob/master/labs/introqcqh-lab-9.zip?raw=true">Lab 9</a>
      </td>
    </tr>
    <tr>
      <td>
        Lecture 26<br>
        <strong>Quantum Chemistry II: Finding the Ground States of H2 and LiH Part 2</strong><br>
        (Lecturer: Abhinav Kandala)
      </td>
      <td>
        <a href="https://youtu.be/_UW6puuGa5E?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR">Lecture Video</a>
      </td>
    </tr>
    <tr>
      <td>
        Lecture 27<br>
        <strong>Quantum Chemistry II: Finding the Ground States of H2 and LiH Part 3</strong><br>
        (Lecturer: Abhinav Kandala)
      </td>
      <td>
        <a href="https://youtu.be/o4BAOKbcd3o?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR">Lecture Video</a>
      </td>
    </tr>
    <tr>
      <td>
        Panel Discussion<br>
        <strong>Careers in Quantum Computing</strong><br>
        (Hosted by Amira Abbas)
      </td>
      <td colspan="3" class="hmerged">
        <a href="https://youtu.be/7dfw8k2p1to?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR">Video</a>
      </td>
    </tr>
  </tbody>
</table>

## Course Description
The structure of the course is as follows:

* Lectures&nbsp;1&nbsp;&ndash;&nbsp;6 provide an introduction to quantum computing and quantum algorithms using quantum circuits. The emphasis here is on understanding how to work with quantum states, and operate on them using quantum circuits.
* Lectures&nbsp;7&nbsp;&ndash;&nbsp;12 are designed to teach Shor's algorithm. The first three lectures focus on building intuition for the quantum Fourier transform and quantum phase estimation, while the next three lectures focus on the implementation of Shor's algorithm using quantum circuits.
* Lectures&nbsp;13&nbsp;&ndash;&nbsp;15 introduce quantum error correction using repetition and surface codes. The lectures show the kinds of errors that can happen during a quantum computation, and methods to do quantum computation in the presence of these errors.
* Lectures&nbsp;16&nbsp;&ndash;&nbsp;21 introduce the hardware used for quantum computation, with emphasis on superconducting qubits. The first three lectures discuss how to build a superconducting transmon quantum bit (qubit) out of an anharmonic oscillator using Josephson junctions, while the next three lectures focus on coupling to the qubit in a circuit quantum electrodynamics architecture.
* Lectures&nbsp;22&nbsp;&ndash;&nbsp;27 introduce the techniques used to solve quantum chemistry problems using gate-based quantum computers, with emphasis on superconducting qubits. The first three lectures describe the structure of quantum chemistry problems and discuss methods for converting these problems into ones that can be mapped onto a gate-based quantum computer, while the next three lectures focus on extracting the best performance from the quantum hardware to solve quantum chemistry problems by implementing variational quantum eigensolvers.

The associated labs are provided as zip files. Each lab comes in a zip file containing the exercises in a Jupyter notebook named `lab-x.ipynb` and solutions in another notebook named `lab-x-solutions.ipynb`. The labs are structured as follows:

* Labs 1 and 2 support the material in lectures&nbsp;1&nbsp;&ndash;&nbsp;6 with hands-on exercises in Qiskit. Lab 1 covers single-qubit and multi-qubit states and quantum teleportation. Lab 2 covers the implementation of Grover's algorithm using quantum circuits.
* Labs 3 and 4 support the material in lectures&nbsp;7&nbsp;&ndash;&nbsp;12 with hands-on exercises in Qiskit. Lab 3 covers the implementation of standard quantum phase estimation, and lab 4 implements Shor's algorithm to factor 15 into 3 and 5.
* Lab 5 supports the material in lectures&nbsp;13&nbsp;&ndash;&nbsp;15 with hands-on exercises in Qiskit. It provides a hands-on exercise on implementing repetition codes and seeing their performance in the presence of noise.
* Labs 6 and 7 support the material in lectures&nbsp;16&nbsp;&ndash;&nbsp;21 with hands-on exercises in Qiskit. Lab 6 provides a hands-on exercise on driving qubits in Rabi and Ramsey experiments to calibrate the qubit's π pulse drive strength and frequency. Lab 7 provides a hands-on exercise on qubit spectroscopy, showing how the qubit transitions 0-1 and 1-2 can be determined.
* Labs 8 and 9 support the material in lectures&nbsp;22&nbsp;&ndash;&nbsp;27 with hands-on exercises in Qiskit. Lab 8 provides a hands-on demonstration of obtaining the qubit operators for simulating the ground state of the molecule LiH. Lab 9 provides a hands-on exercise on preparing trial states for a variational quantum eigensolver, and computing the expectation values of the various Pauli operators from measurement outcomes.


## Contributors
The lectures and labs were prepared and delivered by Abraham Asfaw, Elisa Bäumer, James Wootton, Zlatko Minev, Nicholas Bronn, Antonio Mezzacapo and Abhinav Kandala.

During the delivery of the lectures in 2020 as part of the Qiskit Global Summer School, Brian Ingmanson, Suzie Kirschner and Josie Kies hosted the lectures. Salvador de la Puente González and Luciano Bello built the grading system used in the labs. Josie Kies built the Discord server that supported the community during the Qiskit Global Summer School. Leron Gil and Yaiza Garcia built this website. Amira Abbas hosted the discussion on careers in quantum computing, which included Jay Gambetta, Steve Girvin, John Preskill, Marina Radulaski, Monika Schleier-Smith, Birgitta Whaley. Paul Searle edited the videos.

Special thanks to the 2020 class of IBM Quantum interns and the entire community of the Qiskit Global Summer School 2020 for contributing to the quality of these lectures and labs.

## Usage and Citation
If you use the lectures and labs in your course, you can gain access to the [IBM Quantum Educators Program](https://quantum-computing.ibm.com/programs/educators). Please cite the material as:

> IBM Quantum team, Introduction to Quantum Computing and Quantum Hardware (2020). http://qiskit.org/learn/intro-qc-qh
