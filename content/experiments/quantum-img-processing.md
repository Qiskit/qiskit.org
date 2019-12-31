---
title: Quantum Image Processing
author: Harold Co, Elena Peña Tapia, Nozomi Tanetani, Jean Philippe Arias Zapata, Lucía García Sánchez-Carnerero
description: A quantum approach to image processing (encoding, edge detection & image matching) with a cool application => mapping the Earth at night.
image: /images/experiments/quantum-img-processing/img-candidates.png
to: /experiments/quantum-img-processing
media:
  - /images/experiments/quantum-img-processing/img-candidates.png

source: https://github.com/Shedka/citiesatnight
---
A quantum approach to image processing: encoding, edge detection & image matching with a cool application: *mapping the Earth at night*.

## Application Background and Motivation
Cities at Night (www.citiesatnight.org) is an ongoing project by Alejandro Sanchez de Miguel (U. of Exeter) et al. focused on the creation of a high resolution map of the Earth at night, using color photographs taken by astronauts onboard the ISS.

NASA has a database with almost 1 million cluttered, unlabeled pictures taken from space over the years. In order to create a high resolution world map, these photographs must be matched with their precise location in the globe's surface, a task for which the use of classical machine learning algorithms has been deemed ineffective. The current alternative has been to use citizen science and benefit from the manual matchings carried out by thousands of volunteers, but .... could this approach be improved?

We think the answer is YES!, and for this hackathon we have decided to explore the benefits quantum computing can bring to this and many other computer vision based science intiatives, using current public available tools such as IBM Qiskit.

## Goals
The aim of the project is to develop a Python-based module to perform image matching using quantum computing tools (Qiskit). As an inital approach, the image matching process has been divided into the following tasks:

1. Classical image preparation
2. Quantum encoding
3. Quantum edge detection
4. Quantum image matching

These tasks will be studied in order to fullfill the **main goal of the project: a minimally viable product (MVP) where 3 classical images (1 reference and 2 proposals) are inputted, encoded, compared and matched**; such as the proposal that best fits the reference is matched with it.

## Proposed Implementation
- **Step 1: Image Preparation**
This step involves preparing the inital images to adapt our problem to the scope of the hackathon by:
   - changing from RGB to grayscale format
   - cropping the image to a square
   - reducing the resolution to 32 x 32 pixels (this will later mean using 24 qubits in our computation, with the current limit of the qasm simulator being 32 quibts)
   - centering the city within the image (using centroid)
   - discarding particularly challenging pictures: those that are cropped, taken from a strange perspective....

This is step involves Python classical image processing libraries such as PIL, OpenCV, etc. together with self developed functions.

- **Step 2: Quantum Encoding**
The quantum encoding or Quantum Image Representation (QImR) step involves the transformation of the data from a classical to a quantum image representation model [1]. The chosen quantum representation model is key to determine the types of processing tasks and how well they can be performed. After studying different proposals such as NEQR [2], in order to develop our MVP, we have selected to apply Flexible Representation of Quantum Images (FRQI) [3]. This allows us to encode an image of size *m = n x n* (pixels) into *log2(m)* qubits. One of the drawbacks of this representation is the requirement of *m* gates to perform the encoding of such an image.

Even though the main application has been developed using FRQI, we have looked for alterntives to optimize the number of gates required in our circuit. A suggested alternative is the use of a a "log concave based" encoding, of which we have attempted a proof of concept with a downscaled example.

- **Step 3: Quantum Edge Detection**
In classical image processing, one of the most common steps preceding image matching is edge detection. Several papers have claimed the computational advantage of quantum edge detection compared to the classical counterpart [1], and there have been proposed quantum models that provide a proof of concept such as [1] and [4].  Some other ideas based on the classical approach would be to use quantum support vector machines, inspired by [5].

For this project, we have implemented the work proposed in [1] that allows to detect horizontal and vertical edges, and find vertices by assesing their overlap in order to construct the image's contour.

- **Step 4: Quantum Image Matching**
Image matching involves finding similarities between images. These similiarties range from pixel to pixel differences to morphological properties. The qubits used to encode both the test and reference images represent the density matrices for each image. These density matrices can then be compared via a quantum based similarity test. Specifically, this involves a standard SWAP test [6].

# Framework
- Language: Python3
- Quantum API: Qiskit
- Backend: ibmq_qasm_simulator

# References
- [1] https://arxiv.org/pdf/1801.01465.pdf
- [2] https://arxiv.org/pdf/1812.11042.pdf
- [3] https://www.jstage.jst.go.jp/article/fss/25/0/25_0_185/_pdf
- [4] https://www.researchgate.net/publication/333585825_Quantum_Image_Edge_Detection_Algorithm
- [5] https://pdfs.semanticscholar.org/b1d1/e8a9d6173458687bdfdc5a654423444f15b0.pdf
- [6] https://arxiv.org/abs/1803.04114
