---
title: Introduction to Quantum Computing and Quantum Hardware
tagline: An introduction to the world of quantum computing, with an exploration of some of the key quantum algorithms and their implementations, as well as the quantum hardware that is designed to run these algorithms. The course was first offered during the Qiskit Global Summer School in July 2020 as a two-week intensive summer school.
description: An introduction to the world of quantum computing, with an exploration of some of the key quantum algorithms and their implementations, as well as the quantum hardware that is designed to run these algorithms. The course was first offered during the Qiskit Global Summer School in July 2020 as a two-week intensive summer school.
nav:
  - text: Curriculum
    goTo: '#curriculum'
routeName: learn
---

# About the Course
<p>This course is an introduction to the world of quantum computing, with an exploration of some of the key quantum algorithms and their implementations using quantum circuits, as well as the quantum hardware that is designed to run these algorithms. The course was first offered during the Qiskit Global Summer School in July 2020 as a two-week intensive summer school.</p><br/><br/>

<p>There are 27 lectures in this course, which cover the material in 9 lecture notes and 9 associated labs. The textbook for the course is available online: <a href='http://qiskit.org/textbook'>Learn Quantum Computation using Qiskit</a>.</p><br/><br/>

<p>The structure of the course is as follows:</p><br/>

<style>
ul.coursedesc {
  list-style-type: square;
  line-height: 140%;
  width: 100%;
}
ul.coursedesc li {
margin: 10px 0;
}
</style>
<ul class='coursedesc'>
  <li>Lectures 1 &ndash; 6 provide an introduction to quantum computing and quantum algorithms using quantum circuits. The emphasis here is on understanding how to work with quantum states, and operate on them using quantum circuits.</li>
  <li>Lectures 7 &ndash; 12 are designed to teach Shor's algorithm. The first three lectures focus on building intuition for the quantum Fourier transform and quantum phase estimation, while the next three lectures focus on the implementation of Shor's algorithm using quantum circuits.</li>
  <li>Lectures 13 &ndash; 15 introduce quantum error correction using repetition and surface codes. The lectures show the kinds of errors that can happen during a quantum computation, and methods to do quantum computation in the presence of these errors.</li>
  <li>Lectures 16 &ndash; 21 introduce the hardware used for quantum computation, with emphasis on superconducting qubits. The first three lectures discuss how to build a superconducting transmon quantum bit (qubit) out of an anharmonic oscillator using Josephson junctions, while the next three lectures focus on coupling to the qubit in a circuit quantum electrodynamics architecture.</li>
  <li>Lectures 22 &ndash; 27 introduce the techniques used to solve quantum chemistry problems using gate-based quantum computers, with emphasis on superconducting qubits. The first three lectures describe the structure of quantum chemistry problems and discuss methods for converting these problems into ones that can be mapped onto a gate-based quantum computer, while the next three lectures focus on extracting the best performance from the quantum hardware to solve quantum chemistry problems by implementing variational quantum eigensolvers.</li>  
</ul>

<p>The associated labs are structured as follows:</p><br/>

<ul class='coursedesc'>
  <li>Labs 1 and 2 support the material in lectures 1 &ndash; 6 with hands-on exercises in Qiskit. Lab 1 covers single-qubit and multi-qubit states and quantum teleportation. Lab 2 covers the implementation of Grover's algorithm using quantum circuits.</li>
  <li>Labs 3 and 4 support the material in lectures 7 &ndash; 12 with hands-on exercises in Qiskit. Lab 3 asks students to implement the standard quantum phase estimation algorithm, and lab 4 asks students to implement Shor's algorithm to factor 15 into 3 and 5.</li>
  <li>Lab 5 supports the material in lectures 13 &ndash; 15 with hands-on exercises in Qiskit. It provides a hands-on exercise on implementing repetition codes and seeing their performance in the presence of noise.</li>
  <li>Labs 6 and 7 support the material in lectures 16 &ndash; 21 with hands-on exercises in Qiskit. Lab 6 provides a hands-on exercise on driving qubits in Rabi and Ramsey experiments to calibrate the qubit's $\pi$ pulse drive strength and frequency. Lab 7 provides a hands-on exercise on qubit spectroscopy, showing how the qubit transitions 0-1 and 1-2 can be determined.</li>
  <li>Labs 8 and 9 support the material in lectures 22 &ndash; 27 with hands-on exercises in Qiskit. Lab 8 provides a hands-on demonstration of obtaining the qubit operators for simulating the ground state of the molecule LiH. Lab 9 provides a hands-on exercise on preparing trial states for a variational quantum eigensolver, and computing the expectation values of the various Pauli operators from measurement outcomes.</li>  
</ul>

## Prerequisites
<p>In order to make the best out of these lectures, we strongly recommend reviewing linear algebra and brushing up on Python. Here are some recommended materials:</p><br/>

<style>
#prereqs {
  list-style-type: square;
  width: 100%;
}
#prereqs li{
margin: 10px 0;
}

</style>
<ul id='prereqs'>
<li>Multiplying two matrices, introductory linear algebra: <a href='https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:matrices/x9e81a4f98389efdf:multiplying-matrices-by-matrices/v/matrix-multiplication-intro'>[Khan Academy]</a> <a href='https://qiskit.org/textbook/ch-prerequisites/linear_algebra.html'>[Linear algebra prerequisites in the Qiskit Textbook]</a></li>
<li>Basic familiarity with Python: <a href='https://qiskit.org/textbook/ch-prerequisites/python-and-jupyter-notebooks.html'>[Python prerequisites in the Qiskit Textbook]</a></li>
</ul>

## Curriculum
<style>
#resources td, #resources th {
  border: 1px solid #ddd;
  padding: 8px;
  vertical-align: middle;
  line-height: 140%;
}

#resources span.lectitle {
  font-weight: bold;
}

#resources td.hmerged {
  text-align: center;
}

#resources {
  width: 120%;
}

</style>
<table id='resources'>
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
            <td>Lecture 1<br/><span class='lectitle'>Qubits and Quantum States, Quantum Circuits, Measurements Part 1</span><br/>(Lecturer: Elisa B&auml;umer)</td>
            <td><a href='https://youtu.be/NZD9APb7ZtY?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR'>Lecture Video</a></td>
            <td rowspan=3><a href='https://github.com/qiskit-community/intro-to-quantum-computing-and-quantum-hardware/blob/master/lectures/introqcqh-lecture-notes-1.pdf?raw=true'>Lecture Notes 1</a></td>
            <td rowspan=3><a href='#'>Lab 1</a></td>
        </tr>
        <tr>
            <td>Lecture 2<br/><span class='lectitle'>Qubits and Quantum States, Quantum Circuits, Measurements Part 2</span><br/>(Lecturer: Elisa B&auml;umer)</td>
            <td><a href='https://youtu.be/SlZoTjkPy7o?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR'>Lecture Video</a></td>
        </tr>
        <tr>
            <td>Lecture 3<br/><span class='lectitle'>Qubits and Quantum States, Quantum Circuits, Measurements Part 3</span><br/>(Lecturer: Elisa B&auml;umer)</td>
            <td><a href='https://youtu.be/9MpSQglnqI0?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR'>Lecture Video</a></td>
        </tr>
        <tr>
            <td>Lecture 4<br/><span class='lectitle'>Writing and Running Quantum Programs Part 1</span><br/>(Lecturer: Elisa B&auml;umer)</td>
            <td><a href='https://youtu.be/qrYVO9-dxLE?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR'>Lecture Video</a></td>
            <td rowspan=3><a href='https://github.com/qiskit-community/intro-to-quantum-computing-and-quantum-hardware/blob/master/lectures/introqcqh-lecture-notes-2.pdf?raw=true'>Lecture Notes 2</a></td>
            <td rowspan=3><a href='#'>Lab 2</a></td>
        </tr>
        <tr>
            <td>Lecture 5<br/><span class='lectitle'>Writing and Running Quantum Programs Part 2</span><br/>(Lecturer: Elisa B&auml;umer)</td>
            <td><a href='https://youtu.be/iJX794qJIpY?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR'>Lecture Video</a></td>
        </tr>
        <tr>
            <td>Lecture 6<br/><span class='lectitle'>Writing and Running Quantum Programs Part 3</span><br/>(Lecturer: Elisa B&auml;umer)</td>
            <td><a href='https://youtu.be/enYP9TaDeJI?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR'>Lecture Video</a></td>
        </tr>
        <tr>
            <td>Lecture 7<br/><span class='lectitle'>Shor's Algorithm I: Quantum Fourier Transform, Quantum Phase Estimation Part 1</span><br/>(Lecturer: Abraham Asfaw)</td>
            <td><a href='https://youtu.be/mAHC1dWKNYE?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR'>Lecture Video</a></td>
            <td rowspan=3><a href='https://github.com/qiskit-community/intro-to-quantum-computing-and-quantum-hardware/blob/master/lectures/introqcqh-lecture-notes-3.pdf?raw=true'>Lecture Notes 3</a></td>
            <td rowspan=3><a href='#'>Lab 3</a></td>
        </tr>
        <tr>
            <td>Lecture 8<br/><span class='lectitle'>Shor's Algorithm I: Quantum Fourier Transform, Quantum Phase Estimation Part 2</span><br/>(Lecturer: Abraham Asfaw)</td>
            <td><a href='https://youtu.be/pq2jkfJlLmY?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR'>Lecture Video</a></td>
        </tr>
        <tr>
            <td>Lecture 9<br/><span class='lectitle'>Shor's Algorithm I: Quantum Fourier Transform, Quantum Phase Estimation Part 3</span><br/>(Lecturer: Abraham Asfaw)</td>
            <td><a href='https://youtu.be/5kcoaanYyZw?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR'>Lecture Video</a></td>
        </tr>
        <tr>
            <td>Lecture 10<br/><span class='lectitle'>Shor's Algorithm II: From Factoring to Period-Finding, Writing the Quantum Program Part 1</span><br/>(Lecturer: Abraham Asfaw)</td>
            <td><a href='https://youtu.be/YpcT8u2a2jc?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR'>Lecture Video</a></td>
            <td rowspan=3><a href='https://github.com/qiskit-community/intro-to-quantum-computing-and-quantum-hardware/blob/master/lectures/introqcqh-lecture-notes-4.pdf?raw=true'>Lecture Notes 4</a></td>
            <td rowspan=3><a href='#'>Lab 4</a></td>
        </tr>
        <tr>
            <td>Lecture 11<br/><span class='lectitle'>Shor's Algorithm II: From Factoring to Period-Finding, Writing the Quantum Program Part 2</span><br/>(Lecturer: Abraham Asfaw)</td>
            <td><a href='https://youtu.be/dscRoTBPeso?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR'>Lecture Video</a></td>
        </tr>
        <tr>
            <td>Lecture 12<br/><span class='lectitle'>Shor's Algorithm II: From Factoring to Period-Finding, Writing the Quantum Program Part 3</span><br/>(Lecturer: Abraham Asfaw)</td>
            <td><a href='https://youtu.be/IFmkzWF-S2k?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR'>Lecture Video</a></td>
        </tr>
        <tr>
            <td>Lecture 13<br/><span class='lectitle'>Quantum Error Correction using Repetition Codes Part 1</span><br/>(Lecturer: James Wootton)</td>
            <td><a href='https://youtu.be/ZY8PddknCos?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR'>Lecture Video</a></td>
            <td rowspan=3><a href='https://github.com/qiskit-community/intro-to-quantum-computing-and-quantum-hardware/blob/master/lectures/introqcqh-lecture-notes-5.pdf?raw=true'>Lecture Notes 5</a></td>
            <td rowspan=3><a href='#'>Lab 5</a></td>
        </tr>
        <tr>
            <td>Lecture 14<br/><span class='lectitle'>Quantum Error Correction using Repetition Codes Part 2</span><br/>(Lecturer: James Wootton)</td>
            <td><a href='https://youtu.be/SHr3uSv9Bts?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR'>Lecture Video</a></td>
        </tr>
        <tr>
            <td>Lecture 15<br/><span class='lectitle'>Quantum Error Correction using Repetition Codes Part 3</span><br/>(Lecturer: James Wootton)</td>
            <td><a href='https://youtu.be/96a0G4G5ZH8?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR'>Lecture Video</a></td>
        </tr>
        <tr>
            <td>Lecture 16<br/><span class='lectitle'>Superconducting Qubits I: Quantizing a Harmonic Oscillator, Josephson Junctions Part 1</span><br/>(Lecturer: Zlatko Minev)</td>
            <td><a href='https://youtu.be/eZJjQGu85Ps?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR'>Lecture Video</a></td>
            <td rowspan=3><a href='https://github.com/qiskit-community/intro-to-quantum-computing-and-quantum-hardware/blob/master/lectures/introqcqh-lecture-notes-6.pdf?raw=true'>Lecture Notes 6</a></td>
            <td rowspan=3><a href='#'>Lab 6</a></td>
        </tr>
        <tr>
            <td>Lecture 17<br/><span class='lectitle'>Superconducting Qubits I: Quantizing a Harmonic Oscillator, Josephson Junctions Part 2</span><br/>(Lecturer: Zlatko Minev)</td>
            <td><a href='https://youtu.be/SDiiFOham6Y?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR'>Lecture Video</a></td>
        </tr>
        <tr>
            <td>Lecture 18<br/><span class='lectitle'>Superconducting Qubits I: Quantizing a Harmonic Oscillator, Josephson Junctions Part 3</span><br/>(Lecturer: Zlatko Minev)</td>
            <td><a href='https://youtu.be/hGBAz63NIH8?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR'>Lecture Video</a></td>
        </tr>
        <tr>
            <td>Lecture 19<br/><span class='lectitle'>Superconducting Qubits II: Circuit Quantum Electrodynamics, Readout and Calibration Methods Part 1</span><br/>(Lecturer: Zlatko Minev)</td>
            <td><a href='https://youtu.be/f1GpzZYIVIE?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR'>Lecture Video</a></td>
            <td rowspan=3><a href='https://github.com/qiskit-community/intro-to-quantum-computing-and-quantum-hardware/blob/master/lectures/introqcqh-lecture-notes-7.pdf?raw=true'>Lecture Notes 7</a></td>
            <td rowspan=3><a href='#'>Lab 7</a></td>
        </tr>
        <tr>
            <td>Lecture 20<br/><span class='lectitle'>Superconducting Qubits II: Circuit Quantum Electrodynamics, Readout and Calibration Methods Part 2</span><br/>(Lecturer: Zlatko Minev)</td>
            <td><a href='https://youtu.be/jUPAeOoZpEU?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR'>Lecture Video</a></td>
        </tr>
        <tr>
            <td>Lecture 21<br/><span class='lectitle'>Superconducting Qubits II: Circuit Quantum Electrodynamics, Readout and Calibration Methods Part 3</span><br/>(Lecturer: Zlatko Minev)</td>
            <td><a href='https://youtu.be/ruFzh1NpNF4?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR'>Lecture Video</a></td>
        </tr>
        <tr>
            <td>Lecture 22<br/><span class='lectitle'>Quantum Chemistry I: Obtaining the Qubit Hamiltonian for H2 and LiH Part 1</span><br/>(Lecturer: Antonio Mezzacapo)</td>
            <td><a href='https://youtu.be/2XEjrwWhr88?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR'>Lecture Video</a></td>
            <td rowspan=3><a href='https://github.com/qiskit-community/intro-to-quantum-computing-and-quantum-hardware/blob/master/lectures/introqcqh-lecture-notes-8.pdf?raw=true'>Lecture Notes 8</a></td>
            <td rowspan=3><a href='#'>Lab 8</a></td>
        </tr>
        <tr>
            <td>Lecture 23<br/><span class='lectitle'>Quantum Chemistry I: Obtaining the Qubit Hamiltonian for H2 and LiH Part 2</span><br/>(Lecturer: Antonio Mezzacapo)</td>
            <td><a href='https://youtu.be/DWOfMWPKHDU?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR'>Lecture Video</a></td>
        </tr>
        <tr>
            <td>Lecture 24<br/><span class='lectitle'>Quantum Chemistry I: Obtaining the Qubit Hamiltonian for H2 and LiH Part 3</span><br/>(Lecturer: Antonio Mezzacapo)</td>
            <td><a href='https://youtu.be/AZQDCWX_aqA?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR'>Lecture Video</a></td>
        </tr>
        <tr>
            <td>Lecture 25<br/><span class='lectitle'>Quantum Chemistry II: Finding the Ground States of H2 and LiH Part 1</span><br/>(Lecturer: Abhinav Kandala)</td>
            <td><a href='https://youtu.be/p9gScAOvc5I?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR'>Lecture Video</a></td>
            <td rowspan=3><a href='https://github.com/qiskit-community/intro-to-quantum-computing-and-quantum-hardware/blob/master/lectures/introqcqh-lecture-notes-9.pdf?raw=true'>Lecture Notes 9</a></td>
            <td rowspan=3><a href='#'>Lab 9</a></td>
        </tr>
        <tr>
            <td>Lecture 26<br/><span class='lectitle'>Quantum Chemistry II: Finding the Ground States of H2 and LiH Part 2</span><br/>(Lecturer: Abhinav Kandala)</td>
            <td><a href='https://youtu.be/_UW6puuGa5E?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR'>Lecture Video</a></td>
        </tr>
        <tr>
            <td>Lecture 27<br/><span class='lectitle'>Quantum Chemistry II: Finding the Ground States of H2 and LiH Part 3</span><br/>(Lecturer: Abhinav Kandala)</td>
            <td><a href='https://youtu.be/o4BAOKbcd3o?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR'>Lecture Video</a></td>
        </tr>
        <tr>
        	<td>Panel Discussion<br/><span class='lectitle'>Careers in Quantum Computing</span><br/>(Hosted by Amira Abbas)</td>
            <td colspan=3 class='hmerged'><a href='https://youtu.be/7dfw8k2p1to?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR'>Video</a></td>
        </tr>
    </tbody>
</table>

## Contributors
The lectures and labs were prepared and delivered by Abraham Asfaw, Elisa B&auml;umer, James Wootton, Zlatko Minev, Antonio Mezzacapo and Abhinav Kandala. Nicholas Bronn created labs 6 and 7.
<br/><br/>
During the delivery of the lectures in 2020 as part of the Qiskit Global Summer School, Brian Ingmanson, Susan Kirschner and Josie Kies hosted the lectures. Amira Abbas hosted the discussion on careers in quantum computing, which included Jay Gambetta, Steve Girvin, John Preskill, Marina Radulaski, Monika Schleier-Smith, Brigitta Whaley. Paul Searle edited the videos as they appear above.

## Usage and Citation
If you use the lectures and labs in your course, you can gain access to the [IBM Quantum Educators Program](https://quantum-computing.ibm.com/programs/educators). Please cite the material as <br/><br/>

> Introduction to Quantum Computing and Quantum Hardware; IBM Quantum team (2020).

<br/><br/>